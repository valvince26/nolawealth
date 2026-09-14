"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { submitLead } from "@/lib/submitLead";

export default function LifeInsuranceQuotePage() {
  const router = useRouter();

  // Form State
  const [contactMethod, setContactMethod] = useState<"phone" | "email">("phone");
  const [fullName, setFullName] = useState("");
  const [stateResidence, setStateResidence] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [protectionGoal, setProtectionGoal] = useState("not_selected");

  // UI / Validation States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);
  const [fullNameError, setFullNameError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleContactMethodChange = (method: "phone" | "email") => {
    setContactMethod(method);
    setPhoneError(false);
    setEmailError(false);
  };

  const validateForm = () => {
    let isValid = true;

    if (!fullName.trim()) {
      setFullNameError(true);
      isValid = false;
    } else {
      setFullNameError(false);
    }

    if (!stateResidence) {
      setStateError(true);
      isValid = false;
    } else {
      setStateError(false);
    }

    if (contactMethod === "phone") {
      const cleanPhone = phoneNumber.replace(/\D/g, "");
      if (!cleanPhone || cleanPhone.length < 10) {
        setPhoneError(true);
        isValid = false;
      } else {
        setPhoneError(false);
      }
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailAddress.trim() || !emailRegex.test(emailAddress)) {
        setEmailError(true);
        isValid = false;
      } else {
        setEmailError(false);
      }
    }

    return isValid;
  };

  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setShowErrorBanner(true);
      return;
    }

    setShowErrorBanner(false);
    setSubmitError("");
    setIsSubmitting(true);

    // Real capture. This previously did `setTimeout(..., 1200)` with the comment
    // "Simulate backend lead ingestion API" and then routed straight to the
    // thank-you page -- the quote request was discarded and the visitor was told
    // "our team will follow up." That promise has to be backed by a stored lead.
    const ok = await submitLead("life-insurance-quote", {
      name: fullName,
      email: emailAddress,
      phone: phoneNumber,
      state: stateResidence,
      protectionGoal,
      contactMethod,
    });

    setIsSubmitting(false);

    if (ok) {
      router.push("/life-insurance-quote/thank-you");
    } else {
      // Never route to the thank-you page on failure -- that page makes explicit
      // follow-up commitments we cannot keep for a request we never received.
      setSubmitError(
        "We couldn't submit your request. Please call (504) 891-2000 or email marcus.still@nolawealthfinancial.com and we'll take your request directly."
      );
    }
  };



  return (
    <div className="bg-nola-cream text-nola-charcoal font-sans antialiased selection:bg-nola-gold selection:text-nola-navyDeep min-h-screen flex flex-col justify-between">
      
      {/* TOP CAMPAIGN BANNER / REASSURANCE BAR */}
      <div className="bg-nola-navyDeep text-white/80 text-xs py-2 px-4 border-b border-nola-gold/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-nola-gold animate-pulse"></span>
            <span className="font-medium tracking-wide text-white/90">Official Quote Request Form</span>
            <span className="text-white/40">|</span>
            <span className="text-white/70">Nola Wealth Financial Advisory</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-white/70">
            <span>Fiduciary Care &amp; Discretion</span>
            <span>Independent Multi-Carrier Access</span>
            <span className="text-nola-gold font-medium">No Instant Pricing Tool • Tailored Consultation</span>
          </div>
        </div>
      </div>

      {/* SIMPLIFIED HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-nola-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/nola-emblem.png"
              alt="Nola Wealth Financial Emblem & Wordmark"
              width={220}
              height={56}
              className="h-14 w-auto object-contain transition-transform group-hover:scale-[1.01]"
              priority
              unoptimized
            />
            <div className="hidden sm:block border-l border-nola-border pl-3 text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-nola-gold block">Life Advisory</span>
              <span className="text-xs text-nola-muted font-medium">Direct Inquiries</span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded text-sm font-semibold tracking-wide text-nola-navyDeep bg-nola-gold hover:bg-nola-goldHover transition-all shadow-sm active:scale-[0.98]"
            >
              Request My Quote
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION AND QUOTE FORM */}
      <section className="relative bg-white pt-8 pb-16 lg:py-16 border-b border-nola-border overflow-hidden">
        <div className="absolute inset-0 hero-glow pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-6 xl:col-span-7 pt-2 lg:pr-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-nola-sand border border-nola-goldBorder/60 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-nola-gold"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-nola-navy">PERSONALIZED LIFE INSURANCE QUOTE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] leading-[1.18] font-serif font-bold text-nola-navy mb-5 tracking-tight">
                Request a Personalized <br className="hidden sm:inline" />Life Insurance Quote
              </h1>

              <p className="text-base sm:text-lg text-nola-muted leading-relaxed mb-8 max-w-2xl">
                Tell us what you’d like to protect. The Nola Wealth Financial team will contact you to discuss your needs and the next steps for obtaining a personalized quote.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 bg-nola-sand/60 border border-nola-border/80 rounded-md p-3.5 transition-colors hover:bg-nola-sand">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nola-gold/20 flex items-center justify-center text-nola-gold mt-0.5">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-nola-navy">Start with your protection goals.</h4>
                    <p className="text-xs text-nola-muted mt-0.5">Focus your inquiry around what matters most to your dependents or enterprise.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-nola-sand/60 border border-nola-border/80 rounded-md p-3.5 transition-colors hover:bg-nola-sand">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nola-gold/20 flex items-center justify-center text-nola-gold mt-0.5">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-nola-navy">Discuss your questions with our team.</h4>
                    <p className="text-xs text-nola-muted mt-0.5">Receive clear answers from an advisory team member tailored to your situation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-nola-sand/60 border border-nola-border/80 rounded-md p-3.5 transition-colors hover:bg-nola-sand">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nola-gold/20 flex items-center justify-center text-nola-gold mt-0.5">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-nola-navy">Understand the next steps before applying.</h4>
                    <p className="text-xs text-nola-muted mt-0.5">Get total clarity on underwriting terms, medical requirements, and timelines.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-md bg-amber-50/80 border border-amber-200 text-amber-950 flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <p className="text-xs sm:text-sm font-medium leading-normal">
                  <strong>Expectation Note:</strong> This is a quote request, not an instant price or confirmation of coverage.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-nola-border flex items-center gap-6 text-xs text-nola-muted">
                <div>
                  <span className="block text-nola-navy font-semibold">Advisory Office</span>
                  Poydras Executive Center, Suite 3400
                </div>
                <div className="w-px h-8 bg-nola-border"></div>
                <div>
                  <span className="block text-nola-navy font-semibold">Fiduciary Practice</span>
                  New Orleans, Louisiana
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: QUOTE-REQUEST FORM */}
            <div className="lg:col-span-6 xl:col-span-5" id="quote-form">
              <div className="bg-white rounded-xl shadow-xl border border-nola-border/90 p-6 sm:p-8 relative">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-nola-gold via-nola-goldLight to-nola-gold rounded-t-xl"></div>
                
                <div className="mb-6">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-nola-gold uppercase block mb-1">Confidential Inquiry</span>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-nola-navy">Tell Us What You’d Like to Protect</h2>
                  <p className="text-xs sm:text-sm text-nola-muted mt-1">Share a few details so our team can follow up about your request.</p>
                </div>

                <form id="life_quote_v1" className="space-y-4" onSubmit={handleSubmit}>
                  {/* FIELD A: Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-nola-navy uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        setFullNameError(false);
                      }}
                      required 
                      autoComplete="name"
                      placeholder="e.g., Jonathan Vance"
                      className={`w-full px-3.5 py-2.5 rounded border text-sm text-nola-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-nola-gold/40 focus:border-nola-gold transition-all ${
                        fullNameError ? "border-red-500 bg-red-50/20" : "border-nola-border"
                      }`}
                    />
                    {fullNameError && (
                      <p id="fullNameError" className="text-xs text-nola-error mt-1">Please enter your full legal name.</p>
                    )}
                  </div>

                  {/* FIELD B: State of Residence */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label htmlFor="stateResidence" className="block text-xs font-semibold text-nola-navy uppercase tracking-wider">
                        State of Residence <span className="text-red-500">*</span>
                      </label>
                      <span className="text-[11px] text-nola-muted font-normal">Operating verification</span>
                    </div>
                    <select 
                      id="stateResidence" 
                      name="stateResidence" 
                      value={stateResidence}
                      onChange={(e) => {
                        setStateResidence(e.target.value);
                        setStateError(false);
                      }}
                      required
                      className={`w-full px-3.5 py-2.5 rounded border text-sm text-nola-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-nola-gold/40 focus:border-nola-gold transition-all ${
                        stateError ? "border-red-500 bg-red-50/20" : "border-nola-border"
                      }`}
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
                    {stateError && (
                      <p className="text-xs text-nola-error mt-1">Please select your state of residence.</p>
                    )}
                    <p className="text-[11px] text-nola-muted mt-1 flex items-center gap-1">
                      <svg className="w-3 h-3 text-nola-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"/></svg>
                      <span>Implementation note: State availability configured by approved carrier licensing.</span>
                    </p>
                  </div>

                  {/* FIELD C: Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-semibold text-nola-navy uppercase tracking-wider mb-1.5">
                      Preferred Contact Method <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2 p-1 bg-nola-sand rounded border border-nola-border" role="radiogroup" aria-label="Preferred contact channel">
                      <button 
                        type="button" 
                        id="btnMethodPhone" 
                        onClick={() => handleContactMethodChange("phone")}
                        className={`py-2 px-3 text-xs font-semibold rounded text-center transition-all ${
                          contactMethod === "phone"
                            ? "bg-white text-nola-navy shadow-sm border border-nola-border/60"
                            : "text-nola-muted hover:text-nola-navy"
                        }`}
                      >
                        Phone call
                      </button>
                      <button 
                        type="button" 
                        id="btnMethodEmail" 
                        onClick={() => handleContactMethodChange("email")}
                        className={`py-2 px-3 text-xs font-semibold rounded text-center transition-all ${
                          contactMethod === "email"
                            ? "bg-white text-nola-navy shadow-sm border border-nola-border/60"
                            : "text-nola-muted hover:text-nola-navy"
                        }`}
                      >
                        Email
                      </button>
                    </div>
                  </div>

                  {/* FIELD D: Contact Information */}
                  {contactMethod === "phone" ? (
                    <div id="phoneFieldWrapper">
                      <label htmlFor="phoneNumber" className="block text-xs font-semibold text-nola-navy uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        id="phoneNumber" 
                        name="phoneNumber" 
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                          setPhoneError(false);
                        }}
                        required 
                        autoComplete="tel"
                        placeholder="(504) 555-0198"
                        className={`w-full px-3.5 py-2.5 rounded border text-sm text-nola-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-nola-gold/40 focus:border-nola-gold transition-all ${
                          phoneError ? "border-red-500 bg-red-50/20" : "border-nola-border"
                        }`}
                      />
                      {phoneError && (
                        <p id="phoneError" className="text-xs text-nola-error mt-1">Please enter a valid 10-digit phone number.</p>
                      )}
                      <p className="text-[11px] text-nola-muted mt-1">Our advisory team will place a standard voice call to discuss your quote.</p>
                    </div>
                  ) : (
                    <div id="emailFieldWrapper">
                      <label htmlFor="emailAddress" className="block text-xs font-semibold text-nola-navy uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="emailAddress" 
                        name="emailAddress" 
                        value={emailAddress}
                        onChange={(e) => {
                          setEmailAddress(e.target.value);
                          setEmailError(false);
                        }}
                        required
                        autoComplete="email"
                        placeholder="name@example.com"
                        className={`w-full px-3.5 py-2.5 rounded border text-sm text-nola-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-nola-gold/40 focus:border-nola-gold transition-all ${
                          emailError ? "border-red-500 bg-red-50/20" : "border-nola-border"
                        }`}
                      />
                      {emailError && (
                        <p id="emailError" className="text-xs text-nola-error mt-1">Please enter a valid email address.</p>
                      )}
                      <p className="text-[11px] text-nola-muted mt-1">We will send quote guidance and consultation details to this address.</p>
                    </div>
                  )}

                  {/* FIELD E: What would you like to protect? */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label htmlFor="protectionGoal" className="block text-xs font-semibold text-nola-navy uppercase tracking-wider">
                        What would you like to protect?
                      </label>
                      <span className="text-[11px] text-nola-muted">Optional</span>
                    </div>
                    <select 
                      id="protectionGoal" 
                      name="protectionGoal" 
                      value={protectionGoal}
                      onChange={(e) => setProtectionGoal(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded border border-nola-border text-sm text-nola-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-nola-gold/40 focus:border-nola-gold transition-all"
                    >
                      <option value="not_selected">Select your primary goal (optional)</option>
                      <option value="family_income">Family income</option>
                      <option value="mortgage_debts">Mortgage or other debts</option>
                      <option value="final_expenses">Final expenses</option>
                      <option value="not_sure_yet">Not sure yet</option>
                      <option value="something_else">Something else</option>
                    </select>
                  </div>

                  {/* CONTACT DISCLOSURE */}
                  <div className="pt-2">
                    <div className="p-3 bg-nola-sand/70 rounded border border-nola-border text-[11px] text-nola-muted leading-relaxed">
                      <p>
                        By submitting this request, you ask Nola Wealth Financial to contact you using your selected method about your life insurance quote request.{" "}
                        <span className="text-nola-charcoal block mt-0.5">
                          Review our <a href="https://nolawealthfinancial.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-nola-navy underline hover:text-nola-gold font-medium">Privacy Policy</a>.
                        </span>
                      </p>
                      <p className="text-[10px] text-gray-400 mt-1 italic">
                        We do not send automated SMS or share your information with third-party marketers.
                      </p>
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="pt-1">
                    <button 
                      type="submit" 
                      id="submitBtn"
                      disabled={isSubmitting}
                      className={`w-full py-3.5 px-6 rounded text-sm sm:text-base font-bold text-nola-navyDeep bg-nola-gold hover:bg-nola-goldHover transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group ${
                        isSubmitting ? "opacity-80 cursor-wait" : "cursor-pointer"
                      }`}
                    >
                      <span id="btnText">{isSubmitting ? "Submitting Request..." : "Request My Quote"}</span>
                      {isSubmitting ? (
                        <svg id="btnSpinner" className="w-4 h-4 text-nola-navyDeep animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      ) : (
                        <svg id="btnArrow" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                      )}
                    </button>
                  </div>

                  {submitError && (
                    <p
                      role="alert"
                      className="text-sm text-center text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2 leading-snug"
                    >
                      {submitError}
                    </p>
                  )}

                  <p className="text-[11px] text-center text-nola-muted leading-tight">
                    Submitting this form does not provide insurance coverage or guarantee approval.
                  </p>

                  {/* ERROR STATE BANNER */}
                  {showErrorBanner && (
                    <div id="formErrorBanner" className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        <div>
                          <span className="font-semibold">Unable to submit request.</span>
                          <p className="mt-0.5">Please verify the highlighted fields or try again in a few moments. Your entered data has been preserved.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT SECTION */}
      <section className="py-16 bg-nola-sand border-b border-nola-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-nola-gold block mb-2">Transparent Advisory Process</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-nola-navy">What Happens After You Request a Quote?</h2>
            <p className="text-sm text-nola-muted mt-2">We respect your time. Here is the straightforward process our team follows after receiving your submission.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-nola-border shadow-sm flex flex-col relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-nola-gold bg-nola-goldLight/60 px-2.5 py-1 rounded">STEP 01</span>
                <span className="text-xs font-semibold text-nola-muted uppercase tracking-wider">Initial Review</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-nola-navy mb-2">Share Your Priorities</h3>
              <p className="text-xs sm:text-sm text-nola-muted leading-relaxed flex-grow">
                Tell us how to reach you and what you’re interested in protecting.
              </p>
              <div className="mt-4 pt-3 border-t border-nola-border/60 text-[11px] text-gray-500">
                Directly from this secure form
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-nola-border shadow-sm flex flex-col relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-nola-gold bg-nola-goldLight/60 px-2.5 py-1 rounded">STEP 02</span>
                <span className="text-xs font-semibold text-nola-muted uppercase tracking-wider">Advisory Follow-Up</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-nola-navy mb-2">Discuss Your Needs</h3>
              <p className="text-xs sm:text-sm text-nola-muted leading-relaxed flex-grow">
                Our team follows up to understand your goals and explain what additional information may be needed.
              </p>
              <div className="mt-4 pt-3 border-t border-nola-border/60 text-[11px] text-gray-500">
                Via your selected contact channel
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-nola-border shadow-sm flex flex-col relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-nola-gold bg-nola-goldLight/60 px-2.5 py-1 rounded">STEP 03</span>
                <span className="text-xs font-semibold text-nola-muted uppercase tracking-wider">Decision Clarity</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-nola-navy mb-2">Review Your Next Steps</h3>
              <p className="text-xs sm:text-sm text-nola-muted leading-relaxed flex-grow">
                Discuss available options and what is required to obtain pricing or move forward with an application.
              </p>
              <div className="mt-4 pt-3 border-t border-nola-border/60 text-[11px] text-gray-500">
                Clear terms before any formal application
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-nola-muted max-w-xl mx-auto">
            <p>
              Submitting this inquiry does not initiate insurance coverage or obligate you to purchase a policy. All quotes reflect individual underwriting requirements.
            </p>
          </div>
        </div>
      </section>

      {/* REASSURANCE SECTION */}
      <section className="py-16 bg-white border-b border-nola-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-nola-gold block mb-2">Fiduciary Focus</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-nola-navy mb-4">Start With What Matters to You</h2>
            <p className="text-base text-nola-muted leading-relaxed">
              Life insurance decisions begin with understanding what you want to protect. Whether you’re thinking about family income, a mortgage, or future expenses, your quote request gives our team a starting point for the conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-5 rounded-lg border border-nola-border bg-nola-sand/40 hover:border-nola-gold/40 transition-colors">
              <div className="w-8 h-8 rounded bg-nola-navy text-nola-gold flex items-center justify-center font-serif font-bold text-sm mb-3">
                01
              </div>
              <h3 className="text-base font-serif font-bold text-nola-navy mb-1.5">Your protection goals.</h3>
              <p className="text-xs text-nola-muted leading-normal">
                Identify how much financial support your beneficiaries or partners would require to maintain stability.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-nola-border bg-nola-sand/40 hover:border-nola-gold/40 transition-colors">
              <div className="w-8 h-8 rounded bg-nola-navy text-nola-gold flex items-center justify-center font-serif font-bold text-sm mb-3">
                02
              </div>
              <h3 className="text-base font-serif font-bold text-nola-navy mb-1.5">Questions about coverage options.</h3>
              <p className="text-xs text-nola-muted leading-normal">
                Examine differences between term limits and permanent cash value growth in plain, jargon-free terms.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-nola-border bg-nola-sand/40 hover:border-nola-gold/40 transition-colors">
              <div className="w-8 h-8 rounded bg-nola-navy text-nola-gold flex items-center justify-center font-serif font-bold text-sm mb-3">
                03
              </div>
              <h3 className="text-base font-serif font-bold text-nola-navy mb-1.5">The information needed for next steps.</h3>
              <p className="text-xs text-nola-muted leading-normal">
                Gain an honest overview of required health records, carrier timelines, and premium structures.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-xl bg-nola-navy text-white max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border border-nola-gold/30">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-lg font-serif font-semibold text-nola-gold">Independent Advisory Representation</h4>
              <p className="text-xs text-white/75 leading-relaxed max-w-xl">
                Nola Wealth Financial structures life coverage to fit your personal estate and business continuity plans without carrier bias or captive product quotas.
              </p>
            </div>
            <a href="#quote-form" className="flex-shrink-0 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-nola-gold text-nola-navyDeep hover:bg-nola-goldHover transition-colors">
              Request My Quote
            </a>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-nola-sand/80 border-b border-nola-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-nola-gold block mb-2">Common Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-nola-navy">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-nola-muted mt-1">Clear answers regarding the quote request process.</p>
          </div>

          <div className="space-y-3">
            <details className="group bg-white rounded-lg border border-nola-border p-5 [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex items-center justify-between cursor-pointer list-none font-serif font-bold text-base sm:text-lg text-nola-navy select-none">
                <span>Will I receive an instant quote?</span>
                <span className="w-6 h-6 rounded-full bg-nola-sand flex items-center justify-center text-nola-gold group-open:rotate-180 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </span>
              </summary>
              <div className="mt-3 pt-3 border-t border-nola-border/60 text-xs sm:text-sm text-nola-muted leading-relaxed">
                No. This page lets you request a personalized quote. Our team will follow up to discuss your needs and explain what information is required for pricing.
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-nola-border p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none font-serif font-bold text-base sm:text-lg text-nola-navy select-none">
                <span>What if I’m not sure what coverage I need?</span>
                <span className="w-6 h-6 rounded-full bg-nola-sand flex items-center justify-center text-nola-gold group-open:rotate-180 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </span>
              </summary>
              <div className="mt-3 pt-3 border-t border-nola-border/60 text-xs sm:text-sm text-nola-muted leading-relaxed">
                Choose ‘Not sure yet’ in the form. You can explain your goals and ask questions during the follow-up conversation.
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-nola-border p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none font-serif font-bold text-base sm:text-lg text-nola-navy select-none">
                <span>Does submitting the form start my coverage?</span>
                <span className="w-6 h-6 rounded-full bg-nola-sand flex items-center justify-center text-nola-gold group-open:rotate-180 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </span>
              </summary>
              <div className="mt-3 pt-3 border-t border-nola-border/60 text-xs sm:text-sm text-nola-muted leading-relaxed">
                No. Submitting a quote request does not create a policy or put coverage in place. Any coverage depends on completing the applicable application and policy requirements.
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-nola-border p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none font-serif font-bold text-base sm:text-lg text-nola-navy select-none">
                <span>How will you contact me?</span>
                <span className="w-6 h-6 rounded-full bg-nola-sand flex items-center justify-center text-nola-gold group-open:rotate-180 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </span>
              </summary>
              <div className="mt-3 pt-3 border-t border-nola-border/60 text-xs sm:text-sm text-nola-muted leading-relaxed">
                Our team will use the contact method you select in the form.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 bg-white border-b border-nola-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-nola-gold block mb-2">Take The First Step</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-nola-navy mb-3">Ready to Request Your Life Insurance Quote?</h2>
          <p className="text-base text-nola-muted mb-8 max-w-xl mx-auto">
            Start with a few details about what you’d like to protect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#quote-form" className="w-full sm:w-auto px-8 py-3.5 rounded text-sm sm:text-base font-bold text-nola-navyDeep bg-nola-gold hover:bg-nola-goldHover transition-all shadow-md active:scale-95">
              Request My Quote
            </a>
          </div>
          <p className="text-xs text-nola-muted mt-3">Scrolls back to the secure quote request form above.</p>
        </div>
      </section>

      {/* COMPACT FOOTER */}
      <footer className="bg-nola-navy text-white/80 py-12 border-t border-nola-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-3">
                <Image 
                  src="/nola-emblem.png" 
                  alt="Nola Wealth Financial" 
                  width={160}
                  height={40}
                  className="h-10 w-auto object-contain brightness-110"
                  unoptimized
                />
                <span className="text-sm font-serif font-semibold text-white tracking-wide">Nola Wealth Financial</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed max-w-sm">
                Architecting resilient wealth frameworks, private fiduciary governance, and generational capital preservation.
              </p>
            </div>

            <div className="md:col-span-4 space-y-2 text-xs">
              <span className="block font-semibold uppercase tracking-wider text-nola-gold">Advisory Office</span>
              <p className="text-white/70">
                Poydras Executive Center, Suite 3400<br />
                New Orleans, Louisiana 70112
              </p>
              <p className="text-white/70 pt-1">
                <span className="text-white/40">Email:</span> <a href="mailto:marcus.still@nolawealthfinancial.com" className="hover:text-nola-gold underline">marcus.still@nolawealthfinancial.com</a><br />
                <span className="text-white/40">Direct:</span> <a href="tel:+15048912000" className="hover:text-nola-gold underline">+1 (504) 891-2000</a>
              </p>
            </div>

            <div className="md:col-span-3 space-y-2 text-xs">
              <span className="block font-semibold uppercase tracking-wider text-nola-gold">Legal &amp; Compliance</span>
              <ul className="space-y-1.5 text-white/70">
                <li><a href="https://nolawealthfinancial.com/privacy/" target="_blank" rel="noopener noreferrer" className="hover:text-nola-gold underline">Privacy Policy</a></li>
                <li><a href="https://nolawealthfinancial.com/how-we-work/" target="_blank" rel="noopener noreferrer" className="hover:text-nola-gold underline">Fiduciary Standard</a></li>
                <li><a href="https://nolawealthfinancial.com/insurance/" target="_blank" rel="noopener noreferrer" className="hover:text-nola-gold underline">Full Insurance Services</a></li>
              </ul>
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
