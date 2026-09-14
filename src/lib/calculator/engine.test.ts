import { calculateNeeds, validateInputs } from "./engine";
import { CalculatorInputs } from "./types";

/**
 * Node.js Native Test Runner Suite for Life Insurance Needs Calculator Engine
 */

function assertEqual(actual: unknown, expected: unknown, testName: string) {
  if (actual !== expected) {
    throw new Error(`FAIL [${testName}]: Expected ${expected}, but got ${actual}`);
  }
  console.log(`✓ PASS [${testName}]`);
}

function runTests() {
  console.log("==========================================");
  console.log("Running Life Insurance Needs Calculator Tests");
  console.log("==========================================");

  // Test A: Standard Specified Scenario
  {
    const inputA: CalculatorInputs = {
      annualSupport: 40000,
      supportYears: 15,
      mortgage: 200000,
      otherDebt: 10000,
      futureExpenses: 40000,
      finalExpenses: 10000,
      existingCoverage: 100000,
      allocatedSavings: 50000,
    };
    const resA = calculateNeeds(inputA);
    assertEqual(resA.incomeSupportTotal, 600000, "Test A - incomeSupportTotal");
    assertEqual(resA.totalModeledNeeds, 860000, "Test A - totalModeledNeeds");
    assertEqual(resA.resources, 150000, "Test A - resources");
    assertEqual(resA.estimatedAdditionalCoverage, 710000, "Test A - estimatedAdditionalCoverage");
  }

  // Test B: Resources Equal Modeled Needs
  {
    const inputB: CalculatorInputs = {
      annualSupport: 20000,
      supportYears: 10,
      mortgage: 100000,
      otherDebt: 0,
      futureExpenses: 0,
      finalExpenses: 0,
      existingCoverage: 200000,
      allocatedSavings: 100000,
    };
    const resB = calculateNeeds(inputB);
    assertEqual(resB.totalModeledNeeds, 300000, "Test B - totalModeledNeeds");
    assertEqual(resB.resources, 300000, "Test B - resources");
    assertEqual(resB.estimatedAdditionalCoverage, 0, "Test B - estimatedAdditionalCoverage");
    assertEqual(resB.isZeroResult, true, "Test B - isZeroResult");
  }

  // Test C: Resources Exceed Modeled Needs
  {
    const inputC: CalculatorInputs = {
      annualSupport: 10000,
      supportYears: 5,
      mortgage: 50000,
      otherDebt: 0,
      futureExpenses: 0,
      finalExpenses: 0,
      existingCoverage: 200000,
      allocatedSavings: 50000,
    };
    const resC = calculateNeeds(inputC);
    assertEqual(resC.estimatedAdditionalCoverage, 0, "Test C - estimatedAdditionalCoverage never negative");
    assertEqual(resC.isZeroResult, true, "Test C - isZeroResult");
  }

  // Test D: All Values Explicitly Zero
  {
    const inputD: CalculatorInputs = {
      annualSupport: 0,
      supportYears: 0,
      mortgage: 0,
      otherDebt: 0,
      futureExpenses: 0,
      finalExpenses: 0,
      existingCoverage: 0,
      allocatedSavings: 0,
    };
    const resD = calculateNeeds(inputD);
    assertEqual(resD.totalModeledNeeds, 0, "Test D - totalModeledNeeds");
    assertEqual(resD.resources, 0, "Test D - resources");
    assertEqual(resD.estimatedAdditionalCoverage, 0, "Test D - estimatedAdditionalCoverage");
    assertEqual(resD.isAllZeroScenario, true, "Test D - isAllZeroScenario");
  }

  // Test E: Validation for Negative, Non-Finite, and Excessive Values
  {
    const negVal = validateInputs({ annualSupport: -500, supportYears: 5 });
    assertEqual(negVal.isValid, false, "Test E - reject negative values");

    const nonFinite = validateInputs({ annualSupport: NaN, supportYears: 5 });
    assertEqual(nonFinite.isValid, false, "Test E - reject NaN values");

    const excess = validateInputs({ annualSupport: 200_000_000, supportYears: 5 });
    assertEqual(excess.isValid, false, "Test E - reject values over $100M limit");

    const missingYears = validateInputs({ annualSupport: 50000, supportYears: 0 });
    assertEqual(missingYears.isValid, false, "Test E - require years >= 1 when annualSupport > 0");
  }

  // Test F: Editing Answers and Recalculation Fidelity
  {
    const initial: CalculatorInputs = {
      annualSupport: 30000,
      supportYears: 10,
      mortgage: 150000,
      otherDebt: 0,
      futureExpenses: 0,
      finalExpenses: 10000,
      existingCoverage: 50000,
      allocatedSavings: 0,
    };
    const res1 = calculateNeeds(initial);
    assertEqual(res1.estimatedAdditionalCoverage, 410000, "Test F - initial calculation");

    // Edit answers
    const edited: CalculatorInputs = {
      ...initial,
      existingCoverage: 150000, // Increase coverage
    };
    const res2 = calculateNeeds(edited);
    assertEqual(res2.estimatedAdditionalCoverage, 310000, "Test F - updated calculation after editing");
  }

  console.log("==========================================");
  console.log("All Calculator Engine Tests Passed Successfully!");
  console.log("==========================================");
}

runTests();
