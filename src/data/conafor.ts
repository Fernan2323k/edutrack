/** Datos de la convocatoria CONAFOR 2026 usados como ejercicio ficticio. */

export const DOF_CONAFOR_URL =
  'https://www.dof.gob.mx/nota_detalle.php?codigo=5778365&fecha=16/01/2026'

export const CONAFOR_URLS = {
  convocatoriaNacional: 'https://www.conafor.gob.mx/apoyos/index.php/inicio/download/26337',
  convocatoriaCapacidades: 'https://www.conafor.gob.mx/apoyos/index.php/inicio/download/26722',
  reglasOperacion: 'https://www.conafor.gob.mx/apoyos/index.php/inicio/download/26335',
  interpretacion: 'https://www.conafor.gob.mx/apoyos/index.php/inicio/download/26604',
  plataforma: 'https://rop.cnf.gob.mx/index.php/sesion',
} as const

export const conafor = {
  programa: 'Programa Desarrollo Forestal Sustentable para el Bienestar',
  convocatoria: 'Convocatoria Nacional 2026 y Convocatoria específica Componente VI (DOF 20/07/2026)',
  modalidad: 'FCDL.4.1 · Innovación, Desarrollo y Transferencia de Tecnología Inclusiva',
  montoSolicitado: '$400,000.00 M.N.',
  topeModalidad: 'Hasta $400,000.00 por apoyo',
  plazoEjecucion: 'De 6 a 12 meses contados a partir del primer pago',
  ministraciones: '90% ($360,000.00) posterior a la formalización · 10% ($40,000.00) al concluir con informe final',
  solicitante:
    'Grupo o empresa forestal integrada por mujeres y/o jóvenes (figura ficticia creada para el ejercicio).',
  rolITEU:
    'Persona proveedora o generadora de innovación: institución académica que diseña, desarrolla e implementa la solución tecnológica. No es la persona solicitante ni la beneficiaria directa.',
  aviso:
    'Ejercicio ficticio de ubicación normativa. La convocatoria real fue publicada en el DOF y su plazo ya cerró. No existe asignación, aprobación ni desembolso de recursos a I.T.E.U. ni a EduTrack. Los montos del desglose son propuestos para la práctica académica.',
} as const

export interface ReferenciaArticulo {
  referencia: string
  titulo: string
  texto: string
  fuente: string
  url: string
}

/** Citas tomadas de las Reglas de Operación 2026 publicadas en el DOF el 16/01/2026. */
export const articulosCONAFOR: ReferenciaArticulo[] = [
  {
    referencia: 'Artículo 3, fracción IX',
    titulo: 'Qué es una convocatoria',
    texto:
      '“Convocatoria: Documento que da a conocer los periodos y disposiciones para participar en el proceso de asignación de Apoyos.”',
    fuente: 'Reglas de Operación 2026 · DOF 16/01/2026',
    url: DOF_CONAFOR_URL,
  },
  {
    referencia: 'Artículo 16',
    titulo: 'Publicación oficial',
    texto:
      '“Todas las Convocatorias serán publicadas en el Diario Oficial de la Federación y en la Página de internet de la CONAFOR.”',
    fuente: 'Reglas de Operación 2026 · DOF 16/01/2026',
    url: DOF_CONAFOR_URL,
  },
  {
    referencia: 'Artículo 6',
    titulo: 'Recursos del programa',
    texto:
      '“El Programa cuenta con un presupuesto autorizado en el Presupuesto de Egresos de la Federación para el ejercicio fiscal 2026 de un monto de 976.18 millones de pesos (mdp).” Es el total del programa, no un monto por proyecto.',
    fuente: 'Reglas de Operación 2026 · DOF 16/01/2026',
    url: DOF_CONAFOR_URL,
  },
  {
    referencia: 'Artículo 2, Componente VI',
    titulo: 'Componente donde entra el proyecto',
    texto:
      '“Componente VI. Fortalecimiento de Capacidades y Desarrollo Local (FCDL). Objetivo: Apoyar proyectos que fortalecen el desarrollo de capacidades, la investigación y la transferencia de tecnología.”',
    fuente: 'Reglas de Operación 2026 · DOF 16/01/2026',
    url: DOF_CONAFOR_URL,
  },
  {
    referencia: 'Artículo 17, fracciones I, II y III.B',
    titulo: 'Requisitos generales',
    texto:
      'Solicitud contenida en el Anexo 3, requisitos adicionales del Anexo Técnico correspondiente y, tratándose de personas morales, documento que acredite su constitución y RFC vigente.',
    fuente: 'Reglas de Operación 2026 · DOF 16/01/2026',
    url: DOF_CONAFOR_URL,
  },
  {
    referencia: 'Artículo 18',
    titulo: 'Presentación de la solicitud',
    texto:
      'La solicitud puede registrarse en línea en la plataforma de CONAFOR o de forma presencial en las oficinas estatales, dentro de los plazos que indique la convocatoria. La documentación faltante se notifica y desahoga en los plazos señalados.',
    fuente: 'Reglas de Operación 2026 · DOF 16/01/2026',
    url: DOF_CONAFOR_URL,
  },
  {
    referencia: 'Anexo Técnico FCDL.4.1',
    titulo: 'Monto, plazo y pagos',
    texto:
      'Apoyo para el desarrollo e implementación de soluciones tecnológicas aplicadas al manejo forestal sostenible. Monto máximo: $400,000.00. Plazo de ejecución: de 6 a 12 meses. Primera ministración del 90% y segunda del 10% al concluir.',
    fuente: 'Reglas de Operación 2026 · Anexo Técnico del Componente VI',
    url: CONAFOR_URLS.reglasOperacion,
  },
  {
    referencia: 'Artículo 3, terminología',
    titulo: 'Por qué I.T.E.U. puede entrar como proveedora',
    texto:
      '“Persona proveedora o generadora de innovación: Persona física, empresa, institución académica o centro de investigación (público o privado) que diseña, desarrolla e implementa soluciones tecnológicas innovadoras aplicables directamente al contexto forestal comunitario…”',
    fuente: 'Reglas de Operación 2026 · DOF 16/01/2026',
    url: DOF_CONAFOR_URL,
  },
]

export const requisitosCONAFOR = [
  {
    titulo: 'Propuesta técnica y económica',
    texto: 'Elaborada en el formato único del concepto FCDL.4.1, con desglose de conceptos y costos.',
    fundamento: 'Anexo Técnico FCDL.4.1 · Artículo 17-II',
  },
  {
    titulo: 'Dos cotizaciones comparables',
    texto: 'Con datos de contacto y domicilio de la persona proveedora, descripción, desglose y costo de cada concepto, firmadas por quien provee el servicio.',
    fundamento: 'Anexo Técnico FCDL.4.1',
  },
  {
    titulo: 'Carta compromiso de capacitación',
    texto: 'La persona proveedora seleccionada se obliga a impartir la capacitación necesaria en el uso de la solución tecnológica y a acreditar experiencia técnica.',
    fundamento: 'Anexo Técnico FCDL.4.1',
  },
  {
    titulo: 'Documentación forestal vigente',
    texto: 'Autorización de aprovechamiento forestal, aviso de plantaciones forestales comerciales o el documento que corresponda al objetivo del apoyo.',
    fundamento: 'Anexo Técnico FCDL.4.1',
  },
  {
    titulo: 'Solicitud y personalidad',
    texto: 'Solicitud del Anexo 3 firmada y, por ser persona moral, acta constitutiva y RFC vigente del solicitante.',
    fundamento: 'Artículo 17-I y 17-III.B',
  },
  {
    titulo: 'Registro y plazos',
    texto: 'Registro en línea en la plataforma de CONAFOR o registro presencial, dentro de los plazos publicados en la convocatoria.',
    fundamento: 'Artículo 18 · Convocatoria Nacional 2026',
  },
  {
    titulo: 'Convenio de concertación',
    texto: 'Las personas con asignación de apoyo deben suscribir el convenio con CONAFOR para formalizar la entrega de recursos.',
    fundamento: 'Apartado 6 de la Convocatoria · Artículo 23',
  },
  {
    titulo: 'Comprobación y supervisión',
    texto: 'CFDI, memoria fotográfica y registro de inventario cuando aplique; informe parcial, informe final y al menos dos visitas de supervisión.',
    fundamento: 'Anexo Técnico FCDL.4.1',
  },
]

export interface CostoItem {
  rubro: string
  monto: string
  porcentaje: string
  detalle: string
}

/** Clasificación solicitada en el ejercicio académico, no la terminología oficial de CONAFOR. */
export const costosCONAFOR: CostoItem[] = [
  {
    rubro: 'Costos directos',
    monto: '$260,000.00',
    porcentaje: '65%',
    detalle:
      'Desarrollo y adaptación del módulo EduTrack-Forestal ($150,000), paquete tecnológico y equipamiento mínimo del piloto ($70,000), capacitación al grupo forestal ($28,000) e implantación con acompañamiento en campo ($12,000).',
  },
  {
    rubro: 'Costos indirectos',
    monto: '$40,000.00',
    porcentaje: '10%',
    detalle:
      'Coordinación técnica y administración ($16,000), supervisión e informes parcial y final ($12,000), gestión documental, CFDI, inventario y convocatoria ($5,000) y asistencia técnica externa ($7,000, tope de la modalidad).',
  },
  {
    rubro: 'Activos fijos de la empresa o sociedad',
    monto: '$0.00',
    porcentaje: '0%',
    detalle:
      'No se solicitan recursos para activos fijos. Como dato institucional del acta simulada se reporta un patrimonio inicial de $75,000.00 M.N. El equipamiento que se adquiera se facturará a nombre de la persona beneficiaria y no podrá enajenarse ni venderse.',
  },
  {
    rubro: 'Pasivos fijos de la empresa o sociedad',
    monto: '$0.00',
    porcentaje: '0%',
    detalle: 'No se reportan adeudos en la documentación simulada de I.T.E.U.',
  },
  {
    rubro: 'Gastos de operación',
    monto: '$100,000.00',
    porcentaje: '25%',
    detalle:
      'Honorarios del equipo técnico de I.T.E.U. ($50,000), hospedaje, dominio y mantenimiento de la plataforma ($24,000), materiales y consumibles de campo y capacitación ($16,000) y evaluación final con indicadores ($10,000).',
  },
]

export const planAccionCONAFOR = [
  {
    etapa: '1. Formalización y diseño',
    meses: 'Meses 1–2',
    responsables: 'I.T.E.U. y grupo forestal solicitante',
    entregables: 'Convenio, propuesta técnica y económica, dos cotizaciones, carta compromiso y acta constitutiva.',
    monto: '$40,000.00',
    porcentaje: '10%',
  },
  {
    etapa: '2. Desarrollo de la solución',
    meses: 'Meses 3–6',
    responsables: 'Equipo técnico de I.T.E.U.',
    entregables: 'Módulo EduTrack-Forestal en ambiente de prueba, manual de uso y registro de inventario.',
    monto: '$160,000.00',
    porcentaje: '40%',
  },
  {
    etapa: '3. Implantación y capacitación',
    meses: 'Meses 7–10',
    responsables: 'I.T.E.U., persona beneficiaria y comunidad participante',
    entregables: 'Sesiones de capacitación, listas de asistencia, bitácora, memoria fotográfica y CFDI de adquisiciones.',
    monto: '$120,000.00',
    porcentaje: '30%',
  },
  {
    etapa: '4. Supervisión y cierre',
    meses: 'Meses 11–12',
    responsables: 'Tesorero de I.T.E.U. y representante del grupo forestal',
    entregables: 'Informe parcial, informe final, indicadores validados y acta de finiquito.',
    monto: '$80,000.00',
    porcentaje: '20%',
  },
]

export const correspondenciaCONAFOR = [
  {
    original: 'Aula digital',
    adaptacion: 'Aula de monitoreo forestal, sin obra pública ni privada',
    elegible: 'Solución tecnológica para el seguimiento y gestión de recursos forestales',
  },
  {
    original: 'Plataforma EduTrack',
    adaptacion: 'Módulo EduTrack-Forestal',
    elegible: 'Desarrollo e implementación de soluciones tecnológicas aplicadas al contexto forestal',
  },
  {
    original: 'Herramientas para docentes',
    adaptacion: 'Herramientas de reporte para la persona beneficiaria',
    elegible: 'Fortalecimiento de capacidades sociales, organizativas y de innovación forestal comunitaria',
  },
  {
    original: 'Capacitación',
    adaptacion: 'Formación en el uso de la solución tecnológica',
    elegible: 'Capacitación básica de corto plazo con enfoque de género, juventud e inclusión',
  },
  {
    original: 'Seguridad de la información',
    adaptacion: 'Cuentas, permisos y trazabilidad de datos del monitoreo',
    elegible: 'Gestión, seguimiento y transparencia de la información del apoyo',
  },
]
