import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { VolverArriba } from './components/layout/VolverArriba'
import { Galeria } from './components/ui/Galeria'
import { AplicacionRecursos } from './sections/AplicacionRecursos'
import { Beneficiarios } from './sections/Beneficiarios'
import { Cierre } from './sections/Cierre'
import { Componentes } from './sections/Componentes'
import { ConvocatoriaCONAFOR } from './sections/ConvocatoriaCONAFOR'
import { EduTrackDemo } from './sections/EduTrackDemo'
import { FinanciamientoFAM } from './sections/FinanciamientoFAM'
import { FundamentoDOF } from './sections/FundamentoDOF'
import { Hero } from './sections/Hero'
import { Impacto } from './sections/Impacto'
import { Organizacion } from './sections/Organizacion'
import { Problematica } from './sections/Problematica'
import { Propuesta } from './sections/Propuesta'
import { Viabilidad } from './sections/Viabilidad'

export default function App() {
  return (
    <>
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy"
      >
        Saltar al contenido principal
      </a>
      <ScrollProgress />
      <Header />

      <main id="contenido-principal">
        <Hero />
        <Problematica />
        <Propuesta />
        <EduTrackDemo />
        <Componentes />
        <Beneficiarios />
        <Galeria />
        <FinanciamientoFAM />
        <FundamentoDOF />
        <AplicacionRecursos />
        <ConvocatoriaCONAFOR />
        <Viabilidad />
        <Impacto />
        <Organizacion />
        <Cierre />
      </main>

      <Footer />
      <VolverArriba />
    </>
  )
}
