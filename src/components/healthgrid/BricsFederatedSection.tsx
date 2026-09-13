import React from 'react';
import { 
  Globe2, 
  ShieldCheck, 
  Lock, 
  Cpu, 
  Layers, 
  Sparkles, 
  KeyRound, 
  Radio, 
  CheckCircle2,
  Share2
} from 'lucide-react';
import { BRICS_NODES } from '../../data/healthGridData';

export const BricsFederatedSection: React.FC = () => {
  return (
    <section id="brics" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#030612] overflow-hidden border-t border-cyan-500/20">
      
      {/* Intense Glowing Radial Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-200 text-xs font-mono font-bold shadow-lg shadow-cyan-500/20">
            <Globe2 className="w-3.5 h-3.5 text-cyan-300 animate-spin" style={{ animationDuration: '18s' }} />
            <span>SOVEREIGN MULTINATIONAL HEALTH INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Federated AI Across BRICS
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Learn together without centralizing sensitive healthcare data. Sovereign cryptographic aggregation across 5 continents.
          </p>
        </div>

        {/* Global Network Visualization Stage */}
        <div className="rounded-3xl bg-[#070b1c]/90 border border-cyan-500/30 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl space-y-10 relative overflow-hidden">
          
          {/* Top Label */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold">
              <Share2 className="w-4 h-4" />
              <span>SECURE FEDERATED AGGREGATION PROTOCOL (SFAP-26)</span>
            </div>
            <div className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-200">
              Collaborative Predictive Intelligence
            </div>
          </div>

          {/* Futuristic Network Graph (5 Nodes + Center Hub) */}
          <div className="relative w-full h-[400px] flex items-center justify-center">
            
            {/* SVG Interactive Mesh Lines with Encrypted Data Flow */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
              <defs>
                <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Radial Orbit Circles */}
              <circle cx="400" cy="200" r="140" fill="none" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4,4" opacity="0.25" />
              <circle cx="400" cy="200" r="170" fill="none" stroke="#8b5cf6" strokeWidth="0.8" strokeDasharray="6,6" opacity="0.2" />

              {/* Connection Lines from Center (400, 200) to 5 Nodes */}
              {/* Node 1: India (400, 50) */}
              <line x1="400" y1="200" x2="400" y2="70" stroke="url(#streamGrad)" strokeWidth="2" strokeDasharray="6,4" className="animate-pulse" />
              {/* Node 2: China (560, 110) */}
              <line x1="400" y1="200" x2="560" y2="120" stroke="url(#streamGrad)" strokeWidth="2" strokeDasharray="6,4" className="animate-pulse" />
              {/* Node 3: Russia (530, 310) */}
              <line x1="400" y1="200" x2="520" y2="290" stroke="url(#streamGrad)" strokeWidth="2" strokeDasharray="6,4" className="animate-pulse" />
              {/* Node 4: South Africa (270, 310) */}
              <line x1="400" y1="200" x2="280" y2="290" stroke="url(#streamGrad)" strokeWidth="2" strokeDasharray="6,4" className="animate-pulse" />
              {/* Node 5: Brazil (240, 110) */}
              <line x1="400" y1="200" x2="240" y2="120" stroke="url(#streamGrad)" strokeWidth="2" strokeDasharray="6,4" className="animate-pulse" />
            </svg>

            {/* CENTER HUB: FEDERATED AI MODEL */}
            <div className="relative z-20 w-44 h-44 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-violet-600/30 border-2 border-cyan-400/60 backdrop-blur-2xl flex flex-col items-center justify-center text-center p-3 shadow-2xl shadow-cyan-500/30">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 mb-1">
                <Cpu className="w-5 h-5 animate-pulse" />
              </div>
              <div className="font-display font-black text-white text-xs tracking-wider">
                FEDERATED AI MODEL
              </div>
              <div className="text-[9px] font-mono text-cyan-300 mt-0.5">
                Zero-Knowledge Proofs
              </div>
              <div className="text-[9px] font-mono text-emerald-400 font-bold">
                Round #4,821 Synced
              </div>
            </div>

            {/* NODE 1: INDIA (Top) */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 p-3 rounded-2xl bg-[#0a0f24]/90 border border-cyan-500/40 backdrop-blur-xl shadow-lg">
              <span className="text-2xl">🇮🇳</span>
              <div className="text-left">
                <div className="text-xs font-display font-bold text-white flex items-center gap-1.5">
                  <span>India</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                </div>
                <div className="text-[10px] font-mono text-cyan-300">12,482 PHCs Synced</div>
              </div>
            </div>

            {/* NODE 2: CHINA (Top Right) */}
            <div className="absolute top-16 right-4 sm:right-16 z-20 flex items-center gap-3 p-3 rounded-2xl bg-[#0a0f24]/90 border border-white/15 backdrop-blur-xl shadow-lg">
              <span className="text-2xl">🇨🇳</span>
              <div className="text-left">
                <div className="text-xs font-display font-bold text-white">China</div>
                <div className="text-[10px] font-mono text-slate-400">16,200 Centers</div>
              </div>
            </div>

            {/* NODE 3: RUSSIA (Bottom Right) */}
            <div className="absolute bottom-6 right-8 sm:right-24 z-20 flex items-center gap-3 p-3 rounded-2xl bg-[#0a0f24]/90 border border-white/15 backdrop-blur-xl shadow-lg">
              <span className="text-2xl">🇷🇺</span>
              <div className="text-left">
                <div className="text-xs font-display font-bold text-white">Russia</div>
                <div className="text-[10px] font-mono text-slate-400">3,800 Polyclinics</div>
              </div>
            </div>

            {/* NODE 4: SOUTH AFRICA (Bottom Left) */}
            <div className="absolute bottom-6 left-8 sm:left-24 z-20 flex items-center gap-3 p-3 rounded-2xl bg-[#0a0f24]/90 border border-white/15 backdrop-blur-xl shadow-lg">
              <span className="text-2xl">🇿🇦</span>
              <div className="text-left">
                <div className="text-xs font-display font-bold text-white">South Africa</div>
                <div className="text-[10px] font-mono text-slate-400">2,900 Clinics</div>
              </div>
            </div>

            {/* NODE 5: BRAZIL (Top Left) */}
            <div className="absolute top-16 left-4 sm:left-16 z-20 flex items-center gap-3 p-3 rounded-2xl bg-[#0a0f24]/90 border border-white/15 backdrop-blur-xl shadow-lg">
              <span className="text-2xl">🇧🇷</span>
              <div className="text-left">
                <div className="text-xs font-display font-bold text-white">Brazil</div>
                <div className="text-[10px] font-mono text-slate-400">4,100 UBSs</div>
              </div>
            </div>

          </div>

          {/* 3 Glass Indicators Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/[0.08]">
            
            {/* Indicator 1: Raw Data Never Shared */}
            <div className="p-4 rounded-2xl bg-[#050816] border border-cyan-500/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-display font-bold text-white">Raw Data</div>
                <div className="text-xs font-mono text-cyan-300 font-semibold">Never Shared</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Patient records remain strictly on-premise</div>
              </div>
            </div>

            {/* Indicator 2: Model Updates Federated */}
            <div className="p-4 rounded-2xl bg-[#050816] border border-blue-500/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-display font-bold text-white">Model Updates</div>
                <div className="text-xs font-mono text-blue-300 font-semibold">Federated</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Only mathematical weight gradients transmitted</div>
              </div>
            </div>

            {/* Indicator 3: Privacy Preserved */}
            <div className="p-4 rounded-2xl bg-[#050816] border border-purple-500/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-display font-bold text-white">Privacy</div>
                <div className="text-xs font-mono text-purple-300 font-semibold">Preserved</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Differential privacy guarantee (ε=0.82)</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
