"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

export default function Hero() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      <section className="relative w-full bg-surface-container-lowest overflow-hidden">
        {/* Office Building Background Image Layer */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
            alt="Corporate Office Building Architecture"
            fill
            className="object-cover object-center opacity-15"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/95 to-surface-container-lowest/80"></div>
        </div>

        {/* Subtle architectural background accent pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#e0c298_1px,transparent_1px)] [background-size:24px_24px] z-0"></div>
        
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl lg:py-space-4xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            {/* Left Text Column */}
            <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-space-md">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 mb-space-md">
                <span className="w-8 h-[1px] bg-secondary"></span>
                <span className="font-label-sm text-label-sm tracking-[0.22em] text-secondary uppercase font-semibold">
                  Strategy • Creativity • Growth
                </span>
              </div>

              {/* Main Serif Headline */}
              <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight mb-space-lg leading-[1.12]">
                The People, Creativity &amp; Digital Solutions Behind Your Growth.
              </h1>

              {/* Body Description */}
              <p className="font-body-xl text-body-lg lg:text-body-xl text-on-surface-variant max-w-xl mb-space-xl font-normal leading-relaxed">
                NOLA Wealth Financial connects expanding enterprises with seasoned talent, bespoke creative capital, and high-velocity digital capabilities engineered to fortify operations and secure sustained market leadership.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full sm:w-auto mb-space-2xl">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider px-8 py-4 bg-secondary text-on-secondary shadow-md hover:bg-on-secondary-fixed-variant transition-all duration-300 rounded-DEFAULT"
                >
                  Explore Our Services
                </Link>
                <button
                  onClick={() => setConsultationOpen(true)}
                  className="inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider px-8 py-4 bg-transparent text-primary-container border border-secondary/40 shadow-sm hover:bg-surface-container-high transition-all duration-300 rounded-DEFAULT"
                >
                  Schedule a Consultation
                </button>
              </div>

              {/* Trust Subtext */}
              <div className="pt-space-md flex items-center gap-3 text-on-surface-variant">
                <div className="w-5 h-5 rounded-full bg-secondary-container flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                </div>
                <p className="font-body-md text-body-md tracking-wide">
                  One central partnership. Full spectrum capabilities. Custom-built for enterprise scale.
                </p>
              </div>
            </div>

            {/* Right Visual Showcase with Floating Card */}
            <div className="lg:col-span-6 relative mt-space-xl lg:mt-0">
              <div className="relative w-full rounded-DEFAULT overflow-hidden shadow-xl bg-surface-container aspect-[4/3] sm:aspect-auto sm:h-[520px] lg:h-[580px]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Executive Strategy Leadership Team in Corporate Boardroom"
                  fill
                  className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Visual Architectural Gold Corner Filigree Accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-secondary-fixed-dim pointer-events-none"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-secondary-fixed-dim pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-secondary-fixed-dim pointer-events-none"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-secondary-fixed-dim pointer-events-none"></div>
              </div>

              {/* Floating Prestige Metric Badge */}
              <div className="absolute -bottom-6 sm:-bottom-8 left-4 sm:left-8 right-4 sm:right-auto bg-primary-container text-on-primary p-space-md sm:p-space-lg shadow-2xl rounded-DEFAULT max-w-sm border border-secondary/30">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></div>
                  <span className="font-label-sm text-label-sm tracking-[0.16em] uppercase text-secondary-fixed-dim font-medium">
                    Verified Operational Metric
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-headline-lg text-on-primary font-serif">99.4%</span>
                  <span className="font-label-md text-label-md text-on-primary-container uppercase">Client Retention Rate</span>
                </div>
                <p className="font-body-md text-body-md text-on-primary-container mt-1">
                  Enterprise execution benchmarks maintained across active client portfolios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </>
  );
}
