import React, { useState } from 'react';
import { 
  Activity, 
  AlertCircle, 
  CheckCircle2, 
  AlertTriangle, 
  Bell, 
  Radio, 
  Filter, 
  MapPin, 
  Clock, 
  Layers,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { LIVE_ALERTS } from '../../data/healthGridData';

export const LiveNetworkPanel: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('Telangana');
  const [filterSeverity, setFilterSeverity] = useState<string>('all');

  const filteredAlerts = filterSeverity === 'all' 
    ? LIVE_ALERTS 
    : LIVE_ALERTS.filter(a => a.severity === filterSeverity);

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical':
        return {
          dot: 'bg-rose-500 animate-ping',
          solid: 'bg-rose-500',
          badge: 'bg-rose-950/70 border-rose-500/50 text-rose-300',
          icon: '🔴'
        };
      case 'risk':
        return {
          dot: 'bg-amber-500 animate-pulse',
          solid: 'bg-amber-500',
          badge: 'bg-amber-950/70 border-amber-500/50 text-amber-300',
          icon: '🟠'
        };
      case 'watch':
        return {
          dot: 'bg-yellow-500',
          solid: 'bg-yellow-500',
          badge: 'bg-yellow-950/70 border-yellow-500/50 text-yellow-300',
          icon: '🟡'
        };
      default:
        return {
          dot: 'bg-emerald-500',
          solid: 'bg-emerald-500',
          badge: 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300',
          icon: '🟢'
        };
    }
  };

  return (
    <section id="live-network" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#040714] overflow-hidden">
      
      {/* Background radial ambiance */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
              <Activity className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
              <span>SPATIOTEMPORAL EPIDEMIC RADAR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              National Health Network
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Real-time visibility across Primary Health Centres, districts and regional supply chains.
            </p>
          </div>

          {/* Regional Selector Pills */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-slate-400">Sector Focus:</span>
            {['Telangana', 'Maharashtra', 'Karnataka', 'All India'].map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1 rounded-xl transition-all cursor-pointer ${
                  selectedRegion === reg
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 font-bold shadow-sm'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Large Glass Dashboard Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side (7 Cols): Large India Health Map */}
          <div className="lg:col-span-7 rounded-3xl bg-[#080d21]/90 border border-cyan-500/30 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4 relative z-10">
              <div>
                <div className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>SYNOPTIC PHC SURVEILLANCE MAP — {selectedRegion.toUpperCase()}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  680 Districts • 12,482 Telemetry-Linked Nodes
                </div>
              </div>

              {/* Map Legend */}
              <div className="flex items-center gap-3 bg-[#040817] px-3 py-1.5 rounded-xl border border-white/10 text-[11px] font-mono">
                <span className="flex items-center gap-1 text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> 🟢 Stable
                </span>
                <span className="flex items-center gap-1 text-yellow-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /> 🟡 Watch
                </span>
                <span className="flex items-center gap-1 text-amber-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> 🟠 Risk
                </span>
                <span className="flex items-center gap-1 text-rose-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" /> 🔴 Critical
                </span>
              </div>
            </div>

            {/* Interactive Vector Map Stage */}
            <div className="relative w-full h-[380px] flex items-center justify-center">
              <svg viewBox="0 0 520 480" className="w-full h-full drop-shadow-[0_0_30px_rgba(6,182,212,0.25)]">
                
                {/* Outlined Region Shapes */}
                <path
                  d="M 240 40 
                     C 255 50, 275 60, 290 85
                     C 300 105, 345 120, 370 140
                     C 400 155, 420 165, 425 190
                     C 405 195, 385 200, 375 215
                     C 360 225, 340 215, 320 230
                     C 335 250, 355 280, 350 320
                     C 345 355, 320 400, 285 450
                     C 265 480, 255 490, 250 500
                     C 240 480, 215 435, 195 390
                     C 175 350, 160 310, 155 280
                     C 150 250, 130 230, 120 210
                     C 105 190, 115 160, 140 150
                     C 160 140, 185 120, 200 90
                     C 210 65, 230 45, 240 40 Z"
                  fill="#071228"
                  stroke="#0284c7"
                  strokeWidth="1.5"
                  strokeOpacity="0.6"
                />

                {/* Sub-State Borders (Abstract GIS Mesh) */}
                <path d="M 200 180 Q 260 170 320 190" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 180 250 Q 250 240 330 260" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 210 320 Q 270 310 330 330" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />

                {/* Telangana Sector Focus Highlight Zone */}
                <ellipse cx="270" cy="325" rx="45" ry="30" fill="#06b6d4" fillOpacity="0.12" stroke="#22d3ee" strokeWidth="1" strokeDasharray="4,4" />
                <text x="270" y="325" textAnchor="middle" fill="#67e8f9" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  TELANGANA CLUSTER
                </text>

                {/* Nodes with Color-Coded Statuses */}
                
                {/* 🔴 Critical Nodes (Warangal, Karimnagar) */}
                <g>
                  <circle cx="295" cy="315" r="14" fill="#ef4444" fillOpacity="0.25" className="animate-ping" />
                  <circle cx="295" cy="315" r="7" fill="#ef4444" />
                  <circle cx="295" cy="315" r="3" fill="#ffffff" />
                  <text x="310" y="318" fill="#fca5a5" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    Warangal (🔴 Critical: 27 PHCs)
                  </text>
                </g>

                {/* 🟠 Risk Node (Nalgonda) */}
                <g>
                  <circle cx="280" cy="345" r="10" fill="#f59e0b" fillOpacity="0.3" className="animate-pulse" />
                  <circle cx="280" cy="345" r="6" fill="#f59e0b" />
                  <circle cx="280" cy="345" r="2.5" fill="#ffffff" />
                  <text x="295" y="348" fill="#fcd34d" fontSize="9" fontFamily="monospace">
                    Nalgonda (🟠 Surge +32%)
                  </text>
                </g>

                {/* 🟡 Watch Node (Mahabubnagar) */}
                <g>
                  <circle cx="245" cy="355" r="6" fill="#eab308" />
                  <circle cx="245" cy="355" r="2.5" fill="#ffffff" />
                  <text x="175" y="360" fill="#fef08a" fontSize="9" fontFamily="monospace">
                    Mahabubnagar (🟡 Staff)
                  </text>
                </g>

                {/* 🟢 Stable Major Hubs (Hyderabad, Delhi, Bangalore, Mumbai, Chennai) */}
                <g>
                  <circle cx="260" cy="330" r="8" fill="#10b981" />
                  <circle cx="260" cy="330" r="3.5" fill="#ffffff" />
                  <text x="180" y="333" fill="#6ee7b7" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    Hyderabad (🟢 Hub)
                  </text>
                </g>

                <g>
                  <circle cx="230" cy="140" r="6" fill="#10b981" />
                  <text x="240" y="143" fill="#94a3b8" fontSize="9" fontFamily="monospace">
                    Delhi NCR (🟢 Stable)
                  </text>
                </g>

                <g>
                  <circle cx="160" cy="290" r="6" fill="#10b981" />
                  <text x="110" y="293" fill="#94a3b8" fontSize="9" fontFamily="monospace">
                    Mumbai (🟢 Stable)
                  </text>
                </g>

                <g>
                  <circle cx="240" cy="405" r="6" fill="#10b981" />
                  <text x="175" y="415" fill="#94a3b8" fontSize="9" fontFamily="monospace">
                    Bengaluru (🟢 Stable)
                  </text>
                </g>

                <g>
                  <circle cx="290" cy="390" r="6" fill="#10b981" />
                  <text x="300" y="393" fill="#94a3b8" fontSize="9" fontFamily="monospace">
                    Chennai (🟢 Stable)
                  </text>
                </g>

                {/* Background telemetry dots */}
                {[
                  { x: 210, y: 190, c: '#10b981' },
                  { x: 270, y: 180, c: '#10b981' },
                  { x: 330, y: 220, c: '#10b981' },
                  { x: 350, y: 270, c: '#10b981' },
                  { x: 220, y: 260, c: '#10b981' },
                  { x: 190, y: 340, c: '#10b981' },
                  { x: 250, y: 440, c: '#10b981' },
                ].map((d, i) => (
                  <circle key={i} cx={d.x} cy={d.y} r="3" fill={d.c} opacity="0.6" />
                ))}

                {/* Animated supply stream from Hyderabad to Warangal */}
                <path
                  d="M 260 330 Q 275 320 295 315"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="3"
                  strokeDasharray="6,4"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {/* Bottom Status Ticker */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>Active Telemetry: 12,482 PHCs reporting</span>
              </span>
              <span className="text-cyan-300 font-bold">Latency: 8.2ms</span>
            </div>

          </div>

          {/* Right Side (5 Cols): Vertical Live Alerts Panel */}
          <div className="lg:col-span-5 rounded-3xl bg-[#080d21]/90 border border-cyan-500/30 p-6 sm:p-7 backdrop-blur-2xl shadow-2xl flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                    <Bell className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white">Live Alerts</h3>
                    <p className="text-[11px] font-mono text-slate-400">Continuous AI Incident Pipeline</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-950/60 border border-rose-500/40 text-rose-300 font-bold">
                  4 Active
                </span>
              </div>

              {/* Alerts List */}
              <div className="space-y-3.5">
                {filteredAlerts.map((alert) => {
                  const badge = getSeverityBadge(alert.severity);

                  return (
                    <div
                      key={alert.id}
                      className="p-4 rounded-2xl bg-[#040816]/90 border border-white/[0.08] hover:border-cyan-500/40 transition-all space-y-2 group shadow-lg"
                    >
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${badge.badge}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${badge.solid}`} />
                          <span>{alert.badgeText}</span>
                        </span>
                        
                        <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {alert.timeAgo}
                        </span>
                      </div>

                      <div className="text-xs font-display font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {alert.title}
                      </div>

                      <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                        {alert.description}
                      </p>

                      <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-cyan-400/80">
                        <span>{alert.district}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Panel Footer Action */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">
                AI Auto-Escalation Active
              </span>
              <button className="text-xs font-mono text-cyan-300 hover:text-white flex items-center gap-1 cursor-pointer">
                <span>View All 18 Incidents</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
