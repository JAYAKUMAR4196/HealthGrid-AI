import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext.js';
import { Facility, FacilityType, HealthStatus, DistrictSummary } from '../types.js';
import { 
  MapPin, 
  Filter, 
  Search, 
  Building, 
  AlertCircle, 
  Activity, 
  Bed, 
  Users, 
  Truck, 
  X, 
  CheckCircle,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

export const NationalHealthMap: React.FC = () => {
  const { 
    facilities, 
    districts, 
    selectedDistrict, 
    setSelectedDistrict, 
    setActiveTab, 
    emergencyMode 
  } = useApp();

  const [selectedState, setSelectedState] = useState<string>('ALL');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // States list from data
  const stateOptions = useMemo(() => {
    const s = new Set(facilities.map(f => f.state));
    return ['ALL', ...Array.from(s).sort()];
  }, [facilities]);

  // Filtered facilities
  const filteredFacilities = useMemo(() => {
    return facilities.filter(f => {
      if (selectedState !== 'ALL' && f.state !== selectedState) return false;
      if (selectedDistrict && f.district.toLowerCase() !== selectedDistrict.toLowerCase() && selectedDistrict !== 'ALL') {
        // if user specifically picked a district
      }
      if (selectedType !== 'ALL' && f.type !== selectedType) return false;
      if (selectedStatus !== 'ALL' && f.status !== selectedStatus) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return f.name.toLowerCase().includes(q) || f.district.toLowerCase().includes(q) || f.id.toLowerCase().includes(q);
      }
      return true;
    });
  }, [facilities, selectedState, selectedDistrict, selectedType, selectedStatus, searchQuery]);

  // Active district summary
  const activeDistrictSummary = useMemo(() => {
    if (!selectedDistrict) return null;
    return districts.find(d => d.district.toLowerCase() === selectedDistrict.toLowerCase()) || null;
  }, [districts, selectedDistrict]);

  // Mercator-like projection for India bounding box:
  // Lat: 8.0 to 36.0 (North)
  // Lng: 68.0 to 97.5 (East)
  const projectCoords = (lat: number, lng: number, width: number, height: number) => {
    const minLat = 7.5;
    const maxLat = 36.5;
    const minLng = 67.5;
    const maxLng = 97.5;

    const x = ((lng - minLng) / (maxLng - minLng)) * (width - 60) + 30;
    const y = ((maxLat - lat) / (maxLat - minLat)) * (height - 60) + 30;
    return { x, y };
  };

  const getStatusColor = (status: HealthStatus) => {
    switch (status) {
      case 'HEALTHY': return '#10b981'; // Green
      case 'WARNING': return '#f59e0b'; // Yellow
      case 'CRITICAL': return '#ef4444'; // Red
      case 'LOGISTICS': return '#3b82f6'; // Blue
      default: return '#94a3b8';
    }
  };

  return (
    <div className="space-y-4">
      {/* Map Control Bar & Filters */}
      <div className="bg-[#0d1424] border border-slate-800/80 rounded-xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            <input
              type="text"
              placeholder="Search facility, district..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#090d16] border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 w-48 sm:w-56"
            />
          </div>

          {/* State Filter */}
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="bg-[#090d16] border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-sky-500 cursor-pointer"
          >
            <option value="ALL">All States (15)</option>
            {stateOptions.filter(s => s !== 'ALL').map(st => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>

          {/* Facility Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-[#090d16] border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-sky-500 cursor-pointer"
          >
            <option value="ALL">All Facilities (650+)</option>
            <option value="PHC">Primary Health Centres (PHCs)</option>
            <option value="CHC">Community Health Centres (CHCs)</option>
            <option value="DISTRICT_HOSPITAL">District Hospitals</option>
            <option value="WAREHOUSE">Medicine Warehouses</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-[#090d16] border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-sky-500 cursor-pointer"
          >
            <option value="ALL">All Statuses</option>
            <option value="HEALTHY">Green = Healthy</option>
            <option value="WARNING">Yellow = Warning</option>
            <option value="CRITICAL">Red = Critical</option>
            <option value="LOGISTICS">Blue = Logistics Hub</option>
          </select>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-xs text-slate-300 font-mono">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Healthy</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span>Warning</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
            <span>Critical</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
            <span>Logistics</span>
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-sky-400 font-semibold">{filteredFacilities.length} Shown</span>
        </div>
      </div>

      {/* Main Map Canvas & District Intelligence Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-[580px]">
        {/* Interactive GIS Vector Map of India */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-3 relative flex flex-col justify-between overflow-hidden shadow-inner">
          <div className="flex items-center justify-between text-xs text-slate-400 px-2 py-1 z-10">
            <div className="flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span>India GIS Health Network Telemetry (WGS-84 Projection)</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded border border-slate-800 text-[11px]">
              <button 
                onClick={() => setZoomLevel(Math.max(0.8, zoomLevel - 0.2))} 
                className="px-1.5 hover:text-white"
              >
                -
              </button>
              <span className="font-mono">{Math.round(zoomLevel * 100)}%</span>
              <button 
                onClick={() => setZoomLevel(Math.min(2.0, zoomLevel + 0.2))} 
                className="px-1.5 hover:text-white"
              >
                +
              </button>
            </div>
          </div>

          {/* SVG Map Container */}
          <div className="w-full h-[520px] flex items-center justify-center relative overflow-hidden bg-slate-950/60 rounded-lg border border-slate-800/80">
            <svg
              viewBox="0 0 700 520"
              className="w-full h-full transition-transform duration-300 select-none"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <defs>
                <radialGradient id="hotspotGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="logisticsGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Simplified stylized outline & grid lines */}
              <g opacity="0.15" stroke="#38bdf8" strokeWidth="0.5">
                {[100, 200, 300, 400, 500, 600].map(x => (
                  <line key={`x-${x}`} x1={x} y1="0" x2={x} y2="520" strokeDasharray="3 3" />
                ))}
                {[80, 160, 240, 320, 400, 480].map(y => (
                  <line key={`y-${y}`} x1="0" y1={y} x2="700" y2={y} strokeDasharray="3 3" />
                ))}
              </g>

              {/* District Center Nodes & Regional Corridors */}
              {districts.map(dist => {
                const { x, y } = projectCoords(dist.centerLat, dist.centerLng, 700, 520);
                const isSelected = selectedDistrict?.toLowerCase() === dist.district.toLowerCase();

                return (
                  <g key={dist.district} className="cursor-pointer" onClick={() => setSelectedDistrict(dist.district)}>
                    {isSelected && (
                      <circle
                        cx={x}
                        cy={y}
                        r="32"
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        className="animate-spin"
                        style={{ transformOrigin: `${x}px ${y}px`, animationDuration: '8s' }}
                      />
                    )}
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? "14" : "9"}
                      fill={dist.medicineRiskScore > 75 ? '#ef4444' : dist.medicineRiskScore < 25 ? '#3b82f6' : '#0ea5e9'}
                      fillOpacity={isSelected ? '0.35' : '0.2'}
                      stroke={isSelected ? '#22d3ee' : '#0369a1'}
                      strokeWidth={isSelected ? '2' : '1'}
                    />
                    <text
                      x={x}
                      y={y + 16}
                      textAnchor="middle"
                      className="text-[9px] fill-slate-300 font-mono font-medium tracking-tight pointer-events-none"
                    >
                      {dist.district}
                    </text>
                  </g>
                );
              })}

              {/* Facilities Points / Clustered Markers */}
              {filteredFacilities.slice(0, 180).map(fac => {
                const { x, y } = projectCoords(fac.lat, fac.lng, 700, 520);
                const color = getStatusColor(fac.status);
                const isDistHosp = fac.type === 'DISTRICT_HOSPITAL';
                const isWarehouse = fac.type === 'WAREHOUSE';

                return (
                  <g
                    key={fac.id}
                    className="cursor-pointer transition-transform hover:scale-150"
                    onClick={() => {
                      setSelectedFacility(fac);
                      setSelectedDistrict(fac.district);
                    }}
                  >
                    {fac.status === 'CRITICAL' && (
                      <circle cx={x} cy={y} r="8" fill="url(#hotspotGlow)" />
                    )}
                    {isWarehouse && (
                      <rect
                        x={x - 4}
                        y={y - 4}
                        width="8"
                        height="8"
                        fill="#3b82f6"
                        stroke="#93c5fd"
                        strokeWidth="1"
                        rx="1"
                      />
                    )}
                    {isDistHosp && !isWarehouse && (
                      <polygon
                        points={`${x},${y - 5} ${x + 5},${y + 4} ${x - 5},${y + 4}`}
                        fill={color}
                        stroke="#ffffff"
                        strokeWidth="0.8"
                      />
                    )}
                    {!isDistHosp && !isWarehouse && (
                      <circle
                        cx={x}
                        cy={y}
                        r={fac.type === 'CHC' ? '3.5' : '2.5'}
                        fill={color}
                        stroke="#0f172a"
                        strokeWidth="0.5"
                      />
                    )}
                  </g>
                );
              })}

              {/* Inter-District Redistribution Corridor Active Animation */}
              {/* Hyderabad (17.38, 78.48) to Nagarkurnool (16.48, 78.33) */}
              {(() => {
                const hyd = projectCoords(17.3850, 78.4867, 700, 520);
                const nag = projectCoords(16.4856, 78.3312, 700, 520);
                return (
                  <g>
                    <line
                      x1={hyd.x}
                      y1={hyd.y}
                      x2={nag.x}
                      y2={nag.y}
                      stroke="#22d3ee"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                      className="animate-pulse"
                    />
                    <circle cx={hyd.x} cy={hyd.y} r="5" fill="#3b82f6" />
                    <circle cx={nag.x} cy={nag.y} r="5" fill="#ef4444" />
                    <text
                      x={(hyd.x + nag.x) / 2 + 15}
                      y={(hyd.y + nag.y) / 2}
                      className="text-[9px] fill-sky-300 font-mono font-bold"
                    >
                      Corridor: 3,200 ORS Transfer
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>

          <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between px-2 pt-2">
            <span>Click any node to open the District Health Intelligence Panel</span>
            <span className="text-sky-400">Green Corridors Monitored by NHM</span>
          </div>
        </div>

        {/* District Health Intelligence Panel (Right Column) */}
        <div className="bg-[#0d1424] border border-slate-800/80 rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-sky-400" />
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    District Health Intelligence Panel
                  </h3>
                  <span className="text-xs text-sky-400 font-mono">
                    {selectedDistrict ? `${selectedDistrict} District` : 'Select a District'}
                  </span>
                </div>
              </div>

              {activeDistrictSummary && (
                <span className={`px-2 py-0.5 text-xs font-bold font-mono rounded ${
                  activeDistrictSummary.resilienceScore > 75 
                    ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60'
                    : 'bg-amber-950/60 text-amber-300 border border-amber-800/60'
                }`}>
                  Score: {activeDistrictSummary.resilienceScore}
                </span>
              )}
            </div>

            {activeDistrictSummary ? (
              <div className="space-y-4 pt-3">
                {/* District Key Demographics & Load */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="bg-[#090d16] p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-slate-400 block text-[10px]">Population</span>
                    <strong className="text-white text-sm">{(activeDistrictSummary.population).toLocaleString()}</strong>
                  </div>
                  <div className="bg-[#090d16] p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-slate-400 block text-[10px]">Active Facilities</span>
                    <strong className="text-white text-sm">{activeDistrictSummary.activeFacilities} Centers</strong>
                  </div>
                  <div className="bg-[#090d16] p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-slate-400 block text-[10px]">Medicine Stock Risk</span>
                    <strong className={`text-sm ${activeDistrictSummary.medicineRiskScore > 70 ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {activeDistrictSummary.medicineRiskScore}% ({activeDistrictSummary.medicineRiskScore > 70 ? 'High' : 'Safe'})
                    </strong>
                  </div>
                  <div className="bg-[#090d16] p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-slate-400 block text-[10px]">Bed Utilisation</span>
                    <strong className={`text-sm ${activeDistrictSummary.bedUtilisationRate > 80 ? 'text-amber-400' : 'text-slate-200'}`}>
                      {activeDistrictSummary.bedUtilisationRate}%
                    </strong>
                  </div>
                  <div className="bg-[#090d16] p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-slate-400 block text-[10px]">Patient Surge</span>
                    <strong className={`text-sm ${activeDistrictSummary.patientSurgeRate > 20 ? 'text-rose-400' : 'text-slate-200'}`}>
                      {activeDistrictSummary.patientSurgeRate > 0 ? `+${activeDistrictSummary.patientSurgeRate}%` : `${activeDistrictSummary.patientSurgeRate}%`}
                    </strong>
                  </div>
                  <div className="bg-[#090d16] p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-slate-400 block text-[10px]">Staff Attendance</span>
                    <strong className="text-white text-sm">{activeDistrictSummary.personnelAttendanceRate}%</strong>
                  </div>
                </div>

                {/* Logistics Status */}
                <div className="bg-[#090d16] p-3 rounded-lg border border-slate-800 text-xs flex items-center justify-between">
                  <span className="text-slate-400 font-mono">Logistics Transit Status:</span>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-bold font-mono ${
                    activeDistrictSummary.logisticsStatus === 'OPTIMAL'
                      ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60'
                      : 'bg-amber-950/60 text-amber-300 border border-amber-800/60'
                  }`}>
                    {activeDistrictSummary.logisticsStatus}
                  </span>
                </div>

                {/* AI Recommendation Box */}
                <div className="bg-sky-950/40 border border-sky-800/50 rounded-lg p-3.5 space-y-1.5 text-xs text-sky-200">
                  <div className="flex items-center gap-1.5 text-sky-400 font-bold uppercase tracking-wider text-[10px]">
                    <Activity className="w-3.5 h-3.5" />
                    <span>AI Autonomous Recommendation</span>
                  </div>
                  <p className="leading-relaxed text-[11px]">
                    {activeDistrictSummary.aiRecommendation}
                  </p>
                </div>

                {/* Selected Facility Details (if clicked) */}
                {selectedFacility && (
                  <div className="bg-[#090d16] p-3 rounded-lg border border-sky-800/60 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <strong className="text-white font-semibold">{selectedFacility.name}</strong>
                      <span className="px-1.5 py-0.2 rounded text-[10px] bg-slate-800 text-sky-300">
                        {selectedFacility.type}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-300 font-mono">
                      <span>Beds: {selectedFacility.occupiedBeds} / {selectedFacility.totalBeds}</span>
                      <span>Oxygen: {selectedFacility.oxygenAvailable}%</span>
                      <span>Staff: {selectedFacility.staffPresent} / {selectedFacility.staffTotal}</span>
                      <span>Footfall: {selectedFacility.patientFootfallToday}/day</span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500 text-xs">
                Select a district on the map or filter above to view clinical resource analytics.
              </div>
            )}
          </div>

          {/* Quick Action Navigation */}
          <div className="pt-4 border-t border-slate-800 flex gap-2">
            <button
              onClick={() => setActiveTab('supply_chain')}
              className="flex-1 py-2 px-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors text-center cursor-pointer"
            >
              View District Medicines
            </button>
            <button
              onClick={() => setActiveTab('redistribution')}
              className="flex-1 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700 font-semibold text-xs transition-colors text-center cursor-pointer"
            >
              Redistribution Hub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
