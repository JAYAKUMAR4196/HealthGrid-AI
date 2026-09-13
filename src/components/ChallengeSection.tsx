import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  Zap, 
  Award, 
  Clock, 
  Users, 
  ShieldAlert, 
  ExternalLink,
  Sparkles,
  Layers
} from 'lucide-react';
import { Challenge, ChallengeCategory } from '../types';
import { CHALLENGES, CHALLENGE_CATEGORIES } from '../data/hackathonData';

interface ChallengeSectionProps {
  onSelectChallenge: (challenge: Challenge) => void;
}

export const ChallengeSection: React.FC<ChallengeSectionProps> = ({ onSelectChallenge }) => {
  const [selectedCategory, setSelectedCategory] = useState<ChallengeCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');

  // Filter challenges based on category, search, and difficulty
  const filteredChallenges = useMemo(() => {
    return CHALLENGES.filter((ch) => {
      const matchesCategory = selectedCategory === 'All' || ch.category === selectedCategory;
      const matchesDifficulty = difficultyFilter === 'All' || ch.difficulty === difficultyFilter;
      const matchesSearch = 
        ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.techTags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        ch.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDifficulty && matchesSearch;
    });
  }, [selectedCategory, difficultyFilter, searchQuery]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Healthcare':
        return 'text-rose-400 bg-rose-950/40 border-rose-800/40';
      case 'Climate':
        return 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40';
      case 'Education':
        return 'text-amber-400 bg-amber-950/40 border-amber-800/40';
      case 'Smart Cities':
        return 'text-blue-400 bg-blue-950/40 border-blue-800/40';
      case 'Financial Inclusion':
        return 'text-violet-400 bg-violet-950/40 border-violet-800/40';
      case 'Cybersecurity':
        return 'text-red-400 bg-red-950/40 border-red-800/40';
      case 'AI & Data':
        return 'text-cyan-400 bg-cyan-950/40 border-cyan-800/40';
      case 'Sustainability':
        return 'text-teal-400 bg-teal-950/40 border-teal-800/40';
      default:
        return 'text-slate-300 bg-slate-800/40 border-slate-700/40';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Elite Grand Challenge':
        return 'text-purple-400 border-purple-500/40 bg-purple-950/30';
      case 'Advanced':
        return 'text-blue-400 border-blue-500/40 bg-blue-950/30';
      case 'Intermediate':
        return 'text-cyan-400 border-cyan-500/40 bg-cyan-950/30';
      default:
        return 'text-slate-400 border-slate-600/40 bg-slate-900/30';
    }
  };

  return (
    <section id="challenges" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#06080f] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-20 right-1/4 w-96 h-96 glow-blue opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 glow-purple opacity-25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-mono font-semibold">
              <Zap className="w-3.5 h-3.5 text-cyan-300" />
              <span>MISSION DIRECTIVES // 2026</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              High-Impact Grand Challenges
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore rigorously validated engineering and scientific briefs co-authored by global institutions. Win seed funding, GPU compute grants, and direct field deployment.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300">
              Total Prize Pool: <strong className="text-emerald-400">$500,000+</strong>
            </div>
          </div>
        </div>

        {/* Search Bar & Category Filter Controls */}
        <div className="space-y-6">
          
          {/* Top Filter Bar: Search Input & Difficulty Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search challenges, keywords, PyTorch, LoRa..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0b0f1d] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500/60 transition-all font-sans"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <span className="text-xs font-mono text-slate-400 hidden md:inline">Difficulty:</span>
              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                aria-label="Filter challenges by difficulty"
                className="px-3 py-2 rounded-xl bg-[#0b0f1d] border border-white/10 text-xs text-slate-300 focus:outline-none focus:border-blue-500/60 font-mono cursor-pointer"
              >
                <option value="All">All Difficulties</option>
                <option value="Elite Grand Challenge">Elite Grand Challenge</option>
                <option value="Advanced">Advanced</option>
                <option value="Intermediate">Intermediate</option>
              </select>
            </div>
          </div>

          {/* Horizontal Scrollable Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CHALLENGE_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 border border-blue-400/40'
                      : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Result Count Status */}
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>
              Showing <strong className="text-cyan-300">{filteredChallenges.length}</strong> active briefs
            </span>
            {searchQuery && (
              <span>Filtered by: &ldquo;{searchQuery}&rdquo;</span>
            )}
          </div>
        </div>

        {/* Challenges Grid */}
        {filteredChallenges.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#0a0e1a]/80 border border-white/[0.08] hover:border-blue-500/40 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Featured Badge Glow Accent */}
                {challenge.featured && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-[10px] font-mono font-bold text-white shadow-md shadow-blue-500/40 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-300" />
                    <span>FEATURED</span>
                  </div>
                )}

                {/* Card Top: Category & Difficulty */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold border ${getCategoryColor(challenge.category)}`}>
                      {challenge.category}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-blue-200 transition-colors leading-snug mb-2.5 line-clamp-2">
                    {challenge.title}
                  </h3>
                  
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                    {challenge.shortDescription}
                  </p>

                  {/* Impact Metric Highlight */}
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-950/20 via-[#0d1326] to-transparent border border-blue-500/20 mb-4">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-blue-300 font-semibold">
                      Target Impact Metric
                    </div>
                    <div className="text-xs font-display font-bold text-cyan-200 mt-0.5">
                      {challenge.impactMetric}
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {challenge.techTags.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Metadata & Action Button */}
                <div className="pt-4 border-t border-white/[0.06] space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1 text-slate-400">
                      <Users className="w-3.5 h-3.5 text-blue-400" />
                      <span>{challenge.teamsRegistered} teams</span>
                    </div>
                    <div className="text-emerald-400 font-bold">
                      {challenge.prizePool.split('+')[0]}
                    </div>
                  </div>

                  {/* View Challenge Button */}
                  <button
                    onClick={() => onSelectChallenge(challenge)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 border border-white/10 hover:border-transparent text-xs font-semibold text-slate-200 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <span>View Challenge</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-2xl bg-[#0a0e1a]/50 border border-white/[0.06] space-y-3">
            <ShieldAlert className="w-8 h-8 text-slate-500 mx-auto" />
            <h3 className="text-base font-bold text-white">No challenges match your search</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Try adjusting your search terms or select &ldquo;All&rdquo; categories to discover active missions.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); setDifficultyFilter('All'); }}
              className="mt-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
