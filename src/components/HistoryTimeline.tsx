import React from 'react';
import { History } from 'lucide-react';

export const HistoryTimeline: React.FC = () => {
  const events = [
    {
      year: 'c. 2500 BC',
      title: 'First Assembly of Salisbury Plain Builders',
      description: 'Ancient stone masons gather at the Marlborough Downs to formulate the fundamental laws of lintel balancing, tenon joints, and solar alignment.',
      tag: 'Prehistoric Foundation',
    },
    {
      year: '1100 AD',
      title: 'Royal Charter of King Henry I',
      description: 'King Henry I grants the Guild of Megalith Builders a Royal Charter, confirming ancient rights to haul sarsen stones across the Thames without toll.',
      tag: 'Royal Charter',
    },
    {
      year: '1342 AD',
      title: 'Gresham Street Hall Constructed',
      description: 'The first stone Megalithic Hall is erected in the City of London, complete with deep subterranean vaults for storing lead plumb bobs.',
      tag: 'Guildhall Built',
    },
    {
      year: '1515 AD',
      title: 'Aldermanic Order of Precedence',
      description: 'The Court of Aldermen sets the Livery Order of Precedence. The Megalith Builders maintain silent precedence at Time Immemorial.',
      tag: 'City Precedence',
    },
    {
      year: '1666 AD',
      title: 'The Great Fire of London',
      description: 'Megalithic Hall upper wooden timbers burn, but the subterranean Sarsen Vaults survive intact, preserving medieval charter chests.',
      tag: 'Great Fire Survival',
    },
    {
      year: '1912 AD',
      title: 'Modern Archaeo-Engineering Revival',
      description: 'Under Master Sir Percival Harwood, Kt, the Guild incorporates modern civil engineering practices while safeguarding megalithic heritage.',
      tag: 'Modern Era',
    },
    {
      year: '1938 AD',
      title: 'Stonehenge Restoration Consultation',
      description: 'The Court of Assistants provides structural advice on re-erecting Fallen Trilithon No. 56 at Salisbury Plain.',
      tag: 'Heritage Protection',
    },
    {
      year: '1984 AD',
      title: 'First Female Master Installed',
      description: 'Dame Beatrice Cavendish, DBE becomes the first female Master Hengineer in the Guild’s 4,000-year recorded history.',
      tag: 'Historic Election',
    },
    {
      year: '2026 AD',
      title: 'Livery Precedence Roll Confirmation',
      description: 'The Worshipful Company formally registers at Livery No. 115 on the official City of London Livery Companies roll.',
      tag: 'Modern Precedence',
    },
  ];

  return (
    <div id="history" className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
            <History className="w-4 h-4 text-[#154c76]" />
            <span>Four Millennia of History</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-guild text-[#154c76] mb-3">
            Chronological History &amp; Key Milestones
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From the Neolithic erecters of Salisbury Plain to 21st-century City Livery precedence.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-[#154c76]/30 ml-4 sm:ml-32 space-y-8">
          {events.map((evt) => (
            <div key={evt.year} className="relative pl-6 sm:pl-8 group">
              
              {/* Year Badge on Left for Desktop */}
              <div className="sm:absolute sm:-left-36 sm:top-0 sm:w-28 text-left sm:text-right font-serif-guild font-bold text-amber-800 text-sm sm:text-base mb-1 sm:mb-0">
                {evt.year}
              </div>

              {/* Marker Circle */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#154c76] border-2 border-white shadow group-hover:bg-amber-500 transition-colors" />

              {/* Card Content */}
              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm border-t-2 border-t-[#154c76] space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-900 px-2 py-0.5 rounded">
                    {evt.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-mono sm:hidden">{evt.year}</span>
                </div>
                
                <h3 className="text-base font-serif-guild font-bold text-[#154c76]">
                  {evt.title}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {evt.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
