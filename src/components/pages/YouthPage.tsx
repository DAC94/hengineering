import React, { useState } from 'react';
import { Sparkles, Users, Award, ChevronLeft, ChevronRight, Music, Heart, Calendar } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  location: string;
  description: string;
  placeholderText: string;
  tag: string;
}

export const YouthPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'Great Trilithon Hall After-Party',
      location: 'Megalithic Hall • Gresham Street, City of London',
      description: 'Young Freemen and under-35 guests dancing in evening wear under the historic 17th-century hammerbeam roof following the Annual Solstice Dinner.',
      placeholderText: '📷 [ PHOTO CAROUSEL PLACEHOLDER: Young Freemen Dancing at Megalithic Hall After-Party ]',
      tag: 'City Socials',
    },
    {
      id: 2,
      title: 'Midsummer Solstice Sunrise Dance at Salisbury Plain',
      location: 'The Trilithons • Wiltshire Sanctuary',
      description: 'Young Hengineers celebrating the Midsummer solstice dawn with music and acoustic stone resonance amidst the ancient megaliths.',
      placeholderText: '📷 [ PHOTO CAROUSEL PLACEHOLDER: Young Hengineers Dancing at Stonehenge Solstice Dawn ]',
      tag: 'Fieldwork Socials',
    },
    {
      id: 3,
      title: 'Subterranean Vault Mead Tasting & DJ Night',
      location: 'Sarsen Vaults • Megalithic Hall',
      description: 'Late-night music and vintage mead tasting in the subterranean medieval stone vaults for young sworn Freemen.',
      placeholderText: '📷 [ PHOTO CAROUSEL PLACEHOLDER: Subterranean Vaults DJ Night & Vintage Mead Bar ]',
      tag: 'Vault Parties',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="py-12 bg-slate-50 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-900 text-xs font-serif-guild font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Next Generation Hengineers • Under 35s</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-guild text-[#154c76] mb-3">
          Young Freemen &amp; Next Gen Network
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-4" />
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
          Connecting young stone masons, civil engineers, archaeo-astronomers, and City professionals under 35 with ancient Livery traditions, social banquets, and vault parties.
        </p>
      </div>

      {/* Interactive Photo Carousel Placeholder */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg border border-slate-200 shadow-md overflow-hidden border-t-4 border-t-[#154c76]">
          
          <div className="p-4 bg-[#092e4a] text-white flex justify-between items-center border-b border-amber-500/30">
            <div className="flex items-center space-x-2 text-xs font-serif-guild font-bold text-amber-300">
              <Music className="w-4 h-4 text-amber-400" />
              <span>Young Freemen Life &amp; Social Gallery</span>
            </div>
            <span className="text-[11px] font-mono text-slate-300">
              Slide {currentSlide + 1} of {slides.length}
            </span>
          </div>

          {/* Carousel Frame */}
          <div className="relative bg-slate-900 h-80 sm:h-96 flex items-center justify-center text-center p-6 text-slate-200">
            {/* Subtle background grid pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

            <div className="relative space-y-4 max-w-lg mx-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-serif-guild font-bold text-xs uppercase tracking-wider">
                {slides[currentSlide].tag}
              </span>
              
              <div className="p-6 rounded-lg bg-slate-800/80 border-2 border-dashed border-amber-400/50 space-y-2">
                <div className="text-amber-300 font-mono text-sm sm:text-base font-bold leading-snug">
                  {slides[currentSlide].placeholderText}
                </div>
                <p className="text-xs text-slate-300 italic font-garamond">
                  "{slides[currentSlide].description}"
                </p>
              </div>

              <div className="text-xs text-slate-400 font-serif-guild font-bold">
                📍 {slides[currentSlide].location}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/80 hover:bg-amber-500 hover:text-slate-950 text-white transition-colors cursor-pointer border border-slate-700"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/80 hover:bg-amber-500 hover:text-slate-950 text-white transition-colors cursor-pointer border border-slate-700"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Carousel Footer & Indicators */}
          <div className="p-4 bg-slate-100 flex items-center justify-between">
            <div className="flex space-x-2">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    currentSlide === idx ? 'bg-[#154c76]' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-xs font-serif-guild font-bold text-[#154c76]">
              {slides[currentSlide].title}
            </span>
          </div>

        </div>
      </div>

      {/* 3 Key Pillars of Young Freemen Membership */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Reduced Dues */}
          <div className="bg-white p-6 rounded-lg border border-slate-200 border-t-4 border-t-[#154c76] shadow-sm space-y-3">
            <div className="p-3 w-12 h-12 rounded bg-[#154c76]/10 text-[#154c76] flex items-center justify-center">
              <Award className="w-6 h-6 text-[#154c76]" />
            </div>
            <h3 className="text-lg font-serif-guild font-bold text-[#154c76]">
              Reduced Quarterage Dues (£35/yr)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Special membership rates for under-35s. Entry fines waived for student stonemasons and junior civil engineers joining by Redemption.
            </p>
          </div>

          {/* Pillar 2: Socials & Vault Parties */}
          <div className="bg-white p-6 rounded-lg border border-slate-200 border-t-4 border-t-amber-500 shadow-sm space-y-3">
            <div className="p-3 w-12 h-12 rounded bg-amber-500/10 text-amber-700 flex items-center justify-center">
              <Music className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-serif-guild font-bold text-[#154c76]">
              Subterranean Vault Parties
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Informal evening socials in Megalithic Hall's medieval Sarsen Vaults, including vintage mead tastings and post-banquet after-parties.
            </p>
          </div>

          {/* Pillar 3: Court Mentorship */}
          <div className="bg-white p-6 rounded-lg border border-slate-200 border-t-4 border-t-[#154c76] shadow-sm space-y-3">
            <div className="p-3 w-12 h-12 rounded bg-[#154c76]/10 text-[#154c76] flex items-center justify-center">
              <Users className="w-6 h-6 text-[#154c76]" />
            </div>
            <h3 className="text-lg font-serif-guild font-bold text-[#154c76]">
              Court Mentorship Scheme
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Every young Freeman is paired with a Senior Liveryman or Court Assistant for career guidance in structural engineering, law, and City civic life.
            </p>
          </div>

        </div>
      </div>

      {/* Join Young Freemen Callout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#092e4a] text-white p-8 rounded-lg border-l-4 border-amber-500 shadow-md text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-serif-guild font-bold text-amber-300">
            Join the Next Generation of Hengineers
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-garamond italic max-w-xl mx-auto">
            Are you under 35 and interested in stone masonry, civil engineering, or City Livery traditions? Apply for Young Freeman membership today.
          </p>
          <div className="pt-2">
            <a
              href="mailto:clerk@hengineer.org?subject=Young%20Freemen%20Network%20Inquiry"
              className="inline-block px-6 py-2.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-serif-guild font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Contact Clerk for Young Freemen Application
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
