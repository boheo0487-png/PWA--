
import React, { useState } from 'react';
import { 
  Globe, 
  Target, 
  BarChart3, 
  AppWindow, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';

const steps = [
  { 
    id: 1,
    label: '品牌域名', 
    title: '构建第一信任锚点',
    tagline: 'Brand Authority',
    description: '通过绑定企业级自定义域名，您可以彻底告别第三方短链被屏蔽的风险，并将点击率提升约 34.2%。这是专业营销的基石。',
    completed: true, 
    optional: false, 
    icon: <Globe className="w-8 h-8" />,
    theme: 'indigo'
  },
  { 
    id: 2,
    label: '全域像素', 
    title: '开启数据追踪引擎',
    tagline: 'Retargeting Intel',
    description: '集成 FB、GTM 及 TikTok 像素。我们不仅追踪点击，更通过指纹算法识别用户设备特征，为您构建精准的人群画像池。',
    completed: false, 
    optional: true, 
    icon: <Target className="w-8 h-8" />,
    theme: 'rose'
  },
  { 
    id: 3,
    label: '归因链路', 
    title: '打破数据归因孤岛',
    tagline: 'Precision Attribution',
    description: '对接主流归因平台（AppsFlyer/Adjust）。实时计算每一笔流量的 ROI，确保您的每一分投放预算都能产生可量化的价值。',
    completed: false, 
    optional: true, 
    icon: <BarChart3 className="w-8 h-8" />,
    theme: 'amber'
  },
  { 
    id: 4,
    label: '应用路由', 
    title: '定义深度跳转逻辑',
    tagline: 'Deep-link Engine',
    description: '配置 URI Scheme 与 App Links。实现从网页到 App 特定页面的“零阻力”跳转，这是提升应用留存与转化的核心技术。',
    completed: false, 
    optional: false, 
    icon: <AppWindow className="w-8 h-8" />,
    theme: 'sky'
  },
  { 
    id: 5,
    label: '部署上线', 
    title: '发布高性能营销资产',
    tagline: 'Final Deployment',
    description: '所有的配置将聚合成一个具备多重容灾能力的智能短链。它不仅是链接，更是集成安全、追踪与分发功能的指挥中心。',
    completed: false, 
    optional: false, 
    icon: <Zap className="w-8 h-8" />,
    theme: 'emerald'
  },
];

const QuickStart: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState(1);
  const activeStep = steps[activeStepIdx];

  const getThemeColor = (theme: string) => {
    const colors: Record<string, string> = {
      indigo: 'text-indigo-500 bg-indigo-500',
      rose: 'text-rose-500 bg-rose-500',
      amber: 'text-amber-500 bg-amber-500',
      sky: 'text-sky-500 bg-sky-500',
      emerald: 'text-emerald-500 bg-emerald-500',
    };
    return colors[theme] || colors.indigo;
  };

  return (
    <section className="relative group">
      {/* Background Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-[3.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

      <div className="relative bg-white/70 backdrop-blur-3xl border border-white/50 rounded-[3.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
        
        {/* Header - Minimalist & Elite */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-xl shadow-slate-200">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">部署向导 <span className="text-slate-300 font-light ml-2">/ Deployment Navigator</span></h2>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mt-0.5">Automated Infrastructure Setup</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-6 py-2 bg-white/50 border border-slate-100 rounded-2xl shadow-sm">
             <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">系统就绪度</span>
             <div className="flex gap-1">
                {steps.map((s, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${s.completed ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>
                ))}
             </div>
          </div>
        </div>

        {/* High-end Step Rail */}
        <div className="relative mb-16">
          {/* Progress Line Background */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 -translate-y-1/2"></div>
          
          <div className="relative flex justify-between">
            {steps.map((step, idx) => {
              const isActive = activeStepIdx === idx;
              const isCompleted = step.completed;
              
              return (
                <div key={step.id} className="flex flex-col items-center gap-3">
                  <button
                    onClick={() => setActiveStepIdx(idx)}
                    className={`group/btn relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 z-10 ${
                      isActive 
                        ? 'bg-slate-900 text-white shadow-[0_0_30px_rgba(15,23,42,0.3)] scale-110' 
                        : isCompleted 
                          ? 'bg-emerald-50 text-emerald-500 border border-emerald-100' 
                          : 'bg-white border border-slate-100 text-slate-300 hover:border-indigo-200'
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <span className="text-xs font-black">{idx + 1}</span>}
                    
                    {/* Active Halo */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full border-2 border-slate-900 animate-[ping_2s_infinite] opacity-10"></div>
                    )}
                    
                    {/* Tooltip on Hover */}
                    <div className="absolute -bottom-10 opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none">
                       <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest whitespace-nowrap bg-white px-2 py-1 rounded border border-slate-100 shadow-sm">{step.label}</span>
                    </div>
                  </button>
                  
                  {/* Under-label for Active State */}
                  <div className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-slate-900 scale-150' : 'bg-transparent'}`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Area - Refined Typography & Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Visual Representation */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
            {/* Fix: removed undefined isActive variable and set default translate-y-0 */}
            <div className="relative w-64 h-64 rounded-[4rem] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-white flex flex-col items-center justify-center gap-6 group/icon overflow-hidden transition-all duration-700 translate-y-0">
               <div className={`p-8 rounded-[2.5rem] bg-slate-50 transition-transform duration-500 group-hover/icon:scale-110 group-hover/icon:-rotate-3 ${getThemeColor(activeStep.theme).split(' ')[0]}`}>
                  {activeStep.icon}
               </div>
               <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Hardware Encrypted</span>
                  <div className="flex gap-1">
                     {[1,2,3].map(i => <div key={i} className="w-3 h-0.5 rounded-full bg-slate-100"></div>)}
                  </div>
               </div>
               {/* Decorative floating elements */}
               <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            </div>
          </div>

          {/* Right: Detailed Information */}
          <div className="lg:col-span-7 space-y-8 animate-in slide-in-from-right-10 duration-700">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border ${getThemeColor(activeStep.theme).split(' ')[0]} bg-white shadow-sm`}>
                  {activeStep.tagline}
                </span>
                {activeStep.optional && (
                  <span className="text-[10px] font-black text-slate-400 px-3 py-1 rounded-full uppercase tracking-widest border border-slate-100 bg-slate-50/50">
                    可选项
                  </span>
                )}
              </div>
              
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter leading-tight">
                {activeStep.title}
              </h3>
              
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                {activeStep.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="h-16 px-10 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 active:scale-95 group/btn">
                <span>进入配置控制台</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1.5" />
              </button>
              
              <button className="h-16 px-8 bg-white border border-slate-100 text-slate-400 hover:text-slate-900 hover:border-slate-300 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center gap-2">
                 <span>查看说明文档</span>
              </button>
            </div>

            <div className="flex items-center gap-3 pt-6 text-slate-400 text-[10px] font-bold uppercase tracking-widest border-t border-slate-50">
               <ShieldCheck className="w-4 h-4 text-emerald-500" />
               <span>企业级 SSL 加密已自动启用</span>
               <div className="w-1 h-1 rounded-full bg-slate-200 mx-2"></div>
               <span>全局分发节点已就绪</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
