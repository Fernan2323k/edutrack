/** Enlaces y metadatos globales del sitio. */

export const DOF_URL =
  'https://www.dof.gob.mx/nota_detalle.php?codigo=5779180&fecha=29/01/2026'

export const PROJECT_NAME = 'Aula Digital Universitaria con plataforma EduTrack'

export interface NavItem {
  id: string
  label: string
}

/** Secciones disponibles en la navegación general del sitio. */
export const navigation: NavItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'problematica', label: 'Problemática' },
  { id: 'propuesta', label: 'Nuestra propuesta' },
  { id: 'edutrack', label: 'Plataforma EduTrack' },
  { id: 'componentes', label: 'Cinco componentes' },
  { id: 'beneficiarios', label: 'Beneficiarios' },
  { id: 'financiamiento', label: 'Financiamiento FAM' },
  { id: 'dof', label: 'Fundamento normativo' },
  { id: 'recursos', label: 'Aplicación de recursos' },
  { id: 'conafor', label: 'Convocatoria CONAFOR' },
  { id: 'viabilidad', label: 'Viabilidad' },
  { id: 'impacto', label: 'Resultados e impacto' },
  { id: 'iteu', label: 'I.T.E.U.' },
  { id: 'cierre', label: 'Cierre' },
]

/** Accesos directos que aparecen en la barra superior de escritorio. */
export const primaryNavigation: NavItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'propuesta', label: 'Propuesta' },
  { id: 'edutrack', label: 'EduTrack' },
  { id: 'financiamiento', label: 'Financiamiento FAM' },
  { id: 'dof', label: 'DOF' },
  { id: 'iteu', label: 'I.T.E.U.' },
]
