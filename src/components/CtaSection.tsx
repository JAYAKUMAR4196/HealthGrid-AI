import React from 'react';
import { ArrowRight, Sparkles, Shield, Cpu, Award } from 'lucide-react';
import { PARTNER_LOGOS } from '../data/hackathonData';

interface CtaSectionProps {
  onOpenJoinModal: () => void;
  onExploreChallenges: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ 
  onOpenJoinModal, 
  onExploreChallenges 
}) => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#04060c]">
      {/* Intense Glowing Radial Gradient Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] glow-blue opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] glow-purple opacity-35 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center space-y-10">
        
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-400/40 text-blue-200 text-xs font-mono font-bold shadow-lg shadow-blue-500/20">
          <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse" />
          <span>COHORT 2026 APPLICATIONS OPEN</span>
        </div>

        {/* Big Headline */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tight leading-[1.1]">
            Ready to Build the Future?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Turn your ideas into intelligent solutions that create measurable real-world impact. Unlock subsidized GPU clusters, verified datasets, and non-dilutive pilot funding.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold text-sm flex items-center justify-center gap-3 shadow-2xl shadow-blue-600/40 hover:shadow-blue-500/60 transition-all cursor-pointer group"
          >
            <span>Start Building Today</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreChallenges}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0c1222] hover:bg-[#131a30] border border-white/10 hover:border-blue-500/40 text-slate-200 hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore All 100+ Challenges</span>
          </button>
        </div>

        {/* Backed By & Partner Organizations Strip */}
        <div className="pt-12 border-t border-white/[0.08] space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Backed by Sovereign Research Labs & Global Humanitarian Funds
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {PARTNER_LOGOS.map((partner) => (
              <div
                key={partner.name}
                className="px-3.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                <span className="font-bold">{partner.name}</span>
                <span className="text-[9px] text-slate-500 block">{partner.tag}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
