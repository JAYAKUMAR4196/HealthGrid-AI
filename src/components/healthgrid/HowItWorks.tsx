import React from 'react';
import { 
  Network, 
  TrendingUp, 
  Workflow, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../../data/healthGridData';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return Network;
      case 1:
        return TrendingUp;
      case 2:
        return Workflow;
      default:
        return ShieldAlert;
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#040714] overflow-hidden border-t border-white/[0.06]">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <Workflow className="w-3.5 h-3.5 text-cyan-300" />
            <span>OPERATIONAL TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Autonomous multi-tier orchestration from frontline clinic connectivity to preemptive logistics response.
          </p>
        </div>

        {/* Horizontal 4-Step Timeline with Connecting Luminous Line */}
        <div className="relative">
          
          {/* Connecting Luminous Line across desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 -translate-y-8 bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-violet-500/40 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = getStepIcon(idx);

              return (
                <div
                  key={step.step}
                  className="rounded-3xl bg-[#070c1f]/90 border border-cyan-500/20 hover:border-cyan-400/60 p-7 backdrop-blur-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-950/50 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    
                    {/* Glowing Circular Icon and Number */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-violet-600/20 border-2 border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 animate-pulse" />
                      </div>

                      <span className="text-3xl font-mono font-black text-cyan-400/50 group-hover:text-cyan-300 transition-colors">
                        {step.step}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-display font-extrabold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        {step.desc}
                      </p>
                    </div>

                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-cyan-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      Phase {step.step} Nominal
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
