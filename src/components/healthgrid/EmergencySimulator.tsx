import React, { useState } from 'react';
import { 
  Flame, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Activity, 
  Bed, 
  Boxes, 
  Users, 
  ShieldAlert,
  Play
} from 'lucide-react';

export const EmergencySimulator: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [simulationComplete, setSimulationComplete] = useState(false);
  const [intensity, setIntensity] = useState(35);

  const handleRunSimulation = () => {
    setIsRunning(true);
    setSimulationComplete(false);
    setTimeout(() => {
      setIsRunning(false);
      setSimulationComplete(true);
    }, 1200);
  };

  const steps = [
    { num: '01', title: 'Reallocate ORS from 7 surplus PHCs', desc: 'Auto-generates requisition dispatch for 14,200 rehydration packets from Adilabad.' },
    { num: '02', title: 'Reserve 126 emergency beds', desc: 'Directs secondary triage centers in Warangal to earmark isolation capacity.' },
    { num: '03', title: 'Deploy additional medical personnel', desc: 'Alerts 18 duty medical officers and 34 clinical nurses from standby pool.' },
    { num: '04', title: 'Prioritize 5 high-risk districts', desc: 'Vector transmission surveillance weighted towards flood-impacted basins.' },
    { num: '05', title: 'Trigger emergency procurement', desc: 'Opens bulk national rate-contract re-order with 24-hour delivery SLA.' },
  ];

  return (
    <section id="emergency" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#02040c] overflow-hidden border-t border-rose-900/20">
      
      {/* Intense dark background with subtle magenta and red-violet ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[500px] rounded-full bg-rose-900/15 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-900/15 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-mono font-semibold">
            <Flame className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            <span>CRISIS PROPAGATION MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Emergency Response AI
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Simulate health emergencies before they happen. Test catastrophic outbreak vectors and generate instant automated mitigation doctrines.
          </p>
        </div>

        {/* Futuristic Scenario Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side (5 Cols): Large Simulation Control Card */}
          <div className="lg:col-span-5 rounded-3xl bg-[#080a18]/90 border border-rose-500/30 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white uppercase tracking-wider">
                      Dengue Outbreak Simulation
                    </h3>
                    <p className="text-[11px] font-mono text-rose-300/80">Scenario: Monsoonal Vector Surge</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950/60 border border-rose-500/50 text-rose-300 font-bold">
                  ACTIVE
                </span>
              </div>

              {/* Intensity Slider Control */}
              <div className="space-y-2 p-4 rounded-2xl bg-[#040612] border border-white/[0.06]">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">Surge Amplitude:</span>
                  <span className="text-rose-400 font-bold text-sm">+{intensity}% Patient Footfall</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="65"
                  value={intensity}
                  onChange={(e) => setIntensity(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>+15% (Moderate)</span>
                  <span>+35% (Baseline Scenario)</span>
                  <span>+65% (Catastrophic)</span>
                </div>
              </div>

              {/* Predicted Impact 4 Metric Cards */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Simulated System Strain:
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#040612] border border-white/[0.06] space-y-1">
                    <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
                      <span>Patient Load</span>
                      <Users className="w-3 h-3 text-rose-400" />
                    </div>
                    <div className="text-2xl font-display font-black text-rose-400">
                      +{intensity}%
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#040612] border border-white/[0.06] space-y-1">
                    <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
                      <span>Medicine Demand</span>
                      <Boxes className="w-3 h-3 text-amber-400" />
                    </div>
                    <div className="text-2xl font-display font-black text-amber-300">
                      +{Math.round(intensity * 1.2)}%
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#040612] border border-white/[0.06] space-y-1">
                    <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
                      <span>Bed Occupancy</span>
                      <Bed className="w-3 h-3 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-display font-black text-cyan-300">
                      +{Math.round(intensity * 0.51)}%
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#040612] border border-white/[0.06] space-y-1">
                    <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
                      <span>ORS Requirement</span>
                      <Activity className="w-3 h-3 text-purple-400" />
                    </div>
                    <div className="text-2xl font-display font-black text-purple-300">
                      +{Math.round(intensity * 1.45)}%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Run Emergency Simulation Button */}
            <div className="pt-4">
              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-600 via-purple-600 to-rose-700 hover:from-rose-500 hover:to-purple-500 text-white font-display font-bold text-xs flex items-center justify-center gap-3 shadow-xl shadow-rose-950/60 transition-all cursor-pointer disabled:opacity-50 group"
              >
                {isRunning ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Computing Monte Carlo Scenarios...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>Run Emergency Simulation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Side (7 Cols): AI Response Plan */}
          <div className="lg:col-span-7 rounded-3xl bg-[#080a18]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white uppercase tracking-wider">
                      AI Response Plan
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">Autonomous 5-Tier Readiness Protocol</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  Ready for Dispatch
                </span>
              </div>

              {/* 5 Response Steps */}
              <div className="space-y-3">
                {steps.map((step) => (
                  <div
                    key={step.num}
                    className="p-4 rounded-2xl bg-[#040612] border border-white/[0.06] hover:border-purple-500/40 transition-all flex items-start gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 font-mono font-bold text-xs shrink-0 group-hover:scale-105 transition-transform">
                      {step.num}
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-display font-bold text-white group-hover:text-purple-200 transition-colors">
                        {step.title}
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulation Feedback Alert */}
            {simulationComplete && (
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-xs font-mono text-emerald-300 flex items-center gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <strong>Simulation S-2026-DENGUE-01 Executed:</strong> Optimal containment window identified within 36 hours. Deficit buffer successfully contained.
                </div>
              </div>
            )}

            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Epidemic Model: SIR-Neural Transformer</span>
              <span className="text-purple-300 font-semibold">SLA Response: 4.8 Minutes</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
