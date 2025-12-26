
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  color: 'indigo' | 'emerald' | 'rose' | 'amber';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, isPositive, icon, color }) => {
  const colors = {
    indigo: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
    emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
    rose: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
    amber: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white'
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 cursor-default group">
      <div className="flex items-center justify-between mb-8">
        <div className={`w-14 h-14 ${colors[color]} rounded-2xl flex items-center justify-center transition-all duration-500`}>
          {icon}
        </div>
        <div className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-black transition-all duration-300 group-hover:scale-110 ${isPositive ? 'bg-emerald-50 text-emerald-600 shadow-emerald-100/50' : 'bg-rose-50 text-rose-600 shadow-rose-100/50'} group-hover:shadow-md`}>
          {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {change}
        </div>
      </div>
      
      <div className="space-y-1">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-500 transition-colors">{title}</p>
        <h3 className="text-3xl font-extrabold text-slate-900 tracking-tighter group-hover:text-indigo-600 transition-colors duration-500">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;
