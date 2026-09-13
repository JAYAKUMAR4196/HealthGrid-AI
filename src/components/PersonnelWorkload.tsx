import React, { useState } from 'react';
import { useApp } from '../context/AppContext.js';
import { 
  UserCheck, 
  Users, 
  Stethoscope, 
  AlertTriangle, 
  ShieldAlert, 
  Activity, 
  Clock, 
  Calendar,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const PersonnelWorkload: React.FC = () => {
  const { facilities, resilienceScore } = useApp();
  const [filterDept, setFilterDept] = useState<string>('ALL');

  // Aggregated staff metrics across 650 facilities
  const totalStaff = facilities.reduce((acc, f) => acc + f.staffTotal, 0);
  const presentStaff = facilities.reduce((acc, f) => acc + f.staffPresent, 0);
  const totalPatients = facilities.reduce((acc, f) => acc + f.patientFootfallToday, 0);
  const avgRatio = Math.round(totalPatients / (presentStaff || 1));

  // Staff deficit / stress facilities
  const stressedFacilities = facilities
    .map(f => {
      const ratio = Math.round(f.patientFootfallToday / (f.staffPresent || 1));
      const stressIndex = Math.min(100, Math.round((ratio / 25) * 60 + (1 - f.staffPresent / f.staffTotal) * 40));
      return {
        ...f,
        staffPatientRatio: `1:${ratio}`,
        stressIndex,
        doctorPresent: f.staffPresent >= 2,
        nurseCount: Math.max(1, Math.round(f.staffPresent * 0.6))
      };
    })
    .sort((a, b) => b.stressIndex - a.stressIndex)
    .slice(0, 8);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-sky-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Medical Personnel Attendance & Workload Stress Index
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Real-time biometric attendance and clinical workload ratios for Doctors, Nursing Staff, Pharmacists, and Laboratory Technicians across 650 health nodes.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800 text-xs font-mono">
          <span className="text-slate-400">National Attendance:</span>
          <span className="text-emerald-400 font-bold">{resilienceScore.personnelAttendanceRate}%</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400">Avg Staff:Patient:</span>
          <span className="text-sky-300 font-bold">1:{avgRatio}</span>
        </div>
      </div>

      {/* Cadre Breakdown Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
              <Stethoscope className="w-4 h-4" /> Medical Officers
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-950 text-sky-300 border border-sky-800">
              87.2% On Duty
            </span>
          </div>
          <div className="text-2xl font-bold text-white font-mono">1,140 / 1,308</div>
          <p className="text-[11px] text-slate-400">
            Emergency reserve corps standing by: 42 physicians across regional medical colleges.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-4 h-4" /> Staff Nurses
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
              91.4% On Duty
            </span>
          </div>
          <div className="text-2xl font-bold text-white font-mono">2,890 / 3,160</div>
          <p className="text-[11px] text-slate-400">
            ICU nurse-to-patient ratio optimal at 1:2 in District Civil Hospitals.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Activity className="w-4 h-4" /> Pharmacists
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-800">
              84.6% On Duty
            </span>
          </div>
          <div className="text-2xl font-bold text-white font-mono">592 / 700</div>
          <p className="text-[11px] text-slate-400">
            Dispensing queues elevated in 4 rural blocks due to sudden seasonal outpatient surge.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> Lab Technicians
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-950 text-purple-300 border border-purple-800">
              88.5% On Duty
            </span>
          </div>
          <div className="text-2xl font-bold text-white font-mono">618 / 698</div>
          <p className="text-[11px] text-slate-400">
            Diagnostic turnaround: 22 mins average for blood count & malaria rapid strip testing.
          </p>
        </div>
      </div>

      {/* Critical Deficit Alert Notice */}
      <div className="bg-rose-950/30 border border-rose-800/60 rounded-xl p-4 flex items-start gap-3 text-xs text-rose-200">
        <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-rose-300 font-bold uppercase tracking-wide">
            Automated Staff Deficit Alert: 3 Primary Health Centres Operating at Critical Workload Stress
          </strong>
          <p className="text-slate-300">
            Nagarkurnool Rural PHC 3 (PHC-043) and Kamrup Sector 2 have staff-to-patient ratios exceeding 1:55 today due to sudden seasonal viral admissions. Mobile medical relief units have been alerted for roving deployment.
          </p>
        </div>
      </div>

      {/* Workload Stress Index Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-white tracking-tight">
            Facility Clinical Stress Index & Staffing Coverage
          </h3>
          <span className="text-xs text-slate-400 font-mono">
            Algorithm: Dynamic composite of Patient Load + Attendance Deficit
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px] border-b border-slate-800">
              <tr>
                <th className="px-4 py-3 font-sans">Facility</th>
                <th className="px-4 py-3">District</th>
                <th className="px-4 py-3">Attendance</th>
                <th className="px-4 py-3">Patient Intake</th>
                <th className="px-4 py-3">Staff-to-Patient Ratio</th>
                <th className="px-4 py-3">Workload Stress Index</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {stressedFacilities.map((fac) => {
                const isHighStress = fac.stressIndex > 75;
                const isModStress = fac.stressIndex >= 50 && fac.stressIndex <= 75;

                return (
                  <tr key={fac.id} className="hover:bg-slate-850/60 transition-colors">
                    <td className="px-4 py-3 font-sans font-semibold text-white">
                      {fac.name}
                    </td>
                    <td className="px-4 py-3 text-sky-400">
                      {fac.district}
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {fac.staffPresent} / {fac.staffTotal} ({Math.round(fac.staffPresent/fac.staffTotal*100)}%)
                    </td>
                    <td className="px-4 py-3 text-white">
                      {fac.patientFootfallToday} patients/day
                    </td>
                    <td className="px-4 py-3 font-bold text-white">
                      {fac.staffPatientRatio}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${isHighStress ? 'bg-rose-500' : isModStress ? 'bg-amber-500' : 'bg-emerald-500'}`}
                            style={{ width: `${fac.stressIndex}%` }}
                          />
                        </div>
                        <span className={`font-bold ${isHighStress ? 'text-rose-400' : isModStress ? 'text-amber-400' : 'text-emerald-400'}`}>
                          {fac.stressIndex} / 100
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        isHighStress ? 'bg-rose-950 text-rose-300 border border-rose-800' : isModStress ? 'bg-amber-950 text-amber-300 border border-amber-800' : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                      }`}>
                        {isHighStress ? 'Severe Stress' : isModStress ? 'Moderate' : 'Optimal'}
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
