import { ArrowRight, CheckCircle2, ExternalLink, Link2, ShieldAlert } from 'lucide-react'
import { argumentosFAM, matrizFAM } from '../data/project'
import { DOF_URL } from '../data/site'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function FinanciamientoFAM() {
  return (
    <section id="financiamiento" className="superficie-oscura seccion">
      <div className="chips-neblina absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute -right-52 top-1/3 h-[500px] w-[500px] rounded-full bg-tecnologico/20 blur-[130px]"
        aria-hidden="true" />
      <div
        className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cian/10 blur-[120px]"
        aria-hidden="true" />

      <div className="contenedor relative">
        <SectionHeading
          invertido
          etiqueta="06 · Justificación"
          titulo="¿Por qué el proyecto busca financiamiento mediante el FAM?"
          subtitulo="El Fondo de Aportaciones Múltiples contempla recursos destinados a infraestructura educativa, incluido el componente de Infraestructura Educativa Superior. La propuesta se alinea con ese ámbito al centrarse en un espacio académico público equipado tecnológicamente."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cian">Planteamiento</p>
              <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                El proyecto propone fortalecer las condiciones materiales y tecnológicas de la educación
                superior pública mediante la habilitación de un espacio académico equipado con computadoras,
                mobiliario y conectividad.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                La plataforma EduTrack complementa el funcionamiento de dicha infraestructura al proporcionar
                herramientas de apoyo académico para estudiantes y docentes.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#dof" className="boton-cian group">
                  Ver fundamento normativo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a
                  href={DOF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boton-claro"
                >
                  Publicación oficial
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="h-full rounded-2xl border border-cian/25 bg-gradient-to-br from-cian/10 to-transparent p-6 sm:p-8">
              <Link2 className="h-7 w-7 text-cian" aria-hidden="true" />
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-cian">Alineación preliminar</p>
              <h3 className="mt-2 font-display text-xl font-bold text-white">
                Infraestructura primero, plataforma como complemento
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                La petición de financiamiento se plantea para los componentes de infraestructura y
                equipamiento. El desarrollo del software requiere revisión por separado, conforme a los
                conceptos de gasto autorizados.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cian">Argumentos de la propuesta</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                  Cuatro razones para evaluar el proyecto
                </h3>
              </div>
              <p className="max-w-sm text-xs leading-relaxed text-white/45">
                Argumentos derivados del planteamiento documental; constituyen una propuesta, no una
                resolución de financiamiento.
              </p>
            </div>
          </Reveal>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {argumentosFAM.map((argumento, indice) => (
              <Reveal key={argumento.numero} delay={indice * 70}>
                <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-cian/35 hover:bg-white/[0.06]">
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-cian/25 bg-cian/10 text-cian">
                      <argumento.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-3xl font-extrabold text-white/10">{argumento.numero}</span>
                  </div>
                  <h4 className="mt-5 font-display text-base font-bold leading-snug text-white">
                    {argumento.titulo}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{argumento.texto}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="border-b border-white/10 px-6 py-5 sm:px-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cian">Matriz visual</p>
              <h3 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                Necesidades identificadas y soluciones propuestas
              </h3>
            </div>

            <div className="hidden md:block">
              <table className="w-full text-left">
                <thead className="bg-white/[0.03] text-[10px] uppercase tracking-[0.16em] text-white/45">
                  <tr>
                    <th className="px-8 py-4 font-bold">Necesidad</th>
                    <th className="px-8 py-4 font-bold">Solución</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {matrizFAM.map((fila) => (
                    <tr key={fila.necesidad} className="transition-colors hover:bg-white/[0.03]">
                      <td className="px-8 py-4 text-sm text-white/75">{fila.necesidad}</td>
                      <td className="px-8 py-4">
                        <span className="inline-flex items-center gap-2 rounded-lg bg-cian/10 px-3 py-1.5 text-sm font-semibold text-cian">
                          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                          {fila.solucion}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="divide-y divide-white/10 md:hidden">
              {matrizFAM.map((fila) => (
                <div key={fila.necesidad} className="px-5 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">Necesidad</p>
                  <p className="mt-1 text-sm text-white/80">{fila.necesidad}</p>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">Solución</p>
                  <p className="mt-1 text-sm font-semibold text-cian">{fila.solucion}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-amber-300/25 bg-amber-300/[0.07] p-6 sm:flex-row sm:items-start sm:gap-5">
            <ShieldAlert className="h-6 w-6 shrink-0 text-amber-300" aria-hidden="true" />
            <div>
              <p className="font-display text-sm font-bold text-white">Precisiones sobre el financiamiento</p>
              <ul className="mt-3 grid gap-2 text-xs leading-relaxed text-white/65 sm:grid-cols-2">
                <li>• No se afirma que el proyecto haya sido aprobado ni que haya recibido recursos.</li>
                <li>• I.T.E.U. no tiene un derecho automático a recibir financiamiento público.</li>
                <li>• La elegibilidad de cada gasto debe ser revisada por la institución correspondiente.</li>
                <li>• El desarrollo de EduTrack no se presenta como financiable de forma automática por el FAM.</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
