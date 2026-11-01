import React, { useState } from 'react';
import {
  Building2,
  Code,
  UserCheck,
  Check,
  X,
  ArrowRight,
  ShieldAlert,
  GitPullRequest,
  Sparkles,
  Zap,
  Target,
  BarChart3,
  Layers,
  Coins,
  BadgeCheck,
} from 'lucide-react';
import { AudienceArt, ReviewVsReport } from './Illustrations';

export function PersonaTabs({ onOpenPilotModal, onOpenSolverModal }) {
  const [activeTab, setActiveTab] = useState('companies');

  const tabs = [
    {
      id: 'companies',
      label: 'For Companies',
      icon: Building2,
      tag: 'B2B Engineering Teams',
      summary: 'Turn unorganized customer complaints into prioritized, bounty-backed fixes.',
    },
    {
      id: 'engineers',
      label: 'For Engineers & Solvers',
      icon: Code,
      tag: 'Solvers & Freelancers',
      summary: 'Solve high-impact bugs for top software companies and get paid 75% escrow bounties.',
    },
    {
      id: 'reporters',
      label: 'For Everyday Reporters',
      icon: UserCheck,
      tag: 'Users, PMs & QA',
      summary: 'Report bugs once, track progress transparently, and earn a 10% finder’s fee.',
    },
  ];

  return (
    <section id="personas" className="py-20 bg-canvas border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand mb-3">
            <Layers size={14} />
            <span>Three-Sided Marketplace Value Loop</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            One platform. Designed for all three sides of engineering.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Fixit aligns incentives between companies who need verified code, engineers seeking merit-based rewards, and users who want software that just works.
          </p>
        </div>

        {/* Tab Switcher Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-2xl bg-surface p-1.5 shadow-sm border border-border">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-brand text-white shadow-sm ring-2 ring-brand/20'
                      : 'text-ink-muted hover:text-ink hover:bg-surface-muted'
                  }`}
                >
                  <Icon size={17} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content 1: FOR COMPANIES */}
        {activeTab === 'companies' && (
          <div className="grid items-center gap-10 rounded-3xl border border-border bg-surface p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] shadow-card">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-info-soft px-3 py-1 text-xs font-bold text-info mb-4">
                <BarChart3 size={14} />
                <span>Zero Context Switching for Core Team</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                Hear users clearly. Fix what matters first.
              </h3>
              <p className="mt-3 text-base sm:text-lg text-ink-muted">
                Your users are already encountering friction. Fixit groups identical issues, computes a mathematical priority score, and lets you fund fixes only when you’re ready.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-surface-muted p-4">
                  <div className="flex items-center gap-2 text-brand font-bold text-sm">
                    <Sparkles size={16} />
                    <span>Automated Deduplication</span>
                  </div>
                  <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                    AI embeddings cluster 50+ messy reports into 1 clean canonical ticket with cumulative user counts.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-surface-muted p-4">
                  <div className="flex items-center gap-2 text-ok font-bold text-sm">
                    <Target size={16} />
                    <span>Priority Score Formula</span>
                  </div>
                  <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                    Ranked objectively by <code className="bg-surface px-1 py-0.5 rounded border border-border font-mono text-[11px] text-ink">(Impact × Urgency) / Effort</code>.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-surface-muted p-4">
                  <div className="flex items-center gap-2 text-info font-bold text-sm">
                    <Coins size={16} />
                    <span>Pay Only For Verified Fixes</span>
                  </div>
                  <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                    Bounties stay safely locked in ACID escrow until your team reviews and approves the submitted PR.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-surface-muted p-4">
                  <div className="flex items-center gap-2 text-warn font-bold text-sm">
                    <GitPullRequest size={16} />
                    <span>1-Click Linear & GitHub Sync</span>
                  </div>
                  <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                    Bi-directional sync ensures tickets export effortlessly into your existing sprint backlog.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#sandbox"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-strong px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition shadow-sm"
                >
                  <span>Simulate Acme Cloud Triage</span>
                  <ArrowRight size={16} />
                </a>
                <button
                  onClick={onOpenPilotModal}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-ink hover:bg-surface-muted transition"
                >
                  <span>Claim Company Page</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-4">
              <div className="w-full max-w-sm rounded-2xl border border-border bg-surface-muted p-6">
                <AudienceArt who="companies" />
                <div className="mt-4 pt-4 border-t border-border text-xs text-ink-muted text-center">
                  <b>Verification:</b> Verify via company work email domain or a one-line DNS TXT record.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: FOR ENGINEERS & SOLVERS */}
        {activeTab === 'engineers' && (
          <div className="grid items-center gap-10 rounded-3xl border border-border bg-surface p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] shadow-card">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-ok-soft px-3 py-1 text-xs font-bold text-ok mb-4">
                <BadgeCheck size={14} />
                <span>Zero Upwork Bidding Chaos · Pure Meritocracy</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                How engineers earn with Fixit
              </h3>
              <p className="mt-3 text-base sm:text-lg text-ink-muted">
                No bidding wars, no unpaid discovery calls, and no agency overhead. Browse real problems, claim the bounty exclusively for 7 days, submit your fix, and get paid 75% of the escrow bounty.
              </p>

              <div className="mt-6 space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand font-bold text-xs">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink">Clear Reproduction Briefs</h4>
                    <p className="text-xs text-ink-muted">
                      Every bounty specifies what "done" looks like with device logs, error traces, and reproduction steps.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-ok-soft text-ok font-bold text-xs">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink">7-Day Exclusive Claim Hold</h4>
                    <p className="text-xs text-ink-muted">
                      Claim an issue to lock it exclusively while you investigate, ensuring no one duplicates your effort.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-warn-soft text-warn font-bold text-xs">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink">Test-Driven Validation & Fast Payout</h4>
                    <p className="text-xs text-ink-muted">
                      Submit a repro script or PR. Once verified by the maintainer, 75% transfers directly to your bank account or wallet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reputation levels badge strip */}
              <div className="mt-6 p-4 rounded-2xl bg-surface-muted border border-border">
                <p className="text-xs font-bold text-ink mb-2">Reputation Progression Ladders:</p>
                <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
                  <span className="rounded-lg bg-surface border border-border px-2.5 py-1 text-ink">
                    Reporter (0-69 pts)
                  </span>
                  <span className="rounded-lg bg-surface border border-border px-2.5 py-1 text-brand">
                    Verified Hunter (70-89 pts)
                  </span>
                  <span className="rounded-lg bg-brand-soft border border-brand/30 px-2.5 py-1 text-brand font-bold">
                    Expert Solver (90-119 pts)
                  </span>
                  <span className="rounded-lg bg-warn-soft border border-warn/30 px-2.5 py-1 text-warn font-bold">
                    Fixit Fellow (120+ pts)
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenSolverModal}
                  className="inline-flex items-center gap-2 rounded-xl bg-ok px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-sm"
                >
                  <span>Apply for Solver Early Access</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-ink hover:bg-surface-muted transition"
                >
                  <span>Calculate Solver Payout</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-4">
              <div className="w-full max-w-sm rounded-2xl border border-border bg-surface-muted p-6">
                <AudienceArt who="engineers" />
                <div className="mt-4 pt-4 border-t border-border text-xs text-ink-muted text-center">
                  <b>Solver Guarantee:</b> Bounties are funded in escrow <i>before</i> you write code.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 3: FOR EVERYDAY REPORTERS */}
        {activeTab === 'reporters' && (
          <div className="grid items-center gap-10 rounded-3xl border border-border bg-surface p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] shadow-card">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-warn-soft px-3 py-1 text-xs font-bold text-warn mb-4">
                <Coins size={14} />
                <span>10% Finder’s Fee Payout on Resolved Bounties</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                Venting feels good. Getting it fixed feels better.
              </h3>
              <p className="mt-3 text-base sm:text-lg text-ink-muted">
                Instead of shouting into an app store review black hole, report the issue once through Fixit. If a company funds a bounty and an engineer fixes it, you receive 10% of the entire bounty payout.
              </p>

              {/* Before vs After comparison cards */}
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-danger/30 bg-danger-soft/40 p-4">
                  <ReviewVsReport kind="review" />
                  <h4 className="mt-3 font-bold text-sm text-danger">One-Star App Store Review</h4>
                  <ul className="mt-2 space-y-1.5 text-xs text-ink-muted">
                    <li className="flex items-center gap-1.5">
                      <X size={14} className="text-danger shrink-0" />
                      <span>Lost among thousands of complaints</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <X size={14} className="text-danger shrink-0" />
                      <span>Zero logs or reproduction steps</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <X size={14} className="text-danger shrink-0" />
                      <span>You never hear back or get paid</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-ok/40 bg-ok-soft/30 p-4">
                  <ReviewVsReport kind="report" />
                  <h4 className="mt-3 font-bold text-sm text-ok">Structured Fixit Report</h4>
                  <ul className="mt-2 space-y-1.5 text-xs text-ink-muted">
                    <li className="flex items-center gap-1.5">
                      <Check size={14} className="text-ok shrink-0" />
                      <span>Direct line to product engineering</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check size={14} className="text-ok shrink-0" />
                      <span>Environment & device auto-captured</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check size={14} className="text-ok shrink-0" />
                      <span>10% finder’s fee sent to your wallet</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#sandbox"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-strong px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition shadow-sm"
                >
                  <span>Inspect Seeded User Reports</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-4">
              <div className="w-full max-w-sm rounded-2xl border border-border bg-surface-muted p-6">
                <AudienceArt who="users" />
                <div className="mt-4 pt-4 border-t border-border text-xs text-ink-muted text-center">
                  <b>Finder's Reward:</b> Even if 10 others report the same bug, the <i>first</i> reporter gets the 10% fee!
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
