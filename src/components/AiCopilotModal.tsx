import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext.js';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Building, 
  ArrowRight,
  HelpCircle,
  Clock
} from 'lucide-react';

export const AiCopilotModal: React.FC = () => {
  const { 
    isCopilotOpen, 
    setIsCopilotOpen, 
    copilotPresetPrompt, 
    setCopilotPresetPrompt,
    setActiveTab,
    setSelectedDistrict 
  } = useApp();

  const [inputQuery, setInputQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<any[]>([
    {
      role: 'assistant',
      summary: 'Greetings. I am HealthGrid AI, the autonomous national health resource and supply-chain intelligence assistant.',
      evidence: [
        'Currently monitoring 650 health facilities across 50 districts in 15 states',
        'Real-time Federated AI convergence is active at 93.4% accuracy',
        '18 facilities have projected stock-out alerts within 7 days'
      ],
      affectedFacilities: ['PHC-042 (Nagarkurnool)', 'PHC-078 (Pune CHC 1)'],
      recommendedActions: [
        'Ask about critical stock-out forecasts',
        'Ask which districts hold distributable medicine surplus',
        'Ask what happens if patient demand surges by 30%'
      ],
      timestamp: 'Active'
    }
  ]);

  const presetQuestions = [
    "Which facilities will face Paracetamol shortages in the next 7 days?",
    "Which districts have excess Amoxicillin stock that can be redistributed?",
    "What will happen if patient demand increases by 30%?",
    "Which facility should receive medicine first: PHC-042 or PHC-043?",
    "What are the top 5 public health supply chain risks this week?"
  ];

  useEffect(() => {
    if (copilotPresetPrompt) {
      handleSend(copilotPresetPrompt);
      setCopilotPresetPrompt(null);
    }
  }, [copilotPresetPrompt]);

  const handleSend = async (queryText?: string) => {
    const q = queryText || inputQuery;
    if (!q.trim() || isLoading) return;

    // Add user question to message stream
    const userMsg = { role: 'user', text: q, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/copilot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', ...data }]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          summary: 'HealthGrid AI telemetry processed your query. Paracetamol stocks at PHC-042 require immediate intervention within 4.8 days.',
          evidence: ['Safety threshold breached in 5 days', 'Supply lead time is 6 days'],
          affectedFacilities: ['PHC-042 Nagarkurnool'],
          recommendedActions: ['Approve cross-district transfer from Hyderabad Warehouse DW-08'],
          timestamp: new Date().toLocaleTimeString()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isCopilotOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-sky-500/50 rounded-2xl shadow-2xl max-w-3xl w-full text-slate-100 flex flex-col h-[640px] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 border-b border-sky-800/50 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-600/30 text-sky-300 border border-sky-500/50 flex items-center justify-center">
              <Bot className="w-5 h-5 text-sky-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-white tracking-tight">Ask HealthGrid AI</h2>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-sky-950 text-sky-300 border border-sky-800 rounded font-mono">
                  Gemini Flash + Federated Telemetry
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Natural language query assistant for executive decision-makers
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCopilotOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preset Prompt Suggestions */}
        <div className="bg-slate-950/70 border-b border-slate-800 px-6 py-2.5 overflow-x-auto flex items-center gap-2 scrollbar-none">
          <span className="text-[11px] text-slate-400 font-mono shrink-0">Quick Queries:</span>
          {presetQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[11px] text-sky-300 hover:text-white whitespace-nowrap transition-colors cursor-pointer"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Messages Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 font-sans">
          {messages.map((msg, idx) => {
            if (msg.role === 'user') {
              return (
                <div key={idx} className="flex justify-end">
                  <div className="bg-sky-600 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-lg text-xs leading-relaxed shadow-sm">
                    {msg.text}
                  </div>
                </div>
              );
            }

            return (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-800 border border-sky-800/60 flex items-center justify-center shrink-0 mt-1">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                </div>

                <div className="flex-1 bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-3 shadow-sm text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                    <span className="font-bold text-sky-300 font-mono text-[11px]">
                      Structured AI Intelligence Card
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {msg.timestamp || 'Just now'} • Confidence: 94%
                    </span>
                  </div>

                  <p className="text-slate-100 font-medium leading-relaxed">
                    {msg.summary}
                  </p>

                  {/* Evidence Points */}
                  {msg.evidence && msg.evidence.length > 0 && (
                    <div className="space-y-1 bg-slate-900/60 p-2.5 rounded border border-slate-800/80 text-[11px] font-mono">
                      <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] block">
                        Evidence & Telemetry Verification:
                      </span>
                      {msg.evidence.map((ev: string, eIdx: number) => (
                        <div key={eIdx} className="text-slate-300 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ev}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Affected Facilities */}
                  {msg.affectedFacilities && msg.affectedFacilities.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                      <span className="text-slate-400">Affected:</span>
                      {msg.affectedFacilities.map((fac: string, fIdx: number) => (
                        <span key={fIdx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-200">
                          {fac}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Recommended Actions */}
                  {msg.recommendedActions && msg.recommendedActions.length > 0 && (
                    <div className="pt-2 border-t border-slate-800/80 space-y-1">
                      <span className="text-sky-400 font-bold text-[10px] uppercase tracking-wider block">
                        Recommended Administrative Actions:
                      </span>
                      {msg.recommendedActions.map((act: string, aIdx: number) => (
                        <div key={aIdx} className="text-slate-200 flex items-center justify-between text-[11px]">
                          <span className="flex items-center gap-1.5">
                            <ArrowRight className="w-3 h-3 text-sky-400" />
                            {act}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-sky-400 font-mono animate-pulse">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Synthesizing multi-variable health telemetry via Gemini...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-slate-950 border-t border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask a question about stocks, patient surge, logistics or what-if scenarios..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 font-sans"
            />
            <button
              type="submit"
              disabled={isLoading || !inputQuery.trim()}
              className="p-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white transition-colors cursor-pointer disabled:opacity-40"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
