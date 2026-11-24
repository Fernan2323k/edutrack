import { ArrowRight, ArrowUp, ExternalLink, Sparkles } from 'lucide-react'
import { DOF_URL } from '../data/site'
import { Reveal } from '../components/ui/Reveal'
import { EduTrackMark, ITEUMark } from '../components/logos/EduTrackLogo'

export function Cierre() {
  return (
    <section id="cierre" className="superficie-oscura seccion">
      <div className="chips-neblina absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tecnologico/20 blur-[140px]"
        aria-hidden="true" />

      <div className="contenedor relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-cian/30 bg-cian/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cian">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Una propuesta de inversión educativa
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 flex justify-center">
              <EduTrackMark className="h-16 w-16" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-7 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Construyendo nuevas oportunidades para la educación superior
            </h2>
          </Reveal>

          <Reveal delay={170}>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-white/65 sm:text-base">
              El Aula Digital Universitaria con plataforma EduTrack representa una propuesta para fortalecer
              las condiciones de aprendizaje mediante infraestructura tecnológica y herramientas digitales que
              apoyen a estudiantes y docentes.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a href="#propuesta" className="boton-cian group">
                Conocer el proyecto
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href={DOF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="boton-claro"
              >
                Consultar el DOF
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#inicio" className="boton-claro">
                <ArrowUp className="h-4 w-4" aria-hidden="true" />
                Volver al inicio
              </a>
            </div>
          </Reveal>

          <Reveal delay={270}>
            <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-8">
              <ITEUMark inverse />
              <p className="max-w-2xl text-[11px] leading-relaxed text-white/40">
                Propuesta presentada con fines académicos y demostrativos. La información normativa se presenta
                como alineación preliminar y requiere validación institucional.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
