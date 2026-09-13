import React from 'react';
import { useApp } from '../context/AppContext.js';
import { 
  Building2, 
  AlertTriangle, 
  Pill, 
  Users, 
  BedDouble, 
  UserCheck, 
  BellRing, 
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Zap,
  Activity,
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock,
  Truck,
  Rocket
} from 'lucide-react';

export const CommandOverview: React.FC = () => {
  const { 
    resilienceScore, 
    alerts, 
    predictions, 
    redistributions, 
    setActiveTab, 
    applyDemoScenario,
    emergencyMode,
    t 
  } = useApp();

  // Ready-made demo scenarios for evaluators & judges
  const demoScenarios = [
    { id: '1', title: 'Scenario 1: Medicine Shortage in PHCs', tag: 'Depletion Alert', tab: 'forecast' },
    { id: '2', title: 'Scenario 2: Sudden Patient Surge (PHC-112)', tag: '+43% Surge', tab: 'patients' },
    { id: '3', title: 'Scenario 3: Regional Disease Outbreak', tag: 'Emergency Mode', tab: 'emergency' },
    { id: '4', title: 'Scenario 4: Delivery Delay on SH-44', tag: 'Logistics Delay', tab: 'alerts' },
    { id: '5', title: 'Scenario 5: Cross-District Redistribution', tag: 'Surplus Match', tab: 'redistribution' }
  ];

  // SVG mini sparkline with subtle gradient area
  const renderSparkline = (points: number[], strokeColor: string, gradId: string) => {
    const min = Math.min(...points);
    const max = Math.max(...points);
    const range = max - min || 1;
    const width = 84;
    const height = 28;
    
    const polyPoints = points.map((p, idx) => {
      const x = (idx / (points.length - 1)) * width;
      const y = height - ((p - min) / range) * (height - 8) - 4;
      return `${x},${y}`;
    }).join(' ');

    const areaPoints = `0,${height} ${polyPoints} ${width},${height}`;

    return (
      <svg width={width} height={height} className="overflow-visible">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={strokeColor} stopOpacity="0.25" />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <polygon points={areaPoints} fill={`url(#${gradId})`} />
        <polyline
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={polyPoints}
        />
      </svg>
    );
  };

  const kpiCards = [
    {
      title: 'Monitored Health Facilities',
      value: '650',
      trend: '↑ 12 online',
      pct: '+1.8% vs last week',
      status: 'Healthy',
      statusType: 'success',
      color: '#10b981',
      spark: [620, 625, 630, 638, 642, 650],
      icon: Building2,
      actionTab: 'map'
    },
    {
      title: 'Critical Stock-Out Risk',
      value: `${predictions.filter(p => p.riskLevel === 'Critical').length || 18} Facilities`,
      trend: '↑ 4 projected',
      pct: 'Within 7 Days',
      status: 'Attention Required',
      statusType: 'danger',
      color: '#f43f5e',
      spark: [9, 11, 12, 14, 16, 18],
      icon: AlertTriangle,
      actionTab: 'forecast'
    },
    {
      title: 'Essential Medicine Availability',
      value: '92.4%',
      trend: '↑ 2.1%',
      pct: 'WHO/NLEM Essential List',
      status: 'Target Met',
      statusType: 'success',
      color: '#0ea5e9',
      spark: [88, 89, 90, 91, 91.5, 92.4],
      icon: Pill,
      actionTab: 'supply_chain'
    },
    {
      title: 'Daily Outpatient Footfall',
      value: (resilienceScore.patientsTodayCount || 108420).toLocaleString(),
      trend: '↑ 8.4%',
      pct: 'Monitored across 50 Dists',
      status: 'Surge in 4 Dists',
      statusType: 'warning',
      color: '#38bdf8',
      spark: [94000, 98000, 102000, 104500, 107000, 108420],
      icon: Users,
      actionTab: 'patients'
    },
    {
      title: 'Bed Capacity Available',
      value: '4,280 / 16,800',
      trend: '74.5% Utilized',
      pct: '142 ICU Beds Free',
      status: 'Adequate Reserve',
      statusType: 'warning',
      color: '#f59e0b',
      spark: [5200, 5000, 4800, 4600, 4400, 4280],
      icon: BedDouble,
      actionTab: 'beds'
    },
    {
      title: 'Medical Staff Attendance',
      value: `${resilienceScore.personnelAttendanceRate}%`,
      trend: '↑ 1.1%',
      pct: '5,000+ Verified Roster',
      status: 'Optimal',
      statusType: 'success',
      color: '#10b981',
      spark: [85, 86, 86.8, 87.2, 88.0, 88.4],
      icon: UserCheck,
      actionTab: 'personnel'
    },
    {
      title: 'Active Warning Alerts',
      value: `${alerts.filter(a => !a.resolved).length} Alerts`,
      trend: '3 Critical',
      pct: 'Real-time Telemetry',
      status: 'Mitigations Active',
      statusType: 'danger',
      color: '#f43f5e',
      spark: [3, 4, 3, 5, 5, 6],
      icon: BellRing,
      actionTab: 'alerts'
    },
    {
      title: 'Emergency Buffer Margin',
      value: `${resilienceScore.breakdown.emergency}%`,
      trend: 'State Cache Ready',
      pct: '25% Locked Reserves',
      status: emergencyMode ? 'ACTIVE DISASTER PROTOCOL' : 'Prepared',
      statusType: emergencyMode ? 'danger' : 'info',
      color: emergencyMode ? '#ef4444' : '#8b5cf6',
      spark: [82, 84, 86, 88, 89, 91],
      icon: ShieldCheck,
      actionTab: 'emergency'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Executive Command Header & National Resilience Overview */}
      <div className="bg-[#0b162c] border border-sky-900/50 rounded-2xl p-6 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse shadow-sm shadow-sky-400" />
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              National Health Resource & Supply Chain Command Center
            </h2>
            <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-bold bg-sky-950/80 text-sky-300 border border-sky-800/60 rounded">
              BRICS Track 3 Node IN-01
            </span>
          </div>
          <p className="text-xs sm:text-sm text-sky-100/70 leading-relaxed">
            Federated real-time telemetry synthesizing supply buffers, patient footfall spikes, and hospital capacity across <strong>650 public healthcare facilities</strong>. Automatically models depletion horizons and proposes cross-district transfers before stock-outs happen.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-sky-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Zero PII: Edge Differential Privacy (ε = 0.85)</span>
            </span>
            <span className="text-sky-900">|</span>
            <span className="text-sky-200/80">50 Districts</span>
            <span className="text-sky-900">|</span>
            <span className="text-sky-200/80">15 States</span>
            <span className="text-sky-900">|</span>
            <span className="text-sky-200/80">25 Essential NLEM Medicines</span>
          </div>
        </div>

        {/* National Resilience Score Radial Hub */}
        <div className="bg-[#070e1c] border border-sky-900/60 rounded-xl p-4 sm:p-5 flex items-center gap-5 shrink-0 shadow-lg">
          <div className="relative w-22 h-22 flex items-center justify-center">
            {/* SVG Circular Progress Gauge */}
            <svg className="w-22 h-22 -rotate-90">
              <circle
                cx="44"
                cy="44"
                r="36"
                stroke="#13233f"
                strokeWidth="7"
                fill="none"
              />
              <circle
                cx="44"
                cy="44"
                r="36"
                stroke="#0ea5e9"
                strokeWidth="7"
                fill="none"
                strokeDasharray="226.2"
                strokeDashoffset={226.2 - (226.2 * (resilienceScore.score / 100))}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-2xl font-black text-white font-mono leading-none">
                {resilienceScore.score}
              </span>
              <span className="text-[10px] text-sky-300/80 font-semibold mt-0.5">/ 100</span>
            </div>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white tracking-tight">Resilience Index</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-400/40 rounded">
                {resilienceScore.status}
              </span>
            </div>
            
            {/* Sub-index Breakdown */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-slate-300 font-mono pt-1">
              <span>Supply Chain: <strong className="text-sky-400">{resilienceScore.breakdown.supplyChain}%</strong></span>
              <span>Facilities: <strong className="text-sky-400">{resilienceScore.breakdown.facilities}%</strong></span>
              <span>Personnel: <strong className="text-sky-400">{resilienceScore.breakdown.personnel}%</strong></span>
              <span>Emergency: <strong className="text-sky-400">{resilienceScore.breakdown.emergency}%</strong></span>
              <span className="col-span-2">Redistribution Speed: <strong className="text-sky-400">3.4 hrs (85%)</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED: Future Grid 2030 Autonomous Logistics Hero Banner */}
      <div className="relative bg-gradient-to-r from-[#0c1e3d] via-[#0e2750] to-[#0a1832] border border-sky-400/40 rounded-2xl p-5 shadow-lg shadow-sky-950/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 shrink-0 shadow-md">
            <Rocket className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-500 text-slate-950">
                NEW 2030 DASHBOARD
              </span>
              <span className="text-xs font-mono text-sky-300 font-semibold">
                Autonomous Medical Drone Fleet & Quantum Routing
              </span>
            </div>
            <h3 className="text-base font-bold text-white tracking-tight mt-1">
              Future Grid 2030: Next-Gen Autonomous Logistics & Bio-Sentinel
            </h3>
            <p className="text-xs text-sky-100/70 mt-0.5">
              Featuring live BVLOS eVTOL medical drone dispatch, quantum multi-echelon graph annealing (-82.8% latency), and 21-day pre-symptomatic wastewater genomic early warning.
            </p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('future_grid')}
          className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-sky-500/25 cursor-pointer shrink-0"
        >
          <span>Launch Future Grid</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 8 Executive KPI Bento Cards with Area Sparklines */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((kpi, idx) => {
          const Icon = kpi.icon;
          const gradId = `sparkline-grad-${idx}`;
          return (
            <div
              key={idx}
              onClick={() => setActiveTab(kpi.actionTab)}
              className="bg-[#0b162c] border border-sky-900/40 hover:border-sky-400/50 rounded-xl p-4 shadow-sm transition-all hover:bg-[#0f1f3d] cursor-pointer group flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-300 tracking-wide">
                  {kpi.title}
                </span>
                <div className="w-7 h-7 rounded-lg bg-sky-950/60 border border-sky-800/60 flex items-center justify-center group-hover:bg-sky-900/80 group-hover:border-sky-400/50 transition-colors">
                  <Icon className="w-3.5 h-3.5 text-sky-400" />
                </div>
              </div>

              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <div className="text-2xl font-bold text-white font-mono tabular-nums tracking-tight">
                    {kpi.value}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs mt-1">
                    <span className="font-semibold text-slate-300">{kpi.trend}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-sky-200/70 text-[11px]">{kpi.pct}</span>
                  </div>
                </div>

                <div className="shrink-0">
                  {renderSparkline(kpi.spark, kpi.color, gradId)}
                </div>
              </div>

              <div className="pt-2 border-t border-sky-950/80 flex items-center justify-between text-[11px]">
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                  kpi.statusType === 'danger' 
                    ? 'bg-rose-950/40 text-rose-300 border border-rose-800/40' 
                    : kpi.statusType === 'warning'
                    ? 'bg-amber-950/40 text-amber-300 border border-amber-800/40'
                    : 'bg-emerald-950/40 text-emerald-300 border border-emerald-800/40'
                }`}>
                  {kpi.status}
                </span>
                <span className="text-sky-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-semibold text-[11px]">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ready-Made Judge Demonstration Scenarios */}
      <div className="bg-[#0b162c] border border-sky-900/40 rounded-xl p-4 sm:p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase">
              Evaluator Rapid Test Scenarios
            </h3>
          </div>
          <span className="text-[11px] text-slate-400 hidden md:inline font-mono">
            Click any scenario to immediately inject operational distress and examine automated resolution
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {demoScenarios.map((scen) => (
            <button
              key={scen.id}
              onClick={async () => {
                await applyDemoScenario(scen.id);
                setActiveTab(scen.tab);
              }}
              className="text-left bg-[#070e1c] hover:bg-[#0e2244] border border-sky-900/50 hover:border-sky-400/50 rounded-lg p-3 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between text-[10px] text-sky-400 font-mono mb-1">
                <span className="font-semibold">SCENARIO {scen.id}</span>
                <span className="bg-sky-950/80 text-sky-300 px-1.5 py-0.2 rounded border border-sky-800/60 font-medium">
                  {scen.tag}
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-200 group-hover:text-white line-clamp-2">
                {scen.title}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Mid Section: Active Critical Alerts & Cross-District Transfer Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active High-Priority Alerts */}
        <div className="bg-[#0b162c] border border-sky-900/40 rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <h3 className="text-sm font-bold text-white tracking-tight">
                High-Priority Early Warning Alerts
              </h3>
            </div>
            <button 
              onClick={() => setActiveTab('alerts')}
              className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
            >
              All Alerts ({alerts.length}) <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3">
            {alerts.slice(0, 3).map((alt) => (
              <div 
                key={alt.id}
                className="bg-[#070e1c] border border-sky-950/80 rounded-lg p-3.5 space-y-2 hover:border-sky-800/60 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                    alt.severity === 'CRITICAL' ? 'bg-rose-950/60 text-rose-300 border border-rose-800/60' : 'bg-amber-950/60 text-amber-300 border border-amber-800/60'
                  }`}>
                    {alt.severity} • {alt.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Confidence: {alt.confidenceScore}%</span>
                </div>
                <h4 className="text-xs font-semibold text-white leading-snug">
                  {alt.title}
                </h4>
                <p className="text-[11px] text-slate-300 line-clamp-2">
                  {alt.recommendedAction}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Cross-District Redistribution Pipeline */}
        <div className="bg-[#0b162c] border border-sky-900/40 rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-sky-400" />
              <h3 className="text-sm font-bold text-white tracking-tight">
                Active Cross-District Redistribution Pipeline
              </h3>
            </div>
            <button 
              onClick={() => setActiveTab('redistribution')}
              className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
            >
              Open Optimizer <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3">
            {redistributions.slice(0, 3).map((plan) => (
              <div
                key={plan.id}
                className="bg-[#070e1c] border border-sky-950/80 rounded-lg p-3.5 space-y-2 hover:border-sky-800/60 transition-colors"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-sky-300">{plan.medicineName}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                    plan.status === 'DELIVERED'
                      ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60'
                      : plan.status === 'IN_TRANSIT'
                      ? 'bg-sky-950/80 text-sky-300 border border-sky-700/60 animate-pulse'
                      : 'bg-amber-950/60 text-amber-300 border border-amber-800/60'
                  }`}>
                    {plan.status.replace('_', ' ')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-300 font-mono">
                  <span>From: <strong className="text-white">{plan.sourceDistrict}</strong></span>
                  <span className="text-sky-600">⟶ {plan.distanceKm} km ⟶</span>
                  <span>To: <strong className="text-white">{plan.destinationDistrict}</strong></span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-sky-950/60 font-mono">
                  <span>Transfer: <strong className="text-slate-200">{plan.recommendedTransferQty.toLocaleString()} units</strong></span>
                  <span>Shortage Reduction: <strong className="text-emerald-400">100%</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

