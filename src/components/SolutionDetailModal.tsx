import React from 'react';
import { 
  X, 
  Sparkles, 
  Github, 
  ExternalLink, 
  Dna, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Globe2,
  Layers,
  ArrowRight
} from 'lucide-react';
import { FEATURED_SOLUTION } from '../data/hackathonData';

interface SolutionDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SolutionDetailModal: React.FC<SolutionDetailModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const sol = FEATURED_SOLUTION;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl rounded-3xl bg-[#090d19] border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background */}
        <div className="absolute top-0 left-1/4 w-96 h-96 glow-cyan opacity-25 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 glow-blue opacity-25 blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5 mb-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-violet-500/10 text-violet-300 border border-violet-500/30">
                {sol.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Created by {sol.teamName}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight">
              {sol.title}
            </h2>
            <p className="text-xs sm:text-sm text-cyan-300 font-medium">
              {sol.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="space-y-6 max-h-[65vh] overflow-y-auto pr-1">
          
          {/* Key Impact Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#0d1222] border border-white/[0.06]">
            {sol.impactMetrics.map((m) => (
              <div key={m.label}>
                <div className="text-[10px] font-mono text-slate-400">{m.label}</div>
                <div className="text-lg font-display font-black text-white mt-0.5">{m.value}</div>
                <div className="text-[10px] font-mono text-cyan-300 mt-0.5">{m.change}</div>
              </div>
            ))}
          </div>

          {/* Deep Architectural Specifications */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Core Technological Pillars & Algorithmic Design</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sol.architecturePoints.map((point, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300 leading-relaxed space-y-1">
                  <div className="text-[10px] font-mono font-bold text-cyan-300">
                    COMPONENT 0{idx + 1}
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Stack Badges */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Full Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {sol.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#0e162a] border border-blue-500/30 text-xs font-mono text-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Verification & Pilots */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold uppercase tracking-wider text-[11px]">
              <ShieldCheck className="w-4 h-4" />
              <span>Independent Validation & Pilot Auditing</span>
            </div>
            <p className="text-emerald-200/90 leading-relaxed">
              BioSentinel was independently reviewed by the Johns Hopkins Center for Health Security and evaluated across blind spiked wastewater genomic control samples. Achieved 98.4% detection sensitivity with 0 false positive triggers over a 6-month continuous trial in 14 municipal districts.
            </p>
          </div>

        </div>

        {/* Modal Footer Links */}
        <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-slate-300 cursor-pointer"
          >
            Close Deep Dive
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={sol.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Core Repo</span>
            </a>

            <a
              href={sol.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Launch Pilot Sandbox</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
