import React, { useState } from 'react';
import { useApp } from '../context/AppContext.js';
import { 
  Cpu, 
  Sliders, 
  RotateCcw, 
  Sparkles, 
  AlertTriangle, 
  TrendingDown, 
  CheckCircle2, 
  Truck, 
  Users, 
  BedDouble, 
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';

export const DigitalTwinSimulation: React.FC = () => {
  const { resilienceScore } = useApp();

  const [patientDelta, setPatientDelta] = useState<number>(30);
  const [consumptionDelta, setConsumptionDelta] = useState<number>(25);
  const [deliveryDelay, setDeliveryDelay] = useState<number>(4);
  const [staffDelta, setStaffDelta] = useState<number>(-15);
  const [bedDelta, setBedDelta] = useState<number>(0);

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [mitigationActive, setMitigationActive] = useState<boolean>(false);

  // Dynamic simulation calculation
  const stressFactor = 
    (patientDelta * 0.35) + 
    (consumptionDelta * 0.4) + 
    (deliveryDelay * 3.5) + 
    (Math.abs(Math.min(0, staffDelta)) * 0.4) - 
    (bedDelta * 0.2);

  const baselineScore = resilienceScore.score || 84.7;
  const simulatedScore = mitigationActive
    ? Number(Math.min(92, baselineScore - (stressFactor * 0.15) + 8).toFixed(1))
    : Number(Math.max(38, baselineScore - (stressFactor * 0.45)).toFixed(1));

  const simulatedStockOuts = mitigationActive
    ? Math.max(4, Math.round(18 + (stressFactor * 0.2) - 14))
    : Math.round(18 + (stressFactor * 0.8));

  const simulatedFacilitiesAtRisk = mitigationActive
    ? Math.max(8, Math.round(34 + (stressFactor * 0.3) - 24))
    : Math.round(34 + (stressFactor * 1.2));

  const simulatedTimeToCrisis = mitigationActive ? 14.5 : Math.max(1.8, Number((7.2 - (stressFactor * 0.08)).toFixed(1)));
  const simulatedPatientsAffected = Math.round(simulatedFacilitiesAtRisk * 1250);

  const handleReset = () => {
    setPatientDelta(0);
    setConsumptionDelta(0);
    setDeliveryDelay(0);
    setStaffDelta(0);
    setBedDelta(0);
    setMitigationActive(false);
  };

  const handleRunMitigation = () => {
    setMitigationActive(true);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-sky-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              National Health Resource Digital Twin & What-If Stress Testing
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Simulate volatile epidemics, supply chain breakdowns, and delivery roadblocks in virtual space before they inflict real-world patient casualties.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Sliders</span>
          </button>

          <button
            onClick={handleRunMitigation}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer ${
              mitigationActive
                ? 'bg-emerald-600 text-white shadow-emerald-950/50'
                : 'bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{mitigationActive ? 'Mitigation Active ✓' : 'Run Autonomous Mitigation Plan'}</span>
          </button>
        </div>
      </div>

      {/* Grid: Sliders on Left, Digital Twin Outcomes on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sliders Panel (6 cols) */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-sky-400" />
              <h3 className="text-sm font-bold text-white tracking-tight">
                Simulated Environmental & Supply Stresses
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">Live Parameter Controls</span>
          </div>

          {/* Slider 1: Patient Demand */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-300">Patient Demand Volatility</span>
              <span className={`font-mono font-bold ${patientDelta > 0 ? 'text-rose-400' : 'text-slate-300'}`}>
                {patientDelta > 0 ? `+${patientDelta}%` : `${patientDelta}%`}
              </span>
            </div>
            <input
              type="range"
              min="-50"
              max="100"
              value={patientDelta}
              onChange={(e) => setPatientDelta(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>-50% (Depressed)</span>
              <span>Baseline (0%)</span>
              <span>+100% (Severe Epidemic)</span>
            </div>
          </div>

          {/* Slider 2: Medicine Consumption */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-300">Pharmaceutical Consumption Rate</span>
              <span className={`font-mono font-bold ${consumptionDelta > 0 ? 'text-rose-400' : 'text-slate-300'}`}>
                {consumptionDelta > 0 ? `+${consumptionDelta}%` : `${consumptionDelta}%`}
              </span>
            </div>
            <input
              type="range"
              min="-50"
              max="100"
              value={consumptionDelta}
              onChange={(e) => setConsumptionDelta(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>-50% (Low Burn)</span>
              <span>Baseline (0%)</span>
              <span>+100% (Critical Depletion)</span>
            </div>
          </div>

          {/* Slider 3: Delivery Delays */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-300">Warehouse Replenishment Transit Delay</span>
              <span className={`font-mono font-bold ${deliveryDelay > 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
                +{deliveryDelay} Days Transit Delay
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="21"
              value={deliveryDelay}
              onChange={(e) => setDeliveryDelay(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0 Days (On Schedule)</span>
              <span>7 Days (Bottleneck)</span>
              <span>21 Days (Roadway Cutoff)</span>
            </div>
          </div>

          {/* Slider 4: Staff Availability */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-300">Medical Personnel Availability</span>
              <span className={`font-mono font-bold ${staffDelta < 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {staffDelta > 0 ? `+${staffDelta}%` : `${staffDelta}%`}
              </span>
            </div>
            <input
              type="range"
              min="-50"
              max="50"
              value={staffDelta}
              onChange={(e) => setStaffDelta(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>-50% (Severe Absenteeism)</span>
              <span>Baseline</span>
              <span>+50% (Mobilized Corps)</span>
            </div>
          </div>

          {/* Slider 5: Bed Availability */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-300">Available Bed Capacity Adjustment</span>
              <span className="font-mono font-bold text-slate-300">
                {bedDelta > 0 ? `+${bedDelta}%` : `${bedDelta}%`}
              </span>
            </div>
            <input
              type="range"
              min="-30"
              max="50"
              value={bedDelta}
              onChange={(e) => setBedDelta(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>-30%</span>
              <span>Baseline</span>
              <span>+50% (Field Tents)</span>
            </div>
          </div>
        </div>

        {/* Digital Twin Simulated Outcomes (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Outcome Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  Simulated Resilience Index Impact
                </h3>
                <span className="text-xs text-slate-400 font-mono">
                  {mitigationActive ? 'With Automated Mitigation Active' : 'Unmitigated Crisis Scenario'}
                </span>
              </div>

              <div className="text-right">
                <span className="text-2xl font-extrabold font-mono text-white">
                  {simulatedScore} <span className="text-xs text-slate-400 font-normal">/ 100</span>
                </span>
                <span className={`block text-[10px] font-bold font-mono ${
                  simulatedScore < 65 ? 'text-rose-400' : simulatedScore < 80 ? 'text-amber-400' : 'text-emerald-400'
                }`}>
                  {simulatedScore < 65 ? 'SYSTEM AT CRITICAL VULNERABILITY' : simulatedScore < 80 ? 'STRESSED BUT STABLE' : 'HEALTHY RESILIENCE'}
                </span>
              </div>
            </div>

            {/* 4 Outcome Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 space-y-1">
                <span className="text-slate-400 text-[10px] font-mono block">Projected Stock-Outs</span>
                <strong className={`text-xl font-mono ${simulatedStockOuts > 25 ? 'text-rose-400' : 'text-amber-400'}`}>
                  {simulatedStockOuts} Facilities
                </strong>
                <span className="text-[10px] text-slate-500 block">Baseline was 18 facilities</span>
              </div>

              <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 space-y-1">
                <span className="text-slate-400 text-[10px] font-mono block">Facilities Under High Risk</span>
                <strong className="text-xl font-mono text-white">
                  {simulatedFacilitiesAtRisk} Centers
                </strong>
                <span className="text-[10px] text-slate-500 block">Across 8 stressed districts</span>
              </div>

              <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 space-y-1">
                <span className="text-slate-400 text-[10px] font-mono block">Estimated Time to Zero Stock</span>
                <strong className={`text-xl font-mono ${simulatedTimeToCrisis < 4 ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {simulatedTimeToCrisis} Days
                </strong>
                <span className="text-[10px] text-slate-500 block">Lead time buffer breach window</span>
              </div>

              <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 space-y-1">
                <span className="text-slate-400 text-[10px] font-mono block">Estimated Patients Affected</span>
                <strong className="text-xl font-mono text-sky-300">
                  {simulatedPatientsAffected.toLocaleString()}
                </strong>
                <span className="text-[10px] text-slate-500 block">Prescription gap risks</span>
              </div>
            </div>

            {/* Prescribed AI Mitigation Plan */}
            <div className={`p-4 rounded-xl border space-y-3 transition-colors ${
              mitigationActive
                ? 'bg-emerald-950/30 border-emerald-800/80'
                : 'bg-slate-950 border-slate-800'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Prescribed Multi-Lever Mitigation
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {mitigationActive ? 'Applied' : 'Recommended'}
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Release 25% contingency buffer stock at Hyderabad & Mumbai hubs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Re-route 6 transit corridors via National Highway bypass NH-27</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Mobilize 18 reserve medical corps officers to rural PHC clinics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Open 120 auxiliary oxygen step-down beds at CHC blocks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
