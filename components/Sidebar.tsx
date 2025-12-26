
import React from 'react';
import { 
  LayoutDashboard, 
  Link2, 
  Globe, 
  Settings, 
  Zap,
  Box,
  ChevronRight,
  LogOut
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: '工作台', active: true },
    { icon: <Globe className="w-5 h-5" />, label: '域名中台', active: false },
    { icon: <Box className="w-5 h-5" />, label: '资产中心', active: false },
    { icon: <Zap className="w-5 h-5" />, label: '自动化工作流', active: false },
    { icon: <Settings className="w-5 h-5" />, label: '偏好设置', active: false },
  ];

  return (
    <aside className="w-80 bg-white border-r border-slate-100 flex flex-col shrink-0 sticky top-0 h-screen py-10">
      <div className="px-10 mb-16 flex items-center gap-4">
        <div className="w-12 h-12 indigo-gradient rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-100">
          <Link2 className="w-7 h-7 text-white stroke-[2.5px]" />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-black text-slate-900 tracking-tighter">LINKCORE</span>
          <span className="text-[10px] text-indigo-500 font-black uppercase tracking-[0.2em]">Enterprise</span>
        </div>
      </div>

      <nav className="flex-1 px-6 space-y-2">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all group relative ${
              item.active 
                ? 'bg-indigo-50 text-indigo-600' 
                : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
            }`}
          >
            {item.active && <div className="absolute left-0 w-1 h-6 bg-indigo-600 rounded-r-full"></div>}
            <span className={`${item.active ? 'text-indigo-600 scale-110' : 'text-slate-300 group-hover:text-slate-600'} transition-transform duration-300`}>
              {item.icon}
            </span>
            <span className="font-bold text-sm flex-1 text-left">{item.label}</span>
            {item.active && <ChevronRight className="w-4 h-4 opacity-50" />}
          </button>
        ))}
      </nav>
      
      <div className="px-8 mt-auto">
        <div className="bg-indigo-600 rounded-3xl p-6 relative overflow-hidden group shadow-xl shadow-indigo-100">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
            <Zap className="w-20 h-20 text-white" />
          </div>
          <p className="text-white/80 text-[10px] font-black uppercase tracking-widest mb-2">Upgrade Now</p>
          <h4 className="text-white font-bold text-sm mb-4">解锁 AI 智能分析</h4>
          <button className="w-full bg-white text-indigo-600 py-3 rounded-xl text-xs font-black shadow-sm hover:shadow-md transition-shadow">
            立即升级
          </button>
        </div>
        
        <button className="w-full mt-10 flex items-center gap-3 px-6 py-4 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-2xl transition-all font-bold text-sm">
          <LogOut className="w-5 h-5" />
          <span>退出登录</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
