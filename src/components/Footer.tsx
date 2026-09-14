import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-on-primary border-t border-secondary/30">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop mb-space-2xl">
          {/* Brand Info */}
          <div className="space-y-space-md">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="NOLA Wealth Financial Logo"
                width={48}
                height={48}
                className="h-10 w-auto object-contain brightness-0 invert opacity-90"
              />
              <span className="font-headline-sm text-headline-sm text-on-primary uppercase tracking-tight font-serif">
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
                <Link href="/insurance" className="hover:text-on-primary transition-colors">
                  04 / Life & Health Insurance Solutions
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
              marcus.still@nolawealthfinancial.com<br />
              +1 (504) 891-2000
            </p>
          </div>
        </div>

        {/* Sub-footer Disclosures */}
        <div className="pt-space-lg border-t border-outline/20 flex flex-col sm:flex-row items-center justify-between gap-space-md font-label-sm text-label-sm text-on-primary-container">
          <p>© 2026 Nola Wealth Group LLC. All rights reserved.</p>
          <div className="flex items-center gap-space-lg">
            {/*
              "Regulatory Disclosures" and "Form ADV Part 2A" were removed here on
              2026-09-14. Both were non-functional <span> elements styled to look like
              links, and Form ADV Part 2A is a specific SEC filing made by registered
              investment advisers. Advertising it without an actual filing is a
              regulatory misrepresentation, not a broken link. Restore only if a real
              filing exists and can be linked to.
            */}
            <a href="/privacy/" className="hover:text-on-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
