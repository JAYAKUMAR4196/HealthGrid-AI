// HealthGrid AI — BRICS Smart Health & Supply Chain Resilience Command Data

export interface StatItem {
  id: string;
  value: string;
  label: string;
  trend: string;
  isPositive: boolean;
  subtext: string;
  sparkline: number[];
  glowColor: string;
}

export interface AlertItem {
  id: string;
  severity: 'critical' | 'risk' | 'watch' | 'stable';
  badgeText: string;
  title: string;
  description: string;
  timeAgo: string;
  district: string;
}

export interface SupplyItem {
  name: string;
  percentage: number;
  quantity: string;
  target: string;
  status: 'Critical' | 'Risk' | 'Watch' | 'Stable' | 'Excess';
  color: string;
  barColor: string;
}

export const NATIONAL_STATS: StatItem[] = [
  {
    id: 'phcs',
    value: '12,482',
    label: 'PHCs Connected',
    trend: '+124 this month',
    isPositive: true,
    subtext: 'Across 28 States & 680 Districts',
    sparkline: [40, 55, 62, 70, 78, 88, 95],
    glowColor: 'from-cyan-500/20 to-blue-500/10'
  },
  {
    id: 'patients',
    value: '1.82M',
    label: 'Patients Monitored',
    trend: '+8.4% weekly surge',
    isPositive: true,
    subtext: 'Active Syndromic Surveillance',
    sparkline: [30, 42, 45, 60, 74, 82, 92],
    glowColor: 'from-blue-500/20 to-indigo-500/10'
  },
  {
    id: 'availability',
    value: '91.4%',
    label: 'Medicine Availability',
    trend: '+4.2% post-redistribution',
    isPositive: true,
    subtext: 'Essential Drug List (EDL)',
    sparkline: [75, 78, 81, 84, 87, 89, 91.4],
    glowColor: 'from-emerald-500/20 to-cyan-500/10'
  },
  {
    id: 'accuracy',
    value: '94.7%',
    label: 'AI Prediction Accuracy',
    trend: '94% Confidence Interval',
    isPositive: true,
    subtext: '14-Day Demand Pre-Forecasting',
    sparkline: [88, 89, 91, 92, 93, 94.2, 94.7],
    glowColor: 'from-purple-500/20 to-pink-500/10'
  }
];

export const LIVE_ALERTS: AlertItem[] = [
  {
    id: 'alt-1',
    severity: 'critical',
    badgeText: 'Critical Stock Alert',
    title: 'Antibiotic Exhaustion Hazard',
    description: '27 PHCs in Warangal & Karimnagar may run out of broad-spectrum antibiotics within 72 hours.',
    timeAgo: '4m ago',
    district: 'Warangal, Telangana'
  },
  {
    id: 'alt-2',
    severity: 'risk',
    badgeText: 'Demand Surge',
    title: 'Syndromic Outbreak Warning',
    description: 'Patient footfall increased +32% in Telangana cluster. Febrile viral syndromic alerts flagged.',
    timeAgo: '12m ago',
    district: 'Hyderabad Metropolitan'
  },
  {
    id: 'alt-3',
    severity: 'watch',
    badgeText: 'Staff Shortage',
    title: 'Duty Roster Deficit',
    description: '14 PHCs operating below recommended clinical staffing (emergency coverage activated).',
    timeAgo: '28m ago',
    district: 'Mahabubnagar North'
  },
  {
    id: 'alt-4',
    severity: 'stable',
    badgeText: 'Supply Restored',
    title: 'Automated Transfer Complete',
    description: 'Emergency delivery of 3,500 antibiotic vials successfully verified at Warangal Central Depot.',
    timeAgo: '41m ago',
    district: 'Warangal Hub'
  }
];

export const SUPPLY_CHAIN_INVENTORY: SupplyItem[] = [
  {
    name: 'Paracetamol',
    percentage: 82,
    quantity: '248,500 tabs',
    target: '300,000 tabs',
    status: 'Stable',
    color: 'text-emerald-400',
    barColor: 'bg-gradient-to-r from-emerald-500 to-cyan-400'
  },
  {
    name: 'Antibiotics',
    percentage: 38,
    quantity: '42,100 vials',
    target: '110,000 vials',
    status: 'Critical',
    color: 'text-rose-400',
    barColor: 'bg-gradient-to-r from-rose-600 to-amber-500'
  },
  {
    name: 'ORS',
    percentage: 21,
    quantity: '18,400 pkts',
    target: '88,000 pkts',
    status: 'Risk',
    color: 'text-amber-400',
    barColor: 'bg-gradient-to-r from-amber-500 to-rose-400'
  },
  {
    name: 'Insulin',
    percentage: 47,
    quantity: '8,950 units',
    target: '19,000 units',
    status: 'Watch',
    color: 'text-yellow-400',
    barColor: 'bg-gradient-to-r from-yellow-500 to-amber-400'
  },
  {
    name: 'Emergency Kits',
    percentage: 68,
    quantity: '1,420 sets',
    target: '2,100 sets',
    status: 'Stable',
    color: 'text-cyan-400',
    barColor: 'bg-gradient-to-r from-cyan-500 to-blue-500'
  }
];

export const DEMAND_FORECAST_DATA = [
  { day: 'Day 1', historical: 4200, predicted: 4200, emergency: 4200 },
  { day: 'Day 5', historical: 4350, predicted: 4400, emergency: 4600 },
  { day: 'Day 10', historical: 4500, predicted: 4750, emergency: 5100 },
  { day: 'Day 15', historical: 4600, predicted: 5100, emergency: 5800 },
  { day: 'Day 20', historical: null, predicted: 5600, emergency: 6600 },
  { day: 'Day 25', historical: null, predicted: 6150, emergency: 7300 },
  { day: 'Day 30', historical: null, predicted: 6700, emergency: 8100 }
];

export const PHC_MEDICINES = [
  { name: 'Paracetamol', stock: 8420, demand: 6100, risk: 'Low', statusColor: 'text-emerald-400', bg: 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30' },
  { name: 'Antibiotics', stock: 1240, demand: 4800, risk: 'Critical', statusColor: 'text-rose-400', bg: 'bg-rose-950/50 text-rose-300 border-rose-500/40' },
  { name: 'ORS', stock: 920, demand: 2100, risk: 'High', statusColor: 'text-amber-400', bg: 'bg-amber-950/50 text-amber-300 border-amber-500/40' },
  { name: 'Insulin', stock: 680, demand: 1200, risk: 'Medium', statusColor: 'text-yellow-400', bg: 'bg-yellow-950/40 text-yellow-300 border-yellow-500/30' },
];

export const BRICS_NODES = [
  { id: 'in', name: 'India', flag: '🇮🇳', role: 'HealthGrid Primary Command', latency: '8ms', nodes: '12,482 PHCs', coords: { x: 62, y: 55 } },
  { id: 'br', name: 'Brazil', flag: '🇧🇷', role: 'SUS Amazonia Federated Node', latency: '42ms', nodes: '4,100 UBSs', coords: { x: 30, y: 70 } },
  { id: 'ru', name: 'Russia', flag: '🇷🇺', role: 'Siberian Cold-Chain Hub', latency: '35ms', nodes: '3,800 Polyclinics', coords: { x: 68, y: 25 } },
  { id: 'cn', name: 'China', flag: '🇨🇳', role: 'Asia-Pacific Neural Registry', latency: '21ms', nodes: '16,200 Centers', coords: { x: 78, y: 45 } },
  { id: 'za', name: 'South Africa', flag: '🇿🇦', role: 'Sub-Saharan Pathogen Sentinel', latency: '54ms', nodes: '2,900 Clinics', coords: { x: 54, y: 80 } },
];

export const IMPACT_METRICS = [
  {
    id: 'stockouts',
    value: '−32%',
    label: 'Potential Stock-outs',
    subtext: 'Preemptively resolved via predictive transfer recommendations',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    id: 'allocation',
    value: '+41%',
    label: 'Faster Resource Allocation',
    subtext: 'Turnaround compressed from 48 hours to automated 4.2 hours',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    id: 'readiness',
    value: '+27%',
    label: 'Emergency Readiness',
    subtext: 'Earmarked isolation beds and buffer medicines in high-risk zones',
    color: 'from-violet-400 to-purple-500'
  },
  {
    id: 'confidence',
    value: '94%',
    label: 'Forecast Confidence',
    subtext: 'Ensemble model validated against multi-year epidemiological data',
    color: 'from-emerald-400 to-teal-500'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'CONNECT',
    desc: 'Connect PHCs, districts, hospitals and supply chains into a unified, secure real-time telemetry network.',
    badge: 'Network Telemetry'
  },
  {
    step: '02',
    title: 'PREDICT',
    desc: 'AI forecasts medicine demand, patient load and resource requirements up to 30 days in advance.',
    badge: 'Neural Forecasting'
  },
  {
    step: '03',
    title: 'OPTIMIZE',
    desc: 'AI identifies shortages and recommends optimal cross-district resource redistribution without risking donor stability.',
    badge: 'Resource Balancing'
  },
  {
    step: '04',
    title: 'RESPOND',
    desc: 'Authorities act before shortages become critical, executing verified dispatches and emergency protocols.',
    badge: 'Autonomous Action'
  }
];

export const HOW_IT_WORKS = HOW_IT_WORKS_STEPS;

export const TECH_CARDS = [
  { name: 'Artificial Intelligence', desc: 'Predictive neural architectures for demand forecasting', icon: 'Brain' },
  { name: 'Machine Learning', desc: 'Continuous learning models on multi-source health data', icon: 'Cpu' },
  { name: 'Federated Learning', desc: 'Decentralized model training preserving localized patient privacy', icon: 'ShieldCheck' },
  { name: 'Predictive Analytics', desc: 'Spatiotemporal epidemiology and stock-out hazard modeling', icon: 'TrendingUp' },
  { name: 'Cloud Computing', desc: 'High-availability, fault-tolerant distributed cloud infrastructure', icon: 'Cloud' },
  { name: 'IoT', desc: 'Smart sensors for cryogenic cold-chain and facility monitoring', icon: 'Radio' },
  { name: 'Geospatial Intelligence', desc: 'GIS routing and GIS-based disease cluster spatial analysis', icon: 'Globe' },
  { name: 'Cybersecurity', desc: 'Zero-trust architecture with end-to-end cryptographic verification', icon: 'Lock' },
];

export const TECH_STACK_ITEMS = TECH_CARDS;

export const ANALYTICS_FOOTFALL_DATA = [
  { time: '08:00', footfall: 120, capacity: 200 },
  { time: '10:00', footfall: 380, capacity: 200 },
  { time: '12:00', footfall: 428, capacity: 200 },
  { time: '14:00', footfall: 310, capacity: 200 },
  { time: '16:00', footfall: 260, capacity: 200 },
  { time: '18:00', footfall: 190, capacity: 200 },
  { time: '20:00', footfall: 110, capacity: 200 }
];

export const ANALYTICS_DEMAND_BARS = [
  { name: 'Analgesics', actual: 92, target: 100 },
  { name: 'Antibiotics', actual: 38, target: 100 },
  { name: 'Rehydration', actual: 44, target: 100 },
  { name: 'Cardio/Diabetic', actual: 78, target: 100 },
  { name: 'Maternal', actual: 86, target: 100 },
];
