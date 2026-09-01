import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FreemenPortalModal } from './components/FreemenPortalModal';
import { CookieConsentBanner } from './components/CookieConsentBanner';

import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { CourtPage } from './components/pages/CourtPage';
import { CraftPage } from './components/pages/CraftPage';
import { BanquetPage } from './components/pages/BanquetPage';
import { FreedomPage } from './components/pages/FreedomPage';
import { YouthPage } from './components/pages/YouthPage';
import { EventsCalendar } from './components/EventsCalendar';
import { NewsPage } from './components/pages/NewsPage';
import { HallPage } from './components/pages/HallPage';
import { PrivacyPage } from './components/pages/PrivacyPage';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [portalOpen, setPortalOpen] = useState<boolean>(false);

  const handleNavigate = (tab: string, sectionId?: string) => {
    setActiveTab(tab);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'about':
        return <AboutPage />;
      case 'court':
        return <CourtPage />;
      case 'craft':
        return <CraftPage />;
      case 'banquet':
        return <BanquetPage onNavigate={handleNavigate} />;
      case 'freedom':
        return <FreedomPage />;
      case 'youth':
        return <YouthPage />;
      case 'events':
        return <EventsCalendar />;
      case 'news':
        return <NewsPage />;
      case 'hall':
        return <HallPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-amber-500/30 selection:text-amber-900 flex flex-col justify-between">
      <div>
        {/* Sticky Header Navbar */}
        <Navbar
          activeTab={activeTab}
          onNavigate={handleNavigate}
          onOpenPortal={() => setPortalOpen(true)}
        />

        {/* Dynamic Multi-Page Content */}
        <main className="animate-fade-in">
          {renderActivePage()}
        </main>
      </div>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Freemen's Portal Modal */}
      <FreemenPortalModal
        isOpen={portalOpen}
        onClose={() => setPortalOpen(false)}
      />

      {/* Sticky Cookie Consent Banner */}
      <CookieConsentBanner onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
