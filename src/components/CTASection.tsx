import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-surface py-space-3xl lg:py-space-4xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="p-space-2xl lg:p-space-3xl rounded-xl bg-surface-container-lowest border border-secondary/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-space-xl">
          <div className="max-w-xl">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-secondary block mb-2">
              Next Steps
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface tracking-tight mb-space-xs">
              Let’s Build What’s Next.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Discover how NOLA aligns dedicated talent, modern digital infrastructure, and creative leadership with your strategic milestones.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-space-md w-full lg:w-auto">
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider px-7 py-3.5 rounded-DEFAULT bg-primary-container text-on-primary hover:bg-secondary transition-all text-center shadow-sm"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider px-7 py-3.5 rounded-DEFAULT bg-transparent text-on-surface border border-secondary/60 hover:bg-surface-container-low transition-all text-center"
            >
              Contact NOLA
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
