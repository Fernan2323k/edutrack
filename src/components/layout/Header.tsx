import { useEffect, useState } from 'react'
import { ArrowUpRight, ExternalLink, Grid2X2, Menu, X } from 'lucide-react'
import { DOF_URL, navigation, primaryNavigation } from '../../data/site'
import { EduTrackMark, ITEUMark } from '../logos/EduTrackLogo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [seccionActiva, setSeccionActiva] = useState('inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          const visibles = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          if (visibles[0]) setSeccionActiva(visibles[0].target.id)
        },
        { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.1, 0.3, 0.6] },
      )
      navigation.forEach(({ id }) => {
        const nodo = document.getElementById(id)
        if (nodo) observer.observe(nodo)
      })
      observers.push(observer)
    }

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuAbierto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuAbierto])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuAbierto(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl'
            : 'border-b border-transparent bg-navy/95 backdrop-blur-md'
        }`}
      >
        <div className="contenedor flex h-[72px] items-center justify-between gap-4">
          <a
            href="#inicio"
            className="flex min-w-0 items-center gap-3"
            onClick={() => setMenuAbierto(false)}
            aria-label="Aula Digital Universitaria - ir al inicio"
          >
            <EduTrackMark className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
            <span className="min-w-0 leading-tight">
              <span
                className={`block truncate font-display text-[13px] font-bold sm:text-sm ${
                  scrolled ? 'text-navy' : 'text-white'
                }`}
              >
                Aula Digital Universitaria
              </span>
              <span
                className={`mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.16em] ${
                  scrolled ? 'text-slate-500' : 'text-white/55'
                }`}
              >
                Plataforma EduTrack
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Navegación principal">
            {primaryNavigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`enlace-nav py-2 ${
                  seccionActiva === item.id ? (scrolled ? '!text-tecnologico' : '!text-cian') : ''
                } ${scrolled ? '' : '!text-white/75 hover:!text-white'}`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-cian transition-transform duration-300 ${
                    seccionActiva === item.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={DOF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors sm:inline-flex ${
                scrolled
                  ? 'border-institucional/20 text-institucional hover:bg-niebla'
                  : 'border-white/25 text-white hover:bg-white/10'
              }`}
            >
              Publicación DOF
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setMenuAbierto(true)}
              className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
                scrolled
                  ? 'border-slate-300 text-navy hover:bg-niebla'
                  : 'border-white/25 text-white hover:bg-white/10'
              }`}
              aria-expanded={menuAbierto}
              aria-controls="menu-secciones"
            >
              <Grid2X2 className="h-4 w-4" aria-hidden="true" />
              <span className="hidden xl:inline">Secciones</span>
              <Menu className="h-4 w-4 xl:hidden" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {menuAbierto && (
        <div
          id="menu-secciones"
          className="fixed inset-0 z-[60] overflow-y-auto bg-navy/98 backdrop-blur-xl animate-aparecer"
          role="dialog"
          aria-modal="true"
          aria-label="Todas las secciones del sitio"
        >
          <div className="contenedor flex min-h-full flex-col py-6">
            <div className="flex items-center justify-between">
              <ITEUMark inverse />
              <button
                type="button"
                onClick={() => setMenuAbierto(false)}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                autoFocus
              >
                Cerrar
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="my-auto py-10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cian">Índice del sitio</p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                Explora el proyecto por secciones
              </h2>
              <div className="mt-10 grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
                {navigation.map((item, indice) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuAbierto(false)}
                    className="group flex items-center justify-between border-b border-white/10 py-4 text-white/85 transition-colors hover:text-cian"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-display text-xs font-semibold text-white/35">
                        {String(indice + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-semibold">{item.label}</span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cian"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <p className="max-w-xl text-xs leading-relaxed text-white/50">
                Sitio académico de presentación. Información de I.T.E.U. con fines demostrativos.
              </p>
              <a
                href={DOF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cian hover:underline"
              >
                Consultar publicación oficial del DOF
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
