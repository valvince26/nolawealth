export default function DeliveryFramework() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      description:
        "We immerse ourselves into your current operations, bottleneck areas, executive priorities, and quantitative revenue targets.",
    },
    {
      num: "02",
      title: "Design",
      description:
        "We architect an exact configuration of vetted staffing personnel, creative modules, and digital execution funnels.",
    },
    {
      num: "03",
      title: "Execute",
      description:
        "Our specialists embed cleanly into your day-to-day ecosystem, deploying systems and initiating production without friction.",
    },
    {
      num: "04",
      title: "Grow",
      description:
        "Through proactive performance reviews and ongoing optimization, we calibrate resources to match enterprise expansion.",
    },
  ];

  return (
    <section className="w-full bg-surface py-space-3xl lg:py-space-4xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-space-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold block mb-2">
            Delivery Framework
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface mb-space-sm">
            Simple Process. Tailored Solutions.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            A transparent, structured methodology designed to seamlessly integrate with your existing leadership and operational workflows.
          </p>
        </div>

        {/* Horizontal Process Tracker with Timeline Guide */}
        <div className="relative">
          {/* Connecting subtle gold guideline on desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-[2px] bg-secondary-fixed-dim pointer-events-none"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-start bg-surface-container-lowest p-space-lg rounded-DEFAULT shadow-sm hover:shadow-md transition-shadow border border-secondary/15"
              >
                <div className="w-14 h-14 rounded-full bg-primary-container text-secondary-fixed-dim flex items-center justify-center font-headline-sm text-headline-sm mb-space-md shadow-md z-10 font-bold font-serif">
                  {step.num}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-serif">
                  {step.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
