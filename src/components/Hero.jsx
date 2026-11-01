import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal, DollarSign, Sparkles, Code2, Users } from 'lucide-react';
import { HeroIllustration } from './Illustrations';
import { ENGINEERING_METRICS } from '../data/showcaseData';

export function Hero({ onOpenPilotModal, onOpenSolverModal }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-brand-soft/60 via-canvas to-canvas">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
          {/* Left Column: Copy & CTAs */}
          <div className="fx-rise max-w-2xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/90 px-3.5 py-1 text-xs font-semibold text-brand shadow-sm mb-6 backdrop-blur-sm">
              <Sparkles size={14} className="text-amber-500" />
              <span>Three-Sided Bug-to-Fix Marketplace</span>
              <span className="h-3.5 w-px bg-slate-200" />
              <span className="text-ink-muted">v0.2 Spec</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl leading-[1.12]">
              Report the bug once.{' '}
              <span className="block text-slate-800">Watch it get fixed.</span>{' '}
              <span className="bg-gradient-to-r from-brand via-indigo-600 to-info bg-clip-text text-transparent">
                Get paid for the fix.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-ink-muted leading-relaxed">
              The three-sided engineering marketplace turning bug reports into verified fixes via prepaid escrow bounties, automated deduplication, and 1-click Linear/GitHub export.
            </p>

            {/* Interactive Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#sandbox"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-brand-strong transition hover:-translate-y-0.5"
              >
                <Terminal size={17} />
                <span>Simulate Bug Triage</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#calculator"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm hover:bg-surface-muted hover:border-ink/20 transition hover:-translate-y-0.5"
              >
                <DollarSign size={17} className="text-ok" />
                <span>ROI Calculator</span>
              </a>

              <button
                onClick={onOpenPilotModal}
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-50 border border-brand/20 px-4 py-3 text-sm font-semibold text-brand hover:bg-indigo-100 transition"
              >
                <span>Request B2B Pilot</span>
              </button>
            </div>

            {/* Feature Highlights Pills */}
            <div className="mt-8 pt-6 border-t border-border/70 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-ink-muted font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-ok shrink-0" />
                <span>75% Solver Escrow Payout</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-ok shrink-0" />
                <span>10% Reporter Finder's Fee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-ok shrink-0" />
                <span>Zero Upwork / Bidding Chaos</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-3xl bg-white/70 p-4 sm:p-6 shadow-elevated border border-border/80 backdrop-blur-sm">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-border/60 text-xs font-semibold text-ink-muted">
                <span className="flex items-center gap-1.5 text-brand">
                  <span className="h-2 w-2 rounded-full bg-brand animate-ping" />
                  Live Marketplace Flow Simulation
                </span>
                <span className="rounded-md bg-surface-muted px-2 py-0.5 border border-border">
                  Safe ACID Escrow
                </span>
              </div>
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProofStrip() {
  return (
    <div className="w-full border-y border-border bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-ink-muted mb-4">
          Architectural Proof Points & Verifiable Engineering Metrics
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {ENGINEERING_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface-muted/60 p-4 text-center transition hover:border-brand/40 hover:bg-brand-soft/30"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-2xl font-black tracking-tight text-ink">
                  {metric.value}
                </span>
                <span className="rounded bg-ok-soft px-1.5 py-0.5 text-[10px] font-bold text-ok">
                  {metric.badge}
                </span>
              </div>
              <p className="text-xs font-bold text-ink">{metric.label}</p>
              <p className="mt-0.5 text-[11px] text-ink-muted line-clamp-1">{metric.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
