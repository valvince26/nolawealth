"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import {
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Phone,
  ShieldCheck,
  Zap,
  Lock as LockIcon,
  Sparkles,
} from "lucide-react";

export default function ServicesPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const remoteStaffing = [
    {
      num: "01.1",
      icon: "support_agent",
      title: "Telemarketing & Sales",
      desc: "Targeted outreach, high-intent lead qualification, pipeline expansion, and relationship nurture managed by trained account representatives.",
      badge: "Outbound & Inbound",
    },
    {
      num: "01.2",
      icon: "assignment_ind",
      title: "Virtual Assistant",
      desc: "Executive calendar management, communications orchestration, travel itineraries, briefing coordination, and personal operational logistics.",
      badge: "Executive Support",
    },
    {
      num: "01.3",
      icon: "tune",
      title: "Operational Support",
      desc: "Internal workflow coordination, document processing, vendor relationship administration, and recurring SOP oversight across units.",
      badge: "Process Continuity",
    },
    {
      num: "01.4",
      icon: "terminal",
      title: "Technical Support",
      desc: "Multi-tier IT troubleshooting, software configuration, SaaS ecosystem administration, and rapid-response user issue resolution.",
      badge: "Tier 1 & Tier 2 IT",
    },
    {
      num: "01.5",
      icon: "videocam",
      title: "Video Monitoring",
      desc: "Continuous live visual auditing, security protocol verifications, compliance tracking, and facilities event reporting around the clock.",
      badge: "24/7 Surveillance",
    },
    {
      num: "01.6",
      icon: "account_balance_wallet",
      title: "Bookkeeping",
      desc: "Flawless ledger reconciliation, accounts payable & receivable reconciliation, invoice auditing, and clean recurring month-end closures.",
      badge: "General Ledger",
    },
  ];

  const creativeServices = [
    {
      icon: "palette",
      badge: "Asset Suite",
      title: "Graphic Design",
      desc: "High-impact collateral, presentation pitch decks, corporate annual reports, infographics, and omni-channel promotional visuals.",
      sub: "Vector / Print / Social",
    },
    {
      icon: "movie",
      badge: "Motion",
      title: "Video Production",
      desc: "Cinematic brand manifestos, customer testimonials, product walkthroughs, and animated explainer suites built for conversion.",
      sub: "Full Studio Pipeline",
    },
    {
      icon: "edit_note",
      badge: "Voice",
      title: "Copywriting",
      desc: "Persuasive editorial positioning, conversion-focused landing page copy, corporate whitepapers, and brand narrative development.",
      sub: "Verbal Identity",
    },
    {
      icon: "photo_camera",
      badge: "Imagery",
      title: "Photography",
      desc: "Executive headshots, industrial facility captures, commercial product catalogs, and editorial event coverage crafted to elevate brand equity.",
      sub: "Commercial Grade",
    },
    {
      icon: "auto_stories",
      badge: "Architecture",
      title: "Branding",
      desc: "Complete corporate identity systems: monogram marks, typography hierarchies, brand stylebooks, and tonal style guides.",
      sub: "Visual Identity Guidelines",
    },
    {
      icon: "web",
      badge: "Interface",
      title: "Web Design",
      desc: "Immersive, responsive user experiences designed with architectural precision, fluid grid mechanics, and purposeful user journeys.",
      sub: "UX / UI Architecture",
    },
    {
      icon: "lightbulb",
      badge: "Advisory",
      title: "Marketing Strategy",
      desc: "Comprehensive go-to-market blueprints, audience segmentation, competitive intelligence, and high-impact quarterly growth plans.",
      sub: "Market Positioning",
    },
    {
      icon: "rate_review",
      badge: "Editorial",
      title: "Content Creation",
      desc: "Multi-channel content engines delivering authoritative thought leadership, technical documentation, newsletters, and engaging stories.",
      sub: "Thought Leadership",
    },
    {
      icon: "code_blocks",
      badge: "Engineering",
      title: "Custom Software Dev",
      desc: "Tailored business portals, client dashboards, API integrations, and enterprise-grade internal tools engineered for performance.",
      sub: "Scalable Systems",
    },
  ];

  const digitalServices = [
    {
      num: "03.1",
      icon: "search_insights",
      title: "SEO Architecture",
      desc: "Technical indexation optimization, high-intent keyword strategies, structured data schemas, and domain authority acceleration.",
      badge: "Organic Reach",
    },
    {
      num: "03.2",
      icon: "ads_click",
      title: "PPC Advertising",
      desc: "Disciplined paid search, display networks, retargeting funnels, and programmatic placement designed for optimal customer acquisition.",
      badge: "Performance Media",
    },
    {
      num: "03.3",
      icon: "forum",
      title: "Social Media Mgmt",
      desc: "Executive community cultivation, multichannel social scheduling, brand monitoring, and active digital reputation protection.",
      badge: "Community & Reach",
    },
    {
      num: "03.4",
      icon: "device_hub",
      title: "Omnichannel Support",
      desc: "Unified client journey touchpoints across chat, SMS, CRM ticketing, voice portals, and email for continuous, friction-free engagement.",
      badge: "Integrated CX",
    },
    {
      num: "03.5",
      icon: "mail",
      title: "Email Marketing",
      desc: "Automated lifecycle campaigns, drip sequences, behavioral trigger workflows, newsletter publications, and deliverability governance.",
      badge: "Retention & LTV",
    },
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-20 flex-grow bg-surface">
        <div className="flex flex-col w-full">
          {/* Top Ambient Glow & Eyebrow Section */}
          <section className="relative w-full bg-surface py-space-3xl lg:py-space-4xl overflow-hidden">
            <div className="absolute -top-32 right-10 w-96 h-96 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-12 w-80 h-80 bg-surface-container/60 rounded-full blur-2xl pointer-events-none"></div>

            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                {/* Text Column */}
                <div className="lg:col-span-7 flex flex-col items-start">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-DEFAULT bg-surface-container-lowest shadow-sm mb-space-md border border-secondary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">
                      Our Services
                    </span>
                  </div>

                  <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight mb-space-md leading-tight">
                    The Expertise Your Business Needs, <span className="italic font-light text-secondary">All in One Place.</span>
                  </h1>

                  <p className="font-body-xl text-body-xl text-on-surface-variant max-w-xl mb-space-xl leading-relaxed">
                    From expanding your team to strengthening your brand and accelerating digital growth, NOLA provides integrated services designed around your business.
                  </p>

                  <div className="flex flex-wrap items-center gap-space-md">
                    <a
                      href="#discovery-advisory"
                      className="inline-flex items-center gap-3 px-6 py-3.5 rounded-DEFAULT bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow-md hover:bg-surface-tint transition-all"
                    >
                      <span>Find the Right Solution</span>
                      <ArrowRight className="w-4 h-4 text-secondary-fixed" />
                    </a>
                    <a
                      href="#integrated-flow"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-DEFAULT bg-surface-container-lowest text-on-surface font-label-md text-label-md uppercase tracking-wider shadow-sm hover:text-secondary transition-colors border border-secondary/20"
                    >
                      <span>Explore The Framework</span>
                      <ChevronDown className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-space-xl mt-space-xl w-full max-w-lg border-t border-outline-variant/20">
                    <div>
                      <p className="font-headline-lg text-headline-lg text-on-surface font-semibold">20+</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Core Capabilities</p>
                    </div>
                    <div>
                      <p className="font-headline-lg text-headline-lg text-secondary font-semibold">100%</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Dedicated Teams</p>
                    </div>
                    <div>
                      <p className="font-headline-lg text-headline-lg text-on-surface font-semibold">1</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Unified Leadership</p>
                    </div>
                  </div>
                </div>

                {/* Hero Visual Showcase / Boardroom Composition */}
                <div className="lg:col-span-5 relative mt-space-xl lg:mt-0">
                  <div className="relative rounded-xl overflow-hidden shadow-xl bg-surface-container-lowest aspect-[4/3] sm:aspect-auto sm:h-[460px]">
                    <Image
                      src="/img/unsplash-1522071820081-009f0129c71c.jpg"
                      alt="Executive leadership strategy meeting in boardroom"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent"></div>

                    {/* Inset Badge Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md shadow-md border border-secondary/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-DEFAULT bg-primary-container flex items-center justify-center text-secondary-fixed shrink-0">
                            <span className="material-symbols-outlined text-xl">hub</span>
                          </div>
                          <div>
                            <span className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider">
                              Synchronized Operations
                            </span>
                            <span className="block font-body-md text-body-md text-on-surface-variant text-xs">
                              Talent, Brand, and Distribution in lockstep
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

          {/* CATEGORY 1: REMOTE STAFFING */}
          <section className="w-full py-space-4xl bg-surface-container-low relative" id="remote-staffing">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              {/* Section Header with Editorial Counter */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-headline-sm text-headline-sm text-secondary font-serif font-bold">01</span>
                    <span className="h-0.5 w-8 bg-secondary-fixed-dim"></span>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] font-semibold">
                      Operational Extension
                    </span>
                  </div>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface font-serif">Remote Staffing</h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
                    Extend your organization with skilled professionals who can support essential daily operations and customer-facing functions.
                  </p>
                </div>
                <div className="mt-space-md md:mt-0">
                  <button
                    onClick={() => setConsultationOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-DEFAULT bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow-sm hover:bg-secondary transition-all"
                  >
                    <span>Explore Remote Staffing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 6 Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
                {remoteStaffing.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-secondary/15"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md group-hover:bg-primary-container group-hover:text-secondary-fixed transition-colors">
                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">{item.title}</h3>
                        <span className="font-label-sm text-label-sm text-on-surface-variant/50 uppercase">{item.num}</span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                    </div>
                    <div className="pt-space-md mt-space-md flex items-center justify-between text-secondary border-t border-outline-variant/20">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider">{item.badge}</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CATEGORY 2: CREATIVE SERVICES */}
          <section className="w-full py-space-4xl bg-surface relative" id="creative-services">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-headline-sm text-headline-sm text-secondary font-serif font-bold">02</span>
                    <span className="h-0.5 w-8 bg-secondary-fixed-dim"></span>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] font-semibold">
                      Studio &amp; Brand Production
                    </span>
                  </div>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface font-serif">Creative Services</h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
                    Turn ideas into professional creative assets, content, digital experiences, and brand communications.
                  </p>
                </div>
                <div className="mt-space-md md:mt-0">
                  <button
                    onClick={() => setConsultationOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-DEFAULT bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow-sm hover:bg-secondary transition-all"
                  >
                    <span>Explore Creative Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 9 Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
                {creativeServices.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-secondary/15"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="material-symbols-outlined text-secondary text-2xl">{item.icon}</span>
                        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">{item.badge}</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-serif">{item.title}</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                    </div>
                    <div className="pt-space-md mt-space-md border-t border-outline-variant/20">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CATEGORY 3: DIGITAL SERVICES */}
          <section className="w-full py-space-4xl bg-surface-container-low relative" id="digital-services">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-headline-sm text-headline-sm text-secondary font-serif font-bold">03</span>
                    <span className="h-0.5 w-8 bg-secondary-fixed-dim"></span>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] font-semibold">
                      Audience &amp; Scale
                    </span>
                  </div>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface font-serif">Digital Services</h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
                    Improve visibility, reach new audiences, and build stronger digital customer experiences.
                  </p>
                </div>
                <div className="mt-space-md md:mt-0">
                  <button
                    onClick={() => setConsultationOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-DEFAULT bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow-sm hover:bg-secondary transition-all"
                  >
                    <span>Explore Digital Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 5 Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop mb-gutter-desktop">
                {digitalServices.slice(0, 3).map((item, idx) => (
                  <div
                    key={idx}
                    className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-secondary/15"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md group-hover:bg-primary-container group-hover:text-secondary-fixed transition-colors">
                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">{item.title}</h3>
                        <span className="font-label-sm text-label-sm text-on-surface-variant/50 uppercase">{item.num}</span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                    </div>
                    <div className="pt-space-md mt-space-md flex items-center justify-between text-secondary border-t border-outline-variant/20">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider">{item.badge}</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-desktop">
                {digitalServices.slice(3, 5).map((item, idx) => (
                  <div
                    key={idx}
                    className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-secondary/15"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md group-hover:bg-primary-container group-hover:text-secondary-fixed transition-colors">
                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">{item.title}</h3>
                        <span className="font-label-sm text-label-sm text-on-surface-variant/50 uppercase">{item.num}</span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                    </div>
                    <div className="pt-space-md mt-space-md flex items-center justify-between text-secondary border-t border-outline-variant/20">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider">{item.badge}</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* INTEGRATED SOLUTIONS SECTION: BETTER TOGETHER */}
          <section className="w-full py-space-4xl bg-surface relative overflow-hidden" id="integrated-flow">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="text-center max-w-3xl mx-auto mb-space-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-DEFAULT bg-surface-container shadow-sm mb-space-sm border border-secondary/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] font-semibold">
                    Synergistic Architecture
                  </span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface mb-space-md font-serif">Better Together</h2>
                <p className="font-body-xl text-body-xl text-on-surface-variant leading-relaxed">
                  NOLA’s services can work independently or together. A business might combine remote staffing with creative production and digital marketing to build one coordinated growth solution.
                </p>
              </div>

              {/* Schematic Flow Visual Component */}
              <div className="relative bg-surface-container-lowest p-space-xl lg:p-space-2xl rounded-xl shadow-lg mb-space-2xl border border-secondary/20">
                {/* Connecting Guideline (Desktop) */}
                <div className="hidden lg:block absolute top-[115px] left-20 right-20 h-0.5 bg-gradient-to-r from-secondary-fixed via-secondary to-secondary-fixed"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg relative z-10">
                  {/* Step 1: People */}
                  <div className="flex flex-col items-center text-center p-space-md rounded-lg bg-surface-container-low border border-secondary/15">
                    <div className="w-16 h-16 rounded-full bg-primary-container text-secondary-fixed flex items-center justify-center shadow-md mb-space-md">
                      <span className="material-symbols-outlined text-3xl">groups</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-widest mb-1">Step 01</span>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-2 font-serif">People</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Deploy dedicated remote professionals to anchor daily operations, customer support, and administrative execution.
                    </p>
                  </div>

                  {/* Step 2: Creative */}
                  <div className="flex flex-col items-center text-center p-space-md rounded-lg bg-surface-container-low border border-secondary/15">
                    <div className="w-16 h-16 rounded-full bg-primary-container text-secondary-fixed flex items-center justify-center shadow-md mb-space-md">
                      <span className="material-symbols-outlined text-3xl">draw</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-widest mb-1">Step 02</span>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-2 font-serif">Creative</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Produce high-conviction visual assets, video media, branding frameworks, and modern web application interfaces.
                    </p>
                  </div>

                  {/* Step 3: Digital */}
                  <div className="flex flex-col items-center text-center p-space-md rounded-lg bg-surface-container-low border border-secondary/15">
                    <div className="w-16 h-16 rounded-full bg-primary-container text-secondary-fixed flex items-center justify-center shadow-md mb-space-md">
                      <span className="material-symbols-outlined text-3xl">trending_up</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-widest mb-1">Step 03</span>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-2 font-serif">Digital</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Amplify reach through high-intent SEO, precision PPC advertising campaigns, and coordinated customer nurturing channels.
                    </p>
                  </div>

                  {/* Step 4: Growth */}
                  <div className="flex flex-col items-center text-center p-space-md rounded-lg bg-primary-container text-on-primary shadow-sm border border-secondary/30">
                    <div className="w-16 h-16 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-md mb-space-md">
                      <span className="material-symbols-outlined text-3xl">all_inclusive</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary-fixed font-semibold uppercase tracking-widest mb-1">Outcome</span>
                    <h4 className="font-headline-md text-headline-md text-on-primary mb-2 font-serif">Growth</h4>
                    <p className="font-body-md text-body-md text-on-primary-container">
                      Scalable organizational leverage, reduced overhead, brand authority, and accelerated customer pipeline velocity.
                    </p>
                  </div>
                </div>

                {/* Integrated Case Illustration Highlight */}
                <div className="mt-space-xl pt-space-lg bg-surface p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4 border border-secondary/20">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-DEFAULT bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                      <Sparkles className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-headline-sm text-headline-sm text-on-surface font-serif">The Unified Advantage</p>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Eliminate siloed agency friction with a single leadership standard for creative, marketing, and human capital.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/how-we-work"
                    className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-secondary hover:text-on-surface transition-colors whitespace-nowrap"
                  >
                    <span>Learn How We Work</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ADVISORY / DISCOVERY CTA BLOCK */}
          <section className="w-full py-space-4xl bg-surface-container-low" id="discovery-advisory">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="relative bg-primary-container text-on-primary rounded-xl overflow-hidden shadow-2xl p-space-xl lg:p-space-3xl border border-secondary/30">
                {/* Subtle Watermark Accent */}
                <div className="absolute right-0 top-0 bottom-0 opacity-5 pointer-events-none flex items-center justify-center translate-x-12">
                  <span className="material-symbols-outlined text-[340px] text-secondary-fixed">shield_with_house</span>
                </div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                  <div className="lg:col-span-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-DEFAULT bg-white/10 backdrop-blur-sm mb-space-md border border-secondary/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span>
                      <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-[0.2em]">
                        Advisory Consultation
                      </span>
                    </div>
                    <h2 className="font-headline-xl text-headline-xl text-on-primary mb-space-md font-serif">
                      Not Sure Which Services You Need?
                    </h2>
                    <p className="font-body-xl text-body-xl text-on-primary-container max-w-2xl mb-space-xl">
                      Tell us what you’re trying to accomplish and we’ll help identify the right combination of capabilities.
                    </p>
                    <div className="flex flex-wrap items-center gap-space-md">
                      <button
                        onClick={() => setConsultationOpen(true)}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-DEFAULT bg-secondary text-on-secondary font-label-md text-label-md uppercase tracking-wider shadow-lg hover:bg-on-secondary-fixed-variant hover:text-on-secondary transition-all"
                      >
                        <span>Talk to NOLA</span>
                        <Phone className="w-4 h-4" />
                      </button>
                      <Link
                        href="/why-nola"
                        className="inline-flex items-center gap-2 px-6 py-4 rounded-DEFAULT bg-white/5 text-on-primary hover:bg-white/10 transition-colors font-label-md text-label-md uppercase tracking-wider border border-secondary/20"
                      >
                        <span>Why Partner With Us</span>
                        <ArrowRight className="w-4 h-4 text-secondary-fixed" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-4 mt-space-xl lg:mt-0">
                    <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-lg rounded-xl flex flex-col gap-4 text-on-primary border border-secondary/20">
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-secondary-fixed shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-headline-sm text-headline-sm text-on-primary font-serif">Fiduciary Standard</h5>
                          <p className="font-body-md text-body-md text-on-primary-container text-xs mt-1">
                            Direct alignment with your corporate goals, with zero conflicting incentives.
                          </p>
                        </div>
                      </div>
                      <div className="h-px w-full bg-white/10"></div>
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-secondary-fixed shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-headline-sm text-headline-sm text-on-primary font-serif">Rapid Integration</h5>
                          <p className="font-body-md text-body-md text-on-primary-container text-xs mt-1">
                            Turnkey deployment across remote staffing, creative assets, and digital growth engines.
                          </p>
                        </div>
                      </div>
                      <div className="h-px w-full bg-white/10"></div>
                      <div className="flex items-start gap-3">
                        <LockIcon className="w-5 h-5 text-secondary-fixed shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-headline-sm text-headline-sm text-on-primary font-serif">Discretion &amp; Rigor</h5>
                          <p className="font-body-md text-body-md text-on-primary-container text-xs mt-1">
                            Enterprise confidentiality and institutional reliability in every deliverable.
                          </p>
                        </div>
                      </div>
                    </div>
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
