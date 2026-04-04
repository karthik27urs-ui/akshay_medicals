const BrandLogo = ({ className = "", size = 64 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Cross / Plus shape */}
    <path
      d="M35 5h30v30h30v30H65v30H35V65H5V35h30V5z"
      fill="hsl(var(--primary))"
    />
    {/* Tree trunk - thick central stem */}
    <rect x="48" y="50" width="4" height="22" rx="1.5" fill="white" />
    {/* Crown top - pointed tip */}
    <polygon points="50,24 47,30 53,30" fill="white" />
    {/* Main branches curving outward and downward - like a banyan/peepal */}
    {/* Center stem up */}
    <line x1="50" y1="50" x2="50" y2="30" stroke="white" strokeWidth="2" strokeLinecap="round" />
    {/* Branch pair 1 - gentle curve outward */}
    <path d="M50,46 Q48,38 44,32" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    <path d="M50,46 Q52,38 56,32" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    {/* Branch pair 2 - wider */}
    <path d="M50,48 Q46,40 38,36" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M50,48 Q54,40 62,36" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Branch pair 3 - widest, curving down */}
    <path d="M50,50 Q44,42 34,42" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    <path d="M50,50 Q56,42 66,42" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    {/* Branch pair 4 - drooping outward */}
    <path d="M50,52 Q42,46 32,48" stroke="white" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    <path d="M50,52 Q58,46 68,48" stroke="white" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    {/* Branch pair 5 - lowest drooping */}
    <path d="M50,54 Q42,50 33,54" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M50,54 Q58,50 67,54" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    {/* Leaf dots at branch tips */}
    <circle cx="50" cy="29" r="1.5" fill="white" />
    <circle cx="44" cy="31" r="1.4" fill="white" />
    <circle cx="56" cy="31" r="1.4" fill="white" />
    <circle cx="38" cy="35" r="1.3" fill="white" />
    <circle cx="62" cy="35" r="1.3" fill="white" />
    <circle cx="34" cy="41" r="1.3" fill="white" />
    <circle cx="66" cy="41" r="1.3" fill="white" />
    <circle cx="32" cy="47" r="1.2" fill="white" />
    <circle cx="68" cy="47" r="1.2" fill="white" />
    <circle cx="33" cy="53" r="1.2" fill="white" />
    <circle cx="67" cy="53" r="1.2" fill="white" />
    {/* Small roots */}
    <path d="M48,72 Q46,75 43,76" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" />
    <path d="M52,72 Q54,75 57,76" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" />
  </svg>
);

export default BrandLogo;
