import React from 'react';
import { Star, Quote, Award, Sparkles, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/hackathonData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#05070d] overflow-hidden border-t border-white/[0.06]">
      {/* Background radial ambiance */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] glow-purple opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] glow-blue opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-pink-300" />
            <span>VOICES OF THE COLLECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Built by Engineers, Backed by Science
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Hear from the fellows, researchers, and global sponsors who turned ambitious algorithmic architectures into field-tested reality through ImpactX.
          </p>
        </div>

        {/* Testimonials 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#090e1b]/80 border border-white/[0.08] hover:border-blue-500/40 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Top Quote Icon & Stars */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-600 group-hover:text-blue-400/60 transition-colors" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Card Bottom: Author Info & Impact Indicator */}
              <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                
                {/* Verified Impact Pill */}
                <div className="px-2.5 py-1 rounded-lg bg-blue-950/40 border border-blue-500/30 text-[10px] font-mono text-cyan-300 flex items-center justify-between">
                  <span>Impact:</span>
                  <strong className="text-white">{t.impactIndicator}</strong>
                </div>

                {/* Profile Avatar & Details */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                  />
                  <div className="overflow-hidden">
                    <div className="text-xs font-display font-bold text-white flex items-center gap-1">
                      <span className="truncate">{t.name}</span>
                      <CheckCircle className="w-3 h-3 text-cyan-400 shrink-0" />
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">{t.role}</div>
                    <div className="text-[10px] font-mono text-blue-300 truncate">{t.organization}</div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
