import React from 'react';
import { 
  Layers, 
  Server, 
  ShieldCheck, 
  Database, 
  Lock, 
  Globe2, 
  Cpu, 
  Wifi, 
  Truck, 
  Key,
  CheckCircle2
} from 'lucide-react';

export const ArchitectureViewer: React.FC = () => {
  const architecturalTiers = [
    {
      tier: 'Tier 1: Edge Health Tier (PHCs & CHCs)',
      color: 'border-sky-500 text-sky-400',
      icon: Cpu,
      summary: 'Runs inside rural primary and community health centres on basic web browsers and mobile tablets.',
      specs: [
        'Offline-First Capability: Local IndexedDB database records daily footfall, beds, and medicine counts with zero internet',
        'Minimal Bandwidth Envelope: Compressed JSON sync updates (<2 KB per transmission)',
        'Local Edge Machine Learning: Local neural weights trained on-device without exposing raw patient identity'
      ]
    },
    {
      tier: 'Tier 2: District Optimization Hub Tier',
      color: 'border-emerald-500 text-emerald-400',
      icon: Database,
      summary: 'Coordinates multi-facility resource balancing and local warehouse inventory across 50 districts.',
      specs: [
        'Automated Surplus/Deficit Matching: Scans facilities within 150 km radius to solve shortages locally',
        'Lead-Time Buffer Engine: Continuously monitors distributor transit timelines to prevent stock ruptures',
        'Rapid E-Referral Network: Redirects critical ICU and oxygen patients to nearest available certified beds'
      ]
    },
    {
      tier: 'Tier 3: State & National Command Tier',
      color: 'border-purple-500 text-purple-400',
      icon: Server,
      summary: 'Central HealthGrid AI command node providing macroscopic visibility for health secretaries.',
      specs: [
        'Autonomous Stock-Out Prediction: 7 to 30 day predictive horizon based on seasonal epidemiology',
        'Emergency Green Corridor Routing: Fast-tracks interstate transfer orders with GPS telemetry and toll waivers',
        'Dynamic National Resilience Index: Live 5-factor composite score tracking public healthcare stability'
      ]
    },
    {
      tier: 'Tier 4: BRICS Federated Intelligence Coalition',
      color: 'border-amber-500 text-amber-400',
      icon: Globe2,
      summary: 'Cross-border collaborative resilience without centralizing or exporting sovereign health records.',
      specs: [
        'Federated Averaging (DP-FedAvg): Aggregates encrypted model weights across India, Brazil, Russia, China, South Africa',
        'Differential Privacy (ε = 0.85): Mathematical guarantee that no individual patient record can be reconstructed',
        'Sovereign Data Boundary: 100% compliance with national health privacy acts; zero PII export'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <Layers className="w-6 h-6 text-sky-400" />
          <h2 className="text-xl font-bold text-white tracking-tight">
            HealthGrid AI System Architecture & Privacy Engineering
          </h2>
        </div>
        <p className="text-xs text-slate-400 max-w-3xl leading-relaxed">
          Engineered as a 4-tier federated, offline-first distributed resilience platform. Eliminates single points of failure and complies with strict national data sovereignty regulations.
        </p>
      </div>

      {/* 4 Architectural Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {architecturalTiers.map((t, idx) => {
          const Icon = t.icon;
          return (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center">
                      <Icon className={`w-4 h-4 ${t.color}`} />
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      {t.tier}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {t.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {t.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-400 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Security & Zero PII Guarantee Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <h3 className="text-sm font-bold text-white tracking-tight">
            Comprehensive Privacy & Security Architecture
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-1.5">
            <span className="text-emerald-400 font-bold block">1. Zero PII Exposure</span>
            <p className="text-slate-400 leading-relaxed">
              No patient names, national IDs, or medical histories ever leave facility hardware. All transmission payloads consist purely of aggregated numeric counts and abstract model weights.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-1.5">
            <span className="text-sky-400 font-bold block">2. TLS 1.3 & mTLS Security</span>
            <p className="text-slate-400 leading-relaxed">
              End-to-end encrypted transport across all telemetry channels. Edge nodes are verified via X.509 device certificates to prevent counterfeit telemetry injection.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-1.5">
            <span className="text-purple-400 font-bold block">3. Role-Based Access Control</span>
            <p className="text-slate-400 leading-relaxed">
              Cryptographically enforced RBAC segregates PHC Operator, District Health Officer, Emergency Supply Officer, and National Command Centre authorities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
