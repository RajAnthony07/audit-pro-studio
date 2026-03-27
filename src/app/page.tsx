"use client";

import React, { useState } from 'react';
import { Upload, ShieldCheck, FileText, Zap, Loader2, CheckCircle, DatabaseZap, SearchCode, DollarSign } from 'lucide-react';

export default function AuditProStudio() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditComplete, setAuditComplete] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setAuditComplete(false); // Reset audit state for new file
    }
  };

  const runAudit = () => {
    if (!fileName) return;
    setIsAuditing(true);
    // Simulate a complex 4-second audit scan
    setTimeout(() => {
      setIsAuditing(false);
      setAuditComplete(true);
    }, 4000);
  };

  return (
    <main className="min-h-screen">
      {/* 1. URGENCY: THE RED PROMO BAR */}
      <div className="bg-red-600 text-white py-3 px-4 text-center font-bold text-sm md:text-base animate-pulse shadow-lg sticky top-0 z-50">
        🚀 LIMITED LAUNCH: USE CODE "AUDIT10" FOR 10% OFF — GET IT FOR $179!
      </div>

      {/* 2. THE BRAND: PROFESSIONAL LOGO SPACING */}
      <nav className="p-6 border-b border-green-100 bg-white shadow-sm flex justify-between items-center max-w-screen-2xl mx-auto rounded-b-2xl">
        <h1 className="text-3xl font-black italic tracking-tightest">
          AUDIT <span className="text-orange-500 underline decoration-red-500">PRO</span> STUDIO
        </h1>
        <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-orange-500 hidden md:block">Compliance</a>
          <a href="#" className="hover:text-orange-500 hidden md:block">Security</a>
          <button className="bg-green-100 text-green-700 px-5 py-2 rounded-full hover:bg-green-200 transition-colors">
            Login
          </button>
        </div>
      </nav>

      {/* 3. THE COMMAND CENTER (Hero Section) */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <span className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-4">
          Industry-Leading Engine
        </span>
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-950 mb-6 leading-tight max-w-3xl mx-auto">
          Ultimate <span className="text-orange-500">Digital Auditing</span> & Global Compliance.
        </h2>
        <p className="text-xl text-gray-700 mb-16 max-w-2xl mx-auto">
          Scan files in seconds. Trusted by professionals worldwide. Get Full Access now.
        </p>

        {/* 4. THE ENGINE: ORANGE AUDIT DROP ZONE */}
        <div className={`p-10 md:p-14 drop-zone-glow border-4 border-dashed rounded-3xl transition-all mb-16 ${fileName ? 'border-green-400 bg-white' : 'border-orange-400 bg-orange-50/50'}`}>
          <input type="file" id="file-upload" className="hidden" onChange={handleFileChange} />
          
          <div className="flex flex-col items-center">
            
            {/* AUDIT VISUALS */}
            {!isAuditing && !auditComplete && (
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center text-white mb-8 shadow-2xl group-hover:scale-105 transition-transform">
                <Upload size={40} />
              </div>
            )}

            {isAuditing && (
              <div className="flex flex-col items-center mb-8">
                <Loader2 size={72} className="text-orange-500 animate-spin mb-4" />
                <p className="text-orange-700 font-black text-2xl animate-pulse">RUNNING ENGINE...</p>
              </div>
            )}

            {auditComplete && (
              <div className="flex flex-col items-center mb-8">
                <CheckCircle size={72} className="text-green-500 mb-4" />
                <p className="text-green-700 font-black text-2xl">AUDIT SUCCESSFUL!</p>
              </div>
            )}
            
            {/* FILE FEEDBACK */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {fileName ? fileName : "Step 1: Select Audit Files"}
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <label htmlFor="file-upload" className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-2xl font-bold text-lg transition-all active:scale-95">
                {fileName ? "CHANGE FILE" : "📁 CHOOSE FILES"}
              </label>
              
              {fileName && !isAuditing && !auditComplete && (
                <button onClick={runAudit} className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-2xl font-black text-xl btn-green-glow transition-all active:scale-95">
                  START AUDIT NOW
                </button>
              )}
            </div>
            
            <p className="text-sm font-bold text-orange-600/70 uppercase tracking-widest bg-white/60 px-4 py-1 rounded-full border border-orange-100">
              Supports PDF, CSV, XLSX (Max 50MB)
            </p>
          </div>
        </div>

        {/* 5. VALUE PROPOSITION: FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-left">
          <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-xl hover:shadow-2xl transition-shadow group">
            <SearchCode className="text-orange-500 mb-6 w-12 h-12" />
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Instant Scanning</h4>
            <p className="text-gray-600">Audit Pro Engine detects compliance issues, errors, and risks in seconds. Trusted Real-Time analysis.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-xl hover:shadow-2xl transition-shadow">
            <DollarSign className="text-green-500 mb-6 w-12 h-12" />
            <h4 className="text-2xl font-bold text-gray-900 mb-3">$179 Unlocks All</h4>
            <p className="text-gray-600">No subscriptions. One payment grants lifetime access to the full auditing suite and premium logic.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-xl hover:shadow-2xl transition-shadow">
            <DatabaseZap className="text-red-500 mb-6 w-12 h-12" />
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Global Compliance</h4>
            <p className="text-gray-600">Audit across GDPR, HIPAA, and ISO standards with up-to-date compliance databases.</p>
          </div>
        </div>

        {/* 6. CONVERSION: SALES BUTTONS */}
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center p-8 bg-green-950 rounded-3xl shadow-2xl">
          <Zap size={32} className="text-orange-400 hidden sm:block" />
          <h5 className="text-2xl font-bold text-white max-w-xs text-left hidden sm:block">
            Get Full Audit Access (Lifetime)
          </h5>
          <button 
            onClick={() => window.open('https://gumroad.com', '_blank')}
            className="w-full md:w-auto bg-green-500 text-white px-12 py-6 rounded-2xl font-black text-2xl btn-green-glow hover:bg-green-600 transition-all hover:scale-105"
          >
            BUY NOW ($179)
          </button>
          <button className="w-full md:w-auto border-2 border-green-800 text-green-300 px-10 py-6 rounded-2xl font-bold text-lg hover:bg-green-900 transition-colors">
            Redeem License
          </button>
        </div>
      </section>

      {/* 7. TRUST: FINAL FOOTER */}
      <footer className="bg-white px-6 py-10 border-t border-green-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-5 justify-center text-gray-600 font-bold uppercase text-xs tracking-widest">
             <ShieldCheck className="text-green-500" size={32} />
             256-bit AES Encryption | Real-time Analysis
          </div>
          <div className="text-red-600 font-black italic text-xl tracking-tighter">
            #1 Audit Tool 2026 Studio.
          </div>
        </div>
      </footer>
    </main>
  );
}