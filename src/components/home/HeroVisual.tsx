/**
 * JANII G: PLACEHOLDER — yeh SVG placeholder hai.
 * Jab real product photo aaye, is file ko replace karo:
 *
 *   import Image from "next/image";
 *   export function HeroVisual() {
 *     return (
 *       <div className="absolute inset-0 bg-brand-bg">
 *         <Image
 *           src="/product-hero.webp"
 *           alt="Prifya Hair Serum bottle"
 *           fill
 *           priority
 *           sizes="100vw"
 *           className="object-cover"
 *         />
 *         {/* contrast overlay agar image dark ho *\/}
 *       </div>
 *     );
 *   }
 */



export function HeroVisual() {
  return (
    <div className="absolute inset-0 bg-brand-bg">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 42%, #EEF2EE 0%, #FAF9F6 65%)",
        }}
      />

      {/* Ambient float wrapper — bottle saans leta hai */}
      <div className="absolute inset-0 animate-ambient-float">
        <svg
          viewBox="0 0 400 600"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="Prifya Hair Serum bottle — placeholder"
        >
          <defs>
          <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EEF2EE" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#DCE3DC" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="cap" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D49C6C" />
            <stop offset="100%" stopColor="#8C582B" />
          </linearGradient>
        </defs>

        {/* decorative organic curves (very faint) */}
        <g stroke="#1B3B2B" strokeOpacity="0.06" strokeWidth="1" fill="none">
          <path d="M20 140 Q80 60 160 120 Q100 180 20 140 Z" />
          <path d="M240 480 Q340 400 380 500 Q300 580 240 480 Z" />
        </g>

        {/* soft base shadow */}
        <ellipse cx="200" cy="520" rx="90" ry="10" fill="#1B3B2B" fillOpacity="0.08" />

        {/* bottle body */}
        <rect
          x="155"
          y="220"
          width="90"
          height="280"
          rx="8"
          fill="url(#glass)"
          stroke="#1B3B2B"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />

        {/* bottle shoulder */}
        <path
          d="M155 220 Q155 190 175 182 L225 182 Q245 190 245 220 Z"
          fill="url(#glass)"
          stroke="#1B3B2B"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />

        {/* cap */}
        <rect
          x="180"
          y="140"
          width="40"
          height="42"
          rx="4"
          fill="url(#cap)"
          stroke="#8C582B"
          strokeOpacity="0.35"
          strokeWidth="1"
        />

        {/* label */}
        <rect
          x="168"
          y="285"
          width="64"
          height="120"
          rx="3"
          fill="#FAF9F6"
          stroke="#1B3B2B"
          strokeOpacity="0.15"
          strokeWidth="1"
        />
        <text
          x="200"
          y="315"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="11"
          fill="#1B3B2B"
          letterSpacing="2.5"
        >
          PRIFYA
        </text>
        <text
          x="200"
          y="330"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="5.5"
          fill="#5A655E"
          letterSpacing="1.5"
        >
          HAIR SERUM
        </text>
        <line x1="180" y1="345" x2="220" y2="345" stroke="#C68B59" strokeWidth="0.6" />
        <text
          x="200"
          y="360"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="5"
          fill="#5A655E"
          letterSpacing="1"
        >
          100 ML
        </text>
        <text
          x="200"
          y="385"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="4"
          fill="#5A655E"
          letterSpacing="0.5"
          opacity="0.7"
        >
          BOTANICAL CARE
        </text>
        </svg>
      </div>
    </div>
  );
}

