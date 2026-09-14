"use client";

import { useState } from "react";
import { X, Calendar, Clock, CheckCircle2, Building2, User, Mail, Sparkles } from "lucide-react";
import { submitLead } from "@/lib/submitLead";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    practiceArea: "Full Integrated Advisory",
    date: "",
    time: "10:00 AM",
    notes: "",
  });
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  // Every hook must be declared above this early return — React requires hooks to be
  // called in the same order on every render.
  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError("");
    const ok = await submitLead("consultation-modal", formData);
    setSending(false);
    if (ok) {
      setSubmitted(true);
    } else {
      setSendError(
        "We couldn't send that just now. Please email marcus.still@nolawealthfinancial.com or call (504) 891-2000."
      );
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary-container/80 backdrop-blur-md transition-opacity duration-300">
      <div className="relative w-full max-w-2xl bg-surface-container-lowest border border-secondary/30 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header Ribbon */}
        <div className="bg-primary-container text-on-primary px-6 py-5 flex items-center justify-between border-b border-secondary/20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary">
                Book an Executive Consultation
              </h3>
              <p className="font-label-sm text-label-sm text-on-primary-container">
                NOLA Wealth Advisory Council & Governance
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/15 text-secondary mx-auto flex items-center justify-center border border-secondary/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-headline-lg text-headline-lg text-on-surface">
                Consultation Confirmed
              </h4>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">
                Thank you, <span className="font-semibold text-on-surface">{formData.name || "Valued Client"}</span>. Our senior fiduciary advisors will review your inquiry for <span className="font-semibold text-secondary">{formData.company || "your enterprise"}</span> and email confirmation details shortly.
              </p>
              <div className="p-4 rounded-lg bg-surface-container-low border border-secondary/20 max-w-md mx-auto text-left font-body-md text-body-md text-on-surface space-y-1">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant font-label-sm uppercase">Practice Area:</span>
                  <span className="font-medium">{formData.practiceArea}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant font-label-sm uppercase">Scheduled Time:</span>
                  <span className="font-medium">{formData.date || "Next Business Day"} at {formData.time}</span>
                </div>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="font-label-md text-label-md uppercase tracking-wider px-8 py-3 rounded-DEFAULT bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors"
                >
                  Return to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-outline" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-DEFAULT bg-surface-container-low border border-outline-variant/40 focus:border-secondary focus:outline-none font-body-md text-on-surface"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-outline" />
                    <input
                      required
                      type="email"
                      placeholder="eleanor@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-DEFAULT bg-surface-container-low border border-outline-variant/40 focus:border-secondary focus:outline-none font-body-md text-on-surface"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    Company / Organization *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 absolute left-3 top-3 text-outline" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Apex Holdings LLC"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-DEFAULT bg-surface-container-low border border-outline-variant/40 focus:border-secondary focus:outline-none font-body-md text-on-surface"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    Primary Capability Interest
                  </label>
                  <select
                    value={formData.practiceArea}
                    onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-DEFAULT bg-surface-container-low border border-outline-variant/40 focus:border-secondary focus:outline-none font-body-md text-on-surface"
                  >
                    <option value="Full Integrated Advisory">Full Integrated Advisory</option>
                    <option value="01 / Remote Staffing Infrastructure">01 / Remote Staffing Infrastructure</option>
                    <option value="02 / Creative Services & Branding">02 / Creative Services & Branding</option>
                    <option value="03 / Digital Services & Acquisition">03 / Digital Services & Acquisition</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3 top-3 text-outline" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-DEFAULT bg-surface-container-low border border-outline-variant/40 focus:border-secondary focus:outline-none font-body-md text-on-surface"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    Preferred Time (CT)
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 absolute left-3 top-3 text-outline" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-DEFAULT bg-surface-container-low border border-outline-variant/40 focus:border-secondary focus:outline-none font-body-md text-on-surface"
                    >
                      <option value="09:00 AM">09:00 AM CT</option>
                      <option value="10:00 AM">10:00 AM CT</option>
                      <option value="01:30 PM">01:30 PM CT</option>
                      <option value="03:00 PM">03:00 PM CT</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Operational Context / Strategic Goals
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your firm's immediate operational or growth objectives..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 rounded-DEFAULT bg-surface-container-low border border-outline-variant/40 focus:border-secondary focus:outline-none font-body-md text-on-surface"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="font-label-md text-label-md uppercase tracking-wider px-5 py-2.5 text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider px-6 py-3 rounded-DEFAULT bg-secondary text-on-secondary shadow-md hover:bg-on-secondary-fixed-variant transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{sending ? "Sending…" : "Request Consultation"}</span>
                  {!sending && (
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  )}
                </button>
              </div>
              {sendError && (
                <p role="alert" className="mt-3 font-body-sm text-body-sm text-error text-right">
                  {sendError}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
