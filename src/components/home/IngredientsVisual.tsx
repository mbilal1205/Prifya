/**
 * JANII G: PLACEHOLDER — botanical texture composition.
 * Real product texture/macro photo aane par is file ko replace karo:
 *
 *   import Image from "next/image";
 *   export function IngredientsVisual() {
 *     return (
 *       <Image
 *         src="/ingredients-texture.webp"
 *         alt="..."
 *         fill
 *         sizes="(max-width: 1024px) 100vw, 50vw"
 *         className="object-cover"
 *       />
 *     );
 *   }
 */
export function IngredientsVisual() {
  return (
    <div className="relative h-full w-full bg-brand-bg">
      <svg
        viewBox="0 0 480 600"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        role="img"
        aria-label="Botanical texture — placeholder"
      >
        <defs>
          <radialGradient id="dropGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#E8C9A4" />
            <stop offset="100%" stopColor="#8C582B" />
          </radialGradient>
          <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2C5440" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1B3B2B" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Faint herbarium grid */}
        <g stroke="#1B3B2B" strokeOpacity="0.05" strokeWidth="1">
          <line x1="0" y1="150" x2="480" y2="150" />
          <line x1="0" y1="300" x2="480" y2="300" />
          <line x1="0" y1="450" x2="480" y2="450" />
          <line x1="120" y1="0" x2="120" y2="600" />
          <line x1="240" y1="0" x2="240" y2="600" />
          <line x1="360" y1="0" x2="360" y2="600" />
        </g>

        {/* Large leaves */}
        <g fill="url(#leafGrad)">
          <path
            d="M100 140 Q200 100 260 200 Q180 240 100 220 Q90 180 100 140 Z"
            opacity="0.85"
          />
          <path
            d="M380 380 Q460 340 470 440 Q400 480 370 430 Q360 400 380 380 Z"
            opacity="0.7"
          />
          <path
            d="M60 460 Q120 420 180 470 Q140 530 80 510 Q50 490 60 460 Z"
            opacity="0.6"
          />
        </g>

        {/* Leaf veins (thin lines) */}
        <g stroke="#FAF9F6" strokeOpacity="0.35" strokeWidth="1" fill="none">
          <path d="M110 170 Q175 155 245 195" />
          <path d="M390 410 Q430 395 460 435" />
          <path d="M80 480 Q120 465 165 485" />
        </g>

        {/* Central serum drop */}
        <g>
          <ellipse cx="240" cy="310" rx="55" ry="10" fill="#1B3B2B" fillOpacity="0.08" />
          <path
            d="M240 240 Q295 310 295 355 Q295 395 240 395 Q185 395 185 355 Q185 310 240 240 Z"
            fill="url(#dropGrad)"
            stroke="#8C582B"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          {/* Drop highlight */}
          <ellipse cx="225" cy="330" rx="14" ry="20" fill="#FFFFFF" fillOpacity="0.35" transform="rotate(-20 225 330)" />
        </g>

        {/* Small amber dot accents */}
        <g fill="#C68B59">
          <circle cx="140" cy="380" r="3" opacity="0.7" />
          <circle cx="350" cy="200" r="3" opacity="0.7" />
          <circle cx="400" cy="540" r="2.5" opacity="0.6" />
          <circle cx="80" cy="280" r="2.5" opacity="0.6" />
        </g>

        {/* Corner label */}
        <text
          x="240"
          y="565"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="10"
          fill="#1B3B2B"
          letterSpacing="3"
          opacity="0.5"
        >
          BOTANICAL TEXTURE
        </text>
      </svg>
    </div>
  );
}