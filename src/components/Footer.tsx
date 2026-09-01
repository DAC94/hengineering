import React from 'react';
import { CoatOfArms } from './CoatOfArms';
import { VisitorCounter } from './VisitorCounter';
import { MapPin, Phone, Mail, Globe, ArrowUp, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (tab: string) => {
    if (onNavigate) {
      onNavigate(tab);
    }
    scrollToTop();
  };

  return (
    <footer id="footer" className="bg-[#092e4a] text-slate-300 pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-700">
          
          {/* Col 1: Summary (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <CoatOfArms size="sm" />
              <div>
                <h3 className="font-serif-guild text-base font-bold text-amber-300">
                  The Worshipful Company of Megalith Builders
                </h3>
                <p className="text-xs text-slate-300 font-garamond italic">
                  "The Hengineers" • Livery Company No. 115
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              The Worshipful Company of Megalith Builders (WCoMB) is one of the Livery Companies of the City of London. Our livery represents sarsen stone engineering, archaeo-astronomy, and structural conservation, working to support education and charities in the City and nationwide.
            </p>

            <div className="text-xs text-amber-300 font-mono flex items-center space-x-1.5 pb-2">
              <Globe className="w-4 h-4 text-amber-400" />
              <span>Official Website: <strong>hengineer.org</strong></span>
            </div>

            {/* Retro Early 2000s Visitor Counter */}
            <VisitorCounter />
          </div>

          {/* Col 2: Navigation Menu (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-guild font-bold text-amber-400 text-xs uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <button type="button" onClick={() => handleLinkClick('home')} className="hover:text-amber-300 transition-colors text-left cursor-pointer">Home</button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('about')} className="hover:text-amber-300 transition-colors text-left cursor-pointer">About Us &amp; 1100 Charter</button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('court')} className="hover:text-amber-300 transition-colors text-left cursor-pointer">The Court &amp; Officers</button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('craft')} className="hover:text-amber-300 transition-colors text-left cursor-pointer">Hengineering Craft &amp; Observatory</button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('banquet')} className="hover:text-amber-300 transition-colors text-left cursor-pointer">Solstice Banquet &amp; Wine Cellar</button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('freedom')} className="hover:text-amber-300 transition-colors text-left cursor-pointer">Freedom of Guild &amp; Sheep Drive</button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('youth')} className="hover:text-amber-300 transition-colors text-left cursor-pointer font-bold text-amber-300">Young Freemen (Under 35s)</button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('events')} className="hover:text-amber-300 transition-colors text-left cursor-pointer">Civic Events &amp; Services</button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('news')} className="hover:text-amber-300 transition-colors text-left cursor-pointer">Educational Grants &amp; News</button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('hall')} className="hover:text-amber-300 transition-colors text-left cursor-pointer">Megalithic Hall Hire</button>
              </li>
              <li>
                <button type="button" onClick={() => handleLinkClick('privacy')} className="hover:text-amber-300 transition-colors text-left cursor-pointer text-amber-200/90 font-semibold flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Privacy Policy &amp; GDPR</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Address, Contact & Associated Organizations (4 Cols) */}
          <div className="md:col-span-4 space-y-6">
            
            <div className="space-y-3">
              <h4 className="font-serif-guild font-bold text-amber-400 text-xs uppercase tracking-wider">
                Guildhall Office &amp; Contact
              </h4>
              <div className="text-xs text-slate-300 leading-relaxed space-y-2">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    Worshipful Company of Megalith Builders<br />
                    Megalithic Hall, Gresham Street<br />
                    City of London, EC2V 7HH
                  </span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Tel: 020 7946 0115</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Email: <a href="mailto:clerk@hengineer.org" className="underline hover:text-amber-300">clerk@hengineer.org</a></span>
                </p>
              </div>
            </div>

            {/* Sister Livery & Industry Links */}
            <div className="space-y-2 pt-2 border-t border-slate-700">
              <h4 className="font-serif-guild font-bold text-amber-400 text-xs uppercase tracking-wider">
                Associated Organizations
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>
                  <a
                    href="https://www.masonslivery.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-300 transition-colors flex items-center space-x-1.5"
                  >
                    <span>The Worshipful Company of Masons</span>
                    <ExternalLink className="w-3 h-3 text-amber-400/80" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.stonefed.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-300 transition-colors flex items-center space-x-1.5"
                  >
                    <span>Stone Federation Great Britain</span>
                    <ExternalLink className="w-3 h-3 text-amber-400/80" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono">
          <p>© COPYRIGHT {new Date().getFullYear()} WCoMB, ALL RIGHTS RESERVED • hengineer.org</p>
          
          <div className="flex items-center space-x-4 mt-3 sm:mt-0">
            <button
              type="button"
              onClick={() => handleLinkClick('privacy')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-300 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
