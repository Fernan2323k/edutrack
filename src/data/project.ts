import {
  BarChart3,
  BookOpen,
  Building2,
  ClipboardCheck,
  GraduationCap,
  KeyRound,
  Laptop,
  Lightbulb,
  MonitorOff,
  Presentation,
  ShieldCheck,
  TrendingUp,
  Users,
  Wifi,
  type LucideIcon,
} from 'lucide-react'

export interface IconItem {
  icon: LucideIcon
  title: string
  description: string
}

/** Situaciones descritas en el planteamiento del proyecto. Sin datos estadísticos. */
export const problematicas: IconItem[] = [
  {
    icon: MonitorOff,
    title: 'Acceso a equipos de cómputo',
    description:
      'Algunos estudiantes tienen dificultades para acceder a equipos de cómputo durante sus actividades académicas.',
  },
  {
    icon: BookOpen,
    title: 'Recursos digitales limitados',
    description:
      'El acceso a recursos digitales para apoyar el aprendizaje puede ser limitado dentro de la institución.',
  },
  {
    icon: Lightbulb,
    title: 'Reforzamiento de conocimientos',
    description:
      'Se requieren herramientas que permitan reforzar los temas vistos en clase y apoyar el estudio independiente.',
  },
  {
    icon: TrendingUp,
    title: 'Seguimiento del rendimiento',
    description:
      'Los docentes necesitan herramientas que faciliten el seguimiento del rendimiento académico de sus grupos.',
  },
  {
    icon: Presentation,
    title: 'Apoyo al trabajo docente',
    description:
      'Es necesario identificar oportunamente a los alumnos que requieren apoyo académico adicional.',
  },
]

export interface ComponenteItem extends IconItem {
  beneficio: string
}

/** Cinco componentes oficiales del planteamiento documentado. */
export const componentes: ComponenteItem[] = [
  {
    icon: Laptop,
    title: 'Aula digital',
    description:
      'Espacio equipado con computadoras, mobiliario y conexión a internet para realizar actividades académicas.',
    beneficio: 'Acceso a equipamiento tecnológico para el estudio.',
  },
  {
    icon: GraduationCap,
    title: 'Plataforma EduTrack',
    description:
      'Sitio web para consultar calificaciones, revisar tareas, visualizar avances y acceder a materiales de estudio.',
    beneficio: 'Información académica disponible para estudiantes.',
  },
  {
    icon: ClipboardCheck,
    title: 'Herramientas para docentes',
    description:
      'Funciones para registrar calificaciones, revisar el progreso de los alumnos y generar reportes académicos.',
    beneficio: 'Seguimiento más ordenado del trabajo de los grupos.',
  },
  {
    icon: Users,
    title: 'Capacitación',
    description:
      'Sesiones para enseñar a alumnos y docentes a utilizar las herramientas disponibles.',
    beneficio: 'Uso efectivo de los recursos tecnológicos.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad de la información',
    description:
      'Cuentas individuales, permisos de acceso y medidas para proteger los datos personales y académicos.',
    beneficio: 'Cuidado de la información de la comunidad académica.',
  },
]

export interface BeneficiarioItem extends IconItem {
  detalles: string[]
}

export const beneficiarios: BeneficiarioItem[] = [
  {
    icon: GraduationCap,
    title: 'Estudiantes',
    description:
      'Acceso a equipos y herramientas para estudiar, consultar su información académica y reforzar conocimientos.',
    detalles: [
      'Computadoras y recursos digitales',
      'Consulta de calificaciones y tareas',
      'Materiales y ejercicios de reforzamiento',
    ],
  },
  {
    icon: Presentation,
    title: 'Docentes',
    description:
      'Uso de la plataforma para organizar actividades y dar seguimiento al rendimiento de sus grupos.',
    detalles: [
      'Registro de calificaciones',
      'Revisión de avances por estudiante',
      'Detección de necesidades de apoyo',
    ],
  },
  {
    icon: Building2,
    title: 'Instituciones educativas',
    description:
      'Fortalecimiento de los recursos tecnológicos que apoyan las actividades educativas de la institución.',
    detalles: [
      'Espacios académicos equipados',
      'Apoyo a actividades de enseñanza',
      'Herramientas digitales institucionales',
    ],
  },
]

export interface ArgumentoFAM {
  numero: string
  titulo: string
  texto: string
  icon: LucideIcon
}

export const argumentosFAM: ArgumentoFAM[] = [
  {
    numero: '01',
    titulo: 'Fortalecimiento de la infraestructura educativa',
    texto:
      'La propuesta busca habilitar un espacio destinado a actividades académicas y aprendizaje mediante recursos tecnológicos.',
    icon: Building2,
  },
  {
    numero: '02',
    titulo: 'Equipamiento tecnológico',
    texto:
      'La adquisición de computadoras y mobiliario permitiría proporcionar herramientas de acceso a recursos educativos digitales.',
    icon: Laptop,
  },
  {
    numero: '03',
    titulo: 'Mejora de los procesos de enseñanza-aprendizaje',
    texto:
      'El aula digital facilitaría el uso de herramientas tecnológicas en las actividades académicas.',
    icon: Lightbulb,
  },
  {
    numero: '04',
    titulo: 'Complemento tecnológico',
    texto:
      'EduTrack proporcionaría herramientas digitales para apoyar el seguimiento académico de estudiantes y docentes.',
    icon: BarChart3,
  },
]

export interface FilaMatriz {
  necesidad: string
  solucion: string
}

export const matrizFAM: FilaMatriz[] = [
  { necesidad: 'Acceso limitado a equipos', solucion: 'Aula digital' },
  { necesidad: 'Falta de herramientas tecnológicas', solucion: 'Equipamiento' },
  { necesidad: 'Dificultad para consultar avances', solucion: 'EduTrack' },
  { necesidad: 'Seguimiento académico', solucion: 'Herramientas docentes' },
  { necesidad: 'Necesidad de capacitación', solucion: 'Programa de capacitación' },
]

export interface UsoRecurso {
  concepto: string
  justificacion: string
  beneficio: string
  estado: string
}

/** No se asignan montos: no existe un presupuesto aprobado. */
export const usosRecursos: UsoRecurso[] = [
  {
    concepto: 'Equipamiento de cómputo',
    justificacion: 'Permite realizar actividades académicas con herramientas digitales.',
    beneficio: 'Mayor acceso a recursos tecnológicos.',
    estado: 'Propuesta pendiente de validación',
  },
  {
    concepto: 'Mobiliario académico',
    justificacion: 'Habilita el espacio para el trabajo individual y colaborativo.',
    beneficio: 'Condiciones adecuadas para el aprendizaje.',
    estado: 'Propuesta pendiente de validación',
  },
  {
    concepto: 'Adecuación del espacio',
    justificacion: 'Adapta el aula para el uso de equipos y conectividad.',
    beneficio: 'Espacio funcional para actividades académicas.',
    estado: 'Propuesta pendiente de validación',
  },
  {
    concepto: 'Infraestructura y conectividad',
    justificacion: 'Necesaria para el funcionamiento del equipamiento y de la plataforma.',
    beneficio: 'Acceso a recursos digitales en el aula.',
    estado: 'Sujeto a elegibilidad',
  },
  {
    concepto: 'Capacitación',
    justificacion: 'Apoya el uso adecuado de las herramientas por estudiantes y docentes.',
    beneficio: 'Aprovechamiento de los recursos disponibles.',
    estado: 'Cuando corresponda a conceptos autorizados',
  },
]

export const tiposViabilidad: IconItem[] = [
  {
    icon: Wifi,
    title: 'Viabilidad técnica',
    description:
      'El proyecto puede implementarse mediante computadoras, conexión a internet y tecnologías de desarrollo web.',
  },
  {
    icon: Users,
    title: 'Viabilidad operativa',
    description:
      'Se propone comenzar con una prueba piloto en una universidad pública, con un número limitado de equipos, estudiantes y docentes.',
  },
  {
    icon: KeyRound,
    title: 'Viabilidad financiera',
    description:
      'Depende de la disponibilidad de recursos, la aprobación institucional y la elegibilidad de los gastos.',
  },
  {
    icon: GraduationCap,
    title: 'Viabilidad académica',
    description:
      'Busca apoyar las actividades de estudiantes y docentes mediante herramientas tecnológicas.',
  },
]

export const resultadosEsperados: string[] = [
  'Mejor acceso a recursos tecnológicos.',
  'Consulta más sencilla de calificaciones y tareas.',
  'Promoción de hábitos de estudio.',
  'Mejor seguimiento académico por parte de los docentes.',
  'Identificación de dificultades de aprendizaje.',
  'Mayor aprovechamiento de herramientas digitales.',
]

export const indicadoresPropuestos: string[] = [
  'Número de estudiantes beneficiados.',
  'Frecuencia de uso del aula.',
  'Número de actividades realizadas en EduTrack.',
  'Uso de la plataforma por docentes.',
  'Evolución del rendimiento académico.',
]

/** Objetivos específicos del documento (se usan en la sección de propuesta). */
export const objetivosEspecificos: string[] = [
  'Proporcionar acceso a computadoras y recursos digitales para actividades académicas.',
  'Facilitar la consulta de calificaciones, tareas y avances escolares.',
  'Ofrecer ejercicios y guías de estudio para reforzar los temas de mayor dificultad.',
  'Ayudar a los docentes a identificar necesidades de apoyo académico.',
  'Promover el uso de herramientas tecnológicas en los procesos educativos.',
]
