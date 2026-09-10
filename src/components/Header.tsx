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
  Monitor,
  ArrowRight,
  PhoneCall,
  UserCheck,
  Settings,
  Headphones,
  Video,
  Calculator,
  Film,
  FileText,
  Camera,
  Award,
  Globe,
  TrendingUp,
  Edit3,
  Code,
  Search,
  MousePointerClick,
  Share2,
  MessageSquare,
  Mail,
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
    { label: "Insurance", href: "/insurance" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Why NOLA", href: "/why-nola" },
    { label: "Contact", href: "/contact" },
  ];

  const remoteStaffingItems = [
    { name: "Telemarketing & Sales", href: "/services#remote-staffing", icon: PhoneCall },
    { name: "Virtual Assistant", href: "/services#remote-staffing", icon: UserCheck },
    { name: "Operational Support", href: "/services#remote-staffing", icon: Settings },
    { name: "Technical Support", href: "/services#remote-staffing", icon: Headphones },
    { name: "Video Monitoring", href: "/services#remote-staffing", icon: Video },
    { name: "Bookkeeping", href: "/services#remote-staffing", icon: Calculator },
  ];

  const creativeServicesItems = [
    { name: "Graphic Design", href: "/services#creative-services", icon: Palette },
    { name: "Video Production", href: "/services#creative-services", icon: Film },
    { name: "Copywriting", href: "/services#creative-services", icon: FileText },
    { name: "Photography", href: "/services#creative-services", icon: Camera },
    { name: "Branding", href: "/services#creative-services", icon: Award },
    { name: "Web Design", href: "/services#creative-services", icon: Globe },
    { name: "Marketing Strategy", href: "/services#creative-services", icon: TrendingUp },
    { name: "Content Creation", href: "/services#creative-services", icon: Edit3 },
    { name: "Custom Software Development", href: "/services#creative-services", icon: Code },
  ];

  const digitalServicesItems = [
    { name: "SEO", href: "/services#digital-services", icon: Search },
    { name: "PPC Advertising", href: "/services#digital-services", icon: MousePointerClick },
    { name: "Social Media Management", href: "/services#digital-services", icon: Share2 },
    { name: "Omnichannel Support", href: "/services#digital-services", icon: MessageSquare },
    { name: "Email Marketing", href: "/services#digital-services", icon: Mail },
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
              {/* Top Overview Link */}
              <div className="mb-6">
                <Link
                  href="/services"
                  onClick={() => setIsServicesOpen(false)}
                  className="inline-flex items-center gap-2 text-secondary hover:text-on-surface font-headline-sm font-semibold text-lg transition-colors group"
                >
                  <span>All Services Overview</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* 3 Columns Layout matching user list */}
              <div className="grid grid-cols-3 gap-12 items-start">
                {/* Column 1: Remote Staffing */}
                <div>
                  <div className="flex items-center gap-3 pb-3 border-b border-outline-variant/30 mb-5">
                    <Users className="w-5 h-5 text-secondary" />
                    <h3 className="font-headline-sm text-lg font-bold text-on-surface font-serif">Remote Staffing</h3>
                  </div>

                  <ul className="space-y-3.5">
                    {remoteStaffingItems.map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="group flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors"
                          >
                            <IconComp className="w-4 h-4 text-secondary/80 group-hover:text-secondary group-hover:scale-110 transition-all shrink-0" />
                            <span className="font-body-md text-sm font-medium text-on-surface group-hover:text-secondary transition-colors">
                              {item.name}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Column 2: Creative Services */}
                <div>
                  <div className="flex items-center gap-3 pb-3 border-b border-outline-variant/30 mb-5">
                    <Palette className="w-5 h-5 text-secondary" />
                    <h3 className="font-headline-sm text-lg font-bold text-on-surface font-serif">Creative Services</h3>
                  </div>

                  <ul className="space-y-3.5">
                    {creativeServicesItems.map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="group flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors"
                          >
                            <IconComp className="w-4 h-4 text-secondary/80 group-hover:text-secondary group-hover:scale-110 transition-all shrink-0" />
                            <span className="font-body-md text-sm font-medium text-on-surface group-hover:text-secondary transition-colors">
                              {item.name}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Column 3: Digital Services */}
                <div>
                  <div className="flex items-center gap-3 pb-3 border-b border-outline-variant/30 mb-5">
                    <Monitor className="w-5 h-5 text-secondary" />
                    <h3 className="font-headline-sm text-lg font-bold text-on-surface font-serif">Digital Services</h3>
                  </div>

                  <ul className="space-y-3.5">
                    {digitalServicesItems.map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="group flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors"
                          >
                            <IconComp className="w-4 h-4 text-secondary/80 group-hover:text-secondary group-hover:scale-110 transition-all shrink-0" />
                            <span className="font-body-md text-sm font-medium text-on-surface group-hover:text-secondary transition-colors">
                              {item.name}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
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
                        <div className="pl-4 py-2 space-y-4 border-l-2 border-secondary/30 ml-3 my-1">
                          <div>
                            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold block mb-2">
                              Remote Staffing
                            </span>
                            <div className="pl-2 space-y-2">
                              {remoteStaffingItems.map((item, idx) => {
                                const IconComp = item.icon;
                                return (
                                  <Link
                                    key={idx}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-2.5 font-body-md text-body-md text-on-surface-variant hover:text-secondary py-0.5"
                                  >
                                    <IconComp className="w-4 h-4 text-secondary shrink-0" />
                                    <span>{item.name}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>

                          <div className="pt-2 border-t border-outline-variant/20">
                            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold block mb-2">
                              Creative Services
                            </span>
                            <div className="pl-2 space-y-2">
                              {creativeServicesItems.map((item, idx) => {
                                const IconComp = item.icon;
                                return (
                                  <Link
                                    key={idx}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-2.5 font-body-md text-body-md text-on-surface-variant hover:text-secondary py-0.5"
                                  >
                                    <IconComp className="w-4 h-4 text-secondary shrink-0" />
                                    <span>{item.name}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>

                          <div className="pt-2 border-t border-outline-variant/20">
                            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold block mb-2">
                              Digital Services
                            </span>
                            <div className="pl-2 space-y-2">
                              {digitalServicesItems.map((item, idx) => {
                                const IconComp = item.icon;
                                return (
                                  <Link
                                    key={idx}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-2.5 font-body-md text-body-md text-on-surface-variant hover:text-secondary py-0.5"
                                  >
                                    <IconComp className="w-4 h-4 text-secondary shrink-0" />
                                    <span>{item.name}</span>
                                  </Link>
                                );
                              })}
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


