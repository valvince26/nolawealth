"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User, ShieldCheck } from "lucide-react";
import ConsultationModal from "./ConsultationModal";
import ClientLoginModal from "./ClientLoginModal";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Why NOLA", href: "/why-nola" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md border-b border-secondary/20 shadow-[0_4px_20px_-4px_rgba(15,28,47,0.05)] transition-all">
        <div className="h-20 max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-md bg-primary-container flex items-center justify-center text-secondary-fixed shadow-sm group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[22px]">token</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none uppercase">
                NOLA Wealth
              </span>
              <span className="font-label-sm text-label-sm tracking-[0.2em] text-secondary uppercase leading-none mt-1">
                Financial Advisory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-space-lg">
            {navLinks.map((link) => {
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
              onClick={() => setLoginOpen(true)}
              className="hidden sm:inline-block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-secondary transition-colors px-2 py-1"
            >
              Client Login
            </button>
            <button
              onClick={() => setConsultationOpen(true)}
              className="inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider px-5 py-2.5 rounded-DEFAULT bg-secondary text-on-secondary shadow-sm hover:bg-on-secondary-fixed-variant hover:text-on-secondary transition-all"
            >
              Book a Consultation
            </button>

            <button
              onClick={() => setLoginOpen(true)}
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary hover:opacity-90 transition-opacity"
              title="Client Login"
            >
              <User className="w-4 h-4" />
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

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-secondary/20 bg-surface-container-lowest/98 backdrop-blur-lg px-margin-mobile py-space-lg shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => {
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
              <div className="pt-3 border-t border-outline-variant/30 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setLoginOpen(true);
                  }}
                  className="w-full text-left font-label-md text-label-md uppercase tracking-wider py-2.5 px-3 rounded-md bg-surface-container-low text-on-surface flex items-center justify-between"
                >
                  <span>Client Login</span>
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Modals */}
      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
      <ClientLoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
