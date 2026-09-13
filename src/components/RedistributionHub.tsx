import React, { useState } from 'react';
import { useApp } from '../context/AppContext.js';
import { RedistributionPlan } from '../types.js';
import { 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  AlertCircle, 
  Sliders, 
  Sparkles,
  ChevronRight,
  RotateCcw
} from 'lucide-react';

export const RedistributionHub: React.FC = () => {
  const { 
    redistributions, 
    approveRedistribution, 
    advanceRedistribution,
    setActiveTab 
  } = useApp();

  const [selectedPlanId, setSelectedPlanId] = useState<string>(redistributions[0]?.id || 'REDIST-001');
  const [customQty, setCustomQty] = useState<number | null>(null);

  const selectedPlan = redistributions.find(p => p.id === selectedPlanId) || redistributions[0];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Cross-District Pharmaceutical & Resource Redistribution Optimizer
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Autonomous multi-district surplus balancing. Scans inventory across 50 districts to eliminate localized stock-outs without ordering expensive emergency external tenders.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800 text-xs font-mono">
          <span className="text-slate-400">Total Active Corridors:</span>
          <span className="text-cyan-400 font-bold">{redistributions.length} Plans</span>
          <span className="text-slate-500">|</span>
          <span className="text-emerald-400 font-semibold">100% Stock-out Prevention</span>
        </div>
      </div>

      {/* Main Grid: Plans List & Active Corridor Tracker */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Plans List (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
            <span>Recommended Redistribution Orders</span>
            <span className="text-cyan-400">Optimization Rank</span>
          </div>

          <div className="space-y-3 max-h-[720px] overflow-y-auto pr-1">
            {redistributions.map((plan) => {
              const isSelected = plan.id === selectedPlan?.id;
              const isDelivered = plan.status === 'DELIVERED';
              const isInTransit = plan.status === 'IN_TRANSIT';
              const isApproved = plan.status === 'APPROVED';

              return (
                <div
                  key={plan.id}
                  onClick={() => {
                    setSelectedPlanId(plan.id);
                    setCustomQty(null);
                  }}
                  className={`border rounded-xl p-4 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-850 border-cyan-500 shadow-md ring-1 ring-cyan-500/50'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700 hover:bg-slate-850/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white text-sm">
                      {plan.medicineName}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase font-mono ${
                      isDelivered
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        : isInTransit
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-800 animate-pulse'
                        : isApproved
                        ? 'bg-blue-950 text-blue-300 border border-blue-800'
                        : 'bg-amber-950 text-amber-300 border border-amber-800'
                    }`}>
                      {plan.status.replace('_', ' ')}
                    </span>
                  </div>

                  {/* Transfer Route summary */}
                  <div className="text-xs text-slate-300 font-mono space-y-1 mb-3 bg-slate-950/70 p-2.5 rounded border border-slate-800/80">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-[10px]">Surplus Source:</span>
                      <strong className="text-white">{plan.sourceDistrict}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-[10px]">Deficit Destination:</span>
                      <strong className="text-rose-400">{plan.destinationDistrict}</strong>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-[10px]">
                      <span>Quantity: <strong className="text-cyan-300">{plan.recommendedTransferQty.toLocaleString()} units</strong></span>
                      <span>ETA: <strong className="text-slate-200">{plan.estimatedTravelTime}</strong></span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Score: <strong className="text-emerald-400">{plan.optimizationScore}/100</strong></span>
                    <span className="text-cyan-400 flex items-center gap-1 font-semibold">
                      Inspect & Dispatch <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Plan Details, Live Interactive Workflow & GPS Tracker (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {selectedPlan ? (
            <>
              {/* Detailed Matching Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-wider">
                      Redistribution Order #{selectedPlan.id}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {selectedPlan.medicineName} • {selectedPlan.transportMode}
                    </h3>
                  </div>

                  <span className="px-2.5 py-1 rounded text-xs font-bold font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                    Score: {selectedPlan.optimizationScore}/100
                  </span>
                </div>

                {/* Source & Destination Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Source (Surplus) */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Surplus Source
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">{selectedPlan.sourceDistrict}</span>
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {selectedPlan.sourceFacility}
                    </div>
                    <div className="text-xs text-slate-300 font-mono space-y-0.5 pt-1">
                      <div>Current Stock: <strong className="text-white">{selectedPlan.sourceStock.toLocaleString()}</strong></div>
                      <div>Surplus Margin: <strong className="text-emerald-400">+{selectedPlan.sourceSurplus.toLocaleString()} units</strong></div>
                    </div>
                  </div>

                  {/* Destination (Deficit) */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" /> Deficit Destination
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">{selectedPlan.destinationDistrict}</span>
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {selectedPlan.destinationFacility}
                    </div>
                    <div className="text-xs text-slate-300 font-mono space-y-0.5 pt-1">
                      <div>Current Stock: <strong className="text-white">{selectedPlan.destinationStock.toLocaleString()}</strong></div>
                      <div>Projected Deficit: <strong className="text-rose-400">-{selectedPlan.destinationDeficit.toLocaleString()} units</strong></div>
                    </div>
                  </div>
                </div>

                {/* Logistics Corridor Summary */}
                <div className="bg-slate-950 p-3.5 rounded-xl border border-cyan-800/50 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Travel Distance:</span>
                    <strong className="text-white text-sm">{selectedPlan.distanceKm} km</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Estimated Transit:</span>
                    <strong className="text-white text-sm">{selectedPlan.estimatedTravelTime}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Transport Mode:</span>
                    <strong className="text-cyan-300 text-sm">{selectedPlan.transportMode}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Shortage Deficit Eliminated:</span>
                    <strong className="text-emerald-400 text-sm">{selectedPlan.shortageReductionPct}%</strong>
                  </div>
                </div>

                {/* Interactive Action Workflow Bar */}
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Administrative Action Controls
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      State Health Authority Authorization
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {selectedPlan.status === 'PENDING_APPROVAL' && (
                      <button
                        onClick={() => approveRedistribution(selectedPlan.id)}
                        className="flex-1 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>One-Click Approve Transfer Order</span>
                      </button>
                    )}

                    {selectedPlan.status !== 'DELIVERED' && (
                      <button
                        onClick={() => advanceRedistribution(selectedPlan.id)}
                        className="py-2.5 px-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                      >
                        <Truck className="w-4 h-4" />
                        <span>Advance Status →</span>
                      </button>
                    )}

                    {selectedPlan.status === 'DELIVERED' && (
                      <div className="w-full py-2.5 px-4 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Transfer Order Delivered & Local PHC Stock Credited!</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 5-Step Timeline Status Tracker */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                    Order Lifecycle & Logistics Timeline
                  </span>

                  <div className="space-y-2">
                    {selectedPlan.timeline.map((step, idx) => (
                      <div 
                        key={idx}
                        className={`flex items-start gap-3 p-2.5 rounded-lg border text-xs font-mono transition-colors ${
                          step.done 
                            ? 'bg-slate-950 border-emerald-900/60 text-emerald-300'
                            : 'bg-slate-950/40 border-slate-800/80 text-slate-500'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0 ${
                          step.done ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {step.done ? '✓' : idx + 1}
                        </div>
                        <div className="flex-1 flex items-center justify-between">
                          <span className={step.done ? 'text-slate-200 font-semibold' : 'text-slate-400'}>
                            {step.step}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {step.timestamp}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center text-slate-500 text-xs">
              Select a redistribution plan to inspect source, destination, and telemetry tracking.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
