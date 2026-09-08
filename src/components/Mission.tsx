export default function Mission() {
  return (
    <section className="w-full bg-primary-container text-on-primary py-space-3xl lg:py-space-4xl relative overflow-hidden">
      {/* Subtle Architectural Crest Ambient Element */}
      <div className="absolute -right-16 -top-16 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute left-8 bottom-8 opacity-10 pointer-events-none">
        <span className="material-symbols-outlined text-[140px] text-secondary">token</span>
      </div>

      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-space-md">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/10 border border-secondary/30">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary-fixed">
              Core Mandate
            </span>
          </div>

          <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl tracking-tight text-on-primary">
            Our Mission
          </h2>

          <p className="font-display-lg text-headline-md lg:text-headline-xl italic text-secondary-fixed-dim leading-relaxed font-normal">
            “To give businesses flexible access to the people, expertise, and digital capabilities they need to operate efficiently and pursue sustainable growth.”
          </p>

          <div className="pt-space-md flex flex-wrap items-center justify-center gap-space-lg text-on-primary-container font-label-sm text-label-sm uppercase tracking-widest">
            <span>Uncompromising Quality</span>
            <span className="text-secondary">•</span>
            <span>Fiduciary Execution</span>
            <span className="text-secondary">•</span>
            <span>Sustained Momentum</span>
          </div>
        </div>
      </div>
    </section>
  );
}
