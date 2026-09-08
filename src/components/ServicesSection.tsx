import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const pillars = [
    {
      numTag: "01 — Operational Infrastructure",
      materialIcon: "badge",
      title: "Remote Staffing",
      description:
        "Extend your internal bandwidth with dependable, rigorously trained professionals who manage customer touchpoints and core operational tasks.",
      checklist: [
        "Telemarketing & Sales Development",
        "Executive Virtual Assistant Services",
        "Operational & Back-Office Support",
        "Technical Support & Help Desk",
        "Secure Remote Video Monitoring",
        "Certified Bookkeeping & Reconciliations",
      ],
      linkText: "Explore Remote Staffing",
      href: "/services",
    },
    {
      numTag: "02 — Brand Expression",
      materialIcon: "palette",
      title: "Creative Services",
      description:
        "Transform high-conviction concepts into bespoke visual assets and digital experiences that reflect the prestige and authority of your organization.",
      checklist: [
        "Graphic Design & Brand Systems",
        "High-Definition Video Production",
        "Executive Copywriting & Editorial",
        "Corporate Photography & Art Direction",
        "Bespoke Web Design & UX Architecture",
        "Custom Software & Portal Development",
      ],
      linkText: "Explore Creative Services",
      href: "/services",
    },
    {
      numTag: "03 — Market Capture",
      materialIcon: "insights",
      title: "Digital Services",
      description:
        "Capture qualified demand and solidify market share through high-performance acquisition funnels and multi-channel engagement pipelines.",
      checklist: [
        "Search Engine Optimization (Enterprise SEO)",
        "PPC Advertising & Conversion Bidding",
        "Executive Social Media Management",
        "Omnichannel Client Support Systems",
        "Lifecycle & Automated Email Marketing",
        "Performance Analytics & Attribution",
      ],
      linkText: "Explore Digital Services",
      href: "/services",
    },
  ];

  return (
    <section className="w-full bg-surface-container-low py-space-3xl lg:py-space-4xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-3xl gap-space-lg">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-space-xs">
              <span className="w-6 h-[1px] bg-secondary"></span>
              <span className="font-label-sm text-label-sm tracking-[0.2em] text-secondary uppercase font-semibold">
                Our Capabilities
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface">
              Everything Your Business Needs to Move Forward
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              Build your team, amplify your brand footprint, and command your market through one unified executive partner.
            </p>
          </div>
          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-primary-container hover:text-secondary transition-colors py-2.5 px-5 rounded-DEFAULT bg-surface-container-lowest shadow-sm border border-secondary/20"
            >
              <span>Download Capabilities Deck</span>
              <Download className="w-4 h-4 text-secondary" />
            </Link>
          </div>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-desktop">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-space-xl rounded-DEFAULT shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 border border-secondary/15"
            >
              <div>
                <div className="flex items-center justify-between pb-space-md mb-space-md border-b border-outline-variant/20">
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.16em] text-secondary font-bold">
                    {pillar.numTag}
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[22px]">{pillar.materialIcon}</span>
                </div>

                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
                  {pillar.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
                  {pillar.description}
                </p>

                {/* Checklist */}
                <div className="space-y-2 mb-space-xl">
                  {pillar.checklist.map((item, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2.5 py-1 text-on-surface font-body-md text-body-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={pillar.href}
                className="inline-flex items-center justify-between w-full pt-space-md border-t border-outline-variant/20 text-primary-container font-label-md text-label-md uppercase tracking-wider group hover:text-secondary transition-colors"
              >
                <span>{pillar.linkText}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
