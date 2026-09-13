import { Router, Request, Response } from 'express';
import { db } from './db.js';
import { GoogleGenAI } from '@google/genai';

const router = Router();

// Lazy Gemini client helper
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  if (!geminiClient) {
    geminiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return geminiClient;
}

// 1. Health check
router.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'HEALTHGRID_AI_ONLINE',
    version: '2.4.0-BRICS-RESILIENCE',
    timestamp: new Date().toISOString(),
    track: 'Track 3 — Smart Health & Supply Chain Resilience',
    theme: 'BRICS Resilience',
    facilitiesMonitored: db.facilities.length,
    activeAlerts: db.alerts.filter(a => !a.resolved).length
  });
});

// 2. National resilience summary and KPIs
router.get('/summary', (req: Request, res: Response) => {
  const summary = db.getNationalResilienceScore();
  res.json(summary);
});

// 3. Facilities endpoint with filter queries
router.get('/facilities', (req: Request, res: Response) => {
  const { state, district, type, status, risk } = req.query;
  let list = db.facilities;

  if (state && typeof state === 'string') {
    list = list.filter(f => f.state.toLowerCase() === state.toLowerCase());
  }
  if (district && typeof district === 'string') {
    list = list.filter(f => f.district.toLowerCase() === district.toLowerCase());
  }
  if (type && typeof type === 'string') {
    list = list.filter(f => f.type.toLowerCase() === type.toLowerCase());
  }
  if (status && typeof status === 'string') {
    list = list.filter(f => f.status.toLowerCase() === status.toLowerCase());
  }

  res.json({
    total: list.length,
    facilities: list
  });
});

// 4. District summaries
router.get('/districts', (req: Request, res: Response) => {
  res.json(db.districtSummaries);
});

// District specific health intelligence panel
router.get('/districts/:name', (req: Request, res: Response) => {
  const distName = req.params.name;
  const summary = db.districtSummaries.find(d => d.district.toLowerCase() === distName.toLowerCase());
  if (!summary) {
    return res.status(404).json({ error: 'District not found' });
  }

  const facilities = db.facilities.filter(f => f.district.toLowerCase() === distName.toLowerCase());
  const predictions = db.stockOutPredictions.filter(p => p.district.toLowerCase() === distName.toLowerCase());
  const redists = db.redistributionPlans.filter(r => 
    r.sourceDistrict.toLowerCase() === distName.toLowerCase() || 
    r.destinationDistrict.toLowerCase() === distName.toLowerCase()
  );

  res.json({
    summary,
    facilitiesCount: facilities.length,
    facilities,
    predictions,
    activeRedistributions: redists
  });
});

// 5. Medicine inventory
router.get('/inventory', (req: Request, res: Response) => {
  const { category, status, facilityId, query } = req.query;
  let items = db.medicines;

  if (category && typeof category === 'string') {
    items = items.filter(m => m.category.toLowerCase().includes(category.toLowerCase()));
  }
  if (status && typeof status === 'string') {
    items = items.filter(m => m.status.toLowerCase() === status.toLowerCase());
  }
  if (facilityId && typeof facilityId === 'string') {
    items = items.filter(m => m.facilityId.toLowerCase() === facilityId.toLowerCase());
  }
  if (query && typeof query === 'string') {
    const q = query.toLowerCase();
    items = items.filter(m => m.name.toLowerCase().includes(q) || m.batchNumber.toLowerCase().includes(q) || m.facilityName.toLowerCase().includes(q));
  }

  res.json({
    total: items.length,
    medicines: items
  });
});

// 6. AI Stock-out forecasts
router.get('/forecasts', (req: Request, res: Response) => {
  res.json({
    total: db.stockOutPredictions.length,
    predictions: db.stockOutPredictions
  });
});

// 7. Cross-district resource redistribution
router.get('/redistribution', (req: Request, res: Response) => {
  res.json({
    total: db.redistributionPlans.length,
    plans: db.redistributionPlans
  });
});

// Approve redistribution plan
router.post('/redistribution/:id/approve', (req: Request, res: Response) => {
  const plan = db.redistributionPlans.find(p => p.id === req.params.id);
  if (!plan) {
    return res.status(404).json({ error: 'Plan not found' });
  }

  plan.status = 'APPROVED';
  plan.timeline.forEach(t => {
    if (t.step.includes('State Administrator Approval')) {
      t.timestamp = 'Approved by Officer just now';
      t.done = true;
    }
  });

  res.json({ success: true, plan });
});

// Advance redistribution plan status (for interactive simulation)
router.post('/redistribution/:id/advance', (req: Request, res: Response) => {
  const plan = db.redistributionPlans.find(p => p.id === req.params.id);
  if (!plan) {
    return res.status(404).json({ error: 'Plan not found' });
  }

  if (plan.status === 'PENDING_APPROVAL') {
    plan.status = 'APPROVED';
    if (plan.timeline[3]) plan.timeline[3].done = true;
  } else if (plan.status === 'APPROVED') {
    plan.status = 'DISPATCHED';
    if (plan.timeline[4]) plan.timeline[4].done = true;
  } else if (plan.status === 'DISPATCHED') {
    plan.status = 'IN_TRANSIT';
    if (plan.timeline[5]) plan.timeline[5].done = true;
  } else if (plan.status === 'IN_TRANSIT') {
    plan.status = 'DELIVERED';
    if (plan.timeline[6]) plan.timeline[6].done = true;
    else if (plan.timeline.length > 0) plan.timeline[plan.timeline.length - 1].done = true;
  }

  res.json({ success: true, plan });
});

// 8. Alerts
router.get('/alerts', (req: Request, res: Response) => {
  const { category, severity } = req.query;
  let items = db.alerts;

  if (category && typeof category === 'string') {
    items = items.filter(a => a.category.toLowerCase() === category.toLowerCase());
  }
  if (severity && typeof severity === 'string') {
    items = items.filter(a => a.severity.toLowerCase() === severity.toLowerCase());
  }

  res.json({
    total: items.length,
    alerts: items
  });
});

// Resolve alert
router.post('/alerts/:id/resolve', (req: Request, res: Response) => {
  const alert = db.alerts.find(a => a.id === req.params.id);
  if (!alert) return res.status(404).json({ error: 'Alert not found' });
  alert.resolved = true;
  res.json({ success: true, alert });
});

// 9. Emergency Response & Simulation
router.get('/emergency', (req: Request, res: Response) => {
  res.json({
    activeEmergency: db.activeEmergency,
    scenarios: db.emergencyScenarios
  });
});

router.post('/emergency/simulate', (req: Request, res: Response) => {
  const { scenarioId } = req.body;
  const result = db.activateEmergencyScenario(scenarioId || 'SCENARIO-OUTBREAK');
  if (!result) return res.status(400).json({ error: 'Invalid scenario ID' });
  res.json(result);
});

router.post('/emergency/deactivate', (req: Request, res: Response) => {
  const result = db.deactivateEmergency();
  res.json(result);
});

// 10. Federated AI Lab
router.get('/federated', (req: Request, res: Response) => {
  res.json({
    ...db.federatedState,
    nodes: db.federatedNodes
  });
});

router.post('/federated/step-round', (req: Request, res: Response) => {
  const result = db.advanceFederatedRound();
  res.json(result);
});

// 11. Digital Twin / What-If Simulation
router.post('/what-if', (req: Request, res: Response) => {
  const {
    patientDemandDeltaPct = 30,
    medicineConsumptionDeltaPct = 25,
    deliveryDelayDays = 4,
    staffAvailabilityDeltaPct = -15,
    bedAvailabilityDeltaPct = 0
  } = req.body;

  const result = db.runWhatIfSimulation({
    patientDemandDeltaPct: Number(patientDemandDeltaPct),
    medicineConsumptionDeltaPct: Number(medicineConsumptionDeltaPct),
    deliveryDelayDays: Number(deliveryDelayDays),
    staffAvailabilityDeltaPct: Number(staffAvailabilityDeltaPct),
    bedAvailabilityDeltaPct: Number(bedAvailabilityDeltaPct)
  });

  res.json(result);
});

// 12. Find Nearest Available Resource (ICU, Oxygen, Ventilator, Bed)
router.post('/resources/nearest', (req: Request, res: Response) => {
  const { lat, lng, requirement } = req.body;
  const result = db.findNearestResource(
    Number(lat) || 16.4856,
    Number(lng) || 78.3312,
    requirement || 'ICU'
  );
  res.json({ results: result });
});

// 13. Offline-First Sync Endpoint for Remote PHCs
router.post('/offline-sync', (req: Request, res: Response) => {
  const { actions } = req.body;
  if (!Array.isArray(actions)) {
    return res.status(400).json({ error: 'Actions array expected' });
  }

  const processed: string[] = [];
  actions.forEach(action => {
    // Apply updates to in-memory state
    if (action.type === 'INVENTORY_UPDATE' && action.payload?.medicineId) {
      const med = db.medicines.find(m => m.id === action.payload.medicineId);
      if (med) {
        med.currentStock = Number(action.payload.newStock);
        med.daysRemaining = Number((med.currentStock / (med.dailyConsumption || 1)).toFixed(1));
        if (med.daysRemaining < 7) med.status = 'CRITICAL';
        else if (med.daysRemaining <= 14) med.status = 'LOW';
        else med.status = 'NORMAL';
      }
    } else if (action.type === 'PATIENT_COUNT' && action.facilityId) {
      const fac = db.facilities.find(f => f.id === action.facilityId);
      if (fac && action.payload?.count) {
        fac.patientFootfallToday += Number(action.payload.count);
      }
    } else if (action.type === 'BED_STATUS' && action.facilityId) {
      const fac = db.facilities.find(f => f.id === action.facilityId);
      if (fac && action.payload?.occupiedBeds !== undefined) {
        fac.occupiedBeds = Number(action.payload.occupiedBeds);
        fac.status = fac.occupiedBeds / fac.totalBeds > 0.9 ? 'CRITICAL' : 'HEALTHY';
      }
    }
    processed.push(action.id);
  });

  res.json({
    success: true,
    syncedCount: processed.length,
    syncedIds: processed,
    serverTimestamp: new Date().toISOString()
  });
});

// 14. Pre-seeded Demo Scenarios for Instant Judging
router.post('/scenarios/:id', (req: Request, res: Response) => {
  const scenarioId = req.params.id;
  // Reset database or set specific scenario states
  if (scenarioId === '1') {
    // Medicine shortage in multiple PHCs
    const pred = db.stockOutPredictions[0];
    res.json({
      scenarioName: 'Scenario 1: Medicine Shortage in Multiple PHCs',
      description: 'Acute depletion of Paracetamol and Amoxicillin across 14 rural PHCs.',
      focusPrediction: pred,
      actionPrompt: 'Open Stock-Out Prediction tab to see explainability and recommended transfers.'
    });
  } else if (scenarioId === '2') {
    // Sudden patient surge
    const alt = db.alerts.find(a => a.id === 'ALT-103');
    res.json({
      scenarioName: 'Scenario 2: Sudden Patient Surge',
      description: 'PHC-112 patient intake is 43% above baseline due to sudden acute waterborne illnesses.',
      focusAlert: alt,
      actionPrompt: 'Triggered buffer medicine increase of 18% and deployed visiting medical corps.'
    });
  } else if (scenarioId === '3') {
    // Regional disease outbreak
    const result = db.activateEmergencyScenario('SCENARIO-OUTBREAK');
    res.json({
      scenarioName: 'Scenario 3: Regional Disease Outbreak',
      description: 'Dengue and viral outbreak activated across 8 districts.',
      result,
      actionPrompt: 'Emergency Command Mode engaged with multi-district resource allocation.'
    });
  } else if (scenarioId === '4') {
    // Warehouse delivery delay
    const alt = db.alerts.find(a => a.id === 'ALT-106');
    res.json({
      scenarioName: 'Scenario 4: Warehouse Delivery Delay',
      description: 'Logistics bottleneck delaying deliveries to 6 PHCs by 18 hours.',
      focusAlert: alt,
      actionPrompt: 'Bypass corridor NH-27 activated with emergency buffer cache released.'
    });
  } else if (scenarioId === '5') {
    // Cross-district redistribution opportunity
    const plan = db.redistributionPlans[0];
    res.json({
      scenarioName: 'Scenario 5: Cross-District Redistribution Opportunity',
      description: 'Surplus ORS detected in Hyderabad (8,500 units) to resolve 3,200 deficit in Nagarkurnool.',
      focusPlan: plan,
      actionPrompt: 'Click Approve Transfer to launch GPS-tracked logistics corridor.'
    });
  } else {
    res.status(404).json({ error: 'Scenario not found' });
  }
});

// 15. AI Copilot ("Ask HealthGrid AI") with structured responses
router.post('/copilot', async (req: Request, res: Response) => {
  const { query } = req.body;
  const q = (query || '').toLowerCase().trim();

  // Deterministic domain knowledge base mapping
  let summary = '';
  let evidence: string[] = [];
  let affectedFacilities: string[] = [];
  let recommendedActions: string[] = [];

  if (q.includes('stock-out') || q.includes('shortage') || q.includes('how many facilities')) {
    summary = `Currently, 18 health facilities are exhibiting critical or high stock-out vulnerabilities within the next 7 days, primarily in Paracetamol 500mg, Amoxicillin 500mg, and ORS.`;
    evidence = [
      'PHC-042 (Nagarkurnool) Paracetamol inventory is at 380 units with 79 daily consumption (4.8 days left)',
      '14 PHC facilities in Maharashtra cluster show Amoxicillin depletion in 6.1 days',
      'Average supplier lead time across rural corridors is 6 days, exceeding safety buffer'
    ];
    affectedFacilities = ['PHC-042 (Nagarkurnool)', 'PHC-078 (Pune CHC 1)', 'PHC-112 (Rangareddy)', 'PHC-043 (Nagarkurnool)'];
    recommendedActions = [
      'Approve cross-district transfer of 2,400 units Paracetamol from Hyderabad DW-08',
      'Authorize 42,000 units Amoxicillin transfer from Mumbai State Medical Depot',
      'Trigger safety threshold override for direct depot collection'
    ];
  } else if (q.includes('excess') || q.includes('surplus') || q.includes('which districts have')) {
    summary = `Hyderabad Central Medical Warehouse (DW-08) and Mumbai State Medical Depot currently hold significant distributable surpluses exceeding 60-day regional buffers.`;
    evidence = [
      'Hyderabad DW-08 has 8,500 units of ORS surplus and 24,000 units Paracetamol surplus',
      'Mumbai State Medical Depot has 85,000 units Amoxicillin 500mg surplus',
      'Lucknow Central Gas Terminal holds 420 surplus medical oxygen cylinders'
    ];
    affectedFacilities = ['Hyderabad Central Medical Warehouse (DW-08)', 'Mumbai State Medical Depot', 'Lucknow Central Gas Terminal'];
    recommendedActions = [
      'Route 3,200 units ORS from Hyderabad to Nagarkurnool rural centers',
      'Dispatch 42,000 Amoxicillin units from Mumbai to Pune cluster via Expressway corridor'
    ];
  } else if (q.includes('30%') || q.includes('increase') || q.includes('what will happen')) {
    summary = `A 30% increase in patient demand would elevate the National Critical Stock-Out Risk from 18% to 47%, push Bed Utilisation from 74% to 91%, and reduce overall Health Resilience Score from 84.7 to 69.2.`;
    evidence = [
      'Daily medicine burn rate would jump by 38.5% across primary fever and acute illness categories',
      'ICU bed buffer would become exhausted in 12 districts within 48 hours',
      'Logistics delivery delays would compound local deficits by 3.8 days'
    ];
    affectedFacilities = ['All 500 PHCs in 15 target states', '50 District Hospital ICUs'];
    recommendedActions = [
      'Pre-emptively unlock 25% warehouse emergency buffer caches',
      'Deploy 18 reserve medical officers and nurses to frontline CHC wards',
      'Activate 4 secondary distribution hubs to shorten dispatch radius'
    ];
  } else if (q.includes('first') || q.includes('priority') || q.includes('receive medicine')) {
    summary = `Nagarkurnool District (PHC-042 and PHC-043) must receive medicine first due to an imminent zero-stock date in 3.2 days under an ongoing seasonal outbreak.`;
    evidence = [
      'Depletion date: under 76 hours remaining for ORS sachets and Paracetamol',
      'Patient footfall today is 2.1x normal baseline',
      'No secondary private pharmacy alternative available within a 22 km radius'
    ];
    affectedFacilities = ['Nagarkurnool Rural PHC 2 (PHC-042)', 'Nagarkurnool Rural PHC 3 (PHC-043)'];
    recommendedActions = [
      'Fast-track approval for Transfer Order REDIST-001 (TS-09-UB-4421)',
      'Notify District Health Officer Dr. K. Sharma of ETA: 3.5 hours'
    ];
  } else if (q.includes('bed') || q.includes('icu') || q.includes('oxygen')) {
    summary = `Guntur District Hospital and Barabanki District Hospital have crossed the 88% bed occupancy threshold, with Guntur ICU beds down to 2 available units.`;
    evidence = [
      'Guntur District Hospital ICU occupancy: 94.1% (32/34 beds occupied)',
      'Barabanki oxygen cylinder consumption rate increased to 45 cylinders/day',
      'Neighboring Krishna District Hospital has 14 free ICU beds within 28 km'
    ];
    affectedFacilities = ['Guntur District Hospital', 'Barabanki District Hospital'];
    recommendedActions = [
      'Direct acute incoming transfers to Krishna District Hospital via E-Referral portal',
      'Complete oxygen cylinder delivery REDIST-004 from Lucknow terminal'
    ];
  } else if (q.includes('top 5 risks') || q.includes('next 7 days') || q.includes('risks')) {
    summary = `The top 5 public health supply chain risks for the upcoming 7 days are identified across antibiotic depletion, rural heatwave dehydration, pediatric respiratory surge, ICU bed exhaustion, and transit road bottlenecks.`;
    evidence = [
      'Risk 1: Amoxicillin stock-out in 14 Maharashtra PHCs within 6.2 days',
      'Risk 2: ORS exhaustion in Nagarkurnool in 3.2 days due to 42C heatwave',
      'Risk 3: PHC-112 patient footfall 43% above baseline overloading nursing staff',
      'Risk 4: Guntur District ICU occupancy exceeding 92%',
      'Risk 5: State Highway 44 monsoon landslide slowing transit to Kamrup PHCs'
    ];
    affectedFacilities = ['Pune CHC Block 1', 'PHC-042 Nagarkurnool', 'PHC-112 Rangareddy', 'Guntur District Hospital', 'Kamrup PHC Sector 2'];
    recommendedActions = [
      'Execute automated cross-district transfer recommendations in sequence',
      'Activate 24/7 Tele-Consultation link for Belagavi and Kamrup clusters',
      'Maintain continuous GPS telemetry on all active refrigerated dispatch vehicles'
    ];
  } else {
    // If Gemini client is available, call it to provide an intelligent structured synthesis
    const client = getGeminiClient();
    if (client && process.env.GEMINI_API_KEY) {
      try {
        const prompt = `You are the lead AI advisor for HEALTHGRID AI, an advanced national health resource intelligence and supply-chain resilience platform.
The user asked: "${query}".
The current platform has 650 facilities, 84.7 National Resilience Score, 18 facilities at stock-out risk, Paracetamol depletion in 4.8 days at PHC-042, Amoxicillin depletion in 6.2 days in Pune, ORS shortage in Nagarkurnool vs 8,500 surplus in Hyderabad.
Respond with JSON matching this schema:
{
  "summary": "Concise high-level insight answering the query directly",
  "evidence": ["Evidence point 1", "Evidence point 2", "Evidence point 3"],
  "affectedFacilities": ["Facility 1", "Facility 2"],
  "recommendedActions": ["Action 1", "Action 2"]
}`;

        const aiResponse = await client.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json'
          }
        });

        const parsed = JSON.parse(aiResponse.text || '{}');
        if (parsed.summary) {
          return res.json({
            summary: parsed.summary,
            evidence: parsed.evidence || [],
            affectedFacilities: parsed.affectedFacilities || [],
            recommendedActions: parsed.recommendedActions || [],
            timestamp: new Date().toLocaleTimeString(),
            sourceConfidence: 95
          });
        }
      } catch (err) {
        console.error('Gemini copilot fallback to rule engine:', err);
      }
    }

    // Default fallback structured answer
    summary = `HealthGrid AI synthesis for: "${query}". Operating across 650 health facilities, all indicators are evaluated against the National Resilience Index.`;
    evidence = [
      'National Resilience Score is currently 84.7/100 (Resilient)',
      '18 facilities have medicine buffers below 7 days consumption',
      'Federated AI convergence accuracy is 93.4% across BRICS regional learning nodes'
    ];
    affectedFacilities = ['Nagarkurnool PHC-042', 'Pune CHC Block 1', 'Hyderabad DW-08', 'Guntur District Hospital'];
    recommendedActions = [
      'Review pending cross-district redistribution plans in Command Center',
      'Monitor real-time patient surge alerts in early warning system'
    ];
  }

  res.json({
    summary,
    evidence,
    affectedFacilities,
    recommendedActions,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    sourceConfidence: 94
  });
});

export default router;
