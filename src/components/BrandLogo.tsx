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

    {/* === Tree inside the cross === */}

    {/* Trunk */}
    <path d="M50,74 L50,52" stroke="white" strokeWidth="3" strokeLinecap="round" />

    {/* Two main branches splitting from trunk */}
    <path d="M50,52 Q46,46 40,42" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M50,52 Q54,46 60,42" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" />

    {/* Central upward stem */}
    <path d="M50,52 L50,30" stroke="white" strokeWidth="2" strokeLinecap="round" />

    {/* Leaves - oval shapes arranged along branches */}
    {/* Top center leaf */}
    <ellipse cx="50" cy="26" rx="2.5" ry="4" fill="white" />

    {/* Row 1 - near top */}
    <ellipse cx="46" cy="29" rx="2.2" ry="3.5" fill="white" transform="rotate(-15 46 29)" />
    <ellipse cx="54" cy="29" rx="2.2" ry="3.5" fill="white" transform="rotate(15 54 29)" />

    {/* Row 2 */}
    <ellipse cx="42" cy="33" rx="2.2" ry="3.5" fill="white" transform="rotate(-25 42 33)" />
    <ellipse cx="58" cy="33" rx="2.2" ry="3.5" fill="white" transform="rotate(25 58 33)" />

    {/* Row 3 */}
    <ellipse cx="38" cy="38" rx="2.2" ry="3.5" fill="white" transform="rotate(-35 38 38)" />
    <ellipse cx="62" cy="38" rx="2.2" ry="3.5" fill="white" transform="rotate(35 62 38)" />

    {/* Row 4 - lower wider */}
    <ellipse cx="35" cy="43" rx="2" ry="3.2" fill="white" transform="rotate(-45 35 43)" />
    <ellipse cx="65" cy="43" rx="2" ry="3.2" fill="white" transform="rotate(45 65 43)" />

    {/* Inner leaves along center stem */}
    <ellipse cx="48" cy="35" rx="1.8" ry="3" fill="white" transform="rotate(-10 48 35)" />
    <ellipse cx="52" cy="35" rx="1.8" ry="3" fill="white" transform="rotate(10 52 35)" />
    <ellipse cx="47" cy="41" rx="1.8" ry="3" fill="white" transform="rotate(-15 47 41)" />
    <ellipse cx="53" cy="41" rx="1.8" ry="3" fill="white" transform="rotate(15 53 41)" />
    <ellipse cx="45" cy="47" rx="1.8" ry="2.8" fill="white" transform="rotate(-25 45 47)" />
    <ellipse cx="55" cy="47" rx="1.8" ry="2.8" fill="white" transform="rotate(25 55 47)" />

    {/* Small roots */}
    <path d="M48,74 Q45,77 42,78" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M52,74 Q55,77 58,78" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" />
  </svg>
);

export default BrandLogo;
