# Aula Digital Universitaria con plataforma EduTrack

Sitio web institucional de presentación del proyecto **Aula Digital Universitaria con plataforma EduTrack**, impulsado académicamente por **Innovación y Tecnología Educativa Universitaria (I.T.E.U.)**.

Es una **primera versión completa y funcional**: 14 secciones, navegación responsive, demostración interactiva de la plataforma, galería, infografías, documentación normativa del FAM/DOF y un anexo ficticio de la convocatoria CONAFOR 2026.

> Importante: todo el contenido institucional y la demostración son de carácter **académico y demostrativo**. No hay backend, autenticación ni bases de datos. No se afirma aprobación de financiamiento ni elegibilidad automática de gastos.

## Requisitos

- Node.js 18 o superior (se probó con Node.js 22.11.0).
- npm 10 o superior.

## Instalación y ejecución

```bash
npm install
npm run dev
```

El servidor de desarrollo queda disponible en `http://localhost:5173`.

### Otros comandos

```bash
npm run build     # comprobación de tipos + compilación de producción en dist/
npm run preview   # vista previa de la compilación de producción
npm run typecheck # solo comprobación de tipos
```

## Estructura del proyecto

```
.
├── index.html                 # Metadatos, SEO básico, fuentes y favicon
├── package.json               # Dependencias y scripts
├── vite.config.ts             # Configuración de Vite
├── tailwind.config.js         # Paleta institucional, tipografías y animaciones
├── postcss.config.js
├── docs/
│   └── PROYECTO EDUTRACK-1.pdf   # Documento académico de referencia
├── public/
│   ├── favicon.svg            # Marca conceptual
│   └── images/                # Fotografías locales optimizadas
└── src/
    ├── main.tsx               # Punto de entrada
    ├── App.tsx                # Composición de secciones
    ├── index.css              # Estilos base y componentes reutilizables
    ├── data/
    │   ├── site.ts            # Navegación y enlace oficial del DOF
    │   ├── project.ts         # Problemáticas, componentes, beneficiarios, FAM, etc.
    │   ├── organization.ts    # Datos de I.T.E.U. y Consejo Directivo
    │   ├── dof.ts             # Hechos verificados del aviso del DOF
    │   └── conafor.ts         # Convocatoria CONAFOR 2026 y ejercicio ficticio
    ├── components/
    │   ├── layout/            # Header, Footer, ScrollProgress, VolverArriba
    │   ├── logos/             # Logotipos conceptuales (SVG/React)
    │   └── ui/                # Reveal, SectionHeading, Galería
    └── sections/              # Las 14 secciones del sitio
```

## Fuentes de contenido

1. **`docs/PROYECTO EDUTRACK-1.pdf`**: fuente principal. Se respetaron nombres, objetivos, componentes, destinatarios, datos de I.T.E.U. y precisiones sobre el financiamiento.
2. **Diario Oficial de la Federación**, 29 de enero de 2026: [publicación oficial](https://www.dof.gob.mx/nota_detalle.php?codigo=5779180&fecha=29/01/2026). Se consultó directamente para identificar el instrumento, el componente de Infraestructura Educativa Superior y los criterios de distribución. Los datos se muestran como información del aviso, nunca como cifras del proyecto.

Los lugares sin información documentada se marcan como **"Por definir"**, **"Propuesta pendiente de validación"** o **"Sujeto a elegibilidad"**. No se inventaron montos, porcentajes de financiamiento, beneficiarios ni convenios.

## Funcionalidades implementadas

- Barra superior fija con menú responsive y panel de índice completo.
- Indicador de progreso de desplazamiento y botón flotante de regreso al inicio.
- Animaciones de entrada con `IntersectionObserver`, desactivadas con `prefers-reduced-motion`.
- Selector de vistas **estudiante / docente** con pestañas accesibles.
- Infografía del funcionamiento conjunto del aula y EduTrack.
- Matriz necesidades ↔ soluciones y tarjetas de aplicación de recursos.
- Galería de imágenes locales y enlace externo al DOF en pestaña nueva.
- Etiquetas semánticas, `alt` descriptivos, foco visible, enlace de salto y diseño móvil.

## Verificación realizada

- `npm run build`: correcto (TypeScript + Vite).
- Servidor de desarrollo y recursos estáticos: HTTP 200.
- Renderizado del árbol completo de React: sin errores; las 13 secciones y la galería presentes.
- Anclas internas de navegación: todas corresponden a secciones existentes.
- Enlace del DOF: verificado contra la publicación oficial.

## Despliegue en GitHub Pages

El sitio se publica automáticamente con GitHub Actions cada vez que se hace `push` a `main`.

- Repositorio: https://github.com/Fernan2323k/edutrack
- URL pública: https://fernan2323k.github.io/edutrack/
- Configuración: `vite.config.ts` usa `base: '/edutrack/'` para que los recursos carguen correctamente en la ruta del proyecto.
- Flujo de trabajo: `.github/workflows/deploy.yml` compila con `npm ci` y `npm run build`, y publica `dist/` mediante `actions/deploy-pages@v4`.

Para volver a compilar antes de subir:

```bash
npm run build
```

Luego:

```bash
git add .
git commit -m "Actualizar sitio"
git push origin main
```
