import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero, ProofStrip } from './components/Hero';
import { HowItWorks, BeforeAfter, CtaBand } from './components/Walkthrough';
import { PersonaTabs } from './components/PersonaTabs';
import { ProductSurfaces } from './components/ProductSurfaces';
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
    <div className="min-h-screen flex flex-col bg-canvas text-ink font-sans selection:bg-brand-soft selection:text-brand">
      {/* Navigation matching product header */}
      <Navbar
        onOpenPilotModal={() => setPilotModalOpen(true)}
        onOpenSolverModal={() => setSolverModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenPilotModal={() => setPilotModalOpen(true)}
          onOpenSolverModal={() => setSolverModalOpen(true)}
        />

        {/* 2. Verifiable Engineering Metrics & Live Product Strip */}
        <ProofStrip />

        {/* 3. Walkthrough: From "this is broken" to fixed, in four steps */}
        <HowItWorks />

        {/* 4. Three-Sided Persona Switcher (Companies, Solvers, Reporters) */}
        <PersonaTabs
          onOpenPilotModal={() => setPilotModalOpen(true)}
          onOpenSolverModal={() => setSolverModalOpen(true)}
        />

        {/* 5. The 5 Integrated Product Surfaces */}
        <ProductSurfaces />

        {/* 6. Interactive Acme Cloud Bug Triage & Deduplication Sandbox */}
        <TriageSandbox />

        {/* 7. Review vs Fixit Report Comparison */}
        <BeforeAfter />

        {/* 8. Interactive Escrow Split & ROI Calculator */}
        <EscrowCalculator />

        {/* 9. Pricing Grid & Tier Comparison */}
        <PricingSection onOpenPilotModal={() => setPilotModalOpen(true)} />

        {/* 10. Technical Architecture & Trust Invariants */}
        <ArchitectureSection />

        {/* 11. Final Call-to-Action Band */}
        <CtaBand
          onOpenPilotModal={() => setPilotModalOpen(true)}
          onOpenSolverModal={() => setSolverModalOpen(true)}
        />
      </main>

      {/* 12. Footer with Harshit Agarwal Portfolio Attribution */}
      <Footer />

      {/* Global Lead Capture & Simulation Modals */}
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
