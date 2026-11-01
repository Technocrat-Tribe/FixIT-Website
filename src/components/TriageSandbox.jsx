import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Terminal,
  Shield,
  Layers,
  GitPullRequest,
  Lock,
  RotateCcw,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Flame,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Wallet,
} from 'lucide-react';
import { TRIAGE_BUGS } from '../data/showcaseData';
import { DeduplicationModal, ExportModal } from './Modals';

export function TriageSandbox() {
  const [bugs, setBugs] = useState(TRIAGE_BUGS);
  const [balance, setBalance] = useState(4250);
  const [selectedDeduplicationBug, setSelectedDeduplicationBug] = useState(null);
  const [selectedExportBug, setSelectedExportBug] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [bannerMessage, setBannerMessage] = useState(null);

  const handleFundBounty = (bugId) => {
    setBugs((prev) =>
      prev.map((b) => {
        if (b.id === bugId) {
          const increaseAmount = 100;
          if (balance < increaseAmount) {
            alert('Prepaid company balance depleted! Top up balance to continue.');
            return b;
          }

          setBalance((bal) => bal - increaseAmount);
          const newBounty = b.bounty + increaseAmount;
          const newSolverFee = Number((newBounty * 0.75).toFixed(2));
          const newReporterFee = Number((newBounty * 0.10).toFixed(2));

          confetti({
            particleCount: 60,
            spread: 55,
            origin: { y: 0.7 },
            colors: ['#4f46e5', '#10b981', '#f59e0b'],
          });

          setBannerMessage(`Escrow Lock Updated: +$${increaseAmount} added to "${b.title}". New total: $${newBounty}. Balance remaining: $${balance - increaseAmount}.`);
          setTimeout(() => setBannerMessage(null), 4500);

          return {
            ...b,
            bounty: newBounty,
            solverFee: newSolverFee,
            reporterFee: newReporterFee,
            claimedBounty: true,
            status: 'Bounty Funded (ACID Locked)',
          };
        }
        return b;
      })
    );
  };

  const handleReset = () => {
    setBugs(TRIAGE_BUGS);
    setBalance(4250);
    setSearchQuery('');
    setSeverityFilter('all');
    setBannerMessage('Sandbox queue and Acme Cloud balance reset to initial seed state.');
    setTimeout(() => setBannerMessage(null), 3000);
  };

  const filteredBugs = bugs.filter((bug) => {
    const matchesSearch =
      bug.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bug.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bug.product.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSeverity =
      severityFilter === 'all' || bug.severity === severityFilter;
    return matchesSearch && matchesSeverity;
  });

  return (
    <section id="sandbox" className="py-20 bg-canvas border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3.5 py-1 text-xs font-bold text-brand mb-3">
            <Terminal size={14} />
            <span>Interactive Company View Simulator</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Acme Cloud Bug Triage & Deduplication Queue
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Experience the actual company triage experience. Test semantic deduplication clustering, export pre-formatted issues to your tracker, and simulate locking escrow bounties.
          </p>
        </div>

        {/* Live Company Sandbox Status Bar */}
        <div className="mb-8 rounded-3xl border border-border bg-surface p-5 sm:p-6 shadow-card flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-brand-strong text-white flex items-center justify-center font-bold text-sm shadow-sm">
              AC
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-ink text-base">Acme Cloud (Verified)</span>
                <span className="rounded-full bg-ok-soft border border-ok/30 px-2 py-0.2 text-[10px] font-bold text-ok">
                  Active Workspace
                </span>
              </div>
              <p className="text-xs text-ink-muted">Role: <b>Owner (Nadia)</b> · 3 Products Listed · 76 Reports Triaged</p>
            </div>
          </div>

          {/* Prepaid Balance & Reset Button */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="rounded-2xl border border-border bg-surface-muted px-4 py-2 text-right">
              <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted block">
                Prepaid Escrow Balance
              </span>
              <div className="text-xl font-black text-brand flex items-center gap-1 justify-end">
                <Wallet size={16} />
                <span>${balance.toLocaleString()}</span>
                <span className="text-xs font-semibold text-ink-muted">USD</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface-muted px-3.5 py-2.5 text-xs font-bold text-ink hover:bg-surface transition shadow-sm"
              title="Reset sandbox state"
            >
              <RotateCcw size={14} className="text-ink-muted" />
              <span>Reset Sandbox</span>
            </button>
          </div>
        </div>

        {/* Feedback Banner */}
        {bannerMessage && (
          <div className="mb-6 rounded-2xl border border-brand/30 bg-brand-soft p-4 text-xs font-semibold text-brand flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-amber-500 shrink-0" />
              <span>{bannerMessage}</span>
            </div>
            <button
              onClick={() => setBannerMessage(null)}
              className="text-brand hover:opacity-75 font-bold"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Filters & Search */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="relative flex-1 min-w-[240px] max-w-md">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" />
            <input
              type="text"
              placeholder="Search reports by keyword, symptom or surface..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-border bg-surface-muted focus:outline-none focus:ring-2 focus:ring-brand/30 text-ink placeholder:text-ink-muted"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-ink-muted flex items-center gap-1">
              <Filter size={14} /> Severity:
            </span>
            {['all', 'critical', 'high', 'medium'].map((sev) => (
              <button
                key={sev}
                onClick={() => setSeverityFilter(sev)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold capitalize transition ${
                  severityFilter === sev
                    ? 'bg-brand text-slate-950 font-black shadow-sm'
                    : 'bg-surface-muted border border-border text-ink hover:bg-surface'
                }`}
              >
                {sev}
              </button>
            ))}
          </div>
        </div>

        {/* Bug Cards List */}
        <div className="space-y-5">
          {filteredBugs.map((bug) => {
            return (
              <div
                key={bug.id}
                className="rounded-3xl border border-border bg-surface p-6 sm:p-7 shadow-card transition hover:border-brand/40 hover:shadow-elevated"
              >
                {/* Card Top Row: Priority Badge, Product, Bounty */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Priority Score pill */}
                    <div
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-black ${
                        bug.priorityScore >= 90
                          ? 'bg-danger-soft text-danger border border-danger/30'
                          : bug.priorityScore >= 75
                          ? 'bg-warn-soft text-warn border border-warn/30'
                          : 'bg-info-soft text-info border border-info/30'
                      }`}
                    >
                      <Flame size={14} />
                      <span>Score: {bug.priorityScore}/100</span>
                    </div>

                    <span className="rounded-lg bg-surface-muted px-2.5 py-1 text-xs font-semibold text-ink-muted border border-border/50">
                      {bug.product}
                    </span>

                    <span className="rounded-lg bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand">
                      {bug.status}
                    </span>
                  </div>

                  {/* Bounty Amount Tag */}
                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted block">
                      Escrow Bounty
                    </span>
                    <span className="text-2xl font-black text-ink">
                      ${bug.bounty}
                      <span className="text-xs font-semibold text-ok ml-1">(75% to Solver: ${bug.solverFee})</span>
                    </span>
                  </div>
                </div>

                {/* Bug Title */}
                <h3 className="text-lg sm:text-xl font-bold text-ink">
                  {bug.title}
                </h3>

                {/* Summary */}
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {bug.summary}
                </p>

                {/* Reproduction preview box */}
                <div className="mt-4 rounded-2xl bg-surface-muted border border-border/80 p-3.5 text-xs">
                  <div className="font-bold text-ink mb-1 flex items-center justify-between">
                    <span>Verified Steps to Reproduce</span>
                    <span className="text-ink-muted font-mono text-[11px]">{bug.environment}</span>
                  </div>
                  <ol className="list-decimal pl-4 space-y-0.5 text-ink-muted font-mono text-[11px]">
                    {bug.reproSteps.slice(0, 2).map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                    {bug.reproSteps.length > 2 && (
                      <li className="text-brand font-sans font-medium">
                        + {bug.reproSteps.length - 2} more reproduction steps in brief...
                      </li>
                    )}
                  </ol>
                </div>

                {/* Metadata & Interactive Button Bar */}
                <div className="mt-5 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-ink-muted">
                    <span className="inline-flex items-center gap-1 font-semibold text-brand">
                      <Layers size={14} />
                      {bug.duplicateCount} Duplicates Clustered
                    </span>
                    <span>·</span>
                    <span>Original Reporter: <b>{bug.originalReporter}</b> (${bug.reporterFee} fee)</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setSelectedDeduplicationBug(bug)}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface-muted px-3.5 py-2 text-xs font-bold text-ink hover:bg-brand-soft hover:text-brand hover:border-brand/30 transition shadow-sm"
                    >
                      <Layers size={14} className="text-brand" />
                      <span>View Auto-Deduplication</span>
                    </button>

                    <button
                      onClick={() => setSelectedExportBug(bug)}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface-muted px-3.5 py-2 text-xs font-bold text-ink hover:bg-ok-soft hover:text-ok hover:border-ok/30 transition shadow-sm"
                    >
                      <GitPullRequest size={14} className="text-ok" />
                      <span>Export to Linear / GitHub</span>
                    </button>

                    <button
                      onClick={() => handleFundBounty(bug.id)}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-brand-strong px-4 py-2 text-xs font-bold text-white hover:opacity-90 transition shadow-sm active:scale-95"
                    >
                      <Lock size={13} />
                      <span>+ $100 Escrow</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredBugs.length === 0 && (
            <div className="rounded-3xl border border-dashed border-border bg-surface p-12 text-center text-ink-muted">
              <p className="font-bold text-base text-ink">No matching bug reports found</p>
              <p className="text-xs mt-1">Try resetting the filter or search query.</p>
              <button
                onClick={handleReset}
                className="mt-4 rounded-xl bg-brand-strong px-4 py-2 text-xs font-bold text-white hover:opacity-90"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      <DeduplicationModal
        bug={selectedDeduplicationBug}
        isOpen={!!selectedDeduplicationBug}
        onClose={() => setSelectedDeduplicationBug(null)}
      />

      <ExportModal
        bug={selectedExportBug}
        isOpen={!!selectedExportBug}
        onClose={() => setSelectedExportBug(null)}
      />
    </section>
  );
}
