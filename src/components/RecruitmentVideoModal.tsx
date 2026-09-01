import React from 'react';
import { X, Film, Shield } from 'lucide-react';

interface RecruitmentVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruitmentVideoModal: React.FC<RecruitmentVideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#092e4a] rounded-lg border-2 border-amber-500 max-w-4xl w-full overflow-hidden shadow-2xl">
        
        {/* Modal Header */}
        <div className="p-4 bg-[#154c76] text-white flex justify-between items-center border-b border-amber-500/30">
          <div className="flex items-center space-x-2 text-amber-300 font-serif-guild font-bold text-sm">
            <Film className="w-4 h-4 text-amber-400" />
            <span>Next Gen Hengineers • 2026 Recruitment Film</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-300 hover:text-white cursor-pointer transition-colors"
            aria-label="Close video theater"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Clean Video Player Container with Cache-Busting Query String */}
        <div className="relative bg-black aspect-video overflow-hidden flex items-center justify-center">
          <video
            src="/images/advertisement_video.mp4?v=2"
            controls
            autoPlay
            poster="/images/youth_dancing_hall.png"
            className="w-full h-full object-contain"
          >
            Your browser does not support playing HTML5 video.
          </video>
        </div>

        {/* Modal Footer Banner */}
        <div className="p-4 bg-[#092e4a] flex flex-col sm:flex-row justify-between items-center text-xs text-slate-300 gap-2 border-t border-slate-700 font-serif-guild">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-bold text-amber-300">City of London Livery Company No. 115</span>
          </div>
          <span className="italic font-garamond text-slate-400 text-sm">"Saxa Ligamus, Saecula Stabilimus"</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-[11px] cursor-pointer transition-colors"
          >
            Close Theater
          </button>
        </div>

      </div>
    </div>
  );
};
