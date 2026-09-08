import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IntroValueProp() {
  const pillars = [
    {
      tag: "01 / Agility",
      icon: "tune",
      title: "Flexible Expertise",
      description:
        "Access pre-vetted specialists, fractional leadership, and dedicated teams on-demand as your organizational mandates evolve, eliminating hiring friction.",
      linkText: "Adaptive Staffing",
      href: "/services",
    },
    {
      tag: "02 / Synergy",
      icon: "hub",
      title: "Integrated Solutions",
      description:
        "Staffing, creative production, and digital acquisition channels work cohesively with single-point accountability, avoiding fragmented vendor management.",
      linkText: "Unified Workflow",
      href: "/how-we-work",
    },
    {
      tag: "03 / Return",
      icon: "trending_up",
      title: "Growth Focused",
      description:
        "Every deliverable is engineered against bottom-line operational efficiency, customer lifetime value, and measurable enterprise valuation.",
      linkText: "Enduring Value",
      href: "/why-nola",
    },
  ];

  return (
    <section className="w-full bg-surface py-space-3xl lg:py-space-4xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="max-w-3xl mx-auto text-center mb-space-3xl">
          <div className="inline-flex items-center justify-center gap-2 mb-space-sm">
            <span className="w-6 h-[1px] bg-secondary"></span>
            <span className="font-label-sm text-label-sm tracking-[0.2em] text-secondary uppercase font-semibold">
              Partnership Philosophy
            </span>
            <span className="w-6 h-[1px] bg-secondary"></span>
          </div>
          <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface mb-space-md">
            More Than a Service Provider. A Partner in Growth.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            From day-to-day operational velocity to high-impact creative execution and digital expansion, NOLA brings vetted practitioners and executive insight together under one unified fiduciary umbrella.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-space-xl rounded-DEFAULT shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group border border-secondary/15"
            >
              <div>
                <div className="w-12 h-12 rounded-DEFAULT bg-surface-container flex items-center justify-center text-secondary mb-space-lg group-hover:bg-secondary group-hover:text-on-secondary transition-colors duration-300">
                  <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.15em] text-secondary block mb-1">
                  {item.tag}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-space-lg pt-space-sm flex items-center gap-2 text-secondary font-label-md text-label-md uppercase tracking-wider">
                <Link href={item.href} className="flex items-center gap-2 hover:underline">
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
