import React from 'react';
import { 
  TrendingDown, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Zap
} from 'lucide-react';
import { IMPACT_METRICS } from '../../data/healthGridData';

export const ImpactSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#030611] overflow-hidden border-t border-white/[0.06]">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>REAL-TIME RESILIENCE TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Resilience. Measured in Real Time.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Quantifiable public health resilience metrics across primary healthcare networks and emergency supply lines.
          </p>
        </div>

        {/* 4 Large Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_METRICS.map((metric, idx) => {
            const isNegative = metric.value.includes('−');

            return (
              <div
                key={metric.id}
                className="group relative rounded-3xl bg-[#070c1d]/90 border border-cyan-500/20 hover:border-cyan-400/50 backdrop-blur-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/50 flex flex-col justify-between space-y-6 overflow-hidden"
              >
                {/* Subtle corner glow */}
                <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-cyan-500/10 blur-xl group-hover:bg-cyan-500/20 transition-colors" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shadow-md group-hover:scale-105 transition-transform">
                      {isNegative ? (
                        <ArrowDownRight className="w-6 h-6 text-cyan-400 animate-pulse" />
                      ) : (
                        <ArrowUpRight className="w-6 h-6 text-emerald-400 animate-pulse" />
                      )}
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-400 border border-white/10">
                      Metric 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                      {metric.value}
                    </div>
                    <div className="text-base font-display font-bold text-cyan-300">
                      {metric.label}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {metric.subtext}
                  </p>
                </div>

                {/* Subtle Animated Micro Visualization */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between relative z-10">
                  <div className="h-1.5 w-24 rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${metric.color} animate-pulse`}
                      style={{ width: `${80 + idx * 5}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">
                    Validated Active
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
