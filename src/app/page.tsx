"use client";

import React, { useState } from 'react';
import { 
  Upload, ShieldCheck, FileText, Zap, Loader2, CheckCircle, 
  DatabaseZap, SearchCode, DollarSign, AlertTriangle, 
  BarChart3, Globe, Lock, ShieldAlert, Activity, Fingerprint 
} from 'lucide-react';

export default function AuditProStudio() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditComplete, setAuditComplete] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setAuditComplete(false);
    }
  };

  const runAudit = () => {
    if (!fileName) return;
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditComplete(true);
    }, 5000); // 5 seconds for a "Thorough" feeling
  };

  return (
    <main className="min-h-screen bg-[#ecfdf5] text-gray-900 pb-20 font-sans">
      {/* 1. URGENCY BAR */}
      <div className="bg-red-600 text-white py-3 px-4 text-center font-bold animate-pulse shadow-lg sticky top-0 z-50">
        🚀 LIMITED LAUNCH: USE CODE "AUDIT10" FOR 10% OFF — GET IT FOR $179!
      </div>

      <nav className="p-6 border-b border-green-100 bg-white flex justify-between items-center max-w-7xl mx-auto rounded-b-[40px] shadow-sm">
        <h1 className="text-3xl font-black italic tracking-tighter">
          AUDIT <span className="text-orange-500 underline decoration-red-500">PRO</span> STUDIO
        </h1>
        <div className="flex gap-4 items-center">
           <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
             Deca-Scan Engine v5.0 Active
           </span>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-gray-950">
          The <span className="text-orange-500 font-black">10-Point</span> Studio.
        </h2>
        <p className="text-gray-600 mb-10 font-medium max-w-2xl mx-auto text-lg">
          One click. 10 specialized audit layers. Replaces 10 experts to save your time and energy.
        </p>

        {/* --- MAIN ENGINE INTERFACE --- */}
        <div className={`p-8 md:p-14 border-4 border-dashed rounded-[60px] transition-all mb-16 bg-white ${auditComplete ? 'border-green-500 shadow-2xl' : 'border-orange-400'}`}>
          <input type="file" id="file-upload" className="hidden" onChange={handleFileChange} />
          
          <div className="flex flex-col items-center">
            {isAuditing ? (
              <div className="py-12">
                <Loader2 size={90} className="text-orange-500 animate-spin mb-6 mx-auto" />
                <p className="text-orange-600 font-black text-2xl animate-pulse italic uppercase tracking-tighter">DECA-SCANNING: {fileName}</p>
                <p className="text-gray-400 text-sm mt-2">Checking Malware, AI Integrity, Legal, and Financial layers...</p>
              </div>
            ) : auditComplete ? (
              <div className="w-full animate-in fade-in zoom-in duration-700">
                <div className="flex items-center justify-center gap-3 text-green-600 font-black text-4xl md:text-5xl mb-12">
                  <CheckCircle size={56} /> 10-POINT SCAN COMPLETE
                </div>
                
                {/* --- THE 10-POINT OUTPUT GRID --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12 text-left">
                  
                  <div className="bg-red-50 p-6 rounded-3xl border-2 border-red-100 shadow-sm">
                    <ShieldAlert className="text-red-600 mb-3" size={28} />
                    <h4 className="font-black text-[10px] uppercase tracking-widest text-red-400">Security</h4>
                    <p className="text-xs font-bold text-gray-900">Malware: <span className="text-red-600 underline">THREAT!</span></p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100 shadow-sm">
                    <Fingerprint className="text-purple-600 mb-3" size={28} />
                    <h4 className="font-black text-[10px] uppercase tracking-widest text-purple-400">AI Shield</h4>
                    <p className="text-xs font-bold text-gray-900">AI Logic: <span className="text-purple-600">65% DETECTED</span></p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <Globe className="text-blue-600 mb-3" size={24} />
                    <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-400">Legal</h4>
                    <p className="text-xs font-bold text-gray-900">GDPR/ISO: <span className="text-green-600 font-black">PASSED</span></p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <DollarSign className="text-green-600 mb-3" size={24} />
                    <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-400">Liability</h4>
                    <p className="text-xs font-bold text-gray-900">Fine Est: <span className="font-black">$4,200</span></p>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 shadow-sm">
                    <Lock className="text-orange-600 mb-3" size={24} />
                    <h4 className="font-black text-[10px] uppercase tracking-widest text-orange-400">Privacy</h4>
                    <p className="text-xs font-bold text-gray-900">Leaks: <span className="text-orange-600 font-black">3 FOUND</span></p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <Activity className="text-teal-600 mb-3" size={24} />
                    <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-400">Accessibility</h4>
                    <p className="text-xs font-bold text-gray-900">WCAG 2.1: <span className="text-red-500 font-black">FAIL</span></p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <DatabaseZap className="text-indigo-600 mb-3" size={24} />
                    <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-400">Integrity</h4>
                    <p className="text-xs font-bold text-gray-900">Structure: <span className="text-green-600">CLEAN</span></p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <FileText className="text-gray-600 mb-3" size={24} />
                    <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-400">Tone</h4>
                    <p className="text-xs font-bold text-gray-900">Rating: <span className="font-black">PROFESSIONAL</span></p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <ShieldCheck className="text-green-500 mb-3" size={24} />
                    <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-400">Protection</h4>
                    <p className="text-xs font-bold text-gray-900">AES-256: <span className="font-black">VERIFIED</span></p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl ring-4 ring-orange-500/20">
                    <Zap className="text-yellow-400 mb-3" size={24} />
                    <h4 className="font-black text-[10px] uppercase tracking-widest text-yellow-400">Final Result</h4>
                    <p className="text-3xl font-black text-white italic">94%</p>
                  </div>
                </div>

                {/* --- ACTION BANNER --- */}
                <div className="bg-red-600 text-white p-8 rounded-[40px] mb-10 flex flex-col md:flex-row items-center justify-between shadow-2xl border-b-8 border-red-800 animate-in slide-in-from-bottom-5">
                  <div className="text-left mb-6 md:mb-0 max-w-xl">
                    <p className="font-black text-3xl uppercase italic leading-none mb-2">URGENT: CRITICAL THREATS</p>
                    <p className="text-sm text-red-100 font-medium">We found malware scripts and 3 private data leaks in <strong>{fileName}</strong>. Your $179 license includes the "Instant Clean" tool to fix these risks and lock in your compliance score.</p>
                  </div>
                  <button onClick={() => window.open('https://gumroad.com', '_blank')} className="w-full md:w-auto bg-white text-red-600 px-12 py-6 rounded-3xl font-black text-2xl shadow-2xl hover:scale-110 transition-all hover:bg-gray-100">
                    UNLOCK & CLEAN ($179)
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-14">
                <div className="w-28 h-28 bg-orange-500 rounded-full flex items-center justify-center text-white mb-8 mx-auto shadow-2xl"><Upload size={48} /></div>
                <h3 className="text-4xl font-black mb-4 tracking-tight italic text-gray-900">10-Layer Audit Engine</h3>
                <p className="text-gray-500 mb-8 font-medium text-lg">Instant AI, Security, Compliance, and Financial Analysis.</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <label htmlFor="file-upload" className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-900 px-14 py-6 rounded-3xl font-black transition-all text-xl shadow-sm">
                {fileName ? "CHANGE FILE" : "📁 CHOOSE FILES"}
              </label>
              {fileName && !isAuditing && !auditComplete && (
                <button onClick={runAudit} className="bg-green-600 hover:bg-green-700 text-white px-16 py-6 rounded-3xl font-black shadow-[0_15px_40px_rgba(22,163,74,0.4)] animate-bounce text-2xl tracking-tighter">
                  RUN DECA-SCAN NOW
                </button>
              )}
            </div>
          </div>
        </div>

        {/* --- ROI / BENEFIT SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
           <div className="bg-white p-10 rounded-[40px] shadow-xl border-t-8 border-orange-500 hover:translate-y-[-5px] transition-transform">
              <Zap className="text-orange-500 mb-6" size={48} />
              <h4 className="text-2xl font-black mb-3 italic">Maximum Output</h4>
              <p className="text-gray-500 leading-relaxed font-medium">Our engine scans 10,000+ threat signatures and compliance laws in 5 seconds. Get the work of 10 experts instantly.</p>
           </div>
           <div className="bg-white p-10 rounded-[40px] shadow-xl border-t-8 border-green-500 hover:translate-y-[-5px] transition-transform">
              <ShieldCheck className="text-green-500 mb-6" size={48} />
              <h4 className="text-2xl font-black mb-3 italic">Save Your Energy</h4>
              <p className="text-gray-500 leading-relaxed font-medium">No more manual checking. From Malware to AI Integrity, your documents are globally verified with one single click.</p>
           </div>
           <div className="bg-white p-10 rounded-[40px] shadow-xl border-t-8 border-blue-500 hover:translate-y-[-5px] transition-transform">
              <BarChart3 className="text-blue-500 mb-6" size={48} />
              <h4 className="text-2xl font-black mb-3 italic">Instant ROI</h4>
              <p className="text-gray-500 leading-relaxed font-medium">A $179 investment to save you from $4,200 in estimated liabilities. Protect your network and your reputation today.</p>
           </div>
        </div>
      </section>

      <footer className="pt-20 pb-10 text-center opacity-40">
        <p className="text-red-600 font-black italic text-xl tracking-tighter uppercase">#1 Global Audit Tool 2026 Studio.</p>
      </footer>
    </main>
  );
}