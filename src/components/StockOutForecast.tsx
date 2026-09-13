import React, { useState } from 'react';
import { useApp } from '../context/AppContext.js';
import { StockOutPrediction } from '../types.js';
import { 
  AlertTriangle, 
  TrendingDown, 
  Calendar, 
  Users, 
  ArrowRight, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  BarChart3,
  Truck
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  ReferenceLine 
} from 'recharts';

export const StockOutForecast: React.FC = () => {
  const { predictions, setActiveTab, setSelectedDistrict } = useApp();
  const [selectedPredictionId, setSelectedPredictionId] = useState<string>(predictions[0]?.id || 'PRED-001');
  const [forecastHorizon, setForecastHorizon] = useState<'7' | '14' | '30'>('7');

  const selectedPrediction = predictions.find(p => p.id === selectedPredictionId) || predictions[0];

  // Synthetic projection curve for the selected medicine
  const projectionCurve = [
    { day: 'Day -6', stock: 850, threshold: 200, status: 'Historical' },
    { day: 'Day -4', stock: 720, threshold: 200, status: 'Historical' },
    { day: 'Day -2', stock: 540, threshold: 200, status: 'Historical' },
    { day: 'Today', stock: selectedPrediction ? selectedPrediction.currentStock : 380, threshold: 200, status: 'Current' },
    { day: 'Day +2', stock: 240, threshold: 200, status: 'AI Projected' },
    { day: 'Day +4', stock: 90, threshold: 200, status: 'AI Projected' },
    { day: 'Day +5 (Breach)', stock: 15, threshold: 200, status: 'Stock-Out' },
    { day: 'Day +7', stock: 0, threshold: 200, status: 'Depleted' },
  ];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              AI Multi-Variable Stock-Out & Consumption Forecasting Engine
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Synthesizes epidemiological seasonality, outpatient footfall velocities, and supplier lead times to predict pharmaceutical stock exhaustion 7 to 30 days before public impact.
          </p>
        </div>

        <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setForecastHorizon('7')}
            className={`px-3 py-1.5 rounded font-semibold transition-colors ${
              forecastHorizon === '7' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            7-Day Horizon
          </button>
          <button
            onClick={() => setForecastHorizon('14')}
            className={`px-3 py-1.5 rounded font-semibold transition-colors ${
              forecastHorizon === '14' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            14-Day Horizon
          </button>
          <button
            onClick={() => setForecastHorizon('30')}
            className={`px-3 py-1.5 rounded font-semibold transition-colors ${
              forecastHorizon === '30' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            30-Day Horizon
          </button>
        </div>
      </div>

      {/* Main Grid: Forecast List & Deep Explainability Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Forecast Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
            <span>High Risk Depletion Warnings ({predictions.length})</span>
            <span className="text-cyan-400">Ranked by Urgency</span>
          </div>

          <div className="space-y-3 max-h-[720px] overflow-y-auto pr-1">
            {predictions.map((pred) => {
              const isSelected = pred.id === selectedPrediction?.id;
              const isCritical = pred.riskLevel === 'Critical';

              return (
                <div
                  key={pred.id}
                  onClick={() => setSelectedPredictionId(pred.id)}
                  className={`border rounded-xl p-4 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-850 border-cyan-500 shadow-md ring-1 ring-cyan-500/50'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700 hover:bg-slate-850/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white text-sm">
                      {pred.medicineName}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase font-mono ${
                      isCritical
                        ? 'bg-rose-950 text-rose-300 border border-rose-800 animate-pulse'
                        : 'bg-amber-950 text-amber-300 border border-amber-800'
                    }`}>
                      {pred.riskLevel} • Prob: {pred.probability}%
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 font-medium mb-2">
                    {pred.facilityName} <span className="text-cyan-400">({pred.district})</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400 font-mono bg-slate-950/70 p-2.5 rounded border border-slate-800/80 mb-2.5">
                    <div>
                      <span className="block text-[10px] text-slate-500">Days to Depletion</span>
                      <strong className={`text-sm ${isCritical ? 'text-rose-400' : 'text-amber-400'}`}>
                        {pred.daysUntilStockOut} Days
                      </strong>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500">Affected Population</span>
                      <strong className="text-white text-sm">
                        {(pred.affectedPopulation).toLocaleString()} patients
                      </strong>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-300 bg-cyan-950/30 border border-cyan-800/40 rounded p-2 flex items-start gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2"><strong>AI Rec:</strong> {pred.recommendedAction}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Deep Explainability & Interactive Depletion Curve (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {selectedPrediction ? (
            <>
              {/* Depletion Curve Graph */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      Projected Depletion Curve vs Safety Threshold
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    {selectedPrediction.medicineName} @ {selectedPrediction.facilityName}
                  </span>
                </div>

                <div className="h-60 w-full pt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={projectionCurve} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                      <XAxis dataKey="day" stroke="#64748b" tick={{ fontSize: 11 }} />
                      <YAxis stroke="#64748b" tick={{ fontSize: 11 }} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#090d16', borderColor: '#1e293b', borderRadius: '8px', fontSize: '12px', color: '#f8fafc' }}
                      />
                      <ReferenceLine y={200} label={{ value: 'Safety Threshold (200 units)', fill: '#ef4444', fontSize: 10, position: 'insideTopLeft' }} stroke="#ef4444" strokeDasharray="4 4" />
                      <Line
                        type="monotone"
                        dataKey="stock"
                        stroke="#06b6d4"
                        strokeWidth={2.5}
                        dot={{ r: 4, fill: '#06b6d4' }}
                        activeDot={{ r: 6 }}
                        name="Stock Level"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between pt-1 border-t border-slate-800/80">
                  <span className="text-rose-400 font-semibold flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Zero stock breach estimated on {selectedPrediction.predictedDate}
                  </span>
                  <span>Lead Time: 6 Days (Warehouse replenishment gap)</span>
                </div>
              </div>

              {/* Explainable AI Breakdown (WHY the AI predicted shortage) */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    Explainable AI (XAI) Attribution Breakdown
                  </h3>
                </div>

                <p className="text-xs text-slate-300">
                  Government administrators require explainability before approving cross-district logistics. The AI identifies 5 primary weighted contributors:
                </p>

                <div className="space-y-2.5">
                  {selectedPrediction.explainabilityFactors.map((factor, idx) => (
                    <div key={idx} className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">{factor.factor}</span>
                        <span className={`font-mono font-bold ${
                          factor.impact === 'CRITICAL' ? 'text-rose-400' : factor.impact === 'HIGH' ? 'text-amber-400' : 'text-cyan-400'
                        }`}>
                          {factor.percentage} Weight ({factor.impact})
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            factor.impact === 'CRITICAL' ? 'bg-rose-500' : factor.impact === 'HIGH' ? 'bg-amber-500' : 'bg-cyan-500'
                          }`}
                          style={{ width: factor.percentage.replace('+', '').replace('-', '') }}
                        />
                      </div>
                      <p className="text-[11px] text-slate-400">
                        {factor.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Direct Action Trigger: Launch Cross-District Redistribution */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedDistrict(selectedPrediction.district);
                      setActiveTab('redistribution');
                    }}
                    className="flex-1 py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <Truck className="w-4 h-4" />
                    <span>Auto-Match Surplus & Generate Redistribution Order →</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center text-slate-500 text-xs">
              Select a stock-out forecast card to view the predictive depletion curve and AI explainability.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
