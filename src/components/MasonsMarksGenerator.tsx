import React, { useState, useId } from 'react';
import { Sparkles, Compass, Stamp, RefreshCw, Check, Shield, Dices } from 'lucide-react';

export const MasonsMarksGenerator: React.FC = () => {
  const [masonName, setMasonName] = useState<string>('Cordelia Sterling');
  const [selectedStyle, setSelectedStyle] = useState<number>(-1); // -1 = auto-generated from name
  const [copied, setCopied] = useState<boolean>(false);
  const markId = useId();

  // Deterministically compute hash from name
  const getHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  };

  const seed = getHash(masonName || 'Hengineer');
  const styleIndex = selectedStyle >= 0 ? selectedStyle : (seed % 8);

  const styleNames = [
    'Trilithon Arch & Plumb-Bob',
    'Hourglass & Cross-Strut',
    'Mason’s Square & Compass',
    'Pentagram Star of Salisbury',
    'Solstice Solar Wheel',
    'Double Chevron & Arrowhead',
    'Rhombus & Cross Pattée',
    'Hexagram Seal of the Master',
  ];

  const handleStampCertificate = () => {
    localStorage.setItem('hengineers_mason_mark_name', masonName);
    localStorage.setItem('hengineers_mason_mark_style', styleIndex.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Render SVG elements for the selected style archetype
  const renderMarkGeometry = (style: number, s: number) => {
    const strokeCol = '#0f172a';
    const strokeW = '3.5';

    switch (style) {
      case 0:
        // 0. The Trilithon Arch & Plumb-Bob
        return (
          <g>
            <rect x="22" y="28" width="12" height="56" rx="1" stroke={strokeCol} strokeWidth={strokeW} fill="none" />
            <rect x="66" y="28" width="12" height="56" rx="1" stroke={strokeCol} strokeWidth={strokeW} fill="none" />
            <rect x="14" y="16" width="72" height="14" rx="2" stroke={strokeCol} strokeWidth={strokeW} fill="none" />
            <line x1="50" y1="30" x2="50" y2="70" stroke={strokeCol} strokeWidth="3" strokeDasharray="4 2" />
            <polygon points="50,84 42,70 58,70" fill={strokeCol} />
          </g>
        );

      case 1:
        // 1. The Hourglass & Cross-Strut
        return (
          <g>
            <line x1="16" y1="16" x2="84" y2="84" stroke={strokeCol} strokeWidth={strokeW} />
            <line x1="84" y1="16" x2="16" y2="84" stroke={strokeCol} strokeWidth={strokeW} />
            <line x1="16" y1="16" x2="84" y2="16" stroke={strokeCol} strokeWidth={strokeW} />
            <line x1="16" y1="84" x2="84" y2="84" stroke={strokeCol} strokeWidth={strokeW} />
            <circle cx="50" cy="50" r="14" stroke={strokeCol} strokeWidth={strokeW} fill="none" />
            <line x1="50" y1="16" x2="50" y2="84" stroke={strokeCol} strokeWidth="2.5" />
          </g>
        );

      case 2:
        // 2. The Mason’s Square & Compass
        return (
          <g>
            {/* Compass legs */}
            <line x1="50" y1="14" x2="18" y2="84" stroke={strokeCol} strokeWidth={strokeW} />
            <line x1="50" y1="14" x2="82" y2="84" stroke={strokeCol} strokeWidth={strokeW} />
            <circle cx="50" cy="14" r="5" fill={strokeCol} />
            {/* Square arm */}
            <path d="M 28 42 L 72 42 L 72 78" stroke={strokeCol} strokeWidth={strokeW} fill="none" />
            {/* Arc */}
            <path d="M 32 66 Q 50 50 68 66" stroke={strokeCol} strokeWidth="2.5" fill="none" strokeDasharray="3 3" />
          </g>
        );

      case 3:
        // 3. Pentagram Star of Salisbury
        return (
          <g>
            <polygon
              points="50,10 63,38 94,38 69,56 78,86 50,68 22,86 31,56 6,38 37,38"
              stroke={strokeCol}
              strokeWidth={strokeW}
              fill="none"
            />
            <circle cx="50" cy="50" r="8" fill={strokeCol} />
          </g>
        );

      case 4:
        // 4. Solstice Solar Wheel
        return (
          <g>
            <circle cx="50" cy="50" r="36" stroke={strokeCol} strokeWidth={strokeW} fill="none" />
            <line x1="50" y1="14" x2="50" y2="86" stroke={strokeCol} strokeWidth={strokeW} />
            <line x1="14" y1="50" x2="86" y2="50" stroke={strokeCol} strokeWidth={strokeW} />
            <line x1="24" y1="24" x2="76" y2="76" stroke={strokeCol} strokeWidth="2.5" />
            <line x1="76" y1="24" x2="24" y2="76" stroke={strokeCol} strokeWidth="2.5" />
            <polygon points="50,34 66,50 50,66 34,50" fill={strokeCol} />
          </g>
        );

      case 5:
        // 5. Double Chevron & Arrowhead
        return (
          <g>
            <line x1="50" y1="10" x2="50" y2="90" stroke={strokeCol} strokeWidth={strokeW} />
            <polyline points="20,40 50,16 80,40" stroke={strokeCol} strokeWidth={strokeW} fill="none" />
            <polyline points="20,62 50,38 80,62" stroke={strokeCol} strokeWidth={strokeW} fill="none" />
            <line x1="30" y1="84" x2="70" y2="84" stroke={strokeCol} strokeWidth={strokeW} />
            <circle cx="50" cy="50" r="6" fill={strokeCol} />
          </g>
        );

      case 6:
        // 6. Rhombus & Cross Pattée
        return (
          <g>
            <polygon points="50,14 84,50 50,86 16,50" stroke={strokeCol} strokeWidth={strokeW} fill="none" />
            <path d="M 50 14 L 45 45 L 14 50 L 45 55 L 50 86 L 55 55 L 86 50 L 55 45 Z" fill={strokeCol} />
          </g>
        );

      case 7:
      default:
        // 7. Hexagram Seal of the Master
        return (
          <g>
            <polygon points="50,12 85,72 15,72" stroke={strokeCol} strokeWidth={strokeW} fill="none" />
            <polygon points="50,88 85,28 15,28" stroke={strokeCol} strokeWidth={strokeW} fill="none" />
            <circle cx="50" cy="50" r="10" fill={strokeCol} />
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
            Every operative stonemason is assigned a distinct geometric archetype carved into dressed sarsen stones to verify piecework and sign monumental stone arches.
          </p>
        </div>
        <div className="shrink-0 flex items-center space-x-2 bg-[#092e4a] px-3.5 py-2 rounded border border-amber-400/40 text-white font-mono text-xs">
          <Shield className="w-4 h-4 text-amber-400" />
          <span>Livery Mark Registry No. 115</span>
        </div>
      </div>

      {/* Style Selector Buttons */}
      <div>
        <label className="block text-xs font-serif-guild font-bold text-[#154c76] uppercase tracking-wider mb-2">
          Select Historic Mason Mark Archetype:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {styleNames.map((name, idx) => (
            <button
              key={name}
              type="button"
              onClick={() => setSelectedStyle(idx)}
              className={`p-2 rounded text-[11px] font-serif-guild font-bold transition-all text-center border cursor-pointer ${
                styleIndex === idx
                  ? 'bg-[#154c76] text-amber-300 border-amber-400 shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div className="text-[10px] text-amber-600 font-mono">Type 0{idx + 1}</div>
              <div className="truncate">{name.split(' ')[0]}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Generator Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
        
        {/* Left Inputs */}
        <div className="lg:col-span-6 space-y-4">
          <div>
            <label htmlFor={`mason-name-${markId}`} className="block text-xs font-serif-guild font-bold text-[#154c76] uppercase tracking-wider mb-1">
              Enter Mason or Freeman Name
            </label>
            <div className="flex gap-2">
              <input
                id={`mason-name-${markId}`}
                type="text"
                value={masonName}
                onChange={(e) => {
                  setMasonName(e.target.value);
                  setSelectedStyle(-1); // Reset to auto
                }}
                placeholder="e.g. Cordelia Sterling"
                className="w-full px-4 py-2.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#154c76] font-serif-guild text-sm text-slate-800"
              />
              <button
                type="button"
                onClick={() => setSelectedStyle((prev) => (prev + 1) % 8)}
                title="Cycle Random Mark Archetype"
                className="px-3.5 py-2.5 rounded bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 cursor-pointer flex items-center shrink-0"
              >
                <Dices className="w-5 h-5 text-[#154c76]" />
              </button>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs text-slate-600 leading-relaxed font-normal space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-serif-guild font-bold text-[#154c76] text-xs">
                📜 Current Mark Classification:
              </span>
              <span className="font-mono text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                {styleNames[styleIndex]}
              </span>
            </div>
            <p>
              This geometric mark will be stamped on your parchment Freedom Certificate, representing your sworn allegiance to the Guild of Megalith Builders.
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
              className="w-44 h-44 drop-shadow-[1px_2px_1px_rgba(255,255,255,0.85)] filter"
            >
              {renderMarkGeometry(styleIndex, seed)}
            </svg>

            <span className="absolute bottom-2 text-[10px] font-mono text-slate-700 font-bold uppercase tracking-widest bg-slate-100/90 px-2.5 py-0.5 rounded border border-slate-300">
              Archetype #0{styleIndex + 1} • Mark #{(seed % 8999) + 1000}
            </span>
          </div>

          <p className="text-[11px] font-serif-guild italic text-slate-600 mt-3 text-center">
            Registered Stonemason Mark for <strong>{masonName || 'Hengineer'}</strong> ({styleNames[styleIndex]})
          </p>
        </div>

      </div>

    </div>
  );
};
