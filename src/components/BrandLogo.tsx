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
      opacity="0.9"
    />
    {/* Circle behind tree */}
    <circle cx="50" cy="50" r="22" fill="white" />
    {/* Tree trunk */}
    <rect x="47" y="56" width="6" height="14" rx="2" fill="hsl(var(--primary))" />
    {/* Tree canopy - layered leaves */}
    <ellipse cx="50" cy="46" rx="14" ry="12" fill="hsl(var(--primary))" />
    <ellipse cx="50" cy="40" rx="10" ry="9" fill="hsl(var(--primary))" />
    <ellipse cx="50" cy="35" rx="7" ry="7" fill="hsl(var(--primary))" />
    {/* Leaf vein details */}
    <line x1="50" y1="30" x2="50" y2="56" stroke="white" strokeWidth="1.5" opacity="0.5" />
    <line x1="50" y1="38" x2="42" y2="48" stroke="white" strokeWidth="1" opacity="0.4" />
    <line x1="50" y1="38" x2="58" y2="48" stroke="white" strokeWidth="1" opacity="0.4" />
  </svg>
);

export default BrandLogo;
