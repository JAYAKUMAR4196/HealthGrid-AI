import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext.js';
import { Medicine, HealthStatus } from '../types.js';
import { 
  Pill, 
  Search, 
  Filter, 
  Download, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Building, 
  Sparkles,
  ArrowUpDown,
  ExternalLink
} from 'lucide-react';

export const SupplyChainInventory: React.FC = () => {
  const { medicines, setActiveTab } = useApp();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'days' | 'stock' | 'consumption'>('days');

  // Categories list
  const categories = ['ALL', 'Essential Antibiotic', 'Analgesic / Antipyretic', 'Rehydration Solution', 'IV Fluids', 'Maternal Health', 'Emergency / Critical Care', 'Cardiovascular', 'Vaccine'];

  // Filtered and sorted medicines
  const filteredMedicines = useMemo(() => {
    return medicines
      .filter(m => {
        if (selectedCategory !== 'ALL' && m.category !== selectedCategory) return false;
        if (selectedStatus !== 'ALL' && m.status !== selectedStatus) return false;
        if (searchQuery) {
          const q = searchQuery.toLowerCase();
          return m.name.toLowerCase().includes(q) || m.batchNumber.toLowerCase().includes(q) || m.facilityName.toLowerCase().includes(q) || m.district.toLowerCase().includes(q);
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'days') return a.daysRemaining - b.daysRemaining;
        if (sortBy === 'stock') return a.currentStock - b.currentStock;
        if (sortBy === 'consumption') return b.dailyConsumption - a.dailyConsumption;
        return 0;
      });
  }, [medicines, selectedCategory, selectedStatus, searchQuery, sortBy]);

  // Export CSV handler
  const handleExportCSV = () => {
    const headers = ['ID', 'Medicine', 'Category', 'Facility', 'District', 'Current Stock', 'Safety Threshold', 'Daily Consumption', 'Days Remaining', 'Expiry Date', 'Status'];
    const rows = filteredMedicines.map(m => [
      m.id,
      `"${m.name}"`,
      `"${m.category}"`,
      `"${m.facilityName}"`,
      `"${m.district}"`,
      m.currentStock,
      m.safetyThreshold,
      m.dailyConsumption,
      m.daysRemaining,
      m.expiryDate,
      m.status
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `HealthGrid_Medicine_Inventory_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Analytical Summary */}
      <div className="bg-[#0d1424] border border-slate-800/80 rounded-xl p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Pill className="w-5 h-5 text-teal-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              National Essential Medicine Inventory & Stock Depletion Engine
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Real-time multi-tier stock tracking across 650 public healthcare facilities. Automatically calculates depletion runway: <code className="text-teal-300 font-mono">Days Remaining = Stock / Average Daily Consumption</code>.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportCSV}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-teal-400" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={() => setActiveTab('forecast')}
            className="px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Stock-Out Predictions</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#0d1424] border border-slate-800/80 rounded-xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            <input
              type="text"
              placeholder="Search medicine, batch, facility..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#090d16] border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 w-52 sm:w-64"
            />
          </div>

          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-[#090d16] border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-teal-500 cursor-pointer"
          >
            {categories.map(c => (
              <option key={c} value={c}>{c === 'ALL' ? 'All Categories (25 Medicines)' : c}</option>
            ))}
          </select>

          {/* Risk Status Dropdown */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-[#090d16] border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-teal-500 cursor-pointer"
          >
            <option value="ALL">All Stock Statuses</option>
            <option value="CRITICAL">Critical (&lt; 7 Days)</option>
            <option value="WARNING">Low (&lt; 14 Days)</option>
            <option value="NORMAL">Normal / Safe Buffer</option>
            <option value="SURPLUS">Distributable Surplus</option>
          </select>

          {/* Sort By */}
          <div className="flex items-center bg-[#090d16] rounded-lg border border-slate-800 px-2 py-1 text-xs">
            <ArrowUpDown className="w-3 h-3 text-slate-400 mr-1.5" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-slate-200 text-xs focus:outline-none cursor-pointer"
            >
              <option value="days">Sort by Days Remaining (Urgency)</option>
              <option value="stock">Sort by Lowest Stock Quantity</option>
              <option value="consumption">Sort by Highest Daily Consumption</option>
            </select>
          </div>
        </div>

        <div className="text-xs text-slate-400 font-mono">
          Showing <span className="text-teal-400 font-bold">{filteredMedicines.length}</span> batches
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-[#0d1424] border border-slate-800/80 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#090d16] text-slate-400 uppercase font-mono border-b border-slate-800 text-[10px]">
              <tr>
                <th className="px-4 py-3">Medicine & Batch</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Facility & District</th>
                <th className="px-4 py-3">Current Stock</th>
                <th className="px-4 py-3">Safety Threshold</th>
                <th className="px-4 py-3">Burn Rate / Day</th>
                <th className="px-4 py-3">Days Remaining</th>
                <th className="px-4 py-3">Expiry Date</th>
                <th className="px-4 py-3">Stock Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono">
              {filteredMedicines.map((med) => {
                const isCritical = med.status === 'CRITICAL' || med.daysRemaining < 7;
                const isWarning = med.status === 'LOW' || (med.daysRemaining >= 7 && med.daysRemaining < 15);
                const isSurplus = med.status === 'SURPLUS' || med.daysRemaining > 45;

                return (
                  <tr 
                    key={med.id}
                    className={`hover:bg-slate-800/40 transition-colors ${
                      isCritical ? 'bg-rose-950/15' : ''
                    }`}
                  >
                    <td className="px-4 py-3 font-sans">
                      <div className="font-semibold text-white">{med.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono">Batch: {med.batchNumber}</div>
                    </td>

                    <td className="px-4 py-3 font-sans text-slate-300">
                      {med.category}
                    </td>

                    <td className="px-4 py-3 font-sans">
                      <div className="text-slate-200 font-medium">{med.facilityName}</div>
                      <div className="text-[10px] text-teal-400 font-mono">{med.district}</div>
                    </td>

                    <td className="px-4 py-3 text-white font-bold">
                      {med.currentStock.toLocaleString()} {med.unit}
                    </td>

                    <td className="px-4 py-3 text-slate-400">
                      {med.safetyThreshold.toLocaleString()} {med.unit}
                    </td>

                    <td className="px-4 py-3 text-slate-300">
                      {med.dailyConsumption.toLocaleString()} / day
                    </td>

                    <td className="px-4 py-3 font-bold">
                      <span className={`px-2 py-1 rounded text-[11px] ${
                        isCritical
                          ? 'bg-rose-950/60 text-rose-300 border border-rose-800/60 animate-pulse'
                          : isWarning
                          ? 'bg-amber-950/60 text-amber-300 border border-amber-800/60'
                          : isSurplus
                          ? 'bg-sky-950/60 text-sky-300 border border-sky-800/60'
                          : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60'
                      }`}>
                        {med.daysRemaining} Days
                      </span>
                    </td>

                    <td className="px-4 py-3 text-slate-400 text-[11px]">
                      {med.expiryDate}
                    </td>

                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        isCritical
                          ? 'bg-rose-950/70 text-rose-300 border border-rose-800/60'
                          : isWarning
                          ? 'bg-amber-950/70 text-amber-300 border border-amber-800/60'
                          : isSurplus
                          ? 'bg-sky-950/70 text-sky-300 border border-sky-800/60'
                          : 'bg-emerald-950/70 text-emerald-300 border border-emerald-800/60'
                      }`}>
                        {med.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
