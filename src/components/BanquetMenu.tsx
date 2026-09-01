import React, { useState } from 'react';
import { UtensilsCrossed, Wine, Calendar, Award, Sparkles, Check, ChevronRight } from 'lucide-react';

export const BanquetMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'menu' | 'cellar'>('menu');

  const menuCourses = [
    {
      course: 'First Course • Starter',
      title: 'Cured Wiltshire Trout & Wild Fennel',
      description: 'Hand-cured trout with wild Salisbury Plain fennel, pickled elderberry pearls, and Guild mead emulsion.',
      pairing: 'Chablis Premier Cru "Montmains" 2020',
    },
    {
      course: 'Main Course • State Roast',
      title: 'Sarsen-Smoked Wiltshire Venison Loin',
      description: 'Loin of venison slow-roasted over oak and sarsen stone embers, served with roasted root vegetables, potato galette, and wild blackberry jus.',
      pairing: 'Château Léoville-Barton, Saint-Julien 2014',
    },
    {
      course: 'Dessert Course',
      title: 'Solstice Honey & Lavender Tartlet',
      description: 'Crisp pastry filled with Wiltshire wildflower honey ganache, candied lavender, and Dorset clotted cream.',
      pairing: 'Château d’Yquem Sauternes 2011',
    },
    {
      course: 'Post-Dinner Guild Savoury & Mead',
      title: 'Monmouthshire Blue & Vintage Guild Mead',
      description: 'Aged Monmouthshire blue cheese served with stone-baked water biscuits and 1998 Guild Cask Mead.',
      pairing: 'Taylor’s Vintage Port 2003',
    },
  ];

  const cellarInventory = [
    { name: 'WCoMB Cask Reserve Mead (Solstice Batch)', vintage: '1998', region: 'Salisbury Cellars', stock: '24 Bottles', status: 'Reserved for Master’s Table' },
    { name: 'Château Léoville-Barton, Saint-Julien', vintage: '2014', region: 'Bordeaux, France', stock: '120 Bottles', status: 'Available for Banquets' },
    { name: 'Chablis Premier Cru "Montmains"', vintage: '2020', region: 'Burgundy, France', stock: '85 Bottles', status: 'Available for Banquets' },
    { name: 'Taylor’s Vintage Port', vintage: '2003', region: 'Douro, Portugal', stock: '48 Bottles', status: 'Liveryman Dinners' },
    { name: 'Pol Roger Sir Winston Churchill Champagne', vintage: '2012', region: 'Champagne, France', stock: '60 Bottles', status: 'Master’s Reception' },
  ];

  return (
    <section id="menu" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
            <UtensilsCrossed className="w-4 h-4 text-amber-600" />
            <span>Civic Dining &amp; Hospitality</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-guild text-[#154c76] mb-3">
            Annual Midsummer Solstice Banquet Menu &amp; Cellar
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The Master Hengineer and Wardens invite Freemen &amp; Civic Guests to the Annual Midsummer Solstice Banquet held at Megalithic Hall.
          </p>
        </div>

        {/* Candid Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-50 flex flex-col">
            <div className="h-48 overflow-hidden">
              <img
                src="/images/solstice_banquet_hall.jpg"
                alt="Candlelit Midsummer Solstice Banquet at Megalithic Hall"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h4 className="font-serif-guild font-bold text-[#154c76] text-sm mb-1">Megalithic Hall Dining Room</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Candlelit long tables set with silver candelabras and white linen in the hammerbeam Great Trilithon Room.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-50 flex flex-col">
            <div className="h-48 overflow-hidden">
              <img
                src="/images/solstice_dish_venison.jpg"
                alt="Plated Sarsen-Smoked Wiltshire Venison Loin"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h4 className="font-serif-guild font-bold text-[#154c76] text-sm mb-1">Sarsen-Smoked Venison</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                State main course featuring smoked Wiltshire venison, roasted root vegetables, and wild blackberry jus.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-50 flex flex-col">
            <div className="h-48 overflow-hidden">
              <img
                src="/images/solstice_menu_card.jpg"
                alt="Printed Formal Solstice Banquet Menu Card"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h4 className="font-serif-guild font-bold text-[#154c76] text-sm mb-1">Official Guild Menu Card</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Printed card stock menu displaying four formal courses and sommelier wine pairings.
              </p>
            </div>
          </div>

        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-lg bg-slate-100 border border-slate-200">
            <button
              type="button"
              onClick={() => setActiveTab('menu')}
              className={`px-5 py-2 rounded-md font-serif-guild text-xs font-bold uppercase tracking-wider transition-colors flex items-center space-x-2 ${
                activeTab === 'menu' ? 'bg-[#154c76] text-white shadow' : 'text-slate-600 hover:text-[#154c76]'
              }`}
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>4-Course State Menu</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('cellar')}
              className={`px-5 py-2 rounded-md font-serif-guild text-xs font-bold uppercase tracking-wider transition-colors flex items-center space-x-2 ${
                activeTab === 'cellar' ? 'bg-[#154c76] text-white shadow' : 'text-slate-600 hover:text-[#154c76]'
              }`}
            >
              <Wine className="w-4 h-4" />
              <span>The Cellar Ledger</span>
            </button>
          </div>
        </div>

        {/* TAB 1: MENU COURSES */}
        {activeTab === 'menu' && (
          <div className="max-w-4xl mx-auto bg-slate-50 p-6 sm:p-10 rounded-lg border border-slate-200 border-t-4 border-t-[#154c76] shadow-sm">
            <div className="text-center mb-8">
              <span className="font-serif-guild text-xs uppercase tracking-widest text-amber-800 font-bold block mb-1">
                City of London Banquet Protocol
              </span>
              <h3 className="font-serif-guild text-2xl font-extrabold text-[#154c76]">
                Midsummer Solstice State Menu
              </h3>
              <p className="font-garamond italic text-sm text-slate-500 mt-1">
                Hosted by Master Hengineer Sir Alistair Trilithon, FIME
              </p>
            </div>

            <div className="space-y-6">
              {menuCourses.map((c, i) => (
                <div key={c.title} className="bg-white p-5 rounded border border-slate-200 shadow-2xs flex flex-col sm:flex-row justify-between gap-4 items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                      {c.course}
                    </span>
                    <h4 className="text-base font-serif-guild font-bold text-[#154c76]">
                      {c.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                      {c.description}
                    </p>
                  </div>

                  <div className="sm:text-right shrink-0 border-t sm:border-t-0 sm:border-l border-slate-100 pt-2 sm:pt-0 sm:pl-4">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Sommelier Pairing</span>
                    <span className="text-xs font-garamond italic font-bold text-[#154c76]">{c.pairing}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-serif-guild">
              <span>Banqueting Manager: Mr. Septimus Megalith, Esq.</span>
              <a href="#hall" className="text-[#154c76] font-bold hover:underline flex items-center space-x-1 mt-2 sm:mt-0">
                <span>Inquire for Private Banquet Hire</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* TAB 2: CELLAR LEDGER */}
        {activeTab === 'cellar' && (
          <div className="max-w-4xl mx-auto bg-slate-50 p-6 sm:p-10 rounded-lg border border-slate-200 border-t-4 border-t-amber-500 shadow-sm">
            <div className="text-center mb-8">
              <span className="font-serif-guild text-xs uppercase tracking-widest text-amber-800 font-bold block mb-1">
                Subterranean Megalithic Vaults
              </span>
              <h3 className="font-serif-guild text-2xl font-extrabold text-[#154c76]">
                Guild Wine &amp; Vintage Mead Inventory
              </h3>
              <p className="font-garamond italic text-sm text-slate-500 mt-1">
                Under the Custody of Renter Warden Lord Bartholomew Bluestone, JP
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-[#154c76] text-white font-serif-guild text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="p-3">Wine / Vintage Mead</th>
                    <th className="p-3">Vintage</th>
                    <th className="p-3">Appellation / Region</th>
                    <th className="p-3">Cellar Stock</th>
                    <th className="p-3">Allocation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {cellarInventory.map((item) => (
                    <tr key={item.name} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-bold font-serif-guild text-[#154c76]">{item.name}</td>
                      <td className="p-3 font-mono">{item.vintage}</td>
                      <td className="p-3">{item.region}</td>
                      <td className="p-3 font-semibold text-slate-900">{item.stock}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-slate-500 italic text-center mt-6">
              * Access to vintage mead tastings is granted to sworn Freemen of the City of London during Court Meetings.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
