import { imagen } from '../../data/images'
import { Reveal } from './Reveal'

const imagenes = [
  { src: imagen('hero-laboratorio.jpg'), alt: 'Equipo trabajando con computadoras en un espacio colaborativo', titulo: 'Trabajo colaborativo' },
  { src: imagen('aula-clases.jpg'), alt: 'Aula preparada para actividades académicas', titulo: 'Espacios académicos' },
  { src: imagen('docente-tecnologia.jpg'), alt: 'Docente usando herramientas tecnológicas', titulo: 'Apoyo docente' },
  { src: imagen('espacio-academico.jpg'), alt: 'Espacio de estudio con recursos académicos', titulo: 'Recursos de estudio' },
]

/** Galería de imágenes representativas del entorno académico propuesto. */
export function Galeria() {
  return (
    <section aria-labelledby="titulo-galeria" className="border-y border-slate-200 bg-white py-16 sm:py-20">
      <div className="contenedor">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="etiqueta">Galería institucional</span>
              <h2 id="titulo-galeria" className="font-display text-2xl font-bold sm:text-3xl">
                Espacios y herramientas para el aprendizaje
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-slate-500">
              Imágenes representativas seleccionadas para ilustrar el entorno académico al que se dirige la
              propuesta.
            </p>
          </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {imagenes.map((imagen, indice) => (
            <Reveal key={imagen.src} delay={indice * 60}>
              <figure className="group relative overflow-hidden rounded-xl border border-slate-200 bg-niebla">
                <img
                  src={imagen.src}
                  alt={imagen.alt}
                  className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-48"
                  width="1400"
                  height="933"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent px-4 pb-3 pt-8 text-xs font-semibold text-white">
                  {imagen.titulo}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
