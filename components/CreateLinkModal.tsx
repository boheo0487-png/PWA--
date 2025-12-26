
import React, { useState } from 'react';
import { X, Sparkles, ShieldCheck, Globe, Zap, ArrowRight } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";

interface CreateLinkModalProps {
  onClose: () => void;
}

const CreateLinkModal: React.FC<CreateLinkModalProps> = ({ onClose }) => {
  const [url, setUrl] = useState('');
  const [alias, setAlias] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);

  const handleSuggest = async () => {
    if (!url) return;
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Suggest 3 viral-ready, catchy aliases for a campaign URL: ${url}. JSON array of strings only.`,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        }
      });
      setAiSuggestions(JSON.parse(response.text));
    } catch (error) {
      setAiSuggestions(['cyber-deal', 'next-gen', 'rivers-exclusive']);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-500 overflow-hidden border border-slate-100">
        <div className="px-12 pt-12 pb-6 flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">部署新资产</h2>
            <p className="text-slate-400 font-medium">Create a high-performance tracked asset</p>
          </div>
          <button onClick={onClose} className="w-12 h-12 flex items-center justify-center hover:bg-slate-50 rounded-2xl text-slate-300 hover:text-slate-900 transition-all">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-12 py-8 space-y-10">
          <div className="space-y-3">
            <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">目标长链接 Destination URL</label>
            <div className="relative group">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors">
                <Globe className="w-5 h-5" />
              </div>
              <input 
                type="url"
                placeholder="https://example.com/campaign-v1/tracking/..."
                className="w-full pl-16 pr-6 py-5 bg-slate-50 border-none rounded-3xl text-slate-900 font-bold placeholder-slate-300 focus:ring-4 focus:ring-indigo-100 transition-all outline-none"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">智能自定义后缀 AI Alias</label>
              <button 
                onClick={handleSuggest}
                disabled={!url || isGenerating}
                className={`flex items-center gap-2 text-xs font-black transition-all ${isGenerating ? 'text-slate-300' : 'text-indigo-600 hover:scale-105 active:scale-95'}`}
              >
                <Sparkles className="w-4 h-4" />
                {isGenerating ? 'AI 解析中...' : '智能生成别名'}
              </button>
            </div>
            
            <div className="flex items-center bg-slate-50 rounded-3xl overflow-hidden focus-within:ring-4 focus-within:ring-indigo-100 transition-all">
              <div className="pl-6 pr-4 py-5 text-slate-400 font-black text-sm border-r border-slate-200">pwa.cn/</div>
              <input 
                type="text"
                placeholder="my-campaign"
                className="flex-1 px-6 py-5 bg-transparent outline-none text-slate-900 font-bold"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
              />
            </div>

            {aiSuggestions.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-4 animate-in fade-in slide-in-from-top-2">
                {aiSuggestions.map((s, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setAlias(s)}
                    className="px-5 py-2.5 bg-indigo-50 text-indigo-600 text-xs font-black rounded-xl hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="bg-slate-900 rounded-[2rem] p-8 flex items-center justify-between gap-6 group">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">企业级安全保障</h4>
                <p className="text-white/40 text-xs mt-0.5">自动启用 HTTPS 加密与多重反欺诈过滤</p>
              </div>
            </div>
            <Zap className="w-8 h-8 text-white/5 group-hover:text-indigo-500/50 transition-colors" />
          </div>
        </div>

        <div className="px-12 pb-12 pt-6 flex gap-6">
          <button 
            onClick={onClose}
            className="flex-1 py-5 text-slate-400 font-black uppercase tracking-widest rounded-3xl hover:bg-slate-50 transition-all"
          >
            返回
          </button>
          <button 
            className="flex-1 py-5 indigo-gradient text-white font-black uppercase tracking-widest rounded-3xl shadow-xl shadow-indigo-200 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span>确认部署</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateLinkModal;
