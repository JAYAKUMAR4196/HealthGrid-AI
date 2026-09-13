import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Play, 
  Cpu, 
  ShieldCheck, 
  Globe2, 
  Zap, 
  Terminal,
  Activity,
  Layers
} from 'lucide-react';

interface HeroProps {
  onOpenJoinModal: () => void;
  onExploreChallenges: () => void;
  onViewSolutions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenJoinModal, 
  onExploreChallenges, 
  onViewSolutions 
}) => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  // Nodes for the abstract futuristic AI neural mesh visual
  const nodes = [
    { id: 1, x: 20, y: 30, label: 'Genomics Agent', ping: '12ms', status: 'Optimal' },
    { id: 2, x: 50, y: 18, label: 'Quantum Optimizer', ping: '8ms', status: 'Active' },
    { id: 3, x: 80, y: 28, label: 'Satellite Ingestion', ping: '18ms', status: 'Streaming' },
    { id: 4, x: 30, y: 65, label: 'Federated Node IN-01', ping: '15ms', status: 'Verifying' },
    { id: 5, x: 65, y: 55, label: 'Zero-Knowledge Kernel', ping: '6ms', status: 'Proven' },
    { id: 6, x: 85, y: 75, label: 'Edge Micro-LLM', ping: '4ms', status: 'Synced' },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center justify-center">
      {/* Background Grid & Dynamic Glowing Radial Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] glow-blue opacity-70 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[450px] glow-purple opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[450px] h-[450px] glow-cyan opacity-40 blur-3xl pointer-events-none" />

      {/* Decorative Floating ambient tech particles */}
      <div className="absolute top-24 left-[15%] w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping opacity-60" />
      <div className="absolute top-48 right-[20%] w-2 h-2 rounded-full bg-blue-400 animate-pulse opacity-70" />
      <div className="absolute bottom-32 left-[25%] w-2 h-2 rounded-full bg-violet-400 animate-pulse opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Action Controls */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Pill Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-violet-900/30 border border-blue-500/30 backdrop-blur-md shadow-sm shadow-blue-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-sm shadow-cyan-400" />
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-cyan-200">
                AI • INNOVATION • IMPACT
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-[11px] font-mono text-slate-300">
                Cohort 2026 Open
              </span>
            </div>

            {/* Massive Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[64px] font-display font-extrabold tracking-tight text-white leading-[1.08]">
                Build Intelligent Solutions for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 drop-shadow-sm">
                  Real-World Impact
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl font-normal leading-relaxed pt-2">
                Join an elite global collective of engineers, researchers, and creators. We deploy next-generation generative AI, edge computing, and verifiable neural networks to solve high-stakes challenges across healthcare, climate resilience, and equitable infrastructure.
              </p>
            </div>

            {/* Action Buttons & Guarantees */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA */}
              <button
                onClick={onExploreChallenges}
                className="group relative px-7 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Explore Challenges</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onViewSolutions}
                className="px-6 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-[#0c101d]/80 hover:bg-[#13192c] border border-white/10 hover:border-blue-500/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Play className="w-3.5 h-3.5 text-blue-400 fill-blue-400/30 group-hover:scale-110 transition-transform" />
                <span>View Solutions</span>
              </button>

              {/* Registration Quick Link */}
              <button
                onClick={onOpenJoinModal}
                className="px-5 py-4 rounded-xl font-mono text-xs font-semibold text-cyan-300 hover:text-white bg-transparent hover:bg-cyan-950/20 border border-cyan-500/20 hover:border-cyan-400/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Join Cohort</span>
              </button>
            </div>

            {/* Micro Validation Badges */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>$500k Non-Dilutive Grants</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>Subsidized H100 Compute</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-violet-400" />
                <span>54 Countries Participating</span>
              </div>
            </div>

          </div>

          {/* Right Column: Futuristic Interactive AI Network Visual */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer Glow Halo Frame */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/30 via-indigo-500/20 to-violet-600/30 blur-xl opacity-70" />
              
              {/* Main Futuristic Glass Terminal Card */}
              <div className="relative rounded-2xl bg-[#090d18]/90 border border-white/10 backdrop-blur-2xl shadow-2xl p-6 overflow-hidden">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-[11px] text-slate-400">
                      impactx_core_mesh // v4.8
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 flex items-center gap-1">
                    <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                    LIVE TELEMETRY
                  </span>
                </div>

                {/* Abstract Interactive Neural Network Canvas Container */}
                <div className="relative h-64 sm:h-72 w-full rounded-xl bg-[#04060b]/90 border border-white/[0.05] p-3 overflow-hidden">
                  
                  {/* Subtle Radar Scan line */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/5 to-blue-500/0 animate-pulse pointer-events-none" />
                  
                  {/* Neural Graph Lines (SVG) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    {/* Interconnecting node lines */}
                    <line x1="20%" y1="30%" x2="50%" y2="18%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="50%" y1="18%" x2="80%" y2="28%" stroke="url(#lineGrad)" strokeWidth="1.5" />
                    <line x1="20%" y1="30%" x2="30%" y2="65%" stroke="url(#lineGrad)" strokeWidth="1.5" />
                    <line x1="30%" y1="65%" x2="65%" y2="55%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 2" />
                    <line x1="50%" y1="18%" x2="65%" y2="55%" stroke="url(#lineGrad)" strokeWidth="1.5" />
                    <line x1="65%" y1="55%" x2="85%" y2="75%" stroke="url(#lineGrad)" strokeWidth="1.5" />
                    <line x1="80%" y1="28%" x2="85%" y2="75%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="2 4" />
                  </svg>

                  {/* Nodes with tooltips on hover */}
                  {nodes.map((node) => {
                    const isSelected = activeNode === node.id;
                    return (
                      <div
                        key={node.id}
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        onMouseEnter={() => setActiveNode(node.id)}
                        onMouseLeave={() => setActiveNode(null)}
                        className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      >
                        <div className={`relative w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                          isSelected 
                            ? 'bg-cyan-500 scale-125 shadow-lg shadow-cyan-500/50' 
                            : 'bg-blue-600/80 hover:bg-blue-500 shadow-md shadow-blue-500/30'
                        }`}>
                          <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping opacity-75" />
                        </div>
                        
                        {/* Interactive Node Tag */}
                        <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap px-2.5 py-1 rounded-md bg-[#0b101e] border border-white/20 text-[10px] font-mono text-cyan-300 shadow-xl transition-all pointer-events-none ${
                          isSelected ? 'opacity-100 translate-y-0 scale-100 z-30' : 'opacity-0 translate-y-1 scale-95'
                        }`}>
                          <div className="font-bold text-white">{node.label}</div>
                          <div className="text-slate-400">RTT: {node.ping} • {node.status}</div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Central Node Floating Info badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#0a0f1d]/90 border border-white/10 rounded-lg p-2.5 flex items-center justify-between text-[11px] font-mono">
                    <div className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                      <span className="text-slate-300">Active Inference Cluster:</span>
                      <strong className="text-cyan-300">NVIDIA H100 Mesh</strong>
                    </div>
                    <span className="text-emerald-400 font-bold">14.8 TFLOPs</span>
                  </div>
                </div>

                {/* Sub-Metrics Telemetry Grid */}
                <div className="grid grid-cols-3 gap-3 pt-4 text-center">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-[10px] text-slate-400 font-mono">Global Latency</div>
                    <div className="text-sm font-bold font-mono text-cyan-300 mt-0.5">11.4 ms</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-[10px] text-slate-400 font-mono">Active Nodes</div>
                    <div className="text-sm font-bold font-mono text-blue-300 mt-0.5">1,248</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-[10px] text-slate-400 font-mono">Verified Impact</div>
                    <div className="text-sm font-bold font-mono text-emerald-400 mt-0.5">99.2%</div>
                  </div>
                </div>

              </div>

              {/* Floating Decorative Pill 1: Top Right */}
              <div className="absolute -top-4 -right-4 bg-[#0e1424] border border-cyan-500/40 rounded-xl px-3 py-1.5 shadow-xl flex items-center gap-2 text-xs font-mono text-cyan-200 hidden sm:flex">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Zero-Knowledge Validated</span>
              </div>

              {/* Floating Decorative Pill 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-[#0e1424] border border-indigo-500/40 rounded-xl px-3 py-1.5 shadow-xl flex items-center gap-2 text-xs font-mono text-indigo-200 hidden sm:flex">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>50+ Multi-Modal Models</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
