
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Nov 01', value: 12400 },
  { name: 'Nov 05', value: 18900 },
  { name: 'Nov 10', value: 15600 },
  { name: 'Nov 15', value: 24500 },
  { name: 'Nov 20', value: 22100 },
  { name: 'Nov 25', value: 31200 },
  { name: 'Nov 30', value: 28900 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 text-white p-5 rounded-[1.5rem] shadow-2xl border-none">
        <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 mb-2">{label}</p>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_8px_#6366f1]"></div>
          <p className="text-2xl font-black">{payload[0].value.toLocaleString()}</p>
        </div>
        <p className="text-[10px] font-bold text-slate-500 mt-1 italic">Total Link Clicks</p>
      </div>
    );
  }
  return null;
};

const AnalyticsChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="indigoFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity={0.15}/>
            <stop offset="100%" stopColor="#6366f1" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="10 10" vertical={false} stroke="#f1f5f9" />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em' }}
          dy={20}
        />
        <YAxis 
          hide={true}
        />
        <Tooltip 
          content={<CustomTooltip />} 
          cursor={{ stroke: '#6366f1', strokeWidth: 2, strokeDasharray: '0' }} 
        />
        <Area 
          type="monotone" 
          dataKey="value" 
          stroke="#6366f1" 
          strokeWidth={4}
          fill="url(#indigoFade)" 
          dot={{ r: 6, fill: '#6366f1', strokeWidth: 4, stroke: '#fff' }}
          activeDot={{ r: 8, fill: '#6366f1', stroke: '#fff', strokeWidth: 4, shadow: '0 0 20px rgba(99, 102, 241, 0.4)' }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AnalyticsChart;
