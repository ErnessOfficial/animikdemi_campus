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

### [NUEVO] Guía de Tipos de Actividades del Laboratorio de Crecimiento Personal

Además de los formatos estándar (`video`, `youtube`, `text`, `quiz`, `evaluation`, `reflectionTree`, `audio`, `upload`, `feedbackForm`, `cardGame`, `finalChallenge`, `interactiveInvisible`, `reframeWall`, `flipCards`, `pillarsInteractive`, `pondGame`, `iframe`), la plataforma soporta 5 tipos de actividades interactivas avanzadas orientadas a la autopercepción y la práctica somática:

#### 1. `sliderAssessment` (El Radar EQ)
Presenta una serie de variables de autopercepción en controles deslizantes que dibujan un gráfico de radar SVG en tiempo real.
* **Propiedades requeridas:**
  - `sliderDomains`: Array de objetos con `id`, `name`, `leftLabel` y `rightLabel`.
* **Ejemplo:**
```typescript
{
  id: 'act-radar',
  type: 'sliderAssessment',
  title: 'El Radar EQ',
  description: 'Evalúa tu nivel en las siguientes variables:',
  sliderDomains: [
    { id: 'focus', name: 'Atención', leftLabel: 'Disperso', rightLabel: 'Enfocado' },
    { id: 'calm', name: 'Calma', leftLabel: 'Reactivo', rightLabel: 'Ecuánime' }
  ]
}
```

#### 2. `emotionWheel` (Rueda de Emociones)
Intersección entre el vocabulario emocional y las sensaciones físicas del cuerpo.
* **Propiedades requeridas:**
  - `coreEmotions`: Array de emociones base. Cada una requiere `id`, `name`, `color` (código hexadecimal), `nuances` (matices de vocabulario - array de strings) y `physicalSensation` (descripción física).
* **Ejemplo:**
```typescript
{
  id: 'act-wheel',
  type: 'emotionWheel',
  title: 'Sensaciones Somáticas',
  description: 'Explora tus emociones:',
  coreEmotions: [
    {
      id: 'ira',
      name: 'Ira',
      color: '#dd566f',
      nuances: ['Frustración', 'Furia', 'Indignación'],
      physicalSensation: 'Tensión en mandíbula, calor en el pecho.'
    }
  ]
}
```

#### 3. `mythBuster` (Swipe de Creencias)
Gamificación rápida para clasificar afirmaciones en Mitos o Verdades.
* **Propiedades requeridas:**
  - `swipeStatements`: Array de afirmaciones. Cada una requiere `id`, `text`, `isMyth` (boolean) y `explanation` (texto explicativo de feedback).
* **Ejemplo:**
```typescript
{
  id: 'act-swipe',
  type: 'mythBuster',
  title: 'Mito o Hecho',
  description: 'Clasifica las afirmaciones:',
  swipeStatements: [
    {
      id: 's1',
      text: 'El estrés siempre es dañino.',
      isMyth: true,
      explanation: 'El estrés agudo moderado (eustrés) puede agudizar el enfoque.'
    }
  ]
}
```

#### 4. `interactiveScenario` (Simulador Conversacional)
Simulaciones de conversación tipo "Elige tu propia aventura" con árboles de decisión y consecuencias inmediatas.
* **Propiedades requeridas:**
  - `scenarios`: Array de conversaciones. Cada una requiere `id`, `context` (bocadillo de diálogo del personaje) y un array `options` (cada respuesta con `text`, `isOptimal` boolean y `consequence` de respuesta).
* **Ejemplo:**
```typescript
{
  id: 'act-scenario',
  type: 'interactiveScenario',
  title: 'Límites Asertivos',
  description: 'Responde a la situación:',
  scenarios: [
    {
      id: 'sc1',
      context: 'Tu jefe te escribe fuera de tu horario laboral.',
      options: [
        { text: 'Ignorarlo del todo.', isOptimal: false, consequence: 'Se cometen errores.' },
        { text: 'Establecer límite profesional.', isOptimal: true, consequence: '¡Excelente!' }
      ]
    }
  ]
}
```

#### 5. `habitTrackerBuilder` (Mochila de Hábitos)
Kanban de arrastrar y soltar de un banco sugerido de hábitos hacia la Mochila de Acción personal.
* **Propiedades requeridas:**
  - `habitsToChoose`: Array de strings con los hábitos propuestos.
  - `maxSelection`: Número máximo de hábitos a almacenar en la mochila.
* **Ejemplo:**
```typescript
{
  id: 'act-habits',
  type: 'habitTrackerBuilder',
  title: 'Mochila de Acción',
  description: 'Selecciona tus micro-hábitos:',
  habitsToChoose: ['Meditar 5m', 'Caminar 10m', 'Agradecer al dormir'],
  maxSelection: 3
}
```

Notas importantes
- `dist/` es generado por `npm run build`; no coloques assets ahí.
- Si mueves imágenes existentes a `/public/images/`, recuerda actualizar las rutas en los cursos.
- `App.tsx` usa el `id` del curso para localizar el contenido detallado. Asegúrate de que tu `id` sea único.
- En desarrollo, existe un modo opcional `VITE_BYPASS_AUTH=true` para probar sin Kinde.

