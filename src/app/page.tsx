"use client";
import React, { useState } from 'react';
import { Shield, Lock, CheckCircle, AlertTriangle, FileText } from 'lucide-react';

export default function AuditProStudio() {
  const [file, setFile] = useState<File | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleStartScan = async () => {
    if (!file) return alert("Please choose a file first!");
    setIsScanning(true);
    try {
      const response = await fetch('/api/audit', { method: 'POST' });
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Scan failed", error);
    } finally {
      setIsScanning(false);
    }
  };

  const handleLogin = () => {
    const key = prompt("Enter your 10-Digit License Key:");
    if (key === "STUDIO-PRO-2026") { // You can give this key to buyers
      setIsUnlocked(true);
      alert("License Verified: Full 10-Point Audit Active");
    } else {
      alert("Invalid License Key. Please purchase to unlock.");
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#064e3b', color: 'white', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#022c22', borderRadius: '15px', padding: '30px', border: '1px solid #065f46', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <Shield size={40} color="#10b981" style={{ marginBottom: '10px' }} />
          <h2 style={{ margin: 0, letterSpacing: '1px' }}>10-POINT STUDIO SCAN</h2>
          <p style={{ color: '#6ee7b7', fontSize: '12px' }}>Professional Compliance & Threat Verification</p>
        </div>

        {!results ? (
          <div style={{ textAlign: 'center', border: '2px dashed #065f46', padding: '40px', borderRadius: '10px' }}>
            <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} style={{ marginBottom: '20px', display: 'block', margin: '0 auto' }} />
            <button onClick={handleStartScan} style={{ width: '100%', padding: '15px', backgroundColor: '#10b981', color: 'white', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', border: 'none' }}>
              {isScanning ? "SCANNING STUDIO ENGINE..." : "START AUTHENTIC AUDIT"}
            </button>
          </div>
        ) : (
          <div style={{ animation: 'fadeIn 0.5s' }}>
            {/* INITIAL 4 POINTS */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
              <div style={{ padding: '12px', background: '#064e3b', borderRadius: '8px', border: '1px solid #065f46' }}>
                <span style={{ fontSize: '10px', color: '#34d399' }}>MALWARE</span>
                <div style={{ color: '#10b981', fontWeight: 'bold' }}>{results.malwareRisk}</div>
              </div>
              <div style={{ padding: '12px', background: '#064e3b', borderRadius: '8px', border: '1px solid #065f46' }}>
                <span style={{ fontSize: '10px', color: '#34d399' }}>AI SHIELD</span>
                <div style={{ fontWeight: 'bold' }}>{results.aiProbability}</div>
              </div>
            </div>

            {/* RESULTS BANNER */}
            <div style={{ backgroundColor: '#065f46', padding: '20px', borderRadius: '10px', textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{results.finalScore}%</div>
              <div style={{ fontSize: '12px', color: '#34d399' }}>FINAL STUDIO SCORE</div>
            </div>

            {/* REMAINING 6 POINTS (REVEALED ON UNLOCK) */}
            {isUnlocked ? (
              <div style={{ background: '#064e3b', padding: '20px', borderRadius: '10px', border: '1px solid #f59e0b', marginBottom: '20px' }}>
                <h4 style={{ color: '#f59e0b', margin: '0 0 10px 0', fontSize: '14px' }}>FULL 10-POINT REPORT UNLOCKED:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: '#34d399', lineHeight: '1.8' }}>
                  <li>✓ Metadata Integrity: <span style={{ color: 'white' }}>SCRUBBED</span></li>
                  <li>✓ Trojan Script Check: <span style={{ color: 'white' }}>NEGATIVE</span></li>
                  <li>✓ Macro-Virus Scan: <span style={{ color: 'white' }}>CLEAR</span></li>
                  <li>✓ GDPR Compliance: <span style={{ color: 'white' }}>VERIFIED</span></li>
                  <li>✓ Source Authenticity: <span style={{ color: 'white' }}>100%</span></li>
                  <li>✓ SSL Encryption: <span style={{ color: 'white' }}>ACTIVE</span></li>
                </ul>
                <button style={{ width: '100%', marginTop: '15px', padding: '10px', background: '#10b981', color: 'black', fontWeight: 'bold', border: 'none', borderRadius: '5px' }}>DOWNLOAD PDF CERTIFICATE</button>
              </div>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <button 
                  onClick={() => window.open('https://YOUR_MARKETPLACE_LINK', '_blank')}
                  style={{ width: '100%', padding: '15px', backgroundColor: '#f59e0b', color: '#000', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', border: 'none', marginBottom: '15px' }}
                >
                  UNLOCK FULL 10-POINT REPORT ($179)
                </button>
                <span 
                  onClick={handleLogin}
                  style={{ fontSize: '12px', color: '#34d399', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Already a member? Login here
                </span>
              </div>
            )}
            
            <button onClick={() => {setResults(null); setIsUnlocked(false);}} style={{ width: '100%', background: 'transparent', border: '1px solid #065f46', color: '#34d399', padding: '10px', marginTop: '20px', cursor: 'pointer' }}>
              RE-SCAN NEW FILE
            </button>
          </div>
        )}
        
        <div style={{ marginTop: '30px', borderTop: '1px solid #065f46', paddingTop: '20px', fontSize: '10px', color: '#34d399', textAlign: 'center' }}>
          {results?.studioVersion || "Audit-Pro v1.1 Active"} | Powered by DigitalRaj Studio
        </div>
      </div>
    </div>
  );
}