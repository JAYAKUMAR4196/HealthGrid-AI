import React from 'react';
import { 
  Brain, 
  Layers, 
  Sparkles, 
  Cloud, 
  Database, 
  Radio, 
  KeyRound, 
  Shield, 
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import { TECH_ITEMS } from '../data/hackathonData';

export const TechStack: React.FC = () => {
  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return Brain;
      case 'Layers':
        return Layers;
      case 'Sparkles':
        return Sparkles;
      case 'Cloud':
        return Cloud;
      case 'Database':
        return Database;
      case 'Radio':
        return Radio;
      case 'KeyRound':
        return KeyRound;
      case 'Shield':
        return Shield;
      default:
        return Cpu;
    }
  };

  return (
    <section id="technology" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#05070e] overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] glow-purple opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] glow-blue opacity-25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
              <Cpu className="w-3.5 h-3.5 text-cyan-300" />
              <span>THE ARCHITECTURAL CORE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              State-of-the-Art Technology Pillars
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide access to sovereign GPU compute, edge testbeds, proprietary vector indices, and cryptographic verification suites.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Powered by</span>
            <span className="text-white font-bold px-2.5 py-1 rounded bg-white/[0.05] border border-white/10">
              NVIDIA H100 SXM5 Clusters
            </span>
          </div>
        </div>

        {/* 8 Floating Technology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_ITEMS.map((tech, index) => {
            const IconComp = getTechIcon(tech.iconName);

            return (
              <div
                key={tech.id}
                style={{
                  animationDelay: `${tech.floatingDelay}s`,
                }}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#090d18]/80 border border-white/[0.08] hover:border-blue-500/40 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden animate-subtle-float"
              >
                {/* Accent Background Glow On Hover */}
                <div className={`absolute -right-12 -top-12 w-28 h-28 rounded-full bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-blue-500/40 flex items-center justify-center transition-colors">
                      <IconComp className="w-5 h-5 text-cyan-300 group-hover:scale-110 transition-transform" />
                    </div>
                    
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-semibold mb-1">
                    {tech.category}
                  </div>

                  <h3 className="text-base font-display font-bold text-white group-hover:text-blue-200 transition-colors mb-2">
                    {tech.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-cyan-300">
                    {tech.highlightStat}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
