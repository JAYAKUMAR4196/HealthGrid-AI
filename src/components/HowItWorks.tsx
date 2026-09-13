import React from 'react';
import { 
  Compass, 
  Cpu, 
  ShieldCheck, 
  Rocket, 
  ArrowRight, 
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/hackathonData';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return Compass;
      case 'Cpu':
        return Cpu;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Rocket':
        return Rocket;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="how-it-works" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#060912] overflow-hidden border-t border-white/[0.06]">
      {/* Background radial blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 glow-cyan opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 glow-purple opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-mono font-semibold">
            <Layers className="w-3.5 h-3.5 text-cyan-300" />
            <span>THE INNOVATION ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            How ImpactX Operates
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A structured, 4-stage pipeline turning complex research codebases into scalable, audited production software with non-dilutive capital and global distribution.
          </p>
        </div>

        {/* 4-Step Timeline Container */}
        <div className="relative">
          
          {/* Connecting Line across Desktop (Hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 -translate-y-12 bg-gradient-to-r from-blue-500/30 via-indigo-500/40 to-cyan-500/30 z-0 pointer-events-none" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const IconComp = getStepIcon(step.iconName);

              return (
                <div
                  key={step.stepNumber}
                  className="group relative flex flex-col justify-between rounded-2xl bg-[#090d18]/80 border border-white/[0.08] hover:border-blue-500/40 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {/* Glowing Top Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-violet-600/30 border border-blue-500/40 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6 text-cyan-300" />
                    </div>

                    <span className="text-2xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/10 group-hover:from-cyan-300 group-hover:to-blue-400 transition-colors">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="space-y-2.5">
                    <div className="text-[10px] font-mono font-bold tracking-wider text-blue-400 uppercase">
                      {step.badge}
                    </div>

                    <h3 className="text-lg font-display font-bold text-white group-hover:text-blue-200 transition-colors">
                      {step.title}
                    </h3>

                    <div className="text-xs font-semibold text-cyan-300">
                      {step.shortDesc}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed pt-1">
                      {step.detail}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Phase 0{idx + 1}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" />
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
