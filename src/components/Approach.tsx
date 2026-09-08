export default function Approach() {
  const phases = [
    {
      phase: "PHASE I",
      title: "Strategy First",
      description:
        "Understand the business first and build solutions around its genuine operational challenges rather than applying pre-packaged templates.",
    },
    {
      phase: "PHASE II",
      title: "Creative Synthesis",
      description:
        "Combine rigorous thinking, bespoke visual design, high-standard content, and modern software tools to create better enterprise experiences.",
    },
    {
      phase: "PHASE III",
      title: "Compounded Growth",
      description:
        "Focus every deliverable on helping clients become systematically more capable, visible, operationally efficient, and market-competitive.",
    },
  ];

  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl lg:py-space-4xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary block mb-2">
            Our Operating Triad
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface tracking-tight">
            Strategy. Creativity. Growth.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-3">
            Our three-part framework guides every client engagement, ensuring work remains rooted in business clarity and measurable durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
          {phases.map((item, idx) => (
            <div
              key={idx}
              className="p-space-lg rounded-lg bg-surface-container-low border-t-2 border-secondary hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-label-sm text-label-sm tracking-widest text-secondary font-mono">
                    {item.phase}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
