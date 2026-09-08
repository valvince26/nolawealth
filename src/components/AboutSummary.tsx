import Link from "next/link";
import Image from "next/image";

export default function AboutSummary() {
  return (
    <section className="w-full bg-surface-container-low py-space-3xl lg:py-space-4xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          {/* Text Column */}
          <div className="lg:col-span-7">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold block mb-space-xs">
              About NOLA
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface mb-space-md font-serif">
              Built Around the Way Modern Businesses Work
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-md leading-relaxed">
              NOLA Wealth Financial combines people, creative expertise, technology, and digital strategy to help organizations operate more effectively and grow with confidence. Instead of offering isolated services, we build solutions around the specific needs of each client.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-xl leading-relaxed">
              Founded on principles of integrity, transparency, and relentless focus on outcome delivery, our advisory model ensures that every dollar invested produces measurable organizational leverage.
            </p>

            {/* Key Metrics Badges */}
            <div className="grid grid-cols-3 gap-space-md p-space-md bg-surface-container-lowest rounded-DEFAULT shadow-sm mb-space-xl border border-secondary/15">
              <div className="text-center">
                <span className="font-headline-md text-headline-md text-on-surface font-serif block">500+</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Completed Projects</span>
              </div>
              <div className="text-center">
                <span className="font-headline-md text-headline-md text-on-surface font-serif block">98%</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">On-Time Delivery</span>
              </div>
              <div className="text-center">
                <span className="font-headline-md text-headline-md text-on-surface font-serif block">1:1</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Account Directors</span>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider px-8 py-3.5 bg-primary-container text-on-primary hover:bg-secondary transition-colors duration-300 rounded-DEFAULT shadow-sm"
            >
              Learn About NOLA
            </Link>
          </div>

          {/* Right Emblem & Quote Card */}
          <div className="lg:col-span-5 mt-space-xl lg:mt-0">
            <div className="bg-primary-container text-on-primary p-space-2xl rounded-DEFAULT shadow-xl relative overflow-hidden flex flex-col justify-between border border-secondary/30 min-h-[380px]">
              {/* Watermark Crest Emblem */}
              <div className="absolute -right-8 -bottom-8 opacity-15 pointer-events-none">
                <Image
                  src="/logo.png"
                  alt="NOLA Wealth Emblem"
                  width={220}
                  height={220}
                  className="w-56 h-auto brightness-0 invert"
                />
              </div>

              <div>
                <div className="w-12 h-12 mb-space-lg flex items-center justify-center rounded-full bg-surface-container-highest/10 text-secondary-fixed-dim border border-secondary/30">
                  <span className="material-symbols-outlined text-[28px]">format_quote</span>
                </div>
                <blockquote className="font-headline-md text-headline-sm lg:text-headline-md text-on-primary mb-space-lg leading-snug font-serif">
                  “Our vision is straightforward: remove operational drag and fuel creative velocity so visionary founders and leadership teams can focus on defining the future.”
                </blockquote>
              </div>

              <div className="pt-space-md border-t border-secondary/20">
                <span className="font-headline-sm text-body-lg text-secondary-fixed-dim block font-serif">Executive Leadership</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container">NOLA Wealth Financial Advisory</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
