import { ArrowRight, Building2, FileText, GraduationCap, Layers3, MapPin } from 'lucide-react'
import { imagen } from '../data/images'
import { Reveal } from '../components/ui/Reveal'
import { ITEUMark } from '../components/logos/EduTrackLogo'

const datosRapidos = [
  {
    icon: MapPin,
    etiqueta: 'Sede piloto propuesta',
    valor: 'Chilpancingo, Guerrero',
  },
  {
    icon: GraduationCap,
    etiqueta: 'Población beneficiaria',
    valor: 'Estudiantes y docentes',
  },
  {
    icon: Layers3,
    etiqueta: 'Componentes del proyecto',
    valor: 'Infraestructura y plataforma',
  },
]

export function Hero() {
  return (
    <section id="inicio" className="superficie-oscura scroll-mt-0 pt-[72px]">
      <div className="chips-neblina absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="absolute -right-40 -top-40 h-[540px] w-[540px] rounded-full bg-tecnologico/25 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-56 left-1/4 h-[460px] w-[460px] rounded-full bg-cian/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="contenedor relative grid items-center gap-14 pb-16 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-24">
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-cian/30 bg-cian/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-cian">
                <span className="h-1.5 w-1.5 rounded-full bg-cian" />
                Proyecto de inversión pública
              </span>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                <ITEUMark inverse />
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 font-display text-[2.6rem] font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]">
              Aula Digital
              <span className="block text-degradado">Universitaria</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl font-display text-lg font-semibold leading-snug text-white/90 sm:text-xl">
              Transformando la educación superior mediante infraestructura tecnológica, innovación y
              herramientas digitales de aprendizaje.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              Una propuesta integral que busca fortalecer las condiciones de aprendizaje en instituciones
              públicas de educación superior mediante el acceso a equipamiento tecnológico y una plataforma
              digital de seguimiento académico.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#propuesta" className="boton-cian group">
                Conocer el proyecto
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a href="#financiamiento" className="boton-claro group">
                <FileText className="h-4 w-4" aria-hidden="true" />
                Consultar la justificación del financiamiento
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-8 flex items-start gap-2.5 text-xs leading-relaxed text-white/45">
              <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-cian/70" aria-hidden="true" />
              Proyecto de inversión en infraestructura educativa y desarrollo tecnológico.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-tecnologico/40 via-transparent to-cian/30 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 shadow-2xl shadow-black/40">
              <img
                src={imagen('hero-laboratorio.jpg')}
                alt="Equipo académico trabajando con computadoras portátiles en un espacio universitario"
                className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[500px]"
                width="1400"
                height="933"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cian">Imagen representativa</p>
                <p className="mt-2 font-display text-lg font-bold text-white">
                  Un espacio donde la tecnología apoya el aprendizaje
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-2 hidden w-56 rounded-xl border border-white/15 bg-navy-700/90 p-4 shadow-xl backdrop-blur-md sm:block lg:-left-8">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-cian/15 text-cian">
                  <Layers3 className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">Enfoque integral</p>
              </div>
              <p className="mt-3 text-sm font-semibold leading-snug text-white">
                Infraestructura física + herramientas digitales
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative border-t border-white/10 bg-white/[0.03]">
        <div className="contenedor grid gap-px overflow-hidden sm:grid-cols-3">
          {datosRapidos.map((dato, indice) => (
            <Reveal key={dato.etiqueta} delay={indice * 70} className="border-white/10 sm:border-r last:sm:border-r-0">
              <div className="flex items-start gap-3 px-1 py-6">
                <dato.icon className="mt-0.5 h-5 w-5 shrink-0 text-cian" aria-hidden="true" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">{dato.etiqueta}</p>
                  <p className="mt-1.5 text-sm font-semibold text-white/90">{dato.valor}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
