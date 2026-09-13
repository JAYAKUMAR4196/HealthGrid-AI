import React, { useState } from 'react';
import { useApp } from '../context/AppContext.js';
import { 
  Building2, 
  Wifi, 
  WifiOff, 
  RotateCw, 
  CheckCircle2, 
  Pill, 
  BedDouble, 
  Users, 
  Wind, 
  Save, 
  UploadCloud,
  FileCheck,
  AlertCircle
} from 'lucide-react';

export const PhcOperatorPortal: React.FC = () => {
  const { 
    offlineMode, 
    setOfflineMode, 
    pendingSyncQueue, 
    syncStatus, 
    lastSyncTime, 
    syncOfflineQueue, 
    recordOfflineAction,
    highContrast,
    largeText,
    t 
  } = useApp();

  // Local form state for PHC-042 (Nagarkurnool Rural Sector 2)
  const [footfall, setFootfall] = useState<number>(79);
  const [occupiedBeds, setOccupiedBeds] = useState<number>(10);
  const [paracetamolStock, setParacetamolStock] = useState<number>(380);
  const [amoxicillinStock, setAmoxicillinStock] = useState<number>(140);
  const [orsStock, setOrsStock] = useState<number>(65);
  const [oxygenCylinders, setOxygenCylinders] = useState<number>(8);
  const [doctorOnDuty, setDoctorOnDuty] = useState<boolean>(true);
  const [nurseOnDuty, setNurseOnDuty] = useState<boolean>(true);
  const [pharmacistOnDuty, setPharmacistOnDuty] = useState<boolean>(true);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();

    // Record actions into offline queue
    recordOfflineAction('PATIENT_COUNT', 'PHC-042', { count: footfall });
    recordOfflineAction('BED_STATUS', 'PHC-042', { occupiedBeds });
    recordOfflineAction('INVENTORY_UPDATE', 'PHC-042', { medicineId: 'MED-001', newStock: paracetamolStock });
    recordOfflineAction('INVENTORY_UPDATE', 'PHC-042', { medicineId: 'MED-002', newStock: amoxicillinStock });
    recordOfflineAction('INVENTORY_UPDATE', 'PHC-042', { medicineId: 'MED-003', newStock: orsStock });

    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 4000);
  };

  return (
    <div className={`max-w-3xl mx-auto space-y-6 ${largeText ? 'text-base' : 'text-sm'}`}>
      {/* Offline Status & Sync Header */}
      <div className={`rounded-xl p-5 border shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
        highContrast ? 'bg-black border-amber-400 text-amber-300' : 'bg-slate-900 border-slate-800 text-slate-100'
      }`}>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-cyan-400" />
            <h2 className="font-bold text-white tracking-tight">
              PHC Daily Operations Portal (Station: PHC-042)
            </h2>
          </div>
          <p className="text-xs text-slate-400">
            Nagarkurnool Rural Sector 2 • Offline-first IndexedDB storage enabled (<span className="text-cyan-300">&lt;2KB payload</span>).
          </p>
        </div>

        {/* Sync Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOfflineMode(!offlineMode)}
            className={`px-3 py-1.5 rounded text-xs font-mono font-semibold flex items-center gap-1.5 border transition-colors ${
              offlineMode
                ? 'bg-amber-950 text-amber-300 border-amber-600'
                : 'bg-emerald-950 text-emerald-300 border-emerald-600'
            }`}
          >
            {offlineMode ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5" />}
            <span>{offlineMode ? 'OFFLINE MODE' : 'NETWORK ONLINE'}</span>
          </button>

          <button
            onClick={syncOfflineQueue}
            disabled={pendingSyncQueue.length === 0 || syncStatus === 'SYNCING'}
            className="px-3.5 py-1.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-40"
          >
            <RotateCw className={`w-3.5 h-3.5 ${syncStatus === 'SYNCING' ? 'animate-spin' : ''}`} />
            <span>Sync Queue ({pendingSyncQueue.length})</span>
          </button>
        </div>
      </div>

      {/* Sync Queue Banner if pending */}
      {pendingSyncQueue.length > 0 && (
        <div className="bg-amber-950/40 border border-amber-600/60 rounded-xl p-4 flex items-start justify-between text-xs text-amber-200">
          <div className="flex items-center gap-2.5">
            <UploadCloud className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <strong className="font-bold block text-amber-300">
                {pendingSyncQueue.length} Local Daily Operation Updates Queued
              </strong>
              <span>
                Stored in browser local database. Will automatically synchronize to National HealthGrid when connectivity is detected.
              </span>
            </div>
          </div>
          <span className="text-[11px] font-mono text-slate-400 shrink-0">
            Last Sync: {lastSyncTime}
          </span>
        </div>
      )}

      {saveSuccess && (
        <div className="bg-emerald-950/50 border border-emerald-600/80 rounded-xl p-4 flex items-center gap-2.5 text-xs text-emerald-200 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>Daily PHC report recorded locally in IndexedDB! Ready for immediate sync.</span>
        </div>
      )}

      {/* Main Submission Form */}
      <form onSubmit={handleSubmitReport} className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <h3 className="text-base font-bold text-white tracking-tight">
            Daily Primary Health Operations Submission
          </h3>
          <p className="text-xs text-slate-400">
            Please record today's clinical volume, physical bed availability, and end-of-day medicine stock counts.
          </p>
        </div>

        {/* Section 1: Patient Footfall & Beds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-cyan-400" /> Today's Outpatient Footfall
            </label>
            <input
              type="number"
              value={footfall}
              onChange={(e) => setFootfall(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-cyan-500"
              required
            />
            <span className="text-[10px] text-slate-500 font-mono">Baseline norm: 60-70 patients/day</span>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-cyan-400" /> Occupied Beds (Total: 12)
            </label>
            <input
              type="number"
              max="12"
              value={occupiedBeds}
              onChange={(e) => setOccupiedBeds(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-cyan-500"
              required
            />
            <span className="text-[10px] text-slate-500 font-mono">Available Free: {12 - occupiedBeds} beds</span>
          </div>
        </div>

        {/* Section 2: Medicine Inventory Quick Count */}
        <div className="space-y-3 pt-2">
          <label className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
            <Pill className="w-4 h-4 text-cyan-400" /> Physical Stock Quick-Count (Units)
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1">
              <span className="text-xs font-semibold text-slate-300 block">Paracetamol 500mg</span>
              <input
                type="number"
                value={paracetamolStock}
                onChange={(e) => setParacetamolStock(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-white font-mono text-xs focus:outline-none focus:border-cyan-500"
              />
              <span className="text-[10px] text-rose-400 font-mono block">Threshold: 200 units</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1">
              <span className="text-xs font-semibold text-slate-300 block">Amoxicillin 500mg</span>
              <input
                type="number"
                value={amoxicillinStock}
                onChange={(e) => setAmoxicillinStock(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-white font-mono text-xs focus:outline-none focus:border-cyan-500"
              />
              <span className="text-[10px] text-amber-400 font-mono block">Threshold: 150 units</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1">
              <span className="text-xs font-semibold text-slate-300 block">ORS Sachets</span>
              <input
                type="number"
                value={orsStock}
                onChange={(e) => setOrsStock(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-white font-mono text-xs focus:outline-none focus:border-cyan-500"
              />
              <span className="text-[10px] text-rose-400 font-mono block">Threshold: 100 sachets</span>
            </div>
          </div>
        </div>

        {/* Section 3: Staff Present on Duty Checklist */}
        <div className="space-y-3 pt-2">
          <label className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
            <Users className="w-4 h-4 text-cyan-400" /> Duty Cadre Verification
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <label className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between cursor-pointer">
              <span className="text-xs text-slate-300">Doctor / MO</span>
              <input
                type="checkbox"
                checked={doctorOnDuty}
                onChange={(e) => setDoctorOnDuty(e.target.checked)}
                className="w-4 h-4 text-cyan-600 rounded bg-slate-900 border-slate-700"
              />
            </label>

            <label className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between cursor-pointer">
              <span className="text-xs text-slate-300">Staff Nurse</span>
              <input
                type="checkbox"
                checked={nurseOnDuty}
                onChange={(e) => setNurseOnDuty(e.target.checked)}
                className="w-4 h-4 text-cyan-600 rounded bg-slate-900 border-slate-700"
              />
            </label>

            <label className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between cursor-pointer">
              <span className="text-xs text-slate-300">Pharmacist</span>
              <input
                type="checkbox"
                checked={pharmacistOnDuty}
                onChange={(e) => setPharmacistOnDuty(e.target.checked)}
                className="w-4 h-4 text-cyan-600 rounded bg-slate-900 border-slate-700"
              />
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            {offlineMode ? 'Saving to Local Queue' : 'Direct Server Upload'}
          </span>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer shadow-md"
          >
            <Save className="w-4 h-4" />
            <span>Submit Daily Report</span>
          </button>
        </div>
      </form>
    </div>
  );
};
