import React, { useState } from 'react';
import { Check, Minus, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { TIERS, COMPARISON_ROWS } from '../data/showcaseData';

export function PricingSection({ onOpenPilotModal }) {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <section id="pricing" className="py-20 bg-canvas border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3.5 py-1 text-xs font-bold text-brand mb-3">
            <Sparkles size={14} className="text-amber-500" />
            <span>Transparent SaaS Plans</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Simple plans for every engineering team
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Start free. Upgrade as your product surfaces grow and your customer feedback scales.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-surface-muted p-1.5 border border-border">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`rounded-xl px-4 py-1.5 text-xs font-bold transition ${
                !annualBilling
                  ? 'bg-surface text-ink shadow-sm'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-1.5 text-xs font-bold transition ${
                annualBilling
                  ? 'bg-brand text-slate-950 font-black shadow-sm ring-2 ring-brand/20'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              <span>Annual Billing</span>
              <span className="rounded-full bg-emerald-400 text-slate-950 px-1.5 py-0.2 text-[10px] font-black">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch mb-16">
          {TIERS.map((tier) => {
            const price = annualBilling ? tier.annualPrice : tier.price;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition duration-200 ${
                  tier.featured
                    ? 'border-2 border-brand bg-brand-soft/40 shadow-elevated ring-4 ring-brand/10'
                    : 'border border-border bg-surface hover:bg-surface-muted hover:shadow-card'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-strong px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-sm">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-ink">{tier.name}</h3>
                    <span className="rounded-md bg-surface-muted border border-border px-2 py-0.5 text-[11px] font-semibold text-ink-muted">
                      {tier.products}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-ink-muted min-h-[32px]">{tier.tagline}</p>

                  <div className="mt-5 pb-5 border-b border-border">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-black tracking-tight text-ink">{price}</span>
                      {tier.per && (
                        <span className="ml-1 text-xs font-bold text-ink-muted">{tier.per}</span>
                      )}
                    </div>
                    <span className="text-[11px] font-medium text-ink-muted block mt-1">
                      {tier.reports}
                    </span>
                  </div>

                  {/* Features list */}
                  <ul className="mt-5 space-y-2.5 text-xs text-ink-muted">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check size={16} className="mt-0.5 shrink-0 text-ok" />
                        <span className="text-ink font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-border">
                  <button
                    onClick={onOpenPilotModal}
                    className={`w-full flex items-center justify-center gap-2 rounded-2xl py-3 text-xs font-bold transition shadow-sm ${
                      tier.featured
                        ? 'bg-brand-strong text-white hover:opacity-90'
                        : 'bg-surface-muted border border-border text-ink hover:bg-surface'
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Escrow Disclaimer Box */}
        <div className="rounded-2xl bg-brand-soft border border-brand/20 p-5 text-center max-w-3xl mx-auto mb-16 text-xs text-ink-muted">
          <p className="font-semibold text-ink">
            💡 <b>How Bounties Work:</b> Bounties are paid per fix and are funded separately from subscription tiers.
          </p>
          <p className="mt-1">
            Companies decide the reward for each fix. Funds are held in ACID escrow and only paid out when you accept the pull request (75% solver, 10% reporter, 15% FixIT).
          </p>
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold tracking-tight text-ink mb-6 text-center">
            Detailed Feature Comparison
          </h3>

          <div className="overflow-x-auto rounded-3xl border border-border bg-surface shadow-card">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-muted border-b border-border">
                <tr>
                  <th className="px-6 py-4 font-bold text-ink">Capability / Feature</th>
                  <th className="px-4 py-4 font-bold text-center text-ink">Free</th>
                  <th className="px-4 py-4 font-bold text-center text-brand bg-brand-soft/40">Team</th>
                  <th className="px-4 py-4 font-bold text-center text-ink">Growth</th>
                  <th className="px-4 py-4 font-bold text-center text-ink">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.label} className="hover:bg-surface-muted/60 transition-colors">
                    <td className="px-6 py-3.5 font-medium text-ink">{row.label}</td>
                    {row.values.map((val, idx) => (
                      <td
                        key={idx}
                        className={`px-4 py-3.5 text-center ${
                          idx === 1 ? 'bg-brand-soft/20 font-semibold' : ''
                        }`}
                      >
                        {typeof val === 'boolean' ? (
                          val ? (
                            <Check size={16} className="mx-auto text-ok" />
                          ) : (
                            <Minus size={16} className="mx-auto text-ink-muted/50" />
                          )
                        ) : (
                          <span className="font-semibold text-ink">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
