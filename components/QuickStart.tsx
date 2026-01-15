
import React, { useState } from 'react';
import { 
  Globe, 
  Target, 
  BarChart3, 
  AppWindow, 
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Terminal,
  Activity,
  ArrowRightCircle,
  RotateCcw
} from 'lucide-react';

const steps = [
  { 
    id: 1,
    label: '品牌域名', 
    title: '构建品牌信任锚点',
    tagline: 'DNS Infrastructure',
    description: '绑定企业级域名，彻底告别屏蔽风险，点击率平均提升 34.2%。',
    specs: ['Wildcard SSL', 'Anycast 加速'],
    completed: true, 
    icon: <Globe className="w-5 h-5" />,
    color: 'indigo'
  },
  { 
    id: 2,
    label: '全域像素', 
    title: '开启数据追踪引擎',
    tagline: 'Pixel Tracking',
    description: '集成 FB/GTM 像素，通过指纹算法识别设备特征，构建精准画像。',
    specs: ['10+ 平台支持', '无感指纹'],
    completed: true, 
    icon: <Target className="w-5 h-5" />,
    color: 'rose'
  },
  { 
    id: 3,
    label: '归因链路', 
    title: '打破数据归因孤岛',
    tagline: 'Smart Attribution',
    description: '对接主流归因平台（AppsFlyer）。实时计算 ROI，确保预算有迹可循。',
    specs: ['S2S 回传', '防作弊过滤'],
    completed: false, 
    icon: <BarChart3 className="w-5 h-5" />,
    color: 'amber'
  },
  { 
    id: 4,
    label: '应用路由', 
    title: '定义深度跳转逻辑',
    tagline: 'Universal Links',
    description: '配置 URI Scheme 实现“零阻力”跳转，这是提升留存的核心。',
    specs: ['Deep-link', '延迟唤起'],
    completed: false, 
    icon: <AppWindow className="w-5 h-5" />,
    color: 'sky'
  },
  { 
    id: 5,
    label: '部署上线', 
    title: '发布高性能营销资产',
    tagline: 'Edge Deployment',
    description: '配置聚合成智能短链，具备多重容灾能力的分发指挥中心。',
    specs: ['秒级热生效', '边缘容灾'],
    completed: false, 
    icon: <Zap className="w-5 h-5" />,
    color: 'emerald'
  },
];

const QuickStart: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState(2); // Defaulting to the first non-completed step
  const activeStep = steps[activeStepIdx];

  const handleNext = () => {
    if (activeStepIdx < steps.length - 1) {
      setActiveStepIdx(prev => prev + 1);
    }
  };

  const getColorClass = (color: string) => {
    const map: Record<string, string> = {
      indigo: 'text-indigo-600 bg-indigo-50 border-indigo-100',
      rose: 'text-rose-600 bg-rose-50 border-rose-100',
      amber: 'text-amber-600 bg-amber-50 border-amber-100',
      sky: 'text-sky-600 bg-sky-50 border-sky-100',
      emerald: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    };
    return map[color] || map.indigo;
  };

  return (
    <section className="bg-white/80 backdrop-blur-2xl border border-slate-200/60 rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.02)] overflow-hidden transition-all duration-500">
      {/* Header & Mini Rail Navigation */}
      <div className="flex items-center px-8 py-4 border-b border-slate-100 bg-slate-50/30">
        <div className="flex items-center gap-3 mr-10 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-md">
            <Cpu className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-black text-slate-900 tracking-wider uppercase">部署控制台</span>
        </div>

        {/* Step Rail */}
        <div className="flex-1 flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
          {steps.map((step, idx) => {
            const isActive = activeStepIdx === idx;
            const isCompleted = step.completed;
            return (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => setActiveStepIdx(idx)}
                  className={`group relative flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-300 border ${
                    isActive 
                      ? 'bg-white border-slate-200 shadow-sm ring-4 ring-slate-900/5' 
                      : isCompleted
                        ? 'bg-emerald-50/50 border-emerald-100/50 text-emerald-500'
                        : 'bg-transparent border-transparent text-slate-300 hover:text-slate-500'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-black transition-all ${
                    isActive ? 'bg-slate-900 text-white' : isCompleted ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-400'
                  }`}>
                    {isCompleted ? <CheckCircle2 className="w-2.5 h-2.5" /> : idx + 1}
                  </div>
                  <span className={`text-[10px] font-bold whitespace-nowrap tracking-tight ${isActive ? 'text-slate-900' : ''}`}>{step.label}</span>
                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full animate-ping opacity-40"></div>
                  )}
                </button>
                {idx < steps.length - 1 && (
                  <div className="w-3 h-[1px] bg-slate-100 shrink-0"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="ml-6 pl-6 border-l border-slate-200 hidden sm:flex items-center gap-2">
           <div className="flex gap-0.5">
             {[1,2,3].map(i => <div key={i} className="w-1 h-3 rounded-full bg-emerald-400/30"></div>)}
             <div className="w-1 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
           </div>
           <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">系统负载: 轻载</span>
        </div>
      </div>

      {/* Content Area - Optimized 3-Column Layout */}
      <div className="grid lg:grid-cols-12 items-stretch divide-x divide-slate-50 transition-all duration-700">
        
        {/* Col 1: Core Description */}
        <div className="lg:col-span-5 p-8 flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[9px] font-black uppercase tracking-widest ${getColorClass(activeStep.color)}`}>
              <Terminal className="w-3 h-3" />
              {activeStep.tagline}
            </div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tighter flex items-center gap-3">
              {activeStep.title}
              {activeStep.completed && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500 text-white text-[8px] font-black uppercase tracking-widest rounded-md shadow-sm animate-in zoom-in-50">
                  <ShieldCheck className="w-2.5 h-2.5" /> 已配置
                </span>
              )}
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-sm">
              {activeStep.description}
            </p>
          </div>
        </div>

        {/* Col 2: Technical Highlights */}
        <div className="lg:col-span-3 p-8 flex flex-col justify-center space-y-5 bg-slate-50/20">
           <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest flex items-center gap-2">
             <Activity className="w-3 h-3" /> 技术特性 / Specs
           </p>
           <div className="grid grid-cols-1 gap-3">
             {activeStep.specs.map((spec, i) => (
               <div key={i} className="flex items-center gap-2 group/spec">
                 <div className={`w-1 h-1 rounded-full ${activeStep.completed ? 'bg-emerald-400' : 'bg-slate-300'} group-hover/spec:scale-150 transition-transform`}></div>
                 <span className="text-xs font-bold text-slate-600 tracking-tight">{spec}</span>
               </div>
             ))}
           </div>
        </div>

        {/* Col 3: Smart Actions */}
        <div className="lg:col-span-4 p-8 flex flex-col justify-center items-center bg-slate-50/40">
           <div className="w-full space-y-3">
             {activeStep.completed ? (
               <>
                 <button 
                   onClick={handleNext}
                   className="w-full h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-100 active:scale-95 group/btn"
                 >
                   <span>去下一步</span>
                   <ArrowRightCircle className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                 </button>
                 <button className="w-full h-12 bg-white border border-slate-100 text-slate-400 hover:text-slate-900 hover:border-slate-300 rounded-xl font-black uppercase tracking-widest text-[9px] transition-all flex items-center justify-center gap-2">
                   <RotateCcw className="w-3 h-3" /> 重新配置资产
                 </button>
               </>
             ) : (
               <>
                 <button className="w-full h-12 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-xl shadow-slate-200 active:scale-95 group/btn">
                   <span>开始部署</span>
                   <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                 </button>
                 <div className="text-center">
                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">预计耗时: &lt; 2 分钟</span>
                 </div>
               </>
             )}
           </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
