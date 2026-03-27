"use client";

import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function AuditPage() {
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle");

  const handleAudit = async () => {
    // 1. Get the key from the environment
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    // 2. The "Safety Guard" (Lines 17-19): 
    // This tells the computer: "If the key is empty, stop here."
    if (!apiKey) {
      setResult("Error: API Key is missing in Render Environment Variables.");
      return;
    }

    setStatus("loading");
    try {
      // 3. Now the computer knows 'apiKey' is a string for sure.
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const prompt = `Perform a high-level professional audit of: "${fileName}". Analyze for: Professionalism, Clarity, and Grammar.`;
      
      const response = await model.generateContent(prompt);
      setResult(response.response.text());
      setStatus("success");
    } catch (error) {
      console.error(error);
      setResult("Audit failed. Please check your connection or API key.");
      setStatus("error");
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Audit Pro Studio</h1>
      <input 
        type="text" 
        placeholder="Enter document title or text to audit..." 
        className="w-full p-2 border rounded mb-4 text-black"
        onChange={(e) => setFileName(e.target.value)}
      />
      <button 
        onClick={handleAudit}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Auditing..." : "Start Audit"}
      </button>
      
      {result && (
        <div className="mt-8 p-4 bg-gray-50 border rounded text-black whitespace-pre-wrap">
          <h2 className="font-bold mb-2">Audit Report:</h2>
          {result}
        </div>
      )}
    </div>
  );
}