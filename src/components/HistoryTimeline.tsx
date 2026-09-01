import React from 'react';
import { Calendar, Scroll, ShieldCheck, Sparkles, Award, Landmark, CheckCircle } from 'lucide-react';

export const HistoryTimeline: React.FC = () => {
  const events = [
    {
      year: 'c. 2500 BC',
      title: 'Foundation on Salisbury Plain',
      description: 'The ancient ancestors of the Hengineers raise the 25-tonne Sarsen Trilithons at Stonehenge, establishing tongue-and-groove mortise & tenon joints and timber lever mechanics.',
      highlight: 'First Megalithic Charter Established',
    },
    {
      year: '540 AD',
      title: 'King Arthur’s Lintel Court',
      description: 'Guild Court Assistants advise Celtic chieftains on constructing acoustic stone circles and ramparts across Britain, Wales, and Armorica.',
      highlight: 'Bluestone Acoustic Calibration',
    },
    {
      year: '1100 AD',
      title: 'Royal Charter of Incorporation',
      description: 'King Henry I grants a Royal Charter to "The Worshipful Company of Megalith Builders" in the City of London, establishing precedence at Time Immemorial (Livery No. 115).',
      highlight: 'Incorporated in City of London',
    },
    {
      year: '1666 AD',
      title: 'The Great Fire Load-Testing',
      description: 'Following the Great Fire of London, Guild Master Masons evaluate Portland stone density alongside Sir Christopher Wren for St. Paul’s Cathedral foundations.',
      highlight: 'City Reconstruction Duty',
    },
    {
      year: '1851 AD',
      title: 'The Great Exhibition Demonstration',
      description: 'Guild Wardens demonstrate frictionless tallow-lubricated oak rollers at Hyde Park’s Crystal Palace, moving a 30-tonne monolith with only 12 pullers.',
      highlight: 'Victorian Mechanical Triumph',
    },
    {
      year: '2026 AD',
      title: 'Digital Revival & hengineering.org',
      description: 'The Worshipful Company launches its digital portal at hengineering.org, expanding educational grants, stone masonry apprenticeships, and online Freedom of the City.',
      highlight: 'Present Day Hengineering',
    },
  ];

  return (
    <section id="history" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
            <Scroll className="w-4 h-4 text-[#154c76]" />
            <span>Guild Heritage &amp; Charter</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-guild text-[#154c76] mb-3">
            Our History &amp; Royal Charter
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Spanning over four millennia, the Worshipful Company has evolved from the ancient stone circle builders of Neolithic Britain to an incorporated City of London Livery Company supporting modern structural craft and education.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((item) => (
            <div key={item.year} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm border-t-4 border-t-[#154c76] hover:shadow-md transition-shadow">
              <span className="inline-block px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 font-mono text-xs font-bold mb-3">
                {item.year}
              </span>
              <h3 className="text-lg font-serif-guild font-bold text-[#154c76] mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex items-center space-x-1.5 text-[11px] font-semibold text-amber-700 pt-3 border-t border-slate-100">
                <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
