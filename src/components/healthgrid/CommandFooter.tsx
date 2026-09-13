import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Globe2, 
  Radio, 
  ShieldCheck, 
  Activity,
  Layers,
  Compass
} from 'lucide-react';

interface CommandFooterProps {
  onScheduleBriefing: () => void;
}

export const CommandFooter: React.FC<CommandFooterProps> = ({ onScheduleBriefing }) => {
  return (
    <footer className="relative bg-[#02040b] text-slate-400 overflow-hidden border-t border-cyan-500/20">
      
      {/* Blue-purple atmospheric lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-gradient-to-b from-cyan-600/15 via-blue-600/10 to-violet-600/10 blur-[140px] pointer-events-none" />

      {/* FINAL CTA: Wide Premium Glowing Gradient Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#09102b] via-[#060b20] to-[#040817] border border-cyan-400/40 p-8 sm:p-14 backdrop-blur-2xl shadow-2xl shadow-cyan-950/40 overflow-hidden text-center space-y-6">
          
          {/* Subtle glowing healthcare network & India/world map lines */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
          <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 800 300">
            <path d="M 100 150 Q 250 80 400 150 T 700 150" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="4,4" />
            <path d="M 150 220 Q 350 120 550 200" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="5,5" />
            <circle cx="200" cy="120" r="3" fill="#22d3ee" className="animate-ping" />
            <circle cx="450" cy="160" r="3" fill="#a855f7" className="animate-ping" />
            <circle cx="600" cy="140" r="3" fill="#38bdf8" />
          </svg>

          <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/50 text-cyan-200 text-xs font-mono font-bold shadow-md shadow-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>BRICS RESILIENCE DEPLOYMENT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
              Build a More Resilient Healthcare Future.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              From predicting shortages to optimizing resources, HealthGrid AI turns healthcare data into intelligent action.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onScheduleBriefing}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all cursor-pointer group"
              >
                <span>Launch HealthGrid AI</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#live-network"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#080d21] hover:bg-[#0f1738] border border-cyan-500/30 hover:border-cyan-400 text-slate-200 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-lg"
              >
                <Compass className="w-4 h-4 text-cyan-300" />
                <span>Explore the Network</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Left: HealthGrid AI Logo & Text */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 p-0.5 shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#040816] rounded-[10px] flex items-center justify-center relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>
              </div>
              <div className="font-display font-black text-lg text-white">
                HealthGrid <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">AI</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              AI-powered resilience for healthcare systems across nations.
            </p>
          </div>

          {/* Column 1: Platform */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-white font-display font-bold uppercase tracking-wider">
              Platform
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#command-center" className="hover:text-cyan-300">Command Center</a></li>
              <li><a href="#live-network" className="hover:text-cyan-300">PHC Network</a></li>
              <li><a href="#supply-chain" className="hover:text-cyan-300">Supply Chain</a></li>
              <li><a href="#redistribution" className="hover:text-cyan-300">AI Forecast</a></li>
            </ul>
          </div>

          {/* Column 2: Intelligence */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-white font-display font-bold uppercase tracking-wider">
              Intelligence
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#supply-chain" className="hover:text-cyan-300">Demand Prediction</a></li>
              <li><a href="#live-network" className="hover:text-cyan-300">Risk Detection</a></li>
              <li><a href="#redistribution" className="hover:text-cyan-300">Redistribution</a></li>
              <li><a href="#emergency" className="hover:text-cyan-300">Emergency AI</a></li>
            </ul>
          </div>

          {/* Column 3: Network */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-white font-display font-bold uppercase tracking-wider">
              Network
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#brics" className="hover:text-cyan-300">BRICS AI</a></li>
              <li><a href="#brics" className="hover:text-cyan-300">Global Health</a></li>
              <li><a href="#brics" className="hover:text-cyan-300">Data Security</a></li>
              <li><a href="#brics" className="hover:text-cyan-300">Partnerships</a></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-white font-display font-bold uppercase tracking-wider">
              Connect
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={onScheduleBriefing} className="hover:text-cyan-300 cursor-pointer">Contact</button></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cyan-300">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-300">LinkedIn</a></li>
              <li><a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-cyan-300">X</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 mt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            © 2026 HealthGrid AI — Smart Health & Supply Chain Resilience
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              12,482 Nodes Synced
            </span>
            <span>Latency: 8.2ms</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
