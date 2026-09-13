import React from 'react';
import { 
  Boxes, 
  TrendingUp, 
  AlertTriangle, 
  Sparkles, 
  ArrowRight, 
  ShieldAlert, 
  Activity,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip,
  Legend 
} from 'recharts';
import { 
  SUPPLY_CHAIN_INVENTORY, 
  DEMAND_FORECAST_DATA 
} from '../../data/healthGridData';

interface SupplyChainSectionProps {
  onViewRiskAnalysis?: () => void;
}

export const SupplyChainSection: React.FC<SupplyChainSectionProps> = ({
  onViewRiskAnalysis
}) => {
  return (
    <section id="supply-chain" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#030611] overflow-hidden border-t border-white/[0.06]">
      
      {/* Background glow backdrops */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <Boxes className="w-3.5 h-3.5 text-cyan-300" />
            <span>AUTONOMOUS PHARMACEUTICAL RESILIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            AI Supply Chain Intelligence
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Know what you have. Predict what you need. Move resources before shortages occur.
          </p>
        </div>

        {/* 3 Premium Glass Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CARD 1: INVENTORY OVERVIEW */}
          <div className="rounded-3xl bg-[#080d21]/90 border border-cyan-500/30 p-6 sm:p-7 backdrop-blur-2xl shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                    <Boxes className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white uppercase tracking-wider">
                      Inventory Overview
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">Essential Drug List (EDL)</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-cyan-300 border border-white/10">
                  Regional Depot
                </span>
              </div>

              {/* Progress Bars for each medicine */}
              <div className="space-y-4 pt-1">
                {SUPPLY_CHAIN_INVENTORY.map((item) => (
                  <div key={item.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-200 font-semibold">{item.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 text-[11px]">{item.quantity}</span>
                        <span className={`font-bold ${item.color}`}>
                          {item.percentage}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden p-0.5 border border-white/[0.04]">
                      <div
                        style={{ width: `${item.percentage}%` }}
                        className={`h-full rounded-full ${item.barColor} transition-all duration-700`}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>Target: {item.target}</span>
                      <span className={item.color}>{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Overall Stock Buffer: 74.2%</span>
              <span className="text-cyan-400 font-bold">Auto-Monitored</span>
            </div>

          </div>

          {/* CARD 2: AI DEMAND FORECAST */}
          <div className="rounded-3xl bg-[#080d21]/90 border border-cyan-500/30 p-6 sm:p-7 backdrop-blur-2xl shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/20 border border-violet-400/40 flex items-center justify-center text-violet-300">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white uppercase tracking-wider">
                      AI Demand Forecast
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">Next 30 Days Trajectory</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-950/60 border border-violet-500/40 text-violet-300 font-bold">
                  94% Conf.
                </span>
              </div>

              {/* Chart Legend */}
              <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono pt-1">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-2.5 h-1 rounded bg-slate-400" /> Historical
                </span>
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <span className="w-2.5 h-1 rounded bg-cyan-400" /> Predicted Demand
                </span>
                <span className="flex items-center gap-1.5 text-rose-300">
                  <span className="w-2.5 h-1 rounded bg-rose-400" /> Emergency Surge
                </span>
              </div>

              {/* Glowing Recharts Area Chart */}
              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={DEMAND_FORECAST_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="predGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.0} />
                      </linearGradient>
                      <linearGradient id="emergGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="day" stroke="#475569" fontSize={10} tickLine={false} />
                    <YAxis stroke="#475569" fontSize={10} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#090e21', 
                        borderColor: '#22d3ee', 
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontFamily: 'monospace'
                      }} 
                    />
                    <Area type="monotone" dataKey="historical" stroke="#94a3b8" strokeWidth={2} fill="none" />
                    <Area type="monotone" dataKey="predicted" stroke="#00f0ff" strokeWidth={2.5} fill="url(#predGrad)" />
                    <Area type="monotone" dataKey="emergency" stroke="#f43f5e" strokeWidth={2} strokeDasharray="3,3" fill="url(#emergGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Small Confidence Badge */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400">Model: Transformer Ensemble v4</span>
              <span className="text-cyan-300 font-bold">AI Forecast Confidence: 94%</span>
            </div>

          </div>

          {/* CARD 3: STOCK-OUT RISK */}
          <div className="rounded-3xl bg-[#080d21]/90 border border-rose-500/30 p-6 sm:p-7 backdrop-blur-2xl shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white uppercase tracking-wider">
                      Stock-Out Risk
                    </h3>
                    <p className="text-[11px] font-mono text-rose-300/80">Hazard Warning Level</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950/70 border border-rose-500/50 text-rose-300 font-bold">
                  ELEVATED
                </span>
              </div>

              {/* Large Circular Percentage Gauge */}
              <div className="flex flex-col items-center justify-center py-2 space-y-2">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#1e293b"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#riskGradient)"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={251.2}
                      strokeDashoffset={251.2 * (1 - 0.87)}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="riskGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#ef4444" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Gauge Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-display font-black text-white">
                      87%
                    </span>
                    <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wide">
                      High Risk
                    </span>
                  </div>
                </div>
              </div>

              {/* Risk Details */}
              <div className="grid grid-cols-2 gap-3 p-3 rounded-2xl bg-[#040816] border border-white/[0.06] text-center">
                <div>
                  <div className="text-[10px] font-mono text-slate-400">Expected Stock-Out</div>
                  <div className="text-lg font-display font-black text-rose-400 mt-0.5">4 Days</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">Affected PHCs</div>
                  <div className="text-lg font-display font-black text-amber-300 mt-0.5">38 PHCs</div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={onViewRiskAnalysis}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-rose-600 via-amber-600 to-rose-700 hover:from-rose-500 hover:to-amber-500 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-rose-950/50 transition-all cursor-pointer group"
            >
              <span>View Risk Analysis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
