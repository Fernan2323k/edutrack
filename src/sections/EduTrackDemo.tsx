import { useState } from 'react'
import {
  BarChart3,
  Bell,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock3,
  Download,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PlayCircle,
  Search,
  TrendingUp,
  Users,
} from 'lucide-react'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { EduTrackMark } from '../components/logos/EduTrackLogo'

type Vista = 'estudiante' | 'docente'

const calificacionesDemo = [
  { materia: 'Fundamentos de administración', promedio: '8.6', color: 'bg-tecnologico' },
  { materia: 'Contabilidad básica', promedio: '9.1', color: 'bg-cian' },
  { materia: 'Introducción a la ingeniería', promedio: '8.2', color: 'bg-indigo-400' },
]

const tareasDemo = [
  { nombre: 'Ejercicio de balance general', materia: 'Contabilidad básica', estado: 'Pendiente', tono: 'bg-amber-100 text-amber-700' },
  { nombre: 'Cuestionario de organización', materia: 'Fundamentos de administración', estado: 'En revisión', tono: 'bg-sky-100 text-sky-700' },
  { nombre: 'Reporte de lectura', materia: 'Introducción a la ingeniería', estado: 'Entregada', tono: 'bg-emerald-100 text-emerald-700' },
]

const gruposDemo = [
  { nombre: 'Grupo A · Demostración', materia: 'Fundamentos de administración', alumnos: 'Grupo de prueba' },
  { nombre: 'Grupo B · Demostración', materia: 'Contabilidad básica', alumnos: 'Grupo de prueba' },
]

const registrosDemo = [
  { nombre: 'Estudiante demo 01',parcial: '8.5', avance: 'Seguimiento', estado: 'Al corriente' },
  { nombre: 'Estudiante demo 02', parcial: '7.4', avance: 'Atención', estado: 'Requiere apoyo' },
  { nombre: 'Estudiante demo 03', parcial: '9.0', avance: 'Seguimiento', estado: 'Al corriente' },
  { nombre: 'Estudiante demo 04', parcial: '6.8', avance: 'Atención', estado: 'Requiere apoyo' },
]

const barrasDemo = [
  { etiqueta: 'Unidad 1', valor: 78, color: 'bg-tecnologico' },
  { etiqueta: 'Unidad 2', valor: 64, color: 'bg-cian' },
  { etiqueta: 'Unidad 3', valor: 52, color: 'bg-indigo-400' },
]

function BarraTitulo({ icono: Icono, texto }: { icono: typeof BookOpen; texto: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icono className="h-4 w-4 text-tecnologico" aria-hidden="true" />
      <h4 className="font-display text-sm font-bold text-navy">{texto}</h4>
    </div>
  )
}

function VistaEstudiante() {
  return (
    <div className="grid min-h-[560px] lg:grid-cols-[190px_1fr]">
      <aside className="hidden border-r border-slate-100 bg-white/60 p-4 lg:block">
        <p className="px-2 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">Mi espacio</p>
        <nav className="mt-3 space-y-1" aria-label="Navegación de la demostración de estudiante">
          {[
            { icono: LayoutDashboard, texto: 'Panel', activo: true },
            { icono: ClipboardList, texto: 'Calificaciones' },
            { icono: FileText, texto: 'Tareas' },
            { icono: TrendingUp, texto: 'Avance' },
            { icono: BookOpen, texto: 'Materiales' },
            { icono: PlayCircle, texto: 'Ejercicios' },
          ].map((item) => (
            <span
              key={item.texto}
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[11px] font-semibold ${
                item.activo ? 'bg-tecnologico/10 text-tecnologico' : 'text-slate-500'
              }`}
            >
              <item.icono className="h-3.5 w-3.5" aria-hidden="true" />
              {item.texto}
            </span>
          ))}
        </nav>
        <div className="mt-8 rounded-xl bg-navy p-3.5 text-white">
          <GraduationCap className="h-5 w-5 text-cian" aria-hidden="true" />
          <p className="mt-2 text-[11px] font-bold leading-snug">Perfil: estudiante de demostración</p>
          <p className="mt-1 text-[9px] text-white/50">Sin información personal real</p>
        </div>
      </aside>

      <div className="space-y-5 p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-tecnologico">Panel de bienvenida</p>
            <h4 className="mt-1 font-display text-xl font-bold text-navy sm:text-2xl">
              Hola, estudiante de demostración
            </h4>
            <p className="mt-1 text-xs text-slate-500">Aquí puedes consultar tu actividad académica de ejemplo.</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-amber-200 bg-amber-50 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-amber-700">
            <Clock3 className="h-3 w-3" aria-hidden="true" /> Datos ficticios
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {calificacionesDemo.map((item) => (
            <div key={item.materia} className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className={`h-1 w-8 rounded-full ${item.color}`} />
              <p className="mt-3 text-[10px] font-semibold leading-snug text-slate-500">{item.materia}</p>
              <div className="mt-2 flex items-end justify-between">
                <span className="font-display text-2xl font-extrabold text-navy">{item.promedio}</span>
                <span className="text-[9px] font-semibold text-slate-400">Promedio demo</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-100 bg-white p-4">
            <BarraTitulo icono={ClipboardList} texto="Tareas pendientes" />
            <ul className="mt-3 space-y-2.5">
              {tareasDemo.map((tarea) => (
                <li key={tarea.nombre} className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2.5">
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-semibold text-navy">{tarea.nombre}</p>
                    <p className="mt-0.5 truncate text-[9px] text-slate-400">{tarea.materia}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-bold ${tarea.tono}`}>
                    {tarea.estado}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-100 bg-white p-4">
            <BarraTitulo icono={TrendingUp} texto="Avance académico ilustrativo" />
            <div className="mt-4 space-y-3">
              {barrasDemo.map((barra) => (
                <div key={barra.etiqueta}>
                  <div className="mb-1 flex justify-between text-[10px] font-semibold text-slate-500">
                    <span>{barra.etiqueta}</span>
                    <span>{barra.valor}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div className={`h-full rounded-full ${barra.color}`} style={{ width: `${barra.valor}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[9px] text-slate-400">Valores de ejemplo sin significado estadístico.</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-100 bg-white p-4">
            <BarraTitulo icono={BookOpen} texto="Materiales de estudio" />
            <ul className="mt-3 space-y-2 text-[11px] text-slate-600">
              <li className="flex items-center gap-2">
                <FileText className="h-3.5 w-3.5 text-cian" aria-hidden="true" /> Guía de estudio · Unidad 1
              </li>
              <li className="flex items-center gap-2">
                <FileText className="h-3.5 w-3.5 text-cian" aria-hidden="true" /> Presentación · Unidad 2
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-100 bg-white p-4">
            <BarraTitulo icono={PlayCircle} texto="Ejercicios de reforzamiento" />
            <p className="mt-3 text-[11px] leading-relaxed text-slate-600">
              Ejercicios de ejemplo para reforzar los temas de mayor dificultad.
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold text-tecnologico">
              Abrir ejercicio demo <ChevronRight className="h-3 w-3" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function VistaDocente() {
  return (
    <div className="grid min-h-[560px] lg:grid-cols-[190px_1fr]">
      <aside className="hidden border-r border-slate-100 bg-white/60 p-4 lg:block">
        <p className="px-2 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">Gestión docente</p>
        <nav className="mt-3 space-y-1" aria-label="Navegación de la demostración de docente">
          {[
            { icono: LayoutDashboard, texto: 'Panel de grupos', activo: true },
            { icono: ClipboardList, texto: 'Calificaciones' },
            { icono: Users, texto: 'Seguimiento' },
            { icono: CalendarDays, texto: 'Actividades' },
            { icono: BarChart3, texto: 'Reportes' },
          ].map((item) => (
            <span
              key={item.texto}
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[11px] font-semibold ${
                item.activo ? 'bg-tecnologico/10 text-tecnologico' : 'text-slate-500'
              }`}
            >
              <item.icono className="h-3.5 w-3.5" aria-hidden="true" />
              {item.texto}
            </span>
          ))}
        </nav>
        <div className="mt-8 rounded-xl bg-institucional p-3.5 text-white">
          <Users className="h-5 w-5 text-cian" aria-hidden="true" />
          <p className="mt-2 text-[11px] font-bold leading-snug">Perfil: docente de demostración</p>
          <p className="mt-1 text-[9px] text-white/55">Sin información personal real</p>
        </div>
      </aside>

      <div className="space-y-5 p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-tecnologico">Panel de grupos</p>
            <h4 className="mt-1 font-display text-xl font-bold text-navy sm:text-2xl">
              Espacio de trabajo docente
            </h4>
            <p className="mt-1 text-xs text-slate-500">Registro, seguimiento y reportes de ejemplo.</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-amber-200 bg-amber-50 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-amber-700">
            <Clock3 className="h-3 w-3" aria-hidden="true" /> Datos ficticios
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {gruposDemo.map((grupo) => (
            <div key={grupo.nombre} className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold text-navy">{grupo.nombre}</p>
                <span className="rounded-md bg-tecnologico/10 px-2 py-1 text-[9px] font-bold text-tecnologico">
                  Activo
                </span>
              </div>
              <p className="mt-2 text-[10px] text-slate-500">{grupo.materia}</p>
              <p className="mt-1 text-[9px] text-slate-400">{grupo.alumnos}</p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-100 bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
            <BarraTitulo icono={ClipboardList} texto="Registro de calificaciones" />
            <span className="text-[9px] font-semibold text-slate-400">Parcial demo</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] text-left text-[11px]">
              <thead className="bg-slate-50 text-[9px] uppercase tracking-[0.1em] text-slate-400">
                <tr>
                  <th className="px-4 py-2 font-bold">Estudiante</th>
                  <th className="px-4 py-2 font-bold">Calificación</th>
                  <th className="px-4 py-2 font-bold">Seguimiento</th>
                  <th className="px-4 py-2 font-bold">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {registrosDemo.map((registro) => (
                  <tr key={registro.nombre} className="text-slate-600">
                    <td className="px-4 py-2.5 font-semibold text-navy">{registro.nombre}</td>
                    <td className="px-4 py-2.5 font-bold text-tecnologico">{registro.parcial}</td>
                    <td className="px-4 py-2.5">{registro.avance}</td>
                    <td className="px-4 py-2.5">
                      <span
                        className={`rounded-full px-2 py-1 text-[9px] font-bold ${
                          registro.estado === 'Al corriente'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {registro.estado}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-100 bg-white p-4">
            <BarraTitulo icono={Users} texto="Seguimiento de estudiantes" />
            <div className="mt-3 space-y-2.5">
              <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2.5 text-[10px] font-semibold text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" /> 2 estudiantes demo al corriente
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-2.5 text-[10px] font-semibold text-amber-700">
                <Clock3 className="h-3.5 w-3.5" aria-hidden="true" /> 2 estudiantes demo requieren apoyo
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-100 bg-white p-4">
            <BarraTitulo icono={BarChart3} texto="Reporte de rendimiento" />
            <p className="mt-2 text-[10px] leading-relaxed text-slate-500">
              Visualización ilustrativa por unidad, con valores de ejemplo.
            </p>
            <div className="mt-3 flex h-16 items-end gap-3">
              {[62, 78, 55, 84].map((valor, indice) => (
                <div key={indice} className="flex flex-1 flex-col items-center gap-1.5">
                  <div
                    className={`w-full rounded-t-md ${indice % 2 === 0 ? 'bg-tecnologico/80' : 'bg-cian/80'}`}
                    style={{ height: `${valor}%` }}
                  />
                  <span className="text-[8px] text-slate-400">U{indice + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3">
          <BarraTitulo icono={CalendarDays} texto="Actividades académicas" />
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-tecnologico">
            <Download className="h-3.5 w-3.5" aria-hidden="true" /> Generar reporte demo
          </span>
        </div>
      </div>
    </div>
  )
}

export function EduTrackDemo() {
  const [vista, setVista] = useState<Vista>('estudiante')

  return (
    <section id="edutrack" className="seccion relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-niebla to-white" aria-hidden="true" />
      <div className="contenedor relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            etiqueta="03 · Plataforma"
            titulo="EduTrack: tecnología al servicio del aprendizaje"
            subtitulo="Una plataforma web diseñada para facilitar el seguimiento académico y fortalecer la comunicación entre estudiantes y docentes."
          />
          <Reveal delay={80}>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <EduTrackMark className="h-9 w-9" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Demostración</p>
                <p className="text-xs font-semibold text-navy">Sin base de datos real</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div
            className="inline-flex flex-wrap gap-1 rounded-xl border border-slate-200 bg-niebla p-1"
            role="tablist"
            aria-label="Seleccionar vista de la demostración"
          >
            {([
              { id: 'estudiante', etiqueta: 'Vista de estudiante', icono: GraduationCap },
              { id: 'docente', etiqueta: 'Vista de docente', icono: Users },
            ] as const).map((opcion) => (
              <button
                key={opcion.id}
                type="button"
                role="tab"
                aria-selected={vista === opcion.id}
                aria-controls={`panel-${opcion.id}`}
                onClick={() => setVista(opcion.id)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold transition-all ${
                  vista === opcion.id
                    ? 'bg-navy text-white shadow-md'
                    : 'text-slate-500 hover:bg-white hover:text-navy'
                }`}
              >
                <opcion.icono className="h-4 w-4" aria-hidden="true" />
                {opcion.etiqueta}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-suave">
            <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>
              <div className="flex flex-1 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-[10px] text-slate-400">
                <Search className="h-3 w-3" aria-hidden="true" />
                edutrack.demo / vista-{vista}
              </div>
              <Bell className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            </div>

            <div
              id="panel-estudiante"
              role="tabpanel"
              aria-label="Vista de estudiante"
              hidden={vista !== 'estudiante'}
              className="animate-aparecer bg-gradient-to-br from-niebla/60 via-white to-white"
            >
              <VistaEstudiante />
            </div>
            <div
              id="panel-docente"
              role="tabpanel"
              aria-label="Vista de docente"
              hidden={vista !== 'docente'}
              className="animate-aparecer bg-gradient-to-br from-niebla/60 via-white to-white"
            >
              <VistaDocente />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-6 flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50/70 p-4 sm:flex-row sm:items-start sm:gap-4">
            <Clock3 className="h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-amber-900">
              <strong className="font-bold">Representación conceptual.</strong> Las interfaces, nombres,
              calificaciones y porcentajes mostrados son ficticios y sirven únicamente para ilustrar las
              funciones propuestas. No existe una plataforma conectada a bases de datos en este sitio.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
