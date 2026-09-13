import React, { useState } from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Send, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  Globe2, 
  Heart,
  ArrowUpRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="relative bg-[#04060b] border-t border-white/[0.08] text-slate-400 text-xs overflow-hidden">
      
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#080b14] rounded-[10px] flex items-center justify-center font-display font-extrabold text-cyan-300 text-xs">
                  IX
                </div>
              </div>
              <span className="font-display font-black text-lg tracking-tight text-white">
                IMPACT<span className="text-blue-400">X</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/10">
                AI PLATFORM 2026
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The premier decentralized AI innovation ecosystem. We empower elite engineering teams to translate cutting-edge neural architectures into audited, high-consequence humanitarian deployments.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-mono font-semibold text-slate-300 block">
                Subscribe to Mission Briefs & GPU Allocations
              </span>
              
              {subscribed ? (
                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 flex items-center gap-2 font-mono text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Subscribed to ImpactX dispatch!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-sm">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="engineer@domain.com"
                      required
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#0a0e1a] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 font-mono"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Join</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 3: Platform Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2 font-sans">
              <li><a href="#home" className="hover:text-white transition-colors">Home Terminal</a></li>
              <li><a href="#challenges" className="hover:text-white transition-colors">Grand Challenges</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Field Solutions</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Roadmap & Evaluation</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Technology Stack</a></li>
              <li><a href="#dashboard" className="hover:text-white transition-colors">Live Impact Telemetry</a></li>
            </ul>
          </div>

          {/* Col 4: Grand Challenge Tracks */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">
              Mission Tracks
            </h4>
            <ul className="space-y-2 font-sans">
              <li><a href="#challenges" className="hover:text-white transition-colors">Healthcare Epidemic Defense</a></li>
              <li><a href="#challenges" className="hover:text-white transition-colors">Hyperspectral Methane Inverse</a></li>
              <li><a href="#challenges" className="hover:text-white transition-colors">Low-Bandwidth Indigenous LLMs</a></li>
              <li><a href="#challenges" className="hover:text-white transition-colors">Decentralized LoRa Disaster Mesh</a></li>
              <li><a href="#challenges" className="hover:text-white transition-colors">Zero-Knowledge Agro Finance</a></li>
              <li><a href="#challenges" className="hover:text-white transition-colors">Autonomous Grid Cyber Defense</a></li>
            </ul>
          </div>

          {/* Col 5: Resources & Connect */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">
              Resources & Connect
            </h4>
            <ul className="space-y-2 font-sans">
              <li><a href="#home" className="hover:text-white transition-colors">Evaluation Harness Docs</a></li>
              <li><a href="#home" className="hover:text-white transition-colors">NVIDIA H100 Cluster Access</a></li>
              <li><a href="#home" className="hover:text-white transition-colors">Benchmark Datasets (4.2TB)</a></li>
              <li><a href="#home" className="hover:text-white transition-colors">Mentor & Reviewer Network</a></li>
              <li><a href="#home" className="hover:text-white transition-colors">Ethics & Safety Auditing</a></li>
            </ul>

            {/* Social Icons */}
            <div className="pt-3 flex items-center gap-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter / X"
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-white/[0.06] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-400">
          <div>
            © 2026 ImpactX Global Innovation Initiative. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-white transition-colors">Terms of Compute</a>
            <a href="#home" className="hover:text-white transition-colors">Security Bug Bounty</a>
            <span className="text-slate-500">Node ID: IX-GLOBAL-7</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
