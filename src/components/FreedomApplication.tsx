import React, { useState } from 'react';
import { Award, Printer, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CoatOfArms } from './CoatOfArms';

export const FreedomApplication: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'certificate'>('intro');
  const [quizIndex, setQuizIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [applicantName, setApplicantName] = useState('Sir / Dame Hengineer');
  const [applicantTitle, setApplicantTitle] = useState('Master Mason of the Solstice');
  const [certificateId] = useState(() => `LIVERY-FREEDOM-#2026-${Math.floor(1000 + Math.random() * 9000)}`);

  const questions = [
    {
      question: 'What is the friction coefficient (μ) when hauling a 25-tonne sarsen stone over seasoned oak rollers?',
      options: ['μ = 0.50 (High Drag)', 'μ = 0.15 (Standard Hengineering)', 'μ = 0.01 (Zero Gravity)'],
      correct: 1,
    },
    {
      question: 'In what year was the Royal Charter of Incorporation granted to the Megalith Builders by King Henry I?',
      options: ['1100 AD', '1666 AD', '2500 BC'],
      correct: 0,
    },
    {
      question: 'At what solar azimuth angle does the Summer Solstice sunrise align through the Salisbury Plain Heel Stone?',
      options: ['180.0° (Due South)', '51.2° (Northeast Horizon)', '270.0° (Due West)'],
      correct: 1,
    },
  ];

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...userAnswers, optionIndex];
    setUserAnswers(newAnswers);

    if (quizIndex < questions.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      setCurrentStep('certificate');
      triggerConfetti();
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#c59b27', '#154c76', '#721c24', '#ffffff'],
    });
  };

  const resetQuiz = () => {
    setCurrentStep('intro');
    setQuizIndex(0);
    setUserAnswers([]);
  };

  return (
    <section id="freedom" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#154c76]/10 text-[#154c76] text-xs font-serif-guild font-bold uppercase tracking-wider mb-2">
            <Award className="w-4 h-4 text-[#154c76]" />
            <span>Freedom of the Worshipful Company</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-guild text-[#154c76] mb-3">
            Apply for Freedom of the City of London
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Pass the Freeman's Examination in Megalithic Hengineering and Royal Charter History to earn your official Certificate of Freedom.
          </p>
        </div>

        {/* STEP 1: INTRO */}
        {currentStep === 'intro' && (
          <div className="max-w-2xl mx-auto bg-slate-50 p-8 rounded-lg border border-slate-200 border-t-4 border-t-[#154c76] text-center space-y-6 shadow-sm">
            <CoatOfArms size="lg" className="mx-auto" />
            
            <h3 className="text-xl font-serif-guild font-bold text-[#154c76]">
              The Freeman's Examination
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Under City of London custom, applicants seeking Freedom of the Worshipful Company must demonstrate basic knowledge of timber roller friction, Royal Charter timeline history, and solstice alignment.
            </p>

            <div className="p-4 rounded bg-white border border-slate-200 text-left text-xs space-y-2">
              <div className="text-[#154c76] font-bold font-serif-guild">Privileges of a Freeman:</div>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>Right to drive a flock of sheep across London Bridge carrying a 5-tonne sarsen lintel.</li>
                <li>Exemption from toll charges on all timber rollers across Greater London.</li>
                <li>Invitation to the Annual Midsummer Solstice Banquet at Megalithic Hall.</li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => setCurrentStep('quiz')}
              className="w-full py-3.5 rounded bg-[#154c76] hover:bg-[#092e4a] text-white font-serif-guild font-bold text-xs uppercase tracking-wider shadow transition-colors"
            >
              Begin Freeman Examination (3 Questions)
            </button>
          </div>
        )}

        {/* STEP 2: QUIZ */}
        {currentStep === 'quiz' && (
          <div className="max-w-2xl mx-auto bg-slate-50 p-8 rounded-lg border border-slate-200 border-t-4 border-t-[#154c76] space-y-6 shadow-sm">
            <div className="flex justify-between items-center text-xs font-mono text-slate-500 border-b border-slate-200 pb-3">
              <span>Question {quizIndex + 1} of {questions.length}</span>
              <span>Guild Freeman Examination</span>
            </div>

            <h3 className="text-base font-serif-guild font-bold text-[#154c76] leading-snug">
              {questions[quizIndex].question}
            </h3>

            <div className="space-y-3 pt-2">
              {questions[quizIndex].options.map((opt, idx) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleAnswerSelect(idx)}
                  className="w-full p-4 rounded bg-white hover:bg-amber-50 border border-slate-300 hover:border-amber-500 text-slate-800 text-left text-xs sm:text-sm font-medium transition-colors"
                >
                  <span className="font-mono text-[#154c76] font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: CERTIFICATE AWARD */}
        {currentStep === 'certificate' && (
          <div className="max-w-3xl mx-auto space-y-6">
            
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="w-full sm:w-1/2">
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Certificate Recipient Name</label>
                <input
                  type="text"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-white border border-slate-300 text-slate-900 font-serif-guild font-bold text-sm focus:outline-none focus:border-[#154c76]"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Hengineer Title</label>
                <input
                  type="text"
                  value={applicantTitle}
                  onChange={(e) => setApplicantTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-white border border-slate-300 text-slate-900 font-serif-guild font-bold text-sm focus:outline-none focus:border-[#154c76]"
                />
              </div>
            </div>

            {/* Printable Parchment Certificate */}
            <div
              id="printable-certificate"
              className="relative p-8 sm:p-12 rounded-lg bg-[#faf5e6] text-[#2c1d11] border-8 border-double border-[#8a6b10] shadow-xl overflow-hidden font-garamond"
            >
              <div className="absolute inset-2 border-2 border-[#b89327] pointer-events-none" />
              <div className="absolute inset-4 border border-[#8a6b10]/40 pointer-events-none" />

              <div className="relative text-center space-y-4">
                
                <div className="flex justify-center mb-2">
                  <CoatOfArms size="lg" />
                </div>

                <div className="font-serif-guild text-xs font-bold tracking-widest text-[#735409] uppercase">
                  City of London Livery Company No. 115
                </div>

                <h2 className="font-serif-guild text-2xl sm:text-4xl font-extrabold text-[#422c04] tracking-wider uppercase">
                  Certificate of Freedom
                </h2>

                <p className="font-serif-guild text-xs italic text-[#735409]">
                  "Saxa Ligamus, Saecula Stabilimus"
                </p>

                <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-[#8a6b10] to-transparent mx-auto my-3" />

                <p className="text-sm sm:text-base leading-relaxed text-[#3b2705]">
                  Be it known unto all men by these present letters that having satisfactorily passed the Guild Examination in Megalithic Mechanics and Solstice Geometry:
                </p>

                <div className="py-2">
                  <div className="font-serif-guild text-2xl sm:text-3xl font-extrabold text-[#5c3f05] underline decoration-[#8a6b10] decoration-2 underline-offset-8">
                    {applicantName || 'Freeman of the City'}
                  </div>
                  <div className="text-xs font-serif-guild font-semibold text-[#8a6b10] mt-2 uppercase tracking-widest">
                    {applicantTitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#422c04] max-w-xl mx-auto leading-relaxed">
                  Is hereby admitted into the Freedom of <strong>The Worshipful Company of Megalith Builders</strong> (The Hengineers) with all rights and privileges pertaining thereto.
                </p>

                <div className="pt-6 grid grid-cols-2 gap-8 text-center text-xs font-serif-guild border-t border-[#b89327]/40 max-w-lg mx-auto">
                  <div>
                    <div className="font-serif-guild text-base italic font-bold text-[#422c04]">Sir Alistair Montgomery</div>
                    <div className="text-[10px] text-[#735409] uppercase tracking-wider mt-1">Master Hengineer</div>
                  </div>
                  <div>
                    <div className="font-serif-guild text-base italic font-bold text-[#422c04]">Septimus Howard, Esq.</div>
                    <div className="text-[10px] text-[#735409] uppercase tracking-wider mt-1">Clerk to the Guild</div>
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center text-[10px] font-mono text-[#8a6b10]">
                  <span>{certificateId}</span>
                  <span className="uppercase font-serif-guild font-bold">Seal of Antiquity c. 2500 BC</span>
                </div>

              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-6 py-3 rounded bg-[#154c76] text-white font-serif-guild font-bold text-xs uppercase tracking-wider shadow flex items-center justify-center space-x-2"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>Print Official Certificate</span>
              </button>
              <button
                type="button"
                onClick={resetQuiz}
                className="px-6 py-3 rounded bg-slate-100 border border-slate-300 text-slate-700 font-serif-guild text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-slate-200"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Retake Examination</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
