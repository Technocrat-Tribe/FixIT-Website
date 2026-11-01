import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { DollarSign, Lock, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { MoneyDonut } from './Illustrations';

export function EscrowCalculator() {
  const [bounty, setBounty] = useState(500);
  const [lockedSuccess, setLockedSuccess] = useState(false);

  // Compute splits
  const solverPayout = Number((bounty * 0.75).toFixed(2));
  const reporterFee = Number((bounty * 0.10).toFixed(2));
  const platformFee = Number((bounty * 0.15).toFixed(2));

  // ROI Benchmarks
  const internalCost = 2400;
  const agencyRetainer = 7500;
  const netSavings = internalCost - bounty;
  const savingsPct = Math.round((netSavings / internalCost) * 100);

  const handleSimulateLock = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#a5b4fc', '#34d399', '#fbbf24', '#38bdf8'],
    });

    setLockedSuccess(true);
    setTimeout(() => {
      setLockedSuccess(false);
    }, 4500);
  };

  const quickPresets = [250, 500, 1000, 2500, 5000];

  return (
    <section id="calculator" className="py-20 bg-canvas border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-ok-soft px-3.5 py-1 text-xs font-bold text-ok mb-3">
            <DollarSign size={14} />
            <span>Verifiable Escrow Economics</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Interactive Escrow Split & ROI Calculator
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            See exactly where every dollar goes in real-time. Transparent, automated 75/10/15 revenue split held safely in an ACID-compliant prepaid ledger.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          {/* Left Card: Dynamic Slider & Breakdown */}
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">Set Escrow Bounty</span>
                <div className="text-4xl font-black text-ink mt-1">
                  ${bounty.toLocaleString()}
                  <span className="text-sm font-semibold text-ink-muted ml-2">USD</span>
                </div>
              </div>

              {/* Preset buttons */}
              <div className="flex flex-wrap gap-1.5">
                {quickPresets.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setBounty(preset)}
                    className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                      bounty === preset
                        ? 'bg-brand text-slate-950 font-black shadow-sm ring-2 ring-brand/30'
                        : 'bg-surface-muted border border-border text-ink hover:bg-surface'
                    }`}
                  >
                    ${preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider */}
            <div className="space-y-2 mb-8">
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={bounty}
                onChange={(e) => setBounty(Number(e.target.value))}
                className="w-full h-3 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-brand transition-all border border-border"
                aria-label="Bounty amount slider"
              />
              <div className="flex justify-between text-xs font-bold text-ink-muted">
                <span>$100 (Quick patch)</span>
                <span>$2,500 (Complex bug)</span>
                <span>$5,000 (Core architecture)</span>
              </div>
            </div>

            {/* Three-Way Payout Split Breakdown */}
            <div className="space-y-3.5 mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-ink-muted">Real-Time Revenue Split</h3>

              {/* 1. Solver Payout (75%) */}
              <div className="flex items-center justify-between rounded-2xl border border-brand/20 bg-brand-soft p-4 transition">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-brand shrink-0" />
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-ink text-sm sm:text-base">
                      <span>👨‍💻 Solver Payout (75%)</span>
                      <span className="rounded bg-brand px-1.5 py-0.2 text-[10px] font-bold text-slate-950">Guaranteed</span>
                    </div>
                    <p className="text-xs text-ink-muted">Released directly upon maintainer PR approval</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-black text-brand">${solverPayout.toLocaleString()}</div>
                  <span className="text-[11px] font-medium text-ink-muted">75.0% of total</span>
                </div>
              </div>

              {/* 2. Reporter Finder's Fee (10%) */}
              <div className="flex items-center justify-between rounded-2xl border border-warn/20 bg-warn-soft p-4 transition">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-warn shrink-0" />
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-ink text-sm sm:text-base">
                      <span>🕵️ Reporter Finder's Fee (10%)</span>
                      <span className="rounded bg-warn px-1.5 py-0.2 text-[10px] font-bold text-slate-950">Passive Payout</span>
                    </div>
                    <p className="text-xs text-ink-muted">Rewarded to the original user who filed reproduction steps</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-black text-warn">${reporterFee.toLocaleString()}</div>
                  <span className="text-[11px] font-medium text-ink-muted">10.0% of total</span>
                </div>
              </div>

              {/* 3. Platform Fee (15%) */}
              <div className="flex items-center justify-between rounded-2xl border border-info/20 bg-info-soft p-4 transition">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-info shrink-0" />
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-ink text-sm sm:text-base">
                      <span>🛡️ Fixit Platform Fee (15%)</span>
                    </div>
                    <p className="text-xs text-ink-muted">Escrow infrastructure, ACID ledger safety, sandbox & mediation</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-black text-info">${platformFee.toLocaleString()}</div>
                  <span className="text-[11px] font-medium text-ink-muted">15.0% of total</span>
                </div>
              </div>
            </div>

            {/* Simulate Escrow Lock Button */}
            <div>
              <button
                onClick={handleSimulateLock}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-brand-strong py-3.5 px-6 text-sm sm:text-base font-bold text-white shadow-md hover:opacity-90 transition active:scale-[0.99]"
              >
                <Lock size={18} />
                <span>Simulate Escrow Lock (${bounty})</span>
                <Sparkles size={18} className="text-amber-300" />
              </button>

              {lockedSuccess && (
                <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-ok/30 bg-ok-soft p-3 text-xs text-ok animate-fadeIn">
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-ok" />
                  <div>
                    <span className="font-bold">Escrow Ledger Transaction Successful:</span> ${bounty} transferred from Acme Cloud prepaid balance into ACID escrow contract. ${solverPayout} reserved for solver, ${reporterFee} for reporter. Zero overdraft risk.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Visual Donut & Cost Comparison */}
          <div className="space-y-6">
            {/* Visual Money Donut */}
            <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-card flex flex-col items-center text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-4">Visual Split Distribution</span>
              <MoneyDonut size={230} bounty={bounty} />
              <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs font-semibold">
                <span className="inline-flex items-center gap-1.5 text-brand">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand" />
                  Solver (${solverPayout})
                </span>
                <span className="inline-flex items-center gap-1.5 text-warn">
                  <span className="h-2.5 w-2.5 rounded-full bg-warn" />
                  Reporter (${reporterFee})
                </span>
                <span className="inline-flex items-center gap-1.5 text-info">
                  <span className="h-2.5 w-2.5 rounded-full bg-info" />
                  Platform (${platformFee})
                </span>
              </div>
            </div>

            {/* Cost Comparison Widget */}
            <div className="rounded-3xl border border-border bg-surface-muted text-ink p-6 sm:p-8 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  Engineering Cost Comparison
                </span>
                <span className="rounded-full bg-ok-soft border border-ok/30 px-2.5 py-0.5 text-[11px] font-bold text-ok">
                  Saves {savingsPct}%
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-ink">Fixit Payout (Success Only):</span>
                  <span className="text-ok font-extrabold text-lg">${bounty}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-border">
                  <div>
                    <span className="text-ink">Internal Eng Context Switching:</span>
                    <p className="text-[11px] text-ink-muted">16 hours @ $150/hr loaded dev rate</p>
                  </div>
                  <span className="text-ink-muted line-through font-semibold">~${internalCost.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div>
                    <span className="text-ink">Dev / QA Agency Retainer:</span>
                    <p className="text-[11px] text-ink-muted">Monthly minimum retainer</p>
                  </div>
                  <span className="text-ink-muted line-through font-semibold">${agencyRetainer.toLocaleString()}+/mo</span>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-brand-soft border border-brand/20 p-3.5 text-xs text-brand">
                <div className="font-bold flex items-center gap-1.5 text-ink mb-1">
                  <TrendingUp size={15} className="text-ok" />
                  Estimated Net Savings: ${netSavings.toLocaleString()}
                </div>
                You save ${netSavings.toLocaleString()} while keeping your core internal engineers focused 100% on high-leverage product roadmap milestones.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
