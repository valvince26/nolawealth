"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Layers,
  Award,
  TrendingUp,
  Diamond,
} from "lucide-react";

export default function WhyNolaPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const differentiators = [
    {
      num: "01",
      tag: "Alignment",
      title: "One Integrated Partner",
      desc: "Access staffing, creative, and digital expertise through one relationship. Consolidate vendor communication into a cohesive executive cadence.",
      badge: "Single Master Agreement",
    },
    {
      num: "02",
      tag: "Agility",
      title: "Flexible Expertise",
      desc: "Add the exact capabilities your organization needs without building every function internally or carrying long-term structural overhead.",
      badge: "On-Demand Capacity",
    },
    {
      num: "03",
      tag: "Modularity",
      title: "Scalable Support",
      desc: "Start with a focused operational solution and smoothly expand as enterprise requirements, volume, and organizational complexity grow.",
      badge: "Adaptive Frameworks",
    },
    {
      num: "04",
      tag: "Quality",
      title: "Specialized Talent",
      desc: "Match tasks with senior professionals who have the vetted skills and category domain expertise required for institutional delivery.",
      badge: "Curated Subject Matter",
    },
    {
      num: "05",
      tag: "Governance",
      title: "Consistent Standards",
      desc: "Maintain coordinated communication rhythms, brand fidelity, and rigorous quality benchmarks across every workstream without friction.",
      badge: "Total Brand Harmony",
    },
    {
      num: "06",
      tag: "Strategy",
      title: "Business-Focused Solutions",
      desc: "Recommendations are structured around actual commercial milestones and corporate outcomes rather than rigid, prepackaged vendor tiers.",
      badge: "Outcome Oriented",
    },
  ];

  const traditionalPainPoints = [
    {
      title: "Multiple Vendors",
      desc: "Managing 4 to 7 discrete agency contracts, onboarding processes, and separate invoices.",
    },
    {
      title: "Separate Communication",
      desc: "Scattered email threads, conflicting status calls, and fragmented project management boards.",
    },
    {
      title: "Disconnected Strategies",
      desc: "Staffing teams unfamiliar with creative objectives; digital teams detached from operational targets.",
    },
    {
      title: "More Management Required",
      desc: "Your executive team wastes valuable hours playing coordinator across competing service providers.",
    },
    {
      title: "Difficult to Scale Consistently",
      desc: "Scaling up requires starting procurement and vetting cycles from zero each time.",
    },
  ];

  const nolaAdvantages = [
    {
      title: "One Coordinated Partner",
      desc: "A single strategic master agreement unlocking staffing, design, technology, and operations.",
    },
    {
      title: "Integrated Communication",
      desc: "Dedicated engagement leadership providing one weekly high-signal briefing across all initiatives.",
    },
    {
      title: "Connected Capabilities",
      desc: "Staffing decisions directly align with brand standards, digital roadmaps, and business targets.",
    },
    {
      title: "Simplified Management",
      desc: "We absorb the coordination complexity, freeing leadership to focus purely on high-leverage growth.",
    },
    {
      title: "Flexible Scaling",
      desc: "Seamlessly ramp services up, down, or pivot resources across departments as market conditions dictate.",
    },
  ];

  const journeySteps = [
    {
      num: "1",
      title: "Staffing",
      desc: "High-caliber talent sourcing, executive assistance, and specialized operational professionals placed with exact precision.",
      badge: "Talent Foundations",
    },
    {
      num: "2",
      title: "Operations",
      desc: "Process optimization, workflow documentation, workflow automation, and cross-functional governance systems.",
      badge: "Execution Architecture",
    },
    {
      num: "3",
      title: "Creative",
      desc: "Prestige brand identity, corporate presentations, luxury editorial publications, and bespoke asset development.",
      badge: "Identity & Narrative",
    },
    {
      num: "4",
      title: "Marketing",
      desc: "Executive positioning, strategic brand campaigns, institutional storytelling, and client acquisition funnels.",
      badge: "Market Expansion",
    },
    {
      num: "5",
      title: "Digital Growth",
      desc: "Custom platforms, digital client portals, system integrations, and scalable infrastructure engineered for enterprise longevity.",
      badge: "Compounding Value",
    },
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-20 flex-grow bg-surface">
        <div className="flex flex-col w-full">
          {/* 1. Hero Section */}
          <section className="relative overflow-hidden pt-space-2xl pb-space-3xl lg:pt-space-3xl lg:pb-space-4xl">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                <div className="lg:col-span-7 space-y-space-md">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-DEFAULT bg-surface-container text-secondary border border-secondary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    <span className="font-label-sm text-label-sm tracking-[0.2em] uppercase font-semibold">WHY NOLA</span>
                  </div>
                  <h1 className="font-headline-xl text-headline-xl lg:text-display-lg text-on-surface tracking-tight leading-[1.08] font-serif">
                    Less Complexity.<br />
                    <span className="italic font-normal text-secondary">More Capability.</span>
                  </h1>
                  <p className="font-body-xl text-body-xl text-on-surface-variant max-w-xl leading-relaxed">
                    Instead of coordinating multiple agencies, contractors, and service providers, work with one partner capable of supporting multiple areas of your business.
                  </p>
                  <div className="pt-space-sm flex flex-wrap items-center gap-space-md">
                    <button
                      onClick={() => setConsultationOpen(true)}
                      className="inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider px-7 py-3.5 rounded-DEFAULT bg-primary-container text-on-primary shadow-sm hover:bg-surface-tint transition-all"
                    >
                      Initiate Discovery
                    </button>
                    <div className="flex items-center gap-3 px-4 py-2 rounded-DEFAULT bg-surface-container-low text-on-surface-variant border border-secondary/15">
                      <span className="material-symbols-outlined text-secondary text-[20px]">verified_user</span>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">
                        Integrated Multi-Practice Firm
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
                  <div className="relative rounded-xl overflow-hidden shadow-xl bg-surface-container-lowest border border-secondary/20 aspect-[4/3] sm:aspect-auto sm:h-[460px]">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                      alt="Modern executive boardroom meeting"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 inset-x-0 p-space-lg text-on-primary">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="material-symbols-outlined text-secondary-fixed text-[18px]">hub</span>
                        <span className="font-label-sm text-label-sm uppercase tracking-[0.16em] text-secondary-fixed font-semibold">
                          Unified Execution
                        </span>
                      </div>
                      <p className="font-headline-sm text-headline-sm leading-snug font-serif">
                        Fewer handoffs, tighter alignment, and immediate organizational momentum.
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block absolute -bottom-6 -left-6 bg-surface-container-lowest p-space-md rounded-lg shadow-md max-w-xs border border-secondary/20 z-20">
                    <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Consolidated Operations</p>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">One accountable leadership team governing multi-department execution.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Main Differentiators Grid (6 high-craft cards) */}
          <section className="py-space-3xl lg:py-space-4xl bg-surface-container-low border-t border-secondary/15">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
                <div className="space-y-space-xs max-w-2xl">
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold">
                    Operational Superiority
                  </span>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface font-serif">
                    Architected for Singular Accountability
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  A bespoke structure engineered to eliminate friction, optimize organizational bandwidth, and drive sustained executive performance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
                {differentiators.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-all border border-secondary/15"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-space-md">
                        <span className="font-headline-sm text-headline-sm text-secondary font-serif font-bold">{item.num}</span>
                        <span className="px-2 py-0.5 rounded-DEFAULT bg-surface-container text-on-surface font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs font-serif">{item.title}</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                    </div>
                    <div className="pt-space-md mt-space-md flex items-center justify-between border-t border-outline-variant/20">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">{item.badge}</span>
                      <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. Comparison Section */}
          <section className="py-space-3xl lg:py-space-4xl bg-surface">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="text-center max-w-2xl mx-auto mb-space-2xl space-y-space-xs">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold">
                  Strategic Distinction
                </span>
                <h2 className="font-headline-xl text-headline-xl text-on-surface font-serif">
                  A Different Approach to Business Support
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Contrast conventional fragmented sourcing against our integrated partner model.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg items-stretch">
                {/* Traditional Approach */}
                <div className="bg-surface-container p-space-xl rounded-xl shadow-sm flex flex-col justify-between border border-outline-variant/30">
                  <div>
                    <div className="flex items-center justify-between pb-space-md mb-space-md border-b border-outline-variant/30">
                      <div className="space-y-1">
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline font-semibold">
                          The Conventional Model
                        </span>
                        <h3 className="font-headline-md text-headline-md text-on-surface font-serif">Traditional Approach</h3>
                      </div>
                      <span className="material-symbols-outlined text-outline text-[32px]">layers_clear</span>
                    </div>

                    <ul className="space-y-space-md font-body-md text-body-md text-on-surface-variant">
                      {traditionalPainPoints.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5">remove_circle_outline</span>
                          <div>
                            <strong className="text-on-surface font-semibold block">{item.title}</strong>
                            {item.desc}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-space-lg p-space-md rounded-lg bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider font-medium">
                    Typical Result: High friction, duplicated spend, fragmented oversight
                  </div>
                </div>

                {/* The NOLA Approach */}
                <div className="bg-primary-container text-on-primary p-space-xl rounded-xl shadow-xl flex flex-col justify-between relative overflow-hidden border border-secondary/30">
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-secondary/15 blur-2xl pointer-events-none"></div>

                  <div>
                    <div className="flex items-center justify-between pb-space-md mb-space-md border-b border-secondary/30">
                      <div className="space-y-1">
                        <div className="inline-flex items-center gap-1.5 text-secondary-fixed">
                          <span className="material-symbols-outlined text-[16px]">stars</span>
                          <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">
                            Executive Architecture
                          </span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-on-primary font-serif">The NOLA Approach</h3>
                      </div>
                      <span className="material-symbols-outlined text-secondary-fixed text-[32px]">military_tech</span>
                    </div>

                    <ul className="space-y-space-md font-body-md text-body-md text-on-primary-container">
                      {nolaAdvantages.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-secondary-fixed text-[20px] shrink-0 mt-0.5">check_circle</span>
                          <div>
                            <strong className="text-on-primary font-semibold block">{item.title}</strong>
                            {item.desc}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-space-lg p-space-md rounded-lg bg-tertiary-container text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider flex items-center justify-between font-semibold border border-secondary/20">
                    <span>NOLA Advantage: Seamless governance &amp; institutional speed</span>
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Capability Journey Section */}
          <section className="py-space-3xl lg:py-space-4xl bg-surface-container-lowest border-t border-secondary/15">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="mb-space-2xl space-y-space-xs">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold">
                  Organizational Continuum
                </span>
                <h2 className="font-headline-xl text-headline-xl text-on-surface font-serif">From Operations to Growth</h2>
                <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl">
                  Scale capabilities continuously without resetting relationships or switching vendors at every phase of maturity.
                </p>
              </div>

              {/* Progression Rail */}
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-md relative z-10">
                  {journeySteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-surface p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:bg-surface-container transition-all border border-secondary/15"
                    >
                      <div className="space-y-space-sm">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-headline-sm text-headline-sm font-serif font-bold">
                          {step.num}
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">{step.title}</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">{step.desc}</p>
                      </div>
                      <div className="pt-space-md mt-space-md text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold border-t border-outline-variant/20">
                        {step.badge}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-space-xl p-space-lg rounded-xl bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-md border border-secondary/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-container text-secondary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">sync_alt</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-serif">Zero Vendor Hand-offs</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Your corporate institutional memory stays intact as you expand across every phase.
                    </p>
                  </div>
                </div>
                <Link
                  href="/how-we-work"
                  className="shrink-0 font-label-md text-label-md uppercase tracking-wider text-secondary hover:text-on-surface flex items-center gap-1 font-semibold"
                >
                  <span>Explore Engagement Models</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* 5. Prestige Brand Statement */}
          <section className="py-space-4xl bg-primary-container text-on-primary relative overflow-hidden border-t border-secondary/30">
            {/* Subtle ambient lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-secondary/10 blur-[120px] pointer-events-none"></div>
            <div className="max-w-[1080px] mx-auto px-margin-mobile lg:px-margin-desktop relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-tertiary-container text-secondary mb-space-lg border border-secondary/30">
                <span className="material-symbols-outlined text-[24px]">diamond</span>
              </div>
              <p className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-secondary-fixed mb-space-md font-semibold">
                The Fiduciary Imperative
              </p>
              <blockquote className="font-headline-xl text-headline-xl lg:text-display-lg leading-tight tracking-tight text-on-primary font-serif italic">
                “Strategy gives direction. Creativity creates opportunity. Growth is the result.”
              </blockquote>
              <div className="mt-space-xl flex items-center justify-center gap-4">
                <div className="h-0.5 w-12 bg-secondary/40"></div>
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-on-primary-container">
                  NOLA Operational Philosophy
                </span>
                <div className="h-0.5 w-12 bg-secondary/40"></div>
              </div>
            </div>
          </section>

          {/* 6. Final Call to Action */}
          <section className="py-space-3xl lg:py-space-4xl bg-surface">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="bg-surface-container p-space-xl lg:p-space-3xl rounded-xl shadow-sm text-center relative overflow-hidden border border-secondary/20">
                <div className="max-w-2xl mx-auto space-y-space-md">
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold">
                    Immediate Integration
                  </span>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface font-serif">
                    See What NOLA Can Do for Your Business.
                  </h2>
                  <p className="font-body-xl text-body-xl text-on-surface-variant">
                    Connect directly with an executive partner to assess where consolidated support can eliminate operational bottlenecks and accelerate growth.
                  </p>
                  <div className="pt-space-md flex flex-col sm:flex-row items-center justify-center gap-space-md">
                    <Link
                      href="/services"
                      className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider px-8 py-4 rounded-DEFAULT bg-primary-container text-on-primary shadow-sm hover:bg-surface-tint transition-all"
                    >
                      Explore Our Services
                    </Link>
                    <button
                      onClick={() => setConsultationOpen(true)}
                      className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider px-8 py-4 rounded-DEFAULT bg-surface-container-lowest text-on-surface hover:bg-surface hover:text-secondary shadow-sm transition-all border border-secondary/20"
                    >
                      Talk to Our Team
                    </button>
                  </div>
                  <div className="pt-space-md flex items-center justify-center gap-6 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>Direct Partner Access
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>Fiduciary Discretion
                    </span>
                  </div>
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
