// Typografisches Cover für die KI-Kompass-Serie.
// Kein Stock-Bild: ein eigenständiges, markenkonformes SVG (Geist-Schrift,
// Markenblau #0057B7, Aurora-/Kompass-Motiv) – als Serie sofort erkennbar,
// gestochen scharf in jeder Größe und themable.

type KompassCoverProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export default function KompassCover({
  eyebrow = "KI-Kompass",
  title,
  subtitle,
  className = "",
}: KompassCoverProps) {
  return (
    <svg
      viewBox="0 0 1200 500"
      className={className}
      role="img"
      aria-label={`${eyebrow} – ${title}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="kk-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#062F70" />
          <stop offset="48%" stopColor="#00408A" />
          <stop offset="100%" stopColor="#0057B7" />
        </linearGradient>
        <radialGradient id="kk-glow" cx="78%" cy="4%" r="62%">
          <stop offset="0%" stopColor="#DCEBFF" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#2F76D6" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#2F76D6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="kk-needle" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EAF1FB" />
          <stop offset="100%" stopColor="#2F76D6" />
        </linearGradient>
        <filter id="kk-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves={2}
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>

      <rect width="1200" height="500" fill="url(#kk-bg)" />
      <rect width="1200" height="500" fill="url(#kk-glow)" />

      {/* Diagonale Lichtbänder – Echo der Aurora der Startseite */}
      <g stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="2">
        <line x1="-100" y1="130" x2="1300" y2="-120" />
        <line x1="-100" y1="270" x2="1300" y2="20" />
        <line x1="-100" y1="410" x2="1300" y2="160" />
      </g>

      {/* Kompass-Motiv */}
      <g transform="translate(910 250)" fill="none" stroke="#DCEBFF">
        <circle r="172" strokeOpacity="0.10" strokeWidth="1.5" />
        <circle r="120" strokeOpacity="0.16" strokeWidth="1.5" />
        <circle r="70" strokeOpacity="0.22" strokeWidth="1.5" />
        <g strokeOpacity="0.45" strokeWidth="2.5">
          <line x1="0" y1="-182" x2="0" y2="-152" />
          <line x1="0" y1="152" x2="0" y2="182" />
          <line x1="-182" y1="0" x2="-152" y2="0" />
          <line x1="152" y1="0" x2="182" y2="0" />
        </g>
        <g transform="rotate(38)">
          <polygon points="0,-128 22,0 0,16 -22,0" fill="url(#kk-needle)" stroke="none" />
          <polygon points="0,128 22,0 0,-16 -22,0" fill="#0B1016" fillOpacity="0.28" stroke="none" />
        </g>
        <circle r="7" fill="#FBFCFE" stroke="none" />
      </g>

      {/* Feines Korn gegen Banding */}
      <rect
        width="1200"
        height="500"
        filter="url(#kk-grain)"
        opacity="0.1"
        style={{ mixBlendMode: "soft-light" }}
      />

      {/* Eyebrow */}
      <line x1="80" y1="150" x2="116" y2="150" stroke="#9FC2F5" strokeWidth="2" />
      <text
        x="128"
        y="157"
        fill="#CFE0FA"
        fontFamily="'Geist Mono', ui-monospace, monospace"
        fontSize="22"
        letterSpacing="5"
        style={{ textTransform: "uppercase" }}
      >
        {eyebrow}
      </text>

      {/* Titel */}
      <text
        x="78"
        y="292"
        fill="#FFFFFF"
        fontFamily="'Geist', ui-sans-serif, system-ui, sans-serif"
        fontSize="104"
        fontWeight="600"
        letterSpacing="-3"
      >
        {title}
      </text>

      {subtitle && (
        <text
          x="82"
          y="352"
          fill="#FFFFFF"
          fillOpacity="0.72"
          fontFamily="'Geist', ui-sans-serif, system-ui, sans-serif"
          fontSize="34"
          fontWeight="400"
        >
          {subtitle}
        </text>
      )}
    </svg>
  );
}
