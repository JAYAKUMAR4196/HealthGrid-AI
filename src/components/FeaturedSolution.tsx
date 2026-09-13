import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Activity, 
  Layers, 
  CheckCircle2, 
  ExternalLink, 
  Github, 
  Award,
  Terminal,
  Cpu,
  Dna
} from 'lucide-react';
import { FEATURED_SOLUTION } from '../data/hackathonData';

interface FeaturedSolutionProps {
  onExploreSolution: () => void;
}

export const FeaturedSolution: React.FC<FeaturedSolutionProps> = ({ onExploreSolution }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'metrics'>('overview');
  const solution = FEATURED_SOLUTION;

  return (
    <section id="solutions" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#05070d] overflow-hidden">
      {/* Dynamic atmospheric radial backdrop */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] glow-blue opacity-25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] glow-purple opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Eyebrow & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-violet-300 text-xs font-mono font-semibold">
              <Award className="w-3.5 h-3.5 text-pink-400" />
              <span>COHORT SPOTLIGHT // WINNING SOLUTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              From Sandbox Hack to Production Pilot
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore how high-performing teams transition from initial algorithmic code sprints into production deployments transforming municipal infrastructure.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400">Status:</span>
            <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live in 14 Municipalities
            </span>
          </div>
        </div>

        {/* Large Asymmetric Solution Showcase Layout */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0a0f1e]/90 to-[#070b16]/90 border border-white/10 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 lg:p-10 overflow-hidden">
          
          {/* Subtle Ambient Top Border Gradient */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />

          {/* Asymmetric 12-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 7 Columns: Story, Problem Statement, Metrics */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-blue-500/10 text-blue-300 border border-blue-500/30">
                    {solution.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Built by <strong className="text-white">{solution.teamName}</strong> ({solution.originCountry})
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight pt-1">
                  {solution.title}
                </h3>
                <p className="text-cyan-300 text-sm font-medium">
                  {solution.tagline}
                </p>
              </div>

              {/* Problem vs Solution Split Box */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/30 text-xs text-rose-200/90 leading-relaxed">
                  <span className="font-mono font-bold text-rose-400 uppercase tracking-wider block mb-1">
                    Problem Statement:
                  </span>
                  {solution.problemStatement}
                </div>

                <div className="p-4 rounded-xl bg-[#0c1224] border border-white/[0.08] text-xs text-slate-300 leading-relaxed">
                  <span className="font-mono font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                    Solution Overview:
                  </span>
                  {solution.solutionOverview}
                </div>
              </div>

              {/* Four Key Impact Metrics Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {solution.impactMetrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-lg font-display font-black text-white">{m.value}</div>
                    <div className="text-[11px] font-semibold text-cyan-300 mt-0.5">{m.label}</div>
                    <div className="text-[9px] font-mono text-slate-400 mt-1">{m.change}</div>
                  </div>
                ))}
              </div>

              {/* Technology Stack Pills */}
              <div className="pt-2">
                <div className="text-[11px] font-mono text-slate-400 mb-2">Technology Stack:</div>
                <div className="flex flex-wrap gap-2">
                  {solution.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-[#0e162a] border border-blue-500/20 text-xs font-mono text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onExploreSolution}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-500/30 cursor-pointer transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Explore Full Solution & Model Card</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={solution.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              </div>

            </div>

            {/* Right 5 Columns: Futuristic Visual & System Architecture Blueprint */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-[#070b16] border border-white/10 p-5 shadow-2xl overflow-hidden">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Dna className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono text-xs font-bold text-white">System Architecture Blueprint</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                    DIFFERENTIAL ε=0.45
                  </span>
                </div>

                {/* Animated Visual Flow Diagram */}
                <div className="relative h-64 sm:h-72 w-full rounded-xl bg-[#03060c] border border-white/[0.06] p-4 flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle Background Node Grid */}
                  <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

                  {/* Pipeline Step 1 */}
                  <div className="relative z-10 flex items-center gap-3 p-2.5 rounded-lg bg-blue-950/30 border border-blue-500/30">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/50 flex items-center justify-center shrink-0">
                      <Activity className="w-4 h-4 text-cyan-300 animate-pulse" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-mono font-bold text-white">Municipal Ingestion Nodes</div>
                      <div className="text-[10px] text-slate-400 truncate">Edge microfluidic qPCR sampler • 14 Cities</div>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center my-0.5">
                    <div className="w-0.5 h-4 bg-gradient-to-b from-blue-500 to-violet-500" />
                  </div>

                  {/* Pipeline Step 2 */}
                  <div className="relative z-10 flex items-center gap-3 p-2.5 rounded-lg bg-violet-950/30 border border-violet-500/30">
                    <div className="w-8 h-8 rounded-lg bg-violet-600/30 border border-violet-400/50 flex items-center justify-center shrink-0">
                      <Cpu className="w-4 h-4 text-violet-300" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-mono font-bold text-white">Federated Sequence Transformer</div>
                      <div className="text-[10px] text-slate-400 truncate">Zero-shot mutation vector embedding</div>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center my-0.5">
                    <div className="w-0.5 h-4 bg-gradient-to-b from-violet-500 to-emerald-500" />
                  </div>

                  {/* Pipeline Step 3 */}
                  <div className="relative z-10 flex items-center gap-3 p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600/30 border border-emerald-400/50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-mono font-bold text-white">Automated Health Redistribution</div>
                      <div className="text-[10px] text-slate-400 truncate">18-Day Pre-Surge Antiviral Buffer Trigger</div>
                    </div>
                  </div>

                </div>

                {/* Awards Won Banner */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] space-y-1.5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Accreditations & Honors:
                  </div>
                  {solution.awardsWon.map((award, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{award}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
