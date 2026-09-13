import React, { useState } from 'react';
import { useApp } from '../context/AppContext.js';
import { HealthAlert } from '../types.js';
import { 
  AlertTriangle, 
  CheckCircle2, 
  BellRing, 
  ArrowRight, 
  Truck, 
  Users, 
  Pill, 
  Building, 
  Filter 
} from 'lucide-react';

export const AlertsCenter: React.FC = () => {
  const { alerts, resolveAlert, setActiveTab, setSelectedDistrict } = useApp();
  const [selectedSeverity, setSelectedSeverity] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredAlerts = alerts.filter(a => {
    if (selectedSeverity !== 'ALL' && a.severity !== selectedSeverity) return false;
    if (selectedCategory !== 'ALL' && a.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <BellRing className="w-5 h-5 text-sky-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Early Warning Alert Engine & Incident Resolution
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Autonomous multi-tier alert processing prioritizing life-threatening medicine stock-outs, abnormal disease surges, and critical ICU bed exhaustion.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono bg-slate-950 px-3 py-2 rounded-lg border border-slate-800">
          <span className="text-slate-400">Unresolved Alerts:</span>
          <span className="text-rose-400 font-bold">{alerts.filter(a => !a.resolved).length}</span>
          <span className="text-slate-500">|</span>
          <span className="text-emerald-400 font-semibold">{alerts.filter(a => a.resolved).length} Resolved</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5">
          <select
            value={selectedSeverity}
            onChange={(e) => setSelectedSeverity(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-md px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-sky-500 font-mono"
          >
            <option value="ALL">All Severities</option>
            <option value="CRITICAL">Critical Alerts Only</option>
            <option value="WARNING">Warning Alerts Only</option>
            <option value="INFO">Informational Alerts Only</option>
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-md px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-sky-500 font-mono"
          >
            <option value="ALL">All Incident Categories</option>
            <option value="STOCK_OUT">Stock-Out Alerts</option>
            <option value="PATIENT_SURGE">Patient Surge Alerts</option>
            <option value="BED_AVAILABILITY">Bed & ICU Alerts</option>
            <option value="LOGISTICS_DELAY">Logistics & Route Delays</option>
            <option value="STAFF_DEFICIT">Staff Deficit Alerts</option>
          </select>
        </div>

        <div className="text-xs text-slate-400 font-mono">
          Showing <span className="text-sky-400 font-bold">{filteredAlerts.length}</span> active notifications
        </div>
      </div>

      {/* Alerts Stream */}
      <div className="space-y-3">
        {filteredAlerts.map((alt) => {
          const isCritical = alt.severity === 'CRITICAL';
          const isResolved = alt.resolved;

          return (
            <div
              key={alt.id}
              className={`border rounded-xl p-5 transition-all ${
                isResolved
                  ? 'bg-slate-950/40 border-slate-800/60 opacity-60'
                  : isCritical
                  ? 'bg-slate-900 border-rose-900/60 hover:border-rose-700 shadow-sm'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700 shadow-sm'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase ${
                    isCritical
                      ? 'bg-rose-950 text-rose-300 border border-rose-800'
                      : alt.severity === 'WARNING'
                      ? 'bg-amber-950 text-amber-300 border border-amber-800'
                      : 'bg-blue-950 text-blue-300 border border-blue-800'
                  }`}>
                    {alt.severity} • {alt.category.replace('_', ' ')}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {alt.facilityName} ({alt.district})
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                  <span>Confidence: <strong className="text-sky-400">{alt.confidenceScore}%</strong></span>
                  <span>{alt.timestamp}</span>
                </div>
              </div>

              <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                {alt.title}
              </h3>

              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80 mb-3 text-xs text-slate-300 space-y-1">
                <div className="flex items-start gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>AI Mitigation Directive: </strong>{alt.recommendedAction}</span>
                </div>
                {alt.affectedPopulation && (
                  <div className="text-[11px] text-slate-400 pl-5 font-mono">
                    Estimated Vulnerable Population: {(alt.affectedPopulation).toLocaleString()} patients
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedDistrict(alt.district);
                      if (alt.category === 'STOCK_OUT') setActiveTab('forecast');
                      else if (alt.category === 'PATIENT_SURGE') setActiveTab('patients');
                      else if (alt.category === 'BED_AVAILABILITY') setActiveTab('beds');
                      else if (alt.category === 'LOGISTICS_DELAY') setActiveTab('redistribution');
                      else setActiveTab('overview');
                    }}
                    className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Investigate Incident</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {!isResolved ? (
                  <button
                    onClick={() => resolveAlert(alt.id)}
                    className="px-3 py-1.5 rounded bg-slate-800 hover:bg-emerald-950 hover:text-emerald-300 hover:border-emerald-800 border border-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Acknowledge & Mark Resolved</span>
                  </button>
                ) : (
                  <span className="text-emerald-400 font-mono text-[11px] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Resolved by Administrative Officer
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
