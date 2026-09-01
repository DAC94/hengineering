import React, { useState } from 'react';
import { Calculator, Hammer, Zap, Users, Download, ShieldCheck } from 'lucide-react';

export const MegalithCalculator: React.FC = () => {
  const [stoneMass, setStoneMass] = useState<number>(25); // Tonnes
  const [distanceMiles, setDistanceMiles] = useState<number>(20); // Miles
  const [transportMethod, setTransportMethod] = useState<'grease' | 'oak' | 'pine'>('oak');
  const [powerSource, setPowerSource] = useState<'apprentices' | 'oxen' | 'masters'>('apprentices');
  const [leverRatio, setLeverRatio] = useState<number>(8);

  const frictionMap = {
    grease: 0.08,
    oak: 0.15,
    pine: 0.22,
  };

  const powerMap = {
    apprentices: 0.5,
    masters: 0.9,
    oxen: 2.5,
  };

  const gravity = 9.81;
  const weightKN = stoneMass * gravity;
  const frictionCoeff = frictionMap[transportMethod];
  const requiredPullKN = weightKN * frictionCoeff;
  
  const unitPullKN = powerMap[powerSource];
  const totalUnitsNeeded = Math.ceil(requiredPullKN / unitPullKN);

  const rollersNeeded = Math.ceil((stoneMass * 0.4) + 6);
  const speedMilesPerDay = transportMethod === 'grease' ? 4 : transportMethod === 'oak' ? 2.5 : 1.5;
  const haulDays = Math.ceil(distanceMiles / speedMilesPerDay);

  const erectionForceKN = (weightKN * 0.5) / leverRatio;
  const acousticResonanceHz = Math.round(18000 / (stoneMass * 12 + 100));

  return (
    <section id="calculator" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4 text-[#154c76]" />
            <span>Interactive Guild Tool</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-guild text-[#154c76] mb-3">
            Sarsen Stone Transport &amp; Erection Calculator
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Compute friction mechanics, timber roller requirements, workforce tractive effort, and lever lifting force according to Guild Spec #2400-BC.
          </p>
        </div>

        {/* Workbench Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-lg font-serif-guild font-bold text-[#154c76] border-b border-slate-200 pb-3 flex justify-between items-center">
              <span>Sarsen Stone Parameters</span>
              <span className="text-xs font-mono text-slate-500 font-normal">Spec #2400-BC</span>
            </h3>

            {/* Slider 1: Stone Mass */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Megalith Mass (Weight)
                </label>
                <span className="font-mono text-[#154c76] font-bold text-sm">
                  {stoneMass} Tonnes <span className="text-xs text-slate-500 font-normal">({(stoneMass * 1000).toLocaleString()} kg)</span>
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="50"
                step="1"
                value={stoneMass}
                onChange={(e) => setStoneMass(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded appearance-none cursor-pointer accent-[#154c76]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>2t (Bluestone)</span>
                <span>25t (Standard Trilithon)</span>
                <span>50t (Grand Monolith)</span>
              </div>
            </div>

            {/* Slider 2: Transport Distance */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Haulage Distance
                </label>
                <span className="font-mono text-[#154c76] font-bold text-sm">
                  {distanceMiles} Miles <span className="text-xs text-slate-500 font-normal">({Math.round(distanceMiles * 1.609)} km)</span>
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="200"
                step="1"
                value={distanceMiles}
                onChange={(e) => setDistanceMiles(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded appearance-none cursor-pointer accent-[#154c76]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>1 mi (London City)</span>
                <span>20 mi (Marlborough Downs)</span>
                <span>180 mi (Preseli Hills)</span>
              </div>
            </div>

            {/* Roller Medium */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Roller &amp; Track Medium
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setTransportMethod('grease')}
                  className={`p-3 rounded border text-left text-xs transition-colors ${
                    transportMethod === 'grease'
                      ? 'bg-[#154c76] text-white border-[#154c76] font-bold'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-[#154c76]'
                  }`}
                >
                  <div className="font-semibold">Tallow &amp; Sledge</div>
                  <div className="text-[10px] opacity-80 font-mono">μ = 0.08</div>
                </button>
                <button
                  type="button"
                  onClick={() => setTransportMethod('oak')}
                  className={`p-3 rounded border text-left text-xs transition-colors ${
                    transportMethod === 'oak'
                      ? 'bg-[#154c76] text-white border-[#154c76] font-bold'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-[#154c76]'
                  }`}
                >
                  <div className="font-semibold">Seasoned Oak Logs</div>
                  <div className="text-[10px] opacity-80 font-mono">μ = 0.15</div>
                </button>
                <button
                  type="button"
                  onClick={() => setTransportMethod('pine')}
                  className={`p-3 rounded border text-left text-xs transition-colors ${
                    transportMethod === 'pine'
                      ? 'bg-[#154c76] text-white border-[#154c76] font-bold'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-[#154c76]'
                  }`}
                >
                  <div className="font-semibold">Pine Rollers</div>
                  <div className="text-[10px] opacity-80 font-mono">μ = 0.22</div>
                </button>
              </div>
            </div>

            {/* Crew Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Tractive Crew Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPowerSource('apprentices')}
                  className={`p-3 rounded border text-left text-xs transition-colors ${
                    powerSource === 'apprentices'
                      ? 'bg-[#154c76] text-white border-[#154c76] font-bold'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-[#154c76]'
                  }`}
                >
                  <div className="font-semibold">Apprentice Crew</div>
                  <div className="text-[10px] opacity-80 font-mono">0.5 kN / person</div>
                </button>
                <button
                  type="button"
                  onClick={() => setPowerSource('masters')}
                  className={`p-3 rounded border text-left text-xs transition-colors ${
                    powerSource === 'masters'
                      ? 'bg-[#154c76] text-white border-[#154c76] font-bold'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-[#154c76]'
                  }`}
                >
                  <div className="font-semibold">Master Masons</div>
                  <div className="text-[10px] opacity-80 font-mono">0.9 kN / person</div>
                </button>
                <button
                  type="button"
                  onClick={() => setPowerSource('oxen')}
                  className={`p-3 rounded border text-left text-xs transition-colors ${
                    powerSource === 'oxen'
                      ? 'bg-[#154c76] text-white border-[#154c76] font-bold'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-[#154c76]'
                  }`}
                >
                  <div className="font-semibold">Oxen Pairs</div>
                  <div className="text-[10px] opacity-80 font-mono">2.5 kN / pair</div>
                </button>
              </div>
            </div>

          </div>

          {/* Outputs Column (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-lg border border-slate-200 border-t-4 border-t-amber-500 shadow-md space-y-6">
            <h3 className="text-lg font-serif-guild font-bold text-[#154c76] border-b border-slate-200 pb-3 flex items-center space-x-2">
              <Zap className="w-5 h-5 text-amber-600" />
              <span>Hengineering Output Summary</span>
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                <div>
                  <div className="text-xs text-slate-500 uppercase font-medium">Tractive Force Required</div>
                  <div className="text-2xl font-serif-guild font-bold text-[#154c76]">
                    {requiredPullKN.toFixed(1)} <span className="text-sm font-sans">kN</span>
                  </div>
                </div>
                <div className="text-right font-mono text-xs text-slate-500">
                  {Math.round(requiredPullKN * 224.8)} lbf
                </div>
              </div>

              <div className="p-4 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                <div>
                  <div className="text-xs text-slate-500 uppercase font-medium">Crew Required</div>
                  <div className="text-2xl font-serif-guild font-bold text-[#154c76]">
                    {totalUnitsNeeded} <span className="text-sm font-sans capitalize">{powerSource}</span>
                  </div>
                </div>
                <Users className="w-6 h-6 text-[#154c76]/50" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded bg-slate-50 border border-slate-200">
                  <div className="text-[11px] text-slate-500 uppercase font-medium">Oak Rollers</div>
                  <div className="text-lg font-serif-guild font-bold text-[#154c76] mt-0.5">
                    {rollersNeeded} <span className="text-xs font-sans text-slate-500">logs</span>
                  </div>
                </div>

                <div className="p-3.5 rounded bg-slate-50 border border-slate-200">
                  <div className="text-[11px] text-slate-500 uppercase font-medium">Haul Duration</div>
                  <div className="text-lg font-serif-guild font-bold text-[#154c76] mt-0.5">
                    {haulDays} <span className="text-xs font-sans text-slate-500">days</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded bg-amber-50 border border-amber-200 text-xs space-y-1.5">
                <div className="flex justify-between font-medium text-amber-900">
                  <span>90° Erection Tip Force ({leverRatio}:1 Lever):</span>
                  <span className="font-mono font-bold">{erectionForceKN.toFixed(1)} kN</span>
                </div>
                <div className="flex justify-between font-medium text-amber-900">
                  <span>Acoustic Ring Resonance:</span>
                  <span className="font-mono font-bold">{acousticResonanceHz} Hz</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => alert(`Official Hengineering Spec Sheet generated for ${stoneMass}t Sarsen Stone.`)}
              className="w-full py-3 rounded bg-[#154c76] hover:bg-[#092e4a] text-white font-serif-guild text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center space-x-2 shadow"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Technical Specification Sheet</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
