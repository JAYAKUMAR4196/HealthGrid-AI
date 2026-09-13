import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  Bed, 
  UserCheck, 
  ShieldAlert, 
  ArrowRight, 
  AlertTriangle, 
  Sparkles, 
  CheckCircle2, 
  PhoneCall,
  RotateCcw
} from 'lucide-react';
import { PHC_MEDICINES } from '../../data/healthGridData';

export const PhcCommandCard: React.FC = () => {
  const [modalState, setModalState] = useState<string | null>(null);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#030611] overflow-hidden border-t border-white/[0.06]">
      
      {/* Radial lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
              <Building2 className="w-3.5 h-3.5 text-cyan-300" />
              <span>GRANULAR FACILITY TELEMETRY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              PHC Command Center
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Real-time operational dashboard for individual Primary Health Centres with integrated inventory, staffing, and clinical demand.
            </p>
          </div>

          <div className="text-xs font-mono text-cyan-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Telemetry Link: Satellite + Fiber Mesh</span>
          </div>
        </div>

        {/* Detailed Dashboard Card */}
        <div className="rounded-3xl bg-[#080d21]/90 border border-cyan-500/30 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl space-y-8">
          
          {/* Card Title & Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-display font-black text-white">
                  PHC-1042 | Regional Health Center
                </h3>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-bold">
                  ONLINE
                </span>
              </div>
              <p className="text-xs font-mono text-slate-400">
                District: Warangal Rural • PIN: 506002 • State: Telangana
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
              <span>Medical Officer: <strong>Dr. K. Srinivas</strong></span>
              <span>•</span>
              <span className="text-cyan-300">Last Synced: 2m ago</span>
            </div>
          </div>

          {/* 4 Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            
            {/* Metric 1: Patients Today */}
            <div className="p-4 rounded-2xl bg-[#050817] border border-cyan-500/20 space-y-1">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[11px] font-mono">Patients Today</span>
                <Users className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-3xl font-display font-black text-white">
                428
              </div>
              <div className="text-[10px] font-mono text-emerald-400">+14% over baseline</div>
            </div>

            {/* Metric 2: Beds Available */}
            <div className="p-4 rounded-2xl bg-[#050817] border border-blue-500/20 space-y-1">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[11px] font-mono">Beds Available</span>
                <Bed className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-3xl font-display font-black text-amber-300">
                7 / 20
              </div>
              <div className="text-[10px] font-mono text-slate-400">65% Occupancy Rate</div>
            </div>

            {/* Metric 3: Doctors Present */}
            <div className="p-4 rounded-2xl bg-[#050817] border border-emerald-500/20 space-y-1">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[11px] font-mono">Doctors Present</span>
                <UserCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-3xl font-display font-black text-white">
                4 / 5
              </div>
              <div className="text-[10px] font-mono text-emerald-400">1 On Surge Standby</div>
            </div>

            {/* Metric 4: Nurses Present */}
            <div className="p-4 rounded-2xl bg-[#050817] border border-purple-500/20 space-y-1">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[11px] font-mono">Nurses Present</span>
                <Users className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-3xl font-display font-black text-white">
                8 / 10
              </div>
              <div className="text-[10px] font-mono text-yellow-400">2 In Triaging Zone</div>
            </div>

          </div>

          {/* Medicine Inventory Table */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                Primary Drug Dispensary Telemetry
              </h4>
              <span className="text-[10px] font-mono text-slate-500">Live RFID & Barcode Registry</span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#050816]">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#030612] text-slate-400 border-b border-white/[0.08] text-[11px]">
                  <tr>
                    <th className="p-3.5 pl-5">Medicine</th>
                    <th className="p-3.5">Current Stock</th>
                    <th className="p-3.5">Projected Demand</th>
                    <th className="p-3.5">Stock-Out Risk</th>
                    <th className="p-3.5 pr-5 text-right">Autonomous Recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {PHC_MEDICINES.map((med) => (
                    <tr key={med.name} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3.5 pl-5 font-bold text-white flex items-center gap-2">
                        <span>{med.name}</span>
                      </td>
                      <td className="p-3.5 text-slate-200">
                        {med.stock.toLocaleString()} units
                      </td>
                      <td className="p-3.5 text-slate-200">
                        {med.demand.toLocaleString()} units / 14d
                      </td>
                      <td className="p-3.5">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${med.bg}`}>
                          {med.risk === 'Low' && '🟢 Low'}
                          {med.risk === 'Medium' && '🟡 Medium'}
                          {med.risk === 'High' && '🟠 High'}
                          {med.risk === 'Critical' && '🔴 Critical'}
                        </span>
                      </td>
                      <td className="p-3.5 pr-5 text-right text-[11px] text-cyan-300">
                        {med.risk === 'Critical' ? 'Transfer Scheduled (+3,500)' : 'Buffer Sufficient'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
            <button
              onClick={() => setModalState('Request Supply')}
              className="px-5 py-2.5 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-400/50 text-cyan-300 hover:text-white font-mono text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              Request Supply
            </button>

            <button
              onClick={() => setModalState('View Forecast')}
              className="px-5 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-400/50 text-blue-300 hover:text-white font-mono text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              View Forecast
            </button>

            <button
              onClick={() => setModalState('Report Emergency')}
              className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-bold shadow-lg shadow-rose-950/40 transition-all cursor-pointer"
            >
              Report Emergency
            </button>
          </div>

          {/* Action Feedback Banner */}
          {modalState && (
            <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-xs font-mono text-cyan-200 flex items-center justify-between animate-in fade-in">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Action [{modalState}] acknowledged by Warangal District Command.
              </span>
              <button
                onClick={() => setModalState(null)}
                className="text-slate-400 hover:text-white text-[11px] underline cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
