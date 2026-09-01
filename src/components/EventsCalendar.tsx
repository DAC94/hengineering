import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Ticket, Filter, X, Send } from 'lucide-react';

interface GuildEvent {
  id: string;
  title: string;
  category: 'banquet' | 'custom' | 'lecture' | 'meeting';
  categoryLabel: string;
  date: string;
  time: string;
  location: string;
  description: string;
  dressCode: string;
  ticketPrice: string;
}

export const EventsCalendar: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<GuildEvent | null>(null);
  const [rsveName, setRsvpName] = useState<string>('');
  const [rsvpEmail, setRsvpEmail] = useState<string>('');
  const [rsvpGuests, setRsvpGuests] = useState<number>(1);
  const [rsvpSubmitted, setRsvpSubmitted] = useState<boolean>(false);

  const events: GuildEvent[] = [
    {
      id: 'event-solstice-2026',
      title: 'Annual Midsummer Solstice State Banquet',
      category: 'banquet',
      categoryLabel: 'State Banquet',
      date: 'Saturday, 20 June 2026',
      time: '18:30 for 19:15',
      location: 'Great Room, Megalithic Hall, Gresham Street',
      description: 'The premier annual gathering of the Worshipful Company. 4-course state dinner, Loving Cup ceremony, and vintage mead tasting in the hammerbeam hall.',
      dressCode: 'White Tie / Black Tie with Livery Badges & Regalia',
      ticketPrice: '£115.00 (Freemen) / £140.00 (Guests)',
    },
    {
      id: 'event-sheep-2026',
      title: 'Annual London Bridge Lintel & Sheep Drive',
      category: 'custom',
      categoryLabel: 'Civic Custom',
      date: 'Sunday, 27 September 2026',
      time: '10:00 – 16:00',
      location: 'London Bridge & Monument Square',
      description: 'Freemen exercise their ancient right to drive a flock of sheep carrying a 5-tonne sarsen lintel across London Bridge toll-free.',
      dressCode: 'Business Attire / Ceremonial Livery Gowns',
      ticketPrice: 'Free for Sworn Freemen (RSVP Required)',
    },
    {
      id: 'event-commonhall-2026',
      title: 'Common Hall Election of the Lord Mayor',
      category: 'meeting',
      categoryLabel: 'Civic Election',
      date: 'Tuesday, 29 September 2026',
      time: '11:30 sharp',
      location: 'Guildhall, City of London',
      description: 'Liverymen of Company No. 115 assemble at Guildhall for the Michaelmas election of the Lord Mayor of London followed by Livery Lunch.',
      dressCode: 'Morning Suit / Dark Lounge Suit with Livery Gowns',
      ticketPrice: 'Liverymen Only (Pre-registration required)',
    },
    {
      id: 'event-[#lecture-2026]',
      title: 'Annual Archaeo-Astronomy Memorial Lecture',
      category: 'lecture',
      categoryLabel: 'Academic Lecture',
      date: 'Thursday, 15 October 2026',
      time: '18:00 – 19:30',
      location: 'St Lawrence Jewry Church Hall, Gresham Street',
      description: 'Keynote address by Prof. Harrison Radcliffe on "Tenon Geometry and Acoustic Resonance in Bronze Age Trilithons".',
      dressCode: 'Smart Casual / Academic Robes',
      ticketPrice: 'Free Admission (Open to the Public)',
    },
    {
      id: 'event-service-2026',
      title: 'St Lawrence Jewry Annual Guild Service',
      category: 'custom',
      categoryLabel: 'Guild Service',
      date: 'Wednesday, 11 November 2026',
      time: '11:00 AM',
      location: 'St Lawrence Jewry next Guildhall',
      description: 'Annual church service of thanksgiving and remembrance for deceased Court Officers, followed by wine & water biscuits in the crypt.',
      dressCode: 'Lounge Suit / Livery Gowns',
      ticketPrice: 'Open to All Members & Families',
    },
    {
      id: 'event-[#solstice-winter-2026]',
      title: 'Winter Solstice Vault Mead Tasting',
      category: 'banquet',
      categoryLabel: 'Vault Social',
      date: 'Monday, 21 December 2026',
      time: '19:00 till late',
      location: 'Subterranean Sarsen Vaults, Megalithic Hall',
      description: 'Candlelit winter solstice feast in the medieval vaults featuring slow-roasted wild game and cellared 1998 Solstice Cask Mead.',
      dressCode: 'Black Tie or Velvet Dinner Jackets',
      ticketPrice: '£85.00 (Members Only)',
    },
  ];

  const filteredEvents = filter === 'all' ? events : events.filter((e) => e.category === filter);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSubmitted(true);
    setTimeout(() => {
      setRsvpSubmitted(false);
      setSelectedEvent(null);
      setRsvpName('');
      setRsvpEmail('');
      setRsvpGuests(1);
    }, 2500);
  };

  return (
    <section id="events" className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
            <Calendar className="w-4 h-4 text-[#154c76]" />
            <span>Civic &amp; Guild Calendar</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-guild text-[#154c76] mb-3">
            Civic Events, Banquets &amp; Guild Services
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Annual schedule of State Banquets at Megalithic Hall, Common Hall elections at Guildhall, Church services at St Lawrence Jewry, and the London Bridge Sheep Drive.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <div className="flex items-center space-x-1 text-xs font-bold text-slate-500 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-[#154c76] text-amber-300'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
            }`}
          >
            All Guild Events
          </button>
          <button
            type="button"
            onClick={() => setFilter('banquet')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
              filter === 'banquet'
                ? 'bg-[#154c76] text-amber-300'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
            }`}
          >
            State Banquets
          </button>
          <button
            type="button"
            onClick={() => setFilter('custom')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
              filter === 'custom'
                ? 'bg-[#154c76] text-amber-300'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
            }`}
          >
            Civic Elections &amp; Customs
          </button>
          <button
            type="button"
            onClick={() => setFilter('lecture')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
              filter === 'lecture'
                ? 'bg-[#154c76] text-amber-300'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
            }`}
          >
            Lectures &amp; Services
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-lg border border-slate-200 border-t-4 border-t-[#154c76] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded">
                    {evt.categoryLabel}
                  </span>
                  <span className="text-xs font-semibold text-amber-700">{evt.ticketPrice}</span>
                </div>

                <h3 className="text-base font-serif-guild font-bold text-[#154c76] leading-snug">
                  {evt.title}
                </h3>

                <div className="space-y-1.5 text-xs text-slate-600 font-mono">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="font-sans text-xs text-slate-700">{evt.location}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100 font-normal">
                  {evt.description}
                </p>

                <div className="text-[11px] text-slate-500 font-garamond italic">
                  <strong>Dress Code:</strong> {evt.dressCode}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4">
                <button
                  type="button"
                  onClick={() => setSelectedEvent(evt)}
                  className="w-full py-2 rounded bg-[#154c76] hover:bg-[#092e4a] text-white font-serif-guild text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Ticket className="w-3.5 h-3.5 text-amber-400" />
                  <span>Reserve Ticket / Inquiry</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* RSVP Inquiry Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-lg border border-slate-300 max-w-md w-full overflow-hidden shadow-2xl">
            
            {/* Modal Header */}
            <div className="bg-[#092e4a] text-white p-4 flex justify-between items-center border-b border-amber-500/30">
              <div className="flex items-center space-x-2 text-amber-300 font-serif-guild font-bold text-sm">
                <Ticket className="w-4 h-4 text-amber-400" />
                <span>Ticket Reservation Inquiry</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            {rsvpSubmitted ? (
              <div className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Send className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-serif-guild font-bold text-[#154c76]">
                  RSVP Inquiry Submitted
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you, <strong>{rsveName}</strong>. The Clerk's office at Megalithic Hall will send ticket confirmation to your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="p-6 space-y-4 text-xs text-slate-800">
                <div className="p-3 bg-amber-50 rounded border border-amber-200">
                  <h4 className="font-serif-guild font-bold text-[#154c76] text-sm">{selectedEvent.title}</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">{selectedEvent.date} • {selectedEvent.time}</p>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Full Name &amp; Title</label>
                  <input
                    type="text"
                    required
                    value={rsveName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    placeholder="e.g. Freeman Sir Alistair Montgomery"
                    className="w-full px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#154c76]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={rsvpEmail}
                    onChange={(e) => setRsvpEmail(e.target.value)}
                    placeholder="clerk@hengineer.org"
                    className="w-full px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#154c76]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Number of Places Required</label>
                  <select
                    value={rsvpGuests}
                    onChange={(e) => setRsvpGuests(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#154c76]"
                  >
                    <option value={1}>1 Place (Member Only)</option>
                    <option value={2}>2 Places (Member &amp; Guest)</option>
                    <option value={4}>4 Places (Court Table)</option>
                  </select>
                </div>

                <div className="pt-2 flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(null)}
                    className="px-4 py-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-serif-guild font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-[#154c76] hover:bg-[#092e4a] text-white font-serif-guild font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Submit Reservation
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
