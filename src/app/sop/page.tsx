'use client'; // 必须加上这一行，因为我们要用到点击切换功能（useState）

import { useState } from 'react';

export default function SopPage() {
  // 定义当前显示的工具状态
  const [activeTool, setActiveTool] = useState<'ins' | 'dy'>('ins');

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden">
      {/* 顶部导航 */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200 shadow-sm z-10">
        <div className="flex items-center gap-4">
          <a href="/" className="text-slate-400 hover:text-indigo-600 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </a>
          <h1 className="text-lg font-bold text-slate-800 tracking-tight border-l pl-4 border-slate-200">
            珠宝变现执行工作台
          </h1>
        </div>

        {/* 切换按钮组 */}
        <div className="flex bg-slate-100 p-1 rounded-2xl">
          <button
            onClick={() => setActiveTool('ins')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
              activeTool === 'ins' 
                ? 'bg-white text-indigo-600 shadow-md' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Instagram 下载
          </button>
          <button
            onClick={() => setActiveTool('dy')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
              activeTool === 'dy' 
                ? 'bg-white text-indigo-600 shadow-md' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            抖音下载
          </button>
        </div>
      </nav>

      {/* iframe 容器 */}
      <main className="flex-1 w-full bg-white relative">
        {activeTool === 'ins' ? (
          <iframe
            src="https://ytdlp.willingwind.workers.dev/"
            className="w-full h-full border-none"
            title="Ins Downloader"
          />
        ) : (
          <iframe
            src="https://douyin.willingwater.com/"
            className="w-full h-full border-none"
            title="Douyin Downloader"
          />
        )}
      </main>
    </div>
  );
}