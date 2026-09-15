"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { calculateNeeds, validateInputs } from "@/lib/calculator/engine";
import { CalculatorInputs, CalculationResult } from "@/lib/calculator/types";
import { submitLead } from "@/lib/submitLead";
import HoneypotField from "@/components/HoneypotField";

export default function CalculatorLandingPage() {
  const router = useRouter();

  // Wizard Step State (1 to 4, or 5 for Results View)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Calculator Monetary & Numeric Inputs
  const [inputs, setInputs] = useState<CalculatorInputs>({
    annualSupport: 0,
    supportYears: 0,
    mortgage: 0,
    otherDebt: 0,
    futureExpenses: 0,
    finalExpenses: 0,
    existingCoverage: 0,
    allocatedSavings: 0,
  });

  // Radio selection helper for Income Support choice
  const [hasIncomeSupportChoice, setHasIncomeSupportChoice] = useState<"yes" | "no" | null>(null);

  // Validation errors per step
  const [stepErrors, setStepErrors] = useState<Record<string, string>>({});

  // Result state
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showMethodologyDrawer, setShowMethodologyDrawer] = useState(false);

  // Review-Request Form State
  const [fullName, setFullName] = useState("");
  const [stateResidence, setStateResidence] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — see HoneypotField
  const [contactMethod, setContactMethod] = useState<"phone" | "email">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [includeFinancialDetails, setIncludeFinancialDetails] = useState(false);

  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Handler for numerical input changes
  const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
    setStepErrors((prev) => ({ ...prev, [field]: "" }));
    const cleanValue = value.replace(/[^0-9]/g, "");
    const num = cleanValue === "" ? 0 : Number(cleanValue);
    setInputs((prev) => ({ ...prev, [field]: num }));
  };

  // Step 1 Validation & Progression
  const handleNextStep1 = () => {
    const errors: Record<string, string> = {};

    if (hasIncomeSupportChoice === null) {
      errors["annualSupport"] = "Please select whether your family would need additional income support.";
      setStepErrors(errors);
      return;
    }

    if (hasIncomeSupportChoice === "no") {
      setInputs((prev) => ({ ...prev, annualSupport: 0, supportYears: 0 }));
      setCurrentStep(2);
      return;
    }

    if (inputs.annualSupport <= 0) {
      errors["annualSupport"] = "Please enter an annual income support amount greater than $0.";
    }

    if (inputs.supportYears < 1) {
      errors["supportYears"] = "Support duration must be at least 1 year.";
    }

    if (Object.keys(errors).length > 0) {
      setStepErrors(errors);
      return;
    }

    setStepErrors({});
    setCurrentStep(2);
  };

  // Step 2 Validation & Progression
  const handleNextStep2 = () => {
    setStepErrors({});
    setCurrentStep(3);
  };

  // Step 3 Validation & Progression
  const handleNextStep3 = () => {
    setStepErrors({});
    setCurrentStep(4);
  };

  // Step 4 Completion & Calculation Execution
  const handleCalculate = () => {
    const validation = validateInputs(inputs);
    if (!validation.isValid) {
      setStepErrors(validation.errors);
      return;
    }

    try {
      const calcResult = calculateNeeds(inputs);
      setResult(calcResult);
      setCurrentStep(5); // Move to Results Screen
      setStepErrors({});
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Calculation failed.";
      setStepErrors({ calculation: msg });
    }
  };

  // Start Over with Confirmation
  const handleStartOver = () => {
    if (confirm("Are you sure you want to clear your answers and start over?")) {
      setInputs({
        annualSupport: 0,
        supportYears: 0,
        mortgage: 0,
        otherDebt: 0,
        futureExpenses: 0,
        finalExpenses: 0,
        existingCoverage: 0,
        allocatedSavings: 0,
      });
      setHasIncomeSupportChoice(null);
      setResult(null);
      setCurrentStep(1);
      setStepErrors({});
    }
  };

  // Review-Request Form Submission
  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!fullName.trim()) {
      setFormError("Please enter your full legal name.");
      return;
    }

    if (!stateResidence) {
      setFormError("Please select your state of residence.");
      return;
    }

    if (contactMethod === "phone") {
      const cleanPhone = phoneNumber.replace(/\D/g, "");
      if (!cleanPhone || cleanPhone.length < 10) {
        setFormError("Please enter a valid 10-digit phone number.");
        return;
      }
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailAddress.trim() || !emailRegex.test(emailAddress)) {
        setFormError("Please enter a valid email address.");
        return;
      }
    }

    setFormSubmitting(true);

    // Routed through submitLead -> /api/lead, the same real capture path every other
    // form on this site uses. This previously POSTed to a Next.js API route
    // (/api/life-insurance-calculator/submit), which cannot exist: next.config.ts
    // sets `output: "export"`, so the build silently drops API routes from the
    // static export -- it prints them as dynamic, succeeds, and emits no api/
    // directory. Deployed, every submission would have hit a 404 behind a green
    // build. The server-side recalculation that route performed was worth keeping
    // and now lives in core/nola_needs_calculator_v1.cjs on the server that serves
    // /api/lead.
    const ok = await submitLead("life-insurance-calculator", {
      name: fullName.trim(),
      email: contactMethod === "email" ? emailAddress.trim() : "",
      phone: contactMethod === "phone" ? phoneNumber.trim() : "",
      state: stateResidence,
      contactMethod,
      includeFinancialDetails,
      website, // honeypot — see HoneypotField
      inputs: includeFinancialDetails ? inputs : undefined,
      result: includeFinancialDetails ? result || undefined : undefined,
    });

    if (ok) {
      router.push("/life-insurance-calculator/thank-you");
    } else {
      // Never route to the thank-you page on failure -- it promises an advisor
      // review we cannot deliver for a request that was never received.
      setFormError(
        "We couldn't submit your request. Please call (504) 891-2000 or email marcus.still@nolawealthfinancial.com and we'll take your request directly."
      );
      setFormSubmitting(false);
    }
  };

  return (
    <div className="bg-nola-cream text-nola-charcoal font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-nola-gold selection:text-nola-navyDeep">
      
      {/* MINIMAL HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-nola-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/img/nola-8b3100126fd5.png"
              alt="Nola Wealth Financial Emblem & Wordmark"
              width={220}
              height={56}
              className="h-14 w-auto object-contain transition-transform group-hover:scale-[1.01]"
              priority
              unoptimized
            />
            <div className="hidden sm:block border-l border-nola-border pl-3 text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-nola-gold block">Life Advisory</span>
              <span className="text-xs text-nola-muted font-medium">Needs Calculator</span>
            </div>
          </Link>

          <a
            href="#calculator"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded text-xs sm:text-sm font-semibold tracking-wide text-nola-navyDeep bg-nola-gold hover:bg-nola-goldHover transition-all shadow-sm active:scale-[0.98]"
          >
            Start My Estimate
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-white pt-8 pb-12 lg:py-16 border-b border-nola-border overflow-hidden">
        <div className="absolute inset-0 hero-glow pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-nola-sand border border-nola-goldBorder/60 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-nola-gold"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-nola-navy">
                FREE LIFE INSURANCE NEEDS CALCULATOR
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-nola-navy mb-5 tracking-tight leading-tight">
              How Much Life Insurance Might Your Family Need?
            </h1>

            <p className="text-base sm:text-lg text-nola-muted leading-relaxed mb-6 max-w-2xl mx-auto">
              Explore the income, obligations, and future expenses you want to help protect. Get a simplified estimate, then decide whether you’d like to review it with our team.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-nola-navy">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-nola-sand border border-nola-border">
                <svg className="w-4 h-4 text-nola-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                No signup required to see your estimate
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-nola-sand border border-nola-border">
                <svg className="w-4 h-4 text-nola-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/></svg>
                Estimates a coverage amount—not a policy’s price
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* MAIN CALCULATOR CONTAINER */}
      <section className="py-12 lg:py-16 bg-nola-cream" id="calculator">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-xl shadow-xl border border-nola-border p-6 sm:p-10 relative">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-nola-gold via-nola-goldLight to-nola-gold rounded-t-xl"></div>

            {/* CALCULATOR WIZARD STEPS 1 TO 4 */}
            {currentStep <= 4 && (
              <div>
                {/* STEP PROGRESS BAR */}
                <div className="mb-8">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-nola-muted mb-2">
                    <span className="text-nola-gold font-bold">Step {currentStep} of 4</span>
                    <span>
                      {currentStep === 1 && "Income Support"}
                      {currentStep === 2 && "Mortgage & Debts"}
                      {currentStep === 3 && "Future & Final Expenses"}
                      {currentStep === 4 && "Existing Resources & Summary"}
                    </span>
                  </div>
                  <div className="w-full bg-nola-sand h-2 rounded-full overflow-hidden border border-nola-border/60">
                    <div
                      className="bg-nola-gold h-full transition-all duration-300"
                      style={{ width: `${(currentStep / 4) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* STEP 1: INCOME SUPPORT */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-nola-gold uppercase block mb-1">Step 1 — Income Support</span>
                      <h2 className="text-xl sm:text-2xl font-serif font-bold text-nola-navy">
                        Planning for Ongoing Income Replacement
                      </h2>
                      <p className="text-xs sm:text-sm text-nola-muted mt-1 leading-relaxed">
                        Determine how much financial support your family would need annually if your primary earning contribution stopped.
                      </p>
                    </div>

                    {/* Question A Choice Toggle */}
                    <div className="p-4 rounded-lg bg-nola-sand/60 border border-nola-border space-y-3">
                      <label className="block text-sm font-bold text-nola-navy">
                        Would your family need additional annual income support from life insurance? <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => {
                            setHasIncomeSupportChoice("yes");
                            if (inputs.supportYears === 0) setInputs((prev) => ({ ...prev, supportYears: 10 }));
                            setStepErrors({});
                          }}
                          className={`flex-1 py-3 px-4 rounded border text-xs font-bold transition-all ${
                            hasIncomeSupportChoice === "yes"
                              ? "bg-nola-navy text-white border-nola-navy shadow-sm"
                              : "bg-white text-nola-charcoal border-nola-border hover:border-nola-gold"
                          }`}
                        >
                          Yes, include annual income support
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setHasIncomeSupportChoice("no");
                            setInputs((prev) => ({ ...prev, annualSupport: 0, supportYears: 0 }));
                            setStepErrors({});
                          }}
                          className={`flex-1 py-3 px-4 rounded border text-xs font-bold transition-all ${
                            hasIncomeSupportChoice === "no"
                              ? "bg-nola-navy text-white border-nola-navy shadow-sm"
                              : "bg-white text-nola-charcoal border-nola-border hover:border-nola-gold"
                          }`}
                        >
                          None / $0 income support
                        </button>
                      </div>
                    </div>

                    {/* Conditional Numeric Inputs if Yes */}
                    {hasIncomeSupportChoice === "yes" && (
                      <div className="space-y-4 pt-2">
                        <div>
                          <label htmlFor="annualSupport" className="block text-xs font-semibold text-nola-navy uppercase tracking-wider mb-1">
                            How much additional income would your family need each year? <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <span className="absolute left-3.5 top-2.5 text-gray-400 font-semibold text-sm">$</span>
                            <input
                              type="text"
                              id="annualSupport"
                              value={inputs.annualSupport ? inputs.annualSupport.toLocaleString() : ""}
                              onChange={(e) => handleInputChange("annualSupport", e.target.value)}
                              placeholder="e.g., 40,000"
                              className="w-full pl-8 pr-3.5 py-2.5 rounded border border-nola-border text-sm font-semibold text-nola-charcoal focus:outline-none focus:ring-2 focus:ring-nola-gold/40 focus:border-nola-gold"
                            />
                          </div>
                          <p className="text-[11px] text-nola-muted mt-1 leading-relaxed">
                            Enter the annual support you would want life insurance to help provide, after considering other income your family expects to continue receiving. This is not necessarily your full salary.
                          </p>
                          {stepErrors.annualSupport && (
                            <p className="text-xs text-red-600 mt-1">{stepErrors.annualSupport}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="supportYears" className="block text-xs font-semibold text-nola-navy uppercase tracking-wider mb-1">
                            For how many years would you want that support to last? <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="number"
                            id="supportYears"
                            min={1}
                            max={50}
                            value={inputs.supportYears || ""}
                            onChange={(e) => handleInputChange("supportYears", e.target.value)}
                            placeholder="e.g., 15"
                            className="w-full px-3.5 py-2.5 rounded border border-nola-border text-sm font-semibold text-nola-charcoal focus:outline-none focus:ring-2 focus:ring-nola-gold/40 focus:border-nola-gold"
                          />
                          <p className="text-[11px] text-nola-muted mt-1">
                            Enter a whole number of years (e.g., until children graduate or spouse reaches retirement).
                          </p>
                          {stepErrors.supportYears && (
                            <p className="text-xs text-red-600 mt-1">{stepErrors.supportYears}</p>
                          )}
                        </div>
                      </div>
                    )}

                    <p className="text-[11px] text-nola-muted italic pt-1">
                      Your best estimate is okay. You can adjust it before or after seeing your result.
                    </p>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNextStep1}
                        className="px-6 py-3 rounded text-sm font-bold text-nola-navyDeep bg-nola-gold hover:bg-nola-goldHover transition-all shadow-sm active:scale-95"
                      >
                        Continue to Debts →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: MORTGAGE & OTHER DEBTS */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-nola-gold uppercase block mb-1">Step 2 — Mortgage &amp; Other Debts</span>
                      <h2 className="text-xl sm:text-2xl font-serif font-bold text-nola-navy">
                        Covering Outstanding Financial Obligations
                      </h2>
                      <p className="text-xs sm:text-sm text-nola-muted mt-1 leading-relaxed">
                        Identify debt balances you would want eliminated so your family is not burdened with monthly payments.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="mortgage" className="block text-xs font-semibold text-nola-navy uppercase tracking-wider mb-1">
                        How much mortgage balance would you want covered?
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-2.5 text-gray-400 font-semibold text-sm">$</span>
                        <input
                          type="text"
                          id="mortgage"
                          value={inputs.mortgage ? inputs.mortgage.toLocaleString() : ""}
                          onChange={(e) => handleInputChange("mortgage", e.target.value)}
                          placeholder="0"
                          className="w-full pl-8 pr-3.5 py-2.5 rounded border border-nola-border text-sm font-semibold text-nola-charcoal focus:outline-none focus:ring-2 focus:ring-nola-gold/40 focus:border-nola-gold"
                        />
                      </div>
                      <p className="text-[11px] text-nola-muted mt-1">
                        Enter the amount you would want paid off as a lump sum. Enter $0 if this does not apply.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="otherDebt" className="block text-xs font-semibold text-nola-navy uppercase tracking-wider mb-1">
                        What other debts would you want covered?
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-2.5 text-gray-400 font-semibold text-sm">$</span>
                        <input
                          type="text"
                          id="otherDebt"
                          value={inputs.otherDebt ? inputs.otherDebt.toLocaleString() : ""}
                          onChange={(e) => handleInputChange("otherDebt", e.target.value)}
                          placeholder="0"
                          className="w-full pl-8 pr-3.5 py-2.5 rounded border border-nola-border text-sm font-semibold text-nola-charcoal focus:outline-none focus:ring-2 focus:ring-nola-gold/40 focus:border-nola-gold"
                        />
                      </div>
                      <p className="text-[11px] text-nola-muted mt-1">
                        Exclude the mortgage amount entered above. (e.g., auto loans, personal loans, credit cards).
                      </p>
                    </div>

                    {/* Double-counting Safeguard Note */}
                    <div className="p-3.5 rounded bg-amber-50 border border-amber-200 text-amber-900 text-xs">
                      <strong>Double-Counting Reminder:</strong> If you include a debt payoff here, exclude the payments for that same debt from your annual income-support amount in Step 1.
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="px-5 py-2.5 rounded text-xs font-semibold text-nola-muted hover:text-nola-navy border border-nola-border"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNextStep2}
                        className="px-6 py-3 rounded text-sm font-bold text-nola-navyDeep bg-nola-gold hover:bg-nola-goldHover transition-all shadow-sm active:scale-95"
                      >
                        Continue to Future Expenses →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: ADDITIONAL EXPENSES */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-nola-gold uppercase block mb-1">Step 3 — Additional Expenses</span>
                      <h2 className="text-xl sm:text-2xl font-serif font-bold text-nola-navy">
                        Planning for Major Goals &amp; Final Costs
                      </h2>
                      <p className="text-xs sm:text-sm text-nola-muted mt-1 leading-relaxed">
                        Add lump sums for future goals or immediate estate transition expenses.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="futureExpenses" className="block text-xs font-semibold text-nola-navy uppercase tracking-wider mb-1">
                        What additional future expenses would you want to plan for?
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-2.5 text-gray-400 font-semibold text-sm">$</span>
                        <input
                          type="text"
                          id="futureExpenses"
                          value={inputs.futureExpenses ? inputs.futureExpenses.toLocaleString() : ""}
                          onChange={(e) => handleInputChange("futureExpenses", e.target.value)}
                          placeholder="0"
                          className="w-full pl-8 pr-3.5 py-2.5 rounded border border-nola-border text-sm font-semibold text-nola-charcoal focus:outline-none focus:ring-2 focus:ring-nola-gold/40 focus:border-nola-gold"
                        />
                      </div>
                      <p className="text-[11px] text-nola-muted mt-1">
                        For example, an education goal or other family costs not already included in your income-support amount.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="finalExpenses" className="block text-xs font-semibold text-nola-navy uppercase tracking-wider mb-1">
                        What amount would you like to include for final expenses?
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-2.5 text-gray-400 font-semibold text-sm">$</span>
                        <input
                          type="text"
                          id="finalExpenses"
                          value={inputs.finalExpenses ? inputs.finalExpenses.toLocaleString() : ""}
                          onChange={(e) => handleInputChange("finalExpenses", e.target.value)}
                          placeholder="0"
                          className="w-full pl-8 pr-3.5 py-2.5 rounded border border-nola-border text-sm font-semibold text-nola-charcoal focus:outline-none focus:ring-2 focus:ring-nola-gold/40 focus:border-nola-gold"
                        />
                      </div>
                      <p className="text-[11px] text-nola-muted mt-1">
                        Enter your own planning amount, or $0 if you do not want to include this.
                      </p>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="px-5 py-2.5 rounded text-xs font-semibold text-nola-muted hover:text-nola-navy border border-nola-border"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNextStep3}
                        className="px-6 py-3 rounded text-sm font-bold text-nola-navyDeep bg-nola-gold hover:bg-nola-goldHover transition-all shadow-sm active:scale-95"
                      >
                        Continue to Resources →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: EXISTING RESOURCES & REVIEW */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-nola-gold uppercase block mb-1">Step 4 — Existing Resources</span>
                      <h2 className="text-xl sm:text-2xl font-serif font-bold text-nola-navy">
                        Offsetting Available Capital &amp; Coverage
                      </h2>
                      <p className="text-xs sm:text-sm text-nola-muted mt-1 leading-relaxed">
                        Subtract resources you already have in place to find your net additional coverage need.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="existingCoverage" className="block text-xs font-semibold text-nola-navy uppercase tracking-wider mb-1">
                        How much existing life insurance would you count toward these needs?
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-2.5 text-gray-400 font-semibold text-sm">$</span>
                        <input
                          type="text"
                          id="existingCoverage"
                          value={inputs.existingCoverage ? inputs.existingCoverage.toLocaleString() : ""}
                          onChange={(e) => handleInputChange("existingCoverage", e.target.value)}
                          placeholder="0"
                          className="w-full pl-8 pr-3.5 py-2.5 rounded border border-nola-border text-sm font-semibold text-nola-charcoal focus:outline-none focus:ring-2 focus:ring-nola-gold/40 focus:border-nola-gold"
                        />
                      </div>
                      <p className="text-[11px] text-nola-muted mt-1">
                        Include only coverage you expect to be available for these same needs. Verify employer-provided policy terms before relying on them.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="allocatedSavings" className="block text-xs font-semibold text-nola-navy uppercase tracking-wider mb-1">
                        How much savings have you specifically allocated to these needs?
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-2.5 text-gray-400 font-semibold text-sm">$</span>
                        <input
                          type="text"
                          id="allocatedSavings"
                          value={inputs.allocatedSavings ? inputs.allocatedSavings.toLocaleString() : ""}
                          onChange={(e) => handleInputChange("allocatedSavings", e.target.value)}
                          placeholder="0"
                          className="w-full pl-8 pr-3.5 py-2.5 rounded border border-nola-border text-sm font-semibold text-nola-charcoal focus:outline-none focus:ring-2 focus:ring-nola-gold/40 focus:border-nola-gold"
                        />
                      </div>
                      <p className="text-[11px] text-nola-muted mt-1">
                        Include only resources you intend to make available. Do not automatically include all retirement savings or home equity reserved for other goals.
                      </p>
                    </div>

                    {/* Compact Review Card */}
                    <div className="p-4 rounded-lg bg-nola-sand/70 border border-nola-border text-xs space-y-1.5">
                      <div className="font-bold uppercase tracking-wider text-nola-navy text-[11px] mb-2 border-b border-nola-border/60 pb-1">
                        Summary of Entered Scenario:
                      </div>
                      <div className="flex justify-between text-nola-muted">
                        <span>Annual Income Support:</span>
                        <span className="font-semibold text-nola-navy">${inputs.annualSupport.toLocaleString()} / yr × {inputs.supportYears} yrs</span>
                      </div>
                      <div className="flex justify-between text-nola-muted">
                        <span>Mortgage &amp; Debts:</span>
                        <span className="font-semibold text-nola-navy">${(inputs.mortgage + inputs.otherDebt).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-nola-muted">
                        <span>Future &amp; Final Expenses:</span>
                        <span className="font-semibold text-nola-navy">${(inputs.futureExpenses + inputs.finalExpenses).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-nola-muted pt-1 border-t border-nola-border/40">
                        <span>Existing Coverage &amp; Savings:</span>
                        <span className="font-semibold text-nola-navy">-${(inputs.existingCoverage + inputs.allocatedSavings).toLocaleString()}</span>
                      </div>
                    </div>

                    {stepErrors.calculation && (
                      <p className="text-xs text-red-600">{stepErrors.calculation}</p>
                    )}

                    <div className="pt-4 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="px-5 py-2.5 rounded text-xs font-semibold text-nola-muted hover:text-nola-navy border border-nola-border"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={handleCalculate}
                        className="px-8 py-3.5 rounded text-base font-bold text-nola-navyDeep bg-nola-gold hover:bg-nola-goldHover transition-all shadow-md active:scale-95"
                      >
                        See My Estimate →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* RESULTS SCREEN (STEP 5) */}
            {currentStep === 5 && result && (
              <div className="space-y-8 animate-in fade-in duration-300">
                
                {/* Result Header */}
                <div className="text-center max-w-2xl mx-auto">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-nola-gold uppercase block mb-1">
                    Your Estimate Summary (Version {result.methodologyVersion})
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-nola-navy">
                    Your Estimated Additional Coverage Need
                  </h2>
                  <p className="text-xs sm:text-sm text-nola-muted mt-1">
                    Based on the goals and resources you entered.
                  </p>
                </div>

                {/* Primary Result Display Card */}
                {result.isAllZeroScenario ? (
                  <div className="p-6 rounded-xl bg-nola-sand border border-nola-goldBorder/80 text-center">
                    <span className="text-xs font-mono font-semibold uppercase text-nola-gold block mb-1">No Scenario Modeled</span>
                    <h3 className="text-xl font-serif font-bold text-nola-navy">No Modeled Needs or Resources Entered</h3>
                    <p className="text-xs sm:text-sm text-nola-muted mt-2 max-w-lg mx-auto">
                      All fields were left at $0. This is not a meaningful coverage assessment. Click &ldquo;Adjust My Answers&rdquo; below to enter your protection goals.
                    </p>
                  </div>
                ) : result.isZeroResult ? (
                  <div className="p-6 sm:p-8 rounded-xl bg-emerald-50/80 border border-emerald-200 text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 block mb-1">
                      Resource Alignment
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-serif font-bold text-emerald-950 my-2">$0</h3>
                    <p className="text-sm font-medium text-emerald-900 max-w-xl mx-auto">
                      Your entered resources meet or exceed the needs included in this estimate.
                    </p>
                    <p className="text-xs text-emerald-700 mt-2 max-w-xl mx-auto">
                      This does not confirm that your coverage is sufficient for every circumstance. Review the assumptions and any needs not included.
                    </p>
                  </div>
                ) : (
                  <div className="p-6 sm:p-8 rounded-xl bg-nola-navy text-white text-center border border-nola-gold/40 shadow-xl relative overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-nola-gold/10 rounded-full blur-2xl pointer-events-none"></div>
                    <span className="text-xs uppercase tracking-[0.2em] text-nola-gold font-bold block mb-1">
                      Estimated Net Additional Coverage
                    </span>
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-nola-gold my-3 tracking-tight">
                      ${result.estimatedAdditionalCoverage.toLocaleString()}
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto leading-relaxed">
                      This represents the additional coverage amount to explore to help fulfill your stated family support and debt payoff goals.
                    </p>
                  </div>
                )}

                {/* Itemized Calculation Breakdown Table */}
                <div className="bg-nola-sand/50 rounded-xl p-6 border border-nola-border">
                  <h3 className="text-sm font-serif font-bold uppercase tracking-wider text-nola-navy mb-4 pb-2 border-b border-nola-border">
                    Itemized Calculation Breakdown
                  </h3>
                  
                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-nola-charcoal">
                        Income support ({result.annualSupport.toLocaleString() ? `$${result.annualSupport.toLocaleString()}` : "$0"} × {result.supportYears} yrs):
                      </span>
                      <span className="font-semibold text-nola-navy">${result.incomeSupportTotal.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-nola-charcoal">Mortgage payoff:</span>
                      <span className="font-semibold text-nola-navy">${result.mortgage.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-nola-charcoal">Other debts:</span>
                      <span className="font-semibold text-nola-navy">${result.otherDebt.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-nola-charcoal">Additional future expenses:</span>
                      <span className="font-semibold text-nola-navy">${result.futureExpenses.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-nola-charcoal">Final expenses:</span>
                      <span className="font-semibold text-nola-navy">${result.finalExpenses.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center pt-2 font-bold border-t border-nola-border text-nola-navy">
                      <span>Total Modeled Needs:</span>
                      <span>${result.totalModeledNeeds.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center text-emerald-700">
                      <span>Less existing life insurance:</span>
                      <span>−${result.existingCoverage.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center text-emerald-700">
                      <span>Less allocated savings:</span>
                      <span>−${result.allocatedSavings.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center pt-3 font-serif font-bold text-base sm:text-lg border-t-2 border-nola-navy text-nola-navy">
                      <span>Estimated Additional Coverage:</span>
                      <span className="text-nola-gold">${result.estimatedAdditionalCoverage.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Result Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-4 py-2.5 rounded text-xs font-semibold text-nola-navy bg-nola-sand hover:bg-nola-goldLight border border-nola-border transition-colors"
                    >
                      ✎ Adjust My Answers
                    </button>
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="px-4 py-2.5 rounded text-xs font-semibold text-nola-navy bg-nola-sand hover:bg-nola-goldLight border border-nola-border transition-colors"
                    >
                      🖨 Print My Summary
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleStartOver}
                    className="px-4 py-2.5 rounded text-xs font-semibold text-red-600 hover:bg-red-50 border border-red-200 transition-colors"
                  >
                    Start Over
                  </button>
                </div>

                {/* EXPANDABLE "HOW WE CALCULATED THIS" METHODOLOGY */}
                <div className="border border-nola-border rounded-lg bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setShowMethodologyDrawer(!showMethodologyDrawer)}
                    className="w-full p-4 text-left font-serif font-bold text-sm text-nola-navy flex justify-between items-center bg-nola-sand/40 hover:bg-nola-sand transition-colors"
                  >
                    <span>How We Calculated This (Methodology &amp; Limitations)</span>
                    <span className="text-nola-gold">{showMethodologyDrawer ? "▲" : "▼"}</span>
                  </button>

                  {showMethodologyDrawer && (
                    <div className="p-5 text-xs text-nola-muted leading-relaxed space-y-3 border-t border-nola-border animate-in fade-in duration-200">
                      <p>
                        <strong>Formula Applied:</strong> <br />
                        <code className="bg-nola-sand px-1.5 py-0.5 rounded text-nola-navy font-mono">
                          Estimated Coverage = (Annual Support × Support Years) + Mortgage + Other Debts + Future Expenses + Final Expenses − Existing Insurance − Allocated Savings
                        </code>
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Uses the annual support amount and time period entered by you.</li>
                        <li>Does not adjust for inflation, investment returns, or present value calculations.</li>
                        <li>Does not independently calculate taxes, Social Security survivor benefits, or employer benefit vesting.</li>
                        <li>Does not verify existing policy terms or carrier health underwriting guidelines.</li>
                        <li>Does not include expenses or resources you omitted from the calculator.</li>
                      </ul>
                      <div className="p-3 bg-amber-50 rounded border border-amber-200 text-amber-950 font-medium text-[11px] mt-2">
                        <strong>Disclaimer:</strong> This is a simplified educational estimate, not a quote, personalized recommendation, or confirmation of eligibility. Your circumstances may require a more detailed review. Submitting a request does not put insurance coverage in place.
                      </div>
                    </div>
                  )}
                </div>

                {/* OPTIONAL REVIEW-REQUEST FORM */}
                <div className="mt-12 pt-10 border-t border-nola-border" id="review-form">
                  <div className="bg-nola-sand/60 rounded-xl border border-nola-goldBorder/80 p-6 sm:p-8">
                    
                    <div className="mb-6">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-nola-gold uppercase block mb-1">Fiduciary Consultation</span>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-nola-navy">Want Help Reviewing Your Estimate?</h3>
                      <p className="text-xs sm:text-sm text-nola-muted mt-1 leading-relaxed">
                        Request a conversation with Nola Wealth Financial about your goals and the next steps for obtaining a personalized quote.
                      </p>
                    </div>

                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                      <HoneypotField value={website} onChange={setWebsite} />
                      {/* Name */}
                      <div>
                        <label htmlFor="fullName" className="block text-xs font-semibold text-nola-navy uppercase tracking-wider mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g., Jonathan Vance"
                          required
                          className="w-full px-3.5 py-2.5 rounded border border-nola-border text-sm text-nola-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-nola-gold/40 focus:border-nola-gold"
                        />
                      </div>

                      {/* State */}
                      <div>
                        <label htmlFor="stateResidence" className="block text-xs font-semibold text-nola-navy uppercase tracking-wider mb-1">
                          State of Residence <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="stateResidence"
                          value={stateResidence}
                          onChange={(e) => setStateResidence(e.target.value)}
                          required
                          className="w-full px-3.5 py-2.5 rounded border border-nola-border text-sm text-nola-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-nola-gold/40 focus:border-nola-gold"
                        >
                          <option value="" disabled>Select your state</option>
                          <option value="LA">Louisiana (Primary)</option>
                          <option value="MS">Mississippi</option>
                          <option value="TX">Texas</option>
                          <option value="AL">Alabama</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="OTHER">Other State (Subject to Carrier Licensing)</option>
                        </select>
                      </div>

                      {/* Contact Method */}
                      <div>
                        <label className="block text-xs font-semibold text-nola-navy uppercase tracking-wider mb-1">
                          Preferred Contact Method <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-2 p-1 bg-white rounded border border-nola-border">
                          <button
                            type="button"
                            onClick={() => setContactMethod("phone")}
                            className={`py-2 px-3 text-xs font-semibold rounded text-center transition-all ${
                              contactMethod === "phone"
                                ? "bg-nola-navy text-white shadow-sm"
                                : "text-nola-muted hover:text-nola-navy"
                            }`}
                          >
                            Phone call
                          </button>
                          <button
                            type="button"
                            onClick={() => setContactMethod("email")}
                            className={`py-2 px-3 text-xs font-semibold rounded text-center transition-all ${
                              contactMethod === "email"
                                ? "bg-nola-navy text-white shadow-sm"
                                : "text-nola-muted hover:text-nola-navy"
                            }`}
                          >
                            Email
                          </button>
                        </div>
                      </div>

                      {/* Phone / Email input */}
                      {contactMethod === "phone" ? (
                        <div>
                          <label htmlFor="phoneNumber" className="block text-xs font-semibold text-nola-navy uppercase tracking-wider mb-1">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="(504) 555-0198"
                            required
                            className="w-full px-3.5 py-2.5 rounded border border-nola-border text-sm text-nola-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-nola-gold/40 focus:border-nola-gold"
                          />
                        </div>
                      ) : (
                        <div>
                          <label htmlFor="emailAddress" className="block text-xs font-semibold text-nola-navy uppercase tracking-wider mb-1">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="emailAddress"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            placeholder="name@example.com"
                            required
                            className="w-full px-3.5 py-2.5 rounded border border-nola-border text-sm text-nola-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-nola-gold/40 focus:border-nola-gold"
                          />
                        </div>
                      )}

                      {/* OPTIONAL UNCHECKED CONSENT CHECKBOX */}
                      <div className="pt-2">
                        <label className="flex items-start gap-2.5 text-xs text-nola-charcoal cursor-pointer">
                          <input
                            type="checkbox"
                            checked={includeFinancialDetails}
                            onChange={(e) => setIncludeFinancialDetails(e.target.checked)}
                            className="mt-0.5 rounded border-nola-border text-nola-gold focus:ring-nola-gold"
                          />
                          <span className="leading-snug">
                            Include my calculator answers and estimate with my request so Nola can review them.
                          </span>
                        </label>
                      </div>

                      <div className="p-3 bg-white/80 rounded border border-nola-border text-[11px] text-nola-muted leading-relaxed">
                        By submitting, you ask Nola Wealth Financial to contact you using your selected method about this request. Review our{" "}
                        <a href="https://nolawealthfinancial.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-nola-navy underline font-medium hover:text-nola-gold">
                          Privacy Policy
                        </a>.
                      </div>

                      {formError && (
                        <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-700 rounded">
                          {formError}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={formSubmitting}
                        className={`w-full py-3.5 px-6 rounded text-sm sm:text-base font-bold text-nola-navyDeep bg-nola-gold hover:bg-nola-goldHover transition-all shadow-md active:scale-95 ${
                          formSubmitting ? "opacity-75 cursor-wait" : "cursor-pointer"
                        }`}
                      >
                        {formSubmitting ? "Submitting Request..." : "Review My Estimate With Nola"}
                      </button>
                    </form>

                  </div>
                </div>

              </div>
            )}

          </div>

        </div>
      </section>

      {/* HOW IT WORKS SUPPORTING CONTENT */}
      <section className="py-16 bg-white border-y border-nola-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-nola-gold block mb-2">Transparent Calculation</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-nola-navy">How It Works</h2>
            <p className="text-sm text-nola-muted mt-2">Get total clarity on your protection estimate in three simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg border border-nola-border bg-nola-sand/40 text-center">
              <div className="w-10 h-10 rounded-full bg-nola-navy text-nola-gold font-bold flex items-center justify-center mx-auto mb-4 font-serif text-sm">
                01
              </div>
              <h3 className="text-base font-serif font-bold text-nola-navy mb-2">Enter Your Goals</h3>
              <p className="text-xs text-nola-muted leading-relaxed">
                Choose the income, debt, and future expense goals you want to include in your estimate.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-nola-border bg-nola-sand/40 text-center">
              <div className="w-10 h-10 rounded-full bg-nola-navy text-nola-gold font-bold flex items-center justify-center mx-auto mb-4 font-serif text-sm">
                02
              </div>
              <h3 className="text-base font-serif font-bold text-nola-navy mb-2">See Your Estimate</h3>
              <p className="text-xs text-nola-muted leading-relaxed">
                Review a transparent, instant breakdown based on your inputs—no email required.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-nola-border bg-nola-sand/40 text-center">
              <div className="w-10 h-10 rounded-full bg-nola-navy text-nola-gold font-bold flex items-center justify-center mx-auto mb-4 font-serif text-sm">
                03
              </div>
              <h3 className="text-base font-serif font-bold text-nola-navy mb-2">Choose Your Next Step</h3>
              <p className="text-xs text-nola-muted leading-relaxed">
                Adjust your estimate anytime, print your summary, or request a conversation with our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-nola-sand/80 border-b border-nola-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-nola-gold block mb-2">Common Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-nola-navy">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-nola-muted mt-1">Clear answers regarding the calculator and methodology.</p>
          </div>

          <div className="space-y-3">
            <details className="group bg-white rounded-lg border border-nola-border p-5 [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex items-center justify-between cursor-pointer list-none font-serif font-bold text-base sm:text-lg text-nola-navy select-none">
                <span>Is this a life insurance quote?</span>
                <span className="w-6 h-6 rounded-full bg-nola-sand flex items-center justify-center text-nola-gold group-open:rotate-180 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </span>
              </summary>
              <div className="mt-3 pt-3 border-t border-nola-border/60 text-xs sm:text-sm text-nola-muted leading-relaxed">
                No. It estimates a coverage amount to explore, not the price of a policy. Premium quotes require individual carrier underwriting.
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-nola-border p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none font-serif font-bold text-base sm:text-lg text-nola-navy select-none">
                <span>Do I need to provide contact information?</span>
                <span className="w-6 h-6 rounded-full bg-nola-sand flex items-center justify-center text-nola-gold group-open:rotate-180 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </span>
              </summary>
              <div className="mt-3 pt-3 border-t border-nola-border/60 text-xs sm:text-sm text-nola-muted leading-relaxed">
                No. You can see and adjust your estimate without submitting a contact form.
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-nola-border p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none font-serif font-bold text-base sm:text-lg text-nola-navy select-none">
                <span>What if I do not know an exact amount?</span>
                <span className="w-6 h-6 rounded-full bg-nola-sand flex items-center justify-center text-nola-gold group-open:rotate-180 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </span>
              </summary>
              <div className="mt-3 pt-3 border-t border-nola-border/60 text-xs sm:text-sm text-nola-muted leading-relaxed">
                Use your best estimate and review the assumptions. You can adjust your answers at any time.
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-nola-border p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none font-serif font-bold text-base sm:text-lg text-nola-navy select-none">
                <span>Does the result tell me which policy to buy?</span>
                <span className="w-6 h-6 rounded-full bg-nola-sand flex items-center justify-center text-nola-gold group-open:rotate-180 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </span>
              </summary>
              <div className="mt-3 pt-3 border-t border-nola-border/60 text-xs sm:text-sm text-nola-muted leading-relaxed">
                No. The calculator does not recommend an insurer, policy type, or term.
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-nola-border p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none font-serif font-bold text-base sm:text-lg text-nola-navy select-none">
                <span>Will you save my calculator answers?</span>
                <span className="w-6 h-6 rounded-full bg-nola-sand flex items-center justify-center text-nola-gold group-open:rotate-180 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </span>
              </summary>
              <div className="mt-3 pt-3 border-t border-nola-border/60 text-xs sm:text-sm text-nola-muted leading-relaxed">
                Your calculator answers are kept in memory and are not sent with a review request unless you specifically choose to include them.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* COMPACT FOOTER */}
      <footer className="bg-nola-navy text-white/80 py-12 border-t border-nola-gold/30 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/10">
            <div className="space-y-2">
              <span className="font-serif font-semibold text-white text-sm">Nola Wealth Financial</span>
              <p className="text-white/60">
                Poydras Executive Center, Suite 3400, New Orleans, LA 70112
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-white/70">
              <a href="https://nolawealthfinancial.com/privacy/" target="_blank" rel="noopener noreferrer" className="hover:text-nola-gold underline">Privacy Policy</a>
              <a href="https://nolawealthfinancial.com/how-we-work/" target="_blank" rel="noopener noreferrer" className="hover:text-nola-gold underline">Fiduciary Standard</a>
              <a href="https://nolawealthfinancial.com/insurance/" target="_blank" rel="noopener noreferrer" className="hover:text-nola-gold underline">Full Insurance Services</a>
            </div>
          </div>

          <div className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] text-white/50">
            <p className="max-w-2xl leading-normal">
              Coverage availability, pricing, and eligibility depend on the product, insurer, state, and applicable underwriting requirements.
            </p>
            <p className="whitespace-nowrap">
              © 2026 Nola Wealth Group LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
