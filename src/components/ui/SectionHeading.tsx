import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  etiqueta: string
  titulo: string
  subtitulo?: string
  invertido?: boolean
  centrado?: boolean
 children?: ReactNode
}

export function SectionHeading({
  etiqueta,
  titulo,
  subtitulo,
  invertido = false,
  centrado = false,
  children,
}: SectionHeadingProps) {
  return (
    <Reveal className={centrado ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <span
        className={`etiqueta ${
          invertido
            ? 'border-cian/30 bg-cian/10 text-cian'
            : 'border-tecnologico/15 bg-tecnologico/5 text-institucional'
        }`}
      >
        {etiqueta}
      </span>
      <h2 className={`titulo-seccion ${invertido ? '!text-white' : ''}`}>{titulo}</h2>
      {subtitulo && (
        <p className={`subtitulo-seccion ${centrado ? 'mx-auto' : ''} ${invertido ? '!text-slate-300' : ''}`}>
          {subtitulo}
        </p>
      )}
      {children}
    </Reveal>
  )
}
