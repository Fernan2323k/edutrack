import { CheckCircle2, ChartNoAxesCombined, CircleDashed, Target } from 'lucide-react'
import { indicadoresPropuestos, resultadosEsperados } from '../data/project'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ITEUMark } from '../components/logos/EduTrackLogo'

export function Impacto() {
  return (
    <section id="impacto" className="seccion bg-niebla/60">
      <div className="contenedor">
        <SectionHeading
          etiqueta="10 · Proyección"
          titulo="Resultados e impacto esperado"
          subtitulo="Los resultados que se presentan son expectativas del proyecto, no mediciones realizadas. Los indicadores listados son propuestas para evaluar la prueba piloto."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <article className="h-full rounded-2xl bg-white p-6 shadow-tarjeta sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-tecnologico/10 text-tecnologico">
                  <Target className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Proyección</p>
                  <h3 className="text-lg font-bold">Resultados esperados</h3>
                </div>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {resultadosEsperados.map((resultado) => (
                  <li
                    key={resultado}
                    className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-niebla/50 p-4 text-sm leading-snug text-slate-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tecnologico" aria-hidden="true" />
                    {resultado}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={90}>
            <article className="h-full rounded-2xl border border-white/10 bg-navy p-6 text-white shadow-suave sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-cian/15 text-cian">
                  <ChartNoAxesCombined className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/45">Medición</p>
                  <h3 className="text-lg font-bold text-white">Indicadores propuestos</h3>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {indicadoresPropuestos.map((indicador) => (
                  <li key={indicador} className="flex items-start gap-3 text-sm text-white/75">
                    <CircleDashed className="mt-0.5 h-4 w-4 shrink-0 text-cian" aria-hidden="true" />
                    {indicador}
                  </li>
                ))}
              </ul>
              <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs leading-relaxed text-white/60">
                  Estos indicadores podrían utilizarse para evaluar el piloto.{' '}
                  <strong className="font-semibold text-cian">
                    A la fecha no se presentan resultados medidos ni cifras de impacto real.
                  </strong>
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-center gap-3">
              <ITEUMark />
              <p className="text-sm font-semibold text-navy">
                La evaluación corresponderá a la institución pública donde se implemente la prueba piloto.
              </p>
            </div>
            <a href="#recursos" className="boton-secundario shrink-0">
              Revisar la inversión propuesta
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
