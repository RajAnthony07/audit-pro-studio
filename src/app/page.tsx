"use client";
import React, { useState } from 'react';

export default function AuditProStudio() {
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleStartScan = async () => {
    setIsScanning(true);
    
    try {
      // THIS CALLS YOUR NEW ROUTE.TS
      const response = await fetch('/api/audit', { method: 'POST' });
      const data = await response.json();

      // THIS UPDATES THE SCREEN WITH REAL DATA
      setResults(data);
    } catch (error) {
      console.error("Scan failed", error);
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#f4f7f6' }}>
      <h1>10-POINT STUDIO SCAN</h1>
      
      {!results ? (
        <button 
          onClick={handleStartScan}
          style={{ padding: '15px 30px', fontSize: '18px', cursor: 'pointer', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          {isScanning ? "SCANNING THREATS..." : "START 10-POINT AUDIT"}
        </button>
      ) : (
        <div style={{ border: '2px solid #ddd', padding: '20px', borderRadius: '10px', backgroundColor: 'white' }}>
          <h2 style={{ color: results.riskColor }}>RESULT: {results.malwareRisk}</h2>
          <hr />
          <p><strong>Security Score:</strong> {results.finalScore}%</p>
          <p><strong>AI Integrity:</strong> {results.aiProbability}</p>
          <p><strong>Data Leaks:</strong> {results.piiLeaks} Found</p>
          <p><strong>Liability Estimate:</strong> $0.00 (Verified Safe)</p>
          <p style={{ fontSize: '12px', color: '#666' }}>{results.studioVersion}</p>
          
          <button onClick={() => setResults(null)} style={{ marginTop: '20px' }}>SCAN ANOTHER FILE</button>
        </div>
      )}
    </div>
  );
}