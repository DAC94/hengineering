import React from 'react';
import { Hero } from '../Hero';
import { Landmark, Award, BookOpen, ChevronRight, ShieldCheck } from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Header & Welcome */}
      <Hero />

      {/* Quick Nav Action Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#092e4a] text-white p-8 rounded-lg border-l-4 border-amber-500 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-amber-400 font-serif-guild text-xs uppercase tracking-widest font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Livery Company No. 115 • City of London</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-guild font-bold text-white">
              Explore the Ancient Guild of Megalith Builders
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-garamond italic max-w-xl">
              From sarsen stone transport calculations to the Midsummer Solstice Banquet at Megalithic Hall, discover our heritage and civic traditions.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="px-5 py-2.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-serif-guild font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Our History &amp; Charters
            </button>
            <button
              type="button"
              onClick={() => onNavigate('banquet')}
              className="px-5 py-2.5 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/40 font-serif-guild font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Solstice Banquet Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
