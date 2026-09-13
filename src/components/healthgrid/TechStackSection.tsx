import React from 'react';
import { 
  Brain, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  Cloud, 
  Radio, 
  Globe, 
  Lock,
  Sparkles,
  Layers
} from 'lucide-react';
import { TECH_CARDS } from '../../data/healthGridData';

export const TechStackSection: React.FC = () => {
  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return Brain;
      case 'Cpu':
        return Cpu;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'TrendingUp':
        return TrendingUp;
      case 'Cloud':
        return Cloud;
      case 'Radio':
        return Radio;
      case 'Globe':
        return Globe;
      default:
        return Lock;
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#030611] overflow-hidden border-t border-white/[0.06]">
      
      {/* Background illumination */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <Layers className="w-3.5 h-3.5 text-cyan-300" />
            <span>CORE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Powered by Intelligent Infrastructure
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            High-assurance computational stack built for resilient healthcare operations, edge inference, and cryptographic sovereignty.
          </p>
        </div>

        {/* 8 Compact Futuristic Technology Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TECH_CARDS.map((card, idx) => {
            const Icon = getTechIcon(card.icon);

            return (
              <div
                key={card.name}
                className="group rounded-2xl bg-[#080d21]/90 border border-white/[0.08] hover:border-cyan-400/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/40 flex items-start gap-4"
              >
                {/* Minimal Glowing Icon */}
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-all shadow-md">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-1 min-w-0">
                  <h3 className="text-sm font-display font-bold text-white group-hover:text-cyan-200 transition-colors truncate">
                    {card.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-snug font-sans">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
