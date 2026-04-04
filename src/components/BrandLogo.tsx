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
    {/* Tree trunk */}
    <line x1="50" y1="72" x2="50" y2="48" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    {/* Spreading branches - fan pattern like the real logo */}
    {/* Center top */}
    <line x1="50" y1="48" x2="50" y2="28" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    {/* Layer 1 - slight spread */}
    <line x1="50" y1="50" x2="46" y2="30" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="50" y1="50" x2="54" y2="30" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    {/* Layer 2 - more spread */}
    <line x1="50" y1="52" x2="41" y2="32" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="50" y1="52" x2="59" y2="32" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    {/* Layer 3 - wider */}
    <line x1="50" y1="54" x2="36" y2="35" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="50" y1="54" x2="64" y2="35" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
    {/* Layer 4 - widest */}
    <line x1="50" y1="56" x2="32" y2="39" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="50" y1="56" x2="68" y2="39" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    {/* Layer 5 - outermost */}
    <line x1="50" y1="58" x2="29" y2="44" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
    <line x1="50" y1="58" x2="71" y2="44" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
    {/* Small leaf tips at the ends */}
    <circle cx="50" cy="27" r="1.5" fill="white" />
    <circle cx="46" cy="29" r="1.3" fill="white" />
    <circle cx="54" cy="29" r="1.3" fill="white" />
    <circle cx="41" cy="31" r="1.3" fill="white" />
    <circle cx="59" cy="31" r="1.3" fill="white" />
    <circle cx="36" cy="34" r="1.2" fill="white" />
    <circle cx="64" cy="34" r="1.2" fill="white" />
    <circle cx="32" cy="38" r="1.2" fill="white" />
    <circle cx="68" cy="38" r="1.2" fill="white" />
    <circle cx="29" cy="43" r="1.1" fill="white" />
    <circle cx="71" cy="43" r="1.1" fill="white" />
    {/* Root lines at base */}
    <line x1="50" y1="72" x2="44" y2="76" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="50" y1="72" x2="56" y2="76" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export default BrandLogo;
