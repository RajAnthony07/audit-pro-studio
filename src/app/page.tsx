"use client";
import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Lock, FileText, Activity } from 'lucide-react';

export default function AuditProStudio() {
  const [file, setFile] = useState<File | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleStartScan = async () => {
    if (!file) return alert("Please choose a file first!");
    setIsScanning(true);
    
    try {
      // Connects to your authenticated route.ts
      const response = await fetch('/api/audit', { method: 'POST' });
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Scan failed", error);
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#064e3b', color: 'white', fontFamily: 'sans-serif', padding: '40px 20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#022c22', borderRadius: '15px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '1px solid #065f46' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <Shield size={48} color="#10b981" style={{ marginBottom: '10px' }} />
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '1px' }}>10-POINT STUDIO SCAN</h1>
          <p style={{ color: '#6ee7b7', fontSize: '14px' }}>Global Compliance & Threat Verification</p>
        </div>

        {!results ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ border: '2px dashed #065f46', padding: '40px', borderRadius: '10px', marginBottom: '20px' }}>
              <input 
                type="file" 
                onChange={(e) => setFile(e.target.files?.[0] || null)} 
                style={{ marginBottom: '15px', display: 'block', margin: '0 auto' }}
              />
              <p style={{ fontSize: '12px', color: '#34d399' }}>Upload PDF, DOCX, or Image (Max 10MB)</p>
            </div>
            
            <button 
              onClick={handleStartScan}
              disabled={isScanning}
              style={{ width: '100%', padding: '15px', borderRadius: '8px', border: 'none', backgroundColor: '#10b981', color: 'white', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', transition: '0.3s' }}
            >
              {isScanning ? "ENGINE SCANNING..." : "START AUTHENTIC AUDIT"}
            </button>
          </div>
        ) : (
          <div style={{ animation: 'fadeIn 0.5s ease' }}>
            {/* 10-POINT RESULTS GRID */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '25px' }}>
              <div style={{ padding: '10px', background: '#064e3b', borderRadius: '5px' }}>
                <span style={{ fontSize: '11px', color: '#34d399' }}>SECURITY</span>
                <div style={{ fontWeight: 'bold', color: results.riskColor === 'red' ? '#ef4444' : (results.riskColor === 'yellow' ? '#f59e0b' : '#10b981') }}>
                   Malware: {results.malwareRisk}
                </div>
              </div>
              <div style={{ padding: '10px', background: '#064e3b', borderRadius: '5px' }}>
                <span style={{ fontSize: '11px', color: '#34d399' }}>AI SHIELD</span>
                <div style={{ fontWeight: 'bold' }}>{results.aiProbability}</div>
              </div>
              <div style={{ padding: '10px', background: '#064e3b', borderRadius: '5px' }}>
                <span style={{ fontSize: '11px', color: '#34d399' }}>PRIVACY</span>
                <div style={{ fontWeight: 'bold' }}>Leaks: {results.piiLeaks} Found</div>
              </div>
              <div style={{ padding: '10px', background: '#064e3b', borderRadius: '5px' }}>
                <span style={{ fontSize: '11px', color: '#34d399' }}>LIABILITY</span>
                <div style={{ fontWeight: 'bold', color: '#10b981' }}>Est: $0.00</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#065f46', padding: '20px', borderRadius: '10px', textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold' }}>{results.finalScore}%</div>
              <div style={{ fontSize: '12px', color: '#34d399' }}>FINAL STUDIO SCORE</div>
            </div>

            <button 
              style={{ width: '100%', padding: '15px', borderRadius: '8px', border: 'none', backgroundColor: '#f59e0b', color: '#000', fontWeight: 'bold', marginBottom: '10px' }}
            >
              UNLOCK FULL REPORT ($179)
            </button>
            <button 
              onClick={() => setResults(null)}
              style={{ width: '100%', background: 'transparent', border: '1px solid #065f46', color: '#34d399', padding: '10px', cursor: 'pointer' }}
            >
              SCAN ANOTHER FILE
            </button>
          </div>
        )}
        
        <div style={{ marginTop: '30px', borderTop: '1px solid #065f46', paddingTop: '20px', fontSize: '11px', color: '#34d399', textAlign: 'center' }}>
          {results?.studioVersion || "Audit-Pro v1.1 Active"} | Powered by DigitalRaj Studio
        </div>
      </div>
    </div>
  );
}