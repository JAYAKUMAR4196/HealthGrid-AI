import React, { useState } from 'react';
import { useApp } from '../context/AppContext.js';
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  Activity, 
  Calendar, 
  Sparkles,
  Thermometer,
  Wind,
  Droplets,
  ArrowRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

export const PatientFootfall: React.FC = () => {
  const { facilities, districts, setActiveTab } = useApp();
  const [timeRange, setTimeRange] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  const [selectedDisease, setSelectedDisease] = useState<'ALL' | 'FEVER' | 'RESPIRATORY' | 'DIARRHOEAL'>('ALL');

  // Trend data comparing Footfall vs Paracetamol Burn Rate
  const trendData = [
    { day: 'Mon', footfall: 84200, baseline: 82000, feverCases: 14200, medicineBurn: 18500 },
    { day: 'Tue', footfall: 89600, baseline: 83000, feverCases: 16400, medicineBurn: 21200 },
    { day: 'Wed', footfall: 95400, baseline: 82500, feverCases: 19800, medicineBurn: 24800 },
    { day: 'Thu', footfall: 101200, baseline: 83500, feverCases: 23100, medicineBurn: 29400 },
    { day: 'Fri', footfall: 106800, baseline: 84000, feverCases: 27400, medicineBurn: 34100 },
    { day: 'Sat', footfall: 104500, baseline: 82000, feverCases: 26200, medicineBurn: 32600 },
    { day: 'Today (Sun)', footfall: 108420, baseline: 81000, feverCases: 28900, medicineBurn: 36200 },
  ];

  // Hotspot facilities with surge >20%
  const surgeFacilities = facilities
    .filter(f => f.patientSurgePct > 15)
    .sort((a, b) => b.patientSurgePct - a.patientSurgePct)
    .slice(0, 6);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-sky-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Patient Footfall Velocity & Outbreak Early Warning System
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Detects abnormal syndromic clusters (acute fever, respiratory, gastrointestinal) across 650 facilities. Automatically models correlated pharmaceutical burn velocity.
          </p>
        </div>

        <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setTimeRange('daily')}
            className={`px-3 py-1.5 rounded font-semibold transition-colors ${timeRange === 'daily' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            24 Hours
          </button>
          <button
            onClick={() => setTimeRange('weekly')}
            className={`px-3 py-1.5 rounded font-semibold transition-colors ${timeRange === 'weekly' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            7-Day Trend
          </button>
          <button
            onClick={() => setTimeRange('monthly')}
            className={`px-3 py-1.5 rounded font-semibold transition-colors ${timeRange === 'monthly' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            30 Days
          </button>
        </div>
      </div>

      {/* 3 Syndromic Cluster Early Warning Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <Thermometer className="w-4 h-4" /> Acute Febrile Illness
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-950 text-rose-300 border border-rose-800">
              SURGE +28.4%
            </span>
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            28,900 Cases Today
          </div>
          <p className="text-[11px] text-slate-400">
            Cluster concentrated in Nagarkurnool and Barabanki. Paracetamol consumption velocity: +34% above norm.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Wind className="w-4 h-4" /> Pediatric Respiratory
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-800">
              SURGE +16.2%
            </span>
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            14,850 Cases Today
          </div>
          <p className="text-[11px] text-slate-400">
            Elevated in Pune and Belagavi semi-urban CHCs. Salbutamol and Amoxicillin buffer drawdown accelerated.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
              <Droplets className="w-4 h-4" /> Diarrhoeal & Dehydration
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-950 text-sky-300 border border-sky-800">
              SURGE +21.5%
            </span>
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            18,200 Cases Today
          </div>
          <p className="text-[11px] text-slate-400">
            Acute waterborne cases post-monsoon runoff in 6 rural blocks. ORS sachet demand: 8,400 daily.
          </p>
        </div>
      </div>

      {/* Main Graph: Multi-Axis Correlation (Footfall vs Medicine Consumption) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-white tracking-tight">
              Patient Influx vs Antipyretic / Antibiotic Consumption Velocity
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              Correlation coefficient: r = 0.94 (Direct leading indicator for stock-out forecasting)
            </span>
          </div>

          <div className="text-xs text-slate-400 font-mono hidden sm:block">
            Current Outpatient Load: <strong className="text-sky-400">108,420 Patients</strong>
          </div>
        </div>

        <div className="h-72 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorFootfall" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.0}/>
                </linearGradient>
                <linearGradient id="colorBurn" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="day" stroke="#64748b" tick={{ fontSize: 11 }} />
              <YAxis stroke="#64748b" tick={{ fontSize: 11 }} />
              <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#1e293b', borderRadius: '8px', fontSize: '12px', color: '#f8fafc' }} />
              <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
              <Area type="monotone" dataKey="footfall" stroke="#38bdf8" strokeWidth={2} fillOpacity={1} fill="url(#colorFootfall)" name="Total Outpatient Footfall" />
              <Area type="monotone" dataKey="medicineBurn" stroke="#f43f5e" strokeWidth={2} fillOpacity={1} fill="url(#colorBurn)" name="Essential Medicine Units Dispensed" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Facilities Crossing Surge Thresholds (>20% above baseline) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold text-white tracking-tight">
              Healthcare Facilities Crossing Outpatient Surge Warning Thresholds
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            Automated Supply Buffer Adjustment: +15% Activated
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {surgeFacilities.map((fac) => (
            <div key={fac.id} className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white text-xs">{fac.name}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-rose-950 text-rose-300 border border-rose-800">
                  +{fac.patientSurgePct}% Surge
                </span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between">
                <span>District: {fac.district}</span>
                <span className="text-white font-bold">{fac.patientFootfallToday} patients/day</span>
              </div>
              <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800/80 flex items-center justify-between">
                <span>Beds: {fac.occupiedBeds}/{fac.totalBeds} ({Math.round(fac.occupiedBeds/fac.totalBeds*100)}%)</span>
                <span>Staff: {fac.staffPresent}/{fac.staffTotal}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
