import React from 'react';
import { ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { HeroIllustration, BarsArt } from './Illustrations';
import { ENGINEERING_METRICS } from '../data/showcaseData';

export function Hero({ onOpenPilotModal, onOpenSolverModal }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft via-canvas to-canvas pb-14 pt-12 sm:pt-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[1.1fr_1fr]">
        {/* Left Column */}
        <div className="fx-rise">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
            BUGS IN, FIXES OUT
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-ink">
            Report the bug once. Watch it get fixed.{' '}
            <span className="bg-gradient-to-r from-brand to-info bg-clip-text text-transparent">
              Get paid for the fix.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-ink-muted sm:text-xl leading-relaxed">
            Fixit gathers what people report about the apps they use, shows companies what matters most, and rewards the people who help fix it.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#sandbox"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-strong px-6 text-base font-semibold text-white shadow-sm hover:opacity-90 transition"
            >
              <span>Report a bug</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#personas"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 text-base font-semibold text-ink hover:bg-surface-muted transition"
            >
              <span>I want to fix bugs</span>
            </a>

            <a
              href="#sandbox"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 text-sm font-semibold text-ink hover:bg-surface-muted transition"
            >
              <Terminal size={15} className="text-brand" />
              <span>Simulate Triage</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-border grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-ink-muted font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-ok shrink-0" />
              <span>75% Solver Escrow</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-ok shrink-0" />
              <span>10% Finder's Fee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-ok shrink-0" />
              <span>Zero Bidding Chaos</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hand-crafted SVG Illustration */}
        <div className="mx-auto w-full max-w-md">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

export function ProofStrip() {
  const directoryTiles = [
    { label: 'Products listed', value: '8' },
    { label: 'Bugs reported', value: '40' },
    { label: 'Open grouped issues', value: '4' },
    { label: 'Companies on board', value: '3' },
  ];

  return (
    <div className="w-full border-y border-border bg-canvas py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Live figures */}
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <ul className="grid grid-cols-2 gap-4">
            {directoryTiles.map((t) => (
              <li key={t.label} className="rounded-3xl border border-border bg-surface p-5">
                <p className="text-3xl font-extrabold tracking-tight sm:text-4xl text-ink">{t.value}</p>
                <p className="mt-1 text-ink-muted">{t.label}</p>
              </li>
            ))}
          </ul>

          <div className="rounded-3xl border border-border bg-surface p-5">
            <p className="font-semibold text-ink">Most reported right now</p>
            <div className="mt-2">
              <BarsArt values={[40, 24, 18, 12, 6]} />
              <ol className="mt-2 space-y-1 text-sm text-ink-muted">
                <li>Acme Web: 40 reports</li>
                <li>FinFlow Pay: 24 reports</li>
                <li>DevPulse API: 18 reports</li>
              </ol>
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-ink-muted">Live figures from the public company directory.</p>

        {/* Verifiable Engineering Metrics */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-4 text-center">
            Architectural Invariants & Verifiable Code Metrics
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {ENGINEERING_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-border bg-surface p-4 text-center"
              >
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span className="text-2xl font-black text-ink">{metric.value}</span>
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
    </div>
  );
}
