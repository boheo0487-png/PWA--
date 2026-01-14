
import React, { useState } from 'react';
import { 
  Globe, 
  Download, 
  UserPlus, 
  Send,
  Calendar
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import AnalyticsChart from './components/AnalyticsChart';
import QuickStart from './components/QuickStart';

const App: React.FC = () => {
  const [userName] = useState('Alex Rivers');

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header userName={userName} />

        <main className="px-10 py-10 max-w-[1600px] mx-auto w-full space-y-10">
          {/* Onboarding Guide */}
          <QuickStart />

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title="访问量统计" 
              cumulativeLabel="累计访问量"
              cumulativeValue="1,284,902"
              todayLabel="今日访问"
              todayValue="+12,402"
              icon={<Globe className="w-5 h-5" />}
              color="pink"
            />
            <StatCard 
              title="安装量统计" 
              cumulativeLabel="累计安装量"
              cumulativeValue="482,031"
              todayLabel="今日安装"
              todayValue="+3,912"
              icon={<Download className="w-5 h-5" />}
              color="purple"
            />
            <StatCard 
              title="订阅量统计" 
              cumulativeLabel="累计订阅用户"
              cumulativeValue="128,490"
              todayLabel="今日订阅"
              todayValue="+824"
              icon={<UserPlus className="w-5 h-5" />}
              color="orange"
            />
            <StatCard 
              title="消息推送统计" 
              cumulativeLabel="累计推送量"
              cumulativeValue="8,291,042"
              todayLabel="今日推送"
              todayValue="+45,102"
              icon={<Send className="w-5 h-5" />}
              color="blue"
            />
          </div>

          {/* Chart Section */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">数据展示</h2>
              <p className="text-sm text-slate-400 font-medium">安装量增长动态追踪。</p>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm relative min-h-[500px]">
              {/* Chart Legend & Date Picker */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-slate-600">安装量</span>
                </div>
                
                <div className="flex items-center gap-3 px-4 py-2 bg-white border border-slate-100 rounded-lg text-xs font-medium text-slate-500 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
                  <Calendar className="w-4 h-4" />
                  <span>2025-11-25 - 2025-12-25</span>
                </div>
              </div>

              {/* Chart Content */}
              <div className="h-[400px]">
                <AnalyticsChart />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
