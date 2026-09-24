export function SectionDivider({ from, to, flip = false, className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-12 w-full overflow-hidden sm:h-20 ${className}`}
      style={{ backgroundColor: from }}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        style={flip ? { transform: 'scaleY(-1)' } : undefined}
      >
        <path
          d="M0,40 C240,90 480,0 720,30 C960,60 1200,95 1440,35 L1440,100 L0,100 Z"
          fill={to}
        />
      </svg>
    </div>
  )
}
