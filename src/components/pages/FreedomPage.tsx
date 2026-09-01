import React from 'react';
import { FreedomApplication } from '../FreedomApplication';
import { Award, Compass, Vote, Receipt } from 'lucide-react';

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

      {/* Common Hall Elections & Voting Rights */}
      <div id="commonhall" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 p-6 sm:p-8 rounded-lg border border-slate-200 border-l-4 border-l-[#154c76] shadow-sm space-y-4">
          <div className="flex items-center space-x-3 text-[#154c76]">
            <Vote className="w-6 h-6 text-amber-600 shrink-0" />
            <h3 className="text-lg font-serif-guild font-bold">
              Guildhall Common Hall Voting Notice • Lord Mayor &amp; Sheriffs Elections
            </h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Sworn Liverymen of Company No. 115 possess the ancient civic right to assemble in **Common Hall** at Guildhall twice annually:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
            <div className="p-4 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-[#154c76] block font-serif-guild">Election of Sheriffs (Midsummer Day)</span>
              <span className="text-[11px] text-amber-800 font-mono font-bold block">24 June • Guildhall Great Hall</span>
              <p className="text-slate-600 text-[11px]">Voting for the two Sheriffs of the City of London.</p>
            </div>
            <div className="p-4 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-[#154c76] block font-serif-guild">Election of Lord Mayor (Michaelmas Day)</span>
              <span className="text-[11px] text-amber-800 font-mono font-bold block">29 September • Guildhall Yard</span>
              <p className="text-slate-600 text-[11px]">Voting for the Rt Hon The Lord Mayor of the City of London.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quarterage Dues & Admission Guidelines */}
      <div id="dues" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 p-6 sm:p-8 rounded-lg border border-slate-200 border-l-4 border-l-amber-500 shadow-sm space-y-4">
          <div className="flex items-center space-x-3 text-[#154c76]">
            <Receipt className="w-6 h-6 text-amber-600 shrink-0" />
            <h3 className="text-lg font-serif-guild font-bold">
              Livery Admission Pathways &amp; Annual Quarterage Dues
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#154c76] text-white font-serif-guild text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="p-3">Admission Pathway</th>
                  <th className="p-3">Eligibility Requirement</th>
                  <th className="p-3">Fine on Entry</th>
                  <th className="p-3">Annual Quarterage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold font-serif-guild text-[#154c76]">By Redemption</td>
                  <td className="p-3">Passed Freeman Examination or approved by Court</td>
                  <td className="p-3 font-mono">£250.00</td>
                  <td className="p-3 font-mono font-bold text-amber-800">£115.00 / yr</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold font-serif-guild text-[#154c76]">By Servitude</td>
                  <td className="p-3">7-year indentured stone masonry apprenticeship</td>
                  <td className="p-3 font-mono">£50.00</td>
                  <td className="p-3 font-mono font-bold text-amber-800">£50.00 / yr</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold font-serif-guild text-[#154c76]">By Patrimony</td>
                  <td className="p-3">Child of a sworn Freeman born after parents' admission</td>
                  <td className="p-3 font-mono">£100.00</td>
                  <td className="p-3 font-mono font-bold text-amber-800">£115.00 / yr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Freeman Exam & Parchment Certificate Application */}
      <FreedomApplication />

    </div>
  );
};
