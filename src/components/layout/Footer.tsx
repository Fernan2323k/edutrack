import { ArrowUp, ExternalLink } from 'lucide-react'
import { avisoAcademicoITEU, organizacion } from '../../data/organization'
import { DOF_URL, navigation, PROJECT_NAME } from '../../data/site'
import { EduTrackMark, ITEUMark } from '../logos/EduTrackLogo'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-800 text-white">
      <div className="contenedor py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <EduTrackMark className="h-11 w-11" />
              <div>
                <p className="font-display text-base font-bold leading-snug">{PROJECT_NAME}</p>
                <p className="mt-1 text-xs text-white/50">Infraestructura educativa y desarrollo tecnológico</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ITEUMark inverse />
              <span className="text-xs text-white/55">Chilpancingo de los Bravo, Guerrero</span>
            </div>
            <p className="mt-5 max-w-md text-xs leading-relaxed text-white/55">
              Documento base: proyecto académico de la Facultad de Ingeniería de la Universidad Autónoma de
              Guerrero, asignatura Fundamentos de Administración y Contabilidad.
            </p>
          </div>

          <nav aria-label="Secciones del sitio">
            <h3 className="font-display text-sm font-bold text-white">Secciones</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-2">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-xs text-white/60 transition-colors hover:text-cian">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold text-white">Fuente normativa</h3>
            <p className="mt-5 text-xs leading-relaxed text-white/60">
              Diario Oficial de la Federación · 29 de enero de 2026
            </p>
            <a
              href={DOF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-cian/35 px-4 py-2.5 text-xs font-semibold text-cian transition-colors hover:bg-cian/10"
            >
              Consultar publicación del DOF
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <p className="mt-6 text-xs leading-relaxed text-white/45">
              {organizacion.siglas} · {organizacion.constitucion}
            </p>
            <a
              href="#inicio"
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white/70 transition-colors hover:text-cian"
            >
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
              Volver al inicio
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-cian">Aviso académico</p>
          <p className="mt-2 text-xs leading-relaxed text-white/60">{avisoAcademicoITEU}</p>
          <p className="mt-3 text-xs leading-relaxed text-white/45">
            La demostración de EduTrack contiene datos ficticios y no está conectada a bases de datos reales.
            No se afirma aprobación de financiamiento ni elegibilidad automática de gastos.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-7 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 · {PROJECT_NAME} · {organizacion.siglas}
          </p>
          <p>Sitio de presentación académica · Última revisión documental: noviembre de 2026</p>
        </div>
      </div>
    </footer>
  )
}
