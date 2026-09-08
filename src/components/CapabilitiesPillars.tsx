"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Palette, LineChart, ArrowRight, CheckCircle } from "lucide-react";

export default function CapabilitiesPillars() {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      tag: "01 / Remote Staffing",
      icon: Users,
      materialIcon: "group",
      title: "Scalable Talent Infrastructure",
      description:
        "Build dependable, thoroughly vetted teams that seamlessly support daily operations, customer experience, sales development, executive administration, and core technical functions.",
      items: [
        "Executive Administrative Support",
        "Technical & Operational Analysts",
        "Dedicated Customer Operations",
        "Sales Development Representatives",
      ],
      badge: "Global Continuity",
      details:
        "Our staffing protocol features rigorous vetting, 24/7 time zone coverage, and dedicated account leadership to ensure zero operational lag.",
    },
    {
      id: 2,
      tag: "02 / Creative Services",
      icon: Palette,
      materialIcon: "palette",
      title: "Brand & Visual Direction",
      description:
        "Develop executive branding, strategic editorial content, visual design frameworks, high-converting digital interfaces, and collateral assets required to communicate market authority.",
      items: [
        "Identity Design & Brand Systems",
        "Architectural Web & UI Architecture",
        "Executive Presentation & Reports",
        "Editorial & Multi-Format Content",
      ],
      badge: "Aesthetic Precision",
      details:
        "We blend modern luxury design standards with conversion-focused UX to build brand identities that convey trust and institutional scale.",
    },
    {
      id: 3,
      tag: "03 / Digital Services",
      icon: LineChart,
      materialIcon: "query_stats",
      title: "Strategic Visibility & Acquisition",
      description:
        "Strengthen online footprint, direct customer acquisition, automated client communications, and digital channels using disciplined engineering and sustainable technical workflows.",
      items: [
        "Digital Positioning & Search Reach",
        "CRM & Workflow Orchestration",
        "Sustainable Pipeline Analytics",
        "Marketing Automation Engines",
      ],
      badge: "Data-Driven Growth",
      details:
        "Engineered digital strategies built on transparent metrics, modern full-stack web platforms, and automated workflow pipelines.",
    },
  ];

  return (
    <section className="w-full py-space-3xl lg:py-space-4xl bg-surface">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary block mb-2">
              Practice Architecture
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface tracking-tight">
              Three Pillars of Capability
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-4 md:mt-0">
            Structured operational disciplines deployed independently or unified into a single synchronized business engine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-desktop">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isExpanded = activePillar === pillar.id;
            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActivePillar(pillar.id)}
                onMouseLeave={() => setActivePillar(null)}
                className={`group relative p-space-xl rounded-lg bg-surface-container-lowest border transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between min-h-[440px] ${
                  isExpanded ? "border-secondary scale-[1.01]" : "border-secondary/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="font-label-sm text-label-sm uppercase tracking-[0.15em] text-secondary font-semibold">
                      {pillar.tag}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">{pillar.materialIcon}</span>
                    </span>
                  </div>

                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors mb-space-sm">
                    {pillar.title}
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2 border-t border-outline-variant/30 pt-4">
                    {pillar.items.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                        <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {isExpanded && (
                    <div className="mt-4 p-3 rounded-md bg-surface-container-low border border-secondary/20 text-body-md font-body-md text-on-surface animate-in fade-in duration-150">
                      <p className="text-xs text-on-surface-variant italic">{pillar.details}</p>
                    </div>
                  )}
                </div>

                <div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    {pillar.badge}
                  </span>
                  <Link
                    href="/services"
                    className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface hover:text-secondary group-hover:translate-x-1 transition-all"
                  >
                    <span className="hidden sm:inline">Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
