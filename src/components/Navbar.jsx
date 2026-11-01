import React, { useState } from 'react';
import { Menu, X, ArrowRight, Sparkles, Shield, Terminal } from 'lucide-react';

export function Navbar({ onOpenPilotModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Personas', href: '#personas' },
    { name: 'Surfaces', href: '#surfaces' },
    { name: 'ROI Calculator', href: '#calculator' },
    { name: 'Triage Sandbox', href: '#sandbox' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Architecture', href: '#architecture' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-surface/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-ink hover:opacity-90 transition">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white shadow-sm ring-2 ring-brand/20">
              🛠️
            </span>
            <span>FixIT</span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-ink-muted hover:text-brand transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#sandbox"
            className="inline-flex items-center gap-1.5 rounded-xl bg-surface-muted border border-border px-3.5 py-2 text-xs font-semibold text-ink hover:bg-slate-200 transition shadow-sm"
          >
            <Terminal size={14} className="text-brand" />
            <span>Simulate Triage</span>
          </a>

          <button
            onClick={onOpenPilotModal}
            className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-white hover:bg-brand-strong transition shadow-sm ring-2 ring-brand/20"
          >
            <span>Request Pilot</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenPilotModal}
            className="rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-strong sm:hidden"
          >
            Pilot
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-ink-muted hover:bg-surface-muted focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-surface px-4 pb-6 pt-2 shadow-lg animate-fadeIn">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-base font-semibold text-ink hover:bg-brand-soft hover:text-brand"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-border flex flex-col gap-2.5">
            <a
              href="#sandbox"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-surface-muted border border-border py-2.5 text-sm font-semibold text-ink"
            >
              <Terminal size={16} className="text-brand" />
              Simulate Bug Triage
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPilotModal();
              }}
              className="flex items-center justify-center gap-2 rounded-xl bg-brand py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              Request Company Pilot
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
