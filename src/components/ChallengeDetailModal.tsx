import React, { useState } from 'react';
import { 
  X, 
  Award, 
  Clock, 
  Users, 
  Database, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  FileText,
  Building,
  Target
} from 'lucide-react';
import { Challenge } from '../types';

interface ChallengeDetailModalProps {
  challenge: Challenge | null;
  onClose: () => void;
  onJoinChallenge: (challenge: Challenge) => void;
}

export const ChallengeDetailModal: React.FC<ChallengeDetailModalProps> = ({
  challenge,
  onClose,
  onJoinChallenge
}) => {
  if (!challenge) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-[#090d19] border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow backdrop inside modal */}
        <div className="absolute top-0 right-0 w-96 h-96 glow-blue opacity-30 blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5 mb-6">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-blue-500/10 text-cyan-300 border border-blue-500/30">
                {challenge.category}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono text-purple-300 bg-purple-950/40 border border-purple-800/40">
                {challenge.difficulty}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Brief ID: {challenge.id.toUpperCase()}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight">
              {challenge.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="space-y-6 max-h-[65vh] overflow-y-auto pr-1">
          
          {/* Prize & Registration Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#0d1222] border border-white/[0.06]">
            <div>
              <div className="text-[10px] font-mono text-slate-400">Total Prize Pool</div>
              <div className="text-base font-display font-black text-emerald-400 mt-0.5">{challenge.prizePool}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400">Teams Active</div>
              <div className="text-base font-display font-black text-white mt-0.5">{challenge.teamsRegistered} Teams</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400">Submission Window</div>
              <div className="text-base font-display font-black text-cyan-300 mt-0.5">{challenge.daysRemaining} Days Left</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400">Target Outcome</div>
              <div className="text-base font-display font-black text-blue-300 mt-0.5">Field Pilot</div>
            </div>
          </div>

          {/* Problem Statement Box */}
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/30 space-y-1 text-xs leading-relaxed">
            <span className="font-mono font-bold text-rose-400 uppercase tracking-wider block">
              Core Problem Statement:
            </span>
            <p className="text-rose-200/90">{challenge.problemStatement}</p>
          </div>

          {/* In-depth Brief Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Mission Specifications & Scope
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {challenge.fullDescription}
            </p>
          </div>

          {/* Impact Metric & Target */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-transparent border border-blue-500/30 space-y-1">
            <span className="font-mono font-bold text-cyan-300 uppercase tracking-wider text-[10px] block">
              Audited Success Metric:
            </span>
            <div className="text-sm font-display font-bold text-white">
              {challenge.impactMetric}
            </div>
          </div>

          {/* Dataset & Compute Allocation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-300">
                <Database className="w-3.5 h-3.5 text-blue-400" />
                <span>Benchmark Dataset Included</span>
              </div>
              <p className="text-xs text-slate-400">{challenge.datasetAvailable}</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-300">
                <Building className="w-3.5 h-3.5 text-purple-400" />
                <span>Sponsoring Institution</span>
              </div>
              <p className="text-xs text-slate-400">{challenge.sponsor} ({challenge.partnerOrganization})</p>
            </div>
          </div>

          {/* Technology Requirements */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Recommended Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {challenge.techTags.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#0e162a] border border-blue-500/30 text-xs font-mono text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Evaluation Criteria Checklist */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 text-xs">
            <div className="font-mono font-bold text-white text-[11px] uppercase tracking-wider">
              Evaluation Scoring Rubric (100 Points Total)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Algorithmic Generalization (30 pts)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Real-World Humanitarian Impact (30 pts)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Edge Latency & Efficiency (20 pts)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Security & Ethical Guarantees (20 pts)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-slate-300 cursor-pointer"
          >
            Close Overview
          </button>

          <button
            onClick={() => {
              onClose();
              onJoinChallenge(challenge);
            }}
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xl shadow-blue-500/30 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>Register Team for This Challenge</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
