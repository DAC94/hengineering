import React, { useState } from 'react';
import { Building2, Calendar, Users, Wine, CheckCircle, Send } from 'lucide-react';

export const HallRental: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDate: '',
    guests: '100',
    hallSpace: 'trilithon',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="hall" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
            <Building2 className="w-4 h-4 text-[#154c76]" />
            <span>Livery Hall Venue Hire</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-guild text-[#154c76] mb-3">
            Megalithic Hall &amp; Venue Hire
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Host banquets, corporate symposia, and formal dinners at Megalithic Hall, Gresham Street, City of London EC2.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Hall Showcase Cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm border-t-4 border-t-[#154c76]">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-bold uppercase">
                    Main Livery Room
                  </span>
                  <h3 className="text-xl font-serif-guild font-bold text-[#154c76] mt-1">
                    The Great Trilithon Banquet Hall
                  </h3>
                </div>
                <div className="flex items-center space-x-1 text-xs text-[#154c76] font-bold">
                  <Users className="w-4 h-4 text-amber-600" />
                  <span>250 Dining / 400 Standing</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Featuring 40-foot vaulted oak hammerbeam lintels, stained-glass heraldry depicting ancient sarsen transport, and acoustic tuning for live music and speeches.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] text-slate-500 font-medium">
                <span className="px-2 py-1 rounded bg-slate-100 border border-slate-200">State Banquet Service</span>
                <span className="px-2 py-1 rounded bg-slate-100 border border-slate-200">Steinway Grand Piano</span>
                <span className="px-2 py-1 rounded bg-slate-100 border border-slate-200">AV System</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm border-t-4 border-t-[#154c76]">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-bold uppercase">
                    Atmospheric Cellars
                  </span>
                  <h3 className="text-xl font-serif-guild font-bold text-[#154c76] mt-1">
                    The Sarsen Vaults &amp; Wine Cellar
                  </h3>
                </div>
                <div className="flex items-center space-x-1 text-xs text-[#154c76] font-bold">
                  <Wine className="w-4 h-4 text-amber-600" />
                  <span>80 Receptions</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Subterranean stone vaults constructed from dressed megalithic blocks. Houses the Guild’s collection of rare mead and vintage Bordeaux.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] text-slate-500 font-medium">
                <span className="px-2 py-1 rounded bg-slate-100 border border-slate-200">Wine Tastings</span>
                <span className="px-2 py-1 rounded bg-slate-100 border border-slate-200">Intimate Dinners</span>
                <span className="px-2 py-1 rounded bg-slate-100 border border-slate-200">Fireplace</span>
              </div>
            </div>

          </div>

          {/* Form (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-md">
              
              <h3 className="text-lg font-serif-guild font-bold text-[#154c76] mb-2 flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-amber-600" />
                <span>Venue Hire Inquiry</span>
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Submit an inquiry to the Beadle &amp; Hall Manager for availability and formal Livery catering packages.
              </p>

              {submitted ? (
                <div className="p-6 rounded bg-amber-50 border border-amber-200 text-center space-y-3">
                  <CheckCircle className="w-10 h-10 text-amber-600 mx-auto" />
                  <h4 className="font-serif-guild font-bold text-[#154c76] text-base">Inquiry Received</h4>
                  <p className="text-xs text-slate-600 font-normal">
                    The Beadle of Megalithic Hall will review your requested date ({formData.eventDate || 'Requested Date'}) and respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-4 py-2 rounded bg-[#154c76] text-white font-serif-guild text-xs uppercase"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name / Organization</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord / Lady / Dr. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded bg-slate-50 border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#154c76]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded bg-slate-50 border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#154c76]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date</label>
                      <input
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-3 py-2 rounded bg-slate-50 border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#154c76]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Guests</label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-2 rounded bg-slate-50 border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#154c76]"
                      >
                        <option value="50">Up to 50</option>
                        <option value="100">50 – 150</option>
                        <option value="250">150 – 250</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Select Space</label>
                    <select
                      value={formData.hallSpace}
                      onChange={(e) => setFormData({ ...formData, hallSpace: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-slate-50 border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#154c76]"
                    >
                      <option value="trilithon">The Great Trilithon Banquet Hall</option>
                      <option value="vaults">The Sarsen Vaults &amp; Wine Cellars</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 rounded bg-[#154c76] hover:bg-[#092e4a] text-white font-serif-guild font-bold text-xs uppercase tracking-wider shadow flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>Send Venue Inquiry</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
