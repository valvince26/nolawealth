"use client";

import { useState } from "react";
import { X, Lock, ShieldCheck, KeyRound, UserCheck, AlertCircle } from "lucide-react";

interface ClientLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientLoginModal({ isOpen, onClose }: ClientLoginModalProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in both Account ID and Security Key.");
      return;
    }
    setError("");
    setAuthenticated(true);
  };

  const fillDemo = () => {
    setUsername("client.advisory@nolawealth.com");
    setPassword("••••••••••••");
    setError("");
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setUsername("");
    setPassword("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary-container/80 backdrop-blur-md transition-opacity duration-300">
      <div className="relative w-full max-w-md bg-surface-container-lowest border border-secondary/30 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header Ribbon */}
        <div className="bg-primary-container text-on-primary px-6 py-5 flex items-center justify-between border-b border-secondary/20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary">
                Client Portal Access
              </h3>
              <p className="font-label-sm text-label-sm text-on-primary-container">
                Secure Fiduciary Gateway
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

        <div className="p-6 sm:p-8">
          {authenticated ? (
            <div className="text-center space-y-4 py-4">
              <div className="w-14 h-14 rounded-full bg-secondary/15 text-secondary mx-auto flex items-center justify-center border border-secondary/30">
                <UserCheck className="w-8 h-8" />
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface">
                Session Active
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Welcome back, <span className="font-semibold text-on-surface">{username}</span>. Your private fiduciary workspace and advisory reports are synchronized.
              </p>
              <div className="p-3 bg-surface-container-low rounded-lg border border-secondary/20 text-left font-label-sm text-label-sm space-y-1 text-on-surface">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Security Protocol:</span>
                  <span className="text-secondary font-medium">ADV-7 Encrypted</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Account Level:</span>
                  <span className="font-medium">Institutional Advisory</span>
                </div>
              </div>
              <div className="pt-3 flex gap-3">
                <button
                  onClick={handleLogout}
                  className="w-full font-label-md text-label-md uppercase tracking-wider py-2.5 rounded-DEFAULT bg-primary-container text-on-primary hover:bg-secondary transition-all"
                >
                  Exit Session
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="flex items-center gap-2 p-3 bg-surface-container-low rounded-lg border border-outline-variant/30 text-on-surface-variant text-label-sm font-label-sm">
                <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                <span>256-Bit SSL Encrypted Private Portal Access</span>
              </div>

              {error && (
                <div className="flex items-center gap-2 p-3 bg-error-container text-on-error-container rounded-lg font-label-sm text-label-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="space-y-1">
                <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Account Identifier / Email
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 absolute left-3 top-3 text-outline" />
                  <input
                    type="text"
                    placeholder="account@nolawealth.com"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-DEFAULT bg-surface-container-low border border-outline-variant/40 focus:border-secondary focus:outline-none font-body-md text-on-surface"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    Security Key / Password
                  </label>
                  <a href="#" className="font-label-sm text-label-sm text-secondary hover:underline">
                    Forgot Key?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-3 text-outline" />
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-DEFAULT bg-surface-container-low border border-outline-variant/40 focus:border-secondary focus:outline-none font-body-md text-on-surface"
                  />
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full font-label-md text-label-md uppercase tracking-wider py-3 rounded-DEFAULT bg-secondary text-on-secondary shadow-md hover:bg-on-secondary-fixed-variant transition-all"
                >
                  Authenticate Session
                </button>
                <button
                  type="button"
                  onClick={fillDemo}
                  className="w-full font-label-sm text-label-sm uppercase tracking-wider py-2 text-on-surface-variant hover:text-secondary transition-colors"
                >
                  Fill Demo Credentials
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
