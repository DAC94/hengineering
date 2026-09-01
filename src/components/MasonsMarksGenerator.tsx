import React, { useState, useId } from 'react';
import { Sparkles, Compass, Stamp, Download, Check, Shield } from 'lucide-react';

export const MasonsMarksGenerator: React.FC = () => {
  const [masonName, setMasonName] = useState<string>('Cordelia Sterling');
  const [copied, setCopied] = useState<boolean>(false);
  const markId = useId();

  // Deterministically compute geometric lines based on name string
  const getHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  };

  const seed = getHash(masonName || 'Hengineer');
  
  // Geometric variation points
  const p1 = (seed % 40) + 30;
  const p2 = ((seed >> 2) % 40) + 30;
  const p3 = ((seed >> 4) % 40) + 30;
  const angle = (seed % 360);
  const showCircle = seed % 2 === 0;
  const showCross = (seed >> 1) % 2 === 0;
  const showTriangle = (seed >> 3) % 2 === 0;

  const handleStampCertificate = () => {
    localStorage.setItem('hengineers_mason_mark_name', masonName);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="masons-marks" className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm border-t-4 border-t-amber-500 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-amber-500/10 text-amber-900 text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4 text-amber-600" />
            <span>Guild Craftsman Registry</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold font-serif-guild text-[#154c76]">
            Megalithic Masons' Marks Generator
          </h2>
          <p className="text-xs text-slate-600 mt-1 max-w-2xl font-normal">
            For four millennia, operative stonemasons have carved personal geometric marks into dressed sarsen stones to sign their masonry and verify piecework pay.
          </p>
        </div>
        <div className="shrink-0 flex items-center space-x-2 bg-[#092e4a] px-3.5 py-2 rounded border border-amber-400/40 text-white font-mono text-xs">
          <Shield className="w-4 h-4 text-amber-400" />
          <span>Livery Mark Registry No. 115</span>
        </div>
      </div>

      {/* Generator Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Inputs */}
        <div className="lg:col-span-6 space-y-4">
          <label htmlFor={`mason-name-${markId}`} className="block text-xs font-serif-guild font-bold text-[#154c76] uppercase tracking-wider">
            Enter Mason or Freeman Name
          </label>
          <input
            id={`mason-name-${markId}`}
            type="text"
            value={masonName}
            onChange={(e) => setMasonName(e.target.value)}
            placeholder="e.g. Cordelia Sterling"
            className="w-full px-4 py-2.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#154c76] font-serif-guild text-sm text-slate-800"
          />

          <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs text-slate-600 leading-relaxed font-normal space-y-2">
            <p className="font-serif-guild font-bold text-[#154c76] text-xs">
              📜 Historical Context of Masons' Marks:
            </p>
            <p>
              Ancient and medieval masons were granted personal geometric marks upon completing their 7-year apprenticeship. These marks were recorded on the Court roll and carved into lintels, trilithons, and cathedral arches.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleStampCertificate}
              className="px-5 py-2.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-serif-guild font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center space-x-2 shadow-sm"
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Stamp className="w-4 h-4 text-slate-950" />}
              <span>{copied ? 'Mark Saved to Certificate!' : 'Save Mark to Freedom Certificate'}</span>
            </button>
          </div>
        </div>

        {/* Right Stone Block Preview */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="relative w-64 h-64 rounded-lg bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 p-6 border-4 border-slate-500 shadow-xl flex items-center justify-center overflow-hidden">
            {/* Texture background overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.4)_0%,transparent_80%)] pointer-events-none" />
            
            {/* Chiseled Stonemason Mark SVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-44 h-44 drop-shadow-[1px_2px_1px_rgba(255,255,255,0.8)] filter"
              stroke="#1e293b"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            >
              {/* Outer Boundary Matrix */}
              {showCircle && <circle cx="50" cy="50" r="38" stroke="#334155" strokeWidth="2.5" strokeDasharray="3 3" />}
              
              {/* Central Stonemason Geometry */}
              <line x1="50" y1="12" x2="50" y2="88" stroke="#0f172a" strokeWidth="4" />
              <line x1="12" y1="50" x2="88" y2="50" stroke="#0f172a" strokeWidth="4" />

              {/* Dynamic Runes & Angles based on Hash */}
              <polyline points={`18,${p1} 50,18 82,${p2}`} stroke="#000000" strokeWidth="4" />
              <polyline points={`25,${88 - p1} 50,82 75,${88 - p3}`} stroke="#000000" strokeWidth="4" />

              {showTriangle && <polygon points="50,22 75,68 25,68" stroke="#0f172a" strokeWidth="3" fill="none" />}
              {showCross && <line x1="22" y1="22" x2="78" y2="78" stroke="#0f172a" strokeWidth="3" />}
            </svg>

            <span className="absolute bottom-2 text-[10px] font-mono text-slate-700 font-bold uppercase tracking-widest bg-slate-100/80 px-2 py-0.5 rounded border border-slate-300">
              Sarsen Mark #{(seed % 8999) + 1000}
            </span>
          </div>

          <p className="text-[11px] font-serif-guild italic text-slate-500 mt-3 text-center">
            Registered Mason's Mark for <strong>{masonName || 'Hengineer'}</strong>
          </p>
        </div>

      </div>

    </div>
  );
};
