import React from 'react';
import { MegalithCalculator } from '../MegalithCalculator';
import { SolsticeCanvas } from '../SolsticeCanvas';
import { MasonsMarksGenerator } from '../MasonsMarksGenerator';
import { Compass, Hammer } from 'lucide-react';

export const CraftPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-50 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
          <Hammer className="w-4 h-4 text-[#154c76]" />
          <span>Hengineering Mechanics &amp; Science</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-guild text-[#154c76] mb-3">
          Hengineering Craft &amp; Solstice Observatory
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-4" />
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
          Interactive tools computing sarsen transport friction mechanics, solar alignment geometry, and masons' mark registrations.
        </p>
      </div>

      {/* Sarsen Transport Calculator */}
      <MegalithCalculator />

      {/* Megalithic Masons' Marks Generator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MasonsMarksGenerator />
      </div>

      {/* Solstice Alignment Observatory */}
      <SolsticeCanvas />

    </div>
  );
};
