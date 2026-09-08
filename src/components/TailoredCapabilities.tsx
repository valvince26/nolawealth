import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TailoredCapabilities() {
  const items = [
    {
      num: "01 / Talent Acquisition",
      title: "Build Your Remote Team",
      desc: "Scale operational capacity with pre-vetted, English-proficient administrative, analytical, and technical personnel.",
      href: "/services",
    },
    {
      num: "02 / Identity Systems",
      title: "Strengthen Your Brand",
      desc: "Articulate market authority through world-class visual systems, positioning frameworks, and editorial guidelines.",
      href: "/services",
    },
    {
      num: "03 / Visual Media",
      title: "Create Better Content",
      desc: "High-converting video assets, whitepapers, social collateral, and interactive digital media crafted for decision-makers.",
      href: "/services",
    },
    {
      num: "04 / Web & Applications",
      title: "Develop Your Digital Presence",
      desc: "Engineered web ecosystems and bespoke software platforms built with speed, accessibility, and high conversion in mind.",
      href: "/services",
    },
    {
      num: "05 / Growth Funnels",
      title: "Generate New Opportunities",
      desc: "Precision B2B outreach, targeted search optimization, and measured performance marketing that converts traffic into revenue.",
      href: "/services",
    },
    {
      num: "06 / Efficiency",
      title: "Streamline Operations",
      desc: "Standard operating procedures, administrative workflow automation, and financial bookkeeping that free your leadership to lead.",
      href: "/services",
    },
  ];

  return (
    <section className="w-full bg-surface py-space-3xl lg:py-space-4xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-space-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold block mb-2">
            Focused Execution
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface mb-space-xs">
            Tailored Capabilities for Every Stage of Growth
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Turnkey modular competencies to accelerate your corporate trajectory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
          {items.map((card, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-space-xl rounded-DEFAULT shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between border border-secondary/15"
            >
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-space-xs">
                  {card.num}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs group-hover:text-secondary transition-colors font-serif">
                  {card.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <Link
                href={card.href}
                className="inline-flex items-center gap-2 pt-space-lg text-on-surface group-hover:text-secondary font-label-md text-label-md uppercase tracking-wider transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-secondary" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
