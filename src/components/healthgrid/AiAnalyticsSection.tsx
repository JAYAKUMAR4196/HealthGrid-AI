import React from 'react';
import { 
  BarChart3, 
  Activity, 
  Users, 
  TrendingUp, 
  Cpu, 
  Layers, 
  Flame, 
  CheckCircle2, 
  Sparkles,
  PieChart
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';
import { 
  ANALYTICS_FOOTFALL_DATA, 
  ANALYTICS_DEMAND_BARS 
} from '../../data/healthGridData';

export const AiAnalyticsSection: React.FC = () => {
  const staffCategories = [
    { role: 'Clinical Medical Officers', percent: 84, active: '1,420 / 1,690', color: 'bg-gradient-to-r from-cyan-400 to-blue-500' },
    { role: 'Staff Nurses & Midwives', percent: 78, active: '3,840 / 4,920', color: 'bg-gradient-to-r from-blue-400 to-indigo-500' },
    { role: 'Pharmacists & Lab Techs', percent: 91, active: '1,210 / 1,330', color: 'bg-gradient-to-r from-emerald-400 to-teal-500' },
    { role: 'ASHA Field Health Workers', percent: 96, active: '11,200 / 11,600', color: 'bg-gradient-to-r from-violet-400 to-purple-500' },
  ];

  const riskHeatmapDistricts = [
    { name: 'Warangal', level: 'Critical', color: 'bg-rose-500/80 text-white' },
    { name: 'Karimnagar', level: 'Risk', color: 'bg-amber-500/80 text-black' },
    { name: 'Nalgonda', level: 'Risk', color: 'bg-amber-500/80 text-black' },
    { name: 'Hyderabad', level: 'Stable', color: 'bg-emerald-500/80 text-black' },
    { name: 'Medak', level: 'Watch', color: 'bg-yellow-500/80 text-black' },
    { name: 'Khammam', level: 'Watch', color: 'bg-yellow-500/80 text-black' },
    { name: 'Rangareddy', level: 'Stable', color: 'bg-emerald-500/80 text-black' },
    { name: 'Nizamabad', level: 'Stable', color: 'bg-emerald-500/80 text-black' },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#040714] overflow-hidden border-t border-white/[0.06]">
      
      {/* Glow Ambience */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <BarChart3 className="w-3.5 h-3.5 text-cyan-300" />
            <span>CROSS-DIMENSIONAL OBSERVABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Real-Time Health Intelligence
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Multivariate synthesis across patient footfalls, pharmaceutical demand, clinical staffing, and regional risk heatmaps.
          </p>
        </div>

        {/* Small Resource Utilization KPI Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#080d21]/90 border border-white/[0.08] backdrop-blur-xl">
            <div className="text-[10px] font-mono text-slate-400">Total Bed Occupancy</div>
            <div className="text-2xl font-display font-black text-white mt-1">68.4%</div>
            <div className="text-[10px] font-mono text-cyan-300 mt-0.5">22,840 Free Beds</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#080d21]/90 border border-white/[0.08] backdrop-blur-xl">
            <div className="text-[10px] font-mono text-slate-400">Cold-Chain Compliance</div>
            <div className="text-2xl font-display font-black text-emerald-400 mt-1">99.7%</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">2.0°C to 8.0°C Safe</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#080d21]/90 border border-white/[0.08] backdrop-blur-xl">
            <div className="text-[10px] font-mono text-slate-400">Daily Stock Transfers</div>
            <div className="text-2xl font-display font-black text-cyan-300 mt-1">42 Routes</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">Automated Dispatches</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#080d21]/90 border border-white/[0.08] backdrop-blur-xl">
            <div className="text-[10px] font-mono text-slate-400">Syndromic Alert Rate</div>
            <div className="text-2xl font-display font-black text-purple-300 mt-1">&lt; 0.04%</div>
            <div className="text-[10px] font-mono text-emerald-400 mt-0.5">False Positive Margin</div>
          </div>
        </div>

        {/* Analytics Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Item 1: Patient Footfall Line Chart (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#080d21]/90 border border-cyan-500/30 p-6 sm:p-7 backdrop-blur-2xl shadow-xl flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div>
                <h3 className="text-base font-display font-bold text-white">Patient Footfall Trajectory</h3>
                <p className="text-[11px] font-mono text-slate-400">Hourly patient influx versus nominal capacity (200)</p>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-bold">
                TODAY
              </span>
            </div>

            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ANALYTICS_FOOTFALL_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="time" stroke="#475569" fontSize={10} tickLine={false} />
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
                  <Line type="monotone" dataKey="footfall" stroke="#22d3ee" strokeWidth={3} dot={{ fill: '#00f0ff', r: 4 }} />
                  <Line type="monotone" dataKey="capacity" stroke="#ef4444" strokeDasharray="4,4" strokeWidth={1.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-white/[0.06]">
              <span>Peak Footfall: 428 patients at 12:00</span>
              <span className="text-cyan-300 font-semibold">Triaging Latency: 6.4 mins</span>
            </div>
          </div>

          {/* Item 2: Medicine Demand Bar Chart (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#080d21]/90 border border-cyan-500/30 p-6 sm:p-7 backdrop-blur-2xl shadow-xl flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div>
                <h3 className="text-base font-display font-bold text-white">Medicine Demand & Fulfillment</h3>
                <p className="text-[11px] font-mono text-slate-400">% target supply currently on-hand</p>
              </div>
              <span className="text-[10px] font-mono text-slate-400">Target: 100%</span>
            </div>

            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ANALYTICS_DEMAND_BARS} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="#475569" fontSize={9} tickLine={false} />
                  <YAxis stroke="#475569" fontSize={10} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#090e21', 
                      borderColor: '#38bdf8', 
                      borderRadius: '12px',
                      fontSize: '11px',
                      fontFamily: 'monospace'
                    }} 
                  />
                  <Bar dataKey="actual" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-white/[0.06]">
              <span>Antibiotics at critical (38%)</span>
              <span className="text-rose-400 font-bold">Transfer in Transit</span>
            </div>
          </div>

          {/* Item 3: PHC Capacity Circular Percentage Chart (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-[#080d21]/90 border border-white/10 p-6 backdrop-blur-2xl shadow-xl flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <h3 className="text-base font-display font-bold text-white">PHC Capacity Utilization</h3>
              <PieChart className="w-4 h-4 text-cyan-300" />
            </div>

            <div className="flex flex-col items-center justify-center py-4">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="#1e293b" strokeWidth="8" fill="transparent" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#00f0ff"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 * (1 - 0.72)}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-display font-black text-white">72%</span>
                  <span className="text-[10px] font-mono text-cyan-300 uppercase">Optimal Load</span>
                </div>
              </div>
            </div>

            <div className="text-center text-xs font-mono text-slate-400 border-t border-white/[0.06] pt-3">
              8,987 of 12,482 PHCs in Optimal Zone
            </div>
          </div>

          {/* Item 4: Staff Availability Horizontal Progress Bars (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-[#080d21]/90 border border-white/10 p-6 backdrop-blur-2xl shadow-xl flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <h3 className="text-base font-display font-bold text-white">Staff Availability</h3>
              <Users className="w-4 h-4 text-purple-300" />
            </div>

            <div className="space-y-3 pt-1">
              {staffCategories.map((st) => (
                <div key={st.role} className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-200">{st.role}</span>
                    <span className="text-white font-bold">{st.percent}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div style={{ width: `${st.percent}%` }} className={`h-full rounded-full ${st.color}`} />
                  </div>
                  <div className="text-[9px] font-mono text-slate-500">{st.active} Active on Duty</div>
                </div>
              ))}
            </div>

            <div className="text-xs font-mono text-slate-400 border-t border-white/[0.06] pt-3 flex justify-between">
              <span>Roster Attendance: 87.2%</span>
              <span className="text-emerald-400 font-bold">Stable</span>
            </div>
          </div>

          {/* Item 5: Emergency Risk Heatmap Grid (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-[#080d21]/90 border border-white/10 p-6 backdrop-blur-2xl shadow-xl flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <h3 className="text-base font-display font-bold text-white">District Risk Heatmap</h3>
              <Flame className="w-4 h-4 text-rose-400" />
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {riskHeatmapDistricts.map((dist) => (
                <div
                  key={dist.name}
                  className="p-2.5 rounded-xl bg-[#050817] border border-white/[0.06] flex items-center justify-between font-mono text-xs"
                >
                  <span className="text-slate-200 text-[11px] truncate">{dist.name}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${dist.color}`}>
                    {dist.level}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-xs font-mono text-slate-400 border-t border-white/[0.06] pt-3 flex justify-between">
              <span>Highest Vulnerability: Warangal</span>
              <span className="text-rose-400 font-bold">High Alert</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
