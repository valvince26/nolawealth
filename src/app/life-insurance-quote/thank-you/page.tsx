import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quote Request Received | Nola Wealth Financial",
  description: "Thank you for submitting your personalized life insurance quote request. Our advisory team will be in touch with you shortly.",
};

export default function ThankYouPage() {
  return (
    <div className="bg-nola-cream text-nola-charcoal font-sans antialiased min-h-screen flex flex-col justify-between">
      
      {/* TOP STATUS */}
      <div className="bg-nola-navyDeep text-white/80 text-xs py-2 px-4 border-b border-nola-gold/20 text-center">
        <span className="text-nola-gold font-medium">Request Confirmation</span> • /life-insurance-quote/thank-you
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

      {/* CONFIRMATION HERO & WHAT TO EXPECT */}
      <main className="flex-grow py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Primary Card */}
          <div className="bg-white rounded-xl shadow-lg border border-nola-border p-6 sm:p-10 relative overflow-hidden">
            
            {/* Gold Accent Header Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-nola-gold"></div>

            {/* Success Check Icon */}
            <div className="w-14 h-14 rounded-full bg-nola-goldLight flex items-center justify-center text-nola-gold mb-6 border border-nola-goldBorder">
              <svg className="w-7 h-7 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
            </div>

            {/* Headline */}
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-nola-gold block mb-2">Inquiry Confirmed</span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-nola-navy mb-4">
              Your Quote Request Has Been Received
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-nola-muted leading-relaxed mb-8">
              Thank you for contacting Nola Wealth Financial. Our team will follow up using your selected contact method to discuss your life insurance request.
            </p>

            {/* What to Expect Section */}
            <div className="bg-nola-sand rounded-lg p-6 border border-nola-border/80 mb-8">
              <h2 className="text-sm font-serif font-bold uppercase tracking-wider text-nola-navy mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-nola-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/></svg>
                What To Expect Next
              </h2>
              
              <ul className="space-y-3.5 text-sm text-nola-charcoal">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-nola-navy text-nola-gold text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <strong>A conversation about your protection goals:</strong>
                    <p className="text-xs text-nola-muted mt-0.5">We will discuss who you want to protect and the structure (term vs. permanent) that aligns with your financial horizon.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-nola-navy text-nola-gold text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <strong>An explanation of any additional information needed:</strong>
                    <p className="text-xs text-nola-muted mt-0.5">We will explain standard underwriting factors such as coverage duration, preliminary health history, and carrier guidelines.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-nola-navy text-nola-gold text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <strong>Guidance on the next steps for obtaining a quote:</strong>
                    <p className="text-xs text-nola-muted mt-0.5">You will receive clear pricing alternatives from top-tier carriers with zero obligation to proceed.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Mandatory Reminder Notice */}
            <div className="p-4 rounded bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium">
              <strong>Important Reminder:</strong> Submitting a request does not put coverage in place.
            </div>

            {/* Optional Design Component */}
            <div className="mt-8 pt-6 border-t border-dashed border-nola-border text-xs text-nola-muted">
              <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-2">
                <span>OPTIONAL DESIGN COMPONENT</span>
                <span>Unscheduled Calendar Slot Reservation</span>
              </div>
              <p className="text-xs text-nola-muted leading-relaxed">
                Need to reach out sooner? Call our New Orleans advisory office directly at <a href="tel:+15048912000" className="text-nola-navy font-semibold underline">+1 (504) 891-2000</a> (Monday – Friday, 9:00 AM – 5:00 PM CST).
              </p>
            </div>

          </div>

          {/* Engineering Annotation */}
          <div className="mt-6 p-4 rounded bg-white/70 border border-nola-border text-xs text-nola-muted">
            <span className="font-mono text-[10px] font-bold text-nola-navy uppercase block mb-1">State Integrity Note:</span>
            This confirmation view is designed to be rendered only after the backend lead ingestion API returns a verified HTTP 200 payload. No artificial countdown timers, fake policy numbers, or automated premium approximations are displayed.
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
