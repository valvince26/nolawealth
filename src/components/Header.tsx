"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Users,
  Palette,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 180);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Why NOLA", href: "/why-nola" },
    { label: "Contact", href: "/contact" },
  ];

  const remoteStaffingItems = [
    { name: "Telemarketing & Sales", desc: "Outreach & lead qualification", href: "/services#remote-staffing" },
    { name: "Executive Virtual Assistant", desc: "Calendar & logistics coordination", href: "/services#remote-staffing" },
    { name: "Operational & Back-Office Support", desc: "Workflow oversight & admin", href: "/services#remote-staffing" },
    { name: "Technical & Help Desk Support", desc: "Multi-tier IT troubleshooting", href: "/services#remote-staffing" },
    { name: "Secure Video Monitoring", desc: "24/7 surveillance & auditing", href: "/services#remote-staffing" },
    { name: "Certified Bookkeeping", desc: "Reconciliation & month-end closures", href: "/services#remote-staffing" },
  ];

  const creativeServicesItems = [
    { name: "Graphic Design & Brand Systems", desc: "Pitch decks, reports & visual assets", href: "/services#creative-services" },
    { name: "High-Definition Video Production", desc: "Manifestos, explainers & media", href: "/services#creative-services" },
    { name: "Executive Copywriting", desc: "Editorial positioning & copy", href: "/services#creative-services" },
    { name: "Corporate Photography", desc: "Headshots & facility captures", href: "/services#creative-services" },
    { name: "Bespoke Web Design & UX", desc: "Fluid interfaces & user journeys", href: "/services#creative-services" },
    { name: "Custom Software Development", desc: "Portals, dashboards & tools", href: "/services#creative-services" },
  ];

  const digitalServicesItems = [
    { name: "Search Engine Optimization (SEO)", desc: "Enterprise technical SEO & keywords", href: "/services#digital-services" },
    { name: "PPC Advertising & Bidding", desc: "Paid search & retargeting funnels", href: "/services#digital-services" },
    { name: "Executive Social Media Mgmt", desc: "Community cultivation & reputation", href: "/services#digital-services" },
    { name: "Omnichannel Support Systems", desc: "Integrated CRM, chat & ticketing", href: "/services#digital-services" },
    { name: "Email Marketing & Automation", desc: "Drip campaigns & lifecycle flows", href: "/services#digital-services" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md border-b border-secondary/20 shadow-[0_4px_20px_-4px_rgba(15,28,47,0.05)] transition-all">
        <div className="h-20 max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="NOLA Wealth Financial Logo"
              width={48}
              height={48}
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none uppercase font-serif">
                NOLA Wealth
              </span>
              <span className="font-label-sm text-label-sm tracking-[0.2em] text-secondary uppercase leading-none mt-1">
                Financial Advisory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-space-lg h-full">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                const isActive = pathname.startsWith("/services");
                return (
                  <div
                    key={link.href}
                    className="relative flex items-center h-full"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href="/services"
                      className={`font-label-md text-label-md uppercase tracking-wider py-1 flex items-center gap-1.5 transition-colors ${
                        isActive || isServicesOpen
                          ? "text-secondary font-semibold border-b-2 border-secondary"
                          : "text-on-surface-variant hover:text-on-surface"
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180 text-secondary" : "text-on-surface-variant/70"
                        }`}
                      />
                    </Link>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-label-md text-label-md uppercase tracking-wider py-1 transition-colors ${
                    isActive
                      ? "text-secondary font-semibold border-b-2 border-secondary"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-space-md">
            <button
              onClick={() => setConsultationOpen(true)}
              className="inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider px-5 py-2.5 rounded-DEFAULT bg-secondary text-on-secondary shadow-sm hover:bg-on-secondary-fixed-variant hover:text-on-secondary transition-all"
            >
              Book a Consultation
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-md text-on-surface hover:bg-surface-container-low transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        {isServicesOpen && (
          <div
            className="hidden xl:block absolute top-20 left-0 right-0 z-50 bg-surface-container-lowest/98 backdrop-blur-xl border-b border-secondary/20 shadow-[0_20px_50px_rgba(15,28,47,0.15)] animate-in fade-in slide-in-from-top-2 duration-200"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-[1320px] mx-auto px-margin-desktop py-space-xl">
              {/* Top Header of Mega Menu */}
              <div className="flex items-center justify-between pb-space-sm mb-space-lg border-b border-outline-variant/20">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] font-semibold">
                      Capabilities &amp; Services Directory
                    </span>
                  </div>
                  <p className="font-headline-sm text-headline-sm text-on-surface font-serif mt-0.5">
                    Integrated Solutions Built Around Your Business
                  </p>
                </div>
                <Link
                  href="/services"
                  onClick={() => setIsServicesOpen(false)}
                  className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-secondary hover:text-on-surface transition-colors py-1.5 px-3 rounded-md bg-surface-container-low hover:bg-surface-container"
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 3 Columns for 3 Service Pillars */}
              <div className="grid grid-cols-3 gap-gutter-desktop">
                {/* Category 1: Remote Staffing */}
                <div className="bg-surface-container-low/50 rounded-xl p-space-lg border border-secondary/15 hover:border-secondary/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center shadow-sm">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block font-bold">01</span>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">Remote Staffing</h3>
                        </div>
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed text-xs">
                      Dependable, trained professionals to manage customer touchpoints and core operations.
                    </p>

                    <ul className="space-y-1.5">
                      {remoteStaffingItems.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="group flex items-start gap-2.5 p-1.5 rounded-md hover:bg-surface-container-lowest transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0 group-hover:scale-125 transition-transform"></span>
                            <div>
                              <span className="block font-label-md text-label-md text-on-surface group-hover:text-secondary font-medium transition-colors leading-tight">
                                {item.name}
                              </span>
                              <span className="block font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-space-md mt-space-md border-t border-outline-variant/20">
                    <Link
                      href="/services#remote-staffing"
                      onClick={() => setIsServicesOpen(false)}
                      className="inline-flex items-center justify-between w-full font-label-sm text-label-sm uppercase tracking-wider text-secondary hover:text-on-surface transition-colors"
                    >
                      <span>Explore Staffing Solutions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Category 2: Creative Services */}
                <div className="bg-surface-container-low/50 rounded-xl p-space-lg border border-secondary/15 hover:border-secondary/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center shadow-sm">
                          <Palette className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block font-bold">02</span>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">Creative Services</h3>
                        </div>
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed text-xs">
                      Bespoke visual assets, studio media, branding identity, and custom web software.
                    </p>

                    <ul className="space-y-1.5">
                      {creativeServicesItems.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="group flex items-start gap-2.5 p-1.5 rounded-md hover:bg-surface-container-lowest transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0 group-hover:scale-125 transition-transform"></span>
                            <div>
                              <span className="block font-label-md text-label-md text-on-surface group-hover:text-secondary font-medium transition-colors leading-tight">
                                {item.name}
                              </span>
                              <span className="block font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-space-md mt-space-md border-t border-outline-variant/20">
                    <Link
                      href="/services#creative-services"
                      onClick={() => setIsServicesOpen(false)}
                      className="inline-flex items-center justify-between w-full font-label-sm text-label-sm uppercase tracking-wider text-secondary hover:text-on-surface transition-colors"
                    >
                      <span>Explore Creative Studio</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Category 3: Digital Services */}
                <div className="bg-surface-container-low/50 rounded-xl p-space-lg border border-secondary/15 hover:border-secondary/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center shadow-sm">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block font-bold">03</span>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">Digital Services</h3>
                        </div>
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed text-xs">
                      High-performance acquisition funnels, enterprise SEO, PPC, and omnichannel CX.
                    </p>

                    <ul className="space-y-1.5">
                      {digitalServicesItems.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="group flex items-start gap-2.5 p-1.5 rounded-md hover:bg-surface-container-lowest transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0 group-hover:scale-125 transition-transform"></span>
                            <div>
                              <span className="block font-label-md text-label-md text-on-surface group-hover:text-secondary font-medium transition-colors leading-tight">
                                {item.name}
                              </span>
                              <span className="block font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-space-md mt-space-md border-t border-outline-variant/20">
                    <Link
                      href="/services#digital-services"
                      onClick={() => setIsServicesOpen(false)}
                      className="inline-flex items-center justify-between w-full font-label-sm text-label-sm uppercase tracking-wider text-secondary hover:text-on-surface transition-colors"
                    >
                      <span>Explore Digital Growth</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mega Menu Footer Banner */}
              <div className="mt-space-md p-space-md rounded-xl bg-primary-container text-on-primary border border-secondary/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-on-primary font-serif block text-sm">
                      Need a Custom Services Package?
                    </span>
                    <span className="font-body-sm text-body-sm text-on-primary-container text-xs">
                      We architect custom operational &amp; creative capability suites tailored to your organizational goals.
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsServicesOpen(false);
                    setConsultationOpen(true);
                  }}
                  className="whitespace-nowrap px-5 py-2 rounded-DEFAULT bg-secondary text-on-secondary font-label-sm text-label-sm uppercase tracking-wider hover:bg-on-secondary-fixed-variant transition-all shadow-sm"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-secondary/20 bg-surface-container-lowest/98 backdrop-blur-lg px-margin-mobile py-space-lg shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                if (link.label === "Services") {
                  const isActive = pathname.startsWith("/services");
                  return (
                    <div key={link.href} className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex-1 font-label-lg text-label-lg uppercase tracking-wider py-2 px-3 rounded-md transition-colors ${
                            isActive
                              ? "bg-surface-container-low text-secondary font-semibold"
                              : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                          }`}
                        >
                          Services
                        </Link>
                        <button
                          onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                          className="p-2 text-on-surface-variant hover:text-secondary"
                          aria-label="Toggle Services submenu"
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              mobileServicesExpanded ? "rotate-180 text-secondary" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Submenu for Services in Mobile */}
                      {mobileServicesExpanded && (
                        <div className="pl-4 py-2 space-y-3 border-l-2 border-secondary/30 ml-3 my-1">
                          <div>
                            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold block mb-1">
                              01. Remote Staffing
                            </span>
                            <div className="pl-2 space-y-1">
                              {remoteStaffingItems.map((item, idx) => (
                                <Link
                                  key={idx}
                                  href={item.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block font-body-md text-body-md text-on-surface-variant hover:text-on-surface py-0.5"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2 border-t border-outline-variant/20">
                            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold block mb-1">
                              02. Creative Services
                            </span>
                            <div className="pl-2 space-y-1">
                              {creativeServicesItems.map((item, idx) => (
                                <Link
                                  key={idx}
                                  href={item.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block font-body-md text-body-md text-on-surface-variant hover:text-on-surface py-0.5"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2 border-t border-outline-variant/20">
                            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold block mb-1">
                              03. Digital Services
                            </span>
                            <div className="pl-2 space-y-1">
                              {digitalServicesItems.map((item, idx) => (
                                <Link
                                  key={idx}
                                  href={item.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block font-body-md text-body-md text-on-surface-variant hover:text-on-surface py-0.5"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-label-lg text-label-lg uppercase tracking-wider py-2 px-3 rounded-md transition-colors ${
                      isActive
                        ? "bg-surface-container-low text-secondary font-semibold"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Modals */}
      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </>
  );
}

