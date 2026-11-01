import React from 'react';
import { Github, Globe, Linkedin, Wrench, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-surface text-ink-muted py-14 border-t border-border text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-border">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-ink font-extrabold text-lg">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-brand to-info text-white shadow-sm">
                <Wrench size={17} />
              </span>
              <span>Fixit</span>
              <span className="rounded-md bg-brand-soft border border-brand/30 px-2 py-0.5 text-[10px] text-brand font-semibold">
                Official Showcase
              </span>
            </div>
            <p className="max-w-md text-ink-muted leading-relaxed">
              Fixit is the three-sided engineering marketplace turning bug reports into verified fixes via prepaid escrow bounties, automated deduplication, and 1-click Linear/GitHub export.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] text-ok font-semibold">
              <span className="h-2 w-2 rounded-full bg-ok animate-pulse" />
              <span>All Systems Operational · GitHub Pages Deployment Ready</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-bold text-ink uppercase tracking-wider text-[11px] mb-3">
              Showcase Modules
            </h4>
            <ul className="space-y-2 text-ink-muted">
              <li>
                <a href="#personas" className="hover:text-ink transition">Three-Sided Personas</a>
              </li>
              <li>
                <a href="#surfaces" className="hover:text-ink transition">Product Surfaces</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-ink transition">Escrow ROI Calculator</a>
              </li>
              <li>
                <a href="#sandbox" className="hover:text-ink transition">Acme Cloud Sandbox</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-ink transition">Pricing & Plans</a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-ink transition">ACID Architecture</a>
              </li>
            </ul>
          </div>

          {/* Engineering & Author Links */}
          <div>
            <h4 className="font-bold text-ink uppercase tracking-wider text-[11px] mb-3">
              Code & Connect
            </h4>
            <ul className="space-y-2 text-ink-muted">
              <li>
                <a
                  href="https://1997agarwal.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-ink transition"
                >
                  <Globe size={14} className="text-brand" />
                  <span>Harshit's Portfolio</span>
                  <ExternalLink size={11} className="text-ink-muted" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Technocrat-Tribe/FixIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-ink transition"
                >
                  <Github size={14} className="text-brand" />
                  <span>Monorepo on GitHub</span>
                  <ExternalLink size={11} className="text-ink-muted" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Technocrat-Tribe/FixIT-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-ink transition"
                >
                  <Github size={14} className="text-brand" />
                  <span>FixIT-Website Satellite Repo</span>
                  <ExternalLink size={11} className="text-ink-muted" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/1997agarwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-ink transition"
                >
                  <Linkedin size={14} className="text-brand" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink size={11} className="text-ink-muted" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <p className="text-ink-muted">
            Architected & Built by{' '}
            <a
              href="https://1997agarwal.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink font-bold hover:text-brand transition underline underline-offset-2"
            >
              Harshit Agarwal
            </a>{' '}
            — Senior Product Manager & AI Solutions Architect.
          </p>
          <p className="text-ink-muted">
            © {new Date().getFullYear()} Fixit. Early product: payments and identity checks are simulated.
          </p>
        </div>
      </div>
    </footer>
  );
}
