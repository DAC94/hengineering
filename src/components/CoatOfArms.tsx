import React from 'react';

interface CoatOfArmsProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  useImage?: boolean;
}

export const CoatOfArms: React.FC<CoatOfArmsProps> = ({ className = '', size = 'md', useImage = true }) => {
  const sizeMap = {
    sm: 'w-12 h-14',
    md: 'w-20 h-24',
    lg: 'w-32 h-36',
    xl: 'w-44 h-48',
  };

  if (useImage) {
    return (
      <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeMap[size]} ${className}`}>
        <img
          src="/images/guild_coat_of_arms.png"
          alt="The Worshipful Company of Megalith Builders Coat of Arms"
          className="w-full h-full object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback to SVG if image file is missing
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    );
  }

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeMap[size]} ${className}`}>
      <svg
        viewBox="0 0 200 240"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heraldicGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fae17d" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#a37c15" />
          </linearGradient>
          <linearGradient id="heraldicNavy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e5a8a" />
            <stop offset="100%" stopColor="#0a2a45" />
          </linearGradient>
          <linearGradient id="heraldicRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b91c1c" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>
        </defs>

        {/* Intricate Swirling Gold & Blue Mantling Leaves */}
        <path d="M 20 50 Q 5 20 40 10 Q 70 30 100 15 Q 130 30 160 10 Q 195 20 180 50 Q 190 90 170 120 Q 150 100 130 110" fill="url(#heraldicNavy)" stroke="url(#heraldicGold)" strokeWidth="1.5" />
        <path d="M 20 50 Q 10 90 30 120 Q 50 100 70 110" fill="url(#heraldicGold)" stroke="#0a2a45" strokeWidth="1.5" />

        {/* Crest: Salisbury Great Bustard Bird Facing Left Holding Mason's Chisel */}
        <g id="crest-great-bustard">
          {/* Bird Body & Neck */}
          <path d="M 96 22 Q 86 12 96 4 Q 106 4 112 12 Q 116 20 104 24 Z" fill="url(#heraldicGold)" stroke="#453205" strokeWidth="1.2" />
          {/* Bird Head & Beak facing left */}
          <path d="M 90 8 Q 84 6 82 9 Q 86 12 90 11 Z" fill="url(#heraldicGold)" stroke="#453205" strokeWidth="1" />
          {/* Mason's Stone Chisel in Beak */}
          <rect x="72" y="7" width="12" height="3.5" rx="0.5" transform="rotate(-15 72 7)" fill="#ffffff" stroke="#453205" strokeWidth="0.8" />
          {/* Wing Feathers */}
          <path d="M 98 8 Q 108 10 104 20 Q 94 16 98 8 Z" fill="url(#heraldicRed)" stroke="url(#heraldicGold)" strokeWidth="0.8" />
        </g>

        {/* Steel Knight's Helmet & Torse */}
        <rect x="80" y="22" width="40" height="18" rx="3" fill="url(#heraldicNavy)" stroke="url(#heraldicGold)" strokeWidth="1.5" />
        <path d="M 86 28 H 114" stroke="url(#heraldicGold)" strokeWidth="1.5" />
        <path d="M 86 34 H 114" stroke="url(#heraldicGold)" strokeWidth="1.5" />

        {/* Main Escutcheon Shield (Field Azure) */}
        <path
          d="M 40 40 L 160 40 L 160 120 Q 160 190 100 215 Q 40 190 40 120 Z"
          fill="url(#heraldicNavy)"
          stroke="url(#heraldicGold)"
          strokeWidth="5"
        />

        {/* Shield Inner Gold Border */}
        <path
          d="M 46 46 L 154 46 L 154 116 Q 154 182 100 206 Q 46 182 46 116 Z"
          fill="none"
          stroke="url(#heraldicGold)"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />

        {/* Red Chevron Gules Across Center */}
        <path
          d="M 40 110 L 100 65 L 160 110 L 160 130 L 100 85 L 40 130 Z"
          fill="url(#heraldicRed)"
          stroke="url(#heraldicGold)"
          strokeWidth="1.5"
        />

        {/* Hanging Brass Plumb Bobs in Chief (Left & Right) */}
        <g id="plumb-bobs">
          {/* Left Hanging Plumb Bob */}
          <line x1="72" y1="46" x2="72" y2="58" stroke="url(#heraldicGold)" strokeWidth="1.5" />
          <polygon points="72,66 67,58 77,58" fill="url(#heraldicGold)" stroke="#453205" strokeWidth="0.8" />
          
          {/* Right Hanging Plumb Bob */}
          <line x1="128" y1="46" x2="128" y2="58" stroke="url(#heraldicGold)" strokeWidth="1.5" />
          <polygon points="128,66 123,58 133,58" fill="url(#heraldicGold)" stroke="#453205" strokeWidth="0.8" />
        </g>

        {/* Sarsen Trilithon Monolith Under Chevron */}
        <rect x="72" y="106" width="11" height="54" fill="url(#heraldicGold)" stroke="#453205" strokeWidth="1" />
        <rect x="117" y="106" width="11" height="54" fill="url(#heraldicGold)" stroke="#453205" strokeWidth="1" />
        <rect x="62" y="94" width="76" height="14" rx="2" fill="url(#heraldicGold)" stroke="#453205" strokeWidth="1.5" />

        {/* Motto Ribbon Scroll at Bottom */}
        <path
          d="M 10 215 Q 100 240 190 215 L 175 235 Q 100 248 25 235 Z"
          fill="url(#heraldicGold)"
          stroke="#453205"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};
