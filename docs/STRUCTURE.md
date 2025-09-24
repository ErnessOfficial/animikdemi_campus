Proyecto: AnImiKdemi Campus — Estructura y Guía de Contenidos

Visión general
- Este proyecto usa Vite + React (TS). El servidor de desarrollo sirve `/public` en la raíz (`/`).
- La carpeta `dist/` es solo salida de build (generada). No coloques nada ahí; se sobreescribe en cada build.

Árbol de carpetas clave
- `/index.html` y `/index.tsx`: punto de entrada de la SPA.
- `/App.tsx`: layout principal y navegación.
- `/pages/`: vistas principales (Dashboard, Catálogo, Curso, Perfil, Login).
- `/components/`: componentes UI reutilizables.
  - `/components/platform/`: Sidebar, Header, modales de plataforma.
  - `/components/course/`: Sidebar del curso y piezas específicas.
  - `/components/activities/`: Video, Audio, Quiz, Texto, etc.
  - `/components/common/`: LoadingSpinner, DebugAuthPanel.
- `/constants/`:
  - `/constants/courses/`: cursos con contenido detallado (autodiscovery activo).
  - `/constants/platformData.ts`: catálogo, categorías y progreso inicial.
- `/types.ts`: tipos compartidos (Course, Module, Activity, etc.).
- `/public/`: assets estáticos (sirven desde `/`).
  - `/public/images/` (opcional): imágenes.
  - `/public/videos/`: videos del curso.
  - `/public/audios/`: audios del curso.

Dónde colocar imágenes, videos y audios
- Coloca SIEMPRE assets en `/public/` (no en `dist/`).
  - Videos: `/public/videos/...` → referéncialos como `/videos/...`.
  - Audios: `/public/audios/...` → referéncialos como `/audios/...`.
  - Imágenes: puedes dejarlas en `/public/` o en `/public/images/` y referenciarlas como `/images/...`.
- Ejemplo en un curso: `videoSrc: '/videos/intro.mp4'`, `audioSrc: '/audios/meditacion.mp3'`, `coverImage: '/images/mi_portada.png'`.

Catálogo y descubrimiento automático de cursos
- `constants/platformData.ts` compone `courseCatalog` así:
  1) Carga automáticamente todos los cursos en `constants/courses/*.ts` (con `import.meta.glob` eager).
  2) Añade cursos “placeholder” (sólo en catálogo) definidos dentro del archivo.
- Esto permite que el catálogo y el Dashboard reflejen los cursos detallados sin tocar `platformData.ts`.

Cómo añadir un curso nuevo (pasos)
1) Crea un archivo en `constants/courses/`, por ejemplo `miCurso.ts`.
2) Exporta el objeto curso (puede ser `export const course = {...}` o `export default {...}`). Campos mínimos:
   - `id`, `title`, `subtitle`, `description`, `category`, `broadCategories`, `coverImage`, `instructor`, `learningObjectives`, `modules` (con `activities`).
3) Coloca los assets en `/public/` según corresponda.
4) Ejecuta `npm run dev` y verifica que tu curso aparece en el catálogo.

Plantilla rápida
```
import type { Course } from '../../types';
import { mockInstructor } from './courseData'; // o define tu propio instructor

export const course: Course = {
  id: 'mi-curso-101',
  title: 'Título del curso',
  subtitle: 'Subtítulo atractivo',
  description: 'Descripción resumida.',
  category: 'Categoría visible en catálogo',
  broadCategories: ['Autoconocimiento' /* o Gestión Emocional, Habilidades Sociales */],
  coverImage: '/images/mi_portada.png',
  instructor: mockInstructor,
  learningObjectives: ['Objetivo 1', 'Objetivo 2'],
  modules: [
    {
      id: 'm1',
      title: 'Módulo 1',
      activities: [
        { id: 'm1a1', type: 'video', title: 'Bienvenida', description: '...', videoSrc: '/videos/intro.mp4' },
        { id: 'm1a2', type: 'text', title: 'Conceptos', description: '...', content: ['párrafo 1', 'párrafo 2'] },
      ],
    },
  ],
};
export default course;
```

Notas importantes
- `dist/` es generado por `npm run build`; no coloques assets ahí.
- Si mueves imágenes existentes a `/public/images/`, recuerda actualizar las rutas en los cursos.
- `App.tsx` usa el `id` del curso para localizar el contenido detallado. Asegúrate de que tu `id` sea único.
- En desarrollo, existe un modo opcional `VITE_BYPASS_AUTH=true` para probar sin Kinde.

