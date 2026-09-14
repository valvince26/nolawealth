"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setShowErrorBanner(true);
      return;
    }

    setShowErrorBanner(false);
    setIsSubmitting(true);

    // Simulate backend lead ingestion API, then route to thank you page
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/life-insurance-quote/thank-you");
    }, 1200);
  };

  const triggerSimulatedSuccess = () => {
    setFullName("Jonathan Vance");
    setStateResidence("LA");
    setPhoneNumber("(504) 891-2000");
    setProtectionGoal("family_income");
    setFullNameError(false);
    setStateError(false);
    setPhoneError(false);
    setEmailError(false);
    setShowErrorBanner(false);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/life-insurance-quote/thank-you");
    }, 1200);
  };

  const toggleSimulatedError = () => {
    setShowErrorBanner((prev) => !prev);
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsAQJR0CZLrKvty1YVkSxNKwSgv-fSB-oopNn5kJaYdCKNZAr5aMX_EGM18uuSjBfN7M72-cQvvtv4LBMrRv9XQFMQMXGGORP8Y4s7h38qT2HAyzAadi3_HzjZGtQsz2UtUaC932HZ-sW_vz13RKzmvUn2l7ISm2ip9SyRkdxHQiKp1p8h29WUU8cfZymblCp8DxFxmvMumId1mDGIadwgg5V4rpukHsxzcjZs6267b_MJc_aa5DHgU2nkK-byqsQZIEE"
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
                        * Draft copy for review before campaign launch. No automated SMS or unsolicited third-party marketing.
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

                {/* DEV QA TOOLBAR */}
                <div className="mt-6 pt-4 border-t border-dashed border-nola-border flex flex-wrap items-center justify-between gap-2 text-[10px] text-nola-muted">
                  <span className="font-mono text-gray-400 uppercase">Interactive State QA:</span>
                  <div className="flex gap-2">
                    <button type="button" onClick={triggerSimulatedSuccess} className="underline hover:text-nola-gold">Simulate Submit</button>
                    <span>•</span>
                    <button type="button" onClick={toggleSimulatedError} className="underline hover:text-nola-gold">Toggle Error State</button>
                    <span>•</span>
                    <a href="#state-showcase" className="text-nola-gold underline font-semibold">View All States</a>
                  </div>
                </div>

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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX0LwZvdKU6NW6nITZpZZKPMewR-74T_KXESzY2aLRA-Bm7sSBxuGhElaJ5PunygsnXwLe-mUip31xLAi6_lIrA2ngDnGfKyz4a8iqXdT3YG8gtj65EuQbg_6bUZhSgMORerVXpqCRftev57VnscUEuZck5Er2oJJpBDJSiLmBiuA4Q50x30dLJJBXFJN5uPHIGNS2IiHjocJLwOOwMiSpewypi15DVCyju34O9rD-7LMLisvXLaSdVGE411aZesV_sQc" 
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

      {/* FORM INTERACTION STATES SHOWCASE */}
      <aside id="state-showcase" className="bg-gray-100 py-12 border-t-4 border-nola-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-nola-navy text-white rounded">DEV SPEC</span>
              <h3 className="text-xl font-serif font-bold text-nola-navy">Form Interaction &amp; Validation States Matrix</h3>
            </div>
            <p className="text-xs text-nola-muted mt-1">
              Visual documentation of all 7 requested states for the single-step <code className="bg-gray-200 px-1 py-0.5 rounded text-nola-navy font-mono">life_quote_v1</code> form component in Antigravity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="bg-white p-4 rounded border border-nola-border shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-nola-gold font-bold block mb-2">1. Active / Focused Field</span>
              <label className="block font-semibold text-nola-navy mb-1">Full Name</label>
              <input type="text" value="Jonathan Van" className="w-full px-2.5 py-1.5 rounded border-2 border-nola-gold ring-2 ring-nola-gold/20 text-xs focus:outline-none" readOnly />
              <span className="text-[10px] text-nola-muted mt-1 block">Gold highlight outline &amp; focus ring.</span>
            </div>

            <div className="bg-white p-4 rounded border border-nola-border shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 font-bold block mb-2">2. Completed / Valid</span>
              <label className="block font-semibold text-nola-navy mb-1">State of Residence</label>
              <div className="relative">
                <input type="text" value="Louisiana (LA)" className="w-full px-2.5 py-1.5 rounded border border-emerald-500 bg-emerald-50/20 text-xs text-gray-800" readOnly />
                <span className="absolute right-2 top-2 text-emerald-600">✓</span>
              </div>
              <span className="text-[10px] text-emerald-700 mt-1 block">Subtle green validation cue.</span>
            </div>

            <div className="bg-white p-4 rounded border border-nola-border shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-red-600 font-bold block mb-2">3. Missing Required / Invalid</span>
              <label className="block font-semibold text-nola-navy mb-1">Phone Number <span className="text-red-500">*</span></label>
              <input type="text" value="504-12" className="w-full px-2.5 py-1.5 rounded border border-red-500 bg-red-50/30 text-xs text-red-900" readOnly />
              <span className="text-[10px] text-red-600 mt-1 block">Please enter a valid 10-digit phone number.</span>
            </div>

            <div className="bg-white p-4 rounded border border-nola-border shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-bold block mb-2">4. Submitting / Loading</span>
              <button className="w-full py-2 px-3 rounded bg-nola-gold text-nola-navyDeep font-bold text-xs flex items-center justify-center gap-2 opacity-80 cursor-wait">
                <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Submitting Request...
              </button>
              <span className="text-[10px] text-nola-muted mt-1.5 block">Disabled state, prevents double submission.</span>
            </div>
          </div>

          <div className="mt-6 p-4 rounded bg-nola-navyMuted text-white/90 border border-white/10 text-xs">
            <h4 className="font-bold text-nola-gold mb-1">Engineering Handoff Annotations (Antigravity &amp; Vercel)</h4>
            <ul className="list-disc list-inside space-y-1 text-white/70">
              <li><strong>Form Identifier:</strong> <code className="text-nola-gold">life_quote_v1</code>. Preserve campaign attribution parameters (<code className="text-white">utm_source</code>, <code className="text-white">utm_campaign</code>, <code className="text-white">utm_content</code>) alongside submitted lead record.</li>
              <li><strong>Privacy &amp; Tracking Isolation:</strong> Do not trigger third-party pixels with PII fields. Advertising tracking is separated from backend lead ingestion.</li>
              <li><strong>Carrier Licensing Rule:</strong> Backend state validation must cross-reference Nola's active producer licenses before routing lead to advisors.</li>
              <li><strong>Confirmation Routing:</strong> On successful 200 OK from server API, route user directly to <code className="text-nola-gold">/life-insurance-quote/thank-you</code>.</li>
            </ul>
          </div>
        </div>
      </aside>

    </div>
  );
}
