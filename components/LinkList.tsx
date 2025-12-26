
import React from 'react';
import { ExternalLink, Copy, MoreHorizontal, MousePointer2, Clock, Globe } from 'lucide-react';

const mockLinks = [
  { id: 1, short: 'pwa.cn/cyberpunk-sale', original: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077', clicks: '14,284', status: 'Live', created: '2025-11-20', type: 'Game' },
  { id: 2, short: 'pwa.cn/summer-collection', original: 'https://fashion.xyz/collections/summer-2025/new', clicks: '9,852', status: 'Live', created: '2025-11-21', type: 'E-commerce' },
  { id: 3, short: 'pwa.cn/api-docs-v2', original: 'https://docs.pwa-center.com/api/webhooks/v1/beta', clicks: '4,210', status: 'Paused', created: '2025-11-19', type: 'Dev' },
  { id: 4, short: 'pwa.cn/newsletter-sub', original: 'https://medium.com/@rivers/growth-hacks-2025', clicks: '3,342', status: 'Live', created: '2025-11-22', type: 'Content' },
];

const LinkList: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-slate-50/50">
            <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Promotion Asset</th>
            <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Target Destination</th>
            <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Traffic</th>
            <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Status</th>
            <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {mockLinks.map((link) => (
            <tr key={link.id} className="hover:bg-indigo-50/20 transition-all duration-300 group relative cursor-pointer">
              <td className="px-10 py-8 relative">
                {/* Hover Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 tracking-tight text-base group-hover:text-indigo-600 transition-colors">{link.short}</span>
                    <button className="p-1.5 opacity-0 group-hover:opacity-100 bg-white shadow-sm border border-slate-100 rounded-lg transition-all hover:text-indigo-600 hover:shadow-md active:scale-95">
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">{link.type}</span>
                </div>
              </td>
              <td className="px-10 py-8">
                <div className="flex flex-col gap-1 max-w-[300px]">
                  <p className="truncate text-sm text-slate-500 font-medium group-hover:text-slate-700 transition-colors">{link.original}</p>
                  <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {link.created}</span>
                    <span className="flex items-center gap-1 group-hover:text-indigo-400 transition-colors"><Globe className="w-3 h-3" /> Global</span>
                  </div>
                </div>
              </td>
              <td className="px-10 py-8">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-white group-hover:shadow-sm transition-all flex items-center justify-center">
                    <MousePointer2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                  </div>
                  <span className="text-base font-extrabold text-slate-700 tracking-tight group-hover:scale-105 transition-transform">{link.clicks}</span>
                </div>
              </td>
              <td className="px-10 py-8">
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full shadow-sm transition-all duration-300 ${
                  link.status === 'Live' ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:shadow-emerald-100' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${link.status === 'Live' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></div>
                  <span className="text-xs font-black uppercase tracking-widest">{link.status}</span>
                </div>
              </td>
              <td className="px-10 py-8 text-right">
                <div className="flex items-center justify-end gap-3">
                  <button className="w-10 h-10 flex items-center justify-center hover:bg-white shadow-sm border border-transparent hover:border-slate-100 rounded-xl text-slate-400 hover:text-indigo-600 transition-all duration-300 active:scale-95">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center hover:bg-white shadow-sm border border-transparent hover:border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 transition-all duration-300 active:scale-95">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LinkList;
