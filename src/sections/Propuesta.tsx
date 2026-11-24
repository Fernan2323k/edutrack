import { ArrowRight, BookOpen, Check, Laptop, Monitor, Network, School, Users } from 'lucide-react'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { EduTrackMark } from '../components/logos/EduTrackLogo'
import { objetivosEspecificos } from '../data/project'

const infraestructura = [
  { icon: Monitor, texto: 'Computadoras' },
  { icon: School, texto: 'Mobiliario' },
  { icon: Network, texto: 'Conectividad' },
  { icon: Users, texto: 'Espacio para actividades académicas' },
  { icon: BookOpen, texto: 'Acceso a recursos tecnológicos' },
]

const plataforma = [
  'Seguimiento académico',
  'Consulta de calificaciones',
  'Consulta de tareas',
  'Materiales de estudio',
  'Ejercicios de reforzamiento',
  'Reportes para docentes',
]

const flujo = [
  { titulo: 'Aula equipada', detalle: 'Computadoras, mobiliario y conectividad', tipo: 'físico' as const },
  { titulo: 'Actividades académicas', detalle: 'Estudiantes y docentes usan el espacio', tipo: 'físico' as const },
  { titulo: 'EduTrack', detalle: 'Calificaciones, tareas y materiales', tipo: 'digital' as const },
  { titulo: 'Seguimiento', detalle: 'Avances y necesidades de apoyo', tipo: 'digital' as const },
]

export function Propuesta() {
  return (
    <section id="propuesta" className="seccion bg-niebla/60">
      <div className="contenedor">
        <SectionHeading
          etiqueta="02 · Solución"
          titulo="Una solución integral para fortalecer el aprendizaje"
          subtitulo="El proyecto combina infraestructura física y herramientas digitales: un espacio académico equipado y una plataforma web que apoya el seguimiento del aprendizaje."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="tarjeta h-full overflow-hidden">
              <div className="relative h-52 overflow-hidden sm:h-60">
                <img
                  src="/images/aula-digital.jpg"
                  alt="Estudiante utilizando una computadora portátil como representación del aula digital"
                  className="h-full w-full object-cover"
                  width="1400"
                  height="933"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" aria-hidden="true" />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-institucional">
                  Componente A
                </span>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-2xl font-bold text-white">Aula Digital Universitaria</h3>
                  <p className="mt-1 text-sm text-white/70">Infraestructura física y equipamiento</p>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {infraestructura.map((item) => (
                    <li key={item.texto} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-tecnologico/10 text-tecnologico">
                        <item.icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="leading-snug">{item.texto}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy p-6 text-white shadow-suave sm:p-7">
              <div className="chips-neblina absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="relative">
                <span className="inline-flex rounded-full border border-cian/30 bg-cian/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-cian">
                  Componente B
                </span>
                <div className="mt-6 flex items-center gap-3">
                  <EduTrackMark className="h-12 w-12" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Plataforma EduTrack</h3>
                    <p className="text-sm text-white/55">Herramientas digitales de apoyo</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/65">
                  Sitio web que permite consultar calificaciones, revisar tareas, visualizar avances académicos
                  y acceder a materiales de estudio.
                </p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {plataforma.map((texto) => (
                    <li key={texto} className="flex items-start gap-2.5 text-sm text-white/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cian" aria-hidden="true" />
                      <span className="leading-snug">{texto}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative mt-auto pt-8">
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs text-white/55">
                  <Laptop className="h-4 w-4 text-cian" aria-hidden="true" />
                  Representación conceptual · sin conexión a datos reales
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-tarjeta sm:p-9">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="etiqueta mb-3">Infografía del proyecto</p>
                <h3 className="text-xl font-bold sm:text-2xl">Cómo trabajan juntos ambos componentes</h3>
              </div>
              <p className="max-w-md text-xs leading-relaxed text-slate-500">
                Secuencia conceptual: el espacio equipado genera actividad académica y la plataforma organiza
                la información para el seguimiento.
              </p>
            </div>

            <div className="mt-8 grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:gap-2">
              {flujo.map((paso, indice) => (
                <div key={paso.titulo} className="flex items-stretch gap-2">
                  <div
                    className={`flex-1 rounded-xl border p-4 ${
                      paso.tipo === 'físico'
                        ? 'border-tecnologico/20 bg-tecnologico/[0.04]'
                        : 'border-cian/30 bg-cian/[0.06]'
                    }`}
                  >
                    <span className="font-display text-[10px] font-extrabold tracking-[0.15em] text-slate-400">
                      PASO {indice + 1}
                    </span>
                    <p className="mt-2 text-sm font-bold text-navy">{paso.titulo}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{paso.detalle}</p>
                  </div>
                  {indice < flujo.length - 1 && (
                    <div className="hidden w-6 place-items-center self-center md:grid" aria-hidden="true">
                      <ArrowRight className="h-5 w-5 text-cian" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-100 pt-5 text-[11px] font-semibold uppercase tracking-[0.12em]">
              <span className="flex items-center gap-2 text-tecnologico">
                <span className="h-2.5 w-2.5 rounded-full bg-tecnologico" /> Infraestructura física
              </span>
              <span className="flex items-center gap-2 text-[#0891b2]">
                <span className="h-2.5 w-2.5 rounded-full bg-cian" /> Herramientas digitales
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-institucional/15 bg-white p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-institucional">Objetivo general</p>
              <p className="mt-3 font-display text-base font-semibold leading-relaxed text-navy sm:text-lg">
                Implementar un aula digital universitaria con equipamiento tecnológico y una plataforma web de
                seguimiento académico que contribuya a mejorar las condiciones de aprendizaje de los estudiantes
                de una institución pública de educación superior.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-2xl bg-institucional p-6 text-white sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cian">Objetivos específicos</p>
              <ul className="mt-4 grid gap-2.5 text-sm leading-relaxed text-white/85">
                {objetivosEspecificos.map((objetivo) => (
                  <li key={objetivo} className="flex gap-2.5">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-cian" aria-hidden="true" />
                    {objetivo}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
