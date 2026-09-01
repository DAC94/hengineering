import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HistoryTimeline } from './components/HistoryTimeline';
import { MegalithCalculator } from './components/MegalithCalculator';
import { SolsticeCanvas } from './components/SolsticeCanvas';
import { CourtOfAssistants } from './components/CourtOfAssistants';
import { HallRental } from './components/HallRental';
import { FreedomApplication } from './components/FreedomApplication';
import { GazetteAndCharity } from './components/GazetteAndCharity';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Section Content */}
      <main>
        <Hero />
        <HistoryTimeline />
        <MegalithCalculator />
        <SolsticeCanvas />
        <CourtOfAssistants />
        <HallRental />
        <FreedomApplication />
        <GazetteAndCharity />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
