import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Ticket, Filter, CheckCircle2 } from 'lucide-react';

interface EventItem {
  id: string;
  title: string;
  category: 'banquet' | 'civic' | 'lecture';
  categoryLabel: string;
  date: string;
  time: string;
  location: string;
  description: string;
  dressCode: string;
  eligibility: string;
}

export const EventsCalendar: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'banquet' | 'civic' | 'lecture'>('all');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState<boolean>(false);

  const events: EventItem[] = [
    {
      id: 'solstice-banquet',
      title: 'Annual Midsummer Solstice State Banquet',
      category: 'banquet',
      categoryLabel: 'State Banquet',
      date: '21 June 2026',
      time: '18:30 for 19:00',
      location: 'Great Trilithon Room, Megalithic Hall, Gresham Street',
      description: 'The annual state dining occasion for Master, Wardens, Freemen, and official City guests, featuring the 4-course Solstice Menu and 1998 Guild Cask Mead.',
      dressCode: 'White Tie & Livery Badges / Decorations',
      eligibility: 'Sworn Freemen, Liverymen & Personal Guests',
    },
    {
      id: 'common-hall-sheriffs',
      title: 'Midsummer Day Common Hall Election Lunch',
      category: 'civic',
      categoryLabel: 'Civic Election',
      date: '24 June 2026',
      time: '11:30 Assembly',
      location: 'Guildhall Great Hall & Yard, City of London',
      description: 'Assembly of Liverymen for the election of the Sheriffs of the City of London, followed by Guildhall buffet lunch.',
      dressCode: 'Dark Lounge Suit & Guild Tie / Livery Gown',
      eligibility: 'Sworn Liverymen of Company No. 115',
    },
    {
      id: 'sheep-drive',
      title: 'Annual London Bridge Lintel & Sheep Drive',
      category: 'civic',
      categoryLabel: 'Ancient Custom',
      date: '29 September 2026',
      time: '09:00 - 15:00',
      location: 'London Bridge, City of London',
      description: 'Freemen exercise their ancient right to drive a flock of sheep carrying a 5-tonne sarsen lintel across London Bridge toll-free.',
      dressCode: 'City Freeman Attire & Exemption Badges',
      eligibility: 'All Sworn Freemen & Spectator Public',
    },
    {
      id: 'archaeo-lecture',
      title: 'Annual Archaeo-Engineering Memorial Lecture',
      category: 'lecture',
      categoryLabel: 'Livery Lecture',
      date: '15 October 2026',
      time: '18:00 Lecture',
      location: 'St Lawrence Jewry Church, Next Guildhall',
      description: 'Keynote address by Prof. Harrison Lintel on "Tenon Geometry and Acoustic Resonance in Bronze Age Trilithons".',
      dressCode: 'Smart Casual / Business Attire',
      eligibility: 'Open to Public & Guild Members',
    },
  ];

  const filteredEvents = filter === 'all' ? events : events.filter((e) => e.category === filter);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSubmitted(true);
    setTimeout(() => {
      setRsvpSubmitted(false);
      setSelectedEvent(null);
    }, 2500);
  };

  return (
    <section id="events" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
            <Calendar className="w-4 h-4 text-[#154c76]" />
            <span>Guild Calendar &amp; Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-guild text-[#154c76] mb-3">
            Civic Events &amp; Ceremonial Calendar
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Upcoming banquets, Guildhall Common Hall elections, ancient sheep drives, and public lectures.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-lg bg-white border border-slate-200 shadow-2xs">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md font-serif-guild text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                filter === 'all' ? 'bg-[#154c76] text-white shadow' : 'text-slate-600 hover:text-[#154c76]'
              }`}
            >
              All Events
            </button>
            <button
              type="button"
              onClick={() => setFilter('banquet')}
              className={`px-4 py-2 rounded-md font-serif-guild text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                filter === 'banquet' ? 'bg-[#154c76] text-white shadow' : 'text-slate-600 hover:text-[#154c76]'
              }`}
            >
              State Banquets
            </button>
            <button
              type="button"
              onClick={() => setFilter('civic')}
              className={`px-4 py-2 rounded-md font-serif-guild text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                filter === 'civic' ? 'bg-[#154c76] text-white shadow' : 'text-slate-600 hover:text-[#154c76]'
              }`}
            >
              Civic Elections &amp; Customs
            </button>
            <button
              type="button"
              onClick={() => setFilter('lecture')}
              className={`px-4 py-2 rounded-md font-serif-guild text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                filter === 'lecture' ? 'bg-[#154c76] text-white shadow' : 'text-slate-600 hover:text-[#154c76]'
              }`}
            >
              Lectures &amp; Services
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white p-6 rounded-lg border border-slate-200 border-t-4 border-t-[#154c76] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900">
                    {evt.categoryLabel}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#154c76] flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{evt.time}</span>
                  </span>
                </div>

                <h3 className="text-lg font-serif-guild font-bold text-[#154c76]">
                  {evt.title}
                </h3>

                <div className="text-xs text-slate-500 space-y-1 font-serif-guild">
                  <p className="flex items-center space-x-1.5 text-amber-900 font-bold">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span>{evt.date}</span>
                  </p>
                  <p className="flex items-start space-x-1.5 text-slate-600 font-normal">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{evt.location}</span>
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                  {evt.description}
                </p>

                <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-100 space-y-1">
                  <p><strong className="text-slate-700">Dress Code:</strong> {evt.dressCode}</p>
                  <p><strong className="text-slate-700">Eligibility:</strong> {evt.eligibility}</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setSelectedEvent(evt)}
                  className="w-full py-2 rounded bg-[#154c76] hover:bg-[#092e4a] text-white font-serif-guild font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Ticket className="w-4 h-4 text-amber-400" />
                  <span>Reserve Seat / Inquiry</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RSVP Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-lg border border-slate-200 border-t-4 border-t-[#154c76] max-w-md w-full p-6 space-y-4 shadow-2xl">
              <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                    Ticket Inquiry
                  </span>
                  <h4 className="font-serif-guild font-bold text-base text-[#154c76] mt-1">
                    {selectedEvent.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-mono">{selectedEvent.date} • {selectedEvent.time}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="text-slate-400 hover:text-slate-600 text-sm font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {rsvpSubmitted ? (
                <div className="p-6 text-center space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                  <h5 className="font-serif-guild font-bold text-[#154c76] text-sm">
                    Inquiry Submitted to the Clerk
                  </h5>
                  <p className="text-xs text-slate-600">
                    The Clerk's office at Megalithic Hall will send confirmation to your registered email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRsvpSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Full Name &amp; Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Freeman Sir Alistair Trilithon"
                      className="w-full p-2 rounded border border-slate-300 focus:outline-none focus:border-[#154c76]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="clerk@hengineer.org"
                      className="w-full p-2 rounded border border-slate-300 focus:outline-none focus:border-[#154c76]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Guild Membership Status</label>
                    <select className="w-full p-2 rounded border border-slate-300 focus:outline-none focus:border-[#154c76]">
                      <option>Sworn Freeman of the City</option>
                      <option>Sworn Liveryman (No. 115)</option>
                      <option>Civic Guest / Public Spectator</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded bg-[#154c76] hover:bg-[#092e4a] text-white font-serif-guild font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Submit Reservation Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
