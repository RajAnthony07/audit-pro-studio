"use client";

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-red-500/30">
      {/* 10% DISCOUNT PROMO BAR - BRIGHT RED */}
      <div className="bg-[#dc2626] py-4 text-center border-b border-white/10 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
        <p className="text-sm font-black tracking-widest uppercase animate-pulse">
          🚀 LIMITED LAUNCH: USE CODE "AUDIT10" FOR 10% OFF — GET IT FOR $179!
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-32 text-center">
        {/* LARGE GLOWING TITLE */}
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-6 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
          Audit Pro Studio
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16 font-medium">
          The ultimate digital engine for global compliance and professional auditing.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* EMERALD GREEN BUY BUTTON - $179 */}
          <button className="px-12 py-6 bg-[#10b981] hover:bg-[#059669] text-black font-extrabold text-2xl rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all hover:scale-105 uppercase tracking-tight">
            Get Full Access ($179)
          </button>
          
          {/* AMBER REDEEM BUTTON */}
          <button className="px-12 py-6 bg-transparent border-4 border-[#f59e0b] text-[#f59e0b] font-extrabold text-2xl rounded-2xl hover:bg-[#f59e0b] hover:text-black transition-all uppercase tracking-tight">
            Redeem License
          </button>
        </div>
      </div>
      
      {/* BACKGROUND GLOWS */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/20 blur-[120px] rounded-full" />
      </div>
    </main>
  );
}