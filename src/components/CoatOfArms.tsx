import React from 'react';

interface CoatOfArmsProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CoatOfArms: React.FC<CoatOfArmsProps> = ({ className = '', size = 'md' }) => {
  const sizeMap = {
    sm: 'w-12 h-14',
    md: 'w-20 h-24',
    lg: 'w-32 h-36',
    xl: 'w-44 h-48',
  };

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeMap[size]} ${className}`}>
      <svg
        viewBox="0 0 200 240"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Heraldic Gold Gradient */}
          <linearGradient id="heraldicGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fae17d" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#8a610e" />
          </linearGradient>

          {/* Heraldic Navy Azure Gradient */}
          <linearGradient id="heraldicNavy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e5a8a" />
            <stop offset="60%" stopColor="#0f385c" />
            <stop offset="100%" stopColor="#071b2d" />
          </linearGradient>

          {/* Heraldic Red Gules Gradient */}
          <linearGradient id="heraldicRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="50%" stopColor="#b91c1c" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>

          {/* Steel Helmet Gradient */}
          <linearGradient id="steelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>

        {/* 1. Intricate Acanthus Leaf Mantling (Swirling Left & Right) */}
        <g id="mantling">
          {/* Left Mantling Leaves */}
          <path
            d="M 40 45 C 10 20 5 60 25 80 C 5 95 15 130 35 140 C 20 120 40 100 45 90 C 35 80 45 60 40 45 Z"
            fill="url(#heraldicNavy)"
            stroke="url(#heraldicGold)"
            strokeWidth="1.5"
          />
          <path
            d="M 30 35 C 15 15 35 5 55 25 C 45 35 35 30 30 35 Z"
            fill="url(#heraldicGold)"
            stroke="#071b2d"
            strokeWidth="1"
          />

          {/* Right Mantling Leaves */}
          <path
            d="M 160 45 C 190 20 195 60 175 80 C 195 95 185 130 165 140 C 180 120 160 100 155 90 C 165 80 155 60 160 45 Z"
            fill="url(#heraldicNavy)"
            stroke="url(#heraldicGold)"
            strokeWidth="1.5"
          />
          <path
            d="M 170 35 C 185 15 165 5 145 25 C 155 35 165 30 170 35 Z"
            fill="url(#heraldicGold)"
            stroke="#071b2d"
            strokeWidth="1"
          />
        </g>

        {/* 2. Crest: Salisbury Great Bustard Bird Facing Left Holding Mason's Chisel */}
        <g id="crest-bird">
          {/* Tail Feathers */}
          <path d="M 112 18 Q 124 10 120 2 Q 112 8 108 14 Z" fill="url(#heraldicGold)" stroke="#453205" strokeWidth="1" />
          <path d="M 116 16 Q 126 12 122 6 Q 116 10 112 15 Z" fill="url(#heraldicRed)" stroke="#453205" strokeWidth="0.8" />

          {/* Main Body */}
          <path d="M 88 22 C 78 18 84 6 98 4 C 110 4 116 14 108 22 Z" fill="url(#heraldicGold)" stroke="#453205" strokeWidth="1.2" />

          {/* Wing Feathers */}
          <path d="M 94 12 C 106 12 108 20 98 21 C 92 18 92 14 94 12 Z" fill="url(#heraldicRed)" stroke="url(#heraldicGold)" strokeWidth="1" />

          {/* Neck & Head (Facing Left) */}
          <path d="M 92 12 C 86 8 84 5 86 2 C 90 -1 94 2 92 8 Z" fill="url(#heraldicGold)" stroke="#453205" strokeWidth="1" />

          {/* Eye */}
          <circle cx="86" cy="3" r="1" fill="#000000" />

          {/* Beak Holding Mason's Stone Chisel */}
          <path d="M 85 4 L 78 6 L 85 7 Z" fill="#d4af37" stroke="#453205" strokeWidth="0.8" />
          
          {/* Mason's Stone Chisel in Beak */}
          <g id="mason-chisel">
            <rect x="70" y="2" width="12" height="3" rx="0.5" transform="rotate(-15 70 2)" fill="#ffffff" stroke="#453205" strokeWidth="0.8" />
            <polygon points="68,7 72,4 71,9" fill="url(#heraldicGold)" stroke="#453205" strokeWidth="0.6" />
          </g>

          {/* Bird Legs Standing on Torse */}
          <line x1="96" y1="22" x2="94" y2="28" stroke="#453205" strokeWidth="1.5" />
          <line x1="104" y1="22" x2="106" y2="28" stroke="#453205" strokeWidth="1.5" />
        </g>

        {/* 3. Steel Knight's Helmet & Wreath Torse */}
        <g id="helmet">
          {/* Torse Wreath (Gold & Navy twisted band) */}
          <rect x="80" y="26" width="40" height="6" rx="2" fill="url(#heraldicGold)" stroke="#453205" strokeWidth="1" />
          <path d="M 88 26 L 94 32 M 100 26 L 106 32 M 112 26 L 118 32" stroke="url(#heraldicNavy)" strokeWidth="3" />

          {/* Knight's Helmet */}
          <path d="M 82 32 L 118 32 L 114 52 L 100 56 L 86 52 Z" fill="url(#steelGradient)" stroke="url(#heraldicGold)" strokeWidth="1.5" />
          {/* Helmet Visor Slits */}
          <path d="M 90 40 H 110 M 90 44 H 110 M 92 48 H 108" stroke="url(#heraldicGold)" strokeWidth="1.5" />
        </g>

        {/* 4. Escutcheon Shield (Field Azure) */}
        <path
          d="M 40 50 L 160 50 L 160 130 Q 160 195 100 220 Q 40 195 40 130 Z"
          fill="url(#heraldicNavy)"
          stroke="url(#heraldicGold)"
          strokeWidth="5"
        />

        {/* Shield Inner Gold Dashed Border */}
        <path
          d="M 46 56 L 154 56 L 154 126 Q 154 187 100 211 Q 46 187 46 126 Z"
          fill="none"
          stroke="url(#heraldicGold)"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />

        {/* Red Chevron Gules Across Center */}
        <path
          d="M 40 120 L 100 75 L 160 120 L 160 140 L 100 95 L 40 140 Z"
          fill="url(#heraldicRed)"
          stroke="url(#heraldicGold)"
          strokeWidth="1.5"
        />

        {/* Two Hanging Brass Plumb-Bobs in Chief */}
        <g id="plumb-bobs">
          {/* Left Plumb Bob */}
          <line x1="72" y1="56" x2="72" y2="70" stroke="url(#heraldicGold)" strokeWidth="1.5" />
          <circle cx="72" cy="70" r="2" fill="url(#heraldicGold)" />
          <polygon points="72,82 65,72 79,72" fill="url(#heraldicGold)" stroke="#453205" strokeWidth="0.8" />

          {/* Right Plumb Bob */}
          <line x1="128" y1="56" x2="128" y2="70" stroke="url(#heraldicGold)" strokeWidth="1.5" />
          <circle cx="128" cy="70" r="2" fill="url(#heraldicGold)" />
          <polygon points="128,82 121,72 135,72" fill="url(#heraldicGold)" stroke="#453205" strokeWidth="0.8" />
        </g>

        {/* Glowing Sarsen Stone Trilithon Under Chevron */}
        <g id="trilithon-arch">
          {/* Inner Glow Background */}
          <ellipse cx="100" cy="155" rx="20" ry="15" fill="#fae17d" opacity="0.25" />
          
          {/* Left Vertical Sarsen Pillar */}
          <rect x="74" y="125" width="14" height="52" rx="1" fill="url(#heraldicGold)" stroke="#453205" strokeWidth="1.2" />
          <line x1="78" y1="130" x2="78" y2="172" stroke="#ffffff" strokeWidth="0.8" opacity="0.4" />

          {/* Right Vertical Sarsen Pillar */}
          <rect x="112" y="125" width="14" height="52" rx="1" fill="url(#heraldicGold)" stroke="#453205" strokeWidth="1.2" />
          <line x1="116" y1="130" x2="116" y2="172" stroke="#ffffff" strokeWidth="0.8" opacity="0.4" />

          {/* Horizontal Lintel Capstone */}
          <rect x="64" y="113" width="72" height="15" rx="2" fill="url(#heraldicGold)" stroke="#453205" strokeWidth="1.5" />
          <line x1="68" y1="116" x2="132" y2="116" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
        </g>

        {/* 5. Motto Ribbon Scroll at Bottom */}
        <g id="motto-banner">
          <path
            d="M 10 220 Q 100 245 190 220 L 175 238 Q 100 250 25 238 Z"
            fill="url(#heraldicGold)"
            stroke="#453205"
            strokeWidth="1.5"
          />
          {/* Banner Fold Ribbons */}
          <path d="M 10 220 L 25 210 L 25 238 Z" fill="#8a610e" stroke="#453205" strokeWidth="1" />
          <path d="M 190 220 L 175 210 L 175 238 Z" fill="#8a610e" stroke="#453205" strokeWidth="1" />

          {/* Motto Text */}
          <text
            x="100"
            y="233"
            textAnchor="middle"
            fill="#3b2705"
            fontSize="7.5"
            fontWeight="bold"
            fontFamily="serif"
            letterSpacing="0.8"
          >
            SAXA LIGAMUS, SAECULA STABILIMUS
          </text>
        </g>

      </svg>
    </div>
  );
};
