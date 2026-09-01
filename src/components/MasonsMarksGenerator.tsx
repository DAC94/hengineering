import React, { useState, useId } from 'react';
import { Compass, Stamp, Check, Shield } from 'lucide-react';

export const MasonsMarksGenerator: React.FC = () => {
  const [masonName, setMasonName] = useState<string>('Mason Mark');
  const [copied, setCopied] = useState<boolean>(false);
  const markId = useId();

  // Deterministically compute hash from name string
  const getHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  };

  const seed = getHash(masonName || 'Mason Mark');
  const styleIndex = seed % 6;

  const handleStampCertificate = () => {
    localStorage.setItem('hengineers_mason_mark_name', masonName);
    localStorage.setItem('hengineers_mason_mark_style', styleIndex.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Render clean, minimalist historic stonemason mark strokes (3-5 strokes max)
  const renderMinimalMarkGeometry = (style: number) => {
    const strokeCol = '#0f172a';
    const strokeW = '4';

    switch (style) {
      case 0:
        // Clean Trilithon Arch & Plumb Line
        return (
          <g>
            <line x1="28" y1="28" x2="28" y2="80" stroke={strokeCol} strokeWidth={strokeW} strokeLinecap="round" />
            <line x1="72" y1="28" x2="72" y2="80" stroke={strokeCol} strokeWidth={strokeW} strokeLinecap="round" />
            <line x1="18" y1="28" x2="82" y2="28" stroke={strokeCol} strokeWidth={strokeW} strokeLinecap="round" />
            <line x1="50" y1="28" x2="50" y2="68" stroke={strokeCol} strokeWidth="3" strokeDasharray="5 3" />
            <polygon points="50,78 44,66 56,66" fill={strokeCol} />
          </g>
        );

      case 1:
        // Clean Hourglass Rune
        return (
          <g>
            <line x1="22" y1="22" x2="78" y2="78" stroke={strokeCol} strokeWidth={strokeW} strokeLinecap="round" />
            <line x1="78" y1="22" x2="22" y2="78" stroke={strokeCol} strokeWidth={strokeW} strokeLinecap="round" />
            <line x1="22" y1="22" x2="78" y2="22" stroke={strokeCol} strokeWidth={strokeW} strokeLinecap="round" />
            <line x1="22" y1="78" x2="78" y2="78" stroke={strokeCol} strokeWidth={strokeW} strokeLinecap="round" />
          </g>
        );

      case 2:
        // Clean Mason's Square & Compass
        return (
          <g>
            <polyline points="20,78 50,20 80,78" stroke={strokeCol} strokeWidth={strokeW} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="28,48 72,48 72,78" stroke={strokeCol} strokeWidth={strokeW} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="50" cy="20" r="4" fill={strokeCol} />
          </g>
        );

      case 3:
        // Clean Double Chevron Axis
        return (
          <g>
            <line x1="50" y1="16" x2="50" y2="84" stroke={strokeCol} strokeWidth={strokeW} strokeLinecap="round" />
            <polyline points="24,44 50,22 76,44" stroke={strokeCol} strokeWidth={strokeW} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="24,66 50,44 76,66" stroke={strokeCol} strokeWidth={strokeW} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        );

      case 4:
        // Clean Diamond & Cross
        return (
          <g>
            <polygon points="50,18 82,50 50,82 18,50" stroke={strokeCol} strokeWidth={strokeW} fill="none" strokeLinejoin="round" />
            <line x1="50" y1="18" x2="50" y2="82" stroke={strokeCol} strokeWidth="3" />
            <line x1="18" y1="50" x2="82" y2="50" stroke={strokeCol} strokeWidth="3" />
          </g>
        );

      case 5:
      default:
        // Clean Star Polygon Rune
        return (
          <g>
            <polygon points="50,18 80,74 20,74" stroke={strokeCol} strokeWidth={strokeW} fill="none" strokeLinejoin="round" />
            <line x1="50" y1="18" x2="50" y2="86" stroke={strokeCol} strokeWidth={strokeW} strokeLinecap="round" />
            <line x1="20" y1="44" x2="80" y2="44" stroke={strokeCol} strokeWidth={strokeW} strokeLinecap="round" />
          </g>
        );
    }
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
            Type your name to deterministically derive your official stonemason mark, carved into sarsen blocks to verify piecework pay.
          </p>
        </div>
        <div className="shrink-0 flex items-center space-x-2 bg-[#092e4a] px-3.5 py-2 rounded border border-amber-400/40 text-white font-mono text-xs">
          <Shield className="w-4 h-4 text-amber-400" />
          <span>Livery Registry No. 115</span>
        </div>
      </div>

      {/* Generator Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Input & Context */}
        <div className="lg:col-span-6 space-y-4">
          <div>
            <label htmlFor={`mason-name-${markId}`} className="block text-xs font-serif-guild font-bold text-[#154c76] uppercase tracking-wider mb-1">
              Enter Mason or Freeman Name
            </label>
            <input
              id={`mason-name-${markId}`}
              type="text"
              value={masonName}
              onChange={(e) => setMasonName(e.target.value)}
              placeholder="e.g. Mason Mark"
              className="w-full px-4 py-2.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#154c76] font-serif-guild text-sm text-slate-800"
            />
          </div>

          <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs text-slate-600 leading-relaxed font-normal space-y-2">
            <p className="font-serif-guild font-bold text-[#154c76] text-xs">
              📜 Historical Deterministic Mason Mark:
            </p>
            <p>
              Ancient stonemason marks were derived from the mason's Guild indenture record. This minimalist mark will be stamped on your parchment Freedom Certificate.
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
          <div className="relative w-60 h-60 rounded-lg bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 p-6 border-4 border-slate-500 shadow-xl flex items-center justify-center overflow-hidden">
            {/* Texture background overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.4)_0%,transparent_80%)] pointer-events-none" />
            
            {/* Clean Chiseled Stonemason Mark SVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-40 h-40 drop-shadow-[1px_2px_1px_rgba(255,255,255,0.85)] filter"
            >
              {renderMinimalMarkGeometry(styleIndex)}
            </svg>

            <span className="absolute bottom-2 text-[10px] font-mono text-slate-700 font-bold uppercase tracking-widest bg-slate-100/90 px-2.5 py-0.5 rounded border border-slate-300">
              Mason Mark #{(seed % 8999) + 1000}
            </span>
          </div>

          <p className="text-[11px] font-serif-guild italic text-slate-600 mt-3 text-center">
            Registered Stonemason Mark for <strong>{masonName || 'Mason Mark'}</strong>
          </p>
        </div>

      </div>

    </div>
  );
};
