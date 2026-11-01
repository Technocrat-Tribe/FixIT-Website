import React, { useState } from 'react';
import {
  Code,
  Layout,
  Globe,
  Sliders,
  Shield,
  Layers,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Check,
  Terminal,
  Workflow,
  KeyRound,
  FileCode,
} from 'lucide-react';

export function ProductSurfaces() {
  const [activeSurface, setActiveSurface] = useState('widget');

  const surfaces = [
    {
      id: 'widget',
      title: 'In-App Embeddable Widget',
      route: '/widget',
      badge: 'Zero-Cookie SDK',
      tagline: '1 script tag lets your users report bugs without leaving your app',
      description: 'Drop our lightweight snippet onto your web app or dashboard. Users get a clean modal to capture reproduction steps, console errors, and device metadata, protected by an automatic browser proof-of-work (PoW) challenge that eliminates bots.',
      bullets: [
        'Single line <script> integration — works with React, Vue, Next.js, or vanilla HTML',
        'Automatic client-side Proof-of-Work anti-spam challenge (zero captchas needed)',
        'Captures OS, browser version, viewport dimensions, and stack traces automatically',
        'Directly links reports to your company’s deduplication clustering engine',
      ],
      codePreview: `<!-- Embed FixIT Widget in 30 Seconds -->
<script
  src="https://fixit.dev/widget.js"
  data-product="acme-web"
  async>
</script>`,
    },
    {
      id: 'triage',
      title: 'B2B Triage & Roadmapping',
      route: '/org',
      badge: 'Role-Based Backlog',
      tagline: 'Organize high-volume customer reports into prioritized engineering actions',
      description: 'Product managers and engineering leads see incoming reports merged by our semantic similarity engine. The backlog is mathematically ordered by priority score: (Impact × Urgency) / Effort.',
      bullets: [
        'Deterministic and AI-driven duplicate detection with confidence matching',
        'Team assignment, status transitions, and mandatory public resolution notes',
        'One-click Markdown export formatted specifically for Linear, Jira, and GitHub',
        'Prepaid company escrow balance for funding verified bug bounties',
      ],
      codePreview: `// FixIT Priority Score Ranking Formula
export function calculatePriorityScore(impact, urgency, effort) {
  const numerator = impact * urgency; // 0 - 10,000
  const normalizedEffort = Math.max(effort, 10);
  return Math.min(100, Math.round((numerator / normalizedEffort) * 10));
}`,
    },
    {
      id: 'marketplace',
      title: 'Solver Bounty Marketplace',
      route: '/marketplace',
      badge: 'Escrow Backed',
      tagline: 'The open meritocratic marketplace where engineers solve bugs and get paid',
      description: 'Freelance engineers and security researchers browse verified bug briefs with clear acceptance criteria. When you find an issue you can fix, claim it exclusively for 7 days so no one duplicates your effort.',
      bullets: [
        '75% guaranteed payout held in ACID escrow before you write a single line of code',
        'Accepts reproduction scripts, code patches, config changes, or architecture plans',
        'Automated validation checks (patch header validation, test output, secret scanning)',
        'Reputation points ladder: Reporter → Verified Hunter → Expert Solver → Fixit Fellow',
      ],
      codePreview: `// Solver 7-Day Exclusive Claim Hold
POST /api/clusters/stripe-race/claim
Response 200 OK:
{
  "claimedBy": "expert_solver_42",
  "expiresAt": "2026-11-08T14:30:00Z",
  "status": "EXCLUSIVE_HOLD",
  "bountyReservedCents": 65000
}`,
    },
    {
      id: 'directory',
      title: 'Public Explorer & Shipped Changelog',
      route: '/explore',
      badge: 'Crowdsourced Trust',
      tagline: 'Public product pages with user voting and transparent resolution tracking',
      description: 'Users can look up any company—claimed or unclaimed. When multiple customers report similar friction, it appears on the public product board where users can upvote feature requests and track shipped fixes in the changelog.',
      bullets: [
        'Directory of verified and unclaimed companies with live report counts',
        'Company claiming funnel via corporate domain email or DNS TXT challenge',
        'Feature demand board where users vote on product improvements',
        'Public shipped changelog showing which engineering fixes have been deployed',
      ],
      codePreview: `// Public Product Transparency API
GET /api/products/acme-web
{
  "name": "Acme Web",
  "claimed": true,
  "reportCount": 142,
  "openClusters": 8,
  "shippedClusters": 34
}`,
    },
    {
      id: 'ops',
      title: 'Ops CRM & Double-Entry Ledger',
      route: '/ops',
      badge: 'ACID Bookkeeping',
      tagline: 'Full administrative control, KYC review, and zero-overdraft dispute mediation',
      description: 'The internal operations console provides platform-wide financial oversight. Every movement of funds is recorded in an immutable double-entry ledger that guarantees sum-to-zero conservation across company deposits, solver payouts, and platform fees.',
      bullets: [
        'Strict KYC identity verification review for all solver payouts ($10 minimum)',
        'Dispute resolution interface for arbitrating rejected solution appeals',
        'Immutable audit log tracking all role changes, ledger transfers, and status updates',
        'Automated outreach campaign copy generator for reaching unclaimed companies',
      ],
      codePreview: `// Double-Entry Ledger Transaction Constraint
-- Sum of all transaction legs MUST equal zero exactly
SELECT SUM(amount_cents) FROM ledger_entries WHERE tx_id = 'tx_8891';
-- Result: 0 (Credits + Debits = 0 balanced)
`,
    },
  ];

  const current = surfaces.find((s) => s.id === activeSurface) || surfaces[0];

  return (
    <section id="surfaces" className="py-20 bg-slate-50 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3.5 py-1 text-xs font-bold text-brand mb-3">
            <Workflow size={14} />
            <span>Complete Product Offering</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Five Integrated Surfaces. One Unified Platform.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            FixIT is not just a landing page—it is a full-stack platform featuring 5 specialized interfaces built for companies, solvers, reporters, and operations teams.
          </p>
        </div>

        {/* Surfaces Tab Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {surfaces.map((s) => {
            const isSelected = activeSurface === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSurface(s.id)}
                className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-brand text-white shadow-md ring-2 ring-brand/20'
                    : 'bg-white border border-border text-ink hover:bg-slate-100'
                }`}
              >
                <span>{s.title}</span>
                <span
                  className={`rounded-full px-2 py-0.2 text-[10px] font-semibold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-ink-muted'
                  }`}
                >
                  {s.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Surface Showcase Display Card */}
        <div className="rounded-3xl border border-border bg-white p-6 sm:p-10 shadow-card">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            {/* Left Column: Details */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="rounded-lg bg-indigo-50 border border-brand/20 px-2.5 py-0.5 text-xs font-bold text-brand font-mono">
                  {current.route}
                </span>
                <span className="rounded-full bg-ok-soft px-2.5 py-0.5 text-xs font-bold text-ok">
                  {current.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-ink">
                {current.title}
              </h3>

              <p className="mt-2 text-sm font-semibold text-brand">
                {current.tagline}
              </p>

              <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed">
                {current.description}
              </p>

              <div className="mt-6 space-y-2.5">
                {current.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check size={16} className="mt-0.5 shrink-0 text-ok" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-border flex items-center gap-3">
                <a
                  href="#sandbox"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-xs font-bold text-white hover:bg-brand-strong transition shadow-sm"
                >
                  <span>Test in Sandbox Queue</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right Column: Code / Architecture Snippet */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-indigo-300">
                  <FileCode size={14} />
                  <span>FixIT Core Implementation Preview</span>
                </span>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-emerald-400 font-bold">
                  Production Verified
                </span>
              </div>
              <pre className="font-mono text-xs text-indigo-200 overflow-x-auto p-3 bg-slate-950/80 rounded-xl leading-relaxed">
                <code>{current.codePreview}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Live Seeded Preview Environments Callout */}
        <div className="mt-10 rounded-2xl border border-border bg-gradient-to-r from-indigo-50/60 via-slate-50 to-emerald-50/50 p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white font-bold">
              <KeyRound size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-ink">Built-in Seeded Preview Personas</h4>
              <p className="text-xs text-ink-muted">
                Our main web application includes live pre-authenticated sessions: <b>/organization</b> (Owner, PM, Eng Lead), <b>/builder</b> (Hunter, Expert Solver), and <b>/admin</b> (Ops Lead).
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="rounded-lg bg-white border border-border px-3 py-1.5 text-slate-700 shadow-sm">
              Role: Owner (Nadia)
            </span>
            <span className="rounded-lg bg-white border border-border px-3 py-1.5 text-indigo-700 shadow-sm">
              Role: Expert (Sam)
            </span>
            <span className="rounded-lg bg-white border border-border px-3 py-1.5 text-emerald-700 shadow-sm">
              Role: Ops Admin
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
