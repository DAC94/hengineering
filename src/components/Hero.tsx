import React from 'react';
import { CoatOfArms } from './CoatOfArms';
import { Landmark, Award, BookOpen, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-white text-slate-800">
      
      {/* 1. Hero Image Banner with Elegant Overlay */}
      <div className="relative w-full h-[420px] bg-gradient-to-r from-[#092e4a] via-[#154c76] to-[#092e4a] overflow-hidden border-b-4 border-amber-500 flex items-center justify-center">
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
            <a
              href="#history"
              className="px-6 py-2.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-serif-guild font-bold text-xs uppercase tracking-wider shadow transition-colors"
            >
              Discover Our History
            </a>
            <a
              href="#freedom"
              className="px-6 py-2.5 rounded bg-slate-900/80 hover:bg-slate-900 text-amber-200 border border-amber-400/40 font-serif-guild font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Apply for Freedom of the City
            </a>
          </div>
        </div>
      </div>

      {/* 2. Welcome Statement & Feature Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Welcome Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-guild text-[#154c76] mb-3">
            Welcome to The Worshipful Company of Megalith Builders
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            The Worshipful Company of Megalith Builders (*The Hengineers*) is one of the ancient Livery Companies of the City of London. Incorporating all branches of megalithic stone engineering, lintel lifting, archaeo-astronomy, and structural conservation, our Livery supports charitable education, grants, and civic duties in the City and nationwide.
          </p>
        </div>

        {/* 3 Main Highlight Tiles (Matching WCoBM homepage layout) */}
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
            <a
              href="#history"
              className="text-xs font-bold text-[#154c76] hover:text-amber-600 flex items-center space-x-1 pt-2 border-t border-slate-100"
            >
              <span>Learn About Our Heritage</span>
              <ChevronRight className="w-4 h-4" />
            </a>
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
            <a
              href="#freedom"
              className="text-xs font-bold text-[#154c76] hover:text-amber-600 flex items-center space-x-1 pt-2 border-t border-slate-100"
            >
              <span>Apply for Membership</span>
              <ChevronRight className="w-4 h-4" />
            </a>
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
            <a
              href="#gazette"
              className="text-xs font-bold text-[#154c76] hover:text-amber-600 flex items-center space-x-1 pt-2 border-t border-slate-100"
            >
              <span>Explore Grants &amp; Papers</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
