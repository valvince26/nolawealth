"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import {
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Activity,
  CheckCircle2,
  Lock,
  Building2,
  FileCheck,
  Users,
  Award,
  Sparkles,
  PhoneCall,
  ChevronDown,
} from "lucide-react";

export default function InsurancePage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"life" | "health">("life");

  const lifeInsurancePlans = [
    {
      icon: ShieldCheck,
      title: "Term Life Insurance",
      tag: "Flexible Coverage",
      desc: "High-limit coverage for defined terms (10–30 years). Ideal for debt protection, mortgage security, and income replacement during primary earning years.",
      features: [
        "Fixed premiums for guaranteed terms",
        "High coverage limits for high-earning individuals",
        "Convertible to permanent coverage without medical exams",
        "Tax-free death benefit disbursement to beneficiaries",
      ],
    },
    {
      icon: Lock,
      title: "Permanent & Whole Life",
      tag: "Asset & Cash Growth",
      desc: "Lifelong coverage combined with a tax-deferred cash value growth component. Ideal for estate liquidity, tax planning, and wealth transfer.",
      features: [
        "Guaranteed cash value accumulation",
        "Tax-advantaged loan access against cash reserves",
        "Estate tax liquidity for high-net-worth families",
        "Dividend earning potential with top mutual carriers",
      ],
    },
    {
      icon: Building2,
      title: "Key Person Insurance",
      tag: "Corporate Protection",
      desc: "Safeguards your enterprise against the financial strain of losing a critical founder, key executive, or specialized leader.",
      features: [
        "Offsets revenue loss during leadership transitions",
        "Funds recruitment and replacement search costs",
        "Reassures creditors, lenders, and investors",
        "Custom policy structures for executive teams",
      ],
    },
    {
      icon: FileCheck,
      title: "Buy-Sell Agreement Funding",
      tag: "Business Continuity",
      desc: "Life policies structured to fund cross-purchase or entity-purchase agreements between business partners upon a shareholder's passing.",
      features: [
        "Guarantees immediate liquidity for partner buyouts",
        "Prevents involuntary transfer of shares to heirs",
        "Fair market valuation safeguards for remaining partners",
        "Orderly transition without disturbing daily operations",
      ],
    },
  ];

  const healthInsurancePlans = [
    {
      icon: Users,
      title: "Group Health Benefit Plans",
      tag: "Employee & Executive Benefits",
      desc: "Customized group health insurance portfolios engineered for small-to-midsize businesses to attract, retain, and protect top tier talent.",
      features: [
        "Comprehensive PPO, EPO, and HSA-eligible HDHP options",
        "Executive medical reimbursement plans (105h)",
        "Dental, vision, and wellness add-on riders",
        "Full ERISA and ACA compliance administration",
      ],
    },
    {
      icon: HeartPulse,
      title: "Individual & Family Health Plans",
      tag: "Personal Care",
      desc: "Tailored health coverage for business owners, independent contractors, and families seeking premium provider networks.",
      features: [
        "Access to nationwide top-tier doctor and hospital networks",
        "Preventative care covered at 100%",
        "Prescription drug coverage & specialty care support",
        "Year-round enrollment assistance and tier optimization",
      ],
    },
    {
      icon: Activity,
      title: "Executive Disability Insurance",
      tag: "Income Protection",
      desc: "Protect your primary wealth engine—your earning power. Replaces high percentages of total executive income if illness or injury prevents work.",
      features: [
        "Own-occupation coverage definitions for specialists",
        "Non-cancelable policies with guaranteed premiums",
        "Bonus and incentive protection riders",
        "Tax-free benefit payments when structured correctly",
      ],
    },
    {
      icon: Sparkles,
      title: "Critical Illness & Care",
      tag: "Reserve Buffer",
      desc: "Lump-sum cash payments disbursed directly upon diagnosis of major illnesses (cancer, heart event, stroke) to preserve capital reserves.",
      features: [
        "Direct cash payment to policyholder for any use",
        "Covers out-of-pocket medical & experimental therapies",
        "Protects personal savings and investment portfolios",
        "Simplified underwriting with rapid payout triggers",
      ],
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Comprehensive Risk Assessment",
      desc: "We analyze your family dynamic, debt obligations, corporate liabilities, and health benefit goals to define exact coverage targets.",
    },
    {
      num: "02",
      title: "Multi-Carrier Market Audit",
      desc: "As an independent advisor, we compare rates and underwriting terms across top-rated national carriers (A+ AM Best ratings).",
    },
    {
      num: "03",
      title: "Integrated Structuring",
      desc: "We align policy ownership, beneficiary designations, and trust structures with your overall tax and estate plan.",
    },
    {
      num: "04",
      title: "White-Glove Underwriting & Placement",
      desc: "Our team manages medical exams, records requests, and carrier negotiations to ensure rapid, seamless policy issuance.",
    },
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-20 flex-grow bg-surface">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="relative w-full bg-surface py-space-3xl lg:py-space-4xl overflow-hidden border-b border-secondary/15">
            <div className="absolute -top-32 right-10 w-96 h-96 bg-secondary-fixed/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-12 w-80 h-80 bg-surface-container/60 rounded-full blur-2xl pointer-events-none"></div>

            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                <div className="lg:col-span-7 flex flex-col items-start">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-DEFAULT bg-surface-container-lowest shadow-sm mb-space-md border border-secondary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] font-semibold">
                      LIFE &amp; HEALTH INSURANCE ADVISORY
                    </span>
                  </div>

                  <h1 className="font-headline-xl text-headline-xl lg:text-display-lg text-on-surface tracking-tight mb-space-md leading-tight font-serif">
                    Protect Your Family. <br />
                    <span className="italic font-light text-secondary">Safeguard Your Legacy.</span>
                  </h1>

                  <p className="font-body-xl text-body-xl text-on-surface-variant max-w-xl mb-space-xl leading-relaxed">
                    NOLA Wealth provides tailored Life and Health Insurance solutions designed to insulate your family, key leaders, and enterprise assets against life’s unforeseen events.
                  </p>

                  <div className="flex flex-wrap items-center gap-space-md">
                    <button
                      onClick={() => setConsultationOpen(true)}
                      className="inline-flex items-center gap-3 px-7 py-3.5 rounded-DEFAULT bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow-md hover:bg-surface-tint transition-all"
                    >
                      <span>Schedule Coverage Audit</span>
                      <ArrowRight className="w-4 h-4 text-secondary-fixed" />
                    </button>
                    <a
                      href="#coverage-options"
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-DEFAULT bg-surface-container-lowest text-on-surface font-label-md text-label-md uppercase tracking-wider shadow-sm hover:text-secondary transition-colors border border-secondary/20"
                    >
                      <span>Explore Insurance Plans</span>
                      <ChevronDown className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-space-xl mt-space-xl w-full max-w-lg border-t border-outline-variant/20">
                    <div>
                      <p className="font-headline-lg text-headline-lg text-on-surface font-semibold font-serif">Top Tier</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">A+ Rated Carriers</p>
                    </div>
                    <div>
                      <p className="font-headline-lg text-headline-lg text-secondary font-semibold font-serif">100%</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Fiduciary Alignment</p>
                    </div>
                    <div>
                      <p className="font-headline-lg text-headline-lg text-on-surface font-semibold font-serif">Custom</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Portfolio Structuring</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative mt-space-xl lg:mt-0">
                  <div className="relative rounded-xl overflow-hidden shadow-xl bg-surface-container-lowest aspect-[4/3] sm:aspect-auto sm:h-[460px] border border-secondary/20">
                    <Image
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
                      alt="Healthcare and financial security consultation"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container/85 via-transparent to-transparent"></div>

                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md shadow-md border border-secondary/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-DEFAULT bg-primary-container flex items-center justify-center text-secondary-fixed shrink-0">
                            <ShieldCheck className="w-5 h-5 text-secondary" />
                          </div>
                          <div>
                            <span className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider">
                              Integrated Risk Protection
                            </span>
                            <span className="block font-body-sm text-body-sm text-on-surface-variant text-xs">
                              Combining wealth planning with medical &amp; life security
                            </span>
                          </div>
                        </div>
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse shrink-0"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tab Navigation Section */}
          <section className="w-full py-space-3xl bg-surface-container-low" id="coverage-options">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="text-center max-w-3xl mx-auto mb-space-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-DEFAULT bg-surface-container shadow-sm mb-space-xs border border-secondary/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] font-semibold">
                    OUR COVERAGE PORTFOLIO
                  </span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface font-serif">
                  Life &amp; Health Protection Solutions
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
                  Choose between targeted personal and business life insurance or executive group health coverage.
                </p>

                {/* Toggle Buttons */}
                <div className="inline-flex items-center p-1.5 rounded-xl bg-surface-container-lowest border border-secondary/20 shadow-sm mt-space-lg">
                  <button
                    onClick={() => setActiveTab("life")}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-label-md text-label-md uppercase tracking-wider transition-all ${
                      activeTab === "life"
                        ? "bg-secondary text-on-secondary shadow-md font-semibold"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Life Insurance Solutions</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("health")}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-label-md text-label-md uppercase tracking-wider transition-all ${
                      activeTab === "health"
                        ? "bg-secondary text-on-secondary shadow-md font-semibold"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    <HeartPulse className="w-4 h-4" />
                    <span>Health &amp; Disability Coverage</span>
                  </button>
                </div>
              </div>

              {/* Life Insurance Cards */}
              {activeTab === "life" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-desktop animate-in fade-in duration-300">
                  {lifeInsurancePlans.map((plan, idx) => {
                    const IconComp = plan.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm border border-secondary/15 hover:border-secondary/30 transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-space-md">
                            <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:bg-primary-container group-hover:text-secondary-fixed transition-colors">
                              <IconComp className="w-6 h-6" />
                            </div>
                            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold px-3 py-1 bg-surface-container rounded-DEFAULT border border-secondary/20">
                              {plan.tag}
                            </span>
                          </div>

                          <h3 className="font-headline-md text-headline-md text-on-surface mb-2 font-serif">{plan.title}</h3>
                          <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
                            {plan.desc}
                          </p>

                          <ul className="space-y-2.5 mb-space-lg">
                            {plan.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2.5 font-body-md text-body-md text-on-surface">
                                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-space-md border-t border-outline-variant/20">
                          <button
                            onClick={() => setConsultationOpen(true)}
                            className="inline-flex items-center justify-between w-full font-label-md text-label-md uppercase tracking-wider text-secondary hover:text-on-surface transition-colors"
                          >
                            <span>Request Life Quote</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Health Insurance Cards */}
              {activeTab === "health" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-desktop animate-in fade-in duration-300">
                  {healthInsurancePlans.map((plan, idx) => {
                    const IconComp = plan.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm border border-secondary/15 hover:border-secondary/30 transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-space-md">
                            <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:bg-primary-container group-hover:text-secondary-fixed transition-colors">
                              <IconComp className="w-6 h-6" />
                            </div>
                            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold px-3 py-1 bg-surface-container rounded-DEFAULT border border-secondary/20">
                              {plan.tag}
                            </span>
                          </div>

                          <h3 className="font-headline-md text-headline-md text-on-surface mb-2 font-serif">{plan.title}</h3>
                          <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
                            {plan.desc}
                          </p>

                          <ul className="space-y-2.5 mb-space-lg">
                            {plan.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2.5 font-body-md text-body-md text-on-surface">
                                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-space-md border-t border-outline-variant/20">
                          <button
                            onClick={() => setConsultationOpen(true)}
                            className="inline-flex items-center justify-between w-full font-label-md text-label-md uppercase tracking-wider text-secondary hover:text-on-surface transition-colors"
                          >
                            <span>Request Health Plan Proposal</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>

          {/* Process & Fiduciary Advantage Section */}
          <section className="w-full py-space-4xl bg-surface border-t border-secondary/15">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-space-2xl mb-space-3xl">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-DEFAULT bg-surface-container text-secondary mb-space-xs border border-secondary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] font-semibold">
                      THE ADVISORY METHOD
                    </span>
                  </div>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface font-serif">
                    How We Structure Your Insurance Portfolio
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
                    Insurance isn’t an isolated purchase. We integrate your policies directly into your estate plan, corporate structure, and tax strategy.
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => setConsultationOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-DEFAULT bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow-sm hover:bg-surface-tint transition-all"
                  >
                    <span>Request Fiduciary Policy Review</span>
                    <ArrowRight className="w-4 h-4 text-secondary-fixed" />
                  </button>
                </div>
              </div>

              {/* 4 Process Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
                {processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-surface-container-low p-space-lg rounded-xl border border-secondary/15 flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-headline-md text-headline-md text-secondary font-serif font-bold block mb-2">
                        {step.num}
                      </span>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-serif">{step.title}</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Executive CTA Banner */}
          <section className="w-full py-space-4xl bg-primary-container text-on-primary relative overflow-hidden border-t border-secondary/30">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
              <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-xl lg:p-space-3xl rounded-xl border border-secondary/30 text-center max-w-4xl mx-auto shadow-2xl">
                <Award className="w-12 h-12 text-secondary-fixed mx-auto mb-space-md" />
                <h2 className="font-headline-xl text-headline-xl text-on-primary font-serif mb-space-md">
                  Ensure Your Life &amp; Health Protection Needs Are Met
                </h2>
                <p className="font-body-xl text-body-xl text-on-primary-container max-w-2xl mx-auto mb-space-xl">
                  Connect with a NOLA insurance specialist for an independent, zero-pressure evaluation of your personal or business insurance needs.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-space-md">
                  <button
                    onClick={() => setConsultationOpen(true)}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-DEFAULT bg-secondary text-on-secondary font-label-md text-label-md uppercase tracking-wider shadow-lg hover:bg-on-secondary-fixed-variant transition-all"
                  >
                    <span>Book Insurance Consultation</span>
                    <PhoneCall className="w-4 h-4" />
                  </button>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-DEFAULT bg-white/10 text-on-primary hover:bg-white/20 transition-colors font-label-md text-label-md uppercase tracking-wider border border-secondary/20"
                  >
                    <span>Contact Advisory Team</span>
                    <ArrowRight className="w-4 h-4 text-secondary-fixed" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </>
  );
}
