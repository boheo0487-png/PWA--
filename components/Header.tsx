
import React from 'react';
import { Bell, ChevronDown, Search, HelpCircle, Globe } from 'lucide-react';

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="h-24 px-10 flex items-center justify-between sticky top-0 z-10 glass-panel border-x-0 border-t-0">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-xs font-bold text-slate-500 border border-slate-100 hover:border-indigo-200 hover:bg-white transition-all cursor-pointer shadow-sm hover:shadow-md">
          <Globe className="w-3.5 h-3.5" />
          <span>US-EAST-1</span>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button className="p-3 hover:bg-slate-100 hover:text-indigo-600 hover:scale-110 rounded-2xl text-slate-400 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95">
          <HelpCircle className="w-5 h-5" />
        </button>
        
        <button className="p-3 hover:bg-slate-100 hover:text-rose-500 hover:scale-110 rounded-2xl text-slate-400 transition-all duration-300 relative group shadow-sm hover:shadow-md active:scale-95">
          <Bell className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-rose-500 border-[3px] border-white rounded-full group-hover:animate-ping"></span>
        </button>

        <div className="w-px h-8 bg-slate-100 mx-2"></div>

        <button className="flex items-center gap-4 p-1.5 pr-5 hover:bg-white hover:shadow-md rounded-2xl transition-all duration-300 group">
          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 font-bold overflow-hidden group-hover:ring-2 group-hover:ring-indigo-100 transition-all">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`} alt="avatar" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-bold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">{userName}</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Enterprise Plan</span>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-300 group-hover:translate-y-0.5 group-hover:text-indigo-400 transition-all" />
        </button>
      </div>
    </header>
  );
};

export default Header;
