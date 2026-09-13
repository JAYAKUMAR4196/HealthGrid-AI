import React, { useState } from 'react';
import { 
  BarChart3, 
  Activity, 
  Globe2, 
  TrendingUp, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Radio
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';
import { 
  DASHBOARD_METRICS, 
  IMPACT_TREND_DATA, 
  REGIONAL_DISTRIBUTION 
} from '../data/hackathonData';

export const ImpactDashboardPreview: React.FC = () => {
  const [metricTab, setMetricTab] = useState<'users' | 'pilots'>('users');

  const activityFeed = [
    { time: '2m ago', event: 'BioSentinel telemetry node synced 4,200 reads in Mumbai Sector 4', status: 'Optimal' },
    { time: '7m ago', event: 'AeroCarbon detected & alerted 142 kg/hr methane plume in Texas Basin', status: 'Alert Sent' },
    { time: '14m ago', event: 'CogniLearn deployed quantized GGUF v2 model to 420 schools in Kenya', status: 'Deployed' },
    { time: '21m ago', event: 'VeriCredit verified 1,840 zero-knowledge farmer credit proofs', status: 'Verified' },
  ];

  return (
    <section id="dashboard" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#060810] overflow-hidden border-t border-white/[0.06]">
      {/* Background glow ambiance */}
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] glow-blue opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] glow-cyan opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-mono font-semibold">
              <Activity className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
              <span>LIVE TELEMETRY & OBSERVABILITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Real-World Impact Dashboard
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Transparent, real-time observability into active hackathon cohorts, deployed algorithmic weights, and verified humanitarian impact metrics.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Streaming live from 54 decentralized nodes</span>
          </div>
        </div>

        {/* 4 Metric Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DASHBOARD_METRICS.map((metric) => (
            <div
              key={metric.title}
              className="rounded-2xl bg-[#090e1b]/80 border border-white/[0.08] p-5 backdrop-blur-xl shadow-lg"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                <span>{metric.title}</span>
                <span className="text-emerald-400 font-semibold">{metric.change}</span>
              </div>
              <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Big Futuristic Dashboard Grid (Chart + Regional Distribution) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left 8 Cols: Interactive Area Chart */}
          <div className="lg:col-span-8 rounded-3xl bg-[#080c18]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl flex flex-col justify-between">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-4 mb-6">
              <div>
                <h3 className="text-lg font-display font-bold text-white">
                  Cumulative Field Impact & Adoption Trajectory
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Verified end-users reached across deployed hackathon solutions
                </p>
              </div>

              <div className="flex items-center gap-2 bg-[#040711] p-1 rounded-xl border border-white/10 text-xs font-mono">
                <button
                  onClick={() => setMetricTab('users')}
                  className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                    metricTab === 'users'
                      ? 'bg-blue-600 text-white font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Lives Reached (k)
                </button>
                <button
                  onClick={() => setMetricTab('pilots')}
                  className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                    metricTab === 'pilots'
                      ? 'bg-blue-600 text-white font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Active Pilots
                </button>
              </div>
            </div>

            {/* Recharts Area Chart */}
            <div className="h-64 sm:h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={IMPACT_TREND_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="impactGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="pilotGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="month" 
                    stroke="#475569" 
                    fontSize={11} 
                    tickLine={false} 
                    axisLine={{ stroke: '#334155' }} 
                  />
                  <YAxis 
                    stroke="#475569" 
                    fontSize={11} 
                    tickLine={false} 
                    axisLine={{ stroke: '#334155' }} 
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#090e1c', 
                      borderColor: '#3b82f6', 
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '12px',
                      fontFamily: 'monospace'
                    }} 
                  />
                  <Area
                    type="monotone"
                    dataKey={metricTab === 'users' ? 'impactUsers' : 'pilots'}
                    stroke={metricTab === 'users' ? '#3b82f6' : '#06b6d4'}
                    strokeWidth={3}
                    fillOpacity={1}
                    fill={metricTab === 'users' ? 'url(#impactGradient)' : 'url(#pilotGradient)'}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Bottom Chart Footer Stats */}
            <div className="pt-6 border-t border-white/[0.08] mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="text-[10px] font-mono text-slate-400">Mean Time to Deployment</span>
                <div className="text-sm font-bold font-mono text-white mt-0.5">31.4 Days</div>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400">Algorithmic Reliability</span>
                <div className="text-sm font-bold font-mono text-cyan-300 mt-0.5">99.82%</div>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400">Model Efficiency Gain</span>
                <div className="text-sm font-bold font-mono text-emerald-400 mt-0.5">4.2x Faster</div>
              </div>
            </div>

          </div>

          {/* Right 4 Cols: Geographic Distribution & Activity Feed */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Geographic Distribution Card */}
            <div className="rounded-3xl bg-[#080c18]/90 border border-white/10 p-6 backdrop-blur-2xl shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-cyan-300" />
                  <span className="font-display font-bold text-sm text-white">Geographic Distribution</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">54 Nations</span>
              </div>

              <div className="space-y-3">
                {REGIONAL_DISTRIBUTION.map((reg) => (
                  <div key={reg.region} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-300">{reg.region}</span>
                      <span className="text-cyan-300 font-bold">{reg.count}</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        style={{ width: `${reg.percentage * 2}%` }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Telemetry Activity Feed */}
            <div className="rounded-3xl bg-[#080c18]/90 border border-white/10 p-6 backdrop-blur-2xl shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span className="font-display font-bold text-sm text-white">Live Event Stream</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800">
                  REAL-TIME
                </span>
              </div>

              <div className="space-y-3">
                {activityFeed.map((act, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs space-y-1">
                    <div className="flex items-center justify-between font-mono text-[10px] text-slate-400">
                      <span>{act.time}</span>
                      <span className="text-cyan-300 font-semibold">{act.status}</span>
                    </div>
                    <p className="text-slate-200 font-sans text-[11px] leading-snug">
                      {act.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
