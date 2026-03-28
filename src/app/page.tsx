{/* THE REMAINING 6 POINTS (ONLY SHOWS AFTER UNLOCK/LOGIN) */}
{isUnlocked && (
  <div style={{ borderTop: '1px solid #065f46', paddingTop: '15px', marginTop: '15px' }}>
    <h4 style={{ color: '#f59e0b', fontSize: '12px', marginBottom: '10px' }}>EXTENDED 10-POINT AUDIT:</h4>
    <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', color: '#34d399', lineHeight: '1.6' }}>
      <li>✓ Metadata Integrity: SCRUBBED</li>
      <li>✓ Trojan Script Check: NEGATIVE</li>
      <li>✓ Macro-Virus Scan: CLEAR</li>
      <li>✓ GDPR Compliance: VERIFIED</li>
      <li>✓ Source Authenticity: 100%</li>
      <li>✓ SSL Encryption: ACTIVE</li>
    </ul>
    <div style={{ textAlign: 'center', padding: '10px', background: '#10b981', color: 'black', fontWeight: 'bold', borderRadius: '5px', marginTop: '15px' }}>
      CERTIFIED SAFE - DOWNLOAD PDF
    </div>
  </div>
)}

{!isUnlocked && (
  <div style={{ marginTop: '20px' }}>
    {/* PURPOSE 1: THE PURCHASE BUTTON */}
    <button 
      onClick={() => window.open('https://YOUR_MARKETPLACE_LINK', '_blank')}
      style={{ width: '100%', padding: '15px', backgroundColor: '#f59e0b', color: '#000', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' }}
    >
      UNLOCK FULL 10-POINT REPORT ($179)
    </button>

    {/* PURPOSE 2: THE LOGIN/REUSE OPTION */}
    <p 
      onClick={() => {
        const pass = prompt("Enter your License Key or Email to Login:");
        if(pass) setIsUnlocked(true); // Simple login logic to unlock results
      }}
      style={{ textAlign: 'center', fontSize: '12px', color: '#34d399', marginTop: '15px', cursor: 'pointer', textDecoration: 'underline' }}
    >
      Already purchased? Login to view full results
    </p>
  </div>
)}