import React, { useState } from 'react';
import { Sparkles, Users, Award, ChevronLeft, ChevronRight, Music, Mail, ShieldCheck, Film, Play } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  location: string;
  description: string;
  imageSrc: string;
  tag: string;
}

export const YouthPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'Great Room After-Party',
      location: 'Megalithic Hall • Gresham Street, City of London',
      description: 'Young Freemen and under-35 guests dancing in evening wear under the historic 17th-century hammerbeam roof following the Annual Solstice Dinner.',
      imageSrc: '/images/youth_dancing_hall.png',
      tag: 'City Socials',
    },
    {
      id: 2,
      title: 'Midsummer Solstice Sunrise Dance at Salisbury Plain',
      location: 'The Trilithons • Wiltshire Sanctuary',
      description: 'Young Hengineers celebrating the Midsummer solstice dawn with music and acoustic stone resonance amidst the ancient megaliths.',
      imageSrc: '/images/youth_dancing_henge.png',
      tag: 'Fieldwork Socials',
    },
  ];

  const youthLeaders = [
    {
      role: 'Chair of Next Gen Network',
      name: 'Ms. Cordelia Sterling, MEng',
      title: 'Junior Warden & Committee Chair',
      bio: 'Partner at Arup Heavy Structures. Leads under-35 recruitment, parametric stone modeling initiatives, and Guild modernization.',
      email: 'cordelia.sterling@hengineer.org',
      photo: '/images/officer_cordelia_sterling.png',
      initials: 'CS',
    },
    {
      role: 'Deputy Chair & Events Officer',
      name: 'Mr. Julian Thorne, MA (Oxon)',
      title: 'Deputy Chair of Next Gen Network',
      bio: 'Senior Associate at Heritage Stone Conservation UK. Coordinates young Freemen vault socials, solstice retreats, and apprentice mentorship.',
      email: 'julian.thorne@hengineer.org',
      photo: '/images/officer_julian_thorne.png',
      initials: 'JT',
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

      {/* Featured Video Showcase Player */}
      <div id="recruitment-video" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#092e4a] rounded-lg border-2 border-amber-500/60 shadow-xl overflow-hidden">
          
          <div className="p-4 bg-[#154c76] text-white flex justify-between items-center border-b border-amber-500/30">
            <div className="flex items-center space-x-2 text-xs font-serif-guild font-bold text-amber-300">
              <Film className="w-4 h-4 text-amber-400" />
              <span>Official 2026 Recruitment Film • The Next Gen Hengineers</span>
            </div>
            <span className="text-[11px] font-mono text-slate-300 bg-slate-900/60 px-2.5 py-0.5 rounded border border-slate-700">
              HD Video • City Company No. 115
            </span>
          </div>

          <div className="relative bg-slate-950 aspect-video flex items-center justify-center overflow-hidden">
            <video
              src="/images/advertisement_video.mp4"
              controls
              poster="/images/youth_dancing_hall.png"
              preload="metadata"
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
              className="w-full h-full object-contain"
            >
              Your browser does not support HTML5 video playback.
            </video>
          </div>

          <div className="p-4 bg-[#092e4a] text-slate-300 flex flex-col sm:flex-row justify-between items-center text-xs gap-2">
            <div className="font-serif-guild text-amber-300 font-semibold">
              🎬 "4,000 Years of Sarsen Tradition — Join the Freedom Today"
            </div>
            <div className="font-mono text-[11px] text-slate-400">
              Megalithic Hall Media Archives • EC2V 7HH
            </div>
          </div>

        </div>
      </div>

      {/* Real Image Carousel */}
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
          <div className="relative bg-slate-900 h-80 sm:h-96 flex items-center justify-center overflow-hidden">
            <img
              src={slides[currentSlide].imageSrc}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

            {/* Overlay Info Card */}
            <div className="absolute bottom-6 left-6 right-6 text-left space-y-2 text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-serif-guild font-bold text-xs uppercase tracking-wider">
                {slides[currentSlide].tag}
              </span>
              <h3 className="text-lg sm:text-xl font-serif-guild font-bold text-amber-300">
                {slides[currentSlide].title}
              </h3>
              <p className="text-xs text-slate-200 max-w-2xl leading-relaxed font-normal">
                {slides[currentSlide].description}
              </p>
              <div className="text-[11px] text-slate-400 font-serif-guild font-bold">
                📍 {slides[currentSlide].location}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 hover:bg-amber-500 hover:text-slate-950 text-white transition-colors cursor-pointer border border-slate-700 z-10"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 hover:bg-amber-500 hover:text-slate-950 text-white transition-colors cursor-pointer border border-slate-700 z-10"
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

      {/* Next Gen Leadership & Committee Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-[#154c76]" />
            <span>Network Officers</span>
          </div>
          <h2 className="text-2xl font-extrabold font-serif-guild text-[#154c76]">
            Next Gen Committee Leadership
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {youthLeaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-white p-6 rounded-lg border border-slate-200 border-t-4 border-t-amber-500 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-5">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-amber-400 bg-[#154c76] flex items-center justify-center shrink-0 shadow-md">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          e.currentTarget.style.display = 'none';
                          const fallbackText = document.createElement('span');
                          fallbackText.className = 'font-serif-guild text-2xl font-bold text-amber-300';
                          fallbackText.innerText = leader.initials;
                          parent.appendChild(fallbackText);
                        }
                      }}
                    />
                  </div>

                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-wider mb-1">
                      {leader.role}
                    </span>
                    <h3 className="text-base font-serif-guild font-bold text-[#154c76]">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-garamond italic font-semibold text-amber-800">
                      {leader.title}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal pt-2 border-t border-slate-100">
                  {leader.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-[#154c76]">
                <a
                  href={`mailto:${leader.email}`}
                  className="font-mono text-[11px] font-semibold text-[#154c76] hover:text-amber-600 flex items-center space-x-1"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-600" />
                  <span>{leader.email}</span>
                </a>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Under 35 Committee</span>
              </div>
            </div>
          ))}
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
              href="mailto:cordelia.sterling@hengineer.org?subject=Young%20Freemen%20Network%20Inquiry"
              className="inline-block px-6 py-2.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-serif-guild font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Contact Cordelia Sterling for Application Details
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
