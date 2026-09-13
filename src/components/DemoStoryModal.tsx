import React from 'react';
import { useApp } from '../context/AppContext.js';
import { 
  ChevronRight, 
  ChevronLeft, 
  X, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  AlertOctagon, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  Truck
} from 'lucide-react';

export const DemoStoryModal: React.FC = () => {
  const {
    demoStoryStep,
    nextDemoStoryStep,
    prevDemoStoryStep,
    closeDemoStory,
    setActiveTab,
    approveRedistribution,
    activateEmergency,
    predictions,
    redistributions,
    resilienceScore
  } = useApp();

  if (demoStoryStep === null) return null;

  const stepsData = [
    {
      step: 1,
      title: 'STEP 1: Open National Command Centre',
      category: 'National Visibility',
      description: 'National overview monitoring 650 facilities (500 PHCs, 100 CHCs, 50 District Hospitals) and 25 essential medicines across 15 states.',
      highlight: 'Notice the top-level real-time KPI matrix and the live India facility map with clustering.',
      actionLabel: 'Proceed to Resilience Score →',
      actionTab: 'overview'
    },
    {
      step: 2,
      title: 'STEP 2: Examine Health Resilience Score',
      category: 'Resilience Index',
      description: `Current National Health Resilience Score is ${resilienceScore.score} / 100. Composite index derived from Supply Chain (88), Facilities (81), Personnel (79), Emergency (91), and Logistics (85).`,
      highlight: 'HealthGrid AI computes this index dynamically to detect cross-district stress before catastrophic collapse.',
      actionLabel: 'Inspect Critical Alert →',
      actionTab: 'alerts'
    },
    {
      step: 3,
      title: 'STEP 3: Open a Critical Medicine Alert',
      category: 'Early Warning',
      description: 'AI Alert Engine detected critical vulnerabilities: "Paracetamol stock at PHC-042 projected to fall below safety threshold in 4.8 days" and "Amoxicillin stock-out predicted in 6.2 days across 14 facilities".',
      highlight: 'Alerts contain confidence scores (87% - 91%), affected population estimates (18,420 patients), and actionable mitigation recommendations.',
      actionLabel: 'View AI Stock-Out Forecast →',
      actionTab: 'forecast'
    },
    {
      step: 4,
      title: 'STEP 4: AI Stock-Out Depletion Prediction',
      category: 'Predictive Intelligence',
      description: 'The AI forecasting engine calculates Days Remaining = Current Stock / Average Daily Consumption and analyzes local seasonal surge curves.',
      highlight: 'PHC-042 (Nagarkurnool): Current stock is 380 units, daily consumption is 79/day. Zero-inventory threshold breach predicted in 4.8 days with 87% stock-out probability.',
      actionLabel: 'Inspect AI Explainability (WHY?) →',
      actionTab: 'forecast'
    },
    {
      step: 5,
      title: 'STEP 5: Explainable AI — WHY the Shortage Occurs',
      category: 'Explainable AI',
      description: 'Government trust requires transparency. HealthGrid AI breaks down the exact contributing weights:',
      breakdownFactors: [
        '1. Daily consumption increased +19% (seasonal viral fevers)',
        '2. Patient outpatient visits rose +13%',
        '3. Current local inventory dropped -24%',
        '4. Supplier central lead time is 6 days (> 4.8 days remaining)',
        '5. Safety threshold breached in 5 days'
      ],
      highlight: 'Every prediction includes explainability factors to enable accountable administrative intervention.',
      actionLabel: 'Find Surplus in Other Districts →',
      actionTab: 'redistribution'
    },
    {
      step: 6,
      title: 'STEP 6: Detect Surplus Medicine in Neighboring District',
      category: 'Cross-District Balancing',
      description: 'The optimization engine scans across 50 districts and identifies that District Hyderabad (Warehouse DW-08) holds a surplus of 8,500 units of ORS and 24,000 units of Paracetamol (coverage >60 days).',
      highlight: 'Nagarkurnool is located approximately 160 km from Hyderabad (transit time ~3.5 hours).',
      actionLabel: 'Generate Redistribution Plan →',
      actionTab: 'redistribution'
    },
    {
      step: 7,
      title: 'STEP 7: Automated Resource Redistribution Order',
      category: 'Optimization & Logistics',
      description: 'AI recommends transferring 3,200 units of ORS and 2,400 units of Paracetamol from Hyderabad Central Warehouse to Nagarkurnool Rural PHCs.',
      highlight: 'Expected Shortage Reduction: 100%. Optimization score: 94/100. Fast-track approval with GPS dispatch telemetry.',
      interactiveButton: {
        label: 'One-Click Approve Transfer Order',
        action: () => approveRedistribution('REDIST-001')
      },
      actionLabel: 'Proceed to Emergency Simulation →',
      actionTab: 'emergency'
    },
    {
      step: 8,
      title: 'STEP 8: Activate Emergency Command Mode',
      category: 'Emergency Preparedness',
      description: 'Transform the command interface during sudden crises. We simulate a "Regional Disease Outbreak" across 8 districts.',
      highlight: 'Simulates the sudden compounding effects of epidemics, floods, cyclones, or supply shocks.',
      interactiveButton: {
        label: 'Trigger Regional Outbreak Simulation',
        action: () => activateEmergency('SCENARIO-OUTBREAK')
      },
      actionLabel: 'View Surging Demand Forecasts →',
      actionTab: 'emergency'
    },
    {
      step: 9,
      title: 'STEP 9: Impact Forecast Under Crisis',
      category: 'Surge Modeling',
      description: 'Simulated Outbreak Outcome: Expected Patient Surge: +42%, Medicine Demand: +63%, Bed Demand: +38%, Staff Deficit: +18%.',
      highlight: 'The system automatically prioritizes the top 4 facilities in distress and activates pre-approved green corridors.',
      actionLabel: 'Run What-If Digital Twin Mitigation →',
      actionTab: 'digital_twin'
    },
    {
      step: 10,
      title: 'STEP 10: Run Mitigation & Digital Twin',
      category: 'Digital Twin Simulation',
      description: 'Adjust demand volatility, delivery delays, and staffing in real-time. HealthGrid AI automatically prescribes multi-lever mitigations:',
      breakdownFactors: [
        '• Unlock 25% contingency buffer stock at regional depots',
        '• Deploy 18 reserve medical corps personnel',
        '• Re-route logistics via secondary distribution hubs',
        '• Expand step-down oxygenated beds'
      ],
      highlight: 'Recovers resilience score from 69.2 back towards healthy baseline.',
      actionLabel: 'Open Federated AI Lab →',
      actionTab: 'federated'
    },
    {
      step: 11,
      title: 'STEP 11: Privacy-Preserving Federated Learning',
      category: 'BRICS Federated AI',
      description: 'Federated predictive modeling across 5 BRICS nodes (India, Brazil, Russia, China, South Africa) without centralizing raw medical records.',
      highlight: 'Only encrypted model updates / gradient weights are aggregated (DP-FedAvg, ε = 0.85). Global model accuracy hits 94.6%.',
      actionLabel: 'Review National Impact & Close Story →',
      actionTab: 'impact'
    },
    {
      step: 12,
      title: 'STEP 12: Quantified Resilience & Impact',
      category: 'Final Impact Review',
      description: 'Final Outcome: 42 stock-outs prevented, 14,200 units redistributed across districts, 18,420 patients protected from prescription deficits, 4.2 days faster emergency response.',
      closingMessage: '“HealthGrid AI does not wait for healthcare shortages to become crises. It predicts risk, coordinates resources and strengthens resilience before systems fail.”',
      highlight: 'Ready for national-scale deployment and BRICS collaborative healthcare resilience.',
      actionLabel: 'Finish Guided Demo',
      actionTab: 'impact'
    }
  ];

  const current = stepsData[demoStoryStep - 1] || stepsData[0];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-sky-500/50 rounded-xl shadow-2xl max-w-2xl w-full text-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950/80 to-slate-900 border-b border-sky-500/30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs border border-sky-400/40">
              {current.step}
            </span>
            <div>
              <span className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider font-mono">
                Judge Demo Story • {current.category}
              </span>
              <h2 className="text-base font-bold text-white tracking-tight">{current.title}</h2>
            </div>
          </div>
          <button 
            onClick={closeDemoStory}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-1.5 flex">
          {stepsData.map((s) => (
            <div
              key={s.step}
              className={`h-full flex-1 transition-all ${
                s.step <= current.step ? 'bg-sky-400' : 'bg-slate-700'
              }`}
            />
          ))}
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <p className="text-sm text-slate-200 leading-relaxed font-normal">
            {current.description}
          </p>

          {current.breakdownFactors && (
            <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-3 space-y-1.5 text-xs text-slate-300 font-mono">
              {current.breakdownFactors.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sky-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          )}

          <div className="bg-sky-950/40 border border-sky-700/40 rounded-lg p-3 text-xs text-sky-200 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-sky-300 font-semibold">Key Architectural Highlight: </strong>
              <span>{current.highlight}</span>
            </div>
          </div>

          {current.closingMessage && (
            <div className="bg-emerald-950/40 border border-emerald-700/50 rounded-lg p-4 text-xs text-emerald-200 text-center italic font-serif leading-relaxed">
              {current.closingMessage}
            </div>
          )}

          {current.interactiveButton && (
            <div className="pt-2">
              <button
                onClick={current.interactiveButton.action}
                className="w-full py-2.5 px-4 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-950 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>{current.interactiveButton.label}</span>
              </button>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-slate-800 bg-slate-950/60 px-6 py-3.5 flex items-center justify-between">
          <button
            onClick={prevDemoStoryStep}
            disabled={current.step <= 1}
            className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1 transition-colors ${
              current.step <= 1 ? 'text-slate-600 cursor-not-allowed' : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <span className="text-xs text-slate-400 font-mono">
            Step {current.step} of 12
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setActiveTab(current.actionTab);
                nextDemoStoryStep();
              }}
              className="px-4 py-1.5 rounded text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>{current.actionLabel}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
