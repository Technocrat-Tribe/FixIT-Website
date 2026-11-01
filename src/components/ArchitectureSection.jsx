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
    <section id="architecture" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-950 border border-indigo-500/30 px-3.5 py-1 text-xs font-bold text-indigo-300 mb-3">
            <Database size={14} className="text-indigo-400" />
            <span>Under The Hood</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Enterprise Architecture & Security Boundary
          </h2>
          <p className="mt-4 text-lg text-slate-400">
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
                    ? 'border-indigo-500 bg-indigo-950/60 shadow-elevated ring-2 ring-indigo-500/20'
                    : 'border-slate-800 bg-slate-800/40 hover:bg-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isSelected ? 'text-indigo-300' : 'text-slate-400'
                    }`}
                  >
                    Pillar
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{pillar.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2">{pillar.tagline}</p>
              </button>
            );
          })}
        </div>

        {/* Detailed Selected Pillar Deep Dive */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            {/* Left Column: Description & Specs */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-indigo-900/50 border border-indigo-700/40 px-3 py-1 text-xs font-bold text-indigo-300 mb-4">
                <ShieldCheck size={14} />
                <span>Formal Invariant Guaranteed</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activePillar.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-indigo-400">
                {activePillar.tagline}
              </p>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {activePillar.description}
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-slate-400 border-t border-slate-800/80 pt-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Strict SQLite transactional isolation via BEGIN IMMEDIATE TRANSACTION</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Role-Based Access Control checked server-side on every API invocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Zero client-side authority over funds, statuses, or payouts</span>
                </div>
              </div>
            </div>

            {/* Right Column: Code Snippet Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-indigo-300">
                  <FileCode2 size={14} />
                  <span>server/src/core/{activePillar.id}.ts</span>
                </span>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                  Strict TS
                </span>
              </div>
              <pre className="font-mono text-xs text-emerald-300 overflow-x-auto p-2 bg-slate-950/80 rounded-xl leading-relaxed">
                <code>{activePillar.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
