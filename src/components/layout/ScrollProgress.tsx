import { useEffect, useState } from 'react'

/** Indicador discreto de avance de lectura. */
export function ScrollProgress() {
  const [progreso, setProgreso] = useState(0)

  useEffect(() => {
    let frame = 0

    const actualizar = () => {
      const altura = document.documentElement.scrollHeight - window.innerHeight
      setProgreso(altura > 0 ? Math.min(100, (window.scrollY / altura) * 100) : 0)
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(actualizar)
    }

    actualizar()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-transparent"
      role="progressbar"
      aria-label="Progreso de desplazamiento"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progreso)}
    >
      <div
        className="h-full bg-gradient-to-r from-tecnologico via-cian to-tecnologico transition-[width] duration-150 ease-out"
        style={{ width: `${progreso}%` }}
      />
    </div>
  )
}
