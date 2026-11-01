import React, { useState } from 'react';
import {
  ShieldCheck,
  Layers,
  Cpu,
  Lock,
  Database,
  Terminal,
  CheckCircle2,
  FileCode2,
  ArrowRight,
  GitBranch,
} from 'lucide-react';
import { ARCHITECTURE_PILLARS } from '../data/showcaseData';

export function ArchitectureSection() {
  const [activePillar, setActivePillar] = useState(ARCHITECTURE_PILLARS[0]);

  const icons = {
    ShieldCheck,
    Layers,
    Cpu,
    Lock,
  };

  return (
    <section id="architecture" className="py-20 bg-canvas text-ink border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft border border-brand/30 px-3.5 py-1 text-xs font-bold text-brand mb-3">
            <Database size={14} className="text-brand" />
            <span>Under The Hood</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-ink">
            Enterprise Architecture & Security Boundary
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Engineered with strict zero-trust principles: SQLite WAL mode, double-entry ACID escrow ledgers, and automated CI sandbox verification.
          </p>
        </div>

        {/* 4 Pillars Selector Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {ARCHITECTURE_PILLARS.map((pillar) => {
            const Icon = icons[pillar.icon] || ShieldCheck;
            const isSelected = activePillar.id === pillar.id;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar)}
                className={`text-left rounded-2xl p-5 border transition-all ${
                  isSelected
                    ? 'border-brand bg-brand-soft shadow-elevated ring-2 ring-brand/20'
                    : 'border-border bg-surface hover:bg-surface-muted hover:border-brand/40'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      isSelected
                        ? 'bg-brand-strong text-white shadow-sm'
                        : 'bg-surface-muted text-ink-muted'
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isSelected ? 'text-brand' : 'text-ink-muted'
                    }`}
                  >
                    Pillar
                  </span>
                </div>
                <h3 className="text-base font-bold text-ink mb-1">{pillar.title}</h3>
                <p className="text-xs text-ink-muted line-clamp-2">{pillar.tagline}</p>
              </button>
            );
          })}
        </div>

        {/* Detailed Selected Pillar Deep Dive */}
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            {/* Left Column: Description & Specs */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-brand-soft border border-brand/30 px-3 py-1 text-xs font-bold text-brand mb-4">
                <ShieldCheck size={14} />
                <span>Formal Invariant Guaranteed</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-ink">
                {activePillar.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-brand">
                {activePillar.tagline}
              </p>
              <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed">
                {activePillar.description}
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-ink-muted border-t border-border pt-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-ok shrink-0" />
                  <span>Strict SQLite transactional isolation via BEGIN IMMEDIATE TRANSACTION</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-ok shrink-0" />
                  <span>Role-Based Access Control checked server-side on every API invocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-ok shrink-0" />
                  <span>Zero client-side authority over funds, statuses, or payouts</span>
                </div>
              </div>
            </div>

            {/* Right Column: Code Snippet Card */}
            <div className="rounded-2xl border border-border bg-surface-muted p-5 shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border text-xs font-mono text-ink-muted">
                <span className="flex items-center gap-1.5 text-brand">
                  <FileCode2 size={14} />
                  <span>server/src/core/{activePillar.id}.ts</span>
                </span>
                <span className="text-[10px] bg-surface px-2 py-0.5 rounded text-ok font-bold border border-border">
                  Strict TS
                </span>
              </div>
              <pre className="font-mono text-xs text-brand overflow-x-auto p-3 bg-canvas/80 rounded-xl leading-relaxed border border-border">
                <code>{activePillar.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
