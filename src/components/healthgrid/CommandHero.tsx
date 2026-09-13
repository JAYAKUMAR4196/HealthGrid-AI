import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  TrendingUp, 
  AlertTriangle,
  Radio,
  Dna,
  Zap
} from 'lucide-react';

interface CommandHeroProps {
  onOpenCommandCenter: () => void;
  onExploreInsights: () => void;
}

export const CommandHero: React.FC<CommandHeroProps> = ({
  onOpenCommandCenter,
  onExploreInsights
}) => {
  const [activeZone, setActiveZone] = useState<'all' | 'critical' | 'normal' | 'prediction'>('all');

  return (
    <section id="command-center" className="relative pt-10 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030611]">
      
      {/* Luminous Ambient Backdrops */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] rounded-full bg-cyan-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[600px] h-[500px] rounded-full bg-violet-600/20 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (6 Cols): Typography, Subtitle & Actions */}
          <div className="lg:col-span-6 space-y-8 relative z-10">
            
            {/* Small Glowing Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-200 text-xs font-mono font-bold shadow-lg shadow-cyan-500/20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>AI • HEALTH • RESILIENCE</span>
              <span className="text-slate-600">|</span>
              <span className="text-[10px] text-violet-300">BRICS 2026</span>
            </div>

            {/* Large 3-Line Headline */}
            <div className="space-y-1 font-display">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
                Predict.<br />
                Prepare.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-sm">
                  Protect.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
              AI-powered healthcare intelligence for resilient medicine supply chains, PHC networks, and emergency response across regional command centers.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <button
                onClick={onOpenCommandCenter}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-display font-bold text-sm flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all cursor-pointer group"
              >
                <span>Open Command Center</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreInsights}
                className="px-7 py-4 rounded-2xl bg-[#090e1f] hover:bg-[#111933] border border-cyan-500/30 hover:border-cyan-400 text-slate-200 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-cyan-300" />
                <span>Explore AI Insights</span>
              </button>
            </div>

            {/* Small Trust Indicators */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-0.5">
                <div className="text-sm font-display font-black text-white">12,482</div>
                <div className="text-[11px] font-mono text-cyan-300/80">PHCs Connected</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-sm font-display font-black text-white">28 States</div>
                <div className="text-[11px] font-mono text-cyan-300/80">Monitored 24/7</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-sm font-display font-black text-emerald-400">99.2%</div>
                <div className="text-[11px] font-mono text-slate-400">Data Availability</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-sm font-display font-black text-violet-300">Federated</div>
                <div className="text-[11px] font-mono text-slate-400">AI Privacy-Preserved</div>
              </div>
            </div>

          </div>

          {/* Right Column (6 Cols): Futuristic 3D Digital Map of India & Floating Glass Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[520px]">
            
            {/* Map Canvas Glass Container */}
            <div className="relative w-full aspect-[4/3] max-w-[580px] rounded-3xl bg-[#070b1b]/80 border border-cyan-500/30 p-6 backdrop-blur-2xl shadow-2xl shadow-cyan-950/40 overflow-hidden group">
              
              {/* Internal Radar Grid & Polar Rings */}
              <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

              {/* Map Header Controls */}
              <div className="relative z-20 flex items-center justify-between text-xs font-mono border-b border-white/[0.08] pb-3 mb-2">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-white font-bold tracking-wider">INDIA HEALTH SURVEILLANCE MESH</span>
                </div>
                
                <div className="flex items-center gap-1.5 text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                    LIVE STREAM
                  </span>
                </div>
              </div>

              {/* SVG 3D-Style Contoured Map of India with Animated Nodes & Routes */}
              <div className="relative w-full h-[360px] flex items-center justify-center">
                <svg viewBox="0 0 500 520" className="w-full h-full drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                  <defs>
                    <linearGradient id="indiaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#082f49" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#0f172a" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="routePulse" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                    </linearGradient>
                    <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* India Geographic Outline Silhouette Path */}
                  <path
                    d="M 235 35 
                       C 245 42, 270 52, 280 75
                       C 290 95, 335 110, 360 130
                       C 390 145, 415 155, 420 180
                       C 400 185, 375 190, 365 205
                       C 350 215, 330 205, 310 220
                       C 325 240, 345 270, 340 310
                       C 335 345, 310 390, 275 440
                       C 255 470, 245 490, 240 500
                       C 230 480, 205 435, 185 390
                       C 165 350, 150 310, 145 280
                       C 140 250, 120 230, 110 210
                       C 95 190, 105 160, 130 150
                       C 150 140, 175 120, 190 90
                       C 200 65, 220 40, 235 35 Z"
                    fill="url(#indiaGrad)"
                    stroke="#22d3ee"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                    filter="url(#glowFilter)"
                  />

                  {/* Internal Grid Lines & Topo Coordinates */}
                  <line x1="120" y1="200" x2="380" y2="200" stroke="#0284c7" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.3" />
                  <line x1="150" y1="300" x2="350" y2="300" stroke="#0284c7" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.3" />
                  <line x1="240" y1="60" x2="240" y2="480" stroke="#0284c7" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.3" />

                  {/* Inter-District Medicine Supply Routes (Animated Glowing Curves) */}
                  {/* Route 1: Hyderabad (255, 335) -> Warangal (280, 315) */}
                  <path
                    d="M 255 335 Q 270 320 280 315"
                    fill="none"
                    stroke="#00f0ff"
                    strokeWidth="2.5"
                    strokeDasharray="6,4"
                    className="animate-pulse"
                  />
                  {/* Route 2: Mumbai (165, 305) -> Pune -> Hyderabad */}
                  <path
                    d="M 165 305 Q 210 320 255 335"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="1.8"
                    strokeDasharray="4,4"
                    opacity="0.8"
                  />
                  {/* Route 3: Delhi (225, 150) -> Jaipur -> Bhopal (230, 245) */}
                  <path
                    d="M 225 150 Q 210 195 230 245"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="1.8"
                    strokeDasharray="5,5"
                    opacity="0.8"
                  />
                  {/* Route 4: Bhopal -> Nagpur -> Hyderabad */}
                  <path
                    d="M 230 245 Q 245 290 255 335"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                    opacity="0.8"
                  />
                  {/* Route 5: Kolkata (340, 235) -> Bhubaneswar (315, 290) */}
                  <path
                    d="M 340 235 Q 330 265 315 290"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    strokeDasharray="3,3"
                    opacity="0.7"
                  />
                  {/* Route 6: Bangalore (235, 410) -> Chennai (280, 395) */}
                  <path
                    d="M 235 410 Q 255 400 280 395"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="1.8"
                    strokeDasharray="4,4"
                    opacity="0.8"
                  />

                  {/* Pulsing Critical Zone: Warangal / Telangana Cluster (Red/Orange Pulse) */}
                  <circle cx="280" cy="315" r="18" fill="#ef4444" fillOpacity="0.25" className="animate-ping" />
                  <circle cx="280" cy="315" r="9" fill="#ef4444" fillOpacity="0.5" />
                  <circle cx="280" cy="315" r="4.5" fill="#f87171" />
                  <text x="295" y="318" fill="#fca5a5" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    WARANGAL (CRITICAL)
                  </text>

                  {/* Surplus Hub: Hyderabad (Cyan/Green Node) */}
                  <circle cx="255" cy="335" r="14" fill="#06b6d4" fillOpacity="0.2" className="animate-pulse" />
                  <circle cx="255" cy="335" r="7" fill="#06b6d4" />
                  <circle cx="255" cy="335" r="3.5" fill="#ffffff" />
                  <text x="210" y="348" fill="#67e8f9" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    HYDERABAD (+8.4k)
                  </text>

                  {/* Major Hubs / PHC Nodes */}
                  {/* Delhi Node */}
                  <circle cx="225" cy="150" r="12" fill="#3b82f6" fillOpacity="0.2" />
                  <circle cx="225" cy="150" r="6" fill="#60a5fa" />
                  <circle cx="225" cy="150" r="3" fill="#ffffff" />
                  <text x="235" y="152" fill="#93c5fd" fontSize="9" fontFamily="monospace">
                    DELHI CENTRAL
                  </text>

                  {/* Mumbai Node */}
                  <circle cx="165" cy="305" r="6" fill="#38bdf8" />
                  <circle cx="165" cy="305" r="2.5" fill="#ffffff" />
                  <text x="110" y="308" fill="#93c5fd" fontSize="9" fontFamily="monospace">
                    MUMBAI
                  </text>

                  {/* Bangalore Node */}
                  <circle cx="235" cy="410" r="6" fill="#38bdf8" />
                  <circle cx="235" cy="410" r="2.5" fill="#ffffff" />
                  <text x="180" y="420" fill="#93c5fd" fontSize="9" fontFamily="monospace">
                    BENGALURU
                  </text>

                  {/* Kolkata Node */}
                  <circle cx="340" cy="235" r="6" fill="#38bdf8" />
                  <circle cx="340" cy="235" r="2.5" fill="#ffffff" />
                  <text x="350" y="238" fill="#93c5fd" fontSize="9" fontFamily="monospace">
                    KOLKATA
                  </text>

                  {/* AI Prediction Cluster Zone (Purple Hologram) */}
                  <circle cx="230" cy="245" r="16" fill="#8b5cf6" fillOpacity="0.2" className="animate-pulse" />
                  <circle cx="230" cy="245" r="5" fill="#a855f7" />
                  <text x="242" y="248" fill="#d8b4fe" fontSize="9" fontFamily="monospace">
                    BHOPAL (AI PREDICT)
                  </text>

                  {/* Smaller PHC nodes across regions */}
                  {[
                    { x: 195, y: 110, c: '#00f0ff' },
                    { x: 210, y: 180, c: '#00f0ff' },
                    { x: 260, y: 190, c: '#00f0ff' },
                    { x: 285, y: 195, c: '#00f0ff' },
                    { x: 300, y: 220, c: '#00f0ff' },
                    { x: 320, y: 290, c: '#f59e0b' },
                    { x: 275, y: 280, c: '#00f0ff' },
                    { x: 215, y: 270, c: '#00f0ff' },
                    { x: 185, y: 350, c: '#00f0ff' },
                    { x: 210, y: 380, c: '#00f0ff' },
                    { x: 250, y: 450, c: '#00f0ff' },
                    { x: 280, y: 395, c: '#00f0ff' },
                  ].map((pt, i) => (
                    <circle key={i} cx={pt.x} cy={pt.y} r="2.5" fill={pt.c} opacity="0.85" />
                  ))}
                </svg>

                {/* Interactive Legend Overlay inside Map */}
                <div className="absolute bottom-2 left-2 flex flex-wrap items-center gap-2 bg-[#040816]/90 border border-white/10 px-2.5 py-1.5 rounded-xl text-[10px] font-mono">
                  <span className="flex items-center gap-1 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" /> Normal
                  </span>
                  <span className="flex items-center gap-1 text-yellow-300">
                    <span className="w-2 h-2 rounded-full bg-yellow-400" /> Watch
                  </span>
                  <span className="flex items-center gap-1 text-rose-300">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" /> Critical
                  </span>
                  <span className="flex items-center gap-1 text-purple-300">
                    <span className="w-2 h-2 rounded-full bg-purple-400" /> AI Forecast
                  </span>
                </div>
              </div>

            </div>

            {/* 4 Floating Glass Cards around the map */}
            
            {/* Floating Card 1: Top Left - PHC Network */}
            <div className="absolute -top-4 -left-4 sm:left-0 z-30 p-3.5 rounded-2xl bg-[#090e21]/90 border border-cyan-400/40 backdrop-blur-xl shadow-xl shadow-cyan-950/40 animate-subtle-float">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-cyan-300 font-semibold uppercase">PHC Network</div>
                  <div className="text-sm font-display font-black text-white">12,482 Active</div>
                </div>
              </div>
            </div>

            {/* Floating Card 2: Top Right - Medicine Availability */}
            <div className="absolute -top-3 -right-4 sm:right-2 z-30 p-3.5 rounded-2xl bg-[#090e21]/90 border border-emerald-400/40 backdrop-blur-xl shadow-xl shadow-cyan-950/40 animate-subtle-float" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-emerald-300 font-semibold uppercase">Medicine Availability</div>
                  <div className="text-sm font-display font-black text-white">91.4% Stocked</div>
                </div>
              </div>
            </div>

            {/* Floating Card 3: Bottom Left - Beds Available */}
            <div className="absolute -bottom-4 -left-3 sm:left-2 z-30 p-3.5 rounded-2xl bg-[#090e21]/90 border border-blue-400/40 backdrop-blur-xl shadow-xl shadow-blue-950/40 animate-subtle-float" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-blue-300 font-semibold uppercase">Beds Available</div>
                  <div className="text-sm font-display font-black text-white">22,840 Free</div>
                </div>
              </div>
            </div>

            {/* Floating Card 4: Bottom Right - AI Risk Detection */}
            <div className="absolute -bottom-3 -right-3 sm:right-0 z-30 p-3.5 rounded-2xl bg-[#090e21]/90 border border-purple-400/40 backdrop-blur-xl shadow-xl shadow-purple-950/40 animate-subtle-float" style={{ animationDelay: '1.8s' }}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-purple-300 font-semibold uppercase">AI Risk Detection</div>
                  <div className="text-sm font-display font-black text-white">94.7% Accuracy</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
