export function SpectraLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Prisma con líneas convergiendo */}
      <polygon
        points="20,4 36,32 4,32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Líneas convergiendo al centro */}
      <line x1="20" y1="4" x2="20" y2="22" stroke="#00C9A7" strokeWidth="2" />
      <line x1="4" y1="32" x2="20" y2="22" stroke="#00C9A7" strokeWidth="1.5" />
      <line x1="36" y1="32" x2="20" y2="22" stroke="#00C9A7" strokeWidth="1.5" />
      {/* Punto central */}
      <circle cx="20" cy="22" r="3" fill="#00C9A7" />
    </svg>
  )
}
