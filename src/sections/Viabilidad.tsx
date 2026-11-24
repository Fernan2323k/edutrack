import { tiposViabilidad } from '../data/project'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Check } from 'lucide-react'

export function Viabilidad() {
  return (
    <section id="viabilidad" className="seccion bg-white">
      <div className="contenedor">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            etiqueta="09 · Factibilidad"
            titulo="Viabilidad del proyecto"
            subtitulo="La propuesta puede abordarse desde cuatro dimensiones, con una primera etapa de prueba piloto y condiciones de financiamiento pendientes de validación."
          />
          <Reveal delay={90}>
            <div className="flex flex-wrap gap-2.5 lg:justify-end">
              {['Técnica', 'Operativa', 'Financiera', 'Académica'].map((etiqueta) => (
                <span
                  key={etiqueta}
                  className="rounded-full border border-slate-200 bg-niebla px-4 py-2 text-xs font-semibold text-slate-600"
                >
                  {etiqueta}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {tiposViabilidad.map((
            tipo,
            indice,
          ) => (
            <Reveal key={tipo.title} delay={indice * 70}>
              <article className="tarjeta group h-full p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-navy to-institucional text-cian">
                    <tipo.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{tipo.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{tipo.description}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4 text-[11px] font-semibold text-tecnologico">
                  <Check className="h-4 w-4" aria-hidden="true" />
                  {indice === 2 ? 'Condicionada a aprobación institucional' : 'Abordada en el planteamiento documental'}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-col gap-3 rounded-2xl border-l-4 border-tecnologico bg-niebla/70 p-6 sm:flex-row sm:items-center sm:gap-5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-tecnologico shadow-sm">
              <Check className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm leading-relaxed text-slate-700">
              La prueba piloto permitiría evaluar el funcionamiento del aula, la utilidad de la plataforma y las
              necesidades de capacitación antes de ampliar la propuesta.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
