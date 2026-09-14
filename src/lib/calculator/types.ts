export interface CalculatorInputs {
  annualSupport: number;
  supportYears: number;
  mortgage: number;
  otherDebt: number;
  futureExpenses: number;
  finalExpenses: number;
  existingCoverage: number;
  allocatedSavings: number;
}

export interface CalculationResult {
  annualSupport: number;
  supportYears: number;
  incomeSupportTotal: number;
  mortgage: number;
  otherDebt: number;
  futureExpenses: number;
  finalExpenses: number;
  totalModeledNeeds: number;
  existingCoverage: number;
  allocatedSavings: number;
  resources: number;
  estimatedAdditionalCoverage: number;
  isZeroResult: boolean;
  isAllZeroScenario: boolean;
  methodologyVersion: "needs_v1";
  offerId: "life_needs_calculator_v1";
}

export interface ReviewRequestPayload {
  fullName: string;
  stateResidence: string;
  contactMethod: "phone" | "email";
  phoneNumber?: string;
  emailAddress?: string;
  includeFinancialDetails: boolean;
  inputs?: CalculatorInputs;
  result?: CalculationResult;
  utmSource?: string;
  utmCampaign?: string;
  utmContent?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}
