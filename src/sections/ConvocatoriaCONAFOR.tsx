import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  ExternalLink,
  FileText,
  Landmark,
  Laptop,
  Scale,
  ShieldAlert,
  TreePine,
  Users,
} from 'lucide-react'
import {
  articulosCONAFOR,
  CONAFOR_URLS,
  conafor,
  correspondenciaCONAFOR,
  costosCONAFOR,
  DOF_CONAFOR_URL,
  planAccionCONAFOR,
  requisitosCONAFOR,
} from '../data/conafor'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function ConvocatoriaCONAFOR() {
  return (
    <section id="conafor" className="seccion bg-white">
      <div className="contenedor">
        <SectionHeading
          etiqueta="Anexo · Convocatoria CONAFOR 2026"
          titulo="Cómo entraría el proyecto a la convocatoria CONAFOR 2026"
          subtitulo="Ejercicio ficticio de ubicación normativa basado en las Reglas de Operación publicadas en el DOF el 16 de enero de 2026 y en la Convocatoria Nacional 2026. La convocatoria real ya cerró; no hay aprobación ni recursos asignados."
        />

        <Reveal className="mt-10">
          <div className="flex flex-col gap-4 rounded-2xl border border-amber-300/40 bg-amber-50 p-6 sm:flex-row sm:items-start sm:gap-5">
            <ShieldAlert className="h-6 w-6 shrink-0 text-amber-600" aria-hidden="true" />
            <div>
              <p className="font-display text-sm font-bold text-amber-900">Advertencia de ejercicio ficticio</p>
              <p className="mt-2 text-sm leading-relaxed text-amber-900/75">{conafor.aviso}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-slate-200 bg-niebla/50 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-cian">
                  <TreePine className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-institucional">
                    Punto de entrada
                  </p>
                  <p className="font-display text-base font-bold text-navy">{conafor.modalidad}</p>
                </div>
              </div>
              <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Monto solicitado</dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-institucional">
                    {conafor.montoSolicitado}
                  </dd>
                  <dd className="mt-1 text-xs text-slate-500">{conafor.topeModalidad}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Solicitante ficticio</dt>
                  <dd className="mt-1 text-slate-700">{conafor.solicitante}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Rol de I.T.E.U.</dt>
                  <dd className="mt-1 text-slate-700">{conafor.rolITEU}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Ejecución y pagos</dt>
                  <dd className="mt-1 text-slate-700">{conafor.plazoEjecucion}</dd>
                  <dd className="mt-1 text-xs text-slate-500">{conafor.ministraciones}</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="h-full rounded-2xl border border-cian/25 bg-gradient-to-br from-cian/10 to-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-cian/15 text-institucional">
                  <Laptop className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="font-display text-base font-bold text-navy">Adaptación del planteamiento original</p>
              </div>
              <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-[10px] uppercase tracking-[0.12em] text-slate-500">
                    <tr>
                      <th className="px-4 py-3 font-bold">Original</th>
                      <th className="px-4 py-3 font-bold">Se adapta como</th>
                      <th className="px-4 py-3 font-bold">Actividad elegible</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {correspondenciaCONAFOR.map((fila) => (
                      <tr key={fila.original}>
                        <td className="px-4 py-3 font-semibold text-navy">{fila.original}</td>
                        <td className="px-4 py-3 text-slate-600">{fila.adaptacion}</td>
                        <td className="px-4 py-3 text-slate-600">{fila.elegible}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                El aula digital no se presenta como obra ni como infraestructura educativa: se reformula como un
                entorno de monitoreo y gestión forestal, que es el objeto del apoyo CONAFOR.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-institucional">Fundamento</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">
                  ¿Qué artículos fundamentan la inclusión?
                </h3>
              </div>
              <a
                href={DOF_CONAFOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-tecnologico hover:underline"
              >
                Reglas de Operación en el DOF
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {articulosCONAFOR.map((articulo, indice) => (
              <Reveal key={articulo.referencia} delay={indice * 60}>
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-niebla/40 p-5 transition-colors hover:border-cian/40">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy/5 text-institucional">
                      <Scale className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-right text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                      {articulo.referencia}
                    </span>
                  </div>
                  <h4 className="mt-4 font-display text-sm font-bold text-navy">{articulo.titulo}</h4>
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-600">{articulo.texto}</p>
                  <a
                    href={articulo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold text-tecnologico hover:underline"
                  >
                    {articulo.fuente}
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <ClipboardList className="h-6 w-6 text-institucional" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-navy">Requisitos de la convocatoria</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {requisitosCONAFOR.map((requisito) => (
                  <li key={requisito.titulo} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cian" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-bold text-navy">{requisito.titulo}</p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">{requisito.texto}</p>
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-tecnologico">
                        {requisito.fundamento}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="h-full rounded-2xl border border-amber-200 bg-amber-50/50 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-navy">Lo que NO se está afirmando</h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-700">
                <li className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  No se afirma que I.T.E.U. sea la beneficiaria directa del apoyo.
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  No se afirma que EduTrack reciba recursos por ser plataforma educativa.
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  No se presenta el aula digital como obra pública o privada financiable.
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  No se sugiere que la convocatoria esté abierta ni que exista un convenio firmado.
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  Los $400,000.00 son el tope de la modalidad, no un monto autorizado.
                </li>
              </ul>
              <div className="mt-6 rounded-xl border border-amber-200 bg-white p-4">
                <p className="text-xs leading-relaxed text-slate-600">
                  La participación real dependería de un grupo forestal de mujeres o jóvenes que presente la
                  solicitud y contrate a I.T.E.U. como proveedora de la innovación. Esto es un escenario de
                  diseño para el ejercicio académico.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-institucional">Análisis de costos</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">
                  Cómo se ejercerían los $400,000.00
                </h3>
              </div>
              <p className="max-w-md text-xs leading-relaxed text-slate-500">
                Clasificación de la plantilla académica. CONAFOR solicita una propuesta técnica y económica con
                desglose por concepto, no estas cinco bolsas contables.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-7">
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="hidden md:block">
                <table className="w-full text-left">
                  <thead className="bg-navy text-[10px] uppercase tracking-[0.14em] text-white/60">
                    <tr>
                      <th className="px-6 py-4 font-bold">Rubro</th>
                      <th className="px-6 py-4 text-right font-bold">Monto</th>
                      <th className="px-6 py-4 text-right font-bold">%</th>
                      <th className="px-6 py-4 font-bold">Integración</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {costosCONAFOR.map((costo) => (
                      <tr key={costo.rubro}>
                        <td className="px-6 py-4 text-sm font-bold text-navy">{costo.rubro}</td>
                        <td className="px-6 py-4 text-right text-sm font-semibold text-institucional">{costo.monto}</td>
                        <td className="px-6 py-4 text-right text-sm text-slate-500">{costo.porcentaje}</td>
                        <td className="px-6 py-4 text-xs leading-relaxed text-slate-600">{costo.detalle}</td>
                      </tr>
                    ))}
                    <tr className="bg-cian/10">
                      <td className="px-6 py-4 text-sm font-bold text-navy">Total solicitado</td>
                      <td className="px-6 py-4 text-right text-sm font-bold text-institucional">$400,000.00</td>
                      <td className="px-6 py-4 text-right text-sm font-bold text-institucional">100%</td>
                      <td className="px-6 py-4 text-xs text-slate-600">Monto máximo de FCDL.4.1, no autorizado.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="divide-y divide-slate-100 bg-white md:hidden">
                {costosCONAFOR.map((costo) => (
                  <div key={costo.rubro} className="px-5 py-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-bold text-navy">{costo.rubro}</p>
                      <p className="text-sm font-semibold text-institucional">{costo.monto}</p>
                    </div>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-tecnologico">
                      {costo.porcentaje}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{costo.detalle}</p>
                  </div>
                ))}
                <div className="bg-cian/10 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-navy">Total solicitado</p>
                    <p className="text-sm font-bold text-institucional">$400,000.00 · 100%</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-institucional">Plan de acción</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">
                  Etapas, responsables y entregables
                </h3>
              </div>
              <p className="max-w-md text-xs leading-relaxed text-slate-500">
                Cronograma de 12 meses, dentro del rango permitido de 6 a 12 meses del Anexo Técnico FCDL.4.1.
              </p>
            </div>
          </Reveal>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {planAccionCONAFOR.map((etapa, indice) => (
              <Reveal key={etapa.etapa} delay={indice * 70}>
                <article className="h-full rounded-2xl border border-slate-200 bg-niebla/40 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy text-cian">
                        <CalendarDays className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <h4 className="font-display text-sm font-bold text-navy">{etapa.etapa}</h4>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-tecnologico">
                          {etapa.meses}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-institucional">{etapa.monto}</p>
                      <p className="text-[10px] font-semibold text-slate-400">{etapa.porcentaje}</p>
                    </div>
                  </div>
                  <dl className="mt-5 space-y-3 text-xs leading-relaxed">
                    <div>
                      <dt className="font-bold uppercase tracking-[0.12em] text-slate-400">Responsables</dt>
                      <dd className="mt-1 flex items-start gap-2 text-slate-600">
                        <Users className="mt-0.5 h-3.5 w-3.5 shrink-0 text-institucional" aria-hidden="true" />
                        {etapa.responsables}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold uppercase tracking-[0.12em] text-slate-400">Entregables</dt>
                      <dd className="mt-1 flex items-start gap-2 text-slate-600">
                        <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-institucional" aria-hidden="true" />
                        {etapa.entregables}
                      </dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6">
            <div className="flex flex-col gap-4 rounded-2xl bg-navy p-6 text-white sm:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <CircleDollarSign className="mt-0.5 h-7 w-7 shrink-0 text-cian" aria-hidden="true" />
                <div>
                  <p className="font-display text-lg font-bold">Distribución por ministración</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{conafor.ministraciones}</p>
                  <p className="mt-2 text-xs text-white/45">
                    Los porcentajes de las etapas son una propuesta de ejercicio; las ministraciones son regla de
                    la modalidad.
                  </p>
                </div>
              </div>
              <a
                href={CONAFOR_URLS.convocatoriaNacional}
                target="_blank"
                rel="noopener noreferrer"
                className="boton-cian group shrink-0"
              >
                Ver Convocatoria Nacional
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-niebla/40">
            <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-5 sm:px-8">
              <Landmark className="h-6 w-6 text-institucional" aria-hidden="true" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Fuentes oficiales</p>
                <h3 className="font-display text-lg font-bold text-navy">Documentos consultados</h3>
              </div>
            </div>
            <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8">
              {[
                { nombre: 'Reglas de Operación 2026 en el DOF', url: DOF_CONAFOR_URL },
                { nombre: 'Convocatoria Nacional 2026', url: CONAFOR_URLS.convocatoriaNacional },
                { nombre: 'Convocatoria específica Componente VI', url: CONAFOR_URLS.convocatoriaCapacidades },
                { nombre: 'Reglas de Operación 2026 (PDF completo)', url: CONAFOR_URLS.reglasOperacion },
                { nombre: 'Interpretación Normativa 2026', url: CONAFOR_URLS.interpretacion },
              ].map((fuente) => (
                <a
                  key={fuente.nombre}
                  href={fuente.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-navy transition-colors hover:border-cian/50 hover:text-tecnologico"
                >
                  {fuente.nombre}
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
