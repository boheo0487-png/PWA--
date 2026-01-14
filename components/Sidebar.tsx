
import React from 'react';
import { 
  LayoutDashboard, 
  Link2, 
  Globe, 
  Settings, 
  Zap,
  Box,
  ChevronRight,
  LogOut,
  AppWindow,
  BarChart3
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: '工作台', active: true },
    { icon: <Globe className="w-5 h-5" />, label: '域名中台', active: false },
    { icon: <AppWindow className="w-5 h-5" />, label: '应用中心', active: false },
    { icon: <Link2 className="w-5 h-5" />, label: '推广链接', active: false },
    { icon: <BarChart3 className="w-5 h-5" />, label: '归因平台', active: false },
    { icon: <Settings className="w-5 h-5" />, label: '偏好设置', active: false },
  ];

  return (
    <aside className="w-80 bg-slate-50 border-r border-slate-100 flex flex-col shrink-0 sticky top-0 h-screen py-10">
      <div className="px-10 mb-16 flex items-center gap-4 group cursor-pointer">
        <div className="w-12 h-12 indigo-gradient rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-100 transition-all duration-300">
          <Link2 className="w-7 h-7 text-white stroke-[2.5px]" />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-black text-slate-900 tracking-tighter group-hover:text-indigo-600 transition-colors">LINKCORE</span>
          <span className="text-[10px] text-indigo-500 font-black uppercase tracking-[0.2em]">Enterprise</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1.5">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-200 group relative ${
              item.active 
                ? 'bg-white text-indigo-600 shadow-[0_10px_25px_-5px_rgba(99,102,241,0.15)] ring-1 ring-slate-200/50' 
                : 'text-slate-400 hover:text-slate-900 hover:bg-white hover:shadow-sm'
            }`}
          >
            {item.active ? (
              <div className="absolute left-2 w-1.5 h-6 bg-indigo-600 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.6)]"></div>
            ) : (
              <div className="absolute left-2 w-1 h-3 bg-indigo-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            )}

            <div className="relative flex items-center justify-center">
              <span className={`${item.active ? 'text-indigo-600' : 'text-slate-300 group-hover:text-indigo-500'} relative transition-colors duration-200`}>
                {item.icon}
              </span>
            </div>

            <span className="font-bold text-sm flex-1 text-left tracking-tight">
              {item.label}
            </span>

            <ChevronRight className={`w-4 h-4 transition-opacity duration-200 ${
              item.active 
                ? 'opacity-40' 
                : 'opacity-0 group-hover:opacity-30'
            }`} />
          </button>
        ))}
      </nav>
      
      <div className="px-8 mt-auto">
        <div className="bg-indigo-600 rounded-[2rem] p-6 relative overflow-hidden group shadow-xl shadow-indigo-100 cursor-pointer transition-all duration-300">
          <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity">
            <Zap className="w-20 h-20 text-white" />
          </div>
          <p className="text-white/70 text-[10px] font-black uppercase tracking-widest mb-1.5">Pro Membership</p>
          <h4 className="text-white font-bold text-base mb-4 tracking-tight">部署 AI 工作流</h4>
          <button className="w-full bg-white/10 hover:bg-white text-white hover:text-indigo-600 py-3 rounded-2xl text-xs font-black backdrop-blur-md border border-white/20 transition-all duration-200 active:scale-95 shadow-lg shadow-black/5">
            立即升级
          </button>
        </div>
        
        <button className="w-full mt-10 flex items-center gap-3 px-6 py-4 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-2xl transition-all duration-200 font-bold text-sm group">
          <div className="p-2 rounded-lg group-hover:bg-rose-100/50 transition-colors">
            <LogOut className="w-5 h-5" />
          </div>
          <span>退出系统</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
