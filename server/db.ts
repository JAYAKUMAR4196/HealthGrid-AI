import { 
  Facility, 
  Medicine, 
  StockOutPrediction, 
  RedistributionPlan, 
  HealthAlert, 
  DistrictSummary, 
  FederatedNode, 
  EmergencyScenario,
  OfflineAction 
} from '../src/types.js';

export const STATES = [
  'Telangana', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Kerala',
  'Andhra Pradesh', 'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'Madhya Pradesh',
  'West Bengal', 'Odisha', 'Bihar', 'Assam', 'Punjab'
];

export const DISTRICT_MAP: Record<string, { state: string; lat: number; lng: number; pop: number }> = {
  'Hyderabad': { state: 'Telangana', lat: 17.3850, lng: 78.4867, pop: 6809970 },
  'Nagarkurnool': { state: 'Telangana', lat: 16.4856, lng: 78.3312, pop: 861766 },
  'Warangal': { state: 'Telangana', lat: 17.9689, lng: 79.5941, pop: 1135700 },
  'Rangareddy': { state: 'Telangana', lat: 17.3457, lng: 78.5522, pop: 2446265 },
  'Karimnagar': { state: 'Telangana', lat: 18.4386, lng: 79.1288, pop: 1005711 },
  'Mumbai Suburban': { state: 'Maharashtra', lat: 19.0760, lng: 72.8777, pop: 9356962 },
  'Pune': { state: 'Maharashtra', lat: 18.5204, lng: 73.8567, pop: 9429408 },
  'Satara': { state: 'Maharashtra', lat: 17.6805, lng: 74.0183, pop: 3003741 },
  'Nagpur': { state: 'Maharashtra', lat: 21.1458, lng: 79.0882, pop: 4653570 },
  'Nashik': { state: 'Maharashtra', lat: 19.9975, lng: 73.7898, pop: 6107187 },
  'Bengaluru Urban': { state: 'Karnataka', lat: 12.9716, lng: 77.5946, pop: 9621551 },
  'Mysuru': { state: 'Karnataka', lat: 12.2958, lng: 76.6394, pop: 3001127 },
  'Belagavi': { state: 'Karnataka', lat: 15.8497, lng: 74.4977, pop: 4779661 },
  'Kalaburagi': { state: 'Karnataka', lat: 17.3297, lng: 76.8343, pop: 2566326 },
  'Chennai': { state: 'Tamil Nadu', lat: 13.0827, lng: 80.2707, pop: 7088000 },
  'Coimbatore': { state: 'Tamil Nadu', lat: 11.0168, lng: 76.9558, pop: 3458045 },
  'Madurai': { state: 'Tamil Nadu', lat: 9.9252, lng: 78.1198, pop: 3038252 },
  'Tiruchirappalli': { state: 'Tamil Nadu', lat: 10.7905, lng: 78.7047, pop: 2722290 },
  'Thiruvananthapuram': { state: 'Kerala', lat: 8.5241, lng: 76.9366, pop: 3301427 },
  'Ernakulam': { state: 'Kerala', lat: 9.9816, lng: 76.2999, pop: 3282388 },
  'Kozhikode': { state: 'Kerala', lat: 11.2588, lng: 75.7804, pop: 3086293 },
  'Visakhapatnam': { state: 'Andhra Pradesh', lat: 17.6868, lng: 83.2185, pop: 4290589 },
  'Krishna': { state: 'Andhra Pradesh', lat: 16.1824, lng: 81.1345, pop: 4517398 },
  'Guntur': { state: 'Andhra Pradesh', lat: 16.3067, lng: 80.4365, pop: 4887813 },
  'Chittoor': { state: 'Andhra Pradesh', lat: 13.2172, lng: 79.1003, pop: 4174064 },
  'Ahmedabad': { state: 'Gujarat', lat: 23.0225, lng: 72.5714, pop: 7214225 },
  'Surat': { state: 'Gujarat', lat: 21.1702, lng: 72.8311, pop: 6081322 },
  'Vadodara': { state: 'Gujarat', lat: 22.3072, lng: 73.1812, pop: 4165626 },
  'Jaipur': { state: 'Rajasthan', lat: 26.9124, lng: 75.7873, pop: 6626178 },
  'Jodhpur': { state: 'Rajasthan', lat: 26.2389, lng: 73.0243, pop: 3687002 },
  'Udaipur': { state: 'Rajasthan', lat: 24.5854, lng: 73.7125, pop: 3068420 },
  'Lucknow': { state: 'Uttar Pradesh', lat: 26.8467, lng: 80.9462, pop: 4589838 },
  'Varanasi': { state: 'Uttar Pradesh', lat: 25.3176, lng: 82.9739, pop: 3676841 },
  'Barabanki': { state: 'Uttar Pradesh', lat: 26.9272, lng: 81.1834, pop: 3260699 },
  'Kanpur Nagar': { state: 'Uttar Pradesh', lat: 26.4499, lng: 80.3319, pop: 4581268 },
  'Bhopal': { state: 'Madhya Pradesh', lat: 23.2599, lng: 77.4126, pop: 2371061 },
  'Indore': { state: 'Madhya Pradesh', lat: 22.7196, lng: 75.8577, pop: 3276697 },
  'Gwalior': { state: 'Madhya Pradesh', lat: 26.2183, lng: 78.1828, pop: 2032036 },
  'Kolkata': { state: 'West Bengal', lat: 22.5726, lng: 88.3639, pop: 4496694 },
  'North 24 Parganas': { state: 'West Bengal', lat: 22.7210, lng: 88.4815, pop: 10009781 },
  'Bhubaneswar': { state: 'Odisha', lat: 20.2961, lng: 85.8245, pop: 843402 },
  'Cuttack': { state: 'Odisha', lat: 20.4625, lng: 85.8828, pop: 2624470 },
  'Patna': { state: 'Bihar', lat: 25.5941, lng: 85.1376, pop: 5838465 },
  'Gaya': { state: 'Bihar', lat: 24.7914, lng: 85.0002, pop: 4391418 },
  'Muzaffarpur': { state: 'Bihar', lat: 26.1209, lng: 85.3647, pop: 4801062 },
  'Kamrup Metropolitan': { state: 'Assam', lat: 26.1445, lng: 91.7362, pop: 1253938 },
  'Dibrugarh': { state: 'Assam', lat: 27.4728, lng: 94.9120, pop: 1326335 },
  'Ludhiana': { state: 'Punjab', lat: 30.9010, lng: 75.8573, pop: 3498739 },
  'Amritsar': { state: 'Punjab', lat: 31.6340, lng: 74.8723, pop: 2490656 },
  'Jalandhar': { state: 'Punjab', lat: 31.3260, lng: 75.5762, pop: 2193590 }
};

export const MEDICINES_CATALOG = [
  { name: 'Paracetamol 500mg', category: 'Analgesics / Antipyretics', unit: 'Tablets' },
  { name: 'Amoxicillin 500mg', category: 'Antibiotics', unit: 'Capsules' },
  { name: 'Oral Rehydration Salts (ORS)', category: 'Electrolytes', unit: 'Sachets' },
  { name: 'Metformin 500mg', category: 'Antidiabetic', unit: 'Tablets' },
  { name: 'Atorvastatin 10mg', category: 'Cardiovascular', unit: 'Tablets' },
  { name: 'Azithromycin 500mg', category: 'Antibiotics', unit: 'Tablets' },
  { name: 'Insulin Glargine 100IU/ml', category: 'Antidiabetic', unit: 'Vials' },
  { name: 'Ceftriaxone 1g Inj', category: 'Antibiotics (Injectable)', unit: 'Vials' },
  { name: 'Salbutamol Inhaler 100mcg', category: 'Respiratory', unit: 'Inhalers' },
  { name: 'Artemether + Lumefantrine', category: 'Antimalarial', unit: 'Tablets' },
  { name: 'Ibuprofen 400mg', category: 'Anti-inflammatory', unit: 'Tablets' },
  { name: 'Doxycycline 100mg', category: 'Antibiotics', unit: 'Capsules' },
  { name: 'Pantoprazole 40mg', category: 'Gastrointestinal', unit: 'Tablets' },
  { name: 'Enoxaparin 40mg Inj', category: 'Anticoagulant', unit: 'Syringes' },
  { name: 'Ciprofloxacin 500mg', category: 'Antibiotics', unit: 'Tablets' },
  { name: 'Zinc Sulfate 20mg', category: 'Nutritional Supplements', unit: 'Tablets' },
  { name: 'Iron + Folic Acid', category: 'Nutritional Supplements', unit: 'Tablets' },
  { name: 'Dexamethasone 4mg/ml', category: 'Corticosteroids', unit: 'Ampoules' },
  { name: 'Medical Oxygen (Cylinder D)', category: 'Medical Gases', unit: 'Cylinders' },
  { name: 'Normal Saline 0.9% 500ml', category: 'IV Fluids', unit: 'Bottles' },
  { name: 'Ringer Lactate 500ml', category: 'IV Fluids', unit: 'Bottles' },
  { name: 'Tetanus Toxoid Vaccine', category: 'Vaccines', unit: 'Vials' },
  { name: 'Rabies Vaccine (PVRV)', category: 'Vaccines', unit: 'Vials' },
  { name: 'Cetirizine 10mg', category: 'Antihistamines', unit: 'Tablets' },
  { name: 'Albendazole 400mg', category: 'Anthelmintics', unit: 'Tablets' }
];

class HealthGridDatabase {
  public facilities: Facility[] = [];
  public medicines: Medicine[] = [];
  public stockOutPredictions: StockOutPrediction[] = [];
  public redistributionPlans: RedistributionPlan[] = [];
  public alerts: HealthAlert[] = [];
  public districtSummaries: DistrictSummary[] = [];
  public federatedNodes: FederatedNode[] = [];
  public emergencyScenarios: EmergencyScenario[] = [];
  public activeEmergency: EmergencyScenario | null = null;
  public offlineQueue: OfflineAction[] = [];
  public federatedState = {
    currentRound: 3,
    maxRounds: 5,
    isRunning: false,
    globalAccuracy: 93.4,
    convergenceRate: 0.96,
    differentialPrivacyBudgetEpsilon: 0.85,
    accuracyHistory: [
      { round: 1, globalAcc: 74.2, baselineAcc: 68.0 },
      { round: 2, globalAcc: 83.1, baselineAcc: 68.0 },
      { round: 3, globalAcc: 89.5, baselineAcc: 68.0 },
      { round: 4, globalAcc: 92.8, baselineAcc: 68.0 },
      { round: 5, globalAcc: 94.6, baselineAcc: 68.0 },
    ]
  };

  constructor() {
    this.seedDatabase();
  }

  public seedDatabase() {
    this.facilities = [];
    this.medicines = [];
    this.stockOutPredictions = [];
    this.redistributionPlans = [];
    this.alerts = [];
    this.districtSummaries = [];
    this.federatedNodes = [];
    this.emergencyScenarios = [];

    const districtKeys = Object.keys(DISTRICT_MAP);

    // 1. Generate facilities: 500 PHCs, 100 CHCs, 50 District Hospitals, 15 Warehouses, 10 Distribution Hubs
    let facilityIndex = 1;

    // First generate 1 District Hospital and 1 Warehouse/Hub per district for 50 districts
    districtKeys.forEach((distName, dIdx) => {
      const distInfo = DISTRICT_MAP[distName];
      const baseLat = distInfo.lat;
      const baseLng = distInfo.lng;

      // District Hospital
      const dhBeds = 200 + Math.floor(Math.random() * 250);
      const dhOccupied = Math.floor(dhBeds * (0.7 + Math.random() * 0.25));
      const dhIcu = 30 + Math.floor(Math.random() * 20);
      const dhStaff = 120 + Math.floor(Math.random() * 60);
      const dhPresent = Math.floor(dhStaff * (0.8 + Math.random() * 0.18));

      this.facilities.push({
        id: `DH-${String(dIdx + 1).padStart(3, '0')}`,
        name: `${distName} District Hospital`,
        type: 'DISTRICT_HOSPITAL',
        district: distName,
        state: distInfo.state,
        lat: Number((baseLat + (Math.random() - 0.5) * 0.04).toFixed(4)),
        lng: Number((baseLng + (Math.random() - 0.5) * 0.04).toFixed(4)),
        status: dhOccupied / dhBeds > 0.9 ? 'CRITICAL' : dhOccupied / dhBeds > 0.8 ? 'WARNING' : 'HEALTHY',
        totalBeds: dhBeds,
        occupiedBeds: dhOccupied,
        icuBeds: dhIcu,
        availableIcuBeds: Math.max(1, Math.floor(dhIcu * 0.25)),
        ventilators: Math.floor(dhIcu * 0.7),
        oxygenAvailable: Math.floor(82 + Math.random() * 18),
        staffTotal: dhStaff,
        staffPresent: dhPresent,
        patientFootfallToday: 550 + Math.floor(Math.random() * 350),
        patientFootfallBaseline: 600,
        criticalMedicinesCount: Math.floor(Math.random() * 3),
        contactPerson: `Dr. ${['K. Sharma', 'R. Patel', 'S. Rao', 'A. Verma', 'M. Reddy'][dIdx % 5]}`,
        phone: `+91 98480 ${String(10000 + dIdx).slice(0, 5)}`
      });

      // Regional Warehouse or Hub
      if (dIdx % 3 === 0 || distName === 'Hyderabad' || distName === 'Pune' || distName === 'Bengaluru Urban' || distName === 'Lucknow') {
        this.facilities.push({
          id: `WH-${String(dIdx + 1).padStart(3, '0')}`,
          name: `${distName} Central Medical Warehouse`,
          type: 'WAREHOUSE',
          district: distName,
          state: distInfo.state,
          lat: Number((baseLat + 0.05 + (Math.random() - 0.5) * 0.03).toFixed(4)),
          lng: Number((baseLng + 0.05 + (Math.random() - 0.5) * 0.03).toFixed(4)),
          status: 'LOGISTICS',
          totalBeds: 0,
          occupiedBeds: 0,
          icuBeds: 0,
          availableIcuBeds: 0,
          ventilators: 0,
          oxygenAvailable: 100,
          staffTotal: 35,
          staffPresent: 32,
          patientFootfallToday: 0,
          patientFootfallBaseline: 0,
          criticalMedicinesCount: 0,
          contactPerson: `Logistics Dir. V. Reddy`,
          phone: `+91 94401 ${String(20000 + dIdx).slice(0, 5)}`
        });
      }
    });

    // 2. Generate 100 CHCs (2 per district)
    districtKeys.forEach((distName, dIdx) => {
      const distInfo = DISTRICT_MAP[distName];
      for (let c = 1; c <= 2; c++) {
        const beds = 30 + Math.floor(Math.random() * 20);
        const occ = Math.floor(beds * (0.65 + Math.random() * 0.3));
        const staff = 25 + Math.floor(Math.random() * 15);
        this.facilities.push({
          id: `CHC-${String(facilityIndex++).padStart(3, '0')}`,
          name: `${distName} CHC Block ${c}`,
          type: 'CHC',
          district: distName,
          state: distInfo.state,
          lat: Number((distInfo.lat + (Math.random() - 0.5) * 0.2).toFixed(4)),
          lng: Number((distInfo.lng + (Math.random() - 0.5) * 0.2).toFixed(4)),
          status: occ / beds > 0.88 ? 'CRITICAL' : occ / beds > 0.75 ? 'WARNING' : 'HEALTHY',
          totalBeds: beds,
          occupiedBeds: occ,
          icuBeds: 4,
          availableIcuBeds: Math.floor(Math.random() * 3),
          ventilators: 2,
          oxygenAvailable: Math.floor(75 + Math.random() * 25),
          staffTotal: staff,
          staffPresent: Math.floor(staff * 0.85),
          patientFootfallToday: 120 + Math.floor(Math.random() * 90),
          patientFootfallBaseline: 130,
          criticalMedicinesCount: Math.floor(Math.random() * 4),
          contactPerson: `Dr. Medical Officer ${c}`,
          phone: `+91 99880 ${String(30000 + facilityIndex).slice(0, 5)}`
        });
      }
    });

    // 3. Generate 500+ PHCs distributed across 50 districts (~10 PHCs per district)
    districtKeys.forEach((distName) => {
      const distInfo = DISTRICT_MAP[distName];
      const phcCount = 10;
      for (let p = 1; p <= phcCount; p++) {
        const idNum = facilityIndex++;
        const beds = 6 + Math.floor(Math.random() * 6);
        const occ = Math.floor(beds * (0.5 + Math.random() * 0.45));
        const staff = 8 + Math.floor(Math.random() * 5);
        const isCriticalStock = (idNum === 42 || idNum === 112 || idNum % 29 === 0);
        const status = isCriticalStock ? 'CRITICAL' : (occ / beds > 0.85 ? 'WARNING' : 'HEALTHY');

        this.facilities.push({
          id: `PHC-${String(idNum).padStart(3, '0')}`,
          name: `${distName} PHC Sector ${p}`,
          type: 'PHC',
          district: distName,
          state: distInfo.state,
          lat: Number((distInfo.lat + (Math.random() - 0.5) * 0.35).toFixed(4)),
          lng: Number((distInfo.lng + (Math.random() - 0.5) * 0.35).toFixed(4)),
          status,
          totalBeds: beds,
          occupiedBeds: occ,
          icuBeds: 0,
          availableIcuBeds: 0,
          ventilators: 0,
          oxygenAvailable: Math.floor(65 + Math.random() * 35),
          staffTotal: staff,
          staffPresent: Math.max(2, Math.floor(staff * (idNum === 112 ? 0.6 : 0.88))),
          patientFootfallToday: idNum === 112 ? 186 : (45 + Math.floor(Math.random() * 40)),
          patientFootfallBaseline: 65,
          criticalMedicinesCount: isCriticalStock ? 3 : Math.floor(Math.random() * 2),
          contactPerson: `Staff Nurse In-Charge`,
          phone: `+91 91234 ${String(40000 + idNum).slice(0, 5)}`
        });
      }
    });

    // 4. Generate Medicine Inventory (across facilities & warehouses)
    let medIdCount = 1;
    this.facilities.slice(0, 80).forEach((facility) => {
      MEDICINES_CATALOG.forEach((catMed, mIdx) => {
        // Specific key facilities for the demo story:
        // PHC-042 Paracetamol critical (<5 days remaining)
        // Nagarkurnool ORS shortage vs Hyderabad ORS surplus
        let currentStock = 1200 + Math.floor(Math.random() * 3500);
        let dailyConsumption = 80 + Math.floor(Math.random() * 120);

        if (facility.id === 'PHC-042' && catMed.name.includes('Paracetamol')) {
          currentStock = 380;
          dailyConsumption = 79; // ~4.8 days remaining!
        } else if (facility.district === 'Nagarkurnool' && catMed.name.includes('ORS')) {
          currentStock = 450;
          dailyConsumption = 140; // ~3.2 days remaining!
        } else if (facility.district === 'Hyderabad' && catMed.name.includes('ORS') && facility.type === 'WAREHOUSE') {
          currentStock = 14500;
          dailyConsumption = 220; // 65+ days surplus!
        } else if (facility.id === 'PHC-112') {
          currentStock = Math.floor(currentStock * 0.4);
          dailyConsumption = Math.floor(dailyConsumption * 1.5);
        }

        const daysRemaining = Number((currentStock / (dailyConsumption || 1)).toFixed(1));
        let status: 'NORMAL' | 'LOW' | 'CRITICAL' | 'EXPIRED' | 'EXCESS' = 'NORMAL';
        if (daysRemaining < 7) status = 'CRITICAL';
        else if (daysRemaining <= 14) status = 'LOW';
        else if (daysRemaining > 60) status = 'EXCESS';

        const leadDays = 4 + (mIdx % 5);
        const now = new Date();
        const nextDelivery = new Date(now.getTime() + leadDays * 86400000);
        const expiry = new Date(now.getTime() + (180 + (mIdx * 25)) * 86400000);

        this.medicines.push({
          id: `MED-${String(medIdCount++).padStart(5, '0')}`,
          name: catMed.name,
          category: catMed.category,
          unit: catMed.unit,
          currentStock,
          dailyConsumption,
          minStockLevel: Math.floor(dailyConsumption * 15),
          maxStockLevel: Math.floor(dailyConsumption * 60),
          batchNumber: `BAT-2026-${(100 + mIdx)}-${(facility.id.slice(-3))}`,
          expiryDate: expiry.toISOString().split('T')[0],
          supplier: ['Bharat Serums & Vaccines', 'Cipla Health Logistics', 'Sun Pharma Central', 'Dr. Reddy’s Labs', 'Govt Medical Stores Depot'][mIdx % 5],
          warehouseId: `WH-001`,
          warehouseName: `Central Depot - ${facility.district}`,
          facilityId: facility.id,
          facilityName: facility.name,
          leadTimeDays: leadDays,
          lastDeliveryDate: new Date(now.getTime() - 14 * 86400000).toISOString().split('T')[0],
          nextExpectedDelivery: nextDelivery.toISOString().split('T')[0],
          daysRemaining,
          status
        });
      });
    });

    // 5. Generate AI Stock-Out Predictions (with explainability factors)
    this.stockOutPredictions = [
      {
        id: 'PRED-001',
        medicineId: 'MED-00042',
        medicineName: 'Paracetamol 500mg',
        facilityId: 'PHC-042',
        facilityName: 'Nagarkurnool PHC Sector 2',
        district: 'Nagarkurnool',
        currentStock: 380,
        dailyConsumption: 79,
        predictedDepletionDays: 4.8,
        predictedDepletionDate: new Date(Date.now() + 4.8 * 86400000).toISOString().split('T')[0],
        stockOutProbability: 87,
        riskLevel: 'Critical',
        recommendedTransferQty: 2400,
        recommendedSourceWarehouse: 'District Warehouse DW-08 (Hyderabad)',
        expectedCoverageExtensionDays: 21,
        serviceDisruptionRisk: 'High',
        explainability: {
          why: [
            'Daily consumption surged by 19% over the past 7 days due to seasonal fever spike',
            'Outpatient visits at facility increased by 13% week-over-week',
            'Current inventory decreased 24% faster than supplier delivery cadence',
            'Supplier lead time is 6 days, exceeding the 4.8 days stock buffer',
            'Safety threshold breached: minimum safety stock is 1,185 units, actual is 380'
          ],
          topFactors: [
            { name: 'Consumption Surge', impact: '+19%', description: 'Seasonal fever and dengue spike in surrounding villages', type: 'surge' },
            { name: 'Patient Footfall', impact: '+13%', description: 'Patient intake rose to 98/day vs baseline 70/day', type: 'surge' },
            { name: 'Inventory Depletion', impact: '-24%', description: 'High daily outflow depleted local safety buffer', type: 'inventory' },
            { name: 'Lead Time Constraint', impact: '6 Days', description: 'Central procurement pipeline transit takes 6 full days', type: 'lead_time' },
            { name: 'Safety Breach', impact: 'In 4.8 Days', description: 'Zero stock date reached before next shipment window', type: 'inventory' }
          ],
          safetyThresholdDays: 14
        }
      },
      {
        id: 'PRED-002',
        medicineId: 'MED-00043',
        medicineName: 'Amoxicillin 500mg',
        facilityId: 'PHC-078',
        facilityName: 'Pune CHC Block 1',
        district: 'Pune',
        currentStock: 640,
        dailyConsumption: 105,
        predictedDepletionDays: 6.1,
        predictedDepletionDate: new Date(Date.now() + 6.1 * 86400000).toISOString().split('T')[0],
        stockOutProbability: 91,
        riskLevel: 'Critical',
        recommendedTransferQty: 42000,
        recommendedSourceWarehouse: 'Mumbai State Medical Depot',
        expectedCoverageExtensionDays: 30,
        serviceDisruptionRisk: 'Severe',
        explainability: {
          why: [
            'Amoxicillin stock-out predicted in 6.1 days across 14 cluster facilities',
            'Pediatric respiratory tract infection surge detected in adjoining blocks',
            'Wholesale distribution delayed due to regional transit maintenance'
          ],
          topFactors: [
            { name: 'Prescription Rate', impact: '+31%', description: 'High antibiotic usage for secondary bacterial symptoms', type: 'surge' },
            { name: 'Cluster Depletion', impact: '-28%', description: '14 adjacent facilities showing synchronized depletion', type: 'inventory' },
            { name: 'Transit Bottleneck', impact: '5 Days', description: 'Logistics corridor experiencing 48h checkpoint delay', type: 'lead_time' }
          ],
          safetyThresholdDays: 15
        }
      },
      {
        id: 'PRED-003',
        medicineId: 'MED-00044',
        medicineName: 'Oral Rehydration Salts (ORS)',
        facilityId: 'PHC-043',
        facilityName: 'Nagarkurnool Rural PHC 3',
        district: 'Nagarkurnool',
        currentStock: 450,
        dailyConsumption: 140,
        predictedDepletionDays: 3.2,
        predictedDepletionDate: new Date(Date.now() + 3.2 * 86400000).toISOString().split('T')[0],
        stockOutProbability: 94,
        riskLevel: 'Critical',
        recommendedTransferQty: 3200,
        recommendedSourceWarehouse: 'Hyderabad Central Medical Warehouse',
        expectedCoverageExtensionDays: 24,
        serviceDisruptionRisk: 'High',
        explainability: {
          why: [
            'Heatwave advisory triggered 2.4x surge in dehydration and acute gastroenteritis cases',
            'Local stock of ORS sachets dropped from 2,100 to 450 in 11 days',
            'Neighboring Hyderabad district currently holds 8,500 units surplus available for transfer'
          ],
          topFactors: [
            { name: 'Heatwave Outbreak', impact: '+84%', description: 'Temperature above 42C driving high dehydration case incidence', type: 'weather' },
            { name: 'Inventory Drain', impact: '-48%', description: 'Rapid distribution to community ASHA workers', type: 'inventory' },
            { name: 'Surplus Proximity', impact: '160 km', description: 'Hyderabad has 8,500 surplus within 3.5 hour transit radius', type: 'lead_time' }
          ],
          safetyThresholdDays: 14
        }
      },
      {
        id: 'PRED-004',
        medicineId: 'MED-00045',
        medicineName: 'Insulin Glargine 100IU/ml',
        facilityId: 'PHC-112',
        facilityName: 'Rangareddy PHC Sector 4',
        district: 'Rangareddy',
        currentStock: 24,
        dailyConsumption: 3.8,
        predictedDepletionDays: 6.3,
        predictedDepletionDate: new Date(Date.now() + 6.3 * 86400000).toISOString().split('T')[0],
        stockOutProbability: 82,
        riskLevel: 'High Risk',
        recommendedTransferQty: 180,
        recommendedSourceWarehouse: 'Hyderabad Cold-Chain Central Depot',
        expectedCoverageExtensionDays: 45,
        serviceDisruptionRisk: 'High',
        explainability: {
          why: [
            'Cold-chain temperature excursion caused disposal of 45 compromised vials',
            'Patient registry shows 38 chronic insulin-dependent individuals relying on this center',
            'Refrigerated reefer vehicle required for safe redistribution'
          ],
          topFactors: [
            { name: 'Cold-Chain Incident', impact: '-35%', description: 'Thermal breach prompted safe disposal of affected batch', type: 'inventory' },
            { name: 'Chronic Patient Base', impact: '38 Active', description: 'Non-deferrable daily therapeutic requirement', type: 'surge' },
            { name: 'Reefer Transit', impact: '4 Hours', description: 'Refrigerated van dispatch scheduled from state depot', type: 'lead_time' }
          ],
          safetyThresholdDays: 14
        }
      }
    ];

    // 6. Generate Cross-District Redistribution Plans
    this.redistributionPlans = [
      {
        id: 'REDIST-001',
        medicineId: 'MED-00044',
        medicineName: 'Oral Rehydration Salts (ORS)',
        sourceDistrict: 'Hyderabad',
        sourceFacility: 'Hyderabad Central Medical Warehouse (DW-08)',
        sourceSurplusQty: 8500,
        destinationDistrict: 'Nagarkurnool',
        destinationFacility: 'Nagarkurnool Rural PHC Cluster (PHC-042/043)',
        projectedShortageQty: 3200,
        recommendedTransferQty: 3200,
        distanceKm: 160,
        transportDurationHours: 3.5,
        priority: 'HIGH',
        shortageReductionPercent: 100,
        optimizationScore: 94,
        status: 'PENDING_APPROVAL',
        driverName: 'Ramesh Kumar',
        vehicleNo: 'TS-09-UB-4421 (GPS Tracked)',
        temperatureControlled: false,
        gpsCoordinates: { lat: 17.152, lng: 78.411 },
        timeline: [
          { step: 'AI Shortage Detected', timestamp: 'Today, 08:30 AM', done: true },
          { step: 'Optimal Surplus Found in Hyderabad (DW-08)', timestamp: 'Today, 08:31 AM', done: true },
          { step: 'Logistics Route & Load Optimized (160 km)', timestamp: 'Today, 08:32 AM', done: true },
          { step: 'State Administrator Approval', timestamp: 'Pending Officer Review', done: false },
          { step: 'Warehouse Dispatch & Barcode Scan', timestamp: 'Pending', done: false },
          { step: 'En-Route Real-Time Telemetry', timestamp: 'Pending', done: false },
          { step: 'Destination PHC Receipt & Stock Reconciliation', timestamp: 'Pending', done: false }
        ]
      },
      {
        id: 'REDIST-002',
        medicineId: 'MED-00042',
        medicineName: 'Paracetamol 500mg',
        sourceDistrict: 'Hyderabad',
        sourceFacility: 'Hyderabad District Warehouse DW-08',
        sourceSurplusQty: 24000,
        destinationDistrict: 'Nagarkurnool',
        destinationFacility: 'PHC-042 Sector 2',
        projectedShortageQty: 2400,
        recommendedTransferQty: 2400,
        distanceKm: 160,
        transportDurationHours: 3.2,
        priority: 'HIGH',
        shortageReductionPercent: 100,
        optimizationScore: 92,
        status: 'APPROVED',
        driverName: 'Suresh Varma',
        vehicleNo: 'TS-08-EK-1980',
        temperatureControlled: false,
        gpsCoordinates: { lat: 16.920, lng: 78.380 },
        timeline: [
          { step: 'AI Shortage Detected', timestamp: 'Yesterday, 16:15 PM', done: true },
          { step: 'Optimal Surplus Found', timestamp: 'Yesterday, 16:16 PM', done: true },
          { step: 'Route Optimized', timestamp: 'Yesterday, 16:18 PM', done: true },
          { step: 'State Administrator Approved', timestamp: 'Today, 07:15 AM', done: true },
          { step: 'Warehouse Dispatch', timestamp: 'Today, 09:00 AM', done: false },
          { step: 'En-Route', timestamp: 'Pending', done: false },
          { step: 'Delivered', timestamp: 'Pending', done: false }
        ]
      },
      {
        id: 'REDIST-003',
        medicineId: 'MED-00043',
        medicineName: 'Amoxicillin 500mg',
        sourceDistrict: 'Mumbai Suburban',
        sourceFacility: 'Mumbai State Medical Depot',
        sourceSurplusQty: 85000,
        destinationDistrict: 'Pune',
        destinationFacility: 'Pune District Hospital & CHC Cluster',
        projectedShortageQty: 42000,
        recommendedTransferQty: 42000,
        distanceKm: 152,
        transportDurationHours: 3.0,
        priority: 'CRITICAL',
        shortageReductionPercent: 100,
        optimizationScore: 96,
        status: 'IN_TRANSIT',
        driverName: 'Sunil Jadhav',
        vehicleNo: 'MH-04-AX-8910',
        temperatureControlled: true,
        gpsCoordinates: { lat: 18.785, lng: 73.342 },
        timeline: [
          { step: 'AI Shortage Detected', timestamp: 'Today, 06:10 AM', done: true },
          { step: 'Optimal Surplus Found in Mumbai Depot', timestamp: 'Today, 06:12 AM', done: true },
          { step: 'Route Calculated via Expressway', timestamp: 'Today, 06:14 AM', done: true },
          { step: 'Emergency Officer Fast-Track Approval', timestamp: 'Today, 06:45 AM', done: true },
          { step: 'Loaded & Dispatched with Cold-Chain Log', timestamp: 'Today, 08:00 AM', done: true },
          { step: 'In Transit: Km 78 / 152 (ETA 11:30 AM)', timestamp: 'Active GPS Tracking', done: true },
          { step: 'Delivery & Inspection Verification', timestamp: 'Expected 11:30 AM', done: false }
        ]
      },
      {
        id: 'REDIST-004',
        medicineId: 'MED-00019',
        medicineName: 'Medical Oxygen (Cylinder D)',
        sourceDistrict: 'Lucknow',
        sourceFacility: 'Lucknow Central Gas Terminal',
        sourceSurplusQty: 420,
        destinationDistrict: 'Barabanki',
        destinationFacility: 'Barabanki District Hospital',
        projectedShortageQty: 85,
        recommendedTransferQty: 85,
        distanceKm: 38,
        transportDurationHours: 1.1,
        priority: 'CRITICAL',
        shortageReductionPercent: 100,
        optimizationScore: 98,
        status: 'DELIVERED',
        driverName: 'Mohd. Imran',
        vehicleNo: 'UP-32-BZ-3091 (Hazmat Certified)',
        temperatureControlled: false,
        gpsCoordinates: { lat: 26.927, lng: 81.183 },
        timeline: [
          { step: 'AI Oxygen Depletion Alert Triggered', timestamp: 'Yesterday, 14:00 PM', done: true },
          { step: 'Automated Inter-District Routing', timestamp: 'Yesterday, 14:05 PM', done: true },
          { step: 'Emergency Green Corridor Cleared', timestamp: 'Yesterday, 14:20 PM', done: true },
          { step: 'Dispatched from Lucknow Terminal', timestamp: 'Yesterday, 14:40 PM', done: true },
          { step: 'Arrived at Barabanki Hospital Gate', timestamp: 'Yesterday, 15:55 PM', done: true },
          { step: 'Safety Pressure Check Completed & Signed Off', timestamp: 'Yesterday, 16:15 PM', done: true }
        ]
      }
    ];

    // 7. Early Warning AI Alerts
    this.alerts = [
      {
        id: 'ALT-101',
        category: 'Medicine',
        severity: 'CRITICAL',
        title: 'Amoxicillin stock-out predicted in 6.2 days across 14 facilities',
        whatHappened: 'Statistical consumption velocity exceeded standard baseline by 31% over 14 primary health centers in Pune & adjoining blocks.',
        whyItMatters: 'Potentially affects 18,420 acute respiratory infection and pediatric patients who would face unfulfilled prescriptions.',
        affectedFacilities: ['Pune CHC Block 1', 'Pune Rural PHC 4', 'Pune Rural PHC 7', 'Satara Sub-divisional CHC', '10 other PHC nodes'],
        affectedPatientsEst: 18420,
        recommendedAction: 'Redistribute 42,000 units from Mumbai State Medical Depot surplus; dispatch logistics convoy.',
        confidenceScore: 91,
        timestamp: '12 mins ago',
        resolved: false
      },
      {
        id: 'ALT-102',
        category: 'Medicine',
        severity: 'CRITICAL',
        title: 'Paracetamol stock at PHC-042 projected to fall below safety threshold in 4.8 days',
        whatHappened: 'Current inventory (380 tablets) insufficient to cover 79 daily consumption with 6 days supplier lead time.',
        whyItMatters: 'High risk of complete stock-out within 115 hours during an active seasonal viral fevers spike.',
        affectedFacilities: ['PHC-042 (Nagarkurnool Rural Sector 2)'],
        affectedPatientsEst: 2850,
        recommendedAction: 'Execute transfer of 2,400 units from District Warehouse DW-08 in Hyderabad (160 km, 3.5h).',
        confidenceScore: 87,
        timestamp: '28 mins ago',
        resolved: false
      },
      {
        id: 'ALT-103',
        category: 'Patients',
        severity: 'HIGH',
        title: 'Patient footfall at Facility PHC-112 is 43% above normal baseline',
        whatHappened: 'Intake reached 186 patients today against a 30-day baseline of 65/day, clustered around acute GI and waterborne symptoms.',
        whyItMatters: 'Bed occupancy at 92%, staff nurse load doubled, local ORS and IV fluids being consumed at 3x regular rate.',
        affectedFacilities: ['Rangareddy PHC Sector 4 (PHC-112)', 'Adjoining PHC Sector 3'],
        affectedPatientsEst: 1200,
        recommendedAction: 'Increase medicine buffer by 18%. Deploy 2 additional visiting medical officers. Activate district mobile clinic.',
        confidenceScore: 94,
        timestamp: '45 mins ago',
        resolved: false
      },
      {
        id: 'ALT-104',
        category: 'Beds',
        severity: 'HIGH',
        title: 'ICU Bed Occupancy exceeds 92% in Guntur District Hospital',
        whatHappened: 'Available ICU beds dropped to 2 out of 34 total beds following a local multi-vehicle highway accident.',
        whyItMatters: 'Zero emergency buffer for critical coronary or surgical patient admissions over the next 18 hours.',
        affectedFacilities: ['Guntur District Hospital', 'Guntur CHC Block 1'],
        affectedPatientsEst: 14,
        recommendedAction: 'Reroute incoming non-trauma intensive referrals to Vijayawada/Krishna District Hospital (28 km away, 14 free ICUs).',
        confidenceScore: 96,
        timestamp: '1 hour ago',
        resolved: false
      },
      {
        id: 'ALT-105',
        category: 'Personnel',
        severity: 'MEDIUM',
        title: 'Doctor availability at 3 remote PHCs is 27% below scheduled staffing level',
        whatHappened: 'Medical officers in Belagavi rural cluster on approved medical leave and emergency duty rotations.',
        whyItMatters: 'Average patient triage and consultation wait times jumped from 22 minutes to 84 minutes.',
        affectedFacilities: ['Belagavi Rural PHC 2', 'Belagavi Rural PHC 5', 'Belagavi Sector 8'],
        affectedPatientsEst: 450,
        recommendedAction: 'Activate Tele-Consultation hub and redeploy 2 floating resident doctors from Belagavi District Hospital.',
        confidenceScore: 88,
        timestamp: '2 hours ago',
        resolved: false
      },
      {
        id: 'ALT-106',
        category: 'Logistics',
        severity: 'MEDIUM',
        title: 'Monsoon landslide route obstruction on State Highway 44',
        whatHappened: 'Heavy rains caused partial road slippage between Kamrup and Guwahati transit corridor.',
        whyItMatters: 'Medicine delivery convoy ETA for 6 PHCs pushed back by approximately 18 hours.',
        affectedFacilities: ['Kamrup Rural PHC Cluster (5 facilities)'],
        affectedPatientsEst: 3400,
        recommendedAction: 'Reroute distribution through bypass National Highway 27; trigger local PHC emergency reserve cache.',
        confidenceScore: 89,
        timestamp: '3 hours ago',
        resolved: false
      }
    ];

    // 8. District Summaries (50 districts)
    districtKeys.forEach((distName) => {
      const distInfo = DISTRICT_MAP[distName];
      const isShortage = distName === 'Nagarkurnool' || distName === 'Barabanki';
      const isSurplus = distName === 'Hyderabad' || distName === 'Mumbai Suburban';
      
      const medicineRisk = isShortage ? 82 : (isSurplus ? 18 : Math.floor(25 + Math.random() * 35));
      const bedUtil = isShortage ? 88 : Math.floor(65 + Math.random() * 24);
      const patientSurge = distName === 'Rangareddy' ? 43 : Math.floor((Math.random() - 0.2) * 25);
      const personnelAtt = Math.floor(82 + Math.random() * 15);
      const resScore = Number((100 - (medicineRisk * 0.35 + bedUtil * 0.25 + Math.abs(patientSurge) * 0.2 + (100 - personnelAtt) * 0.2)).toFixed(1));

      this.districtSummaries.push({
        district: distName,
        state: distInfo.state,
        population: distInfo.pop,
        activeFacilities: 12 + Math.floor(Math.random() * 6),
        medicineRiskScore: medicineRisk,
        bedUtilisationRate: bedUtil,
        patientSurgeRate: patientSurge,
        personnelAttendanceRate: personnelAtt,
        logisticsStatus: isShortage ? 'MODERATE_DELAY' : 'OPTIMAL',
        resilienceScore: Math.max(50, Math.min(98, resScore)),
        aiRecommendation: isShortage 
          ? `High stock-out vulnerability detected in ORS and antipyretics. Receive inter-district transfer from ${isShortage && distName === 'Nagarkurnool' ? 'Hyderabad' : 'adjoining depot'}.` 
          : isSurplus
          ? `Substantial medicine surplus (+8,500 units ORS, +24,000 Paracetamol). Recommended as primary cross-district redistribution donor.`
          : `All 14 health indicators within normal threshold limits. Routine monitoring active.`,
        centerLat: distInfo.lat,
        centerLng: distInfo.lng
      });
    });

    // 9. Federated AI Nodes (BRICS representation: India, Brazil, Russia, China, South Africa)
    this.federatedNodes = [
      {
        country: 'India',
        nodeName: 'National Health Authority Node (ICMR / NHM)',
        flag: '🇮🇳',
        datasetSize: '2.4M records across 36,000 PHC/CHCs',
        localAccuracy: 94.2,
        modelUpdateContribution: 32.5,
        privacyGuarantee: 'ε = 0.85 (DP-FedAvg, Zero Raw PII Transmitted)',
        status: 'SYNCED',
        roundLoss: 0.118
      },
      {
        country: 'Brazil',
        nodeName: 'SUS / DATASUS Epidemic Surveillance Node',
        flag: '🇧🇷',
        datasetSize: '1.8M records (Amazonas & São Paulo Hub)',
        localAccuracy: 92.8,
        modelUpdateContribution: 24.0,
        privacyGuarantee: 'ε = 0.88 (Secure Aggregation + Noise Injection)',
        status: 'SYNCED',
        roundLoss: 0.134
      },
      {
        country: 'Russia',
        nodeName: 'Ministry of Health Central Research Node',
        flag: '🇷🇺',
        datasetSize: '1.1M records (Ural & Siberian Network)',
        localAccuracy: 91.5,
        modelUpdateContribution: 16.5,
        privacyGuarantee: 'ε = 0.90 (Homomorphic Model Gradient Encrypted)',
        status: 'SYNCED',
        roundLoss: 0.142
      },
      {
        country: 'China',
        nodeName: 'China CDC Regional Public Health Node',
        flag: '🇨🇳',
        datasetSize: '3.1M records (Guangdong & Hubei Network)',
        localAccuracy: 95.1,
        modelUpdateContribution: 18.0,
        privacyGuarantee: 'ε = 0.82 (Multi-Party Federated Computation)',
        status: 'SYNCED',
        roundLoss: 0.109
      },
      {
        country: 'South Africa',
        nodeName: 'National Health Laboratory Service (NHLS)',
        flag: '🇿🇦',
        datasetSize: '890K records (Gauteng & Western Cape)',
        localAccuracy: 90.9,
        modelUpdateContribution: 9.0,
        privacyGuarantee: 'ε = 0.86 (Differential Privacy Differential Clip)',
        status: 'SYNCED',
        roundLoss: 0.155
      }
    ];

    // 10. Emergency Scenarios
    this.emergencyScenarios = [
      {
        id: 'SCENARIO-OUTBREAK',
        name: 'Regional Dengue & Viral Outbreak',
        type: 'OUTBREAK',
        severity: 'High',
        affectedRegion: 'Telangana & Andhra Pradesh (8 Districts)',
        durationWeeks: 4,
        patientSurgeExpected: 42,
        medicineDemandExpected: 63,
        bedDemandExpected: 38,
        personnelDeficitExpected: 18,
        active: false
      },
      {
        id: 'SCENARIO-FLOOD',
        name: 'Coastal Monsoon Inundation & Disruption',
        type: 'FLOOD',
        severity: 'Severe',
        affectedRegion: 'Assam & West Bengal Riverine Blocks (6 Districts)',
        durationWeeks: 3,
        patientSurgeExpected: 55,
        medicineDemandExpected: 78,
        bedDemandExpected: 45,
        personnelDeficitExpected: 28,
        active: false
      },
      {
        id: 'SCENARIO-CYCLONE',
        name: 'Super Cyclone Coastal Evacuation',
        type: 'CYCLONE',
        severity: 'Severe',
        affectedRegion: 'Odisha & Coastal Andhra (5 Districts)',
        durationWeeks: 2,
        patientSurgeExpected: 65,
        medicineDemandExpected: 85,
        bedDemandExpected: 52,
        personnelDeficitExpected: 32,
        active: false
      },
      {
        id: 'SCENARIO-HEATWAVE',
        name: 'Severe Heatwave Alert (Code Red)',
        type: 'HEATWAVE',
        severity: 'High',
        affectedRegion: 'Rajasthan & Northern Madhya Pradesh (10 Districts)',
        durationWeeks: 2,
        patientSurgeExpected: 35,
        medicineDemandExpected: 50,
        bedDemandExpected: 30,
        personnelDeficitExpected: 12,
        active: false
      },
      {
        id: 'SCENARIO-SUPPLY-SHOCK',
        name: 'Active Pharmaceutical Ingredient (API) Import Bottleneck',
        type: 'SUPPLY_SHOCK',
        severity: 'Moderate',
        affectedRegion: 'National Logistics Network (15 States)',
        durationWeeks: 6,
        patientSurgeExpected: 10,
        medicineDemandExpected: 40,
        bedDemandExpected: 15,
        personnelDeficitExpected: 5,
        active: false
      }
    ];
  }

  // Calculate high-level National Resilience Score
  public getNationalResilienceScore() {
    // Supply Chain (88), Facilities (81), Personnel (79), Emergency (91), Logistics (85)
    // Dynamic modifiers if emergency is active
    const penalty = this.activeEmergency ? 14.5 : 0;
    const supplyChain = Math.max(40, 88 - penalty * 1.2);
    const facilities = Math.max(40, 81 - penalty * 0.9);
    const personnel = Math.max(45, 79 - penalty * 0.8);
    const emergency = Math.max(50, 91 - penalty * 0.5);
    const logistics = Math.max(45, 85 - penalty * 1.1);

    const overall = Number(((supplyChain + facilities + personnel + emergency + logistics) / 5).toFixed(1));

    return {
      score: overall,
      target: 95.0,
      breakdown: {
        supplyChain: Math.round(supplyChain),
        facilities: Math.round(facilities),
        personnel: Math.round(personnel),
        emergency: Math.round(emergency),
        logistics: Math.round(logistics)
      },
      status: overall >= 80 ? 'RESILIENT' : overall >= 65 ? 'VULNERABLE' : 'CRITICAL_RISK',
      activeAlertsCount: this.alerts.filter(a => !a.resolved).length,
      criticalStockOutFacilitiesCount: this.stockOutPredictions.filter(p => p.riskLevel === 'Critical').length,
      totalFacilitiesCount: 650, // 500 PHCs + 100 CHCs + 50 DH
      bedsAvailableCount: 4280,
      totalBedsCount: 16800,
      personnelAttendanceRate: 88.4,
      patientsTodayCount: 108420
    };
  }

  // Find Nearest Available Resource (ICU, Oxygen, Ventilator)
  public findNearestResource(lat: number, lng: number, requirement: 'ICU' | 'OXYGEN' | 'VENTILATOR' | 'GENERAL_BED') {
    const candidates = this.facilities.filter(f => {
      if (requirement === 'ICU') return f.availableIcuBeds > 0;
      if (requirement === 'OXYGEN') return f.oxygenAvailable > 80;
      if (requirement === 'VENTILATOR') return f.ventilators > 0;
      return (f.totalBeds - f.occupiedBeds) > 0;
    });

    return candidates.map(facility => {
      // Euclidean approximate distance in km
      const dLat = (facility.lat - lat) * 111;
      const dLng = (facility.lng - lng) * 111 * Math.cos((lat * Math.PI) / 180);
      const distanceKm = Number(Math.sqrt(dLat * dLat + dLng * dLng).toFixed(1));
      const transferTimeMins = Math.round((distanceKm / 45) * 60 + 10);

      return {
        facilityId: facility.id,
        facilityName: facility.name,
        facilityType: facility.type,
        district: facility.district,
        state: facility.state,
        distanceKm,
        estimatedTransferTimeMins: transferTimeMins,
        availableIcuBeds: facility.availableIcuBeds,
        totalIcuBeds: facility.icuBeds,
        oxygenAvailability: facility.oxygenAvailable,
        ventilators: facility.ventilators,
        availableGeneralBeds: Math.max(0, facility.totalBeds - facility.occupiedBeds),
        currentPatientLoad: facility.patientFootfallToday,
        contactPerson: facility.contactPerson,
        phone: facility.phone
      };
    }).sort((a, b) => a.distanceKm - b.distanceKm).slice(0, 5);
  }

  // Digital Twin / What-if Simulation
  public runWhatIfSimulation(params: {
    patientDemandDeltaPct: number;
    medicineConsumptionDeltaPct: number;
    deliveryDelayDays: number;
    staffAvailabilityDeltaPct: number;
    bedAvailabilityDeltaPct: number;
  }) {
    const baseStockOutRisk = 18;
    const baseBedUtil = 74;
    const baseResilience = 84.7;

    const newStockOutRisk = Math.min(95, Math.max(5, Math.round(
      baseStockOutRisk + 
      params.patientDemandDeltaPct * 0.4 + 
      params.medicineConsumptionDeltaPct * 0.5 + 
      params.deliveryDelayDays * 4.5
    )));

    const newBedUtil = Math.min(100, Math.max(20, Math.round(
      baseBedUtil + 
      params.patientDemandDeltaPct * 0.55 - 
      params.bedAvailabilityDeltaPct * 0.3
    )));

    const newResilience = Math.max(35, Math.min(98, Number((
      baseResilience - 
      (newStockOutRisk - baseStockOutRisk) * 0.35 - 
      (newBedUtil - baseBedUtil) * 0.25 + 
      params.staffAvailabilityDeltaPct * 0.2
    ).toFixed(1))));

    const mitigations = [
      {
        action: 'Redistribute Medicines from Surplus Depots',
        impact: `Mitigates ${Math.round(newStockOutRisk * 0.65)}% of predicted stock-outs`,
        detail: 'Trigger automatic dispatch of 48,000 units Paracetamol, 12,000 ORS sachets from Hyderabad & Mumbai regional warehouses.'
      },
      {
        action: 'Activate 4 Backup Regional Distribution Hubs',
        impact: 'Reduces transit lead time by 3.2 days',
        detail: 'Route secondary orders through decentralized district buffer depots to absorb transport bottlenecks.'
      },
      {
        action: 'Deploy Floating Medical Officers & Nurses',
        impact: `Compensates for ${Math.abs(params.staffAvailabilityDeltaPct || 15)}% personnel deficit`,
        detail: 'Mobilize 24 reserve medical corps and activate rural Tele-Triage network.'
      },
      {
        action: 'Dynamic Bed Allocation & Field Hospital Expansion',
        impact: `Expands acute capacity by +${Math.round(newBedUtil * 0.18)} beds`,
        detail: 'Convert CHC step-down units into oxygen-equipped wards.'
      }
    ];

    return {
      inputs: params,
      predictedOutcomes: {
        stockOutRisk: { baseline: baseStockOutRisk, predicted: newStockOutRisk, delta: newStockOutRisk - baseStockOutRisk },
        bedUtilisation: { baseline: baseBedUtil, predicted: newBedUtil, delta: newBedUtil - baseBedUtil },
        resilienceScore: { baseline: baseResilience, predicted: newResilience, delta: Number((newResilience - baseResilience).toFixed(1)) },
      },
      status: newResilience < 65 ? 'CRITICAL_STRESS' : newResilience < 78 ? 'MODERATE_STRESS' : 'STABLE',
      recommendedMitigations: mitigations
    };
  }

  // Emergency Scenario Simulation Trigger
  public activateEmergencyScenario(scenarioId: string) {
    const scenario = this.emergencyScenarios.find(s => s.id === scenarioId);
    if (!scenario) return null;

    this.emergencyScenarios.forEach(s => s.active = (s.id === scenarioId));
    this.activeEmergency = scenario;

    // Create high-severity emergency alert
    const emgAlert: HealthAlert = {
      id: `ALT-EMG-${Date.now().toString().slice(-4)}`,
      category: 'Emergency',
      severity: 'CRITICAL',
      title: `EMERGENCY ACTIVATED: ${scenario.name} (${scenario.severity.toUpperCase()} SEVERITY)`,
      whatHappened: `Emergency Command Mode triggered for ${scenario.affectedRegion}. Projected surge: +${scenario.patientSurgeExpected}% patients, +${scenario.medicineDemandExpected}% medicine demand, +${scenario.bedDemandExpected}% bed utilization over ${scenario.durationWeeks} weeks.`,
      whyItMatters: 'Requires immediate multi-district supply chain reallocation, deployment of green corridors, and surge bed commissioning.',
      affectedFacilities: ['All facilities in target region', 'Secondary step-down hospitals', 'Central warehouses'],
      affectedPatientsEst: 65000,
      recommendedAction: 'Execute emergency cross-district redistribution, reserve buffer stock mobilization, and activate 24/7 incident command.',
      confidenceScore: 97,
      timestamp: 'Just now',
      resolved: false
    };

    this.alerts.unshift(emgAlert);

    return {
      activeEmergency: this.activeEmergency,
      simulatedImpact: {
        patientSurgeExpected: `+${scenario.patientSurgeExpected}%`,
        medicineDemandExpected: `+${scenario.medicineDemandExpected}%`,
        bedDemandExpected: `+${scenario.bedDemandExpected}%`,
        personnelDeficitExpected: `+${scenario.personnelDeficitExpected}%`,
        priorityFacilitiesToReinforce: [
          'Nagarkurnool Rural Cluster (PHC-042, 043)',
          'Pune District Hospital & CHCs',
          'Rangareddy PHC-112 Rapid Surge Node',
          'Barabanki Oxygen Critical Center'
        ],
        immediateActionsTriggered: [
          'Inter-district medicine green corridors cleared for transport vehicles',
          'Warehouse safety buffer unlocked (25% contingency stock released)',
          'Staff shift rotation transitioned to emergency 12-hour disaster cycle',
          'Tele-ICU connection initiated across all rural step-down facilities'
        ]
      }
    };
  }

  public deactivateEmergency() {
    this.emergencyScenarios.forEach(s => s.active = false);
    this.activeEmergency = null;
    return { active: false };
  }

  // Step Federated Learning Round
  public advanceFederatedRound() {
    if (this.federatedState.currentRound >= this.federatedState.maxRounds) {
      this.federatedState.currentRound = 1;
    } else {
      this.federatedState.currentRound += 1;
    }

    const round = this.federatedState.currentRound;
    const accuracyMap = [74.2, 83.1, 89.5, 93.4, 95.2];
    this.federatedState.globalAccuracy = accuracyMap[round - 1] || 94.0;

    // Jitter node contributions slightly
    this.federatedNodes.forEach(node => {
      node.localAccuracy = Number((Math.min(96.5, node.localAccuracy + (Math.random() * 1.2 - 0.2))).toFixed(1));
      node.roundLoss = Number((Math.max(0.08, node.roundLoss * 0.92)).toFixed(3));
      node.status = 'SYNCED';
    });

    return {
      round: this.federatedState.currentRound,
      globalAccuracy: this.federatedState.globalAccuracy,
      differentialPrivacyEpsilon: this.federatedState.differentialPrivacyBudgetEpsilon,
      nodes: this.federatedNodes
    };
  }
}

export const db = new HealthGridDatabase();
