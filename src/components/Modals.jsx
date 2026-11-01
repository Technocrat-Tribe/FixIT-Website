import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  X,
  Copy,
  Check,
  GitPullRequest,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  Building2,
  Code,
  Github,
  Mail,
  Send,
  ExternalLink,
} from 'lucide-react';

/** Modal for viewing Auto-Deduplication details */
export function DeduplicationModal({ bug, isOpen, onClose }) {
  if (!isOpen || !bug) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-modal border border-border max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-border">
          <div className="pr-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-0.5 text-xs font-bold text-brand mb-2">
              <Layers size={13} />
              <span>Automated Semantic Clustering Engine</span>
            </div>
            <h3 className="text-xl font-bold text-ink">{bug.title}</h3>
            <p className="text-xs text-ink-muted mt-1">
              Found <b>{bug.duplicateCount} similar user reports</b> clustered into this canonical ticket.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-ink-muted hover:bg-slate-100 transition"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Canonical Master Report */}
        <div className="my-5 rounded-2xl bg-indigo-50/70 border border-indigo-100 p-4">
          <div className="flex items-center justify-between text-xs font-bold text-brand mb-1">
            <span>Primary Canonical Report (1st Filed)</span>
            <span>Finder's Fee: ${bug.reporterFee} (10%)</span>
          </div>
          <p className="text-sm font-semibold text-ink">{bug.summary}</p>
          <div className="mt-2.5 flex flex-wrap gap-2 text-xs text-ink-muted font-medium">
            <span className="rounded bg-white px-2 py-0.5 border border-border">Reporter: <b>{bug.originalReporter}</b></span>
            <span className="rounded bg-white px-2 py-0.5 border border-border">Environment: {bug.environment}</span>
          </div>
        </div>

        {/* Merged Duplicate Reports List */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-ink-muted">
            Merged Customer & QA Submissions ({bug.duplicates.length})
          </h4>

          {bug.duplicates.map((dup) => (
            <div key={dup.id} className="rounded-2xl border border-border bg-slate-50/80 p-4 transition hover:bg-slate-50">
              <div className="flex items-start justify-between gap-2">
                <span className="text-sm font-bold text-ink">{dup.title}</span>
                <span className="shrink-0 rounded-full bg-ok-soft border border-ok/20 px-2 py-0.5 text-[11px] font-black text-ok">
                  {dup.similarity}% Match
                </span>
              </div>
              <p className="mt-2 text-xs text-ink-muted italic">"{dup.snippet}"</p>
              <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-border/60 text-[11px] text-ink-muted">
                <span>By <b>{dup.reporter}</b> · {dup.date}</span>
                <span>Client: {dup.client}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clustering Engine Explanation Footer */}
        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-ink-muted">
          <span>AI Embedding Cosine Threshold: ≥ 0.85</span>
          <button
            onClick={onClose}
            className="rounded-xl bg-brand px-4 py-2 font-bold text-white hover:bg-brand-strong transition"
          >
            Done Viewing
          </button>
        </div>
      </div>
    </div>
  );
}

/** Modal for 1-Click Exporting to Linear / GitHub */
export function ExportModal({ bug, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !bug) return null;

  const markdownContent = `### [FixIT Bounty: $${bug.bounty}] ${bug.title}

**Priority Score:** ${bug.priorityScore}/100 (${bug.scoreFormula})
**Product Surface:** ${bug.product}
**Original Reporter:** ${bug.originalReporter} (Eligible for $${bug.reporterFee} 10% Finder's Fee)
**Escrow Solver Payout:** $${bug.solverFee} (75% on PR Acceptance)
**Deduplicated Reports Merged:** ${bug.duplicateCount} user submissions

---

#### 📋 Summary
${bug.summary}

#### 🛠️ Steps to Reproduce
${bug.reproSteps.join('\n')}

#### 💻 Environment
${bug.environment}

#### 💡 Suggested Resolution
${bug.suggestedFix}

---
*Exported directly from FixIT Engineering Portal. ACID Escrow is funded.*
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-modal border border-border max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between pb-4 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-ok-soft px-3 py-0.5 text-xs font-bold text-ok mb-2">
              <GitPullRequest size={13} />
              <span>1-Click Issue Tracker Sync</span>
            </div>
            <h3 className="text-xl font-bold text-ink">Export to Linear / GitHub / Jira</h3>
            <p className="text-xs text-ink-muted mt-0.5">
              Copy pre-formatted, reproduction-ready Markdown directly into your engineering sprint backlog.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-ink-muted hover:bg-slate-100 transition"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Code View */}
        <div className="my-5 relative rounded-2xl bg-slate-900 p-4 text-slate-100 font-mono text-xs overflow-x-auto max-h-72 border border-slate-800">
          <pre className="whitespace-pre-wrap">{markdownContent}</pre>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border">
          <span className="text-xs text-ink-muted">
            Includes repro steps, environment matrix & escrow metadata.
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold transition shadow-sm ${
                copied
                  ? 'bg-ok text-white'
                  : 'bg-brand text-white hover:bg-brand-strong'
              }`}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Markdown'}</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-xl border border-border px-4 py-2.5 text-xs font-semibold text-ink hover:bg-slate-100 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Modal for Requesting a Company B2B Pilot */
export function PilotModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    teamSize: '10-50 engineers',
    tracker: 'Linear',
    bountyBudget: '$1,000 - $5,000 / mo',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-modal border border-border max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between pb-3 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-0.5 text-xs font-bold text-brand mb-2">
              <Building2 size={13} />
              <span>B2B Company Pilot</span>
            </div>
            <h3 className="text-xl font-bold text-ink">Request FixIT Company Pilot</h3>
            <p className="text-xs text-ink-muted mt-0.5">
              14-day risk-free pilot for SaaS engineering & product teams.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-ink-muted hover:bg-slate-100 transition"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center animate-fadeIn">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ok-soft text-ok mb-4">
              <ShieldCheck size={32} />
            </div>
            <h4 className="text-xl font-bold text-ink">Pilot Request Received!</h4>
            <p className="mt-2 text-sm text-ink-muted max-w-sm mx-auto">
              Thank you, <b>{formData.companyName || 'Engineering Lead'}</b>. Harshit Agarwal and the FixIT solutions engineering team will reach out within 4 business hours to provision your sandbox workspace.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 rounded-xl bg-brand px-6 py-2.5 text-xs font-bold text-white hover:bg-brand-strong transition"
            >
              Return to Showcase
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label className="block text-xs font-bold text-ink mb-1">Company Name</label>
              <input
                required
                type="text"
                placeholder="e.g. Acme Technologies"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-ink mb-1">Work Email</label>
              <input
                required
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-ink mb-1">Team Size</label>
                <select
                  value={formData.teamSize}
                  onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                  className="w-full rounded-xl border border-border px-3 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 bg-white"
                >
                  <option>1-10 engineers</option>
                  <option>10-50 engineers</option>
                  <option>50-250 engineers</option>
                  <option>250+ enterprise</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-ink mb-1">Issue Tracker</label>
                <select
                  value={formData.tracker}
                  onChange={(e) => setFormData({ ...formData, tracker: e.target.value })}
                  className="w-full rounded-xl border border-border px-3 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 bg-white"
                >
                  <option>Linear</option>
                  <option>GitHub Issues</option>
                  <option>Jira Cloud</option>
                  <option>GitLab / Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-ink mb-1">Target Monthly Bounty Pool</label>
              <select
                value={formData.bountyBudget}
                onChange={(e) => setFormData({ ...formData, bountyBudget: e.target.value })}
                className="w-full rounded-xl border border-border px-3 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 bg-white"
              >
                <option>&lt; $1,000 / mo</option>
                <option>$1,000 - $5,000 / mo</option>
                <option>$5,000 - $20,000 / mo</option>
                <option>$20,000+ / mo</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand py-3 text-sm font-bold text-white shadow-md hover:bg-brand-strong transition"
              >
                <Send size={16} />
                <span>Submit Pilot Application</span>
              </button>
              <p className="mt-2 text-center text-[11px] text-ink-muted">
                Zero commitment. Prepaid escrow balance only funds when you accept fixes.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

/** Modal for Solvers Applying for Early Access */
export function SolverModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    github: '',
    techStack: 'TypeScript / React / Node.js',
    email: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-modal border border-border max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between pb-3 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-ok-soft px-3 py-0.5 text-xs font-bold text-ok mb-2">
              <Code size={13} />
              <span>Solver Network</span>
            </div>
            <h3 className="text-xl font-bold text-ink">Join FixIT Solver Network</h3>
            <p className="text-xs text-ink-muted mt-0.5">
              Solve real bugs for top startups, build your reputation, and earn 75% escrow payouts.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-ink-muted hover:bg-slate-100 transition"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center animate-fadeIn">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ok-soft text-ok mb-4">
              <ShieldCheck size={32} />
            </div>
            <h4 className="text-xl font-bold text-ink">Solver Access Registered!</h4>
            <p className="mt-2 text-sm text-ink-muted max-w-sm mx-auto">
              Welcome, <b>{formData.name || 'Solver'}</b>! Your GitHub handle (<code>@{formData.github || 'solver'}</code>) has been pre-registered for the next bounty wave.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 rounded-xl bg-ok px-6 py-2.5 text-xs font-bold text-white hover:bg-ok-strong transition"
            >
              Return to Showcase
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label className="block text-xs font-bold text-ink mb-1">Full Name</label>
              <input
                required
                type="text"
                placeholder="Alex Morgan"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink focus:border-ok focus:outline-none focus:ring-2 focus:ring-ok/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-ink mb-1">GitHub Username</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-ink-muted text-sm">@</span>
                <input
                  required
                  type="text"
                  placeholder="github_handle"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  className="w-full pl-8 rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink focus:border-ok focus:outline-none focus:ring-2 focus:ring-ok/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-ink mb-1">Email</label>
              <input
                required
                type="email"
                placeholder="alex@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink focus:border-ok focus:outline-none focus:ring-2 focus:ring-ok/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-ink mb-1">Primary Tech Stack</label>
              <select
                value={formData.techStack}
                onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                className="w-full rounded-xl border border-border px-3 py-2.5 text-sm text-ink focus:border-ok focus:outline-none focus:ring-2 focus:ring-ok/20 bg-white"
              >
                <option>TypeScript / React / Node.js</option>
                <option>Python / Django / FastAPI</option>
                <option>Go / Distributed Systems</option>
                <option>Rust / Systems Engineering</option>
                <option>Mobile (iOS / Android / Flutter)</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-ok py-3 text-sm font-bold text-white shadow-md hover:bg-ok-strong transition"
              >
                <Send size={16} />
                <span>Join Early Solver Queue</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
