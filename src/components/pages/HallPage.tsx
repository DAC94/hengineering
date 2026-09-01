import React from 'react';
import { HallRental } from '../HallRental';
import { Building2 } from 'lucide-react';

export const HallPage: React.FC = () => {
  return (
    <div className="py-12 bg-white space-y-12">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
          <Building2 className="w-4 h-4 text-[#154c76]" />
          <span>Livery Hall Venue Hire</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-guild text-[#154c76] mb-3">
          Megalithic Hall • Gresham Street, City of London
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-4" />
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
          Host banquets, corporate symposia, and formal receptions in the historic heart of the City of London.
        </p>
      </div>

      {/* Main Hall Rental Component */}
      <HallRental />

    </div>
  );
};
