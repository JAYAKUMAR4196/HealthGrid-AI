import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  UserRole, 
  Language, 
  Facility, 
  Medicine, 
  StockOutPrediction, 
  RedistributionPlan, 
  HealthAlert, 
  DistrictSummary, 
  OfflineAction,
  EmergencyScenario
} from '../types.js';
import { TRANSLATIONS } from '../data/translations.js';

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  largeText: boolean;
  setLargeText: (val: boolean) => void;
  emergencyMode: boolean;
  setEmergencyMode: (val: boolean) => void;
  selectedDistrict: string | null;
  setSelectedDistrict: (dist: string | null) => void;
  selectedFacility: Facility | null;
  setSelectedFacility: (f: Facility | null) => void;
  isCopilotOpen: boolean;
  setIsCopilotOpen: (open: boolean) => void;
  copilotPresetPrompt: string | null;
  setCopilotPresetPrompt: (prompt: string | null) => void;
  
  // Offline state
  offlineMode: boolean;
  setOfflineMode: (offline: boolean) => void;
  pendingSyncQueue: OfflineAction[];
  syncStatus: 'ONLINE' | 'SYNCING' | 'OFFLINE' | 'LAST_SYNC';
  lastSyncTime: string;
  recordOfflineAction: (type: OfflineAction['type'], facilityId: string, payload: Record<string, any>) => void;
  syncOfflineQueue: () => Promise<void>;

  // Data
  facilities: Facility[];
  medicines: Medicine[];
  predictions: StockOutPrediction[];
  redistributions: RedistributionPlan[];
  alerts: HealthAlert[];
  districts: DistrictSummary[];
  resilienceScore: {
    score: number;
    breakdown: { supplyChain: number; facilities: number; personnel: number; emergency: number; logistics: number };
    status: string;
    criticalStockOutFacilitiesCount: number;
    activeAlertsCount: number;
    totalFacilitiesCount: number;
    bedsAvailableCount: number;
    personnelAttendanceRate: number;
    patientsTodayCount: number;
  };
  activeEmergency: EmergencyScenario | null;
  
  // Actions
  approveRedistribution: (id: string) => Promise<void>;
  advanceRedistribution: (id: string) => Promise<void>;
  activateEmergency: (scenarioId: string) => Promise<void>;
  deactivateEmergency: () => Promise<void>;
  resolveAlert: (id: string) => Promise<void>;
  applyDemoScenario: (id: string) => Promise<void>;

  // Demo story
  demoStoryStep: number | null;
  setDemoStoryStep: (step: number | null) => void;
  startDemoStory: () => void;
  nextDemoStoryStep: () => void;
  prevDemoStoryStep: () => void;
  closeDemoStory: () => void;

  // Translation helper
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>('national_command');
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [language, setLanguage] = useState<Language>('en');
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [largeText, setLargeText] = useState<boolean>(false);
  const [emergencyMode, setEmergencyMode] = useState<boolean>(false);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>('Nagarkurnool');
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [isCopilotOpen, setIsCopilotOpen] = useState<boolean>(false);
  const [copilotPresetPrompt, setCopilotPresetPrompt] = useState<string | null>(null);

  // Offline management
  const [offlineMode, setOfflineMode] = useState<boolean>(false);
  const [pendingSyncQueue, setPendingSyncQueue] = useState<OfflineAction[]>(() => {
    try {
      const stored = localStorage.getItem('healthgrid_offline_queue');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [syncStatus, setSyncStatus] = useState<'ONLINE' | 'SYNCING' | 'OFFLINE' | 'LAST_SYNC'>('ONLINE');
  const [lastSyncTime, setLastSyncTime] = useState<string>('Just now');

  // Application data
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [predictions, setPredictions] = useState<StockOutPrediction[]>([]);
  const [redistributions, setRedistributions] = useState<RedistributionPlan[]>([]);
  const [alerts, setAlerts] = useState<HealthAlert[]>([]);
  const [districts, setDistricts] = useState<DistrictSummary[]>([]);
  const [activeEmergency, setActiveEmergency] = useState<EmergencyScenario | null>(null);
  const [resilienceScore, setResilienceScore] = useState({
    score: 84.7,
    breakdown: { supplyChain: 88, facilities: 81, personnel: 79, emergency: 91, logistics: 85 },
    status: 'RESILIENT',
    criticalStockOutFacilitiesCount: 18,
    activeAlertsCount: 6,
    totalFacilitiesCount: 650,
    bedsAvailableCount: 4280,
    personnelAttendanceRate: 88.4,
    patientsTodayCount: 108420
  });

  // Guided 12-Step Demo Story Walkthrough
  const [demoStoryStep, setDemoStoryStep] = useState<number | null>(null);

  const t = (key: string) => {
    return TRANSLATIONS[language]?.[key] || TRANSLATIONS.en[key] || key;
  };

  // Initial fetch
  const fetchAllData = async () => {
    try {
      const [resSumm, resFacs, resMeds, resPreds, resRedists, resAlerts, resDists, resEmg] = await Promise.all([
        fetch('/api/summary').then(r => r.json()).catch(() => null),
        fetch('/api/facilities').then(r => r.json()).catch(() => null),
        fetch('/api/inventory').then(r => r.json()).catch(() => null),
        fetch('/api/forecasts').then(r => r.json()).catch(() => null),
        fetch('/api/redistribution').then(r => r.json()).catch(() => null),
        fetch('/api/alerts').then(r => r.json()).catch(() => null),
        fetch('/api/districts').then(r => r.json()).catch(() => null),
        fetch('/api/emergency').then(r => r.json()).catch(() => null),
      ]);

      if (resSumm && resSumm.score) setResilienceScore(resSumm);
      if (resFacs && resFacs.facilities) {
        setFacilities(resFacs.facilities);
        if (!selectedFacility) {
          const phc42 = resFacs.facilities.find((f: Facility) => f.id === 'PHC-042');
          if (phc42) setSelectedFacility(phc42);
        }
      }
      if (resMeds && resMeds.medicines) setMedicines(resMeds.medicines);
      if (resPreds && resPreds.predictions) setPredictions(resPreds.predictions);
      if (resRedists && resRedists.plans) setRedistributions(resRedists.plans);
      if (resAlerts && resAlerts.alerts) setAlerts(resAlerts.alerts);
      if (resDists && Array.isArray(resDists)) setDistricts(resDists);
      if (resEmg) {
        setActiveEmergency(resEmg.activeEmergency);
        if (resEmg.activeEmergency) setEmergencyMode(true);
      }
    } catch (err) {
      console.warn('Backend API initialization notice:', err);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  // Offline queue persistence
  useEffect(() => {
    try {
      localStorage.setItem('healthgrid_offline_queue', JSON.stringify(pendingSyncQueue));
    } catch {
      // ignore
    }
  }, [pendingSyncQueue]);

  // Handle offline mode toggle
  useEffect(() => {
    if (offlineMode) {
      setSyncStatus('OFFLINE');
    } else {
      if (pendingSyncQueue.length > 0) {
        syncOfflineQueue();
      } else {
        setSyncStatus('ONLINE');
      }
    }
  }, [offlineMode]);

  const recordOfflineAction = (type: OfflineAction['type'], facilityId: string, payload: Record<string, any>) => {
    const newAction: OfflineAction = {
      id: `ACTION-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      type,
      facilityId,
      payload,
      timestamp: new Date().toLocaleTimeString(),
      synced: false
    };

    setPendingSyncQueue(prev => [newAction, ...prev]);

    if (!offlineMode) {
      // If currently online, sync immediately
      syncOfflineQueue();
    }
  };

  const syncOfflineQueue = async () => {
    if (pendingSyncQueue.length === 0) return;
    setSyncStatus('SYNCING');
    try {
      const res = await fetch('/api/offline-sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ actions: pendingSyncQueue })
      });
      const data = await res.json();
      if (data.success) {
        setPendingSyncQueue([]);
        setSyncStatus('ONLINE');
        setLastSyncTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        // Refresh local data
        fetchAllData();
      }
    } catch {
      setSyncStatus('OFFLINE');
    }
  };

  const approveRedistribution = async (id: string) => {
    try {
      const res = await fetch(`/api/redistribution/${id}/approve`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setRedistributions(prev => prev.map(p => p.id === id ? data.plan : p));
      }
    } catch {
      // Local optimistic update
      setRedistributions(prev => prev.map(p => p.id === id ? { ...p, status: 'APPROVED' } : p));
    }
  };

  const advanceRedistribution = async (id: string) => {
    try {
      const res = await fetch(`/api/redistribution/${id}/advance`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setRedistributions(prev => prev.map(p => p.id === id ? data.plan : p));
      }
    } catch {
      // Local optimistic update
      setRedistributions(prev => prev.map(p => {
        if (p.id !== id) return p;
        const nextStatus = p.status === 'PENDING_APPROVAL' ? 'APPROVED' : p.status === 'APPROVED' ? 'DISPATCHED' : p.status === 'DISPATCHED' ? 'IN_TRANSIT' : 'DELIVERED';
        return { ...p, status: nextStatus };
      }));
    }
  };

  const activateEmergency = async (scenarioId: string) => {
    try {
      const res = await fetch('/api/emergency/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scenarioId })
      });
      const data = await res.json();
      if (data.activeEmergency) {
        setActiveEmergency(data.activeEmergency);
        setEmergencyMode(true);
        fetchAllData();
      }
    } catch {
      setEmergencyMode(true);
    }
  };

  const deactivateEmergency = async () => {
    try {
      await fetch('/api/emergency/deactivate', { method: 'POST' });
      setActiveEmergency(null);
      setEmergencyMode(false);
      fetchAllData();
    } catch {
      setActiveEmergency(null);
      setEmergencyMode(false);
    }
  };

  const resolveAlert = async (id: string) => {
    try {
      await fetch(`/api/alerts/${id}/resolve`, { method: 'POST' });
      setAlerts(prev => prev.map(a => a.id === id ? { ...a, resolved: true } : a));
    } catch {
      setAlerts(prev => prev.map(a => a.id === id ? { ...a, resolved: true } : a));
    }
  };

  const applyDemoScenario = async (id: string) => {
    try {
      const res = await fetch(`/api/scenarios/${id}`, { method: 'POST' });
      const data = await res.json();
      fetchAllData();
      return data;
    } catch {
      // fallback
    }
  };

  // Demo story controllers
  const startDemoStory = () => {
    setDemoStoryStep(1);
    setActiveTab('overview');
  };

  const nextDemoStoryStep = () => {
    if (demoStoryStep === null) return;
    if (demoStoryStep >= 12) {
      setDemoStoryStep(null);
      return;
    }
    const next = demoStoryStep + 1;
    setDemoStoryStep(next);

    // Contextually navigate tabs based on the 12-step judging narrative
    if (next === 1) setActiveTab('overview');
    else if (next === 2) setActiveTab('overview');
    else if (next === 3) setActiveTab('alerts');
    else if (next === 4) setActiveTab('forecast');
    else if (next === 5) setActiveTab('forecast');
    else if (next === 6) setActiveTab('redistribution');
    else if (next === 7) setActiveTab('redistribution');
    else if (next === 8) setActiveTab('emergency');
    else if (next === 9) setActiveTab('emergency');
    else if (next === 10) setActiveTab('digital_twin');
    else if (next === 11) setActiveTab('federated');
    else if (next === 12) setActiveTab('impact');
  };

  const prevDemoStoryStep = () => {
    if (demoStoryStep === null || demoStoryStep <= 1) return;
    const prev = demoStoryStep - 1;
    setDemoStoryStep(prev);
    if (prev === 1 || prev === 2) setActiveTab('overview');
    else if (prev === 3) setActiveTab('alerts');
    else if (prev === 4 || prev === 5) setActiveTab('forecast');
    else if (prev === 6 || prev === 7) setActiveTab('redistribution');
    else if (prev === 8 || prev === 9) setActiveTab('emergency');
    else if (prev === 10) setActiveTab('digital_twin');
    else if (prev === 11) setActiveTab('federated');
    else if (prev === 12) setActiveTab('impact');
  };

  const closeDemoStory = () => {
    setDemoStoryStep(null);
  };

  return (
    <AppContext.Provider value={{
      role, setRole,
      activeTab, setActiveTab,
      language, setLanguage,
      highContrast, setHighContrast,
      largeText, setLargeText,
      emergencyMode, setEmergencyMode,
      selectedDistrict, setSelectedDistrict,
      selectedFacility, setSelectedFacility,
      isCopilotOpen, setIsCopilotOpen,
      copilotPresetPrompt, setCopilotPresetPrompt,
      offlineMode, setOfflineMode,
      pendingSyncQueue, syncStatus, lastSyncTime,
      recordOfflineAction, syncOfflineQueue,
      facilities, medicines, predictions, redistributions, alerts, districts,
      resilienceScore, activeEmergency,
      approveRedistribution, advanceRedistribution,
      activateEmergency, deactivateEmergency,
      resolveAlert, applyDemoScenario,
      demoStoryStep, setDemoStoryStep,
      startDemoStory, nextDemoStoryStep, prevDemoStoryStep, closeDemoStory,
      t
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
