import React from 'react';
import { Github, Globe, Linkedin, Heart, ShieldCheck, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 py-14 border-t border-slate-900 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-extrabold text-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand text-white text-sm">
                🛠️
              </span>
              <span>FixIT</span>
              <span className="rounded-md bg-indigo-950 border border-indigo-700/50 px-2 py-0.5 text-[10px] text-indigo-300 font-semibold">
                Official Showcase
              </span>
            </div>
            <p className="max-w-md text-slate-400 leading-relaxed">
              FixIT is the three-sided engineering marketplace turning bug reports into verified fixes via prepaid escrow bounties, automated deduplication, and 1-click Linear/GitHub export.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational · GitHub Pages Deployment Ready</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Showcase Modules
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#personas" className="hover:text-white transition">Three-Sided Personas</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition">Escrow ROI Calculator</a>
              </li>
              <li>
                <a href="#sandbox" className="hover:text-white transition">Acme Cloud Sandbox</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition">Pricing & Plans</a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition">ACID Architecture</a>
              </li>
            </ul>
          </div>

          {/* Engineering & Author Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Code & Connect
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="https://1997agarwal.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition"
                >
                  <Globe size={14} className="text-indigo-400" />
                  <span>Harshit's Portfolio</span>
                  <ExternalLink size={11} className="text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Technocrat-Tribe/FixIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition"
                >
                  <Github size={14} className="text-indigo-400" />
                  <span>Monorepo on GitHub</span>
                  <ExternalLink size={11} className="text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Technocrat-Tribe/FixIT-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition"
                >
                  <Github size={14} className="text-indigo-400" />
                  <span>FixIT-Website Satellite Repo</span>
                  <ExternalLink size={11} className="text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/1997agarwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition"
                >
                  <Linkedin size={14} className="text-indigo-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink size={11} className="text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <p className="text-slate-400">
            Architected & Built by{' '}
            <a
              href="https://1997agarwal.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:text-indigo-400 transition underline underline-offset-2"
            >
              Harshit Agarwal
            </a>{' '}
            — Senior Product Manager & AI Solutions Architect.
          </p>
          <p className="text-slate-500">
            © {new Date().getFullYear()} FixIT. Open-source prototype repository.
          </p>
        </div>
      </div>
    </footer>
  );
}
