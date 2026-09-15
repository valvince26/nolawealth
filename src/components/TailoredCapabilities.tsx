import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function TailoredCapabilities() {
  const items = [
    {
      num: "01 / Talent Acquisition",
      title: "Build Your Remote Team",
      image: "/img/unsplash-1522071820081-009f0129c71c.jpg",
      desc: "Scale operational capacity with pre-vetted, English-proficient administrative, analytical, and technical personnel.",
      href: "/services",
    },
    {
      num: "02 / Identity Systems",
      title: "Strengthen Your Brand",
      image: "/img/unsplash-1507679799987-c73779587ccf.jpg",
      desc: "Articulate market authority through world-class visual systems, positioning frameworks, and editorial guidelines.",
      href: "/services",
    },
    {
      num: "03 / Visual Media",
      title: "Create Better Content",
      image: "/img/unsplash-1574717024653-61fd2cf4d44d.jpg",
      desc: "High-converting video assets, whitepapers, social collateral, and interactive digital media crafted for decision-makers.",
      href: "/services",
    },
    {
      num: "04 / Web & Applications",
      title: "Develop Your Digital Presence",
      image: "/img/unsplash-1551288049-bebda4e38f71.jpg",
      desc: "Engineered web ecosystems and bespoke software platforms built with speed, accessibility, and high conversion in mind.",
      href: "/services",
    },
    {
      num: "05 / Growth Funnels",
      title: "Generate New Opportunities",
      image: "/img/unsplash-1551836022-d5d88e9218df.jpg",
      desc: "Precision B2B outreach, targeted search optimization, and measured performance marketing that converts traffic into revenue.",
      href: "/services",
    },
    {
      num: "06 / Efficiency",
      title: "Streamline Operations",
      image: "/img/unsplash-1454165804606-c3d57bc86b40.jpg",
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
          <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface mb-space-xs font-serif">
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
              className="bg-surface-container-lowest rounded-DEFAULT shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between border border-secondary/15 overflow-hidden"
            >
              <div>
                {/* Photo header image inside capability card */}
                <div className="relative w-full h-36 bg-surface-container overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-4">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold px-2 py-0.5 bg-surface-container-lowest/90 backdrop-blur-sm rounded-DEFAULT border border-secondary/20">
                      {card.num}
                    </span>
                  </div>
                </div>

                <div className="p-space-lg">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs group-hover:text-secondary transition-colors font-serif">
                    {card.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>

              <div className="p-space-lg pt-0">
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-on-surface group-hover:text-secondary font-label-md text-label-md uppercase tracking-wider transition-colors pt-space-xs border-t border-outline-variant/20 w-full justify-between"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-secondary" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
