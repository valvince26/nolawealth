"use client";

import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { submitLead } from "@/lib/submitLead";
import {
  Phone,
  Mail,
  Clock,
  Building2,
  ShieldCheck,
  ArrowRight,
  Lock,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const firstNameRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    serviceInterest: "",
    needsDescription: "",
  });

  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError("");
    const ok = await submitLead("contact-page", formData);
    setSending(false);
    if (ok) {
      setSubmitted(true);
    } else {
      setSendError(
        "We couldn't send that just now. Please email marcus.still@nolawealthfinancial.com or call (504) 891-2000."
      );
    }
  };

  const focusInput = () => {
    if (firstNameRef.current) {
      firstNameRef.current.focus();
      firstNameRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      q: "Can I use NOLA for only one service?",
      a: "Yes. Services can be engaged individually or in strategic combination. Clients frequently begin with an isolated mandate—such as a single senior specialist or a digital platform redesign—before scaling into integrated operations.",
    },
    {
      q: "Can NOLA provide an entire remote team?",
      a: "Solutions can range from individual specialists to broader dedicated support squads, complete with team leadership and technical governance, depending entirely on your operational need.",
    },
    {
      q: "Can I combine staffing and marketing services?",
      a: "Yes. NOLA’s model is expressly engineered to allow multiple capabilities to work seamlessly together under unified oversight, avoiding the siloed friction typical of disconnected vendors.",
    },
    {
      q: "How do I know which service I need?",
      a: "Start with an initial consultation. Our leadership team will review your business bottlenecks, clarify functional gaps, and define the appropriate, high-conviction delivery framework.",
    },
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-20 flex-grow bg-surface">
        <div className="flex flex-col w-full">
          {/* Subtle Ambient Glow Element */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-40 right-1/4 w-96 h-96 bg-secondary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute top-96 -left-20 w-80 h-80 bg-primary-container/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

            {/* Section 1: Hero Section */}
            <section className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop pt-space-2xl pb-space-xl">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low rounded-DEFAULT mb-space-md shadow-sm border border-secondary/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-secondary font-semibold">
                    CONTACT NOLA
                  </span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-space-md font-serif">
                  Tell Us What Your Business Needs.
                </h1>
                <p className="font-body-xl text-body-xl text-on-surface-variant leading-relaxed">
                  Whether you’re looking for one specialist, an entire support team, creative expertise, or digital services, start by telling us what you’re trying to accomplish.
                </p>
              </div>
            </section>

            {/* Section 2: Contact Layout (Two Columns) */}
            <section className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop pb-space-4xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
                {/* Left Column: Advisory Statement & Details */}
                <div className="lg:col-span-5 space-y-space-xl">
                  <div className="space-y-space-sm">
                    <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-secondary font-semibold">
                      Collaborative Scoping
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight font-serif">
                      Let’s Start a Conversation
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed pt-2">
                      Every engagement commences with direct strategic discovery. We analyze your structural bottlenecks, operational goals, and talent benchmarks to architect an exact-fit deployment.
                    </p>
                  </div>

                  {/* Contact Details Cards */}
                  <div className="space-y-space-md">
                    {/* Item 1: Phone */}
                    <div className="p-space-md bg-surface-container-lowest rounded-DEFAULT shadow-sm flex items-start gap-4 transition-all hover:bg-surface-container-low border border-secondary/15">
                      <div className="w-10 h-10 rounded-DEFAULT bg-secondary-fixed/40 flex items-center justify-center flex-shrink-0 text-secondary">
                        <span className="material-symbols-outlined text-[20px]">call</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block">
                          Telephone Inquiries
                        </span>
                        <a
                          className="font-headline-sm text-headline-sm text-on-surface hover:text-secondary transition-colors font-serif"
                          href="tel:+15048912000"
                        >
                          +1 (504) 891-2000
                        </a>
                      </div>
                    </div>

                    {/* Item 2: Email */}
                    <div className="p-space-md bg-surface-container-lowest rounded-DEFAULT shadow-sm flex items-start gap-4 transition-all hover:bg-surface-container-low border border-secondary/15">
                      <div className="w-10 h-10 rounded-DEFAULT bg-secondary-fixed/40 flex items-center justify-center flex-shrink-0 text-secondary">
                        <span className="material-symbols-outlined text-[20px]">mark_email_read</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block">
                          Electronic Correspondence
                        </span>
                        <a
                          className="font-body-md text-body-md text-on-surface font-semibold hover:text-secondary block transition-colors"
                          href="mailto:marcus.still@nolawealthfinancial.com"
                        >
                          marcus.still@nolawealthfinancial.com
                        </a>
                        <a
                          className="font-body-md text-body-md text-on-surface-variant hover:text-secondary block transition-colors"
                          href="mailto:marcus.still@nolawealthfinancial.com"
                        >
                          marcus.still@nolawealthfinancial.com
                        </a>
                      </div>
                    </div>

                    {/* Item 3: Hours */}
                    <div className="p-space-md bg-surface-container-lowest rounded-DEFAULT shadow-sm flex items-start gap-4 transition-all hover:bg-surface-container-low border border-secondary/15">
                      <div className="w-10 h-10 rounded-DEFAULT bg-secondary-fixed/40 flex items-center justify-center flex-shrink-0 text-secondary">
                        <span className="material-symbols-outlined text-[20px]">schedule</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block">
                          Operating Hours
                        </span>
                        <p className="font-body-md text-body-md text-on-surface font-semibold">
                          Monday – Friday: 8:00 AM – 6:00 PM CST
                        </p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">Global accounts monitored continuously.</p>
                      </div>
                    </div>

                    {/* Item 4: Offices */}
                    <div className="p-space-md bg-surface-container-lowest rounded-DEFAULT shadow-sm flex items-start gap-4 transition-all hover:bg-surface-container-low border border-secondary/15">
                      <div className="w-10 h-10 rounded-DEFAULT bg-secondary-fixed/40 flex items-center justify-center flex-shrink-0 text-secondary">
                        <span className="material-symbols-outlined text-[20px]">apartment</span>
                      </div>
                      <div className="space-y-2">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block">
                          Executive Offices
                        </span>
                        <div>
                          <p className="font-body-md text-body-md text-on-surface font-semibold">New Orleans Flagship</p>
                          <p className="font-body-md text-body-md text-on-surface-variant">Poydras Executive Center, Suite 3400, New Orleans, LA 70112</p>
                        </div>
                        <div className="pt-1">
                          <p className="font-body-md text-body-md text-on-surface font-semibold">New York Advisory Room</p>
                          <p className="font-body-md text-body-md text-on-surface-variant">Park Avenue Tower, 18th Floor, New York, NY 10022</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reassurance Badge */}
                  <div className="p-space-md bg-surface-container rounded-DEFAULT flex items-center gap-3 border border-secondary/20">
                    <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[16px]">verified_user</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface">
                      <strong className="font-semibold text-on-surface">Guaranteed SLA:</strong> Direct access to senior advisory directors within 24 business hours.
                    </p>
                  </div>
                </div>

                {/* Right Column: Inquiry Form */}
                <div className="lg:col-span-7">
                  <div className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-DEFAULT shadow-lg relative border border-secondary/20">
                    <div className="mb-space-lg">
                      <span className="font-label-md text-label-md uppercase tracking-[0.14em] text-secondary block mb-1 font-semibold">
                        Confidential Docket
                      </span>
                      <h3 className="font-headline-md text-headline-md text-on-surface font-serif">
                        Consultation Briefing
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        Provide preliminary parameters regarding your staffing, creative, or digital initiative.
                      </p>
                    </div>

                    {submitted ? (
                      <div className="p-space-xl bg-surface-container-low rounded-DEFAULT text-center space-y-4 border border-secondary/30 animate-in fade-in duration-300">
                        <span className="material-symbols-outlined text-secondary text-[48px] block mx-auto">task_alt</span>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-serif">
                          Consultation Request Transmitted
                        </h4>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
                          Thank you, <span className="font-semibold text-on-surface">{formData.firstName || "Valued Client"}</span>. An executive advisory partner has received your parameters and will respond within 24 business hours.
                        </p>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="font-label-md text-label-md uppercase tracking-wider px-6 py-2.5 rounded-DEFAULT bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors"
                        >
                          Submit Additional Briefing
                        </button>
                      </div>
                    ) : (
                      <form className="space-y-space-md" onSubmit={handleSubmit}>
                        {/* Name Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                          <div className="space-y-1">
                            <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                              First Name *
                            </label>
                            <input
                              ref={firstNameRef}
                              required
                              type="text"
                              placeholder="Alexander"
                              value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                              className="w-full px-4 py-3 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-DEFAULT shadow-sm border border-outline-variant/40 focus:border-secondary focus:outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                              Last Name *
                            </label>
                            <input
                              required
                              type="text"
                              placeholder="Vanderbilt"
                              value={formData.lastName}
                              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                              className="w-full px-4 py-3 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-DEFAULT shadow-sm border border-outline-variant/40 focus:border-secondary focus:outline-none transition-all"
                            />
                          </div>
                        </div>

                        {/* Company & Business Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                          <div className="space-y-1">
                            <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                              Company / Organization *
                            </label>
                            <input
                              required
                              type="text"
                              placeholder="Meridian Holdings"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              className="w-full px-4 py-3 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-DEFAULT shadow-sm border border-outline-variant/40 focus:border-secondary focus:outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                              Business Email *
                            </label>
                            <input
                              required
                              type="email"
                              placeholder="a.vanderbilt@meridian.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-3 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-DEFAULT shadow-sm border border-outline-variant/40 focus:border-secondary focus:outline-none transition-all"
                            />
                          </div>
                        </div>

                        {/* Phone Number */}
                        <div className="space-y-1">
                          <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 019-2834"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-DEFAULT shadow-sm border border-outline-variant/40 focus:border-secondary focus:outline-none transition-all"
                          />
                        </div>

                        {/* Service of Interest Dropdown */}
                        <div className="space-y-1">
                          <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                            What service are you interested in? *
                          </label>
                          <div className="relative">
                            <select
                              required
                              value={formData.serviceInterest}
                              onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                              className="w-full appearance-none px-4 py-3 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-DEFAULT shadow-sm border border-outline-variant/40 focus:border-secondary focus:outline-none transition-all pr-10"
                            >
                              <option value="" disabled>Select Core Practice Area</option>
                              <option value="Remote Staffing">Remote Staffing (Specialists &amp; Managed Squads)</option>
                              <option value="Creative Services">Creative Services (Brand, Direction &amp; Content)</option>
                              <option value="Digital Services">Digital Services (Platforms, Systems &amp; Growth)</option>
                              <option value="Multiple Services">Multiple Services (Cross-functional engagement)</option>
                              <option value="Not Sure Yet">Not Sure Yet (Discovery required)</option>
                            </select>
                            <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                              keyboard_arrow_down
                            </span>
                          </div>
                        </div>

                        {/* Tell us about your needs */}
                        <div className="space-y-1">
                          <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                            Tell us about your needs *
                          </label>
                          <textarea
                            required
                            rows={4}
                            placeholder="Outline key business objectives, functional roles sought, anticipated team size, or upcoming creative and digital deadlines..."
                            value={formData.needsDescription}
                            onChange={(e) => setFormData({ ...formData, needsDescription: e.target.value })}
                            className="w-full px-4 py-3 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-DEFAULT shadow-sm border border-outline-variant/40 focus:border-secondary focus:outline-none transition-all"
                          />
                        </div>

                        {/* Submit Action Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={sending}
                            className="w-full py-4 px-6 bg-secondary text-on-secondary font-label-md text-label-md uppercase tracking-[0.14em] rounded-DEFAULT shadow-md hover:bg-on-secondary-fixed-variant transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            <span>{sending ? "Sending…" : "Request a Consultation"}</span>
                            {!sending && (
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            )}
                          </button>
                          {sendError && (
                            <p
                              role="alert"
                              className="mt-3 font-body-sm text-body-sm text-error text-center"
                            >
                              {sendError}
                            </p>
                          )}
                        </div>

                        {/* Privacy Notice */}
                        <div className="flex items-center justify-center gap-2 pt-2 text-center">
                          <span className="material-symbols-outlined text-secondary text-[16px]">lock</span>
                          <p className="font-label-sm text-label-sm text-on-surface-variant">
                            We respect your privacy. Information shared is treated with strict enterprise confidentiality.
                          </p>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Section 3: "What Happens Next" */}
          <section className="bg-surface-container-lowest py-space-3xl shadow-sm border-t border-secondary/15">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
              <div className="text-center max-w-2xl mx-auto mb-space-2xl">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold block mb-2">
                  Operational Protocol
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-serif">What Happens Next</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
                  A transparent, frictionless onboarding standard structured to preserve momentum.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
                {/* Step 1 */}
                <div className="bg-surface p-space-lg rounded-DEFAULT shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow border border-secondary/15">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="font-display-lg text-display-lg text-secondary opacity-30 group-hover:opacity-60 transition-opacity font-serif font-bold">
                      01
                    </span>
                    <div className="w-10 h-10 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-on-secondary-fixed">
                      <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-serif">Submit Your Inquiry</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Our advisory committee reviews your operational goals, structural timeline, and specific functional requirements immediately upon receipt.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs flex items-center text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold border-t border-outline-variant/20">
                    <span>Stage 1: Internal Briefing</span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-surface p-space-lg rounded-DEFAULT shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow border border-secondary/15">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="font-display-lg text-display-lg text-secondary opacity-30 group-hover:opacity-60 transition-opacity font-serif font-bold">
                      02
                    </span>
                    <div className="w-10 h-10 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-on-secondary-fixed">
                      <span className="material-symbols-outlined text-[20px]">forum</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-serif">Speak With Our Team</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Participate in a focused 20-minute strategic consultation with a practice director to qualify scope, workflows, and culture alignment.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs flex items-center text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold border-t border-outline-variant/20">
                    <span>Stage 2: Director Dialogue</span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-surface p-space-lg rounded-DEFAULT shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow border border-secondary/15">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="font-display-lg text-display-lg text-secondary opacity-30 group-hover:opacity-60 transition-opacity font-serif font-bold">
                      03
                    </span>
                    <div className="w-10 h-10 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-on-secondary-fixed">
                      <span className="material-symbols-outlined text-[20px]">architecture</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-serif">Receive Blueprint</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      We deliver a tailored service blueprint with clear operational milestones, talent candidate profiles, and implementation schedules.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs flex items-center text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold border-t border-outline-variant/20">
                    <span>Stage 3: Actionable Roadmap</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: FAQ Preview Section */}
          <section className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-4xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
              <div className="lg:col-span-4 space-y-space-sm">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold">
                  Inquiry Architecture
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-serif">Frequently Asked Questions</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Essential insights into our engagement structures, team sizing, and multi-disciplinary services.
                </p>
                <div className="pt-space-md">
                  <div className="p-space-md bg-surface-container-lowest rounded-DEFAULT shadow-sm border border-secondary/20">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary block mb-1 font-semibold">
                      Need Clarification?
                    </span>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-3">
                      Our advisory coordinators are prepared to discuss bespoke requirements anytime.
                    </p>
                    <a
                      className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1 hover:text-secondary transition-colors"
                      href="tel:+15048912000"
                    >
                      <span>Connect with Operations</span>
                      <ArrowRight className="w-4 h-4 text-secondary" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-space-sm">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-surface-container-lowest rounded-DEFAULT shadow-sm overflow-hidden border border-secondary/15">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full text-left p-space-md lg:p-space-lg flex items-center justify-between gap-4 cursor-pointer hover:bg-surface-container-low transition-colors"
                    >
                      <span className="font-headline-sm text-headline-sm text-on-surface font-serif">{faq.q}</span>
                      <span className={`w-8 h-8 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-on-surface transition-transform duration-300 ${openFaq === idx ? "rotate-180 text-secondary" : ""}`}>
                        <ChevronDown className="w-5 h-5" />
                      </span>
                    </button>
                    {openFaq === idx && (
                      <div className="px-space-md lg:px-space-lg pb-space-lg pt-0 text-on-surface-variant font-body-lg text-body-lg leading-relaxed border-t border-outline-variant/20 pt-3 animate-in fade-in duration-150">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 5: Branded Executive Callout Section */}
          <section className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop pb-space-4xl w-full">
            <div className="bg-primary-container text-on-primary rounded-DEFAULT p-space-xl lg:p-space-3xl relative overflow-hidden shadow-xl border border-secondary/30">
              {/* Fleur-de-lis Crest Ambient Mark */}
              <div className="absolute -right-12 -bottom-12 w-64 h-64 opacity-5 pointer-events-none text-secondary">
                <span className="material-symbols-outlined text-[240px] text-secondary-fixed">shield_with_house</span>
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-xl">
                <div className="max-w-2xl space-y-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary-fixed-dim font-bold">
                    The NOLA Standard
                  </span>
                  <h3 className="font-headline-xl text-headline-xl text-on-primary leading-tight font-serif">
                    Strategy. Creativity. Growth.<br className="hidden sm:inline" /> It Starts With a Conversation.
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-primary-container">
                    Connect with our executive advisory council today to explore tailored remote teams, high-conviction design direction, and enterprise digital solutions.
                  </p>
                </div>
                <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-space-sm w-full md:w-auto">
                  <button
                    onClick={focusInput}
                    className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider px-6 py-3.5 rounded-DEFAULT bg-secondary text-on-secondary shadow-sm hover:bg-on-secondary-fixed-variant transition-all"
                  >
                    Initiate Engagement
                  </button>
                  <a
                    className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider px-6 py-3.5 rounded-DEFAULT bg-surface-container-lowest/10 text-on-primary hover:bg-surface-container-lowest/20 transition-all border border-secondary/20"
                    href="tel:+15048912000"
                  >
                    +1 (504) 891-2000
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
