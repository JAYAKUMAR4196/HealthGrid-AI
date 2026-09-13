import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext.js';
import { DroneMission, QuantumRouteResult, PathogenSurveillance, ColdChainIoTDevice } from '../types.js';
import { 
  Rocket, 
  Plane, 
  Cpu, 
  Radio, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Play, 
  RefreshCw, 
  Sparkles, 
  Zap, 
  ThermometerSnowflake, 
  BatteryCharging, 
  Wind, 
  Compass, 
  MapPin, 
  Activity, 
  Sliders, 
  Lock, 
  Eye, 
  Boxes, 
  Network,
  Send,
  Workflow,
  Clock,
  ArrowRight,
  TrendingDown
} from 'lucide-react';

export const FutureGridDashboard: React.FC = () => {
  const { setActiveTab } = useApp();

  // 1. Interactive Autonomous Drone Fleet State
  const [drones, setDrones] = useState<DroneMission[]>([
    {
      id: 'DRONE-01',
      callsign: 'SkyLifter Alpha-1',
      model: 'SkyLift V-400 eVTOL',
      status: 'IN_FLIGHT',
      departure: 'Hyderabad Central Medical Terminal',
      destination: 'Nagarkurnool Rural PHC-042',
      altitudeMeters: 142,
      batteryPercent: 84,
      payloadName: 'Polyvalent Snake Antivenom (25 vials)',
      payloadCategory: 'EMERGENCY_ANTIVENOM',
      tempCelsius: 3.8,
      tempMin: 2.0,
      tempMax: 8.0,
      targetEtaMinutes: 14,
      distanceKm: 86,
      distanceTraveledKm: 61,
      flightSpeedKmh: 112,
      coordinates: { lat: 16.78, lng: 78.42 }
    },
    {
      id: 'DRONE-02',
      callsign: 'Falcon Cryo-04',
      model: 'AeroBio Hexa-Cold Pro',
      status: 'IN_FLIGHT',
      departure: 'Mumbai State Medical Depot',
      destination: 'Pune Rural CHC-078',
      altitudeMeters: 185,
      batteryPercent: 71,
      payloadName: 'Ultra-Cold mRNA Rabies Vaccines (150 doses)',
      payloadCategory: 'CRYO_VACCINE',
      tempCelsius: -20.4,
      tempMin: -25.0,
      tempMax: -15.0,
      targetEtaMinutes: 22,
      distanceKm: 148,
      distanceTraveledKm: 98,
      flightSpeedKmh: 128,
      coordinates: { lat: 18.72, lng: 73.54 }
    },
    {
      id: 'DRONE-03',
      callsign: 'MedRover Pod-03',
      model: 'TerraGlide Autonomous Ground Pod',
      status: 'DISPATCHED',
      departure: 'Lucknow Central Gas Hub',
      destination: 'Barabanki District Critical Care Unit',
      altitudeMeters: 0,
      batteryPercent: 92,
      payloadName: 'Portable Cryogenic Oxygen Concentrator (x2)',
      payloadCategory: 'DIAGNOSTIC_KITS',
      tempCelsius: 18.5,
      tempMin: 10.0,
      tempMax: 28.0,
      targetEtaMinutes: 38,
      distanceKm: 42,
      distanceTraveledKm: 12,
      flightSpeedKmh: 45,
      coordinates: { lat: 26.88, lng: 81.04 }
    },
    {
      id: 'DRONE-04',
      callsign: 'AeroPulse O-Negative',
      model: 'NanoWing Fast Courier',
      status: 'STANDBY',
      departure: 'Chennai State Blood Bank',
      destination: 'Madurai Remote Primary Center',
      altitudeMeters: 0,
      batteryPercent: 100,
      payloadName: 'Universal O-Negative Red Cells (6 units)',
      payloadCategory: 'RARE_BLOOD',
      tempCelsius: 4.1,
      tempMin: 1.0,
      tempMax: 6.0,
      targetEtaMinutes: 0,
      distanceKm: 210,
      distanceTraveledKm: 0,
      flightSpeedKmh: 140,
      coordinates: { lat: 13.08, lng: 80.27 }
    }
  ]);

  // Selected Drone for live telemetry stream
  const [selectedDroneId, setSelectedDroneId] = useState<string>('DRONE-01');
  const activeDrone = drones.find(d => d.id === selectedDroneId) || drones[0];

  // Scramble Drone modal simulation state
  const [isScrambling, setIsScrambling] = useState<boolean>(false);
  const [scrambleTarget, setScrambleTarget] = useState<string>('Nagarkurnool Rural PHC-043');
  const [scrambleCargo, setScrambleCargo] = useState<string>('ORS & Critical Rehydration Buffer');
  const [scrambleSuccess, setScrambleSuccess] = useState<string | null>(null);

  // 2. Quantum Multi-Echelon Routing State
  const [quantumSolving, setQuantumSolving] = useState<boolean>(false);
  const [quantumResult, setQuantumResult] = useState<QuantumRouteResult>({
    originalDistanceKm: 1420,
    quantumDistanceKm: 468,
    distanceSavedPercent: 67.0,
    originalHours: 24.5,
    quantumHours: 4.2,
    timeSavedPercent: 82.8,
    carbonSavedKg: 890,
    spoilageRiskPercent: 0.0,
    nodesOptimized: 28
  });

  // 3. Pathogen Genomic Drift Bio-Surveillance
  const [pathogens, setPathogens] = useState<PathogenSurveillance[]>([
    {
      id: 'PATH-01',
      pathogenName: 'Dengue Serotype 5 (Novel Lineage)',
      variant: 'DENV-5.2.1-Beta',
      riskLevel: 'PRE-SURGE',
      daysBeforeSymptomSurge: 18,
      affectedDistrict: 'Nagarkurnool & Rangareddy',
      mutationVector: 'Envelope Glycoprotein E47K Drift',
      detectionSource: 'Wastewater NGS',
      transmissionVelocityR0: 2.84,
      recommendedTherapeutic: 'IV Fluids, Platelet Stabilizers, Paracetamol',
      preAllocatedDoses: 18500
    },
    {
      id: 'PATH-02',
      pathogenName: 'Antimicrobial-Resistant Klebsiella',
      variant: 'NDM-9 Metallo-Beta-Lactamase',
      riskLevel: 'HIGH_ALERT',
      daysBeforeSymptomSurge: 12,
      affectedDistrict: 'Pune & Satara Cluster',
      mutationVector: 'Carbapenem Hydrolysis Amplification',
      detectionSource: 'Hospital Syndromic AI',
      transmissionVelocityR0: 1.62,
      recommendedTherapeutic: 'Colistin Buffer & Targeted Ceftazidime-Avibactam',
      preAllocatedDoses: 6400
    },
    {
      id: 'PATH-03',
      pathogenName: 'Novel Avian Respiratory Virus (H3N2v)',
      variant: 'Clade 2.3.4.4b Drift',
      riskLevel: 'ELEVATED',
      daysBeforeSymptomSurge: 26,
      affectedDistrict: 'Kamrup Rural Corridors',
      mutationVector: 'Hemagglutinin Receptor Shift',
      detectionSource: 'Environmental Satellite',
      transmissionVelocityR0: 2.15,
      recommendedTherapeutic: 'Neuraminidase Inhibitor Reserve Cache',
      preAllocatedDoses: 32000
    }
  ]);

  // 4. Cold-Chain IoT Cryptographic Sensors
  const [coldSensors, setColdSensors] = useState<ColdChainIoTDevice[]>([
    {
      id: 'IOT-9901',
      sensorId: 'BLE-NFC-CRYO-09',
      batchId: 'BATCH-2026-MRNA-44',
      medicineName: 'Ultra-Cold mRNA Rabies Vaccines',
      facility: 'Drone Falcon Cryo-04 (In Flight)',
      currentTemp: -20.4,
      minSafeTemp: -25.0,
      maxSafeTemp: -15.0,
      vibrationG: 0.12,
      batteryRemainingPercent: 94,
      lastPingSecondsAgo: 3,
      cryptographicHash: '0x8f2d...4a1e9c',
      status: 'OPTIMAL'
    },
    {
      id: 'IOT-9902',
      sensorId: 'SMART-SEAL-AP-18',
      batchId: 'BATCH-2026-AV-112',
      medicineName: 'Polyvalent Snake Antivenom',
      facility: 'SkyLifter Alpha-1 Pod',
      currentTemp: 3.8,
      minSafeTemp: 2.0,
      maxSafeTemp: 8.0,
      vibrationG: 0.18,
      batteryRemainingPercent: 88,
      lastPingSecondsAgo: 7,
      cryptographicHash: '0x3c91...b57fe2',
      status: 'OPTIMAL'
    },
    {
      id: 'IOT-9903',
      sensorId: 'SOLAR-BUFF-PHC-42',
      batchId: 'BATCH-2026-INS-08',
      medicineName: 'Human Regular Insulin 100IU',
      facility: 'PHC-042 Solar Refrigerator #1',
      currentTemp: 4.2,
      minSafeTemp: 2.0,
      maxSafeTemp: 8.0,
      vibrationG: 0.01,
      batteryRemainingPercent: 100,
      lastPingSecondsAgo: 12,
      cryptographicHash: '0x117a...90ee38',
      status: 'OPTIMAL'
    }
  ]);

  // 5. Autonomous Sentinel AI Simulation Controls
  const [autonomousAgentEnabled, setAutonomousAgentEnabled] = useState<boolean>(true);
  const [futureStressLevel, setFutureStressLevel] = useState<number>(35); // 0 to 100
  const [agentLogs, setAgentLogs] = useState<string[]>([
    '00:14:12 [SENTINEL-9] Quantum Multi-Echelon Rebalance completed across 28 nodes.',
    '00:13:58 [SENTINEL-9] Dispatched Drone SkyLifter Alpha-1 with 25 vials Antivenom to PHC-042 (ETA 14m).',
    '00:12:44 [SENTINEL-9] Pathogen drift detected in Nagarkurnool wastewater; pre-allocated 18,500 supportive doses.',
    '00:11:30 [SENTINEL-9] Cryptographic chain of custody verified for 48,000 cold-chain units.'
  ]);

  // Continuous drone flight simulation timer
  useEffect(() => {
    const interval = setInterval(() => {
      setDrones(prevDrones => prevDrones.map(d => {
        if (d.status === 'IN_FLIGHT') {
          const newTraveled = Math.min(d.distanceKm, d.distanceTraveledKm + 0.8);
          const newEta = Math.max(1, Math.round(((d.distanceKm - newTraveled) / (d.flightSpeedKmh / 60))));
          const newBatt = Math.max(20, d.batteryPercent - 0.1);
          return {
            ...d,
            distanceTraveledKm: Number(newTraveled.toFixed(1)),
            targetEtaMinutes: newEta,
            batteryPercent: Number(newBatt.toFixed(1)),
            status: newTraveled >= d.distanceKm ? 'DELIVERED' : 'IN_FLIGHT'
          };
        }
        return d;
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle Scramble Drone
  const handleScrambleDrone = () => {
    setIsScrambling(true);
    setTimeout(() => {
      const newMission: DroneMission = {
        id: `DRONE-${Date.now().toString().slice(-4)}`,
        callsign: `AeroStrike-${Math.floor(Math.random() * 89 + 10)}`,
        model: 'SkyLift V-400 eVTOL',
        status: 'IN_FLIGHT',
        departure: 'Regional Tactical Depot',
        destination: scrambleTarget,
        altitudeMeters: 160,
        batteryPercent: 99,
        payloadName: scrambleCargo,
        payloadCategory: 'EMERGENCY_ANTIVENOM',
        tempCelsius: 4.0,
        tempMin: 2.0,
        tempMax: 8.0,
        targetEtaMinutes: 18,
        distanceKm: 94,
        distanceTraveledKm: 2,
        flightSpeedKmh: 125,
        coordinates: { lat: 16.50, lng: 78.35 }
      };

      setDrones(prev => [newMission, ...prev]);
      setSelectedDroneId(newMission.id);
      setIsScrambling(false);
      setScrambleSuccess(`Autonomous Drone ${newMission.callsign} successfully launched to ${scrambleTarget}! ETA: 18 minutes.`);
      
      setAgentLogs(prev => [
        `${new Date().toLocaleTimeString()} [SENTINEL-9] Emergency Drone ${newMission.callsign} scrambled to ${scrambleTarget}.`,
        ...prev
      ]);

      setTimeout(() => setScrambleSuccess(null), 6000);
    }, 1200);
  };

  // Run Quantum Optimization Solver
  const handleRunQuantumOptimization = () => {
    setQuantumSolving(true);
    setTimeout(() => {
      setQuantumResult({
        originalDistanceKm: 1540,
        quantumDistanceKm: 422,
        distanceSavedPercent: 72.6,
        originalHours: 26.2,
        quantumHours: 3.6,
        timeSavedPercent: 86.2,
        carbonSavedKg: 945,
        spoilageRiskPercent: 0.0,
        nodesOptimized: 34
      });
      setQuantumSolving(false);
      setAgentLogs(prev => [
        `${new Date().toLocaleTimeString()} [SENTINEL-9] Quantum Graph Annealing executed: 34 healthcare nodes synchronized. 86.2% time latency saved.`,
        ...prev
      ]);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Future Grid Command Header */}
      <div className="relative bg-gradient-to-r from-[#0c1b33] via-[#0d2244] to-[#0a1529] border border-sky-500/30 rounded-2xl p-6 shadow-xl shadow-sky-950/40 overflow-hidden">
        {/* Subtle Futuristic Background Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e90a_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e90a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-400/40 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
                <span>VISION 2030 COMMAND CENTER</span>
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/70 text-emerald-300 border border-emerald-800/60">
                ACTIVE QUANTUM MESH
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-950/70 text-sky-300 border border-sky-800/60">
                SENTINEL-9 ONLINE
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2 flex items-center gap-3">
              Autonomous Healthcare Logistics & Bio-Sentinel Grid
            </h1>
            <p className="text-xs sm:text-sm text-sky-100/70 mt-1.5 max-w-3xl leading-relaxed">
              Next-generation public health resilience architecture featuring autonomous eVTOL medical drone corridors, 
              quantum-optimized multi-echelon stock dispatch, pre-symptomatic wastewater genomic drift tracking, and 
              cryptographically verifiable sub-zero cold chains.
            </p>
          </div>

          {/* Autonomous Mode Toggle Pill */}
          <div className="flex flex-wrap items-center gap-3 bg-[#081020]/80 p-2.5 rounded-xl border border-sky-500/30 backdrop-blur-md shrink-0">
            <div className="text-right">
              <span className="text-[10px] text-sky-300 font-mono block font-semibold">AUTONOMOUS DISPATCH</span>
              <span className="text-xs font-bold text-white">
                {autonomousAgentEnabled ? 'AI Sentinel Autonomous' : 'Human-in-the-Loop'}
              </span>
            </div>
            <button
              onClick={() => {
                setAutonomousAgentEnabled(!autonomousAgentEnabled);
                setAgentLogs(prev => [
                  `${new Date().toLocaleTimeString()} [SENTINEL-9] Dispatch mode switched to: ${!autonomousAgentEnabled ? 'Fully Autonomous' : 'Supervised Manual'}.`,
                  ...prev
                ]);
              }}
              className={`w-12 h-6 rounded-full p-0.5 transition-colors cursor-pointer ${
                autonomousAgentEnabled ? 'bg-sky-500' : 'bg-slate-700'
              }`}
            >
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                autonomousAgentEnabled ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>
        </div>

        {/* Future Grid 4 Key Core Vital Metrics */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-sky-500/20">
          <div className="bg-[#091326]/70 p-3 rounded-xl border border-sky-500/20">
            <div className="flex items-center justify-between text-[11px] text-sky-300 font-mono">
              <span>Active Drone Corridors</span>
              <Plane className="w-3.5 h-3.5 text-sky-400" />
            </div>
            <div className="text-xl font-black text-white font-mono mt-1">
              4 Active <span className="text-xs text-emerald-400 font-sans font-semibold">(&lt; 15m ETA)</span>
            </div>
            <span className="text-[10px] text-slate-400">Zero ground traffic blockage</span>
          </div>

          <div className="bg-[#091326]/70 p-3 rounded-xl border border-sky-500/20">
            <div className="flex items-center justify-between text-[11px] text-sky-300 font-mono">
              <span>Quantum Latency Saved</span>
              <Zap className="w-3.5 h-3.5 text-sky-400" />
            </div>
            <div className="text-xl font-black text-sky-300 font-mono mt-1">
              -82.8% <span className="text-xs text-sky-400 font-sans font-semibold">Speedup</span>
            </div>
            <span className="text-[10px] text-slate-400">24.5h down to 4.2h transit</span>
          </div>

          <div className="bg-[#091326]/70 p-3 rounded-xl border border-sky-500/20">
            <div className="flex items-center justify-between text-[11px] text-sky-300 font-mono">
              <span>Pathogen Pre-Alert Lead</span>
              <Activity className="w-3.5 h-3.5 text-sky-400" />
            </div>
            <div className="text-xl font-black text-emerald-300 font-mono mt-1">
              18–26 Days <span className="text-xs text-emerald-400 font-sans font-semibold">Pre-Surge</span>
            </div>
            <span className="text-[10px] text-slate-400">Wastewater genomic early warning</span>
          </div>

          <div className="bg-[#091326]/70 p-3 rounded-xl border border-sky-500/20">
            <div className="flex items-center justify-between text-[11px] text-sky-300 font-mono">
              <span>Cold-Chain Spoilage</span>
              <ThermometerSnowflake className="w-3.5 h-3.5 text-sky-400" />
            </div>
            <div className="text-xl font-black text-emerald-300 font-mono mt-1">
              0.00% <span className="text-xs text-emerald-400 font-sans font-semibold">Guaranteed</span>
            </div>
            <span className="text-[10px] text-slate-400">Cryptographically verified IoT</span>
          </div>
        </div>
      </div>

      {scrambleSuccess && (
        <div className="p-4 rounded-xl bg-sky-950/80 border border-sky-400/60 text-sky-100 flex items-center justify-between gap-3 animate-in fade-in">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
            <span className="text-xs font-semibold">{scrambleSuccess}</span>
          </div>
          <button 
            onClick={() => setScrambleSuccess(null)}
            className="text-xs text-sky-400 hover:text-white font-mono cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* SECTION 1: Autonomous eVTOL Medical Drone Fleet Radar & Live Corridors */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Interactive Tactical Radar & Drone Mission Control */}
        <div className="lg:col-span-2 bg-[#0c1427] border border-sky-500/20 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-sky-900/40">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                <Plane className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  Autonomous eVTOL Tactical Drone Fleet
                </h3>
                <span className="text-xs text-sky-400 font-mono">
                  Continuous Beyond Visual Line of Sight (BVLOS) Medical Corridors
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleScrambleDrone}
                disabled={isScrambling}
                className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-sky-500/20 cursor-pointer disabled:opacity-50"
              >
                <Rocket className={`w-3.5 h-3.5 ${isScrambling ? 'animate-bounce' : ''}`} />
                <span>{isScrambling ? 'Scrambling...' : 'Scramble Emergency Drone'}</span>
              </button>
            </div>
          </div>

          {/* Drones List & Live Flight Progress */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {drones.map(drone => {
              const isSelected = drone.id === selectedDroneId;
              const progressPct = Math.round((drone.distanceTraveledKm / drone.distanceKm) * 100);

              return (
                <div
                  key={drone.id}
                  onClick={() => setSelectedDroneId(drone.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-sky-950/50 border-sky-400 shadow-md shadow-sky-950/60'
                      : 'bg-[#080e1b] border-slate-800/80 hover:border-sky-500/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                      <strong className="text-white text-xs font-mono font-bold">{drone.callsign}</strong>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      drone.status === 'IN_FLIGHT'
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-400/40'
                        : drone.status === 'DISPATCHED'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                        : drone.status === 'DELIVERED'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {drone.status}
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-300 mt-2 line-clamp-1">
                    <span className="text-slate-400">To:</span> <strong className="text-white">{drone.destination}</strong>
                  </div>

                  <div className="text-[11px] text-sky-300 font-medium mt-1 flex items-center gap-1.5">
                    <Boxes className="w-3 h-3 text-sky-400 shrink-0" />
                    <span className="truncate">{drone.payloadName}</span>
                  </div>

                  {/* Flight Progress Bar */}
                  <div className="mt-3 space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>{drone.distanceTraveledKm} km / {drone.distanceKm} km</span>
                      <span className="text-sky-300 font-bold">ETA: {drone.targetEtaMinutes}m</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full transition-all duration-500" 
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>

                  {/* Micro telemetry footer */}
                  <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1 text-sky-300">
                      <ThermometerSnowflake className="w-3 h-3 text-sky-400" />
                      {drone.tempCelsius}°C
                    </span>
                    <span className="flex items-center gap-1">
                      <BatteryCharging className="w-3 h-3 text-emerald-400" />
                      {drone.batteryPercent}%
                    </span>
                    <span className="flex items-center gap-1">
                      <Wind className="w-3 h-3 text-slate-400" />
                      {drone.flightSpeedKmh} km/h
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Col: Active Drone Live Cockpit Telemetry */}
        <div className="bg-[#0c1427] border border-sky-500/20 rounded-2xl p-5 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-sky-900/40">
              <div>
                <span className="text-[10px] font-mono uppercase text-sky-400 font-semibold">Tactical Link #9</span>
                <h3 className="text-sm font-bold text-white tracking-tight">{activeDrone.callsign}</h3>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-400/30">
                {activeDrone.model}
              </span>
            </div>

            {/* Simulated Live Vector Flight Instrument */}
            <div className="p-4 rounded-xl bg-[#070c18] border border-sky-500/30 text-center relative overflow-hidden">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Live Cryo-Payload Monitor</div>
              <div className="text-3xl font-black text-sky-300 font-mono mt-1 flex items-center justify-center gap-2">
                <ThermometerSnowflake className="w-6 h-6 text-sky-400 animate-pulse" />
                <span>{activeDrone.tempCelsius}°C</span>
              </div>
              <div className="text-[11px] text-emerald-400 font-semibold mt-1">
                Safe Range: {activeDrone.tempMin}°C to {activeDrone.tempMax}°C (Unbroken Seal)
              </div>
              <div className="text-[10px] text-slate-400 font-mono mt-2">
                Altitude: <strong className="text-white">{activeDrone.altitudeMeters}m AGL</strong> • Speed: <strong className="text-white">{activeDrone.flightSpeedKmh} km/h</strong>
              </div>
            </div>

            {/* Mission Route Details */}
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-[#080e1b] border border-slate-800 text-[11px]">
                <span className="text-slate-400 block text-[10px] uppercase font-mono">Departure Terminal</span>
                <strong className="text-white">{activeDrone.departure}</strong>
              </div>
              <div className="p-2.5 rounded-lg bg-[#080e1b] border border-slate-800 text-[11px]">
                <span className="text-slate-400 block text-[10px] uppercase font-mono">Destination PHC</span>
                <strong className="text-sky-300">{activeDrone.destination}</strong>
              </div>
              <div className="p-2.5 rounded-lg bg-[#080e1b] border border-slate-800 text-[11px]">
                <span className="text-slate-400 block text-[10px] uppercase font-mono">Cargo Payload</span>
                <strong className="text-white">{activeDrone.payloadName}</strong>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80">
            <button
              onClick={() => setActiveTab('map')}
              className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Inspect GIS Flight Vectors on National Map</span>
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 2: Quantum Multi-Echelon Dynamic Routing Engine */}
      <div className="bg-[#0c1427] border border-sky-500/20 rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-sky-900/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
              <Network className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">
                Quantum-Inspired Multi-Echelon Dynamic Routing Engine (Q-VRP)
              </h3>
              <p className="text-xs text-slate-400">
                Replaces rigid hierarchical hub-and-spoke with dynamic graph annealing across 650 public healthcare nodes.
              </p>
            </div>
          </div>

          <button
            onClick={handleRunQuantumOptimization}
            disabled={quantumSolving}
            className="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-sky-500/20 cursor-pointer disabled:opacity-50"
          >
            <Zap className={`w-3.5 h-3.5 ${quantumSolving ? 'animate-spin' : ''}`} />
            <span>{quantumSolving ? 'Solving Quantum Graph...' : 'Re-Run Quantum Optimization'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Classical Baseline vs Quantum Comparison Card */}
          <div className="p-4 rounded-xl bg-[#080e1b] border border-slate-800 space-y-3">
            <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Classical Hub & Spoke (2020)</span>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Total Transit Distance:</span>
                <strong className="text-white font-mono">{quantumResult.originalDistanceKm} km</strong>
              </div>
              <div className="flex justify-between">
                <span>Delivery Latency:</span>
                <strong className="text-rose-400 font-mono">{quantumResult.originalHours} hrs</strong>
              </div>
              <div className="flex justify-between">
                <span>Spoilage Risk:</span>
                <strong className="text-amber-400 font-mono">14.2%</strong>
              </div>
              <div className="flex justify-between">
                <span>CO₂ Emissions:</span>
                <strong className="text-slate-400 font-mono">1,320 kg</strong>
              </div>
            </div>
          </div>

          {/* Quantum Result Card */}
          <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-400/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-sky-400 uppercase font-bold">Quantum Mesh Routing (2030)</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-400/40">
                ACTIVE
              </span>
            </div>
            <div className="space-y-1.5 text-xs text-sky-100">
              <div className="flex justify-between">
                <span>Optimized Distance:</span>
                <strong className="text-white font-mono">{quantumResult.quantumDistanceKm} km (-{quantumResult.distanceSavedPercent}%)</strong>
              </div>
              <div className="flex justify-between">
                <span>Delivery Latency:</span>
                <strong className="text-emerald-300 font-mono font-bold">{quantumResult.quantumHours} hrs (-{quantumResult.timeSavedPercent}%)</strong>
              </div>
              <div className="flex justify-between">
                <span>Spoilage Risk:</span>
                <strong className="text-emerald-300 font-mono font-bold">{quantumResult.spoilageRiskPercent}%</strong>
              </div>
              <div className="flex justify-between">
                <span>Carbon Reduction:</span>
                <strong className="text-sky-300 font-mono font-bold">-{quantumResult.carbonSavedKg} kg CO₂</strong>
              </div>
            </div>
          </div>

          {/* Real-Time Node Convergence Summary */}
          <div className="p-4 rounded-xl bg-[#080e1b] border border-slate-800 space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Active Graph Topology</span>
              <div className="text-2xl font-black text-white font-mono mt-1">
                {quantumResult.nodesOptimized} <span className="text-xs text-sky-400 font-sans font-semibold">Echelon Nodes</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                Autonomous dynamic cross-linking bypasses congested state highways and redirects priority payloads to eVTOL air corridors.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-emerald-400">
              <span>Status: Synchronized</span>
              <span>18ms Ingress</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Pathogen Bio-Surveillance & Genomic Drift AI Sentinel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Genomic Outbreak Early Sentinel */}
        <div className="lg:col-span-2 bg-[#0c1427] border border-sky-500/20 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-sky-900/40">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  Pre-Symptomatic Wastewater Genomic AI Sentinel
                </h3>
                <p className="text-xs text-slate-400">
                  Detects viral mutation drifts 18–26 days before clinical hospital footfall surges.
                </p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-400/30">
              Next-Gen Sequencing (NGS)
            </span>
          </div>

          <div className="space-y-3">
            {pathogens.map(p => (
              <div key={p.id} className="p-3.5 rounded-xl bg-[#080e1b] border border-slate-800 hover:border-sky-500/40 transition-colors space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                    <strong className="text-white text-xs font-semibold">{p.pathogenName}</strong>
                    <span className="text-[10px] font-mono text-slate-400">({p.variant})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-950/70 text-rose-300 border border-rose-800/60">
                      {p.riskLevel}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-950/70 text-sky-300 border border-sky-800/60">
                      {p.daysBeforeSymptomSurge} Days Pre-Surge
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1 font-mono text-slate-300">
                  <div className="bg-[#0b1326] p-2 rounded border border-slate-800/80">
                    <span className="text-[10px] text-slate-500 block">District Focus</span>
                    <strong className="text-sky-300">{p.affectedDistrict}</strong>
                  </div>
                  <div className="bg-[#0b1326] p-2 rounded border border-slate-800/80">
                    <span className="text-[10px] text-slate-500 block">Transmission Velocity</span>
                    <strong className="text-rose-300 font-mono">R₀ = {p.transmissionVelocityR0}</strong>
                  </div>
                  <div className="bg-[#0b1326] p-2 rounded border border-slate-800/80">
                    <span className="text-[10px] text-slate-500 block">Pre-Allocated Stock</span>
                    <strong className="text-emerald-300 font-mono">{(p.preAllocatedDoses).toLocaleString()} Units</strong>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 pt-1 flex items-center justify-between">
                  <span className="truncate">Therapeutic Target: <strong className="text-slate-200">{p.recommendedTherapeutic}</strong></span>
                  <span className="text-[10px] font-mono text-sky-400 shrink-0">Source: {p.detectionSource}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Cold-Chain IoT Cryptographic Chain of Custody */}
        <div className="bg-[#0c1427] border border-sky-500/20 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-sky-900/40">
            <div className="flex items-center gap-2">
              <ThermometerSnowflake className="w-4 h-4 text-sky-400" />
              <h3 className="text-sm font-bold text-white tracking-tight">
                Cold-Chain IoT & Smart Ledger
              </h3>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/70 text-emerald-300 border border-emerald-800/60">
              SHA-256 Ledger
            </span>
          </div>

          <div className="space-y-3">
            {coldSensors.map(sensor => (
              <div key={sensor.id} className="p-3 rounded-xl bg-[#080e1b] border border-slate-800 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sky-300 font-bold">{sensor.sensorId}</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">
                    {sensor.status}
                  </span>
                </div>

                <div className="text-white font-medium text-[11px]">
                  {sensor.medicineName}
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Location: <strong className="text-slate-200">{sensor.facility}</strong></span>
                  <span className="text-sky-300 font-bold">{sensor.currentTemp}°C</span>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-slate-800/80">
                  <span>Hash: {sensor.cryptographicHash}</span>
                  <span>Ping: {sensor.lastPingSecondsAgo}s ago</span>
                </div>
              </div>
            ))}
          </div>

          {/* Autonomous Sentinel Live Event Log */}
          <div className="p-3 rounded-xl bg-[#060a14] border border-sky-500/20 space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-sky-400 font-semibold">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>SENTINEL-9 EVENT LOG</span>
              </span>
              <span className="text-emerald-400">LIVE</span>
            </div>
            <div className="space-y-1 font-mono text-[10px] text-slate-300 max-h-32 overflow-y-auto pr-1">
              {agentLogs.map((log, idx) => (
                <div key={idx} className="leading-tight py-0.5 border-b border-slate-800/40">
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
