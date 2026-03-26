"use client";

import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Home() {
  const [fileName, setFileName] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [status, setStatus] = useState("idle");
  const [auditResult, setAuditResult] = useState("");

  const handleFileChange = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);
    try {
      const text = await file.text();
      setFileContent(text.slice(0, 10000));
    } catch (err) {
      console.error("File read error", err);
    }
  };

  const startRealAudit = async () => {
    if (!fileContent) return;
    setStatus("loading");
    try {
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Perform a high-level professional audit of: "${fileName}". 
      Analyze for: Professionalism, Clarity, and Grammar. 
      Output: 1. Professional Score (1-10), 2. Top 3 Improvements, 3. Content Summary.
      Text: ${fileContent}`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      setAuditResult(response.text());
      setStatus("success");
    } catch (error) {
      setAuditResult("⚠️ API Error: Check your Gemini Key in .env.local");
      setStatus("success");
    }
  };

  const downloadPDF = async () => {
    const html2pdf = (await import('html2pdf.js')).default;
    const element = document.getElementById('report-content');
    
    // Safety Check: If the element isn't there, stop here!
    if (!element) return;

    const opt = {
      margin: 1,
      filename: `Audit_Report_${fileName}.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 }, 
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in' as const, format: 'letter' as const, orientation: 'portrait' as const }
    };
    
    html2pdf().set(opt).from(element).save();
  };

  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-[2rem] overflow-hidden border border-slate-200">
        <div className="bg-slate-900 p-8 text-white text-center">
          <h1 className="text-4xl font-black tracking-tighter mb-2 italic">AUDIT PRO <span className="text-emerald-400">STUDIO</span></h1>
          <p className="text-slate-400 text-xs uppercase tracking-[0.3em] font-bold">Enterprise AI Document Verification</p>
        </div>

        <div className="p-10">
          {status !== "success" ? (
            <div className="flex flex-col items-center space-y-6">
              <div className="w-full border-4 border-dashed border-slate-100 rounded-3xl p-12 bg-slate-50/50 text-center">
                <p className="text-xl font-bold text-slate-700 mb-6">{fileName || "Drop Document Here"}</p>
                {!fileName ? (
                  <label className="bg-slate-900 text-white px-12 py-4 rounded-xl cursor-pointer hover:scale-105 transition-transform inline-block font-bold">
                    SELECT FILE <input type="file" className="hidden" onChange={handleFileChange} />
                  </label>
                ) : (
                  <button onClick={startRealAudit} disabled={status === "loading"} className="bg-emerald-500 text-white px-12 py-4 rounded-xl hover:bg-emerald-600 shadow-xl font-black transition-all">
                    {status === "loading" ? "AI ANALYZING..." : "START AI AUDIT"}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <div id="report-content" className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-inner">
                <h2 className="text-2xl font-black text-slate-900 mb-6 border-b-4 border-emerald-400 inline-block">OFFICIAL AUDIT REPORT</h2>
                <div className="text-slate-700 whitespace-pre-wrap leading-relaxed prose prose-slate">{auditResult}</div>
              </div>
              <div className="flex gap-4 mt-8">
                <button onClick={downloadPDF} className="flex-1 py-4 bg-indigo-600 text-white rounded-xl font-black hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">
                  📥 DOWNLOAD REPORT (PDF)
                </button>
                <button onClick={() => {setFileName(""); setStatus("idle"); setAuditResult("");}} className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-500 rounded-xl font-bold hover:bg-slate-50">
                  NEW AUDIT
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="mt-8 text-slate-400 text-[10px] font-bold uppercase tracking-widest">© 2026 Audit Pro Studio • AI Powered Verification</p>
    </main>
  );
}