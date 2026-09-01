import React from 'react';
import { FreedomApplication } from '../FreedomApplication';
import { Award, Compass } from 'lucide-react';

export const FreedomPage: React.FC = () => {
  return (
    <div className="py-12 bg-white space-y-12">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
          <Award className="w-4 h-4 text-[#154c76]" />
          <span>Freedom of the City of London</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-guild text-[#154c76] mb-3">
          Freedom of Guild &amp; Ancient Civic Rights
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-4" />
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
          Complete the Freeman's Examination to claim your parchment Certificate of Freedom and exercise ancient City rights.
        </p>
      </div>

      {/* London Bridge Sheep Drive Notice */}
      <div id="sheepdrive" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50/70 p-6 sm:p-8 rounded-lg border border-amber-200 border-l-4 border-l-amber-600 shadow-sm space-y-4">
          <div className="flex items-center space-x-3 text-[#154c76]">
            <Compass className="w-6 h-6 text-amber-600 shrink-0" />
            <h3 className="text-lg font-serif-guild font-bold text-[#154c76]">
              Guild Notice: Annual London Bridge Lintel &amp; Sheep Drive
            </h3>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-normal">
            Under ancient City of London custom, sworn Freemen of the Megalith Builders hold the right to drive a flock of sheep carrying a 5-tonne sarsen lintel across London Bridge toll-free.
          </p>
          <div className="p-4 bg-white rounded border border-amber-200 text-xs text-slate-800 space-y-2 font-mono">
            <div className="font-bold text-[#154c76] font-serif-guild">Marshal Instructions for Sept 2026 Drive:</div>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>All sheep must be tethered with hemp rope; sarsen rollers lubricated with mutton tallow.</li>
              <li>Counterweight levers must be manned by at least 4 indentured apprentices.</li>
              <li>Toll exemption badges must be displayed to City Police officers at the Bridge approach.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Freeman Exam & Parchment Certificate Application */}
      <FreedomApplication />

    </div>
  );
};
