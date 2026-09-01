import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, X, ChevronRight } from 'lucide-react';

interface CookieConsentBannerProps {
  onNavigate?: (tab: string, sectionId?: string) => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onNavigate }) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem('hengineers_cookie_consent');
    if (!consent) {
      // Delay slightly for smooth page load transition
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('hengineers_cookie_consent', 'accepted_all');
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('hengineers_cookie_consent', 'essential_only');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-5 bg-[#092e4a] text-white border-t-4 border-t-amber-500 shadow-2xl animate-slide-up font-serif-guild">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Cookie Notice Description */}
        <div className="flex items-start space-x-3 max-w-3xl">
          <div className="p-2 rounded bg-amber-500/20 text-amber-400 shrink-0 border border-amber-400/40 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-xs text-slate-200 leading-relaxed font-normal">
            <div className="font-bold text-amber-300 text-sm flex items-center space-x-2">
              <span>Guild Cookie &amp; Data Privacy Notice</span>
            </div>
            <p>
              We use essential cookies and local browser storage to compute sarsen stone friction mechanics, remember your registered stonemason mark, and provide secure access to Common Hall services.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full md:w-auto justify-end">
          <button
            type="button"
            onClick={() => {
              if (onNavigate) onNavigate('privacy');
            }}
            className="text-xs text-amber-300 hover:text-amber-200 underline font-semibold cursor-pointer px-2 py-1"
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={handleEssentialOnly}
            className="px-3.5 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={handleAcceptAll}
            className="px-5 py-2 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center space-x-1 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4 text-slate-950" />
            <span>Accept Cookies</span>
          </button>
        </div>

      </div>
    </div>
  );
};
