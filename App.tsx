
import React, { useState } from 'react';
import { 
  Search, 
  Plus,
  RefreshCcw,
  ChevronDown,
  LayoutGrid,
  Filter,
  Layers,
  Activity,
  Archive,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Database
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CreateLinkModal from './components/CreateLinkModal';

const platforms = ['Facebook', 'TikTok', 'Kwai', 'Google', 'OKSpin'];

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePlatform, setActivePlatform] = useState('Facebook');
  const [showHidden, setShowHidden] = useState(false);
  const [userName] = useState('Alex Rivers');

  const mockPixels = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: i === 0 ? 'FB_Retargeting_Main' : (i < 4 ? `Pixel_Asset_#00${i}` : `Landing_Page_Pixel_${i}`),
    pixelId: i === 0 ? '647966601645150' : `78201923${i}4291`,
    token: i < 3 ? 'EAAGm0PX4ZCpsBA...' : 'N/A',
    eventCode: i < 3 ? 'TEST_77192' : '-',
    status: i % 3 === 0 ? 'Active' : 'Idle',
    created: `2025-12-${25 - i} 14:20`
  }));

  return (
    <div className="flex min-h-screen bg-[#fcfcfd]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header userName={userName} />

        <main className="px-10 py-8 max-w-[1600px] mx-auto w-full space-y-6">
          {/* Header & Quick Action Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">像素管理中心</h1>
              <p className="text-sm text-slate-400 font-medium">监测您的全渠道转化追踪资产</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
                <RefreshCcw className="w-4 h-4" />
                同步状态
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2.5 indigo-gradient text-white rounded-xl font-bold text-sm shadow-xl shadow-indigo-100 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
              >
                <Plus className="w-4 h-4" strokeWidth={3} />
                添加新像素
              </button>
            </div>
          </div>

          {/* Mini Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: '总像素数量', value: '1,284', icon: <Layers className="w-5 h-5 text-indigo-500" />, bg: 'bg-indigo-50' },
              { label: '本月活跃', value: '842', icon: <Activity className="w-5 h-5 text-emerald-500" />, bg: 'bg-emerald-50' },
              { label: '未配置资产', value: '12', icon: <Archive className="w-5 h-5 text-amber-500" />, bg: 'bg-amber-50' },
              { label: '数据库节点', value: 'Primary', icon: <Database className="w-5 h-5 text-slate-500" />, bg: 'bg-slate-50' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  <p className="text-xl font-black text-slate-800 tracking-tight">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Advanced Filter Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">像素名称</label>
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-indigo-500 transition-colors" />
                  <input type="text" placeholder="搜索名称或ID..." className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-indigo-100 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">数据状态</label>
                <div className="relative">
                  <select className="appearance-none w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-600 outline-none cursor-pointer">
                    <option>全部状态</option>
                    <option>活跃中 (Active)</option>
                    <option>已停用 (Idle)</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">创建时间</label>
                <div className="relative">
                  <input type="date" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 outline-none" />
                </div>
              </div>
              <div className="md:col-span-2 flex items-end gap-3">
                <button className="flex-1 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-100">查询数据</button>
                <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:text-indigo-500 transition-colors border border-slate-100">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Table Content Card */}
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
            {/* Table Header with Tabs */}
            <div className="px-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/20">
              <div className="flex gap-8">
                {platforms.map(p => (
                  <button 
                    key={p}
                    onClick={() => setActivePlatform(p)}
                    className={`py-5 text-sm font-black relative transition-all ${activePlatform === p ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    {p}
                    {activePlatform === p && <div className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 rounded-full"></div>}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">包含已隐藏</span>
                  <button 
                    onClick={() => setShowHidden(!showHidden)}
                    className={`w-10 h-5 rounded-full p-0.5 transition-all ${showHidden ? 'bg-indigo-600' : 'bg-slate-200'}`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-all ${showHidden ? 'translate-x-5' : 'translate-x-0'}`}></div>
                  </button>
                </div>
                <LayoutGrid className="w-4 h-4 text-slate-300 cursor-pointer hover:text-slate-600 transition-colors" />
              </div>
            </div>

            {/* List */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/30">
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">像素名称 / 识别码</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Token & 事件代码</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">运行状态</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">创建日期</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">管理</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {mockPixels.map((pixel) => (
                    <tr key={pixel.id} className="hover:bg-indigo-50/20 transition-all group">
                      <td className="px-8 py-6">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-sm font-black text-slate-800 group-hover:text-indigo-600 transition-colors">{pixel.name}</span>
                          <span className="text-xs font-medium text-slate-400 font-mono tracking-tighter">ID: {pixel.pixelId}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-xs font-bold text-slate-500 truncate max-w-[150px]">{pixel.token}</span>
                          <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">{pixel.eventCode}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                          pixel.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${pixel.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></div>
                          {pixel.status}
                        </span>
                      </td>
                      <td className="px-6 py-6 text-sm font-medium text-slate-400">{pixel.created}</td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-400 hover:text-indigo-600 transition-all font-bold text-xs uppercase tracking-widest">编辑</button>
                          <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-400 hover:text-rose-500 transition-all font-bold text-xs uppercase tracking-widest">隐藏</button>
                          <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors"><MoreVertical className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-8 py-6 bg-slate-50/30 flex items-center justify-between border-t border-slate-50">
              <span className="text-xs font-bold text-slate-400">显示第 1-8 条，共 10 条记录</span>
              <div className="flex items-center gap-1">
                <button className="p-2 text-slate-300 hover:text-indigo-600 transition-colors"><ChevronsLeft className="w-4 h-4" /></button>
                <button className="p-2 text-slate-300 hover:text-indigo-600 transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                <button className="w-8 h-8 rounded-lg bg-indigo-600 text-white text-xs font-black mx-2">1</button>
                <button className="p-2 text-slate-300 hover:text-indigo-600 transition-colors"><ChevronRight className="w-4 h-4" /></button>
                <button className="p-2 text-slate-300 hover:text-indigo-600 transition-colors"><ChevronsRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {isModalOpen && <CreateLinkModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default App;
