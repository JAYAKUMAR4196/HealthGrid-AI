import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext.js';
import { 
  Cpu, 
  ShieldCheck, 
  Lock, 
  RotateCw, 
  Play, 
  Globe2, 
  Server, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Layers,
  Sparkles
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

export const FederatedAiLab: React.FC = () => {
  const [federatedData, setFederatedData] = useState<any>({
    currentRound: 4,
    maxRounds: 10,
    globalModelAccuracy: 93.4,
    epsilonPrivacy: 0.85,
    activeNodesCount: 5,
    nodes: [
      { id: 'NODE-IN-01', name: 'India (Nagarkurnool & Telangana Cluster)', country: 'India', status: 'TRAINING', localSamples: 48200, accuracy: 93.8, lastSyncTime: '3 mins ago', role: 'Telemetry Coordinator' },
      { id: 'NODE-BR-01', name: 'Brazil (Amazonas Rural Health Grid)', country: 'Brazil', status: 'AGGREGATED', localSamples: 32400, accuracy: 92.1, lastSyncTime: '6 mins ago', role: 'Tropical Vector Forecasting' },
      { id: 'NODE-RU-01', name: 'Russia (Siberian Remote Clinics)', country: 'Russia', status: 'AGGREGATED', localSamples: 28100, accuracy: 94.0, lastSyncTime: '8 mins ago', role: 'Cold Chain Logistics' },
      { id: 'NODE-CN-01', name: 'China (Yunnan Healthcare Hub)', country: 'China', status: 'AGGREGATED', localSamples: 64500, accuracy: 95.2, lastSyncTime: '2 mins ago', role: 'Central Manufacturing Lead Time' },
      { id: 'NODE-SA-01', name: 'South Africa (Limpopo Clinic Grid)', country: 'South Africa', status: 'AGGREGATED', localSamples: 24300, accuracy: 91.8, lastSyncTime: '5 mins ago', role: 'Primary Immunization Reserve' }
    ],
    roundHistory: [
      { round: 1, accuracy: 74.2, loss: 0.62 },
      { round: 2, accuracy: 81.5, loss: 0.44 },
      { round: 3, accuracy: 88.3, loss: 0.28 },
      { round: 4, accuracy: 93.4, loss: 0.16 },
    ]
  });

  const [isAdvancing, setIsAdvancing] = useState<boolean>(false);

  const fetchFederated = async () => {
    try {
      const res = await fetch('/api/federated');
      const data = await res.json();
      if (data && data.currentRound) {
        setFederatedData(data);
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    fetchFederated();
  }, []);

  const handleStepRound = async () => {
    setIsAdvancing(true);
    try {
      const res = await fetch('/api/federated/step-round', { method: 'POST' });
      const data = await res.json();
      if (data && data.state) {
        setFederatedData(data.state);
      }
    } catch {
      // Local optimistic increment
      setFederatedData((prev: any) => {
        const nextRound = prev.currentRound + 1;
        const nextAcc = Number(Math.min(98.5, prev.globalModelAccuracy + 1.2).toFixed(1));
        return {
          ...prev,
          currentRound: nextRound,
          globalModelAccuracy: nextAcc,
          roundHistory: [...prev.roundHistory, { round: nextRound, accuracy: nextAcc, loss: 0.12 }]
        };
      });
    } finally {
      setIsAdvancing(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-sky-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Federated AI Architecture & BRICS Privacy-Preserving Health Intelligence
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Decentralized machine learning: PHCs train localized stock-out forecasting models on confidential patient health records. Zero PII ever leaves the facility. Only differentially private gradient updates are aggregated.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleStepRound}
            disabled={isAdvancing || federatedData.currentRound >= federatedData.maxRounds}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-semibold text-xs flex items-center gap-2 transition-all shadow-md cursor-pointer disabled:opacity-50"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isAdvancing ? 'animate-spin' : ''}`} />
            <span>{isAdvancing ? 'Aggregating DP-FedAvg...' : `Step Federated Round (${federatedData.currentRound}/${federatedData.maxRounds})`}</span>
          </button>
        </div>
      </div>

      {/* 4 Privacy & Model Guarantees */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" /> Global Accuracy
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-950 text-sky-300 border border-sky-800">
              Round {federatedData.currentRound}
            </span>
          </div>
          <div className="text-2xl font-bold text-white font-mono">{federatedData.globalModelAccuracy}%</div>
          <p className="text-[11px] text-slate-400">Converging on multi-country supply variance</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Lock className="w-4 h-4" /> Differential Privacy
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
              ε = {federatedData.epsilonPrivacy}
            </span>
          </div>
          <div className="text-2xl font-bold text-white font-mono">Laplace Noise</div>
          <p className="text-[11px] text-slate-400">Strict mathematical privacy guarantee against reconstruction</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <Globe2 className="w-4 h-4" /> BRICS Coalition Nodes
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-950 text-purple-300 border border-purple-800">
              5 Nations
            </span>
          </div>
          <div className="text-2xl font-bold text-white font-mono">197,500 Samples</div>
          <p className="text-[11px] text-slate-400">Cross-border resilience intelligence without data export</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Zero PII Transmitted
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-800">
              Guaranteed
            </span>
          </div>
          <div className="text-2xl font-bold text-white font-mono">100% On-Device</div>
          <p className="text-[11px] text-slate-400">Committed only encrypted model tensor parameters</p>
        </div>
      </div>

      {/* Visual Architectural Flow Diagram */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-400" />
            <h3 className="text-sm font-bold text-white tracking-tight">
              Federated Intelligence Workflow: Privacy-Preserving Model Aggregation
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">Algorithm: Secure FedAvg + Local DP</span>
        </div>

        {/* Interactive Step-by-Step Flow Graphic */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
          {/* Node 1 */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 relative space-y-2">
            <div className="w-6 h-6 rounded-full bg-sky-950 text-sky-400 flex items-center justify-center font-bold text-xs border border-sky-800">
              1
            </div>
            <h4 className="text-xs font-bold text-white">Local PHC Model Training</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Every PHC/CHC trains a local LSTM neural network on daily consumption logs, disease seasonality, and footfall.
            </p>
            <div className="text-[10px] text-sky-400 font-mono pt-1">
              Raw patient records stay inside facility storage.
            </div>
          </div>

          {/* Node 2 */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 relative space-y-2">
            <div className="w-6 h-6 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-800">
              2
            </div>
            <h4 className="text-xs font-bold text-white">Noise Injection & Encryption</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Model weight deltas (ΔW) are perturbed with calibrated Gaussian/Laplace noise to provide formal Differential Privacy (ε=0.85).
            </p>
            <div className="text-[10px] text-emerald-400 font-mono pt-1">
              TLS 1.3 cryptographic transport envelope.
            </div>
          </div>

          {/* Node 3 */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 relative space-y-2">
            <div className="w-6 h-6 rounded-full bg-purple-950 text-purple-400 flex items-center justify-center font-bold text-xs border border-purple-800">
              3
            </div>
            <h4 className="text-xs font-bold text-white">Central Federated Aggregator</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Central HealthGrid coordinator computes a weighted federated average of all node gradients: <code className="text-purple-300">W_t+1 = Σ (n_k/n) * W_k</code>.
            </p>
            <div className="text-[10px] text-purple-400 font-mono pt-1">
              Blind aggregation: Zero raw data access.
            </div>
          </div>

          {/* Node 4 */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 relative space-y-2">
            <div className="w-6 h-6 rounded-full bg-blue-950 text-blue-400 flex items-center justify-center font-bold text-xs border border-blue-800">
              4
            </div>
            <h4 className="text-xs font-bold text-white">Global Dispatch Back to Nodes</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              The updated, more accurate global resilience model is synchronized back to all 650 facilities, even those offline via edge cache.
            </p>
            <div className="text-[10px] text-blue-400 font-mono pt-1">
              Accuracy boosted +19.2% over local baseline.
            </div>
          </div>
        </div>
      </div>

      {/* Global Accuracy Convergence Chart & BRICS Active Nodes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Convergence Chart (6 cols) */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white tracking-tight">
              Federated Convergence Curve (Accuracy % vs Rounds)
            </h3>
            <span className="text-xs text-sky-400 font-mono">Round {federatedData.currentRound}</span>
          </div>

          <div className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={federatedData.roundHistory} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="round" stroke="#64748b" tick={{ fontSize: 11 }} label={{ value: 'Federated Round', position: 'insideBottomRight', offset: -5, fill: '#64748b', fontSize: 10 }} />
                <YAxis domain={[65, 100]} stroke="#64748b" tick={{ fontSize: 11 }} />
                <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#1e293b', borderRadius: '8px', fontSize: '12px', color: '#f8fafc' }} />
                <Line type="monotone" dataKey="accuracy" stroke="#22d3ee" strokeWidth={3} dot={{ r: 5, fill: '#22d3ee' }} name="Model Accuracy (%)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Participating BRICS Nodes (6 cols) */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white tracking-tight">
              Participating Sovereign Federation Nodes
            </h3>
            <span className="text-xs text-slate-400 font-mono">5/5 Nodes Active</span>
          </div>

          <div className="space-y-2.5 max-h-[260px] overflow-y-auto pr-1">
            {federatedData.nodes.map((node: any) => (
              <div key={node.id} className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <strong className="text-white">{node.name}</strong>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-sky-950 text-sky-300 border border-sky-800">
                      {node.country}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block">{node.role} • {node.localSamples.toLocaleString()} samples</span>
                </div>

                <div className="text-right font-mono">
                  <span className="text-emerald-400 font-bold block">{node.accuracy}% Acc</span>
                  <span className="text-[10px] text-slate-500">{node.lastSyncTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
