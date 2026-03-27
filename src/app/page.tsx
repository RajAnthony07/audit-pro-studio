"use client";

import React, { useState } from 'react';
import { Upload, ShieldCheck, FileText, Zap, Loader2, CheckCircle, DatabaseZap, SearchCode, DollarSign, AlertTriangle, BarChart3 } from 'lucide-react';

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
    }, 3500);
  };

  const handleDeadButton = (name: string) => {
    alert(`${name} system is being encrypted for your region. Full access available after $179 license activation.`);
  };

  return (
    <main className="min-h-screen bg-[#ecfdf5]">
      {/* 1. RED PROMO BAR */}
      <div className="bg-red-600 text-white py-3 px-4 text-center font-bold animate-pulse shadow-lg sticky top-0 z-50">
        🚀 LIMITED LAUNCH: USE CODE "AUDIT10" FOR 10% OFF — GET IT FOR $179!
      </div>

      {/* 2. NAVIGATION */}
      <nav className="p-6 border-b border-green-100 bg-white shadow-sm flex justify-between items-center max-w-screen-2xl mx-auto rounded-b-2xl">
        <h1 className="text-3xl font-black italic tracking-tighter">
          AUDIT <span className="text-orange-500 underline decoration-red-500">PRO</span> STUDIO
        </h1>
        <div className="flex items-center gap-6">
          <button onClick={() => handleDeadButton("Login")} className="text-sm font-bold uppercase text-gray-500 hover:text-orange-500">Compliance</button>
          <button onClick={() => handleDeadButton("Login")} className="bg-green-100 text-green-700 px-6 py-2 rounded-full font-bold hover:bg-green-200 transition-colors">
            Login
          </button>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-950 mb-6 leading-tight">
          Digital <span className="text-orange-500">Audit Engine</span>
        </h2>
        
        {/* 3. THE ENGINE INTERFACE */}
        <div className={`p-10 border-4 border-dashed rounded-3xl transition-all mb-12 ${auditComplete ? 'border-green-500 bg-white shadow-2xl' : 'border-orange-400 bg-white'}`}>
          <input type="file" id="file-upload" className="hidden" onChange={handleFileChange} />
          
          <div className="flex flex-col items-center">
            {isAuditing ? (
              <div className="flex flex-col items-center mb-8">
                <Loader2 size={72} className="text-orange-500 animate-spin mb-4" />
                <p className="text-orange-700 font-black text-2xl animate-pulse italic">ANALYZING {fileName?.toUpperCase()}...</p>
              </div>
            ) : auditComplete ? (
              <div className="w-full">
                <div className="flex items-center justify-center gap-3 text-green-600 font-black text-3xl mb-8">
                  <CheckCircle size={40} /> AUDIT SUCCESSFUL
                </div>
                
                {/* --- NEW AUDIT RESULTS PANEL --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                    <BarChart3 className="text-green-600 mx-auto mb-2" />
                    <p className="text-xs font-bold text-green-700 uppercase">Compliance Score</p>
                    <p className="text-3xl font-black text-gray-900">94%</p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                    <AlertTriangle className="text-red-600 mx-auto mb-2" />
                    <p className="text-xs font-bold text-red-700 uppercase">Risks Detected</p>
                    <p className="text-3xl font-black text-gray-900">02</p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
                    <DatabaseZap className="text-orange-600 mx-auto mb-2" />
                    <p className="text-xs font-bold text-orange-700 uppercase">Data Integrity</p>
                    <p className="text-3xl font-black text-gray-900">Verified</p>
                  </div>
                </div>
                
                <p className="text-gray-500 italic mb-6">Full detailed PDF report generated for {fileName}. Purchase license to download.</p>
              </div>
            ) : (
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white mb-6 shadow-xl"><Upload size={32} /></div>
            )}

            <h3 className="text-2xl font-bold mb-6">{fileName ? fileName : "Upload Document to Begin Scan"}</h3>
            
            <div className="flex gap-4">
              <label htmlFor="file-upload" className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold">
                {fileName ? "CHANGE FILE" : "📁 SELECT FILE"}
              </label>
              {fileName && !isAuditing && !auditComplete && (
                <button onClick={runAudit} className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-black shadow-xl animate-bounce">
                  RUN PRO AUDIT
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 4. CONVERSION BOX */}
        <div className="bg-green-950 p-10 rounded-[40px] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-t-4 border-orange-500">
          <div className="text-left">
            <h4 className="text-white text-3xl font-black mb-2 italic">UNLOCK FULL POTENTIAL</h4>
            <p className="text-green-400 font-medium">Remove watermarks and download full compliance reports.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button 
              onClick={() => window.open('https://gumroad.com', '_blank')}
              className="bg-green-500 text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-green-400 transition-all hover:scale-105 shadow-[0_0_30px_rgba(34,197,94,0.4)]"
            >
              BUY NOW ($179)
            </button>
            <button 
              onClick={() => handleDeadButton("License Redemption")}
              className="border-2 border-green-700 text-green-300 px-10 py-6 rounded-2xl font-bold hover:bg-green-900 transition-colors"
            >
              Redeem License
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 border-t border-green-100 text-center">
        <p className="text-red-600 font-black italic text-xl tracking-tighter">#1 Audit Tool 2026 Studio.</p>
      </footer>
    </main>
  );
}