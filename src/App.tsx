import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HistoryTimeline } from './components/HistoryTimeline';
import { MegalithCalculator } from './components/MegalithCalculator';
import { SolsticeCanvas } from './components/SolsticeCanvas';
import { CourtOfAssistants } from './components/CourtOfAssistants';
import { BanquetMenu } from './components/BanquetMenu';
import { HallRental } from './components/HallRental';
import { FreedomApplication } from './components/FreedomApplication';
import { GazetteAndCharity } from './components/GazetteAndCharity';
import { Footer } from './components/Footer';
import { FreemenPortalModal } from './components/FreemenPortalModal';

export const App: React.FC = () => {
  const [portalOpen, setPortalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-amber-500/30 selection:text-amber-900">
      {/* Top Sticky Navigation */}
      <Navbar onOpenPortal={() => setPortalOpen(true)} />

      {/* Main Section Content */}
      <main>
        <Hero />
        <HistoryTimeline />
        <MegalithCalculator />
        <SolsticeCanvas />
        <CourtOfAssistants />
        <BanquetMenu />
        <FreedomApplication />
        <GazetteAndCharity />
        <HallRental />
      </main>

      {/* Footer */}
      <Footer />

      {/* Freemen's Portal Modal */}
      <FreemenPortalModal
        isOpen={portalOpen}
        onClose={() => setPortalOpen(false)}
      />
    </div>
  );
};

export default App;
