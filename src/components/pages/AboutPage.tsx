import React from 'react';
import { HistoryTimeline } from '../HistoryTimeline';
import { CoatOfArms } from '../CoatOfArms';
import { Landmark, Flame, Scroll, ShieldCheck, ExternalLink, Building2, Shield } from 'lucide-react';

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

      {/* College of Arms Heraldry & Blazon Card */}
      <div id="heraldry" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm border-t-4 border-t-amber-500 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex justify-center">
            <div className="p-6 rounded-lg bg-[#092e4a] border border-amber-500/40 text-center shadow-md">
              <CoatOfArms size="lg" className="mx-auto mb-3" />
              <span className="font-serif-guild text-amber-300 font-bold text-xs uppercase tracking-widest block">
                College of Arms Grant
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-amber-500/10 text-amber-900 text-xs font-serif-guild font-bold uppercase tracking-wider">
              <Shield className="w-4 h-4 text-amber-600" />
              <span>Official Heraldic Blazon</span>
            </div>

            <h3 className="text-xl font-serif-guild font-bold text-[#154c76]">
              The Guild Coat of Arms &amp; Latin Motto
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Granted under Letters Patent by Garter Principal King of Arms, the armorial bearings of the Worshipful Company embody four millennia of sarsen engineering and astronomical alignment.
            </p>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs text-slate-700 space-y-2 font-mono">
              <p><strong className="text-[#154c76] font-serif-guild">Arms (Blazon):</strong> Azure, a sarsen stone trilithon Or, in chief two plumb-bobs of the second.</p>
              <p><strong className="text-[#154c76] font-serif-guild">Crest:</strong> Upon a helm with a torse Or and Azure, a golden sarsen trilithon proper.</p>
              <p><strong className="text-[#154c76] font-serif-guild">Motto:</strong> <span className="font-garamond italic text-amber-900 font-bold">"Saxa Ligamus, Saecula Stabilimus"</span> (We bind the stones, we stabilize the ages).</p>
            </div>
          </div>
        </div>
      </div>

      {/* Special Lore Blocks 1 & 2 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1515 Precedence Dispute */}
          <div id="dispute1515" className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm border-t-4 border-t-[#154c76] space-y-4">
            <div className="flex items-center space-x-3 text-[#154c76]">
              <Scroll className="w-6 h-6 text-amber-600 shrink-0" />
              <h3 className="text-lg font-serif-guild font-bold">
                The 1515 Aldermanic Precedence Dispute
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              In 1515, when Lord Mayor Sir William Butler established the formal Order of Precedence for City Livery Companies, the Megalith Builders were absent from the Court roll. Guild records reveal Master Hengineer William Stanhope was away supervising royal stone vaulting at Windsor Castle.
            </p>
            <div className="p-3 rounded bg-amber-50 border border-amber-200 text-xs text-amber-900 font-garamond italic font-semibold">
              "The Guild maintained silent precedence at Time Immemorial until its modern revival at Livery No. 115."
            </div>
          </div>

          {/* 1666 Great Fire Survival */}
          <div id="fire1666" className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm border-t-4 border-t-amber-500 space-y-4">
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

      {/* Armed Forces, Sister Livery & Industry Affiliations */}
      <div id="affiliations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-[#154c76] space-y-6">
          <div className="flex items-center space-x-3 text-[#154c76]">
            <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0" />
            <div>
              <h3 className="text-lg font-serif-guild font-bold">
                Sister Livery Companies &amp; Industry Affiliations
              </h3>
              <p className="text-xs text-slate-500">Official civic links with fellow City Livery Companies, British Military units, and natural stone federations.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Sister Livery */}
            <div className="p-4 rounded bg-slate-50 border border-slate-200 space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-[#154c76] font-serif-guild font-bold text-sm mb-1">
                  <Building2 className="w-4 h-4 text-amber-600" />
                  <span>The Worshipful Company of Masons</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sister City Livery Company (No. 30). Founded in 1356, representing operative and speculative stonemasons across the City of London.
                </p>
              </div>
              <a
                href="https://www.masonslivery.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#154c76] hover:text-amber-600 font-serif-guild uppercase tracking-wider pt-2 border-t border-slate-200"
              >
                <span>Visit masonslivery.org</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-600" />
              </a>
            </div>

            {/* Stone Federation GB */}
            <div className="p-4 rounded bg-slate-50 border border-slate-200 space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-[#154c76] font-serif-guild font-bold text-sm mb-1">
                  <Landmark className="w-4 h-4 text-amber-600" />
                  <span>Stone Federation Great Britain</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Official Trade Federation for the natural stone industry in Great Britain, promoting excellence in masonry, conservation, and quarrying.
                </p>
              </div>
              <a
                href="https://www.stonefed.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#154c76] hover:text-amber-600 font-serif-guild uppercase tracking-wider pt-2 border-t border-slate-200"
              >
                <span>Visit stonefed.org.uk</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-600" />
              </a>
            </div>

            {/* Military Affiliation */}
            <div className="p-4 rounded bg-slate-50 border border-slate-200 space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-[#154c76] font-serif-guild font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>39 Engineer Regiment (Royal Engineers)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Official Military Affiliation. Supporting military plant operators, quarry specialists, and heavy structural engineering squadrons.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[11px] font-semibold text-slate-500 font-mono">
                Military Affiliation • Royal Engineers
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Historical Timeline */}
      <HistoryTimeline />

    </div>
  );
};
