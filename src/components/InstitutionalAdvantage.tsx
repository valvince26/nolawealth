import Image from "next/image";

export default function InstitutionalAdvantage() {
  const features = [
    {
      icon: "verified_user",
      title: "Specialized Talent",
      description: "Dedicated professionals matched with surgical precision to your required tasks.",
    },
    {
      icon: "expand",
      title: "Scalable Support",
      description: "Effortlessly ramp bandwidth up or modulate down as strategic priorities shift.",
    },
    {
      icon: "workspace_premium",
      title: "Consistent Quality",
      description: "Rigorous operational SLAs maintained under rigorous executive supervision.",
    },
    {
      icon: "handshake",
      title: "Strategic Alignment",
      description: "Solutions structured around long-term valuation targets rather than billable hours.",
    },
  ];

  return (
    <section className="w-full bg-primary-container text-on-primary py-space-3xl lg:py-space-4xl relative overflow-hidden">
      {/* Ambient Gold Glow Accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-space-xs">
              <span className="w-6 h-[1px] bg-secondary-fixed-dim"></span>
              <span className="font-label-sm text-label-sm tracking-[0.2em] text-secondary-fixed-dim uppercase font-semibold">
                Institutional Advantage
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg-mobile lg:text-headline-xl text-on-primary mb-space-md leading-tight font-serif">
              One Relationship. An Entire Team of Capabilities.
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-space-xl leading-relaxed">
              Instead of managing disjointed marketing agencies, offshore freelance contractors, and transactional service vendors, forward-thinking executives partner with NOLA as their centralized engine for enterprise acceleration.
            </p>

            {/* 4 Feature Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              {features.map((item, idx) => (
                <div key={idx} className="bg-surface-container-highest/10 p-space-md rounded-DEFAULT border border-secondary/20">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-secondary-fixed-dim text-[18px]">
                      {item.icon}
                    </span>
                    <h4 className="font-headline-sm text-body-lg text-on-primary font-serif font-semibold">
                      {item.title}
                    </h4>
                  </div>
                  <p className="font-body-md text-body-md text-on-primary-container">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Showcase Image */}
          <div className="lg:col-span-6 mt-space-2xl lg:mt-0">
            <div className="relative rounded-DEFAULT overflow-hidden shadow-2xl bg-surface-container-high/10 aspect-[4/3] sm:aspect-auto sm:h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                alt="High-Level Corporate Board Meeting in Penthouse Suite"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Inset Caption Card */}
              <div className="absolute bottom-0 inset-x-0 bg-primary-container/90 backdrop-blur-md p-space-lg border-t border-secondary/30">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed-dim block">
                      Fiduciary Governance
                    </span>
                    <span className="font-body-md text-body-md text-on-primary font-medium">
                      Global Delivery. Local Accountability.
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-fixed-dim shrink-0">
                    <span className="material-symbols-outlined text-[20px]">corporate_fare</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
