import React, { useState } from 'react';
import { Menu, X, Wrench, Search, Terminal } from 'lucide-react';

export function Navbar({ onOpenPilotModal, onOpenSolverModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Report a bug', href: '#sandbox' },
    { name: 'Explore', href: '#surfaces' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'For engineers', href: '#personas' },
    { name: 'For companies', href: '#personas' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-surface/90 backdrop-blur transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#" className="mr-3 inline-flex min-h-11 items-center gap-2 text-lg font-bold text-ink hover:opacity-90 transition">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-brand to-info text-white shadow-sm">
            <Wrench size={17} />
          </span>
          <span>Fixit</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main" className="hidden lg:flex flex-1 items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full px-3 text-[15px] font-medium text-ink-muted hover:bg-surface-muted hover:text-ink transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Search Box Pill */}
        <div className="hidden xl:flex items-center relative w-56 ml-auto">
          <Search size={15} className="absolute left-3.5 text-ink-muted pointer-events-none" />
          <input
            type="text"
            placeholder="Search"
            onClick={() => {
              const el = document.getElementById('sandbox');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            readOnly
            className="w-full rounded-full border border-border bg-surface-muted py-1.5 pl-9 pr-4 text-xs text-ink placeholder:text-ink-muted focus:outline-none cursor-pointer hover:border-brand/40"
          />
        </div>

        {/* Right Auth / Pilot Buttons */}
        <div className="hidden sm:flex items-center gap-2 ml-auto xl:ml-3">
          <button
            onClick={onOpenSolverModal}
            className="inline-flex min-h-11 items-center rounded-full px-3.5 text-[15px] font-medium text-ink-muted hover:text-ink transition"
          >
            Log in
          </button>
          <button
            onClick={onOpenPilotModal}
            className="inline-flex min-h-11 items-center rounded-full bg-brand-strong px-5 text-[15px] font-semibold text-white hover:opacity-90 shadow-sm transition"
          >
            Sign up
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2 ml-auto">
          <button
            onClick={onOpenPilotModal}
            className="rounded-full bg-brand-strong px-4 py-1.5 text-xs font-semibold text-white hover:opacity-90 sm:hidden"
          >
            Sign up
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full p-2 text-ink-muted hover:bg-surface-muted focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-surface px-4 pb-6 pt-3 shadow-2xl animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl px-3 py-2 text-base font-medium text-ink hover:bg-surface-muted"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPilotModal();
              }}
              className="w-full rounded-full bg-brand-strong py-2.5 text-sm font-semibold text-white shadow-sm text-center"
            >
              Sign up
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSolverModal();
              }}
              className="w-full rounded-full border border-border bg-surface py-2.5 text-sm font-medium text-ink text-center hover:bg-surface-muted"
            >
              Log in
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
