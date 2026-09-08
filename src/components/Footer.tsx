import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-on-primary border-t border-secondary/30">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop mb-space-2xl">
          {/* Brand Info */}
          <div className="space-y-space-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary-fixed">
                <span className="material-symbols-outlined text-[20px]">token</span>
              </div>
              <span className="font-headline-sm text-headline-sm text-on-primary uppercase tracking-tight">
                NOLA Wealth
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-primary-container max-w-sm">
              Architecting resilient wealth frameworks, private fiduciary governance, and generational capital preservation for distinguished families and institutional leaders.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary-fixed-dim mb-space-md">
              Practice Areas
            </h3>
            <ul className="space-y-space-xs font-body-md text-body-md text-on-primary-container">
              <li>
                <Link href="/services" className="hover:text-on-primary transition-colors">
                  01 / Scalable Talent Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-on-primary transition-colors">
                  02 / Brand & Visual Direction
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-on-primary transition-colors">
                  03 / Strategic Visibility & Acquisition
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-on-primary transition-colors">
                  Integrated Enterprise Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h3 className="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary-fixed-dim mb-space-md">
              Institutional
            </h3>
            <ul className="space-y-space-xs font-body-md text-body-md text-on-primary-container">
              <li>
                <Link href="/about" className="hover:text-on-primary transition-colors">
                  The Partnership
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-on-primary transition-colors">
                  Fiduciary Standard
                </Link>
              </li>
              <li>
                <Link href="/why-nola" className="hover:text-on-primary transition-colors">
                  Executive Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-on-primary transition-colors">
                  Private Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary-fixed-dim mb-space-md">
              Offices
            </h3>
            <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
              Poydras Executive Center, Suite 3400<br />
              New Orleans, Louisiana 70112<br />
              advisory@nolawealth.com<br />
              +1 (504) 891-2000
            </p>
          </div>
        </div>

        {/* Sub-footer Disclosures */}
        <div className="pt-space-lg border-t border-outline/20 flex flex-col sm:flex-row items-center justify-between gap-space-md font-label-sm text-label-sm text-on-primary-container">
          <p>© 2025 NOLA Wealth Financial Advisory LLC. All fiduciary rights reserved.</p>
          <div className="flex items-center gap-space-lg">
            <span className="hover:text-on-primary cursor-pointer transition-colors">Regulatory Disclosures</span>
            <span className="hover:text-on-primary cursor-pointer transition-colors">Form ADV Part 2A</span>
            <span className="hover:text-on-primary cursor-pointer transition-colors">Client Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
