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
  Calendar,
  ExternalLink,
  ShieldCheck,
  Zap,
  Lock,
  Search,
  Layers,
  TrendingUp,
  MessageSquare,
  Kanban,
  Clock,
  Sparkles,
} from "lucide-react";

export default function HowWeWorkPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const steps = [
    {
      num: "01",
      icon: "search_insights",
      tag: "Discover",
      title: "Understand the Business",
      desc: "We learn about your organization, current challenges, priorities, workflow, goals, and existing resources.",
      deliverables: ["Workflow Audit & Gap Matrix", "Operational Capacity Assessment"],
    },
    {
      num: "02",
      icon: "architecture",
      tag: "Design",
      title: "Build the Right Solution",
      desc: "We identify the people, services, and capabilities that best align with your requirements.",
      deliverables: ["Bespoke Talent & Tool Architecture", "Governance & SLA Blueprints"],
    },
    {
      num: "03",
      icon: "rocket_launch",
      tag: "Execute",
      title: "Put the Plan Into Action",
      desc: "Our specialists begin delivering while working within an organized process designed around your business.",
      deliverables: ["Sprint Zero Onboarding", "Weekly Milestone Deliverables"],
    },
    {
      num: "04",
      icon: "trending_up",
      tag: "Grow",
      title: "Improve and Scale",
      desc: "As needs evolve, services can be optimized, expanded, or adjusted to support the next stage of growth.",
      deliverables: ["Quarterly Operational Reviews", "Dynamic Headcount Optimization"],
    },
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-20 flex-grow bg-surface">
        <div className="flex flex-col w-full">
          {/* SECTION 1: EDITORIAL HEADER & STRATEGY OVERTURE */}
          <section className="relative w-full py-space-3xl lg:py-space-4xl overflow-hidden bg-surface">
            {/* Subtle architectural background glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary-fixed/20 rounded-full blur-3xl pointer-events-none -z-0"></div>
            <div className="absolute -bottom-16 left-10 w-80 h-80 bg-surface-container/60 rounded-full blur-2xl pointer-events-none -z-0"></div>

            <div className="relative z-10 max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="max-w-4xl space-y-space-md">
                {/* Eyebrow Tag */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-DEFAULT bg-surface-container-lowest shadow-sm border border-secondary/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-secondary">
                    How We Work
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight leading-tight">
                  A Smarter Way to Build the Support Your Business Needs.
                </h1>

                {/* Executive Subtitle */}
                <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl leading-relaxed">
                  Every business is different. That's why NOLA starts by understanding your objectives before recommending people, services, or solutions.
                </p>

                {/* Quick Metatags */}
                <div className="pt-space-sm flex flex-wrap items-center gap-y-2 gap-x-space-lg text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary text-base">verified</span>
                    Zero Cookie-Cutter Deployments
                  </span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary text-base">farsight_digital</span>
                    Fiduciary-Grade Discretion
                  </span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary text-base">sync_alt</span>
                    Native Workflow Frictionless Sync
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: ARCHITECTURAL 4-STEP CONNECTED FRAMEWORK */}
          <section className="relative w-full py-space-3xl lg:py-space-4xl bg-surface-container-lowest border-t border-secondary/15">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              {/* Section Intro Grid */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-space-2xl gap-space-md">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold">
                    The Execution Blueprint
                  </span>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1 font-serif">
                    Disciplined, Milestone-Driven Orchestration
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Our four-stage engagement lifecycle ensures transparent accountability, predictable velocity, and continuous strategic alignment.
                </p>
              </div>

              {/* 4-Step Connected Framework Cards */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter-desktop">
                {/* Connecting Line for Desktop */}
                <div className="hidden xl:block absolute top-28 left-[12%] right-[12%] h-[1px] bg-secondary/30 pointer-events-none z-0"></div>

                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative z-10 flex flex-col bg-surface p-space-lg rounded-DEFAULT shadow-sm hover:shadow-md transition-shadow group border border-secondary/15"
                  >
                    <div className="flex items-center justify-between mb-space-lg">
                      <span className="font-headline-lg text-headline-lg text-secondary font-semibold font-serif">
                        {step.num}
                      </span>
                      <div className="w-12 h-12 rounded-DEFAULT bg-surface-container-high flex items-center justify-center text-on-surface group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                        <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm uppercase tracking-[0.14em] text-secondary mb-1 font-semibold">
                      {step.tag}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-serif">
                      {step.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant flex-grow leading-relaxed">
                      {step.desc}
                    </p>
                    <div className="mt-space-lg pt-space-sm border-t border-secondary/15 flex flex-col gap-1.5">
                      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                        Deliverables:
                      </span>
                      {step.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-on-surface font-body-md text-[13px]">
                          <span className="material-symbols-outlined text-secondary text-sm">check_small</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3: FLEXIBLE ENGAGEMENT TIERS */}
          <section className="w-full py-space-3xl lg:py-space-4xl bg-surface">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="text-center max-w-3xl mx-auto mb-space-3xl space-y-space-xs">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold">
                  Tailored Deployment Frameworks
                </span>
                <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-serif">
                  Built Around What You Actually Need
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Select the exact operational altitude required for your enterprise, from singular specialist surgical injections to turnkey cross-functional units.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-desktop">
                {/* Card 1: Individual Specialists */}
                <div className="bg-surface-container-lowest p-space-xl rounded-DEFAULT shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-secondary/20">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-label-sm text-label-sm uppercase tracking-[0.14em] text-secondary font-bold">
                        01 / Modular Insertion
                      </span>
                      <span className="material-symbols-outlined text-secondary text-2xl">badge</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs font-serif">
                      Individual Specialists
                    </h3>
                    <p className="font-body-lg text-body-lg text-secondary font-medium mb-space-md">
                      Add specific talent to your existing team.
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                      Embed senior-grade technical architects, UI/UX designers, or project managers directly into your internal workflow without overhead friction.
                    </p>
                    <ul className="space-y-space-xs mb-space-xl">
                      <li className="flex items-start gap-2.5 font-body-md text-body-md text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-lg mt-0.5">check_circle</span>
                        <span>Rapid surgical domain placement</span>
                      </li>
                      <li className="flex items-start gap-2.5 font-body-md text-body-md text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-lg mt-0.5">check_circle</span>
                        <span>Elastic ramp-up and flexible ramp-down</span>
                      </li>
                      <li className="flex items-start gap-2.5 font-body-md text-body-md text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-lg mt-0.5">check_circle</span>
                        <span>Immediate cultural and tools alignment</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => setConsultationOpen(true)}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-DEFAULT bg-surface-container font-label-md text-label-md uppercase tracking-wider text-on-surface hover:bg-secondary hover:text-on-secondary transition-colors border border-secondary/20"
                  >
                    <span>Request Specialist Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Card 2: Dedicated Support Teams (Highlighted Executive Card) */}
                <div className="relative bg-primary-container text-on-primary p-space-xl rounded-DEFAULT shadow-xl flex flex-col justify-between overflow-hidden border border-secondary/30">
                  {/* Ambient Gold Glow Accent */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/20 rounded-full blur-2xl pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-label-sm text-label-sm uppercase tracking-[0.14em] text-secondary-fixed-dim font-bold">
                        02 / Pod Deployment
                      </span>
                      <span className="px-2.5 py-1 rounded-DEFAULT bg-secondary text-on-secondary font-label-sm text-[10px] uppercase tracking-widest font-bold">
                        Most Selected
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-primary mb-space-xs font-serif">
                      Dedicated Support Teams
                    </h3>
                    <p className="font-body-lg text-body-lg text-secondary-fixed font-medium mb-space-md">
                      Build a larger team around an ongoing business function.
                    </p>
                    <p className="font-body-md text-body-md text-on-primary-container leading-relaxed mb-space-lg">
                      Autonomous pods equipped with an experienced Delivery Lead, senior executors, and quality governance to run high-throughput operations.
                    </p>
                    <ul className="space-y-space-xs mb-space-xl">
                      <li className="flex items-start gap-2.5 font-body-md text-body-md text-on-primary">
                        <span className="material-symbols-outlined text-secondary-fixed-dim text-lg mt-0.5">check_circle</span>
                        <span>Dedicated Delivery Lead &amp; SLA accountability</span>
                      </li>
                      <li className="flex items-start gap-2.5 font-body-md text-body-md text-on-primary">
                        <span className="material-symbols-outlined text-secondary-fixed-dim text-lg mt-0.5">check_circle</span>
                        <span>Predictable monthly capacity and unified cadence</span>
                      </li>
                      <li className="flex items-start gap-2.5 font-body-md text-body-md text-on-primary">
                        <span className="material-symbols-outlined text-secondary-fixed-dim text-lg mt-0.5">check_circle</span>
                        <span>Seamless institutional knowledge retention</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative z-10">
                    <button
                      onClick={() => setConsultationOpen(true)}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-DEFAULT bg-secondary text-on-secondary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-colors shadow-sm"
                    >
                      <span>Inquire About Pods</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card 3: Integrated Solutions */}
                <div className="bg-surface-container-lowest p-space-xl rounded-DEFAULT shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-secondary/20">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-label-sm text-label-sm uppercase tracking-[0.14em] text-secondary font-bold">
                        03 / Turnkey Synergy
                      </span>
                      <span className="material-symbols-outlined text-secondary text-2xl">hub</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs font-serif">
                      Integrated Solutions
                    </h3>
                    <p className="font-body-lg text-body-lg text-secondary font-medium mb-space-md">
                      Combine staffing, creative, and digital expertise.
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                      One coordinated service model orchestrating multi-disciplinary talent across brand, engineering, and remote operations under holistic advisory.
                    </p>
                    <ul className="space-y-space-xs mb-space-xl">
                      <li className="flex items-start gap-2.5 font-body-md text-body-md text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-lg mt-0.5">check_circle</span>
                        <span>Cross-functional synergy and zero vendor sprawl</span>
                      </li>
                      <li className="flex items-start gap-2.5 font-body-md text-body-md text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-lg mt-0.5">check_circle</span>
                        <span>Executive strategic guidance from NOLA Partners</span>
                      </li>
                      <li className="flex items-start gap-2.5 font-body-md text-body-md text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-lg mt-0.5">check_circle</span>
                        <span>End-to-end performance and governance oversight</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => setConsultationOpen(true)}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-DEFAULT bg-surface-container font-label-md text-label-md uppercase tracking-wider text-on-surface hover:bg-secondary hover:text-on-secondary transition-colors border border-secondary/20"
                  >
                    <span>Explore Integrated Models</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: COLLABORATION & INTEGRATION SECTION (SPLIT LAYOUT) */}
          <section className="w-full py-space-3xl lg:py-space-4xl bg-surface-container-lowest overflow-hidden border-t border-secondary/15">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                {/* Text & Narrative (Left: 6 Cols) */}
                <div className="lg:col-span-6 space-y-space-lg">
                  <div className="space-y-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold">
                      Frictionless Integration
                    </span>
                    <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-serif">
                      Designed to Work With Your Business
                    </h2>
                  </div>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    We reject the conventional vendor-client dichotomy. NOLA operates as an intimate, high-functioning extension of your leadership and internal teams—adapting immediately to your communication rhythms, project trackers, and corporate ethos.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    By embedding directly into your operational stack, we eliminate handoff latency, eliminate bureaucratic drag, and maintain continuous delivery momentum from day one.
                  </p>

                  {/* Integration Feature Badges */}
                  <div className="pt-space-xs grid grid-cols-1 sm:grid-cols-3 gap-space-md">
                    <div className="p-space-md bg-surface rounded-DEFAULT shadow-sm border border-secondary/15">
                      <span className="material-symbols-outlined text-secondary text-2xl mb-1">forum</span>
                      <h4 className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">Direct Sync</h4>
                      <p className="font-label-sm text-[12px] text-on-surface-variant mt-1">Single Slack &amp; Teams channels for real-time collaboration.</p>
                    </div>
                    <div className="p-space-md bg-surface rounded-DEFAULT shadow-sm border border-secondary/15">
                      <span className="material-symbols-outlined text-secondary text-2xl mb-1">view_kanban</span>
                      <h4 className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">Unified Sprints</h4>
                      <p className="font-label-sm text-[12px] text-on-surface-variant mt-1">Directly integrated into Jira, Linear, or Asana workflows.</p>
                    </div>
                    <div className="p-space-md bg-surface rounded-DEFAULT shadow-sm border border-secondary/15">
                      <span className="material-symbols-outlined text-secondary text-2xl mb-1">event_available</span>
                      <h4 className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">Weekly Syncs</h4>
                      <p className="font-label-sm text-[12px] text-on-surface-variant mt-1">Structured leadership syncs for governance &amp; clarity.</p>
                    </div>
                  </div>
                </div>

                {/* Visual / Architectural Frame (Right: 6 Cols) */}
                <div className="lg:col-span-6 relative">
                  <div className="relative z-10 bg-surface rounded-DEFAULT overflow-hidden shadow-xl border border-secondary/20">
                    <div className="relative w-full h-80 sm:h-96">
                      <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                        alt="Strategic team collaboration in high-rise boardroom"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    {/* Embedded Live Metrics Bar Overlay */}
                    <div className="p-space-md bg-primary-container text-on-primary grid grid-cols-3 gap-2 text-center border-t border-secondary/30">
                      <div>
                        <span className="font-headline-sm text-headline-sm text-secondary-fixed block font-serif">100%</span>
                        <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-primary-container">Workflow Parity</span>
                      </div>
                      <div>
                        <span className="font-headline-sm text-headline-sm text-secondary-fixed block font-serif">&lt; 24h</span>
                        <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-primary-container">Escalation SLA</span>
                      </div>
                      <div>
                        <span className="font-headline-sm text-headline-sm text-secondary-fixed block font-serif">0%</span>
                        <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-primary-container">Vendor Friction</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: FINAL HIGH-IMPACT CALL TO ACTION */}
          <section className="w-full py-space-3xl lg:py-space-4xl bg-surface relative overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="relative bg-primary-container text-on-primary rounded-DEFAULT p-space-2xl lg:p-space-3xl shadow-xl overflow-hidden text-center max-w-4xl mx-auto border border-secondary/30">
                {/* Subtle background crest motif */}
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 max-w-2xl mx-auto space-y-space-md">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-DEFAULT bg-surface-container-high/20 border border-secondary/30">
                    <span className="material-symbols-outlined text-secondary-fixed text-sm">handshake</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary-fixed">
                      Next Steps
                    </span>
                  </div>

                  <h2 className="font-headline-xl text-headline-xl text-on-primary tracking-tight font-serif">
                    Start With a Conversation.
                  </h2>

                  <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                    Tell us where your business needs support and we'll help map out the next step. No rigid packages, no generic pitches—just a clear operational path forward.
                  </p>

                  <div className="pt-space-sm flex flex-col sm:flex-row items-center justify-center gap-space-md">
                    <button
                      onClick={() => setConsultationOpen(true)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-DEFAULT bg-secondary text-on-secondary font-label-md text-label-md uppercase tracking-wider shadow-md hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all"
                    >
                      <span>Book a Consultation</span>
                      <Calendar className="w-4 h-4 text-on-secondary" />
                    </button>
                    <Link
                      href="/services"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-DEFAULT bg-transparent text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container-high/15 transition-colors border border-secondary/20"
                    >
                      <span>View Practice Areas</span>
                      <ArrowRight className="w-4 h-4 text-secondary-fixed" />
                    </Link>
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
