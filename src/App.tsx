import React, { useState, useEffect } from 'react';
import { HealthGridNavbar } from './components/healthgrid/HealthGridNavbar';
import { CommandHero } from './components/healthgrid/CommandHero';
import { NationalStats } from './components/healthgrid/NationalStats';
import { LiveNetworkPanel } from './components/healthgrid/LiveNetworkPanel';
import { SupplyChainSection } from './components/healthgrid/SupplyChainSection';
import { RedistributionEngine } from './components/healthgrid/RedistributionEngine';
import { PhcCommandCard } from './components/healthgrid/PhcCommandCard';
import { EmergencySimulator } from './components/healthgrid/EmergencySimulator';
import { BricsFederatedSection } from './components/healthgrid/BricsFederatedSection';
import { AiAnalyticsSection } from './components/healthgrid/AiAnalyticsSection';
import { ImpactSection } from './components/healthgrid/ImpactSection';
import { HowItWorks } from './components/healthgrid/HowItWorks';
import { TechStackSection } from './components/healthgrid/TechStackSection';
import { CommandFooter } from './components/healthgrid/CommandFooter';
import { CommandBriefingModal } from './components/healthgrid/CommandBriefingModal';
import { Sparkles, Maximize2, Shield } from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isBriefingModalOpen, setIsBriefingModalOpen] = useState(false);
  const [is16x9Mode, setIs16x9Mode] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard shortcut (Escape to close modal or toggle 16:9)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsBriefingModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen bg-[#030611] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 transition-all ${
      is16x9Mode ? 'p-4 sm:p-8 flex items-center justify-center bg-[#010206]' : ''
    }`}>
      
      {/* 16:9 Presentation Frame Container */}
      <div className={`w-full transition-all ${
        is16x9Mode 
          ? 'max-w-[1920px] aspect-[16/9] overflow-y-auto rounded-3xl border-2 border-cyan-500/40 shadow-[0_0_80px_rgba(6,182,212,0.25)] bg-[#030611] relative' 
          : ''
      }`}>

        {/* 16:9 Banner indicator when active */}
        {is16x9Mode && (
          <div className="sticky top-0 z-[60] bg-cyan-950/90 border-b border-cyan-400/50 px-4 py-1.5 flex items-center justify-between text-xs font-mono text-cyan-200 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="font-bold">16:9 DESKTOP COMMAND DISPLAY MOCKUP MODE</span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-slate-400 hidden sm:inline">Optimized for Ultra-HD Presentation & Full-Page Screenshot</span>
            </div>
            <button
              onClick={() => setIs16x9Mode(false)}
              className="text-[11px] text-cyan-300 hover:text-white underline cursor-pointer"
            >
              Exit 16:9 Mode (Standard Scroll)
            </button>
          </div>
        )}

        {/* 1. Transparent Glass Navigation Bar */}
        <HealthGridNavbar
          activeTab={activeTab}
          onSelectTab={(tab) => {
            setActiveTab(tab);
            scrollToSection(tab === 'dashboard' ? 'command-center' : tab);
          }}
          onLaunchDashboard={() => scrollToSection('live-network')}
          is16x9Mode={is16x9Mode}
          onToggle16x9={() => setIs16x9Mode(!is16x9Mode)}
        />

        <main>
          {/* 2. Command Hero Section (3D India Map & Floating Glass Cards) */}
          <CommandHero
            onOpenCommandCenter={() => scrollToSection('live-network')}
            onExploreInsights={() => scrollToSection('supply-chain')}
          />

          {/* 3. National Health Statistics (4 Glass Cards with Sparklines) */}
          <NationalStats />

          {/* 4. Live Health Network (Vector Map + Live Alerts) */}
          <LiveNetworkPanel />

          {/* 5. AI Supply Chain Intelligence (Inventory, 30-Day Demand Forecast Chart, Stock-Out Risk) */}
          <SupplyChainSection
            onViewRiskAnalysis={() => scrollToSection('redistribution')}
          />

          {/* 6. AI Resource Redistribution Engine (Hyderabad -> Warangal) */}
          <RedistributionEngine />

          {/* 7. PHC Command Center (PHC-1042 Granular Facility Telemetry) */}
          <PhcCommandCard />

          {/* 8. Emergency Response AI (Dengue Outbreak Simulation & 5-Step Plan) */}
          <EmergencySimulator />

          {/* 9. Federated AI Across BRICS (5 Sovereign Nodes + Center AI Model) */}
          <BricsFederatedSection />

          {/* 10. Real-Time Health Intelligence (Analytics Dashboard with Multi-Visualizers) */}
          <AiAnalyticsSection />

          {/* 11. Proven Systemic Impact (Epidemiological Outcome Metrics) */}
          <ImpactSection />

          {/* 12. How HealthGrid AI Operates (4-Step Deterministic Process) */}
          <HowItWorks />

          {/* 13. Built on Sovereign Deep-Tech (Edge AI, GNNs, ZKP, Mesh Sync) */}
          <TechStackSection />

          {/* 14. Command Footer & Call to Action */}
          <CommandFooter
            onScheduleBriefing={() => setIsBriefingModalOpen(true)}
          />
        </main>

        {/* Modal: Schedule Command Briefing */}
        <CommandBriefingModal
          isOpen={isBriefingModalOpen}
          onClose={() => setIsBriefingModalOpen(false)}
        />

      </div>

    </div>
  );
};

export default App;
