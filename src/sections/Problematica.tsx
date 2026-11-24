import { problematicas } from '../data/project'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Problematica() {
  return (
    <section id="problematica" className="seccion bg-white">
      <div className="contenedor">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            etiqueta="01 · Contexto"
            titulo="Una necesidad que requiere soluciones tecnológicas"
            subtitulo="El planteamiento del proyecto identifica situaciones que pueden dificultar el aprendizaje y el seguimiento escolar en la educación superior pública."
          />
          <Reveal delay={100}>
            <div className="rounded-2xl border-l-4 border-cian bg-niebla/70 p-5 sm:p-6">
              <p className="text-sm leading-relaxed text-slate-600">
                Las siguientes situaciones provienen del planteamiento documental del proyecto.{' '}
                <strong className="font-semibold text-navy">
                  No se presentan estudios estadísticos ni cifras de incidencia
                </strong>
                : este sitio no atribuye al documento datos que no contiene.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problematicas.map((item, indice) => (
            <Reveal key={item.title} delay={indice * 70}>
              <article className="tarjeta group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-tecnologico/30 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-institucional/5 text-institucional transition-colors group-hover:bg-tecnologico group-hover:text-white">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-display text-2xl font-extrabold text-slate-200">
                    {String(indice + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={350}>
            <article className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-tecnologico/35 bg-gradient-to-br from-niebla to-white p-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-institucional">
                  Respuesta propuesta
                </p>
                <h3 className="mt-4 text-lg font-bold">Un aula digital con soporte académico</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  El proyecto propone combinar equipamiento tecnológico, conectividad y una plataforma de
                  apoyo académico para atender estas situaciones.
                </p>
              </div>
              <a
                href="#propuesta"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-tecnologico hover:gap-3 transition-all"
              >
                Ver la propuesta <span aria-hidden="true">→</span>
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
