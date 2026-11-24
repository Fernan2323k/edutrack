import { AlertTriangle, CircleDashed, Layers3, Wallet } from 'lucide-react'
import { usosRecursos } from '../data/project'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { EduTrackMark } from '../components/logos/EduTrackLogo'

export function AplicacionRecursos() {
  return (
    <section id="recursos" className="seccion bg-niebla/60">
      <div className="contenedor">
        <SectionHeading
          etiqueta="08 · Inversión"
          titulo="¿En qué se utilizaría el financiamiento?"
          subtitulo="A continuación se presentan los posibles componentes de inversión. No se asignan precios, porcentajes ni cantidades porque no existe un presupuesto aprobado."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {usosRecursos.map((uso, indice) => (
            <Reveal key={uso.concepto} delay={indice * 60}>
              <article className="tarjeta flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-institucional/5 text-institucional">
                    <Layers3 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-slate-500">
                    <CircleDashed className="h-3 w-3" aria-hidden="true" />
                    {uso.estado}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{uso.concepto}</h3>
                <dl className="mt-4 space-y-3 text-xs leading-relaxed">
                  <div>
                    <dt className="font-bold uppercase tracking-[0.12em] text-slate-400">Justificación</dt>
                    <dd className="mt-1 text-slate-600">{uso.justificacion}</dd>
                  </div>
                  <div>
                    <dt className="font-bold uppercase tracking-[0.12em] text-slate-400">Beneficio esperado</dt>
                    <dd className="mt-1 text-slate-600">{uso.beneficio}</dd>
                  </div>
                </dl>
                <div className="mt-auto border-t border-slate-100 pt-4">
                  <p className="flex items-center gap-2 text-[10px] font-semibold text-tecnologico">
                    <Wallet className="h-3.5 w-3.5" aria-hidden="true" />
                    Sin monto asignado · por definir
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={300}>
            <article className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-tecnologico/30 bg-white p-6">
              <AlertTriangle className="h-7 w-7 text-amber-500" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-bold">Elegibilidad sujeta a revisión</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                La inclusión de cada concepto dependerá de los criterios, conceptos de gasto y procedimientos
                que aplique la institución pública de educación superior correspondiente.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl bg-navy text-white shadow-suave">
            <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <EduTrackMark className="h-12 w-12" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cian">Apartado separado</p>
                    <h3 className="font-display text-xl font-bold sm:text-2xl">Desarrollo de la plataforma EduTrack</h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/65">
                  El software complementa la infraestructura educativa, pero su financiamiento deberá
                  verificarse por separado.
                </p>
              </div>
              <div className="space-y-3 rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm leading-relaxed text-white/75">
                  No se puede afirmar que el desarrollo de la plataforma sea financiable con recursos del FAM.
                  La institución deberá revisar los conceptos de gasto permitidos y los procedimientos de
                  autorización aplicables.
                </p>
                <p className="border-t border-white/10 pt-4 text-sm leading-relaxed text-white/75">
                  Si el FAM no permite cubrir ese gasto, será necesario buscar una fuente adicional compatible
                  para el componente de software.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
