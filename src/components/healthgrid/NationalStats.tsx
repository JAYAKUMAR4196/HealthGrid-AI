import React from 'react';
import { 
  Activity, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  ArrowUpRight 
} from 'lucide-react';
import { NATIONAL_STATS } from '../../data/healthGridData';

export const NationalStats: React.FC = () => {
  const getStatIcon = (id: string) => {
    switch (id) {
      case 'phcs':
        return Activity;
      case 'patients':
        return Users;
      case 'availability':
        return ShieldCheck;
      default:
        return Sparkles;
    }
  };

  return (
    <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-[#030611] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NATIONAL_STATS.map((stat, idx) => {
            const Icon = getStatIcon(stat.id);

            return (
              <div
                key={stat.id}
                className="group relative rounded-2xl bg-[#080d1e]/80 border border-cyan-500/20 hover:border-cyan-400/50 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden"
              >
                {/* Subtle Ambient Card Glow */}
                <div className={`absolute -right-10 -top-10 w-28 h-28 rounded-full bg-gradient-to-br ${stat.glowColor} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />

                <div className="flex items-center justify-between mb-4">
                  {/* Glowing Circular Icon */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent border border-cyan-400/30 flex items-center justify-center text-cyan-300 shadow-md shadow-cyan-500/10 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Trend Indicator */}
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    <TrendingUp className="w-3 h-3" />
                    <span>{stat.trend}</span>
                  </div>
                </div>

                {/* Big Metric Value */}
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono font-bold text-cyan-300">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {stat.subtext}
                  </div>
                </div>

                {/* Minimal Micro-Chart (Sparkline SVG) */}
                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-end justify-between">
                  <div className="h-6 w-32">
                    <svg viewBox="0 0 100 24" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id={`grad-${stat.id}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d={`M 0,${24 - (stat.sparkline[0] / 100) * 20} 
                            L 16,${24 - (stat.sparkline[1] / 100) * 20} 
                            L 32,${24 - (stat.sparkline[2] / 100) * 20} 
                            L 48,${24 - (stat.sparkline[3] / 100) * 20} 
                            L 64,${24 - (stat.sparkline[4] / 100) * 20} 
                            L 80,${24 - (stat.sparkline[5] / 100) * 20} 
                            L 100,${24 - (stat.sparkline[6] / 100) * 20}`}
                        fill="none"
                        stroke="#22d3ee"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="100"
                        cy={24 - (stat.sparkline[6] / 100) * 20}
                        r="3"
                        fill="#00f0ff"
                        className="animate-ping"
                      />
                      <circle
                        cx="100"
                        cy={24 - (stat.sparkline[6] / 100) * 20}
                        r="2"
                        fill="#ffffff"
                      />
                    </svg>
                  </div>

                  <span className="text-[10px] font-mono text-slate-500">Live 24h</span>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
