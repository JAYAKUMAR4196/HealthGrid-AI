import React, { useEffect, useState, useRef } from 'react';
import { Target, Users, Globe, HeartHandshake, TrendingUp, Sparkles } from 'lucide-react';

interface StatItem {
  target: number;
  label: string;
  suffix: string;
  subtext: string;
  icon: React.ElementType;
  gradient: string;
  isDecimal?: boolean;
}

export const Stats: React.FC = () => {
  const [hasTriggered, setHasTriggered] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const statsConfig: StatItem[] = [
    {
      target: 124,
      label: '100+ Challenges',
      suffix: '+',
      subtext: 'High-impact problem briefs from verified NGOs & research labs',
      icon: Target,
      gradient: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400',
    },
    {
      target: 580,
      label: '500+ Teams',
      suffix: '+',
      subtext: 'Interdisciplinary AI engineers, bioinformaticians & scientists',
      icon: Users,
      gradient: 'from-indigo-500/20 to-purple-500/10 border-indigo-500/30 text-indigo-400',
    },
    {
      target: 54,
      label: '50+ Countries',
      suffix: '',
      subtext: 'Global decentralized development nodes across all continents',
      icon: Globe,
      gradient: 'from-violet-500/20 to-pink-500/10 border-violet-500/30 text-violet-400',
    },
    {
      target: 1.2,
      label: '1M+ Lives Impacted',
      suffix: 'M+',
      isDecimal: true,
      subtext: 'Through verified, field-deployed production pilots and tools',
      icon: HeartHandshake,
      gradient: 'from-cyan-500/20 to-emerald-500/10 border-cyan-500/30 text-cyan-400',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasTriggered]);

  useEffect(() => {
    if (!hasTriggered) return;

    const duration = 1800; // ms
    const steps = 60;
    const intervalTime = duration / steps;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts(
        statsConfig.map((item) => {
          if (item.isDecimal) {
            return parseFloat((item.target * ease).toFixed(1));
          }
          return Math.floor(item.target * ease);
        })
      );

      if (step >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [hasTriggered]);

  return (
    <section ref={sectionRef} className="relative py-16 px-4 sm:px-6 lg:px-8 border-y border-white/[0.06] bg-[#05070c]">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 glow-blue opacity-30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsConfig.map((stat, idx) => {
            const IconComponent = stat.icon;
            const currentVal = counts[idx];

            return (
              <div
                key={stat.label}
                className="relative group rounded-2xl bg-[#090d18]/70 border border-white/[0.08] hover:border-blue-500/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
              >
                {/* Accent top gradient line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start justify-between">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.gradient} border flex items-center justify-center`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-md">
                    <TrendingUp className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>

                <div className="mt-5 space-y-1.5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight tabular-nums">
                      {stat.isDecimal ? currentVal.toFixed(1) : currentVal}
                    </span>
                    <span className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                      {stat.suffix}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-slate-200">
                    {stat.label}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {stat.subtext}
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
