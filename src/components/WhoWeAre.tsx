export default function WhoWeAre() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl lg:py-space-4xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
          {/* Left Column: Problem & Architecture */}
          <div className="lg:col-span-5 flex flex-col space-y-space-md lg:sticky lg:top-28">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-[0.15em] text-secondary">
                The Problem & Architecture
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface tracking-tight leading-snug">
              Built for the Needs of Modern Businesses.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Businesses often need expertise across operations, staffing, creative production, marketing, and technology—but managing multiple disparate vendors creates friction, misaligned goals, and avoidable complexity.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              NOLA provides coordinated access to these capabilities through one single, accountable framework. We operate alongside executive teams to orchestrate modern workflows that deliver sustainable enterprise resilience.
            </p>
          </div>

          {/* Right Column: Metric Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-lg">
            {/* Metric Plate 1 */}
            <div className="p-space-lg rounded-lg bg-surface-container-low border border-secondary/20 shadow-sm hover:shadow-md transition-all group">
              <span className="font-display-lg text-display-lg text-on-surface font-semibold block leading-none group-hover:text-secondary transition-colors">
                1
              </span>
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary mt-3 block">
                Unified Contract & Governance
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Consolidate operations, tech support, and creative pipelines under a single fiduciary master service agreement.
              </p>
            </div>

            {/* Metric Plate 2 */}
            <div className="p-space-lg rounded-lg bg-surface-container-low border border-secondary/20 shadow-sm hover:shadow-md transition-all group">
              <span className="font-display-lg text-display-lg text-on-surface font-semibold block leading-none group-hover:text-secondary transition-colors">
                0%
              </span>
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary mt-3 block">
                Vendor Friction & Drag
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Eliminate miscommunication between separate agency partners, IT contractors, and remote resource bureaus.
              </p>
            </div>

            {/* Metric Plate 3 */}
            <div className="p-space-lg rounded-lg bg-surface-container-low border border-secondary/20 shadow-sm hover:shadow-md transition-all group">
              <span className="font-display-lg text-display-lg text-on-surface font-semibold block leading-none group-hover:text-secondary transition-colors">
                100%
              </span>
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary mt-3 block">
                Outcome-Oriented Delivery
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Every deliverable is evaluated directly against organizational speed, capacity expansion, and clear operational milestones.
              </p>
            </div>

            {/* Metric Plate 4 */}
            <div className="p-space-lg rounded-lg bg-surface-container-low border border-secondary/20 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-2 text-secondary">
                  <span className="material-symbols-outlined text-[28px]">deployed_code</span>
                </div>
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary mt-3 block">
                  Enterprise Deployment Ready
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Turnkey integration for high-growth commercial enterprises seeking immediate operational leverage.
                </p>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant/60 uppercase tracking-widest mt-4">
                Protocol ADV-7
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
