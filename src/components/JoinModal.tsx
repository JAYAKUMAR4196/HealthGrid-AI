import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  User, 
  Mail, 
  Layers, 
  KeyRound,
  Users
} from 'lucide-react';
import { CHALLENGE_CATEGORIES } from '../data/hackathonData';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTrack?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({ 
  isOpen, 
  onClose, 
  preselectedTrack 
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'Hacker',
    track: preselectedTrack || 'Healthcare',
    teamName: '',
    experienceLevel: 'Advanced',
    githubOrPortfolio: '',
    agreeToTerms: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-[#090d19] border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-80 h-80 glow-purple opacity-30 blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 p-0.5 shadow-md">
              <div className="w-full h-full bg-[#080b14] rounded-[10px] flex items-center justify-center font-display font-extrabold text-cyan-300 text-xs">
                IX
              </div>
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-white">
                {submitted ? 'Registration Confirmed' : 'Join ImpactX 2026'}
              </h2>
              <p className="text-xs font-mono text-slate-400">
                {submitted ? 'Cluster Access Token Provisioned' : 'Sovereign AI Hackathon & Pilot Accelerator'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/20 animate-pulse">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-display font-bold text-white">
                Welcome to Cohort 2026, {formData.fullName || 'Innovator'}!
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Your credentials have been securely provisioned to our decentralized compute registry for the <strong className="text-cyan-300">{formData.track}</strong> track.
              </p>
            </div>

            {/* Simulated Compute Token Card */}
            <div className="p-4 rounded-2xl bg-[#040710] border border-cyan-500/30 font-mono text-left text-xs space-y-2">
              <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-white/[0.06] pb-2">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <KeyRound className="w-3.5 h-3.5" />
                  NVIDIA H100 GPU ALLOCATION
                </span>
                <span className="text-emerald-400 font-bold">READY (40 TFLOPs)</span>
              </div>
              <div className="text-slate-300">
                Team Handle: <span className="text-white font-bold">{formData.teamName || 'Solo-Agent-X'}</span>
              </div>
              <div className="text-slate-300">
                Registered Email: <span className="text-blue-300">{formData.email}</span>
              </div>
              <div className="text-[11px] text-slate-400 pt-1 font-sans">
                A verification link and Slack/Discord sandbox invitation have been dispatched. Check your inbox to begin team formation.
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-lg cursor-pointer"
            >
              Return to Platform Terminal
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300 block">
                  Full Name / Lead Engineer
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Dr. Maya Lin"
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#0b0f1e] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300 block">
                  Primary Contact Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maya@stanford.edu"
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#0b0f1e] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Role & Track */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300 block">
                  Participation Role
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#0b0f1e] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 font-sans cursor-pointer"
                >
                  <option value="Hacker">Hacker (Individual / Builder)</option>
                  <option value="Team Lead">Team Lead (Assembled Squad)</option>
                  <option value="Mentor">Mentor (Research / Domain Advisor)</option>
                  <option value="Judge">Judge / Sponsor Evaluator</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300 block">
                  Primary Grand Challenge Track
                </label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#0b0f1e] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 font-sans cursor-pointer"
                >
                  {CHALLENGE_CATEGORIES.filter(c => c !== 'All').map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Team Name & GitHub */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300 block">
                  Team Name <span className="text-slate-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  placeholder="NeuralFrontier Lab"
                  className="w-full px-3 py-2 rounded-xl bg-[#0b0f1e] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300 block">
                  GitHub / Paper / Portfolio
                </label>
                <input
                  type="text"
                  value={formData.githubOrPortfolio}
                  onChange={(e) => setFormData({ ...formData, githubOrPortfolio: e.target.value })}
                  placeholder="github.com/username"
                  className="w-full px-3 py-2 rounded-xl bg-[#0b0f1e] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Experience Level Selector */}
            <div className="space-y-1 pt-1">
              <label className="text-xs font-mono text-slate-300 block">
                Engineering Experience Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Intermediate', 'Advanced', 'Staff / Principal / PhD'].map((lvl) => (
                  <button
                    type="button"
                    key={lvl}
                    onClick={() => setFormData({ ...formData, experienceLevel: lvl })}
                    className={`py-2 px-2 rounded-xl text-[11px] font-mono transition-all cursor-pointer ${
                      formData.experienceLevel === lvl
                        ? 'bg-blue-600 text-white font-bold border border-blue-400'
                        : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/10'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Checkbox agreement */}
            <div className="pt-2 flex items-start gap-2.5">
              <input
                type="checkbox"
                id="terms"
                required
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                className="mt-0.5 rounded bg-[#0b0f1e] border-white/20 text-blue-600 focus:ring-0 cursor-pointer"
              />
              <label htmlFor="terms" className="text-[11px] text-slate-400 leading-snug cursor-pointer">
                I agree to the ImpactX Open Science Charter, Ethical AI Safety Guidelines, and agree to license winning prototypes under permissive research terms.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xl shadow-blue-500/30 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Allocating Compute Slot...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-cyan-300" />
                    <span>Complete Registration & Claim Compute</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
