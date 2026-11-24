interface EduTrackMarkProps {
  className?: string
  title?: string
}

/** Logotipo conceptual de EduTrack: trayectoria de aprendizaje + libro abierto. */
export function EduTrackMark({ className = 'h-10 w-10', title = 'EduTrack' }: EduTrackMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="13" fill="#0B1630" />
      <path
        d="M8.5 15.5 24 8l15.5 7.5L24 23 8.5 15.5Z"
        fill="#22D3EE"
        fillOpacity="0.95"
      />
      <path
        d="M15 21.5v9.2c0 3.5 4 6.3 9 6.3s9-2.8 9-6.3v-9.2"
        stroke="#FFFFFF"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path d="M39 20v9" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
      <circle cx="39" cy="32.5" r="2.2" fill="#FFFFFF" />
    </svg>
  )
}

interface EduTrackLogoProps {
  inverse?: boolean
  className?: string
}

export function EduTrackLogo({ inverse = false, className = '' }: EduTrackLogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <EduTrackMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-extrabold tracking-tight ${
            inverse ? 'text-white' : 'text-navy'
          }`}
        >
          Edu<span className={inverse ? 'text-cian' : 'text-tecnologico'}>Track</span>
        </span>
        <span
          className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] ${
            inverse ? 'text-white/60' : 'text-slate-500'
          }`}
        >
          Demostración conceptual
        </span>
      </span>
    </span>
  )
}

/** Marca tipográfica de I.T.E.U. sin simular un sello oficial. */
export function ITEUMark({ inverse = false, className = '' }: { inverse?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`grid h-9 w-9 place-items-center rounded-lg border text-[11px] font-display font-extrabold tracking-tight ${
          inverse
            ? 'border-cian/40 bg-cian/10 text-cian'
            : 'border-institucional/20 bg-institucional/5 text-institucional'
        }`}
        aria-hidden="true"
      >
        IU
      </span>
      <span
        className={`font-display text-sm font-bold tracking-[0.16em] ${
          inverse ? 'text-white' : 'text-navy'
        }`}
      >
        I.T.E.U.
      </span>
    </span>
  )
}
