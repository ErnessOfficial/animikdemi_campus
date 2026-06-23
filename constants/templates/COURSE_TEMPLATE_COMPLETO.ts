/**
 * ============================================================
 *  ANIMIKDEMI CAMPUS v5 — TEMPLATE COMPLETO DE CURSO
 * ============================================================
 *
 *  INSTRUCCIONES DE USO:
 *  1. Duplica este archivo y renómbralo en formato kebab-case
 *     Ej: mindfulness-para-principiantes.ts
 *
 *  2. Reemplaza todos los valores de ejemplo por el contenido real
 *     del curso (busca los comentarios "← PERSONALIZA")
 *
 *  3. Coloca los assets multimedia en /public/:
 *     - Imágenes  → public/images/
 *     - Videos    → public/videos/
 *     - Audios    → public/audios/
 *
 *  4. Asegúrate de que el `id` del curso sea ÚNICO en toda la app
 *
 *  5. Guarda el archivo. El sistema lo detecta AUTOMÁTICAMENTE.
 *     No es necesario registrarlo en ningún otro lugar.
 *
 *  CATEGORÍAS VÁLIDAS PARA `category`:
 *  - "Autoconciencia & Regulación emocional"
 *  - "Ansiedad, Estrés y Calma"
 *  - "Sueño & Descanso consciente"
 *  - "Relaciones & Comunicación con Criterio"
 *  - "Familia, Crianza & Adolescencia"
 *  - "Bienestar en el Trabajo - Especial \"PILAR\""
 *  - "Mujer, Hombre & Etapas vitales"
 *  - "Migración & Cambio de vida"
 *  - "Duelo, Pérdida & Crisis"
 *  - "Digital & Autocuidado en la era de pantallas"
 *
 *  VALORES VÁLIDOS PARA `broadCategories`:
 *  - 'Autoconocimiento'
 *  - 'Gestión Emocional'
 *  - 'Habilidades Sociales'
 * ============================================================
 */

import type { Course } from '../../types';
import { assetPath } from '../../utils/paths';
import { mockInstructor } from '../courses/courseData'; // Instructor por defecto (Ernesto Mendoza)


// ============================================================
//  EXPORTACIÓN PRINCIPAL — El sistema busca esta variable
// ============================================================
export const course: Course = {

  // ----------------------------------------------------------
  //  METADATOS BÁSICOS
  // ----------------------------------------------------------

  id: 'nombre-del-curso-101',           // ← PERSONALIZA: kebab-case, ÚNICO en toda la app
  title: 'Título Principal del Curso',   // ← PERSONALIZA: visible en tarjeta del catálogo
  subtitle: 'Un subtítulo claro, motivador y descriptivo del contenido.', // ← PERSONALIZA
  description: `Descripción completa del curso. Se muestra en la página de detalle antes de 
    inscribirse. Explica el valor del curso, el enfoque pedagógico y los resultados esperados. 
    Puede tener varias líneas usando template literals de JavaScript.`, // ← PERSONALIZA

  // ----------------------------------------------------------
  //  TAXONOMÍA Y CATEGORIZACIÓN
  // ----------------------------------------------------------

  category: 'Autoconciencia & Regulación emocional', // ← PERSONALIZA: una de las 10 categorías válidas

  // Usado por el sistema de RECOMENDACIONES del Dashboard.
  // Un curso puede pertenecer a 1, 2 o las 3 categorías amplias.
  broadCategories: ['Autoconocimiento'],  // ← PERSONALIZA: 'Autoconocimiento' | 'Gestión Emocional' | 'Habilidades Sociales'

  // Imagen de portada. Coloca el archivo en public/images/
  // Dimensiones recomendadas: 800×450px mínimo, relación 16:9, PNG o JPG
  coverImage: assetPath('images/nombre_portada.png'), // ← PERSONALIZA

  // ----------------------------------------------------------
  //  INSTRUCTOR
  // ----------------------------------------------------------

  // OPCIÓN A: Usar el instructor predeterminado (Ernesto Mendoza)
  instructor: mockInstructor,

  // OPCIÓN B: Definir un instructor personalizado (descomenta si necesitas otro)
  // instructor: {
  //   name: 'Nombre Completo',
  //   title: 'Psicólogo Clínico & Especialista en Mindfulness',
  //   avatarUrl: assetPath('images/instructor_custom.png'),
  //   bio: 'Descripción breve del instructor con su formación, experiencia y especialidad.',
  // },

  // ----------------------------------------------------------
  //  DURACIÓN Y OBJETIVOS
  // ----------------------------------------------------------

  estimatedDurationMinutes: 90,  // ← PERSONALIZA: duración total aproximada en minutos

  // Mínimo 3 objetivos. Usar verbos de acción medibles:
  // Identificar, Aplicar, Desarrollar, Comprender, Practicar, Reconocer, Crear, Analizar
  learningObjectives: [
    'Identificar los patrones [del tema] y cómo afectan a tu bienestar diario.', // ← PERSONALIZA
    'Aplicar técnicas prácticas de [habilidad específica] en situaciones cotidianas.',
    'Desarrollar una mayor [competencia] para gestionar [situación] con más confianza.',
    'Crear un plan personal de [objetivo] adaptado a tu contexto y necesidades.',
  ],

  // ----------------------------------------------------------
  //  MÓDULOS Y ACTIVIDADES
  // ----------------------------------------------------------
  // Estructura: Al menos 1 módulo, con al menos 1 actividad por módulo.
  // IDs de módulos: m1, m2, m3...
  // IDs de actividades: m1a1, m1a2, m2a1, m2a2... (únicos dentro del curso)
  // ----------------------------------------------------------

  modules: [

    // ==========================================================
    //  MÓDULO 1: INTRODUCCIÓN / BIENVENIDA
    // ==========================================================
    {
      id: 'm1',
      title: 'Módulo 1: Fundamentos y Punto de Partida', // ← PERSONALIZA
      activities: [

        // ---- ACTIVIDAD TIPO: video (video local) ----
        // Reproduce un archivo MP4 desde /public/videos/
        // El botón "Completar" se activa al terminar el video.
        {
          id: 'm1a1',
          type: 'video',
          title: 'Bienvenida al Curso',                         // ← PERSONALIZA
          description: 'Introducción al tema y lo que aprenderás en este curso.', // ← PERSONALIZA
          videoSrc: assetPath('videos/nombre_clase1.mp4'),     // ← PERSONALIZA
          // OPCIONAL: Transcripción o notas del video (aparece debajo del video)
          content: [
            'Párrafo 1 de la transcripción o notas del video.',
            'Párrafo 2 con un concepto clave desarrollado.',
          ],
        },

        // ---- ACTIVIDAD TIPO: youtube (video de YouTube) ----
        // Incrusta un video de YouTube. No requiere interacción para completar.
        // NOTA: Usa el formato de URL embed: https://www.youtube.com/embed/VIDEO_ID
        {
          id: 'm1a2',
          type: 'youtube',
          title: 'Video Complementario: Conceptos Clave',        // ← PERSONALIZA
          description: 'Un video externo que complementa la lección.',
          videoSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // ← PERSONALIZA: reemplaza VIDEO_ID
          content: [
            'Nota opcional que aparece debajo del video.',
          ],
        },

        // ---- ACTIVIDAD TIPO: text (texto enriquecido) ----
        // Renderiza párrafos de texto. Completado inmediato.
        // Para viñetas, añade "• " manualmente al inicio del string.
        {
          id: 'm1a3',
          type: 'text',
          title: 'Lectura: Marco Conceptual',                    // ← PERSONALIZA
          description: 'Lee y reflexiona sobre los conceptos fundamentales del módulo.',
          content: [
            'Primer párrafo del contenido teórico. Explica el contexto del tema.',
            'Segundo párrafo con el desarrollo del concepto principal.',
            '• Punto clave 1: descripción breve.',
            '• Punto clave 2: descripción breve.',
            '• Punto clave 3: descripción breve.',
            'Párrafo de cierre que conecta con la siguiente actividad.',
          ],
          // OPCIONAL: imagen que se muestra sobre el texto
          imageSrc: assetPath('images/infografia_modulo1.png'),
          imageAltSrc: assetPath('images/infografia_modulo1_fallback.png'), // PNG fallback si el principal es SVG
        },

      ],
    }, // Fin Módulo 1


    // ==========================================================
    //  MÓDULO 2: DESARROLLO / PRÁCTICA
    // ==========================================================
    {
      id: 'm2',
      title: 'Módulo 2: Herramientas Prácticas',               // ← PERSONALIZA
      activities: [

        // ---- ACTIVIDAD TIPO: audio (meditación / podcast) ----
        // Reproduce un archivo MP3. Se completa al terminar el audio.
        {
          id: 'm2a1',
          type: 'audio',
          title: 'Meditación Guiada: [Nombre del Ejercicio]',   // ← PERSONALIZA
          description: 'Ejercicio de audio para trabajar [habilidad específica].',
          audioSrc: assetPath('audios/nombre_meditacion.mp3'),  // ← PERSONALIZA
          // OPCIONAL: Transcripción del audio (aparece debajo del reproductor)
          content: [
            'Cierra los ojos y respira profundamente...',
            'Siente cómo la tensión abandona tu cuerpo con cada exhalación...',
          ],
        },

        // ---- ACTIVIDAD TIPO: quiz (cuestionario de opción múltiple) ----
        // Con retroalimentación inmediata. Completado al responder todas las preguntas.
        {
          id: 'm2a2',
          type: 'quiz',
          title: 'Autoevaluación: ¿Cuánto has aprendido?',      // ← PERSONALIZA
          description: 'Reflexiona sobre los conceptos del módulo con estas preguntas.',
          questions: [
            {
              question: '¿Cuál de las siguientes afirmaciones describe mejor [concepto]?', // ← PERSONALIZA
              options: [
                {
                  text: 'Opción A (incorrecta)',
                  feedback: 'No exactamente. [Explicación de por qué es incorrecta y qué sería lo correcto].'
                },
                {
                  text: 'Opción B (correcta)',
                  feedback: '¡Correcto! [Refuerzo positivo y explicación breve del concepto].'
                },
                {
                  text: 'Opción C (incorrecta)',
                  feedback: 'No es la respuesta más precisa. [Orientación hacia la respuesta correcta].'
                },
              ],
            },
            {
              question: 'Cuando experimentas [situación], ¿cuál sería la respuesta más saludable?',
              options: [
                { text: 'Ignorar la situación', feedback: 'Ignorar no suele ser efectivo a largo plazo.' },
                { text: 'Aplicar la técnica aprendida', feedback: '¡Exacto! Aplicar lo aprendido es la clave.' },
                { text: 'Reaccionar impulsivamente', feedback: 'La impulsividad suele generar más conflicto.' },
              ],
            },
          ],
          // OPCIONAL: Personalizar colores de las opciones del quiz
          ui: {
            optionBgColor: '#f0f9ff',   // Color de fondo de cada opción
            optionTextColor: '#0c4a6e', // Color de texto de cada opción
          },
        },

        // ---- ACTIVIDAD TIPO: flipCards (tarjetas giratorias) ----
        // Tarjetas con frente y reverso agrupadas por tema.
        {
          id: 'm2a3',
          type: 'flipCards',
          title: 'Conceptos Clave: Gira y Descubre',            // ← PERSONALIZA
          description: 'Haz clic en cada tarjeta para descubrir su significado.',
          introText: 'Nota introductoria opcional antes de las tarjetas.',
          imageSrc: assetPath('images/ilustracion_flipcards.png'), // ← PERSONALIZA (opcional)
          flipGroups: [
            {
              title: 'Grupo 1: [Nombre del Grupo]',              // ← PERSONALIZA
              color: '#6e4380',                                   // Color del encabezado del grupo
              cards: [
                {
                  front: 'Término o concepto 1',
                  back: 'Definición o explicación detallada del término o concepto 1.'
                },
                {
                  front: 'Término o concepto 2',
                  back: 'Definición o explicación detallada del término o concepto 2.'
                },
              ],
            },
            {
              title: 'Grupo 2: [Nombre del Grupo]',              // ← PERSONALIZA
              color: '#24668e',
              cards: [
                {
                  front: 'Técnica A',
                  back: 'Descripción de cómo aplicar la Técnica A en la práctica diaria.'
                },
                {
                  front: 'Técnica B',
                  back: 'Descripción de cómo aplicar la Técnica B y cuándo usarla.'
                },
              ],
            },
          ],
        },

      ],
    }, // Fin Módulo 2


    // ==========================================================
    //  MÓDULO 3: PROFUNDIZACIÓN / EJERCICIOS INTERACTIVOS
    // ==========================================================
    {
      id: 'm3',
      title: 'Módulo 3: Aplicación y Transformación',           // ← PERSONALIZA
      activities: [

        // ---- ACTIVIDAD TIPO: cardGame (juego de parejas / matching) ----
        // Empareja tarjetas. Siempre en pares: una 'limiting' + una 'empowering' con mismo matchId.
        {
          id: 'm3a1',
          type: 'cardGame',
          title: 'Juego: Identifica y Transforma',               // ← PERSONALIZA
          description: 'Empareja cada [concepto A] con su [concepto B] correspondiente.',
          cards: [
            // Par 1
            { id: 1, matchId: 2, text: 'Creencia o situación limitante 1', type: 'limiting' },
            { id: 2, matchId: 1, text: 'Su versión potenciadora o solución', type: 'empowering' },
            // Par 2
            { id: 3, matchId: 4, text: 'Creencia o situación limitante 2', type: 'limiting' },
            { id: 4, matchId: 3, text: 'Su versión potenciadora o solución', type: 'empowering' },
            // Par 3
            { id: 5, matchId: 6, text: 'Creencia o situación limitante 3', type: 'limiting' },
            { id: 6, matchId: 5, text: 'Su versión potenciadora o solución', type: 'empowering' },
            // Par 4
            { id: 7, matchId: 8, text: 'Creencia o situación limitante 4', type: 'limiting' },
            { id: 8, matchId: 7, text: 'Su versión potenciadora o solución', type: 'empowering' },
          ],
        },

        // ---- ACTIVIDAD TIPO: reflectionTree (árbol de reflexión interactivo) ----
        // Actividad visual interactiva. Completado al añadir al menos un elemento.
        {
          id: 'm3a2',
          type: 'reflectionTree',
          title: 'Mi Árbol de [Tema]',                           // ← PERSONALIZA
          description: 'Construye una imagen visual de [qué refleja el árbol para este curso].',
          imageSrc: assetPath('images/tree_illustration.png'),
        },

        // ---- ACTIVIDAD TIPO: evaluation (preguntas de reflexión abierta) ----
        // El usuario escribe respuestas libres. Las respuestas se guardan en el progreso.
        {
          id: 'm3a3',
          type: 'evaluation',
          title: 'Reflexión Escrita del Módulo',                 // ← PERSONALIZA
          description: 'Consolida lo aprendido respondiendo estas preguntas de reflexión.',
          content: ['Texto introductorio opcional antes de las preguntas de evaluación.'],
          questions: [
            { prompt: '¿Cómo puedes aplicar [lo aprendido] en tu vida cotidiana esta semana?' },
            { prompt: 'Describe una situación pasada donde [concepto del módulo] hubiera marcado la diferencia.' },
            { prompt: '¿Qué compromiso concreto adquieres contigo mismo/a tras este módulo?' },
          ],
        },

      ],
    }, // Fin Módulo 3


    // ==========================================================
    //  MÓDULO 4: ACTIVIDADES AVANZADAS (OPCIONAL)
    // ==========================================================
    {
      id: 'm4',
      title: 'Módulo 4: Integración Avanzada',                  // ← PERSONALIZA (o eliminar si no se necesita)
      activities: [

        // ---- ACTIVIDAD TIPO: reframeWall (muro de reencuadre cognitivo) ----
        // El usuario escribe creencias negativas y las transforma. Guardado automático.
        {
          id: 'm4a1',
          type: 'reframeWall',
          title: 'Transforma tus Creencias Limitantes',          // ← PERSONALIZA
          description: 'Identifica una creencia que te frena y crea su versión empoderada.',
        },

        // ---- ACTIVIDAD TIPO: interactiveInvisible (muro de lo invisible) ----
        // Reflexión estructurada sobre pensamientos ocultos. Guardado automático.
        {
          id: 'm4a2',
          type: 'interactiveInvisible',
          title: 'Lo Que No Dices: Reflexión Interior',          // ← PERSONALIZA
          description: 'Un espacio seguro para explorar los pensamientos que normalmente no expresas.',
        },

        // ---- ACTIVIDAD TIPO: upload (tarea de subida de archivo) ----
        // El usuario sube un archivo (imagen, PDF, documento).
        {
          id: 'm4a3',
          type: 'upload',
          title: 'Tarea: Comparte tu Creación',                  // ← PERSONALIZA
          description: 'Sube el ejercicio que has preparado para guardar tu progreso.',
          introText: 'Instrucción específica: Sube una imagen de [lo que debe subir].',
          infoCards: [
            {
              title: 'Formatos aceptados',
              body: 'JPG, PNG, PDF (máximo 10MB). Puedes fotografiar un trabajo en papel.',
              color: '#6e4380',
            },
            {
              title: '¿Por qué es importante?',
              body: 'Externalizar el aprendizaje refuerza la memoria y el compromiso.',
            },
          ],
          closingText: 'Texto opcional de cierre después del botón de subida.',
        },

        // ---- ACTIVIDAD TIPO: feedbackForm (práctica de recepción de feedback) ----
        {
          id: 'm4a4',
          type: 'feedbackForm',
          title: 'Práctica: Recibiendo Feedback con Mentalidad de Crecimiento', // ← PERSONALIZA
          description: 'Practica cómo responder al feedback desde una perspectiva constructiva.',
        },

      ],
    }, // Fin Módulo 4


    // ==========================================================
    //  MÓDULO 5: CIERRE Y PLAN DE ACCIÓN
    // ==========================================================
    {
      id: 'm5',
      title: 'Módulo 5: Tu Plan de Acción Personal',            // ← PERSONALIZA
      activities: [

        // ---- ACTIVIDAD TIPO: iframe (contenido HTML embebido o URL externa) ----
        // OPCIÓN A: HTML personalizado inline (como array de strings)
        // OPCIÓN B: URL externa (en videoSrc)
        // Útil para actividades interactivas desarrolladas externamente.
        // NOTA: Descomentar solo si se necesita.
        // {
        //   id: 'm5a1',
        //   type: 'iframe',
        //   title: 'Actividad Interactiva: [Nombre]',
        //   description: 'Completa esta actividad interactiva.',
        //   videoSrc: 'https://mi-recurso-externo.com/actividad',
        //   // O con HTML inline:
        //   // content: ['<!DOCTYPE html><html><body><h1>Mi actividad</h1></body></html>']
        // },

        // ---- ACTIVIDAD TIPO: finalChallenge (desafío final / plan de acción) ----
        // El usuario escribe un plan concreto. Es la actividad de cierre ideal.
        {
          id: 'm5a1',
          type: 'finalChallenge',
          title: 'Desafío Final: Tu Plan de [Tema del Curso]',  // ← PERSONALIZA
          description: 'Ha llegado el momento de consolidar todo lo aprendido en un plan concreto y realista que puedas implementar esta semana.',
        },

      ],
    }, // Fin Módulo 5

  ], // Fin modules[]

}; // Fin export const course

// Exportación por defecto (recomendada para compatibilidad)
export default course;


// ============================================================
//  REFERENCIA RÁPIDA: TIPOS DE ACTIVIDAD DISPONIBLES
// ============================================================
//
//  TIPO               DESCRIPCIÓN                          COMPLETADO
//  ─────────────────  ───────────────────────────────────  ─────────────────
//  'video'            Video local MP4                      Al terminar video
//  'youtube'          Video embed de YouTube               Inmediato
//  'text'             Texto / lectura                      Inmediato
//  'audio'            Audio MP3 (meditaciones)             Al terminar audio
//  'quiz'             Cuestionario opción múltiple         Al responder todo
//  'evaluation'       Reflexión de texto libre             Al escribir respuesta
//  'flipCards'        Tarjetas giratorias                  Al voltear todas
//  'cardGame'         Juego de parejas matching            Al resolver todo
//  'reflectionTree'   Árbol de reflexión interactivo       Al añadir elemento
//  'reframeWall'      Muro de reencuadre cognitivo         Al completar campos
//  'interactiveInvisible' Muro de lo invisible             Al completar campos
//  'upload'           Subida de archivo                    Al seleccionar archivo
//  'feedbackForm'     Formulario de feedback               Al completar respuesta
//  'pillarsInteractive'  Pilares del bienestar             Al interactuar
//  'pondGame'         Juego del estanque                   Al completar juego
//  'interactiveGame'  Juego interactivo genérico           Al completar juego
//  'iframe'           HTML embebido o URL externa          Inmediato
//  'finalChallenge'   Desafío final / plan de acción       Al escribir plan
// ============================================================
