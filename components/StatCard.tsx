
import React from 'react';

interface StatCardProps {
  title: string;
  cumulativeLabel: string;
  cumulativeValue: string;
  todayLabel: string;
  todayValue: string;
  icon: React.ReactNode;
  color: 'pink' | 'purple' | 'orange' | 'blue';
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  cumulativeLabel, 
  cumulativeValue, 
  todayLabel, 
  todayValue, 
  icon, 
  color 
}) => {
  const colorStyles = {
    pink: {
      bg: 'bg-pink-50',
      text: 'text-pink-500',
      iconBg: 'bg-pink-100 text-pink-500'
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-500',
      iconBg: 'bg-purple-100 text-purple-500'
    },
    orange: {
      bg: 'bg-orange-50',
      text: 'text-orange-500',
      iconBg: 'bg-orange-100 text-orange-500'
    },
    blue: {
      bg: 'bg-sky-50',
      text: 'text-sky-500',
      iconBg: 'bg-sky-100 text-sky-500'
    }
  };

  const style = colorStyles[color];

  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col space-y-5">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${style.iconBg}`}>
          {icon}
        </div>
        <h3 className="text-base font-bold text-slate-800">{title}</h3>
      </div>

      <div className="space-y-1">
        <p className="text-xs font-semibold text-slate-400">{cumulativeLabel}</p>
        <p className="text-3xl font-bold text-slate-900">{cumulativeValue}</p>
      </div>

      <div className="space-y-1 pt-2">
        <p className="text-xs font-semibold text-slate-400">{todayLabel}</p>
        <p className={`text-xl font-bold ${style.text}`}>{todayValue}</p>
      </div>
    </div>
  );
};

export default StatCard;
