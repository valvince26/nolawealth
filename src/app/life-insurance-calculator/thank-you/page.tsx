import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Review Request Received | Nola Wealth Financial",
  description: "Thank you for requesting a review of your life insurance estimate with Nola Wealth Financial.",
};

export default function CalculatorThankYouPage() {
  return (
    <div className="bg-nola-cream text-nola-charcoal font-sans antialiased min-h-screen flex flex-col justify-between">
      
      {/* TOP STATUS */}
      <div className="bg-nola-navyDeep text-white/80 text-xs py-2 px-4 border-b border-nola-gold/20 text-center">
        <span className="text-nola-gold font-medium">Estimate Review Confirmation</span> • /life-insurance-calculator/thank-you
      </div>

      {/* SIMPLIFIED HEADER */}
      <header className="bg-white border-b border-nola-border shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPc7NwVuvhQZmWTUbE8GAD-hp9LPz-8ahViAJkRZmAb6VbHVIF7-uuKASw9Lf_-4Yqu5yByE3zfkZQ0GctUXJ3kMg6MwClpafu6R4v5-RECc7BW8BmX3tDO5fZpvffuYZ12dWUF5WkCq44ytKMPjctfeNnIQJ3RH9j-C4C98zF7Y6SWcSPMfIhDS_A2IJbETPHiFmLR191gOS9W36VOPYfwiu5MYSxJdor6KrIB9a2FfrY7FRGUoVQCHL3e_p0OP4v17k" 
              alt="Nola Wealth Financial Emblem & Wordmark" 
              width={220}
              height={56}
              className="h-12 sm:h-14 w-auto object-contain"
              priority
              unoptimized
            />
          </Link>
          <Link href="/" className="text-xs font-semibold text-nola-navy hover:text-nola-gold uppercase tracking-wider transition-colors">
            Return to Main Site →
          </Link>
        </div>
      </header>

      {/* CONFIRMATION HERO */}
      <main className="flex-grow py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="bg-white rounded-xl shadow-lg border border-nola-border p-6 sm:p-10 relative overflow-hidden">
            
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-nola-gold"></div>

            <div className="w-14 h-14 rounded-full bg-nola-goldLight flex items-center justify-center text-nola-gold mb-6 border border-nola-goldBorder">
              <svg className="w-7 h-7 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
            </div>

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-nola-gold block mb-2">Request Confirmed</span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-nola-navy mb-4">
              Your Review Request Has Been Received
            </h1>

            <p className="text-base sm:text-lg text-nola-muted leading-relaxed mb-8">
              Thank you for contacting Nola Wealth Financial. Our team will follow up using your selected contact method to discuss your request.
            </p>

            <div className="p-4 rounded bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium mb-6">
              <strong>Important Reminder:</strong> Submitting a request does not provide insurance coverage.
            </div>

            <div className="pt-4 border-t border-nola-border flex flex-wrap items-center justify-between gap-4 text-xs text-nola-muted">
              <div>
                Need to reach out sooner? Call our New Orleans advisory office directly at{" "}
                <a href="tel:+15048912000" className="text-nola-navy font-semibold underline">
                  +1 (504) 891-2000
                </a>
              </div>
              <Link
                href="/life-insurance-calculator"
                className="text-nola-gold hover:text-nola-goldHover font-semibold underline"
              >
                Back to Calculator
              </Link>
            </div>

          </div>

        </div>
      </main>

      {/* COMPACT FOOTER */}
      <footer className="bg-nola-navy text-white/70 py-8 border-t border-nola-gold/30 text-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            <span className="text-white font-semibold block">Nola Wealth Financial</span>
            Poydras Executive Center, Suite 3400, New Orleans, LA 70112
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <a href="https://nolawealthfinancial.com/privacy/" target="_blank" rel="noopener noreferrer" className="hover:text-nola-gold underline">Privacy Policy</a>
            <span>•</span>
            <span>© 2026 Nola Wealth Group LLC</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
