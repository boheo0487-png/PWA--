
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

const data = [
  { name: '02', value: 2000 },
  { name: '03', value: 2350 },
  { name: '04', value: 2500 },
  { name: '05', value: 2300 },
  { name: '06', value: 1950 },
  { name: '07', value: 1550 },
  { name: '08', value: 2050 },
  { name: '09', value: 1950 },
  { name: '10', value: 1800 },
  { name: '11', value: 1850 },
  { name: '12', value: 1900 },
  { name: '13', value: 1950 },
  { name: '14', value: 1850 },
  { name: '15', value: 1750 },
  { name: '16', value: 2200 },
  { name: '17', value: 2600 },
  { name: '18', value: 2750 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-slate-50 flex flex-col items-center">
        <p className="text-xs font-bold text-slate-400 mb-1">5月安装量</p>
        <p className="text-2xl font-black text-pink-500">152334</p>
      </div>
    );
  }
  return null;
};

const AnalyticsChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="pinkGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f472b6" stopOpacity={0.1}/>
            <stop offset="95%" stopColor="#f472b6" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="#f1f5f9" />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }}
          dy={15}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#cbd5e1', fontSize: 12 }}
          domain={[0, 3000]}
          ticks={[0, 500, 1000, 1500, 2000, 2500, 3000]}
        />
        <Tooltip 
          content={<CustomTooltip />} 
          cursor={{ stroke: '#f472b6', strokeWidth: 1, strokeDasharray: '4 4' }} 
        />
        
        {/* Specific Reference Line as seen in the image at position '07' */}
        <ReferenceLine 
          x="07" 
          stroke="#f472b6" 
          strokeDasharray="3 3" 
          strokeWidth={1.5}
        />

        <Area 
          type="monotone" 
          dataKey="value" 
          stroke="#f472b6" 
          strokeWidth={3}
          fill="url(#pinkGradient)" 
          dot={{ r: 0 }}
          activeDot={{ r: 5, fill: '#f472b6', stroke: '#fff', strokeWidth: 2 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AnalyticsChart;
