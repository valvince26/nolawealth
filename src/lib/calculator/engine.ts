import { CalculatorInputs, CalculationResult, ValidationResult } from "./types";

export const METHODOLOGY_VERSION = "needs_v1" as const;
export const OFFER_ID = "life_needs_calculator_v1" as const;
export const MAX_SAFE_MONETARY_INPUT = 100_000_000; // $100 Million technical limit
export const MAX_SAFE_YEARS = 50; // 50 years max support horizon

/**
 * Validates calculator inputs according to business rules.
 */
export function validateInputs(inputs: Partial<CalculatorInputs>): ValidationResult {
  const errors: Record<string, string> = {};

  const checkNumber = (val: unknown, key: string, label: string, maxVal = MAX_SAFE_MONETARY_INPUT) => {
    if (val === undefined || val === null || val === "") {
      errors[key] = `${label} is required. Enter an amount or 0.`;
      return;
    }
    const num = Number(val);
    if (isNaN(num) || !isFinite(num)) {
      errors[key] = `Please enter a valid numeric amount for ${label.toLowerCase()}.`;
      return;
    }
    if (num < 0) {
      errors[key] = `${label} cannot be negative.`;
      return;
    }
    if (num > maxVal) {
      errors[key] = `${label} exceeds the maximum supported limit of $${maxVal.toLocaleString()}.`;
      return;
    }
  };

  checkNumber(inputs.annualSupport, "annualSupport", "Annual income support");
  checkNumber(inputs.supportYears, "supportYears", "Support years", MAX_SAFE_YEARS);
  checkNumber(inputs.mortgage, "mortgage", "Mortgage balance");
  checkNumber(inputs.otherDebt, "otherDebt", "Other debts");
  checkNumber(inputs.futureExpenses, "futureExpenses", "Additional future expenses");
  checkNumber(inputs.finalExpenses, "finalExpenses", "Final expenses");
  checkNumber(inputs.existingCoverage, "existingCoverage", "Existing life insurance");
  checkNumber(inputs.allocatedSavings, "allocatedSavings", "Allocated savings");

  // Cross-field validation for Income Support
  const annual = Number(inputs.annualSupport || 0);
  const years = Number(inputs.supportYears || 0);

  if (annual > 0 && years < 1) {
    errors["supportYears"] = "Support duration must be at least 1 year when an annual income support amount is entered.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Pure calculation function implementing needs_v1 methodology.
 */
export function calculateNeeds(rawInputs: CalculatorInputs): CalculationResult {
  const validation = validateInputs(rawInputs);
  if (!validation.isValid) {
    const firstError = Object.values(validation.errors)[0];
    throw new Error(`Invalid calculator inputs: ${firstError}`);
  }

  const annualSupport = Math.round(Math.max(0, Number(rawInputs.annualSupport)));
  const supportYears = Math.round(Math.max(0, Number(rawInputs.supportYears)));
  const mortgage = Math.round(Math.max(0, Number(rawInputs.mortgage)));
  const otherDebt = Math.round(Math.max(0, Number(rawInputs.otherDebt)));
  const futureExpenses = Math.round(Math.max(0, Number(rawInputs.futureExpenses)));
  const finalExpenses = Math.round(Math.max(0, Number(rawInputs.finalExpenses)));
  const existingCoverage = Math.round(Math.max(0, Number(rawInputs.existingCoverage)));
  const allocatedSavings = Math.round(Math.max(0, Number(rawInputs.allocatedSavings)));

  const incomeSupportTotal = annualSupport * supportYears;
  const totalModeledNeeds = incomeSupportTotal + mortgage + otherDebt + futureExpenses + finalExpenses;
  const resources = existingCoverage + allocatedSavings;
  const estimatedAdditionalCoverage = Math.max(0, totalModeledNeeds - resources);

  const isAllZeroScenario =
    annualSupport === 0 &&
    mortgage === 0 &&
    otherDebt === 0 &&
    futureExpenses === 0 &&
    finalExpenses === 0 &&
    existingCoverage === 0 &&
    allocatedSavings === 0;

  const isZeroResult = resources >= totalModeledNeeds;

  return {
    annualSupport,
    supportYears,
    incomeSupportTotal,
    mortgage,
    otherDebt,
    futureExpenses,
    finalExpenses,
    totalModeledNeeds,
    existingCoverage,
    allocatedSavings,
    resources,
    estimatedAdditionalCoverage,
    isZeroResult,
    isAllZeroScenario,
    methodologyVersion: METHODOLOGY_VERSION,
    offerId: OFFER_ID,
  };
}
