import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  ArrowUpRight, 
  Terminal, 
  ChevronRight,
  Shield,
  Layers,
  Award
} from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Challenges', href: '#challenges' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Technology', href: '#technology' },
    { label: 'Impact Dashboard', href: '#dashboard' },
    { label: 'Stories', href: '#testimonials' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#06080e]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/60 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
            <div className="w-full h-full bg-[#080b14] rounded-[10px] flex items-center justify-center">
              <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-sm tracking-wider">
                IX
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-lg tracking-tight text-white group-hover:text-blue-200 transition-colors">
                IMPACT<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">X</span>
              </span>
              <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-md">
                2026
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 -mt-0.5 hidden sm:block">
              AI Innovation Platform
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0d121f]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.06] shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'text-white bg-white/[0.1] shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#challenges"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#challenges');
            }}
            className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 transition-colors cursor-pointer"
          >
            Explore
          </a>
          
          <button
            onClick={onOpenJoinModal}
            className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs font-bold text-white transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 cursor-pointer"
          >
            {/* Gradient border & glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-xl group-hover:scale-105 transition-transform" />
            <span className="absolute inset-[1px] bg-[#070a13] rounded-[11px] group-hover:bg-opacity-0 transition-all duration-300" />
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
              <span>Join Hackathon</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenJoinModal}
            className="sm:hidden px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold cursor-pointer"
          >
            Join
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#070a14]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl p-6 transition-all duration-300 max-h-[85vh] overflow-y-auto">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 mt-4 border-t border-white/10 space-y-3">
            <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs text-blue-200 flex items-center justify-between">
              <span className="font-mono">Global Cohort: Season 2026</span>
              <span className="px-2 py-0.5 rounded-full bg-blue-500 text-white font-bold text-[10px]">
                $500k Grants
              </span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Get Started / Register Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
