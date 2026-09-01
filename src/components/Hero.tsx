import React, { useState } from 'react';
import { Landmark, Award, BookOpen, ChevronRight, Sparkles, Compass, Play, Film } from 'lucide-react';
import { RecruitmentVideoModal } from './RecruitmentVideoModal';

interface HeroProps {
  onNavigate?: (tab: string, sectionId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);

  const handleAction = (tab: string, sectionId?: string) => {
    if (onNavigate) {
      onNavigate(tab, sectionId);
    }
  };

  return (
    <section className="bg-white text-slate-800">
      
      {/* 1. Hero Image Banner with Elegant Overlay */}
      <div className="relative w-full h-[450px] bg-gradient-to-r from-[#092e4a] via-[#154c76] to-[#092e4a] overflow-hidden border-b-4 border-amber-500 flex items-center justify-center">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
        
        <div className="relative max-w-5xl mx-auto px-4 text-center text-white space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs uppercase tracking-widest font-serif-guild">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Precedence: Time Immemorial • Livery Company No. 115</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif-guild tracking-tight text-white leading-tight">
            Preserving Stone Craft &amp; Hengineering <br className="hidden sm:inline" />
            in the City of London Since 2500 BC
          </h2>

          <p className="font-garamond italic text-lg sm:text-xl text-amber-200/90 max-w-2xl mx-auto">
            "Saxa Ligamus, Saecula Stabilimus"
            <span className="block text-xs font-sans not-italic text-slate-300 uppercase tracking-widest mt-1">
              (We bind the stones, we stabilize the ages)
            </span>
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <button
              type="button"
              onClick={() => handleAction('about', 'history')}
              className="px-6 py-2.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-serif-guild font-bold text-xs uppercase tracking-wider shadow transition-colors cursor-pointer"
            >
              Discover Our History
            </button>
            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="px-6 py-2.5 rounded bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-400/60 font-serif-guild font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center space-x-2"
            >
              <Play className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>Watch Recruitment Film</span>
            </button>
            <button
              type="button"
              onClick={() => handleAction('freedom', 'freedom')}
              className="px-6 py-2.5 rounded bg-slate-900/80 hover:bg-slate-900 text-slate-200 border border-slate-700 font-serif-guild font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Apply for Freedom of the City
            </button>
          </div>
        </div>
      </div>

      {/* 2. Welcome Statement & Hengineering Image Feature */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-12">
        
        {/* Welcome Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-guild text-[#154c76] mb-3">
            Welcome to The Worshipful Company of Megalith Builders
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            The Worshipful Company of Megalith Builders (<em>The Hengineers</em>) is one of the ancient Livery Companies of the City of London. Incorporating all branches of megalithic stone engineering, lintel lifting, archaeo-astronomy, and structural conservation, our Livery supports charitable education, grants, and civic duties in the City and nationwide.
          </p>
        </div>

        {/* Hengineers at Work Feature Showcase */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-[#154c76] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 overflow-hidden rounded-lg border border-slate-300 shadow-md relative group">
            <img
              src="/images/hengineers_work.jpg"
              alt="Master Hengineers and stonemasons hauling a 25-tonne sarsen stone on oak rollers"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="absolute inset-0 bg-slate-950/40 hover:bg-slate-950/20 transition-colors flex items-center justify-center group/play cursor-pointer"
            >
              <div className="p-4 rounded-full bg-amber-500 text-slate-950 shadow-xl group-hover/play:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-slate-950 ml-1" />
              </div>
            </button>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-amber-600" />
              <span>The Craft of Hengineering</span>
            </div>

            <h3 className="text-xl font-serif-guild font-bold text-[#154c76]">
              Mastery of Sarsen Mechanics &amp; Timber Rollers
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              For over four millennia, Guild masons have perfected the physics of transporting monolithic stones weighing up to 25 tonnes across Salisbury Plain using seasoned oak rollers, counter-weight levers, and hemp rigging.
            </p>

            <div className="p-3 bg-white rounded border border-slate-200 text-xs text-amber-900 font-garamond italic font-semibold">
              "Without the plumb bob, the lever, and the roller, no lintel shall rest true." — Guild Charter of 1100 AD
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded bg-[#154c76] text-white text-xs font-bold font-serif-guild uppercase tracking-wider hover:bg-[#092e4a] cursor-pointer"
              >
                <Film className="w-4 h-4 text-amber-400" />
                <span>Watch Recruitment Film</span>
              </button>
              <button
                type="button"
                onClick={() => handleAction('craft', 'calculator')}
                className="inline-flex items-center space-x-2 text-xs font-bold text-[#154c76] hover:text-amber-600 font-serif-guild uppercase tracking-wider cursor-pointer py-2"
              >
                <span>Sarsen Calculator</span>
                <ChevronRight className="w-4 h-4 text-amber-600" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Main Highlight Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tile 1: About & History */}
          <div className="card-livery p-6 rounded-lg flex flex-col justify-between">
            <div>
              <div className="p-3 w-12 h-12 rounded bg-[#154c76]/10 text-[#154c76] mb-4">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif-guild font-bold text-[#154c76] mb-2">
                History &amp; Royal Charter
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Incorporated by Royal Charter under King Henry I in 1100 AD, confirming ancient rights established at Salisbury Plain c. 2500 BC.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleAction('about', 'history')}
              className="text-xs font-bold text-[#154c76] hover:text-amber-600 flex items-center space-x-1 pt-2 border-t border-slate-100 cursor-pointer w-full text-left"
            >
              <span>Learn About Our Heritage</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tile 2: Freedom & Membership */}
          <div className="card-livery p-6 rounded-lg card-gold-top flex flex-col justify-between">
            <div>
              <div className="p-3 w-12 h-12 rounded bg-amber-500/10 text-amber-700 mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif-guild font-bold text-[#154c76] mb-2">
                Freedom of the City
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Pass the Guild Freeman Examination to earn your parchment Certificate of Freedom and join our fellowship of sarsen masons.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleAction('freedom', 'freedom')}
              className="text-xs font-bold text-[#154c76] hover:text-amber-600 flex items-center space-x-1 pt-2 border-t border-slate-100 cursor-pointer w-full text-left"
            >
              <span>Apply for Membership</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tile 3: Education & Grants */}
          <div className="card-livery p-6 rounded-lg flex flex-col justify-between">
            <div>
              <div className="p-3 w-12 h-12 rounded bg-[#154c76]/10 text-[#154c76] mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif-guild font-bold text-[#154c76] mb-2">
                Education &amp; Philanthropy
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Our Charitable Trust provides £250,000 annually in stone masonry apprenticeships, university bursaries, and research grants.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleAction('news')}
              className="text-xs font-bold text-[#154c76] hover:text-amber-600 flex items-center space-x-1 pt-2 border-t border-slate-100 cursor-pointer w-full text-left"
            >
              <span>Explore Grants &amp; Papers</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Recruitment Video Modal Theater */}
      <RecruitmentVideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

    </section>
  );
};
