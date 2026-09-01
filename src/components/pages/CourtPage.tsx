import React from 'react';
import { CourtOfAssistants } from '../CourtOfAssistants';
import { BookOpen, ShieldCheck } from 'lucide-react';

export const CourtPage: React.FC = () => {
  const pastMasters = [
    { name: 'Sir Percival Harwood, Kt, FIME', period: 'Master 1912–1913', achievement: 'Supervised stone stabilization at Stonehenge during the Edwardian restoration.' },
    { name: 'Col. Archibald Kensington, DSO', period: 'Master 1938–1939', achievement: 'Established the Guild Subterranean Mead Reserve during wartime preparations.' },
    { name: 'Dame Beatrice Cavendish, DBE', period: 'Master 1984–1985', achievement: 'First female Master Hengineer elected in the Guild’s 4,000-year history.' },
    { name: 'Sir Alistair Montgomery, FIME', period: 'Master 2025–2026', achievement: 'Incumbent Master. Presiding over City Livery Precedence roll entry No. 115.' },
  ];

  return (
    <div className="py-12 bg-slate-50 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-4 h-4 text-[#154c76]" />
          <span>Governance &amp; Officers</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-guild text-[#154c76] mb-3">
          The Court of Assistants &amp; Beadle’s Regalia
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-4" />
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
          Governed by the Master, Upper Warden, Renter Warden, Junior Warden, and Court of Assistants under the City of London Livery Company Customs.
        </p>
      </div>

      {/* Main Court Grid */}
      <CourtOfAssistants />

      {/* Beadle's Silver Staff & Regalia */}
      <div id="beadle" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm border-t-4 border-t-amber-500 space-y-4">
          <h3 className="text-xl font-serif-guild font-bold text-[#154c76]">
            The Beadle’s Silver Staff of Office (1742)
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            The Guild Beadle carries the solid sterling silver staff of office hallmarked 1742, surmounted by a miniature gold sarsen trilithon and brass plumb bob. The Beadle preserves order at Court Meetings, leads Common Hall processions, and summons sworn Freemen.
          </p>
        </div>
      </div>

      {/* Book of Remembrance */}
      <div id="remembrance" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-[#154c76] space-y-6">
          <div className="flex items-center space-x-3 text-[#154c76]">
            <BookOpen className="w-6 h-6 text-amber-600 shrink-0" />
            <div>
              <h3 className="text-xl font-serif-guild font-bold">
                The Guild Book of Remembrance &amp; Past Masters
              </h3>
              <p className="text-xs text-slate-500 font-normal">Distinguished Past Masters who have governed the Worshipful Company.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pastMasters.map((pm) => (
              <div key={pm.name} className="p-4 rounded bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-serif-guild font-bold text-[#154c76]">{pm.name}</span>
                  <span className="font-mono text-amber-800 text-[11px] font-semibold">{pm.period}</span>
                </div>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">{pm.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
