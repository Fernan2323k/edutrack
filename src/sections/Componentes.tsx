import { componentes } from '../data/project'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { CheckCircle2 } from 'lucide-react'

export function Componentes() {
  return (
    <section id="componentes" className="seccion bg-niebla/60">
      <div className="contenedor">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            etiqueta="04 · Estructura"
            titulo="Cinco componentes, una propuesta articulada"
            subtitulo="El planteamiento documental organiza la iniciativa en cinco componentes que combinan equipamiento, software, formación y protección de la información."
          />
          <Reveal delay={80}>
            <div className="rounded-xl border border-institucional/15 bg-white px-5 py-4 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-institucional">Enfoque</p>
              <p className="mt-1 text-sm font-semibold text-navy">Tecnología al servicio de lo académico</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {componentes.map((componente, indice) => (
            <Reveal key={componente.title} delay={indice * 65}>
              <article className="tarjeta group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute right-5 top-4 font-display text-4xl font-extrabold text-slate-100 transition-colors group-hover:text-tecnologico/10">
                  {String(indice + 1).padStart(2, '0')}
                </div>
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-navy text-cian transition-transform duration-300 group-hover:scale-105">
                  <componente.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="relative mt-5 text-lg font-bold">{componente.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-600">{componente.description}</p>
                <div className="relative mt-5 flex gap-2.5 rounded-lg bg-niebla/80 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tecnologico" aria-hidden="true" />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Beneficio principal
                    </p>
                    <p className="mt-1 text-xs font-semibold leading-snug text-navy">{componente.beneficio}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={330}>
            <article className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-tecnologico/30 bg-gradient-to-br from-navy to-institucional p-6 text-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cian">Resultado esperado</p>
              <h3 className="mt-3 font-display text-xl font-bold leading-snug">
                Un ecosistema académico más conectado
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                La combinación de los cinco componentes busca apoyar tanto el acceso a recursos tecnológicos
                como el seguimiento académico de estudiantes y docentes.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
