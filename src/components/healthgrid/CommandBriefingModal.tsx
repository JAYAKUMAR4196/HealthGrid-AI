import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Calendar, Clock, MapPin, Sparkles, Send } from 'lucide-react';

interface CommandBriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandBriefingModal: React.FC<CommandBriefingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Dr. Aarav Sharma',
    agency: 'National Health Authority / State Medical Services',
    country: 'India (Host Nation)',
    email: 'a.sharma@nha.gov.in',
    focus: 'Cross-District Medicine Redistribution & PHC Telemetry'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#080d21] border border-cyan-500/40 p-8 text-white shadow-2xl shadow-cyan-950/60 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-display font-black text-white">
                Request Command Briefing
              </h3>
              <p className="text-xs font-mono text-cyan-300">
                BRICS Health & Supply Chain Resilience Initiative
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4 font-mono">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-display font-bold text-white">
              Command Briefing Scheduled
            </h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Your request for HealthGrid AI deployment simulation has been dispatched to the National Health Authority liaison desk.
            </p>
            <div className="p-4 rounded-xl bg-[#040715] border border-white/[0.06] text-xs text-cyan-300 text-left space-y-1">
              <div>• Docket ID: <span className="font-bold text-white">#HG-BRICS-2026-904</span></div>
              <div>• Clearance: <span className="text-emerald-400">Government / Institutional Tier</span></div>
              <div>• SLA Dispatch: <span className="text-white">Within 2 business hours</span></div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold font-mono transition-colors"
            >
              Close Briefing Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="space-y-1">
              <label className="text-slate-300">Official Name & Designation</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2.5 rounded-xl bg-[#040715] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-300">Agency / Ministry / Organization</label>
              <input
                type="text"
                value={formData.agency}
                onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
                required
                className="w-full px-4 py-2.5 rounded-xl bg-[#040715] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-slate-300">Country / Node</label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040715] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="India (Host Nation)">India (Host Nation)</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Russia">Russia</option>
                  <option value="China">China</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Observer State">Observer State / WHO</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-slate-300">Official Email (.gov / .org)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040715] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-slate-300">Priority Operational Objective</label>
              <input
                type="text"
                value={formData.focus}
                onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#040715] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-display font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Command Authorization Request</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
