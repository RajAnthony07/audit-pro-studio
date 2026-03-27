"use client";

import React, { useState } from 'react';
import { Upload, ShieldCheck, FileText, Zap } from 'lucide-react';

export default function AuditProStudio() {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* 1. THE RED PROMO BAR (Urgency) */}
      <div className="bg-red-600 text-white py-3 px-4 text-center font-bold text-sm md:text-base animate-pulse shadow-lg">
        🚀 LIMITED LAUNCH: USE CODE "AUDIT10" FOR 10% OFF — GET IT FOR $179!
      </div>

      {/* NAVIGATION */}
      <nav className="p-6 border-b border-gray-100 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-black italic tracking-tighter text-gray-900">
          AUDIT<span className="text-orange-500">PRO</span> STUDIO
        </h1>
        <div className="hidden md:flex space-x-6 text-sm font-semibold text-gray-600">
          <a href="#" className="hover:text-orange-500">Compliance</a>
          <a href="#" className="hover:text-orange-500">Security</a>
          <a href="#" className="hover:text-orange-500">Pricing</a>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        {/* HERO HEADER */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          The Ultimate Digital Engine for <br />
          <span className="text-orange-500 underline decoration-red-500">Global Compliance.</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Professional auditing and real-time scanning. Trusted by industry experts worldwide.
        </p>

        {/* 2. THE ORANGE AUDIT DROP ZONE (Functionality) */}
        <div className="relative group p-10 border-4 border-dashed border-orange-400 rounded-3xl bg-orange-50 transition-all hover:bg-orange-100 mb-8">
          <input 
            type="file" 
            id="file-upload" 
            className="hidden" 
            onChange={handleFileChange} 
          />
          
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 transition-transform">
              <Upload size={32} />
            </div>
            
            <h3 className="text-2xl font-bold text-orange-700 mb-2">
              {fileName ? "File Ready for Audit" : "Step 1: Select Audit Files"}
            </h3>
            
            {fileName && (
              <div className="bg-white px-4 py-2 rounded-full border border-orange-200 text-orange-600 font-medium mb-4 flex items-center gap-2">
                <FileText size={16} /> {fileName}
              </div>
            )}

            <label 
              htmlFor="file-upload" 
              className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl font-black text-lg shadow-2xl hover:shadow-green-200 transition-all active:scale-95"
            >
              {fileName ? "CHANGE FILE" : "📁 CHOOSE FILES TO AUDIT"}
            </label>
            
            <p className="mt-6 text-sm font-bold text-orange-600/70 uppercase tracking-widest">
              Supports PDF, CSV, XLSX (Max 50MB)
            </p>
          </div>
        </div>

        {/* 3. THE GREEN ACTION BUTTONS (Sales) */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="w-full md:w-auto bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-black transition-colors">
            <Zap size={20} className="text-orange-400" /> Get Full Access ($179)
          </button>
          <button className="w-full md:w-auto border-2 border-gray-200 text-gray-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors">
            Redeem License
          </button>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <ShieldCheck className="text-green-500" size={40} />
            <div>
              <h4 className="font-bold">Enterprise Grade</h4>
              <p className="text-sm text-gray-500">256-bit AES Encryption</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Zap className="text-orange-500" size={40} />
            <div>
              <h4 className="font-bold">Real-time Analysis</h4>
              <p className="text-sm text-gray-500">Scan results in seconds</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start text-red-500 font-black italic">
            #1 Audit Tool 2026
          </div>
        </div>
      </footer>
    </main>
  );
}