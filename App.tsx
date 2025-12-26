
import React, { useState } from 'react';
import { 
  Link as LinkIcon, 
  Search, 
  Plus,
  MousePointer2,
  Users,
  Zap,
  LayoutGrid,
  Filter,
  ArrowUpRight
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import AnalyticsChart from './components/AnalyticsChart';
import LinkList from './components/LinkList';
import CreateLinkModal from './components/CreateLinkModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName] = useState('Alex Rivers');

  return (
    <div className="flex min-h-screen bg-[#fcfcfd]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header userName={userName} />

        <main className="px-10 py-10 max-w-[1600px] mx-auto w-full space-y-12">
          {/* Welcome and Quick Actions */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-1">
              <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-indigo-50 rounded-full">Dashboard Overview</span>
              <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">下午好, {userName.split(' ')[0]} 👋</h1>
              <p className="text-slate-500 font-medium text-lg">今天您的推广链接表现稳步增长。</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all w-80">
                <Search className="w-4 h-4 text-slate-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="搜索资产..." 
                  className="bg-transparent border-none outline-none text-sm w-full font-medium"
                />
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-8 py-4 indigo-gradient text-white rounded-2xl font-bold transition-all shadow-xl shadow-indigo-200 hover:scale-[1.02] active:scale-95"
              >
                <Plus className="w-5 h-5" strokeWidth={3} />
                <span>立即创建</span>
              </button>
            </div>
          </div>

          {/* Stats Grid - Modern Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            <StatCard 
              title="总浏览量" 
              value="2,482,109" 
              change="+14.2%" 
              isPositive={true}
              icon={<MousePointer2 className="w-6 h-6" />}
              color="indigo"
            />
            <StatCard 
              title="活跃链路" 
              value="852" 
              change="+12" 
              isPositive={true}
              icon={<LinkIcon className="w-6 h-6" />}
              color="emerald"
            />
            <StatCard 
              title="独立访客" 
              value="156,092" 
              change="-2.1%" 
              isPositive={false}
              icon={<Users className="w-6 h-6" />}
              color="rose"
            />
            <StatCard 
              title="加权转化率" 
              value="24.8%" 
              change="+0.8%" 
              isPositive={true}
              icon={<Zap className="w-6 h-6" />}
              color="amber"
            />
          </div>

          {/* Main Visual Data Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-10">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">实时流量分布</h2>
                  <p className="text-sm text-slate-400 font-medium">Global Traffic Distribution</p>
                </div>
                <div className="flex bg-slate-50 p-1.5 rounded-2xl">
                  <button className="px-5 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors">7天</button>
                  <button className="px-5 py-2 text-xs font-bold bg-white text-indigo-600 rounded-xl shadow-sm">30天</button>
                </div>
              </div>
              <div className="h-[400px]">
                <AnalyticsChart />
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-10 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-slate-800">推广渠道排行</h2>
                <LayoutGrid className="w-5 h-5 text-slate-300" />
              </div>
              <div className="space-y-6 flex-1">
                {[
                  { name: 'Google Ads', value: 85, color: 'bg-indigo-500' },
                  { name: 'Facebook', value: 62, color: 'bg-blue-400' },
                  { name: 'Instagram', value: 45, color: 'bg-rose-400' },
                  { name: 'Direct', value: 30, color: 'bg-emerald-400' },
                ].map((channel, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-slate-600">{channel.name}</span>
                      <span className="text-slate-400">{channel.value}%</span>
                    </div>
                    <div className="w-full bg-slate-50 h-3 rounded-full overflow-hidden">
                      <div className={`${channel.color} h-full rounded-full transition-all duration-1000`} style={{ width: `${channel.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full py-4 bg-slate-50 hover:bg-slate-100 text-slate-500 font-bold text-sm rounded-2xl transition-all flex items-center justify-center gap-2 group">
                查看详细报告
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Table Section */}
          <section className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-10 py-8 border-b border-slate-50 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-800">最新链接资产</h2>
                <p className="text-sm text-slate-400 font-medium">Recently created promotion assets</p>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-100 transition-all font-bold text-sm">
                <Filter className="w-4 h-4" />
                <span>筛选</span>
              </button>
            </div>
            <LinkList />
          </section>
        </main>
      </div>

      {isModalOpen && <CreateLinkModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default App;
