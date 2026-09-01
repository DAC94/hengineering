import React from 'react';
import { CourtOfAssistants } from '../CourtOfAssistants';
import { Compass, Award, BookOpen } from 'lucide-react';

export const CourtPage: React.FC = () => {
  const pastMasters = [
    { name: 'Sir Percival Sarsen, Kt, FIME', period: 'Master 1912–1913', achievement: 'Supervised stone stabilization at Stonehenge during the Edwardian restoration.' },
    { name: 'Col. Archibald Lintel, DSO', period: 'Master 1938–1939', achievement: 'Organized sandbag stone protection for Gresham Street during the London Blitz.' },
    { name: 'Dame Beatrice Mortise, DBE', period: 'Master 1984–1985', achievement: 'Established the Guild Educational Trust Fund for young stonemasons.' },
  ];

  return (
    <div className="py-12 bg-white space-y-12">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
          <Compass className="w-4 h-4 text-[#154c76]" />
          <span>Guild Governance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-guild text-[#154c76] mb-3">
          The Court of Assistants &amp; Officers
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-4" />
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
          The Master, Wardens, and Court of Assistants govern the affairs, apprenticeships, and ancient rights of the Worshipful Company.
        </p>
      </div>

      {/* Main Officers Profiles */}
      <CourtOfAssistants />

      {/* Beadle's Staff of Office (1742) */}
      <div id="beadle" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 p-6 sm:p-8 rounded-lg border border-slate-200 border-l-4 border-l-amber-500 shadow-sm space-y-4">
          <div className="flex items-center space-x-3 text-[#154c76]">
            <Award className="w-6 h-6 text-amber-600 shrink-0" />
            <h3 className="text-lg font-serif-guild font-bold">
              The Guild Beadle’s Silver Staff of Office (1742) &amp; Regalia
            </h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            During formal City processions to St Paul's Cathedral and Guildhall, the Guild Beadle carries a 5-foot silver-topped mahogany mace topped with a miniature sarsen trilithon and plumb bob, presented to the Worshipful Company in 1742.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-serif-guild text-slate-700 pt-2 border-t border-slate-200">
            <div className="p-3 bg-white rounded border border-slate-200">
              <span className="font-bold text-[#154c76] block">Master’s Chain of Office</span>
              <span className="text-[11px] text-slate-500">Gold links depicting lintel mortises and tenons (1851).</span>
            </div>
            <div className="p-3 bg-white rounded border border-slate-200">
              <span className="font-bold text-[#154c76] block">Wardens’ Badges</span>
              <span className="text-[11px] text-slate-500">Silver-gilt medallions worn at Livery Banquets.</span>
            </div>
            <div className="p-3 bg-white rounded border border-slate-200">
              <span className="font-bold text-[#154c76] block">The Beadle’s Staff</span>
              <span className="text-[11px] text-slate-500">5ft hallmarked London silver mace (1742).</span>
            </div>
          </div>
        </div>
      </div>

      {/* Guild Book of Remembrance */}
      <div id="remembrance" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#092e4a] text-white p-6 sm:p-8 rounded-lg border-t-4 border-t-amber-500 shadow-md space-y-4">
          <div className="flex items-center space-x-3 text-amber-300">
            <BookOpen className="w-6 h-6 text-amber-400 shrink-0" />
            <div>
              <h3 className="text-lg font-serif-guild font-bold">
                The Guild Book of Remembrance • Past Masters
              </h3>
              <p className="text-xs text-slate-300 font-garamond italic">In memory of Past Masters who preserved the ancient craft of Hengineering.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {pastMasters.map((m) => (
              <div key={m.name} className="p-4 bg-slate-900/60 rounded border border-amber-500/30 space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 block font-mono">{m.period}</span>
                <h4 className="font-serif-guild font-bold text-sm text-slate-100">{m.name}</h4>
                <p className="text-xs text-slate-300 font-garamond italic leading-relaxed">{m.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
