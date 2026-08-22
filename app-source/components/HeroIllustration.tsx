// Custom illustration standing in for on-site photography.
// Swap for real photos of technicians/jobs once available.
export default function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 480"
      className={className}
      role="img"
      aria-label="Illustration of a DoorChamp technician servicing a residential garage door"
    >
      <defs>
        <linearGradient id="skyFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1E3A5F" />
          <stop offset="1" stopColor="#142B4A" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="560" height="480" rx="24" fill="url(#skyFade)" />

      {/* Ground */}
      <rect x="0" y="410" width="560" height="70" fill="#0D1F36" />
      <rect x="0" y="406" width="560" height="6" fill="#D4A62A" opacity="0.5" />

      {/* House facade */}
      <rect x="80" y="120" width="400" height="290" rx="10" fill="#F5F7FA" />
      <rect x="80" y="120" width="400" height="290" rx="10" fill="none" stroke="#66717C" strokeWidth="1.5" opacity="0.25" />

      {/* Roofline */}
      <path d="M60 130 L280 40 L500 130 Z" fill="#0D1F36" />
      <rect x="60" y="122" width="440" height="14" fill="#142B4A" />

      {/* Garage opening */}
      <rect x="150" y="200" width="220" height="180" rx="6" fill="#1C1F22" />

      {/* Door panels, open (rolled up, partial reveal at top of opening) */}
      <g>
        <rect x="150" y="200" width="220" height="34" fill="#E9E2D3" />
        <rect x="150" y="200" width="220" height="34" fill="none" stroke="#B8A97F" strokeWidth="1" />
        <line x1="150" y1="217" x2="370" y2="217" stroke="#B8A97F" strokeWidth="1" />
      </g>

      {/* Interior shadow gradient suggestion */}
      <rect x="150" y="234" width="220" height="146" fill="#101214" opacity="0.9" />

      {/* Side window */}
      <rect x="410" y="230" width="46" height="46" rx="4" fill="#DCE6F0" stroke="#66717C" strokeWidth="1.5" />
      <line x1="433" y1="230" x2="433" y2="276" stroke="#66717C" strokeWidth="1.5" />
      <line x1="410" y1="253" x2="456" y2="253" stroke="#66717C" strokeWidth="1.5" />

      {/* Technician - simplified professional silhouette, kneeling at the track */}
      <g transform="translate(230, 300)">
        {/* torso */}
        <path d="M0 60c-2-26 10-46 34-50 22-4 40 10 42 32 1 12-3 24-10 34H10c-6-6-9-12-10-16Z" fill="#142B4A" />
        {/* legs kneeling */}
        <path d="M6 76c0 10 3 20 8 28h20c2-10 2-20-2-28Z" fill="#0D1F36" />
        <path d="M52 76c4 8 10 16 20 20l8-14c-8-6-14-12-16-20Z" fill="#0D1F36" />
        {/* arm reaching to track */}
        <path d="M40 30c14-2 26 4 30 16l-10 8c-6-8-14-12-24-12Z" fill="#1E3A5F" />
        {/* head */}
        <circle cx="34" cy="14" r="14" fill="#D9B98C" />
        {/* cap */}
        <path d="M18 12a16 16 0 0 1 32 0h-4c-2-8-8-13-14-13s-12 5-14 13Z" fill="#142B4A" />
        <rect x="16" y="11" width="18" height="5" rx="2.5" fill="#D4A62A" />
        {/* safety vest accent */}
        <path d="M10 46l14-6 6 6-6 20-14-4Z" fill="#D4A62A" opacity="0.85" />
      </g>

      {/* Toolbox */}
      <g transform="translate(180, 372)">
        <rect x="0" y="8" width="42" height="24" rx="3" fill="#66717C" />
        <rect x="10" y="0" width="22" height="10" rx="3" fill="#66717C" />
        <rect x="0" y="16" width="42" height="4" fill="#142B4A" opacity="0.4" />
      </g>

      {/* Track lines on the open door path */}
      <line x1="150" y1="200" x2="150" y2="380" stroke="#3A3F44" strokeWidth="3" />
      <line x1="370" y1="200" x2="370" y2="380" stroke="#3A3F44" strokeWidth="3" />

      {/* Gold accent ring, subtle "champion" nod without being literal */}
      <circle cx="470" cy="70" r="20" fill="none" stroke="#D4A62A" strokeWidth="3" opacity="0.6" />
    </svg>
  );
}
