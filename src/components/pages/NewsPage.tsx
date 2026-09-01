import React from 'react';
import { GazetteAndCharity } from '../GazetteAndCharity';
import { BookOpen } from 'lucide-react';

export const NewsPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-50 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
          <BookOpen className="w-4 h-4 text-[#154c76]" />
          <span>Livery Gazette &amp; Grants</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-guild text-[#154c76] mb-3">
          News, Publications &amp; Educational Grants
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-4" />
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
          Stay informed with recent Livery news briefings, research papers, and £250,000 in stone masonry apprenticeships.
        </p>
      </div>

      {/* Main News & Charity Component */}
      <GazetteAndCharity />

    </div>
  );
};
