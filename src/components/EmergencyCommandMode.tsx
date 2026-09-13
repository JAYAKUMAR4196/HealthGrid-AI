import React, { useState } from 'react';
import { useApp } from '../context/AppContext.js';
import { EmergencyScenario } from '../types.js';
import { 
  ShieldAlert, 
  AlertTriangle, 
  Flame, 
  Waves, 
  Sun, 
  Truck, 
  Users, 
  Activity, 
  CheckCircle2, 
  Play, 
  RotateCcw,
  Zap,
  PhoneCall,
  FileText,
  Building
} from 'lucide-react';

export const EmergencyCommandMode: React.FC = () => {
  const { 
    emergencyMode, 
    activeEmergency, 
    activateEmergency, 
    deactivateEmergency, 
    setActiveTab 
  } = useApp();

  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('SCENARIO-OUTBREAK');
  const [bufferReleased, setBufferReleased] = useState<boolean>(false);
  const [corridorsApproved, setCorridorsApproved] = useState<boolean>(false);

  const emergencyScenarios = [
    {
      id: 'SCENARIO-OUTBREAK',
      title: 'Regional Disease Outbreak (Dengue / Viral Outbreak)',
      type: 'OUTBREAK',
      districts: 'Nagarkurnool, Pune, Belagavi, Barabanki, Kamrup',
      icon: Flame,
      patientSurge: '+42%',
      medicineSurge: '+63%',
      bedSurge: '+38%',
      staffDeficit: '+18%',
      description: 'Acute clustering of vector-borne fever across 8 districts triggering emergency triage.'
    },
    {
      id: 'SCENARIO-FLOOD',
      title: 'Monsoon Flash Flood & Logistics Cutoff',
      type: 'NATURAL_DISASTER',
      districts: 'Kamrup, Krishna, Cuttack',
      icon: Waves,
      patientSurge: '+28%',
      medicineSurge: '+75%',
      bedSurge: '+45%',
      staffDeficit: '+24%',
      description: 'Highway bridges submerged, cutting off road deliveries. Requires air-lift supply caches.'
    },
    {
      id: 'SCENARIO-HEATWAVE',
      title: 'Severe Dehydration Heatwave Alert (43°C+)',
      type: 'HEATWAVE',
      districts: 'Nagarkurnool, Guntur, Barabanki',
      icon: Sun,
      patientSurge: '+35%',
      medicineSurge: '+90%',
      bedSurge: '+30%',
      staffDeficit: '+12%',
      description: 'Extreme heat exhaustion across agricultural labor belts; ORS and IV fluid exhaustion imminent.'
    },
    {
      id: 'SCENARIO-MASS-CASUALTY',
      title: 'Sudden Influx (Mass Pilgrimage / Transport Incident)',
      type: 'SUDDEN_INFLUX',
      districts: 'Varanasi, Tirupati, Puri',
      icon: Users,
      patientSurge: '+65%',
      medicineSurge: '+50%',
      bedSurge: '+85%',
      staffDeficit: '+32%',
      description: 'Mass civilian transit concentration overloading rural trauma and stabilization wards.'
    }
  ];

  const currentScenario = emergencyScenarios.find(s => s.id === selectedScenarioId) || emergencyScenarios[0];

  return (
    <div className="space-y-6">
      {/* Emergency Alert Master Banner */}
      <div className={`rounded-xl p-6 border shadow-lg transition-all ${
        emergencyMode 
          ? 'bg-gradient-to-r from-rose-950 via-slate-900 to-rose-950 border-rose-500 shadow-rose-950/50 animate-pulse'
          : 'bg-slate-900 border-slate-800'
      }`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <ShieldAlert className={`w-7 h-7 ${emergencyMode ? 'text-rose-400 animate-bounce' : 'text-slate-400'}`} />
              <h2 className="text-xl font-extrabold text-white tracking-tight">
                {emergencyMode ? 'NATIONAL EMERGENCY COMMAND MODE — ACTIVATED' : 'Disaster Surge Simulation & Emergency Command Mode'}
              </h2>
              <span className={`px-2.5 py-0.5 text-xs font-bold font-mono rounded ${
                emergencyMode ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}>
                {emergencyMode ? 'STATUS: ACTIVE CRISIS' : 'PEACETIME MONITORING'}
              </span>
            </div>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              When disaster strikes, peacetime supply assumptions collapse. Emergency Command Mode automates real-time green corridor routing, releases state buffer inventories, and synchronizes cross-district mutual aid.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {emergencyMode ? (
              <button
                onClick={() => {
                  deactivateEmergency();
                  setBufferReleased(false);
                  setCorridorsApproved(false);
                }}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold text-xs flex items-center gap-2 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 text-sky-400" />
                <span>Stand Down Emergency Mode</span>
              </button>
            ) : (
              <button
                onClick={() => activateEmergency(selectedScenarioId)}
                className="px-5 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-rose-950 transition-all cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Engage Emergency Simulation</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {emergencyScenarios.map((scen) => {
          const Icon = scen.icon;
          const isSelected = scen.id === selectedScenarioId;

          return (
            <button
              key={scen.id}
              onClick={() => {
                setSelectedScenarioId(scen.id);
                if (emergencyMode) {
                  activateEmergency(scen.id);
                }
              }}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-slate-850 border-rose-500 shadow-md ring-1 ring-rose-500/40'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700 hover:bg-slate-850/60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-7 h-7 rounded bg-slate-800 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-rose-400" />
                </div>
                <span className="text-[10px] font-mono text-sky-400 uppercase font-semibold">
                  {scen.type}
                </span>
              </div>
              <h4 className="text-xs font-bold text-white mb-1 leading-snug">
                {scen.title}
              </h4>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                {scen.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Surge Impact Modeling Grid */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-white tracking-tight">
              Predicted Surge Impact Under: {currentScenario.title}
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              Affected Districts: {currentScenario.districts}
            </span>
          </div>
          <span className="px-2.5 py-1 rounded text-xs font-bold font-mono bg-rose-950 text-rose-300 border border-rose-800">
            High Severity Threat
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-1">
            <span className="text-slate-400 text-xs font-mono block">Patient Surge Velocity</span>
            <div className="text-2xl font-bold text-rose-400 font-mono">{currentScenario.patientSurge}</div>
            <p className="text-[11px] text-slate-400">Outpatient admissions rise from 108k to ~154k daily</p>
          </div>

          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-1">
            <span className="text-slate-400 text-xs font-mono block">Critical Medicine Burn</span>
            <div className="text-2xl font-bold text-rose-400 font-mono">{currentScenario.medicineSurge}</div>
            <p className="text-[11px] text-slate-400">Antibiotics, ORS, and IV electrolytes deplete 2.5x faster</p>
          </div>

          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-1">
            <span className="text-slate-400 text-xs font-mono block">Hospital Bed Deficit</span>
            <div className="text-2xl font-bold text-amber-400 font-mono">{currentScenario.bedSurge}</div>
            <p className="text-[11px] text-slate-400">Regional occupancy projected to cross 94% within 72 hrs</p>
          </div>

          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-1">
            <span className="text-slate-400 text-xs font-mono block">Frontline Staff Deficit</span>
            <div className="text-2xl font-bold text-amber-400 font-mono">{currentScenario.staffDeficit}</div>
            <p className="text-[11px] text-slate-400">Requires mobilising state volunteer medical corps</p>
          </div>
        </div>
      </div>

      {/* Automated Emergency Actions & Protocols */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Automated Action Protocols */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold text-white tracking-tight">
              Automated Disaster Response Protocols
            </h3>
          </div>

          <div className="space-y-3">
            {/* Protocol 1: Buffer release */}
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex items-start justify-between gap-3">
              <div className="space-y-1">
                <strong className="text-xs font-bold text-white block">
                  1. Unlock 25% State Emergency Buffer Cache
                </strong>
                <p className="text-[11px] text-slate-400">
                  Unfreezes 85,000 units of reserve Amoxicillin & 42,000 ORS sachets from central depot without waiting for standard procurement committee approval.
                </p>
              </div>
              <button
                onClick={() => setBufferReleased(true)}
                disabled={bufferReleased}
                className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                  bufferReleased
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    : 'bg-sky-600 hover:bg-sky-500 text-white cursor-pointer'
                }`}
              >
                {bufferReleased ? 'Buffer Released ✓' : 'Execute Release'}
              </button>
            </div>

            {/* Protocol 2: Green Corridor */}
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex items-start justify-between gap-3">
              <div className="space-y-1">
                <strong className="text-xs font-bold text-white block">
                  2. Authorize Interstate Green Logistics Corridors
                </strong>
                <p className="text-[11px] text-slate-400">
                  Issues automated digital toll exemptions & priority GPS dispatch escort via State Highway Traffic Police.
                </p>
              </div>
              <button
                onClick={() => setCorridorsApproved(true)}
                disabled={corridorsApproved}
                className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                  corridorsApproved
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    : 'bg-sky-600 hover:bg-sky-500 text-white cursor-pointer'
                }`}
              >
                {corridorsApproved ? 'Corridors Active ✓' : 'Authorize Corridors'}
              </button>
            </div>

            {/* Protocol 3: Digital Twin Mitigation */}
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex items-start justify-between gap-3">
              <div className="space-y-1">
                <strong className="text-xs font-bold text-white block">
                  3. Run Digital Twin What-If Resilience Test
                </strong>
                <p className="text-[11px] text-slate-400">
                  Stress-test secondary backup routes and oxygen tanker delivery scenarios across 50 districts.
                </p>
              </div>
              <button
                onClick={() => setActiveTab('digital_twin')}
                className="px-3 py-1.5 rounded text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700 whitespace-nowrap cursor-pointer"
              >
                Open Digital Twin →
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Contact Directory & Hotline */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-sky-400" />
            <h3 className="text-sm font-bold text-white tracking-tight">
              Emergency Logistics & Command Directory (24/7 NHM)
            </h3>
          </div>

          <div className="space-y-2.5 text-xs font-mono">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-white font-bold block">National Health Mission War Room</span>
                <span className="text-slate-400 text-[11px]">Nirman Bhawan, New Delhi</span>
              </div>
              <span className="text-sky-400 font-bold">1800-112-990</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-white font-bold block">State Medical Services Corporation (SMSC)</span>
                <span className="text-slate-400 text-[11px]">Central Pharmaceutical Depot Dispatch</span>
              </div>
              <span className="text-sky-400 font-bold">+91-40-2345-9800</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-white font-bold block">National Disaster Response Force (NDRF)</span>
                <span className="text-slate-400 text-[11px]">Medical Relief Battalion Control</span>
              </div>
              <span className="text-sky-400 font-bold">1078 (Disaster Toll-Free)</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-white font-bold block">Emergency Medical Oxygen Grid Control</span>
                <span className="text-slate-400 text-[11px]">Petroleum & Explosives Safety Organisation (PESO)</span>
              </div>
              <span className="text-sky-400 font-bold">+91-712-251-0248</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
