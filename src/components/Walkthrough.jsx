import React from 'react';
import { Check, X as XIcon, ArrowRight } from 'lucide-react';
import { STEPS } from '../data/showcaseData';
import { StepArt, ReviewVsReport } from './Illustrations';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-canvas border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
            How it works
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-ink">
            From “this is broken” to fixed, in four steps
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            A clear, predictable loop connecting user frustration to verified code in production.
          </p>
        </div>

        <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="fx-rise" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="h-full rounded-3xl border border-border bg-surface p-6 shadow-card hover:border-brand/40 transition">
                <StepArt step={i + 1} />
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-brand">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{s.short}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <a
            href="#sandbox"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline underline-offset-4"
          >
            <span>Experience the live interactive triage simulation</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function BeforeAfter() {
  const before = [
    'Lost among hundreds of other reviews',
    'No steps, so the team cannot reproduce it',
    'You never hear back or see it resolved',
  ];
  const after = [
    'Goes straight to the product team queue',
    'Clear steps, device specs, and expected behaviour',
    'You track it until it ships and earn a 10% finder’s fee',
  ];

  return (
    <section className="py-20 bg-canvas border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
            Why not just leave a review?
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-ink">
            Venting feels good. Getting it fixed feels better.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            App store reviews are a dead end. Fixit turns friction into engineering action with guaranteed compensation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {/* A one-star review or forum post */}
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-card">
            <ReviewVsReport kind="review" />
            <h3 className="mt-5 text-xl font-bold text-ink">A one-star review or a post</h3>
            <ul className="mt-4 space-y-2.5 text-ink-muted">
              {before.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm">
                  <XIcon size={18} className="mt-0.5 shrink-0 text-danger" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* A Fixit report */}
          <div className="rounded-3xl border border-ok/40 bg-surface p-6 sm:p-8 shadow-card ring-1 ring-ok/20">
            <ReviewVsReport kind="report" />
            <h3 className="mt-5 text-xl font-bold text-ink">A Fixit structured report</h3>
            <ul className="mt-4 space-y-2.5 text-ink">
              {after.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm">
                  <Check size={18} className="mt-0.5 shrink-0 text-ok" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ onOpenPilotModal, onOpenSolverModal }) {
  return (
    <section id="final-cta" className="relative overflow-hidden bg-gradient-to-b from-surface to-canvas py-20 border-b border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
          Something broken? Say it once, clearly.
        </h2>
        <p className="mt-4 text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
          It takes about a minute. You can follow along as it gets triaged, funded, and verified.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#sandbox"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-strong px-7 text-base font-semibold text-white shadow-sm hover:opacity-90 transition"
          >
            <span>Report a bug</span>
            <ArrowRight size={18} />
          </a>

          <button
            onClick={onOpenSolverModal}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 text-base font-semibold text-ink hover:bg-surface-muted transition"
          >
            <span>I want to fix bugs</span>
          </button>

          <button
            onClick={onOpenPilotModal}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 text-base font-semibold text-ink hover:bg-surface-muted transition"
          >
            <span>Test Acme Cloud preview</span>
          </button>
        </div>
      </div>
    </section>
  );
}
