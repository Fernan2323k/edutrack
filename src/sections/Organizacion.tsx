import { CalendarDays, Landmark, Mail, MapPin, Phone, ShieldAlert, UsersRound } from 'lucide-react'
import { imagen } from '../data/images'
import { avisoAcademicoITEU, consejoDirectivo, organizacion } from '../data/organization'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ITEUMark } from '../components/logos/EduTrackLogo'

const datosOrganizacion = [
  { icono: Landmark, etiqueta: 'Figura', valor: 'Asociación Civil sin fines de lucro' },
  { icono: CalendarDays, etiqueta: 'Constitución simulada', valor: organizacion.constitucion },
  { icono: CalendarDays, etiqueta: 'Vigencia', valor: organizacion.vigencia },
  { icono: MapPin, etiqueta: 'Domicilio simulado', valor: 'Chilpancingo de los Bravo, Guerrero' },
  { icono: Phone, etiqueta: 'Teléfono simulado', valor: organizacion.telefono },
  { icono: Mail, etiqueta: 'Correo simulado', valor: organizacion.correo },
]

export function Organizacion() {
  return (
    <section id="iteu" className="seccion bg-white">
      <div className="contenedor">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <SectionHeading
            etiqueta="11 · Organización"
            titulo="Una organización comprometida con la innovación educativa"
            subtitulo={`${organizacion.nombre} (${organizacion.siglas}) es la figura académica que presenta esta propuesta de inversión en infraestructura educativa y desarrollo tecnológico.`}
          />
          <Reveal delay={80}>
            <div className="rounded-2xl border border-institucional/15 bg-niebla/70 p-6">
              <ITEUMark />
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{organizacion.proposito}</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-tarjeta">
              <div className="relative h-44 overflow-hidden sm:h-52">
                <img
                  src={imagen('campus-universitario.jpg')}
                  alt="Edificio universitario como representación del entorno de educación superior"
                  className="h-full w-full object-cover"
                  width="1400"
                  height="933"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/75 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-5 left-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cian">Datos generales</p>
                  <p className="mt-1 font-display text-lg font-bold text-white">
                    {organizacion.nombre}
                  </p>
                </div>
              </div>
              <dl className="grid gap-px bg-slate-100 sm:grid-cols-2">
                {datosOrganizacion.map((dato) => (
                  <div key={dato.etiqueta} className="bg-white p-5">
                    <dt className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      <dato.icono className="h-3.5 w-3.5" aria-hidden="true" />
                      {dato.etiqueta}
                    </dt>
                    <dd className="mt-2 text-xs font-semibold leading-relaxed text-navy">{dato.valor}</dd>
                  </div>
                ))}
              </dl>
              <div className="border-t border-slate-100 bg-navy p-5 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-cian">
                  Patrimonio inicial simulado
                </p>
                <p className="mt-2 font-display text-2xl font-extrabold">{organizacion.patrimonio}</p>
                <p className="mt-1 text-[11px] text-white/50">
                  Información del documento académico; no acredita recursos disponibles para el proyecto.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={90}>
              <div>
                <div className="flex items-center gap-2.5">
                  <UsersRound className="h-5 w-5 text-institucional" aria-hidden="true" />
                  <h3 className="font-display text-lg font-bold">Consejo Directivo</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Integrantes señalados en el acta constitutiva simulada.
                </p>
              </div>
            </Reveal>

            {consejoDirectivo.map((persona, indice) => (
              <Reveal key={persona.nombre} delay={120 + indice * 70}>
                <article className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-tecnologico/30 hover:shadow-md">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-navy to-institucional font-display text-xs font-bold text-cian">
                    {persona.cargo.slice(0, 2).toUpperCase()}
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-tecnologico">
                      {persona.cargo}
                    </p>
                    <p className="mt-1 font-display text-sm font-bold leading-snug text-navy">{persona.nombre}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{persona.responsabilidad}</p>
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal delay={340}>
              <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50/70 p-5">
                <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-amber-900">{avisoAcademicoITEU}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
