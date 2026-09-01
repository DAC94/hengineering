import React, { useState, useMemo } from 'react';
import { BookOpen, GraduationCap, HeartHandshake, FileText, ArrowRight, Sparkles, AlertTriangle, X, Terminal } from 'lucide-react';

interface Article {
  id: string;
  year: number;
  month: number;
  monthName: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  docPath: string;
}

const ALL_ARTICLES: Article[] = [
  // 2024
  {
    id: 'sarsen-2024-01',
    year: 2024,
    month: 3,
    monthName: 'March 2024',
    title: 'Court Allocates £150,000 to Salisbury Plain Stone Conservation',
    category: 'Grants & Philanthropy',
    excerpt: 'The Court of Assistants has approved a £150,000 grant towards the emergency structural stabilization of prehistoric sarsen lintels.',
    author: 'Education Committee',
    docPath: '/news/archives/2024/doc_sarsen_150.asp',
  },
  {
    id: 'charter-2024-02',
    year: 2024,
    month: 9,
    monthName: 'September 2024',
    title: 'Annual London Bridge Lintel Drive Celebrates 900th Anniversary',
    category: 'Civic Customs',
    excerpt: 'Freemen of the Worshipful Company gathered on London Bridge to execute the annual toll-free sheep drive with a 4-tonne sarsen lintel.',
    author: 'The Clerk',
    docPath: '/news/archives/2024/doc_bridge_900.asp',
  },
  // 2025
  {
    id: 'plumb-2025-01',
    year: 2025,
    month: 2,
    monthName: 'February 2025',
    title: 'Discovery of 14th-Century Plumb Bob in Gresham Street Vaults',
    category: 'Guild Heritage',
    excerpt: 'Archival excavations beneath Megalithic Hall revealed a hallmarked 1342 silver-gilt plumb bob used by medieval Master Hengineers.',
    author: 'Guild Historian',
    docPath: '/news/archives/2025/doc_plumb_1342.asp',
  },
  {
    id: 'master-2025-02',
    year: 2025,
    month: 6,
    monthName: 'June 2025',
    title: 'Sir Alistair Trilithon Installed as Master Hengineer for 2025–2026',
    category: 'Guild Governance',
    excerpt: 'Sir Alistair Trilithon, FIME was formally sworn in as Master Hengineer at a ceremony held at Megalithic Hall in the City of London.',
    author: 'The Clerk',
    docPath: '/news/archives/2025/doc_master_installation.asp',
  },
  {
    id: 'mead-2025-03',
    year: 2025,
    month: 11,
    monthName: 'November 2025',
    title: '1998 Vintage Cask Mead Declared Mature by Renter Warden',
    category: 'Cellar News',
    excerpt: 'Renter Warden Lord Bartholomew Bluestone completed the cellar audit of the 1998 Solstice Cask Mead batch, approving its release for Banquets.',
    author: 'Cellar Committee',
    docPath: '/news/archives/2025/doc_cellar_mead_98.asp',
  },
  // 2026
  {
    id: 'freemen-2026-01',
    year: 2026,
    month: 2,
    monthName: 'February 2026',
    title: 'City Livery Briefing & Midsummer Solstice Banquet Announced',
    category: 'Livery Movement',
    excerpt: 'Master Hengineer Sir Alistair Trilithon welcomed over 150 members and civic guests to announce the upcoming Solstice Banquet at Megalithic Hall.',
    author: 'The Master',
    docPath: '/news/archives/2026/doc_briefing_2026.asp',
  },
  {
    id: 'grants-2026-02',
    year: 2026,
    month: 6,
    monthName: 'June 2026',
    title: 'New Brochure Promotes WCoMB £250,000 Educational Grants',
    category: 'Grants & Philanthropy',
    excerpt: 'The Worshipful Company is calling on young stone masons and engineering students to apply for £250,000 in annual bursaries.',
    author: 'Education Committee',
    docPath: '/news/archives/2026/doc_bursaries_2026.asp',
  },
  {
    id: 'freemen-2026-03',
    year: 2026,
    month: 8,
    monthName: 'August 2026',
    title: 'Four New Freemen Admitted to WCoMB at Megalithic Hall',
    category: 'Guild News',
    excerpt: 'Four new Freemen were admitted to the Worshipful Company of Megalith Builders following successful completion of the Freeman Examination.',
    author: 'The Clerk',
    docPath: '/news/archives/2026/doc_freemen_aug2026.asp',
  },
  {
    id: 'precedence-2026-04',
    year: 2026,
    month: 11,
    monthName: 'November 2026',
    title: 'Livery Precedence Roll Formally Certified at Company No. 115',
    category: 'Civic Precedence',
    excerpt: 'The Court of Aldermen at Guildhall formally acknowledged Company No. 115 on the official precedence roll of City Livery Companies.',
    author: 'The Clerk',
    docPath: '/news/archives/2026/doc_precedence_115.asp',
  },
  // 2027
  {
    id: 'highrise-2027-01',
    year: 2027,
    month: 2,
    monthName: 'February 2027',
    title: 'Court Authorizes Sarsen Counterweight Testing for New City Tower',
    category: 'Hengineering Science',
    excerpt: 'Guild engineers were consulted by the City Planning Committee to load-test granite counterweights for a proposed 40-storey Square Mile skyscraper.',
    author: 'Hengineering Research Panel',
    docPath: '/news/archives/2027/doc_skyscraper_weights.asp',
  },
  {
    id: 'ballot-2027-02',
    year: 2027,
    month: 7,
    monthName: 'July 2027',
    title: 'Common Hall Lord Mayor Proxy Ballot Results Certified',
    category: 'Civic Elections',
    excerpt: 'Clerk Septimus Megalith certified the proxy votes cast by sworn Liverymen for the upcoming Michaelmas election of the Lord Mayor of London.',
    author: 'The Clerk',
    docPath: '/news/archives/2027/doc_ballot_2027.asp',
  },
  {
    id: 'pilgrimage-2027-03',
    year: 2027,
    month: 10,
    monthName: 'October 2027',
    title: 'Liverymen Complete Annual 50-Mile Sarsen Roller Pilgrimage',
    category: 'Guild Heritage',
    excerpt: 'A delegation of 20 Liverymen completed the 3-day foot pilgrimage from the Marlborough Downs to Gresham Street carrying ceremonial plumb bobs.',
    author: 'The Master',
    docPath: '/news/archives/2027/doc_pilgrimage_2027.asp',
  },
  // 2028
  {
    id: 'meadstock-2028-01',
    year: 2028,
    month: 1,
    monthName: 'January 2028',
    title: 'Subterranean Mead Cellar Inventory Reaches 30-Year High',
    category: 'Cellar News',
    excerpt: 'Renter Warden Lord Bartholomew Bluestone reported that the Guild mead reserves now exceed 500 bottles of vintage Wiltshire wildflower batch.',
    author: 'Cellar Committee',
    docPath: '/news/archives/2028/doc_mead_reserve_2028.asp',
  },
  {
    id: 'stpauls-2028-02',
    year: 2028,
    month: 5,
    monthName: 'May 2028',
    title: 'Master Hengineer Keynote Speaker at St Paul’s Conservation Summit',
    category: 'Livery Movement',
    excerpt: 'Sir Alistair Trilithon delivered a lecture under Wren’s dome detailing mortise stone preservation techniques used since medieval times.',
    author: 'The Master',
    docPath: '/news/archives/2028/doc_stpauls_summit.asp',
  },
  {
    id: 'sheep-2028-03',
    year: 2028,
    month: 9,
    monthName: 'September 2028',
    title: '2028 London Bridge Lintel Drive Sets New Record with 12 Herdwick Sheep',
    category: 'Civic Customs',
    excerpt: 'Record crowds gathered as 12 Herdwick sheep hauled a ceremonial 5-tonne sarsen block across London Bridge escorted by City Police.',
    author: 'The Clerk',
    docPath: '/news/archives/2028/doc_bridge_2028.asp',
  },
  // 2029
  {
    id: 'apprentices-2029-01',
    year: 2029,
    month: 1,
    monthName: 'January 2029',
    title: 'Court Grants Indentures to 15 New Stone Masonry Apprentices',
    category: 'Grants & Philanthropy',
    excerpt: 'Fifteen young stone masons received their formal indentures under the Guild Educational Trust Fund at Megalithic Hall.',
    author: 'Education Committee',
    docPath: '/news/archives/2029/doc_indentures_2029.asp',
  },
  {
    id: 'replica-2029-02',
    year: 2029,
    month: 6,
    monthName: 'June 2029',
    title: '1100 Royal Charter Replica Presented to Lord Mayor of London',
    category: 'Guild Heritage',
    excerpt: 'A illuminated vellum copy of King Henry I’s 1100 Royal Charter was presented to Mansion House during the Lord Mayor’s Livery Dinner.',
    author: 'The Clerk',
    docPath: '/news/archives/2029/doc_charter_presentation.asp',
  },
  // 2030+
  {
    id: 'hammerbeam-2030-01',
    year: 2030,
    month: 4,
    monthName: 'April 2030',
    title: 'Megalithic Hall Great Trilithon Room Undergoes Hammerbeam Timber Polish',
    category: 'Guild Heritage',
    excerpt: 'The 17th-century hammerbeam roof of the Great Trilithon Room was restored using beeswax and linseed oil ahead of the Midsummer Solstice Banquet.',
    author: 'House Committee',
    docPath: '/news/archives/2030/doc_roof_restoration.asp',
  },
  {
    id: 'solstice-2030-02',
    year: 2030,
    month: 12,
    monthName: 'December 2030',
    title: 'Master Hengineer Delivers Annual Solstice Address on Solar Alignment',
    category: 'Hengineering Science',
    excerpt: 'The annual Winter Solstice address highlighted new laser-scanning measurements confirming midwinter solar alignment accuracy at Salisbury Plain.',
    author: 'The Master',
    docPath: '/news/archives/2030/doc_winter_solstice_30.asp',
  },
];

export const GazetteAndCharity: React.FC = () => {
  const [selected404Article, setSelected404Article] = useState<Article | null>(null);

  // Deterministically calculate published news based on current system date
  const publishedArticles = useMemo(() => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // 1-12

    return ALL_ARTICLES.filter(
      (art) => art.year < currentYear || (art.year === currentYear && art.month <= currentMonth)
    ).sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      return b.month - a.month;
    });
  }, []);

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
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <h3 className="text-lg font-serif-guild font-bold text-[#154c76] flex items-center space-x-2">
                <FileText className="w-5 h-5 text-[#154c76]" />
                <span>Recent News &amp; Livery Briefings</span>
              </h3>
              <span className="text-[11px] font-mono text-slate-500 bg-slate-200/80 px-2 py-0.5 rounded">
                Published: {publishedArticles.length} Articles
              </span>
            </div>

            <div className="space-y-4 max-h-[720px] overflow-y-auto pr-1">
              {publishedArticles.map((art) => (
                <div
                  key={art.id}
                  className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-[#154c76] hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded">
                      {art.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{art.monthName}</span>
                  </div>
                  
                  <h4 className="text-base font-serif-guild font-bold text-[#154c76] hover:text-amber-600 transition-colors mb-2">
                    {art.title}
                  </h4>
                  
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {art.excerpt}
                  </p>

                  <div className="flex justify-between items-center text-xs border-t border-slate-100 pt-3">
                    <span className="text-slate-500 font-garamond italic font-semibold">By {art.author}</span>
                    <button
                      type="button"
                      onClick={() => setSelected404Article(art)}
                      className="text-[#154c76] font-bold flex items-center space-x-1 hover:text-amber-600 cursor-pointer"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                    </button>
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
                onClick={() => alert("Grant application forms may be requested via the Clerk at clerk@hengineer.org.")}
                className="w-full py-3 rounded bg-[#154c76] hover:bg-[#092e4a] text-white font-serif-guild text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                Apply for Guild Educational Grant
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Fake Retro 404 Not Found Modal */}
      {selected404Article && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/85 backdrop-blur-xs animate-fade-in font-mono">
          <div className="bg-slate-100 rounded border-2 border-slate-400 max-w-lg w-full overflow-hidden shadow-2xl">
            
            {/* Retro Windows/IIS Server Header Bar */}
            <div className="bg-[#000080] text-white px-3 py-1.5 flex justify-between items-center text-xs font-bold">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-yellow-300" />
                <span>Megalithic Hall IIS Server 5.0 - Error 404</span>
              </div>
              <button
                type="button"
                onClick={() => setSelected404Article(null)}
                className="bg-slate-300 text-black px-1.5 py-0.5 text-[10px] font-bold border border-slate-500 hover:bg-red-600 hover:text-white cursor-pointer"
              >
                X
              </button>
            </div>

            {/* Error Body */}
            <div className="p-6 space-y-4 text-xs text-slate-800 bg-slate-50">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-10 h-10 text-red-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-red-700 text-sm">
                    HTTP 404 - Guild Document Not Found
                  </h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    The requested Guild Gazette document archive page could not be located on the Megalithic Hall web server.
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 rounded border border-slate-300 text-[11px] space-y-1 font-mono text-slate-700">
                <p><strong>URL Requested:</strong> <span className="text-blue-700">{selected404Article.docPath}</span></p>
                <p><strong>Error Code:</strong> <span className="text-red-600">0x80004005 (E_FAIL_DOC_ARCHIVED)</span></p>
                <p><strong>Server Host:</strong> WCOMB-WIN2K-IIS5.hengineer.local</p>
                <p><strong>Physical Path:</strong> C:\Inetpub\wwwroot\gazette\archives\{selected404Article.year}\</p>
              </div>

              <div className="p-3 bg-amber-50 rounded border border-amber-200 text-[11px] text-amber-900 leading-relaxed font-sans">
                <strong className="font-serif-guild text-[#154c76]">Clerk's Archival Notice:</strong><br />
                Articles published prior to 2026 have been transferred to offline microfiche in the subterranean Sarsen Vaults. Sworn Freemen may request physical copies by contacting <a href="mailto:clerk@hengineer.org" className="underline font-bold">clerk@hengineer.org</a>.
              </div>

              <div className="pt-2 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setSelected404Article(null)}
                  className="px-4 py-1.5 rounded bg-slate-200 hover:bg-slate-300 text-slate-800 border border-slate-400 text-xs font-bold cursor-pointer"
                >
                  Close &amp; Return to News Index
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
