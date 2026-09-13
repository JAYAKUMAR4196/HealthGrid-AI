import React, { useState } from 'react';
import { 
  FileCode2, 
  Play, 
  CheckCircle2, 
  Copy, 
  ArrowRight,
  Send,
  Sparkles
} from 'lucide-react';

export const ApiExplorer: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>('/api/summary');
  const [method, setMethod] = useState<'GET' | 'POST'>('GET');
  const [requestBody, setRequestBody] = useState<string>('{}');
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  const [responseData, setResponseData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const apiEndpoints = [
    { path: '/api/summary', method: 'GET', description: 'National Resilience Score & Core KPI Aggregation' },
    { path: '/api/facilities', method: 'GET', description: 'Query 650 facilities with filter parameters' },
    { path: '/api/districts', method: 'GET', description: 'Get aggregated district health intelligence summaries' },
    { path: '/api/inventory', method: 'GET', description: 'Query 25 essential medicines & stock depletion rates' },
    { path: '/api/forecasts', method: 'GET', description: 'AI Stock-Out Predictions & Explainability Factors' },
    { path: '/api/redistribution', method: 'GET', description: 'Cross-District Surplus Redistribution Plans' },
    { path: '/api/alerts', method: 'GET', description: 'Active Early Warning Alerts' },
    { path: '/api/emergency', method: 'GET', description: 'Active Emergency Scenario & Disaster Surge Mode' },
    { path: '/api/federated', method: 'GET', description: 'Federated Learning Rounds & Global Model Accuracy' },
    { 
      path: '/api/what-if', 
      method: 'POST', 
      description: 'Digital Twin Simulation Stress-Testing',
      defaultBody: JSON.stringify({ patientDemandDeltaPct: 30, medicineConsumptionDeltaPct: 25, deliveryDelayDays: 4, staffAvailabilityDeltaPct: -15 }, null, 2)
    },
    { 
      path: '/api/copilot', 
      method: 'POST', 
      description: 'Natural Language Query Assistant (Gemini Flash)',
      defaultBody: JSON.stringify({ query: 'Which facilities will face Paracetamol shortages in the next 7 days?' }, null, 2)
    },
    { path: '/api/health', method: 'GET', description: 'System Health & Node Status Check' },
  ];

  const handleSelectEndpoint = (ep: any) => {
    setSelectedEndpoint(ep.path);
    setMethod(ep.method as any);
    if (ep.defaultBody) {
      setRequestBody(ep.defaultBody);
    } else {
      setRequestBody('{}');
    }
  };

  const handleExecute = async () => {
    setIsLoading(true);
    setResponseData(null);
    setResponseStatus(null);

    try {
      const options: RequestInit = {
        method,
        headers: { 'Content-Type': 'application/json' }
      };

      if (method === 'POST') {
        options.body = requestBody;
      }

      const res = await fetch(selectedEndpoint, options);
      setResponseStatus(res.status);
      const data = await res.json();
      setResponseData(data);
    } catch (err: any) {
      setResponseStatus(500);
      setResponseData({ error: err.message || 'Failed to fetch' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyResponse = () => {
    if (!responseData) return;
    navigator.clipboard.writeText(JSON.stringify(responseData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <FileCode2 className="w-6 h-6 text-sky-400" />
          <h2 className="text-xl font-bold text-white tracking-tight">
            HealthGrid AI RESTful API Explorer & Telemetry Verification
          </h2>
        </div>
        <p className="text-xs text-slate-400 max-w-3xl leading-relaxed">
          Inspect, verify, and interact directly with all 12 backend microservices driving national health resource intelligence and AI forecasting.
        </p>
      </div>

      {/* Main Grid: Endpoints List & Request/Response Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Endpoints Sidebar (4 cols) */}
        <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm space-y-2">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono block px-2 mb-2">
            Available Microservices
          </span>

          <div className="space-y-1.5 max-h-[640px] overflow-y-auto pr-1">
            {apiEndpoints.map((ep, idx) => {
              const isSelected = selectedEndpoint === ep.path;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectEndpoint(ep)}
                  className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-850 border-sky-500 shadow-sm'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold font-mono ${
                      ep.method === 'GET' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-blue-950 text-blue-300 border border-blue-800'
                    }`}>
                      {ep.method}
                    </span>
                    <span className="text-xs font-mono text-white font-semibold">
                      {ep.path}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    {ep.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Runner & Output Console (8 cols) */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded text-xs font-bold font-mono ${
                method === 'GET' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-blue-950 text-blue-300 border border-blue-800'
              }`}>
                {method}
              </span>
              <span className="text-sm font-bold text-white font-mono">
                {selectedEndpoint}
              </span>
            </div>

            <button
              onClick={handleExecute}
              disabled={isLoading}
              className="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors cursor-pointer shadow-sm disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isLoading ? 'Executing...' : 'Execute Request'}</span>
            </button>
          </div>

          {/* If POST, allow editing request JSON body */}
          {method === 'POST' && (
            <div className="space-y-1.5">
              <span className="text-xs text-slate-400 font-mono block">Request JSON Payload:</span>
              <textarea
                value={requestBody}
                onChange={(e) => setRequestBody(e.target.value)}
                rows={4}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-sky-300 font-mono focus:outline-none focus:border-sky-500"
              />
            </div>
          )}

          {/* Response Inspector */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                  Response Payload
                </span>
                {responseStatus && (
                  <span className={`px-2 py-0.2 rounded text-[10px] font-bold font-mono ${
                    responseStatus === 200 ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-rose-950 text-rose-300 border border-rose-800'
                  }`}>
                    HTTP {responseStatus} OK
                  </span>
                )}
              </div>

              {responseData && (
                <button
                  onClick={handleCopyResponse}
                  className="text-xs text-slate-400 hover:text-sky-400 flex items-center gap-1 font-mono"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copied ? 'Copied!' : 'Copy JSON'}</span>
                </button>
              )}
            </div>

            <div className="bg-slate-950 rounded-lg border border-slate-800 p-4 h-96 overflow-y-auto font-mono text-xs text-slate-200">
              {responseData ? (
                <pre className="text-sky-300">
                  {JSON.stringify(responseData, null, 2)}
                </pre>
              ) : (
                <div className="h-full flex items-center justify-center text-slate-500 text-xs">
                  Click "Execute Request" above to trigger live backend telemetry.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
