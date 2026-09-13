export type ChallengeCategory = 
  | 'All'
  | 'Healthcare'
  | 'Climate'
  | 'Education'
  | 'Smart Cities'
  | 'Financial Inclusion'
  | 'Cybersecurity'
  | 'AI & Data'
  | 'Sustainability';

export type ChallengeDifficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'Elite Grand Challenge';

export interface Challenge {
  id: string;
  category: ChallengeCategory;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  difficulty: ChallengeDifficulty;
  techTags: string[];
  impactMetric: string;
  prizePool: string;
  teamsRegistered: number;
  daysRemaining: number;
  sponsor: string;
  sponsorLogo?: string;
  partnerOrganization: string;
  datasetAvailable: string;
  featured?: boolean;
}

export interface FeaturedSolutionData {
  id: string;
  title: string;
  tagline: string;
  category: string;
  teamName: string;
  originCountry: string;
  problemStatement: string;
  solutionOverview: string;
  architecturePoints: string[];
  techStack: string[];
  impactMetrics: {
    label: string;
    value: string;
    change: string;
  }[];
  awardsWon: string[];
  githubUrl: string;
  liveDemoUrl: string;
}

export interface HowItWorksStep {
  stepNumber: string;
  title: string;
  shortDesc: string;
  detail: string;
  badge: string;
  iconName: string;
}

export interface TechItem {
  id: string;
  name: string;
  category: string;
  description: string;
  floatingDelay: number;
  highlightStat: string;
  iconName: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
  quote: string;
  impactIndicator: string;
  trackWon: string;
  stars: number;
}

export interface DashboardMetric {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  subtext: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  role: 'Hacker' | 'Team Lead' | 'Mentor' | 'Judge';
  track: string;
  teamName?: string;
  experienceLevel: string;
  githubOrLinkedin: string;
  agreeToTerms: boolean;
}

// Legacy types preserved for server/db.ts and auxiliary components
export type UserRole = 
  | 'national_command' 
  | 'district_admin' 
  | 'phc_operator' 
  | 'emergency_officer';

export type Language = 'en' | 'hi' | 'te';

export type FacilityType = 'PHC' | 'CHC' | 'DISTRICT_HOSPITAL' | 'WAREHOUSE' | 'DISTRIBUTION_HUB';

export type HealthStatus = 'HEALTHY' | 'WARNING' | 'CRITICAL' | 'LOGISTICS';

export type InventoryStatus = 'NORMAL' | 'LOW' | 'CRITICAL' | 'EXPIRED' | 'EXCESS';

export interface Facility {
  id: string;
  name: string;
  type: FacilityType;
  district: string;
  state: string;
  lat: number;
  lng: number;
  status: HealthStatus;
  totalBeds: number;
  occupiedBeds: number;
  icuBeds: number;
  availableIcuBeds: number;
  ventilators: number;
  oxygenAvailable: number;
  staffPresent: number;
  staffTotal: number;
  patientFootfallToday: number;
  patientFootfallBaseline: number;
  criticalMedicinesCount: number;
  contactPerson: string;
  phone: string;
}

export interface Medicine {
  id: string;
  name: string;
  category: string;
  unit: string;
  currentStock: number;
  dailyConsumption: number;
  minStockLevel: number;
  maxStockLevel: number;
  batchNumber: string;
  expiryDate: string;
  supplier: string;
  warehouseId: string;
  warehouseName: string;
  facilityId: string;
  facilityName: string;
  leadTimeDays: number;
  lastDeliveryDate: string;
  nextExpectedDelivery: string;
  daysRemaining: number;
  status: InventoryStatus;
}

export interface ExplainableFactor {
  name: string;
  impact: string;
  description: string;
  type: 'surge' | 'inventory' | 'lead_time' | 'weather' | 'epidemic';
}

export interface StockOutPrediction {
  id: string;
  medicineId: string;
  medicineName: string;
  facilityId: string;
  facilityName: string;
  district: string;
  currentStock: number;
  dailyConsumption: number;
  predictedDepletionDays: number;
  predictedDepletionDate: string;
  stockOutProbability: number;
  riskLevel: 'Safe' | 'Watch' | 'High Risk' | 'Critical';
  recommendedTransferQty: number;
  recommendedSourceWarehouse: string;
  expectedCoverageExtensionDays: number;
  serviceDisruptionRisk: 'Low' | 'Moderate' | 'High' | 'Severe';
  explainability: {
    why: string[];
    topFactors: ExplainableFactor[];
    safetyThresholdDays: number;
  };
}

export interface RedistributionPlan {
  id: string;
  medicineId: string;
  medicineName: string;
  sourceDistrict: string;
  sourceFacility: string;
  sourceSurplusQty: number;
  destinationDistrict: string;
  destinationFacility: string;
  projectedShortageQty: number;
  recommendedTransferQty: number;
  distanceKm: number;
  transportDurationHours: number;
  priority: 'HIGH' | 'MEDIUM' | 'CRITICAL';
  shortageReductionPercent: number;
  optimizationScore: number;
  status: 'PENDING_APPROVAL' | 'APPROVED' | 'DISPATCHED' | 'IN_TRANSIT' | 'DELIVERED';
  driverName?: string;
  vehicleNo?: string;
  temperatureControlled: boolean;
  gpsCoordinates?: { lat: number; lng: number };
  timeline: { step: string; timestamp: string; done: boolean }[];
}

export interface HealthAlert {
  id: string;
  category: 'Medicine' | 'Patients' | 'Beds' | 'Personnel' | 'Logistics' | 'Emergency';
  severity: 'INFO' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  title: string;
  whatHappened: string;
  whyItMatters: string;
  affectedFacilities: string[];
  affectedPatientsEst: number;
  recommendedAction: string;
  confidenceScore: number;
  timestamp: string;
  resolved: boolean;
}

export interface DistrictSummary {
  district: string;
  state: string;
  population: number;
  activeFacilities: number;
  medicineRiskScore: number;
  bedUtilisationRate: number;
  patientSurgeRate: number;
  personnelAttendanceRate: number;
  logisticsStatus: 'OPTIMAL' | 'MODERATE_DELAY' | 'DISRUPTED';
  resilienceScore: number;
  aiRecommendation: string;
  centerLat: number;
  centerLng: number;
}

export interface EmergencyScenario {
  id: string;
  name: string;
  type: 'OUTBREAK' | 'FLOOD' | 'CYCLONE' | 'HEATWAVE' | 'PANDEMIC' | 'SUPPLY_SHOCK';
  severity: 'Low' | 'Moderate' | 'High' | 'Severe';
  affectedRegion: string;
  durationWeeks: number;
  patientSurgeExpected: number;
  medicineDemandExpected: number;
  bedDemandExpected: number;
  personnelDeficitExpected: number;
  active: boolean;
}

export interface FederatedNode {
  country: string;
  nodeName: string;
  flag: string;
  datasetSize: string;
  localAccuracy: number;
  modelUpdateContribution: number;
  privacyGuarantee: string;
  status: 'ONLINE' | 'TRAINING' | 'AGGREGATING' | 'SYNCED';
  roundLoss: number;
}

export interface OfflineAction {
  id: string;
  type: 'INVENTORY_UPDATE' | 'PATIENT_COUNT' | 'BED_STATUS' | 'ATTENDANCE_RECORD' | 'EMERGENCY_REPORT';
  facilityId: string;
  payload: Record<string, any>;
  timestamp: string;
  synced: boolean;
}

export interface DroneMission {
  id: string;
  callsign: string;
  model: string;
  status: 'IN_FLIGHT' | 'CHARGING' | 'DISPATCHED' | 'STANDBY' | 'DELIVERED';
  departure: string;
  destination: string;
  altitudeMeters: number;
  batteryPercent: number;
  payloadName: string;
  payloadCategory: 'CRYO_VACCINE' | 'EMERGENCY_ANTIVENOM' | 'RARE_BLOOD' | 'DIAGNOSTIC_KITS';
  tempCelsius: number;
  tempMin: number;
  tempMax: number;
  targetEtaMinutes: number;
  distanceKm: number;
  distanceTraveledKm: number;
  flightSpeedKmh: number;
  coordinates: { lat: number; lng: number };
}

export interface QuantumRouteResult {
  originalDistanceKm: number;
  quantumDistanceKm: number;
  distanceSavedPercent: number;
  originalHours: number;
  quantumHours: number;
  timeSavedPercent: number;
  carbonSavedKg: number;
  spoilageRiskPercent: number;
  nodesOptimized: number;
}

export interface PathogenSurveillance {
  id: string;
  pathogenName: string;
  variant: string;
  riskLevel: 'LOW' | 'ELEVATED' | 'HIGH_ALERT' | 'PRE-SURGE';
  daysBeforeSymptomSurge: number;
  affectedDistrict: string;
  mutationVector: string;
  detectionSource: 'Wastewater NGS' | 'Hospital Syndromic AI' | 'Environmental Satellite';
  transmissionVelocityR0: number;
  recommendedTherapeutic: string;
  preAllocatedDoses: number;
}

export interface ColdChainIoTDevice {
  id: string;
  sensorId: string;
  batchId: string;
  medicineName: string;
  facility: string;
  currentTemp: number;
  minSafeTemp: number;
  maxSafeTemp: number;
  vibrationG: number;
  batteryRemainingPercent: number;
  lastPingSecondsAgo: number;
  cryptographicHash: string;
  status: 'OPTIMAL' | 'WARNING' | 'EXCURSION';
}

