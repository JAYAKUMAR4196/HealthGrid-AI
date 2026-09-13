import React from 'react';
import { 
  Activity, 
  Bell, 
  Shield, 
  Sparkles, 
  Menu, 
  X, 
  ChevronRight, 
  Radio, 
  Maximize2, 
  Minimize2,
  Cpu
} from 'lucide-react';

interface HealthGridNavbarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onLaunchDashboard: () => void;
  is16x9Mode: boolean;
  onToggle16x9: () => void;
}

export const HealthGridNavbar: React.FC<HealthGridNavbarProps> = ({
  activeTab,
  onSelectTab,
  onLaunchDashboard,
  is16x9Mode,
  onToggle16x9,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', href: '#command-center' },
    { id: 'network', label: 'PHC Network', href: '#live-network' },
    { id: 'supply', label: 'Supply Chain', href: '#supply-chain' },
    { id: 'forecast', label: 'AI Forecast', href: '#redistribution' },
    { id: 'emergency', label: 'Emergency', href: '#emergency' },
    { id: 'brics', label: 'BRICS Network', href: '#brics' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-[#030611]/80 border-b border-cyan-500/20 shadow-2xl shadow-cyan-950/20 transition-all duration-300">
      
      {/* Top Telemetry Micro-Ticker */}
      <div className="bg-[#02040a] border-b border-white/[0.05] px-4 py-1 text-[11px] font-mono flex items-center justify-between text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
            <strong className="text-white">BRICS Smart Health & Supply Chain Resilience</strong>
          </span>
          <span className="text-slate-600 hidden md:inline">|</span>
          <span className="hidden md:inline text-slate-400">Node ID: IX-DELHI-COMMAND-01</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            12,482 Nodes Synced
          </span>
          <span className="text-slate-500 hidden sm:inline">Latency: 8.2ms</span>
          <button
            onClick={onToggle16x9}
            className={`hidden lg:flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer border ${
              is16x9Mode
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40'
                : 'bg-white/[0.04] text-slate-400 hover:text-white border-white/10'
            }`}
            title="Toggle 16:9 Presentation Frame"
          >
            {is16x9Mode ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
            <span>{is16x9Mode ? '16:9 Frame Active' : '16:9 Mockup View'}</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo with Connected-Node / Medical Cross */}
        <a href="#command-center" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-shadow">
            <div className="w-full h-full bg-[#040816] rounded-[10px] flex items-center justify-center relative overflow-hidden">
              {/* Connected node medical cross */}
              <div className="relative z-10 flex items-center justify-center">
                {/* Horizontal cross bar */}
                <div className="absolute w-5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-300" />
                {/* Vertical cross bar */}
                <div className="absolute h-5 w-1.5 rounded-full bg-violet-400 shadow-sm shadow-violet-300" />
                {/* Center node */}
                <div className="w-2.5 h-2.5 rounded-full bg-white ring-2 ring-cyan-400 shadow-md shadow-cyan-300 z-20 animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-lg tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                HealthGrid <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">AI</span>
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-semibold tracking-wider">
                BRICS
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider">
              SMART RESILIENCE COMMAND
            </span>
          </div>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => onSelectTab(item.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wide transition-all cursor-pointer ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm shadow-cyan-500/20 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-3">
          
          {/* Notification Bell with alert pulse */}
          <div className="relative p-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-colors text-slate-300 hover:text-white cursor-pointer group">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-[#030611] animate-ping" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-[#030611]" />
          </div>

          {/* National Command Center Badge */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-200">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>National Command Center</span>
          </div>

          {/* User / Avatar Circle */}
          <div className="flex items-center gap-2 pl-1 border-l border-white/[0.08]">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 p-0.5">
                <div className="w-full h-full bg-[#090e1f] rounded-full flex items-center justify-center font-mono text-[11px] font-bold text-cyan-300">
                  NC
                </div>
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#030611]" />
            </div>
          </div>

          {/* Launch Dashboard Gradient Button */}
          <button
            onClick={onLaunchDashboard}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-600 to-violet-600 hover:from-cyan-300 hover:to-violet-500 text-white font-display font-bold text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all cursor-pointer group"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-200 group-hover:rotate-12 transition-transform" />
            <span>Launch Dashboard</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 py-4 bg-[#050817] border-b border-cyan-500/20 space-y-3 font-mono text-xs">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => {
                onSelectTab(item.id);
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:text-cyan-300 hover:bg-white/[0.05]"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              onLaunchDashboard();
              setMobileMenuOpen(false);
            }}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-xs text-center"
          >
            Launch Command Dashboard
          </button>
        </div>
      )}

    </header>
  );
};
