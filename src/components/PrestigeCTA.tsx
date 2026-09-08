"use client";

import Link from "next/link";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

export default function PrestigeCTA() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-surface py-space-3xl lg:py-space-4xl">
        <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="bg-primary-container text-on-primary p-space-2xl lg:p-space-3xl rounded-DEFAULT shadow-2xl relative overflow-hidden text-center border border-secondary/30">
            {/* Delicate Gold Border Inset Accent */}
            <div className="absolute inset-3 sm:inset-5 pointer-events-none rounded-DEFAULT border border-secondary/20"></div>

            <div className="max-w-2xl mx-auto relative z-10">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary-fixed-dim font-bold block mb-space-xs">
                Ready to Grow?
              </span>
              <h2 className="font-display-lg text-display-lg-mobile lg:text-headline-xl text-on-primary mb-space-md font-serif">
                Tell Us What Your Business Needs.
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container mb-space-xl leading-relaxed">
                Whether you require a single specialist or a synchronized deployment of remote staffing, creative capital, and digital campaigns, our partners will engineer the optimal framework.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md">
                <button
                  onClick={() => setConsultationOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider px-8 py-4 bg-secondary text-on-secondary shadow-md hover:bg-on-secondary-fixed-variant transition-colors duration-300 rounded-DEFAULT"
                >
                  Book a Consultation
                </button>
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider px-8 py-4 bg-surface-container-highest/10 text-on-primary hover:bg-surface-container-highest/20 transition-colors duration-300 rounded-DEFAULT border border-secondary/20"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </>
  );
}
