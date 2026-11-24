import { AlertTriangle, BadgeCheck, BookOpen, ExternalLink, FileText, Landmark, Scale, ShieldCheck } from 'lucide-react'
import { dof } from '../data/dof'
import { DOF_URL } from '../data/site'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function FundamentoDOF() {
  return (
    <section id="dof" className="seccion bg-white">
      <div className="contenedor">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          <SectionHeading
            etiqueta="07 · Marco normativo"
            titulo="Fundamento normativo y alineación financiera"
            subtitulo="La fuente principal de esta propuesta es la publicación del Diario Oficial de la Federación correspondiente al 29 de enero de 2026, relativa a la distribución y calendarización de recursos del FAM."
          />

          <Reveal delay={80}>
            <a
              href={DOF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-2xl border border-institucional/20 bg-gradient-to-br from-niebla to-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-tecnologico/40 hover:shadow-md"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-cian">
                <FileText className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-institucional">
                  Fuente principal
                </span>
                <span className="mt-1 block font-display text-sm font-bold leading-snug text-navy group-hover:text-tecnologico">
                  Diario Oficial de la Federación
                </span>
                <span className="mt-1 block text-xs text-slate-500">29 de enero de 2026</span>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-tecnologico">
                  Consultar publicación oficial
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-tarjeta sm:p-8">
              <div className="flex items-center gap-2.5">
                <Scale className="h-5 w-5 text-institucional" aria-hidden="true" />
                <h3 className="font-display text-lg font-bold">Instrumento consultado</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{dof.instrumento}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-niebla p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">Fecha</p>
                  <p className="mt-1.5 text-sm font-bold text-navy">{dof.fecha}</p>
                </div>
                <div className="rounded-xl bg-niebla p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">Componente de interés</p>
                  <p className="mt-1.5 text-sm font-bold text-navy">{dof.componente}</p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border-l-4 border-amber-300 bg-amber-50/70 p-4">
                <p className="text-xs leading-relaxed text-amber-900">
                  <strong className="font-bold">Naturaleza del documento:</strong> {dof.naturaleza}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Fundamentos citados en el aviso</p>
                <ul className="mt-3 grid gap-2 text-xs leading-relaxed text-slate-600">
                  {dof.fundamentos.map((fundamento) => (
                    <li key={fundamento} className="flex gap-2">
                      <BadgeCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-tecnologico" aria-hidden="true" />
                      {fundamento}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <Reveal delay={90}>
            <article className="h-full rounded-2xl bg-navy p-6 text-white shadow-suave sm:p-8">
              <div className="flex items-center gap-2.5">
                <Landmark className="h-5 w-5 text-cian" aria-hidden="true" />
                <h3 className="font-display text-lg font-bold text-white">Datos verificados del aviso</h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/50">
                Consultados directamente en la publicación oficial; no corresponden a cifras del proyecto.
              </p>
              <div className="mt-6 space-y-4">
                {dof.datosVerificados.map((dato) => (
                  <div key={dato.etiqueta} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-cian">{dato.etiqueta}</p>
                    <p className="mt-2 font-display text-sm font-bold text-white">{dato.valor}</p>
                    <p className="mt-2 text-[11px] leading-relaxed text-white/55">{dato.nota}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={50}>
          <div className="mt-8 overflow-hidden rounded-2xl border-2 border-institucional/25 bg-gradient-to-br from-white to-niebla shadow-tarjeta">
            <div className="flex flex-col gap-4 border-b border-institucional/15 bg-institucional/[0.06] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-institucional text-white">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-institucional">
                    Cita exacta de la disposición más cercana al proyecto
                  </p>
                  <h3 className="font-display text-lg font-bold text-navy">{dof.citaPrecisa.articulo}</h3>
                </div>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-institucional/25 bg-white px-3 py-1.5 text-[11px] font-bold text-navy">
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                {dof.citaPrecisa.pagina}
              </span>
            </div>
            <blockquote className="px-6 py-6 sm:px-8">
              <p className="text-sm leading-relaxed text-slate-700">“{dof.citaPrecisa.texto}”</p>
              <footer className="mt-4 text-xs leading-relaxed text-slate-500">{dof.citaPrecisa.ubicacion}</footer>
            </blockquote>
            <div className="flex gap-3 border-t border-rose-200/70 bg-rose-50/60 px-6 py-4 sm:px-8">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" aria-hidden="true" />
              <p className="text-xs leading-relaxed text-rose-900/80">{dof.citaPrecisa.advertencia}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-slate-200 bg-niebla/60 p-6 sm:p-8">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-institucional" aria-hidden="true" />
                <h3 className="font-display text-lg font-bold">Relación entre la propuesta y el instrumento</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {dof.relacionPropuesta.map((relacion) => (
                  <li key={relacion} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tecnologico" aria-hidden="true" />
                    {relacion}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <a href={DOF_URL} target="_blank" rel="noopener noreferrer" className="boton-primario">
                  Consultar publicación oficial del DOF
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-rose-200/70 bg-rose-50/50 p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-rose-700">Precisiones necesarias</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-rose-950/80">
                {dof.precisiones.map((precision) => (
                  <li key={precision} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" aria-hidden="true" />
                    {precision}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-rose-200/70 pt-5 text-xs leading-relaxed text-rose-900/70">
                {dof.notaVerificacion}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-8 rounded-2xl border border-institucional/20 bg-institucional/[0.04] p-6 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-institucional">Nota institucional</p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-navy">{dof.notaInstitucional}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
