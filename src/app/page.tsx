import React from 'react';
import { ShieldAlert, Zap, CheckCircle2, Lock, ArrowRight, MousePointer2, Sparkles, Ticket } from 'lucide-react';

export default function AuditProStudio() {
  // Links for your Global and India customers
  const APPSUMO_URL = "https://appsumo.com/products/audit-pro-studio"; 
  const RAZORPAY_URL = "https://rzp.io/l/audit-pro-india"; 

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      
      {/* ─── 10% DISCOUNT PROMO BAR ─── */}
      <div className="relative z-[60] w-full bg-gradient-to-r from-red-600 via-orange-600 to-red-600 py-2.5 shadow-lg shadow-red-900/20">
        <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white text-center flex items-center justify-center gap-2">
          <Ticket className="w-3 h-3 animate-bounce" />
          Launch Special: 10% Discount Applied Automatically
          <Ticket className="w-3 h-3 animate-bounce" />
        </p>
      </div>

      {/* ─── DYNAMIC BACKGROUND GLOWS ─── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-red-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[20%] right-[0%] w-[50%] h-[50%] bg-orange-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-emerald-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute inset-0 opacity-[0.03] bg-[grid-white/10] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\' fill=\'%23fff\' fill-opacity=\'1\'/%3E%3C/svg%3E")' }} />
      </div>

      {/* ─── NAVIGATION BAR ─── */}
      <nav className="relative z-50 max-w-7xl mx-auto flex justify-between items-center px-8 py-10">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-red-600 via-orange-500 to-emerald-500 p-2 rounded-lg">
            <Lock className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black text-white tracking-tighter italic uppercase">Audit-Pro</span>
        </div>
        
        <button className="group flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-white hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md">
          Member Login
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <main className="relative z-10 flex flex-col items-center px-6 pt-12 pb-32">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-black uppercase tracking-[0.2em] mb-12">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          Global Compliance Engine v2.0
        </div>

        <h1 className="text-6xl md:text-9xl font-black text-white text-center mb-8 italic tracking-tighter leading-[0.85]">
          AUDIT THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-emerald-500">FUTURE.</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 text-center max-w-2xl font-medium mb-16">
          Military-grade AI analysis for your digital infrastructure. No code. Total security.
        </p>

        {/* ─── THE "NO-BLUNDER" BUTTON GROUP ─── */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl">
          
          {/* BUY BUTTON: 10% Discount Shown Clearly */}
          <a 
            href={APPSUMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/2 group relative flex flex-col items-center justify-center p-10 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-[2.5rem] transition-all hover:scale-[1.02] shadow-[0_20px_50px_rgba(16,185,129,0.25)]"
          >
            <Sparkles className="absolute top-5 right-5 w-6 h-6 opacity-30 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2 italic">Limited Launch Price</span>
            <span className="text-3xl font-black italic tracking-tighter uppercase mb-1">Buy License</span>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold opacity-50 line-through tracking-tighter">$199</span>
              <span className="text-2xl font-black tracking-tighter italic uppercase">$179 / Lifetime</span>
            </div>
          </a>

          {/* REDEEM BUTTON */}
          <button 
            className="w-full md:w-1/2 group relative flex flex-col items-center justify-center p-10 bg-white/5 border border-white/10 hover:border-orange-500/50 text-white rounded-[2.5rem] transition-all hover:bg-white/10 backdrop-blur-xl"
          >
            <MousePointer2 className="absolute top-5 right-5 w-6 h-6 opacity-20 text-orange-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 italic tracking-tighter">Already a Customer?</span>
            <span className="text-3xl font-black italic tracking-tighter uppercase mb-1 text-orange-400">Redeem Code</span>
            <span className="text-xl font-bold opacity-50 italic uppercase tracking-tighter">Enter Voucher</span>
          </button>

        </div>

        {/* SUBTLE LOCAL OPTION */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Official Partner: AppSumo • Whop</p>
          <a href={RAZORPAY_URL} className="text-xs font-bold text-emerald-500/60 hover:text-emerald-400 transition-all underline underline-offset-8">
            Paying from India? Click here for UPI (₹14,850 - 10% OFF)
          </a>
        </div>

        {/* ─── FEATURE GRID ─── */}
        <div className="grid md:grid-cols-3 gap-8 mt-36 w-full max-w-6xl px-4">
          <FeatureCard 
            icon={<ShieldAlert className="w-6 h-6 text-red-500" />}
            title="Risk Scan"
            desc="Identify vulnerabilities before they become liabilities."
            border="border-red-500/20"
          />
          <FeatureCard 
            icon={<Zap className="w-6 h-6 text-orange-400" />}
            title="AI Speed"
            desc="4.2s average audit time powered by proprietary neural cores."
            border="border-orange-500/20"
          />
          <FeatureCard 
            icon={<CheckCircle2 className="w-6 h-6 text-emerald-500" />}
            title="Verified"
            desc="Exportable compliance reports ready for investors and partners."
            border="border-emerald-500/20"
          />
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full py-16 border-t border-white/5 text-center mt-20">
        <p className="text-[10px] text-slate-700 font-black tracking-widest uppercase italic mb-2">
          Audit-Pro Studio &copy; 2026 • Teacher-Owned Innovation
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc, border }: any) {
  return (
    <div className={`p-10 bg-white/[0.02] backdrop-blur-3xl border ${border} rounded-[2.5rem] hover:-translate-y-3 transition-all duration-500 group text-center md:text-left`}>
      <div className="mx-auto md:mx-0 mb-8 bg-slate-900 w-14 h-14 flex items-center justify-center rounded-2xl border border-white/5 shadow-lg">
        {icon}
      </div>
      <h3 className="font-black text-white text-2xl mb-4 italic tracking-tighter uppercase">{title}</h3>
      <p className="text-slate-500 text-sm font-semibold leading-relaxed group-hover:text-slate-400 transition-colors">{desc}</p>
    </div>
  );
}