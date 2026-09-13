import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  Layers, 
  Navigation, 
  Clock, 
  Zap,
  RotateCcw
} from 'lucide-react';

export const RedistributionEngine: React.FC = () => {
  const [isApproved, setIsApproved] = useState(false);
  const [isSimulated, setIsSimulated] = useState(false);

  const handleApprove = () => {
    setIsApproved(true);
  };

  const handleSimulate = () => {
    setIsSimulated(!isSimulated);
  };

  return (
    <section id="redistribution" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#040714] overflow-hidden">
      
      {/* Glow Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono font-semibold">
            <Zap className="w-3.5 h-3.5 text-cyan-300" />
            <span>ALGORITHMIC STOCK ARBITRAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            AI Resource Redistribution
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Automatically identify surplus resources and recommend optimal cross-district transfers before clinical exhaustion.
          </p>
        </div>

        {/* Large Horizontal Glassmorphism Section */}
        <div className="rounded-3xl bg-[#080d21]/90 border border-cyan-500/30 p-8 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-8 relative overflow-hidden">
          
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

          {/* 3-Column Supply Network Visualization */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* LEFT: SURPLUS DISTRICT (Hyderabad) */}
            <div className="lg:col-span-4 rounded-2xl bg-[#060a1a]/95 border border-emerald-500/40 p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  SURPLUS DISTRICT
                </span>
                <span className="text-xs font-mono text-slate-400">Hub 01</span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-black text-white">
                  Hyderabad
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">Central Medical Store, Koti</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <div className="text-xs font-mono text-slate-400">Broad-Spectrum Antibiotics:</div>
                <div className="text-2xl font-display font-black text-emerald-400">
                  +8,400 units
                </div>
                <div className="text-[10px] font-mono text-slate-500">Buffer Coverage: 28 Days</div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-xs font-mono">
                <span className="text-slate-400">Current Status:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  🟢 Surplus Available
                </span>
              </div>
            </div>

            {/* CENTER: AI OPTIMIZED TRANSFER ARROW */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4 text-center py-4">
              
              {/* Glowing Transfer Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/50 text-cyan-200 text-xs font-mono font-bold shadow-lg shadow-cyan-500/30">
                <Truck className="w-4 h-4 text-cyan-300 animate-pulse" />
                <span>AI OPTIMIZED TRANSFER</span>
              </div>

              {/* Large Transfer Quantity */}
              <div className="text-3xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
                3,500 units
              </div>

              {/* Large Glowing Animated-Looking Arrow */}
              <div className="w-full flex items-center justify-center gap-2 px-4">
                <div className="h-1 flex-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-rose-500 rounded-full animate-pulse shadow-sm shadow-cyan-400" />
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/40">
                  <ArrowRight className="w-5 h-5 animate-pulse" />
                </div>
                <div className="h-1 flex-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-rose-500 rounded-full animate-pulse shadow-sm shadow-cyan-400" />
              </div>

              {/* Transit details */}
              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-cyan-300" /> ETA: 2h 15m
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Navigation className="w-3 h-3 text-cyan-300" /> Via NH-163
                </span>
              </div>
            </div>

            {/* RIGHT: CRITICAL DISTRICT (Warangal) */}
            <div className="lg:col-span-4 rounded-2xl bg-[#060a1a]/95 border border-rose-500/50 p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold bg-rose-950/60 px-2.5 py-1 rounded-full border border-rose-500/40">
                  CRITICAL DISTRICT
                </span>
                <span className="text-xs font-mono text-slate-400">Deficit Sector</span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-black text-white">
                  Warangal
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">District Civil Hospital & 27 PHCs</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <div className="text-xs font-mono text-slate-400">Antibiotic Deficit:</div>
                <div className="text-2xl font-display font-black text-rose-400">
                  −4,200 units
                </div>
                <div className="text-[10px] font-mono text-rose-300">Depletion in: 48 Hours</div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-xs font-mono">
                <span className="text-slate-400">Current Status:</span>
                <span className="text-rose-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                  🔴 Critical Shortage
                </span>
              </div>
            </div>

          </div>

          {/* Impact Metrics Row */}
          <div className="relative z-10 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-[#050815] border border-white/[0.06]">
              <div className="text-xs font-mono text-slate-400">AI Recommendation Score</div>
              <div className="text-2xl font-display font-black text-cyan-300 mt-1">
                94 / 100
              </div>
              <div className="text-[10px] font-mono text-slate-500 mt-0.5">Pareto Efficiency Optimum</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#050815] border border-white/[0.06]">
              <div className="text-xs font-mono text-slate-400">Estimated Impact</div>
              <div className="text-2xl font-display font-black text-emerald-400 mt-1">
                +37% Resource Availability
              </div>
              <div className="text-[10px] font-mono text-slate-500 mt-0.5">Warangal Deficit Reduced by 83%</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#050815] border border-white/[0.06]">
              <div className="text-xs font-mono text-slate-400">Travel Distance</div>
              <div className="text-2xl font-display font-black text-violet-300 mt-1">
                128 km
              </div>
              <div className="text-[10px] font-mono text-slate-500 mt-0.5">Cold-Chain Temperature Guaranteed</div>
            </div>
          </div>

          {/* Action Buttons & Interactive Confirmation */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            
            {isApproved ? (
              <div className="w-full p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  <div>
                    <span className="font-display font-bold text-white text-sm">
                      Redistribution Order #RD-HYD-WAR-982 Dispatched
                    </span>
                    <p className="text-xs font-mono text-emerald-300">
                      Vehicle AP-09-TC-4401 in transit • Cryo Sensor active (3.8°C)
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsApproved(false)}
                  className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Action</span>
                </button>
              </div>
            ) : (
              <>
                <div className="text-xs font-mono text-slate-400">
                  Explainable AI: Zero degradation to Hyderabad's 21-day baseline safety threshold.
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={handleSimulate}
                    className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 hover:text-white font-mono text-xs font-semibold transition-all cursor-pointer"
                  >
                    <span>{isSimulated ? 'Hide Simulation Matrix' : 'Simulate Impact'}</span>
                  </button>

                  <button
                    onClick={handleApprove}
                    className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-display font-bold text-xs flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/30 transition-all cursor-pointer group"
                  >
                    <span>Approve Redistribution</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </>
            )}

          </div>

          {/* Optional Simulation Drawer */}
          {isSimulated && (
            <div className="p-4 rounded-2xl bg-[#040713] border border-cyan-500/30 space-y-3 font-mono text-xs animate-in fade-in">
              <div className="flex items-center justify-between text-cyan-300 font-bold">
                <span>SIMULATION OUTPUT: 72-HOUR OUTCOME</span>
                <span>P(Stock-out) &lt; 2.1%</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-300 text-[11px]">
                <div>• Hyderabad remaining stock: 4,900 units (19.4 days coverage)</div>
                <div>• Warangal post-transfer stock: 3,500 units (14.2 days coverage)</div>
                <div>• Patient service disruption avoided: 1,840 acute infections</div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
