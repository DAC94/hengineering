import React from 'react';
import { BookOpen, GraduationCap, HeartHandshake, FileText, ArrowRight, Sparkles } from 'lucide-react';

export const GazetteAndCharity: React.FC = () => {
  const articles = [
    {
      title: 'Four New Freemen Admitted to WCoMB',
      date: 'July 2026',
      category: 'Guild News',
      excerpt: 'Four new Freemen were admitted to the Worshipful Company of Megalith Builders at a ceremony held at Megalithic Hall in the City of London.',
      author: 'The Clerk',
    },
    {
      title: 'New Brochure Promotes WCoMB Educational Grants',
      date: 'June 2026',
      category: 'Grants & Philanthropy',
      excerpt: 'The Worshipful Company is calling on young stone masons and engineering students to apply for £250,000 in annual bursaries.',
      author: 'Education Committee',
    },
    {
      title: 'City Livery Briefing & Midsummer Solstice Banquet',
      date: 'May 2026',
      category: 'Livery Movement',
      excerpt: 'Master Hengineer Sir Alistair Trilithon welcomed over 150 members and civic guests to the annual Solstice Dinner at Mansion House.',
      author: 'The Master',
    },
  ];

  return (
    <section id="gazette" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4 text-[#154c76]" />
            <span>News &amp; Philanthropy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-guild text-[#154c76] mb-3">
            Latest Guild News &amp; Educational Grants
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Stay informed with recent Livery news, training grants, and research publications from the Worshipful Company.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* News Tiles (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-serif-guild font-bold text-[#154c76] border-b border-slate-200 pb-3 flex items-center space-x-2">
              <FileText className="w-5 h-5 text-[#154c76]" />
              <span>Recent News &amp; Livery Briefings</span>
            </h3>

            <div className="space-y-4">
              {articles.map((art) => (
                <div
                  key={art.title}
                  className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-[#154c76] hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded">
                      {art.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{art.date}</span>
                  </div>
                  
                  <h4 className="text-base font-serif-guild font-bold text-[#154c76] hover:text-amber-600 transition-colors mb-2">
                    {art.title}
                  </h4>
                  
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {art.excerpt}
                  </p>

                  <div className="flex justify-between items-center text-xs border-t border-slate-100 pt-3">
                    <span className="text-slate-500 font-garamond italic font-semibold">By {art.author}</span>
                    <a
                      href="#gazette"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Opening story: ${art.title}`);
                      }}
                      className="text-[#154c76] font-bold flex items-center space-x-1 hover:text-amber-600"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Grants Panel (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-serif-guild font-bold text-[#154c76] border-b border-slate-200 pb-3 flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-[#154c76]" />
              <span>Training, Grants &amp; Apprenticeships</span>
            </h3>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 border-t-4 border-t-amber-500 shadow-sm space-y-6">
              <div className="p-4 rounded bg-[#154c76] text-white text-center">
                <div className="text-3xl font-serif-guild font-bold text-amber-300">£250,000</div>
                <div className="text-xs text-slate-200 uppercase tracking-widest font-serif-guild mt-1">Annual Educational Trust Fund</div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded bg-amber-50 text-amber-700 shrink-0 border border-amber-200">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif-guild font-bold text-[#154c76]">Indentured Apprenticeships</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Funding 4-year indentured apprenticeships in heritage stone masonry, lintel counter-balancing, and conservation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded bg-amber-50 text-amber-700 shrink-0 border border-amber-200">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif-guild font-bold text-[#154c76]">University Bursaries</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Supporting postgraduate research in archaeo-astronomy, structural stone friction, and civil engineering.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => alert("Grant application forms may be requested via the Clerk at clerk@hengineering.org.")}
                className="w-full py-3 rounded bg-[#154c76] hover:bg-[#092e4a] text-white font-serif-guild text-xs uppercase tracking-wider font-bold transition-colors"
              >
                Apply for Guild Educational Grant
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
