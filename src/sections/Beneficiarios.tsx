import { Info } from 'lucide-react'
import { imagen } from '../data/images'
import { beneficiarios } from '../data/project'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const imagenes = [
  imagen('estudiantes-trabajando.jpg'),
  imagen('docente-tecnologia.jpg'),
  imagen('espacio-academico.jpg'),
]

const altTextos = [
  'Estudiantes trabajando de forma colaborativa con computadoras',
  'Docente utilizando tecnología durante una actividad académica',
  'Espacio académico de estudio como representación del aula digital',
]

export function Beneficiarios() {
  return (
    <section id="beneficiarios" className="seccion bg-white">
      <div className="contenedor">
        <SectionHeading
          etiqueta="05 · Alcance"
          titulo="¿A quién beneficia este proyecto?"
          subtitulo="Los beneficiarios directos son los estudiantes y docentes de la universidad pública donde se implemente el proyecto. La institución también puede beneficiarse de los recursos tecnológicos."
          centrado
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {beneficiarios.map((beneficiario, indice) => (
            <Reveal key={beneficiario.title} delay={indice * 90}>
              <article className="tarjeta group h-full overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={imagenes[indice]}
                    alt={altTextos[indice]}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width="1400"
                    height="933"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/5 to-transparent" aria-hidden="true" />
                  <span className="absolute bottom-4 left-5 grid h-11 w-11 place-items-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-md">
                    <beneficiario.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{beneficiario.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{beneficiario.description}</p>
                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                    {beneficiario.detalles.map((detalle) => (
                      <li key={detalle} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cian" aria-hidden="true" />
                        {detalle}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280}>
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-slate-200 bg-niebla/60 p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-institucional" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-slate-600">
              El documento no establece cantidades de estudiantes ni docentes beneficiados. Por ello, este sitio
              no presenta cifras de cobertura: la magnitud de la población atendida queda{' '}
              <strong className="font-semibold text-navy">por definir</strong> en la etapa de prueba piloto.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
