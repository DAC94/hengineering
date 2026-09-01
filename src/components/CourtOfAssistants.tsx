import React from 'react';
import { Shield, Compass, UserCheck } from 'lucide-react';

export const CourtOfAssistants: React.FC = () => {
  const courtMembers = [
    {
      role: 'The Master Hengineer',
      name: 'Sir Alistair Trilithon, FIME',
      title: 'Master for the Year 2025–2026',
      bio: 'Former Chief Archaeo-Engineer of Salisbury Plain. Specialist in lintel tenon friction and acoustic megalith resonance.',
      badge: 'Master Regalia & Chain of Office',
      photo: '/images/officer_master_alistair.jpg',
    },
    {
      role: 'Upper Warden',
      name: 'Dame Eleanor Mortise, KC',
      title: 'Upper Warden of the Court',
      bio: 'Senior Counsel for Ancient Stonework Rights. Author of "The Law of Unmoved Stones and Ancient Rights of Roller Passage".',
      badge: 'Senior Liveryman Regalia',
      photo: '/images/officer_eleanor_mortise.jpg',
    },
    {
      role: 'Renter Warden',
      name: 'Lord Bartholomew Bluestone, JP',
      title: 'Renter Warden & Treasurer',
      bio: 'Oversees the Guild Charitable Trust Fund, providing £250,000 annually in stone masonry apprenticeships.',
      badge: 'Court Warden Chain & Medallion',
      photo: '/images/officer_bartholomew_bluestone.jpg',
    },
    {
      role: 'The Clerk to the Guild',
      name: 'Septimus Megalith, Esq.',
      title: 'Clerk to the Worshipful Company',
      bio: 'Manages Guildhall business, Freedom of the City enrollments, and Megalithic Hall venue reservations.',
      badge: 'Clerk’s Legal Bands & Ribbon Badge',
      photo: '/images/officer_septimus_megalith.jpg',
    },
  ];

  return (
    <section id="court" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4 text-[#154c76]" />
            <span>Guild Governance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-guild text-[#154c76] mb-3">
            The Court of Assistants &amp; Officers
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The Master, Wardens, and Court of Assistants govern the affairs, apprenticeships, and ancient rights of the Worshipful Company.
          </p>
        </div>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courtMembers.map((officer) => (
            <div
              key={officer.name}
              className="bg-slate-50 p-6 rounded-lg border border-slate-200 border-t-4 border-t-[#154c76] text-center flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Formal Portrait Photo in Ceremonial Livery Regalia */}
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-amber-400 shadow-md mb-4 bg-[#154c76]">
                  <img
                    src={officer.photo}
                    alt={officer.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <span className="inline-block px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 text-[11px] font-bold mb-2 uppercase tracking-wider">
                  {officer.role}
                </span>

                <h3 className="text-base font-serif-guild font-bold text-[#154c76] mb-1">
                  {officer.name}
                </h3>
                
                <p className="text-xs font-garamond italic text-amber-800 mb-3 font-semibold">
                  {officer.title}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  {officer.bio}
                </p>
              </div>

              <div className="border-t border-slate-200 pt-3 flex items-center justify-center space-x-1.5 text-[11px] text-[#154c76] font-semibold">
                <UserCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>{officer.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Master's Formal Greeting Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-lg bg-[#092e4a] text-white max-w-4xl mx-auto flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 shadow-md border-l-4 border-amber-500">
          <Shield className="w-14 h-14 text-amber-400 shrink-0" />
          <div>
            <blockquote className="font-garamond italic text-lg sm:text-xl text-amber-100 leading-relaxed mb-2">
              "We do not merely stack stones; we align mortal ambition with the celestial geometry of the cosmos."
            </blockquote>
            <cite className="font-serif-guild text-xs uppercase tracking-widest text-slate-300 not-italic block font-bold">
              — Sir Alistair Trilithon, FIME (Master Hengineer)
            </cite>
          </div>
        </div>

      </div>
    </section>
  );
};
