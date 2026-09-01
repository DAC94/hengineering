import React from 'react';
import { HistoryTimeline } from '../HistoryTimeline';
import { Landmark, ShieldAlert, Flame, BookOpen, Scroll } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-50 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
          <Landmark className="w-4 h-4 text-[#154c76]" />
          <span>Guild History &amp; Charters</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-guild text-[#154c76] mb-3">
          About The Worshipful Company of Megalith Builders
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-4" />
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
          Tracing four millennia of sarsen stone mechanics, Royal Charters, Great Fire survivals, and civic duty in the City of London.
        </p>
      </div>

      {/* Special Lore Block 1: 1515 Precedence Dispute */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm border-t-4 border-t-[#154c76] space-y-4">
            <div className="flex items-center space-x-3 text-[#154c76]">
              <Scroll className="w-6 h-6 text-amber-600 shrink-0" />
              <h3 className="text-lg font-serif-guild font-bold">
                The 1515 Aldermanic Precedence Dispute
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              In 1515, when Lord Mayor Sir William Butler established the formal Order of Precedence for City Livery Companies, the Megalith Builders were absent from the Court roll. Guild records reveal Master Hengineer William Lintel was away supervising royal stone vaulting at Windsor Castle.
            </p>
            <div className="p-3 rounded bg-amber-50 border border-amber-200 text-xs text-amber-900 font-garamond italic font-semibold">
              "The Guild maintained silent precedence at Time Immemorial until its modern revival at Livery No. 115."
            </div>
          </div>

          {/* Special Lore Block 2: 1666 Great Fire Survival */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm border-t-4 border-t-amber-500 space-y-4">
            <div className="flex items-center space-x-3 text-[#154c76]">
              <Flame className="w-6 h-6 text-amber-600 shrink-0" />
              <h3 className="text-lg font-serif-guild font-bold">
                The 1666 Great Fire Disaster Archive
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              During the Great Fire of London in September 1666, the wooden upper timbers of Megalithic Hall burned, but the subterranean Sarsen Vaults survived intact, protecting the Guild's 12th-century plumb bobs, levelling tools, and medieval charter chest.
            </p>
            <div className="p-3 rounded bg-slate-100 border border-slate-200 text-xs text-slate-700 font-mono">
              Samuel Pepys Diary (5 Sept 1666): "To Gresham Street, where the Megalith stone vaults stood unmoved amidst the ashes."
            </div>
          </div>

        </div>
      </div>

      {/* Main Historical Timeline */}
      <HistoryTimeline />

    </div>
  );
};
