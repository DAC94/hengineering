import React, { useRef, useEffect, useState } from 'react';
import { Sun, Moon, Compass, Sparkles, Volume2, VolumeX, Eye } from 'lucide-react';

export const SolsticeCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [sunAngle, setSunAngle] = useState<number>(51.2);
  const [acousticActive, setAcousticActive] = useState<boolean>(true);
  const [activePreset, setActivePreset] = useState<'summer' | 'winter' | 'equinox' | 'custom'>('summer');

  const SUMMER_AZIMUTH = 51.2;
  const WINTER_AZIMUTH = 230.5;
  const EQUINOX_AZIMUTH = 90.0;

  const calculateAlignment = (angle: number) => {
    const diffSummer = Math.abs(angle - SUMMER_AZIMUTH);
    const diffWinter = Math.abs(angle - WINTER_AZIMUTH);
    const minDiff = Math.min(diffSummer, diffWinter);
    if (minDiff < 0.5) return 100;
    if (minDiff < 5) return Math.round(100 - minDiff * 15);
    return Math.max(10, Math.round(100 - minDiff * 1.5));
  };

  const alignmentScore = calculateAlignment(sunAngle);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let wavePhase = 0;

    const render = () => {
      wavePhase += 0.05;
      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.32;

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, width, height);

      ctx.beginPath();
      ctx.arc(cx, cy, radius + 25, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, radius + 40, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.12)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      const rad = ((sunAngle - 90) * Math.PI) / 180;
      const sunDist = radius + 90;
      const sunX = cx + Math.cos(rad) * sunDist;
      const sunY = cy + Math.sin(rad) * sunDist;

      const shadowLength = 70;
      const shadowDx = -Math.cos(rad) * shadowLength;
      const shadowDy = -Math.sin(rad) * shadowLength;

      if (alignmentScore > 85) {
        ctx.save();
        const beamGrad = ctx.createLinearGradient(sunX, sunY, cx - Math.cos(rad) * radius * 1.5, cy - Math.sin(rad) * radius * 1.5);
        beamGrad.addColorStop(0, 'rgba(255, 235, 150, 0.7)');
        beamGrad.addColorStop(0.5, 'rgba(212, 175, 55, 0.4)');
        beamGrad.addColorStop(1, 'rgba(212, 175, 55, 0)');

        ctx.beginPath();
        ctx.moveTo(sunX, sunY);
        ctx.lineTo(cx + Math.sin(rad) * 40, cy - Math.cos(rad) * 40);
        ctx.lineTo(cx - Math.cos(rad) * radius * 2, cy - Math.sin(rad) * radius * 2);
        ctx.lineTo(cx - Math.sin(rad) * 40, cy + Math.cos(rad) * 40);
        ctx.closePath();
        ctx.fillStyle = beamGrad;
        ctx.fill();
        ctx.restore();
      }

      if (acousticActive) {
        ctx.save();
        const ringCount = 3;
        for (let i = 0; i < ringCount; i++) {
          const r = ((wavePhase * 20 + i * 40) % (radius + 20));
          const opacity = Math.max(0, 1 - r / (radius + 20)) * 0.35;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
        ctx.restore();
      }

      const sarsenCount = 30;
      for (let i = 0; i < sarsenCount; i++) {
        const stoneAngle = (i * 360) / sarsenCount;
        const sRad = (stoneAngle * Math.PI) / 180;
        const sx = cx + Math.cos(sRad) * radius;
        const sy = cy + Math.sin(sRad) * radius;

        ctx.beginPath();
        ctx.moveTo(sx - 4, sy - 4);
        ctx.lineTo(sx + shadowDx, sy + shadowDy);
        ctx.lineTo(sx + 4 + shadowDx, sy + 4 + shadowDy);
        ctx.lineTo(sx + 4, sy + 4);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(sx, sy, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#d4af37';
        ctx.fill();
        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      const trilithonAngles = [-60, -30, 0, 30, 60];
      trilithonAngles.forEach((a) => {
        const tRad = ((a - 90) * Math.PI) / 180;
        const tx = cx + Math.cos(tRad) * (radius * 0.5);
        const ty = cy + Math.sin(tRad) * (radius * 0.5);

        ctx.beginPath();
        ctx.moveTo(tx - 6, ty - 6);
        ctx.lineTo(tx + shadowDx * 1.3, ty + shadowDy * 1.3);
        ctx.lineTo(tx + 6 + shadowDx * 1.3, ty + 6 + shadowDy * 1.3);
        ctx.lineTo(tx + 6, ty + 6);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
        ctx.fill();

        ctx.fillStyle = '#fef08a';
        ctx.fillRect(tx - 8, ty - 4, 16, 8);
        ctx.strokeStyle = '#ca8a04';
        ctx.strokeRect(tx - 8, ty - 4, 16, 8);
      });

      const hRad = ((SUMMER_AZIMUTH - 90) * Math.PI) / 180;
      const hx = cx + Math.cos(hRad) * (radius + 60);
      const hy = cy + Math.sin(hRad) * (radius + 60);

      ctx.beginPath();
      ctx.moveTo(hx, hy);
      ctx.lineTo(hx + shadowDx, hy + shadowDy);
      ctx.lineWidth = 4;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(hx, hy, 7, 0, Math.PI * 2);
      ctx.fillStyle = '#f59e0b';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.font = '10px Cinzel, serif';
      ctx.fillStyle = '#fef08a';
      ctx.fillText('HEEL STONE', hx + 10, hy + 4);

      ctx.beginPath();
      ctx.arc(sunX, sunY, 14, 0, Math.PI * 2);
      const sunGlow = ctx.createRadialGradient(sunX, sunY, 2, sunX, sunY, 14);
      sunGlow.addColorStop(0, '#ffffff');
      sunGlow.addColorStop(0.4, '#fde047');
      sunGlow.addColorStop(1, 'rgba(234, 179, 8, 0)');
      ctx.fillStyle = sunGlow;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(sunX, sunY, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#fef08a';
      ctx.fill();

      ctx.font = '10px monospace';
      ctx.fillStyle = 'rgba(212, 175, 55, 0.7)';
      ctx.fillText('N (0°)', cx - 14, cy - radius - 45);
      ctx.fillText('E (90°)', cx + radius + 45, cy + 3);
      ctx.fillText('S (180°)', cx - 18, cy + radius + 55);
      ctx.fillText('W (270°)', cx - radius - 80, cy + 3);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [sunAngle, acousticActive, alignmentScore]);

  const setPreset = (type: 'summer' | 'winter' | 'equinox') => {
    setActivePreset(type);
    if (type === 'summer') setSunAngle(SUMMER_AZIMUTH);
    if (type === 'winter') setSunAngle(WINTER_AZIMUTH);
    if (type === 'equinox') setSunAngle(EQUINOX_AZIMUTH);
  };

  return (
    <section id="alignment" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
            <Sun className="w-4 h-4 text-[#154c76]" />
            <span>Archaeo-Astronomy Observatory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-guild text-[#154c76] mb-3">
            Celestial Solstice Alignment Observatory
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Observe real-time solar alignment and shadow casting across the Sarsen Ring and Heel Stone gnomon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Canvas Viewport (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-4 sm:p-6 rounded-lg border border-slate-200 shadow-md relative">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <Compass className="w-5 h-5 text-[#154c76]" />
                <span className="font-serif-guild font-bold text-[#154c76] text-sm">Salisbury Plain Observatory View</span>
              </div>
              <button
                type="button"
                onClick={() => setAcousticActive(!acousticActive)}
                className={`px-3 py-1 rounded text-xs font-semibold transition-colors border ${
                  acousticActive
                    ? 'bg-[#154c76] text-white border-[#154c76]'
                    : 'bg-slate-100 text-slate-600 border-slate-300'
                }`}
              >
                {acousticActive ? 'Acoustic Sound ON' : 'Acoustic Sound OFF'}
              </button>
            </div>

            <div className="relative w-full aspect-square max-h-[480px] flex items-center justify-center bg-[#0f172a] rounded overflow-hidden border border-slate-800">
              <canvas
                ref={canvasRef}
                width={500}
                height={500}
                className="w-full h-full object-contain cursor-crosshair"
              />

              <div className="absolute top-4 right-4 px-3 py-1.5 rounded bg-white/90 backdrop-blur border border-slate-300 text-right">
                <div className="text-[10px] text-slate-500 uppercase font-bold">Solstice Precision</div>
                <div className="text-sm font-serif-guild font-bold text-[#154c76]">
                  {alignmentScore}% {alignmentScore === 100 && '✨ PERFECT!'}
                </div>
              </div>
            </div>
          </div>

          {/* Controls & Insights (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-serif-guild font-bold text-[#154c76] uppercase tracking-wider flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Solar Azimuth Presets</span>
              </h3>

              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPreset('summer')}
                  className={`p-3 rounded border text-center transition-colors ${
                    activePreset === 'summer'
                      ? 'bg-[#154c76] text-white border-[#154c76] font-bold'
                      : 'bg-slate-50 text-slate-700 border-slate-300 hover:border-[#154c76]'
                  }`}
                >
                  <Sun className="w-4 h-4 mx-auto mb-1 text-amber-400" />
                  <div className="font-serif-guild text-xs">Summer Sunrise</div>
                  <div className="text-[10px] font-mono opacity-80">51.2°</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPreset('winter')}
                  className={`p-3 rounded border text-center transition-colors ${
                    activePreset === 'winter'
                      ? 'bg-[#154c76] text-white border-[#154c76] font-bold'
                      : 'bg-slate-50 text-slate-700 border-slate-300 hover:border-[#154c76]'
                  }`}
                >
                  <Moon className="w-4 h-4 mx-auto mb-1 text-amber-400" />
                  <div className="font-serif-guild text-xs">Winter Sunset</div>
                  <div className="text-[10px] font-mono opacity-80">230.5°</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPreset('equinox')}
                  className={`p-3 rounded border text-center transition-colors ${
                    activePreset === 'equinox'
                      ? 'bg-[#154c76] text-white border-[#154c76] font-bold'
                      : 'bg-slate-50 text-slate-700 border-slate-300 hover:border-[#154c76]'
                  }`}
                >
                  <Compass className="w-4 h-4 mx-auto mb-1 text-amber-400" />
                  <div className="font-serif-guild text-xs">Equinox East</div>
                  <div className="text-[10px] font-mono opacity-80">90.0°</div>
                </button>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Manual Solar Azimuth Angle
                  </label>
                  <span className="font-mono text-[#154c76] font-bold text-sm">{sunAngle.toFixed(1)}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="0.5"
                  value={sunAngle}
                  onChange={(e) => {
                    setSunAngle(Number(e.target.value));
                    setActivePreset('custom');
                  }}
                  className="w-full h-2 bg-slate-200 rounded appearance-none cursor-pointer accent-[#154c76]"
                />
              </div>
            </div>

            <div className="p-5 rounded bg-amber-50 border border-amber-200 space-y-2 text-xs text-amber-900">
              <h4 className="font-serif-guild font-bold text-amber-950 flex items-center space-x-1.5">
                <Eye className="w-4 h-4 text-amber-700" />
                <span>Guild Observatory Observation Note</span>
              </h4>
              <p className="leading-relaxed">
                {alignmentScore > 85
                  ? "SOLSTICE ALIGNED: Sunlight passes through the central trilithon uprights to illuminate the Heel Stone."
                  : "OFF-PEAK ANGLE: Sun rays cast lateral shadows across the stone ring."}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
