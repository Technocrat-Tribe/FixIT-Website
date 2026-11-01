import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero, ProofStrip } from './components/Hero';
import { PersonaTabs } from './components/PersonaTabs';
import { EscrowCalculator } from './components/EscrowCalculator';
import { TriageSandbox } from './components/TriageSandbox';
import { PricingSection } from './components/PricingSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { Footer } from './components/Footer';
import { PilotModal, SolverModal } from './components/Modals';

export default function App() {
  const [pilotModalOpen, setPilotModalOpen] = useState(false);
  const [solverModalOpen, setSolverModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-ink font-sans selection:bg-brand-soft selection:text-brand">
      {/* Navigation */}
      <Navbar onOpenPilotModal={() => setPilotModalOpen(true)} />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onOpenPilotModal={() => setPilotModalOpen(true)}
          onOpenSolverModal={() => setSolverModalOpen(true)}
        />

        {/* Verifiable Engineering Metrics Proof Strip */}
        <ProofStrip />

        {/* Three-Sided Persona Switcher */}
        <PersonaTabs
          onOpenPilotModal={() => setPilotModalOpen(true)}
          onOpenSolverModal={() => setSolverModalOpen(true)}
        />

        {/* Interactive Escrow Split & ROI Calculator */}
        <EscrowCalculator />

        {/* Interactive Bug Triage & Deduplication Sandbox */}
        <TriageSandbox />

        {/* Pricing Grid & Tier Comparison */}
        <PricingSection onOpenPilotModal={() => setPilotModalOpen(true)} />

        {/* Technical Architecture & Trust */}
        <ArchitectureSection />
      </main>

      {/* Footer with Attribution and External Links */}
      <Footer />

      {/* Global Lead Capture Modals */}
      <PilotModal
        isOpen={pilotModalOpen}
        onClose={() => setPilotModalOpen(false)}
      />

      <SolverModal
        isOpen={solverModalOpen}
        onClose={() => setSolverModalOpen(false)}
      />
    </div>
  );
}
