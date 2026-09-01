import React from 'react';
import { BanquetMenu } from '../BanquetMenu';
import { Wine, Sparkles } from 'lucide-react';

export const BanquetPage: React.FC = () => {
  return (
    <div className="py-12 bg-white space-y-12">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
          <Wine className="w-4 h-4 text-[#154c76]" />
          <span>Livery Banquets &amp; Vaults</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-guild text-[#154c76] mb-3">
          Annual Midsummer Solstice Banquet &amp; Cellar
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-4" />
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
          State dining menus, sommelier vintage cellar ledgers, and ancient City loving cup protocol.
        </p>
      </div>

      {/* Main Banquet Menu & Cellar Component */}
      <BanquetMenu />

      {/* Loving Cup Protocol */}
      <div id="lovingcup" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 p-6 sm:p-8 rounded-lg border border-slate-200 border-l-4 border-l-[#154c76] shadow-sm space-y-4">
          <div className="flex items-center space-x-3 text-[#154c76]">
            <Sparkles className="w-6 h-6 text-amber-600 shrink-0" />
            <h3 className="text-lg font-serif-guild font-bold">
              The Ceremonial Loving Cup Protocol &amp; Etiquette
            </h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Observed at all formal WCoMB Livery Dinners, the **Loving Cup** custom dates back to 978 AD. The heavy silver cup containing spiced mead is passed around the dining tables following a strict Anglo-Saxon safety ritual:
          </p>
          <div className="p-4 bg-white rounded border border-slate-200 text-xs text-slate-700 space-y-2">
            <div className="font-bold font-serif-guild text-[#154c76]">Loving Cup Ritual Sequence:</div>
            <ol className="list-decimal list-inside space-y-1 text-slate-600">
              <li>The diner holding the cup bows to their neighbour, who removes the silver lid.</li>
              <li>The neighbour holds the lid in their right hand (ensuring their dagger hand is occupied).</li>
              <li>A third diner stands guard behind the drinker to protect their back while drinking.</li>
              <li>The drinker wipes the rim with a linen napkin, bows, and passes the cup along.</li>
            </ol>
          </div>
        </div>
      </div>

    </div>
  );
};
