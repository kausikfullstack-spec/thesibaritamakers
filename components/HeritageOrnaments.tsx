export function HeritageDivider({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`heritage-divider bengal-ornament${compact ? " compact" : ""}`} aria-hidden="true">
      <span />
      <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
        {Array.from({ length: 16 }, (_, index) => (
          <g key={index} transform={`rotate(${index * 22.5} 50 50)`}>
            <ellipse cx="50" cy="28" rx="5" ry="24" opacity="0.55" />
            <path d="M50 13v28" stroke="currentColor" strokeWidth="1" />
          </g>
        ))}
        <circle cx="50" cy="50" r="13" opacity="0.65" />
        <circle cx="50" cy="50" r="7" />
      </svg>
      <span />
    </div>
  );
}
export function KalkaWatermark({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 240 240" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.85">
        {Array.from({ length: 12 }, (_, index) => (
          <g key={index} transform={`rotate(${index * 30} 120 120)`}>
            <path d="M120 120C83 88 84 46 120 6c36 40 37 82 0 114Z" />
            <path d="M120 120C99 87 100 65 120 40c20 25 21 47 0 80Z" />
          </g>
        ))}
      </g>
    </svg>
  );
}
