import type { Course } from '../../types';
import { mockInstructor } from './courseData';
import { assetPath } from '../../utils/paths';

// Curso: Programa de Inteligencia Emocional Aplicada - Nivel 1
// Nota de compatibilidad:
// - Assets referenciados desde la raíz: /images, /videos, /audios (colócalos físicamente en /public/...)
// - Se mantienen los videos de Google Drive indicados por el usuario.
// - Se evita repetir recursos salvo que estén adaptados al tema del módulo.
// - Contenido ampliado para hacerlo más interactivo, dinámico y reflexivo.

export const course: Course = {
  id: 'gestion-emocional-101',
  title: 'Inteligencia Emocional Aplicada',
  subtitle: 'Aprende a gestionar tus emociones para una vida más plena.',
  description:
    'Un recorrido práctico para desarrollar habilidades emocionales esenciales: reconocer y etiquetar emociones, regular impulsos, cultivar autocompasión y comunicarnos con empatía y criterio.',
  category: 'Autoconciencia & Regulación emocional',
  broadCategories: ['Autoconocimiento', 'Gestión Emocional', 'Habilidades Sociales'],
  coverImage: assetPath('images/course_cover_2.png'),
  instructor: mockInstructor,
  learningObjectives: [
    'Identificar emociones básicas en ti mismo y en los demás.',
    'Aplicar técnicas de regulación emocional en momentos de estrés.',
    'Comprender el impacto de las emociones en la toma de decisiones.',
    'Desarrollar la capacidad de responder en lugar de reaccionar.',
    'Mejorar la comunicación de tus estados emocionales.'
  ],
  modules: [
    // ==========================================================
    // MÓDULO 1 — CONCIENCIA Y ETIQUETADO EMOCIONAL (reorganizado)
    // ==========================================================
    {
      id: 'm1',
      title: 'Módulo 1: Conciencia y Etiquetado Emocional',
      activities: [
        // PUNTO 1 — Video + Transcripción + Quiz (en secuencia inmediata)
        {
          id: 'm1a1',
          type: 'video',
          title: 'Punto 1 · Bienvenida y contexto del curso',
          description:
            'Dale play para conocer la estructura del Nivel 1 y, al finalizar, responde el quiz para reforzar conceptos clave.',
          videoSrc:
            'https://drive.google.com/file/d/1jxCqgtCO4roxd6Uw3sf-kXXuiiA2xjUr/view?usp=sharing',
          content: [
            'Transcripción del video — Bienvenida',
            'Lee la transcripción y, al final, realiza el Quiz de Vocabulario Emocional.',
            '¡Hola! Te damos la más cordial bienvenida a Animikdemi, el primer nivel de nuestro programa de Inteligencia Emocional Aplicada. Estás a punto de iniciar un viaje de autodescubrimiento y transformación diseñado para equiparte con habilidades emocionales esenciales para una vida más plena y consciente.',
            'En este espacio interactivo y dinámico, no solo aprenderás teoría, sino que aplicarás herramientas prácticas para entender, gestionar y utilizar tus emociones de forma inteligente en tu día a día.',
            'El Nivel 1 de Animikdemi está estructurado en cuatro módulos fundamentales:',
            '1) Conciencia y Etiquetado Emocional — reconocer y nombrar con precisión lo que sientes.',
            '2) Neurociencia de la Regulación y Control de Impulsos — entender cómo reacciona tu cerebro y cómo recuperar el control.',
            '3) Autocompasión y Resiliencia — amabilidad activa hacia ti para recuperarte con fuerza.',
            '4) Empatía para Relaciones con Criterio — comprender al otro sin perder tu propio límite.',
            'Recuerda: este es un curso interactivo. Tu participación activa, tu reflexión y tus prácticas son la llave para desbloquear su potencial. ¡Bienvenido/a a Animikdemi!'
          ],
          questions: [
            {
              question: '¿Qué significa etiquetar una emoción?',
              options: [
                { text: 'Ponerle un nombre preciso a lo que siento', feedback: 'Correcto. Nombrar con precisión mejora la autorregulación.' },
                { text: 'Ignorar lo que siento', feedback: 'Incorrecto. Ignorar no es etiquetar.' },
                { text: 'Reaccionar sin filtro', feedback: 'Incorrecto.' },
                { text: 'Buscar una causa externa', feedback: 'Parcial: la causa ayuda, pero etiquetar es nombrar la emoción.' },
              ],
            },
            {
              question: '¿Cuál es un ejemplo de emoción básica?',
              options: [
                { text: 'Alegría', feedback: 'Correcto.' },
                { text: 'Motivación', feedback: 'Incorrecto. Es un estado motivacional.' },
                { text: 'Autoestima', feedback: 'Incorrecto. Es un constructo.' },
                { text: 'Imaginación', feedback: 'Incorrecto.' },
              ],
            },
            {
              question: 'La «granularidad emocional» es…',
              options: [
                { text: 'Diferenciar emociones sutiles', feedback: 'Correcto.' },
                { text: 'La intensidad máxima', feedback: 'Incorrecto.' },
                { text: 'La duración', feedback: 'Incorrecto.' },
                { text: 'El número de emociones existentes', feedback: 'Incorrecto.' },
              ],
            },
            {
              question: 'Decir “nerviosismo y anticipación” es…',
              options: [
                { text: 'Etiquetar con precisión', feedback: 'Correcto. Dos etiquetas finas aportan claridad.' },
                { text: 'Confundirse', feedback: 'Incorrecto.' },
                { text: 'Evitar sentir', feedback: 'Incorrecto.' },
                { text: 'Intelectualizar en exceso', feedback: 'No necesariamente.' },
              ],
            },
            {
              question: 'Nombrar con precisión lo que siento suele…',
              options: [
                { text: 'Disminuir la reactividad', feedback: 'Correcto.' },
                { text: 'Aumentar la intensidad', feedback: 'Incorrecto.' },
                { text: 'Hacer permanente la emoción', feedback: 'Incorrecto.' },
                { text: 'Eliminarla al instante', feedback: 'No necesariamente.' },
              ],
            },
            {
              question: 'Selecciona dos emociones distintas:',
              options: [
                { text: 'Rabia y frustración', feedback: 'Correcto: comparten base, pero son distintas.' },
                { text: 'Tristeza y melancolía', feedback: 'Parcial: matices cercanos.' },
                { text: 'Cansancio y agotamiento', feedback: 'Estados físicos, no emociones.' },
                { text: 'Juicio y pensamiento', feedback: 'Procesos cognitivos, no emociones.' },
              ],
            },
          ],
          // 'realiza el quiz a continuación para reforzar tu aprendizaje.' // <-- removed duplicate description
        },

        // PUNTO 2 — Lectura para Reflexionar (incluye los tres componentes + 2 imágenes)
        {
          id: 'm1a2',
          type: 'iframe',
          title: 'Punto 2 · Componentes de las Emociones',
          description: 'Presentación didáctica de aprendizaje reflexivo sobre los diferentes componentes de las emociones. Interactúa y descúbrela',
          content: [
            `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Los 3 Componentes de las Emociones</title>
    <!-- Carga de Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Configuración de Tailwind y la fuente Inter -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'primary-dark': '#5E4FA8',
                        'primary-light': '#8C7BB7',
                        'accent-blue': '#4F9FA8',
                        'bg-soft': '#F7F7F9',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    keyframes: {
                        'fade-in-up': {
                            '0%': { opacity: '0', transform: 'translateY(10px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                    },
                    animation: {
                        'fade-in-up': 'fade-in-up 0.5s ease-out',
                    },
                }
            }
        }
    </script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        
        /* Estilos base para la tarjeta (simulando un "flip" en la interacción, aunque usaremos un acordeón) */
        .card-component {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            transform-style: preserve-3d;
        }

        .card-component:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        /* Estilos para el botón desplegable */
        .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;
        }
        .accordion-content.active {
            max-height: 500px; /* Suficientemente grande para el contenido */
            padding-top: 1rem;
        }
    </style>
</head>
<body class="bg-bg-soft font-sans min-h-screen p-4 sm:p-8">

    <!-- Encabezado y Título -->
    <header class="text-center mb-10">
        <div class="inline-flex items-center justify-center p-3 rounded-xl bg-white shadow-lg">
            <!-- Icono de Corazón para simbolizar la emoción -->
            <svg class="w-10 h-10 text-primary-dark mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-800">
                Los 3 Componentes de las Emociones
            </h1>
        </div>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre cómo se manifiestan las emociones en tu cuerpo, mente y acciones.
        </p>
    </header>

    <!-- Contenedor de la Infografía (Grid Responsive) -->
    <main class="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">

        <!-- CARD 1: COMPONENTE FISIOLÓGICO -->
        <div id="card-fisiologico" class="card-component bg-white p-6 rounded-2xl shadow-xl border-t-8 border-red-500 flex flex-col justify-between animate-fade-in-up">
            <div class="flex-grow">
                <div class="flex items-center mb-4">
                    <!-- Icono Fisiológico (Pulso/Ritmo Cardiaco) -->
                    <div class="p-3 rounded-full bg-red-100 text-red-600">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <h2 class="ml-4 text-2xl font-bold text-gray-900">1. Fisiológico (El Cuerpo)</h2>
                </div>

                <p class="text-gray-600 mb-4">
                    Es la respuesta automática de nuestro sistema nervioso. Son las sensaciones físicas que preparan al cuerpo para la acción.
                </p>
                <div class="text-sm font-semibold text-gray-700 p-3 bg-red-50 rounded-lg">
                    \textbf{Manifestaciones:} Aumento del ritmo cardíaco, tensión muscular, sudoración, nudo en el estómago, rubor.
                </div>
            </div>

            <!-- Sección Desplegable para Reflexión Práctica -->
            <div class="mt-6 pt-4 border-t border-gray-100">
                <button onclick="toggleAccordion('fisiologico-reflection')" class="accordion-button flex justify-between items-center w-full text-left font-semibold text-primary-dark p-3 bg-primary-dark/10 rounded-xl transition duration-300 hover:bg-primary-dark/20">
                    <span>✨ Práctica: ¿Dónde lo siento?</span>
                    <span class="transform transition duration-300 arrow-icon">▼</span>
                </button>
                <div id="fisiologico-reflection" class="accordion-content bg-red-50/50 rounded-b-xl px-4 text-sm text-gray-700">
                    <ul class="list-disc list-inside space-y-2 py-4">
                        <li>**Reconoce:** ¿Sientes calor en las orejas, frío en las manos o presión en el pecho? Identificar la ubicación te da control.</li>
                        <li>**Regula:** Usa la **Pausa Fisiológica (2-2-4)** para enviar una señal de calma al cuerpo y desactivar el modo "alerta".</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- CARD 2: COMPONENTE COGNITIVO -->
        <div id="card-cognitivo" class="card-component bg-white p-6 rounded-2xl shadow-xl border-t-8 border-yellow-500 flex flex-col justify-between animate-fade-in-up" style="animation-delay: 0.1s;">
            <div class="flex-grow">
                <div class="flex items-center mb-4">
                    <!-- Icono Cognitivo (Cerebro/Idea) -->
                    <div class="p-3 rounded-full bg-yellow-100 text-yellow-600">
                         <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2-10H7a4 4 0 00-4 4v8a4 4 0 004 4h10a4 4 0 004-4v-8a4 4 0 00-4-4z"></path></svg>
                    </div>
                    <h2 class="ml-4 text-2xl font-bold text-gray-900">2. Cognitivo (La Mente)</h2>
                </div>

                <p class="text-gray-600 mb-4">
                    Es la interpretación mental o el juicio que le damos a la situación que provoca la emoción. Incluye creencias y pensamientos automáticos.
                </p>
                <div class="text-sm font-semibold text-gray-700 p-3 bg-yellow-50 rounded-lg">
                    \textbf{Manifestaciones:} "Esto es terrible", "Soy un fracaso", "Él me odia", rumiación, pensamientos catastróficos.
                </div>
            </div>

            <!-- Sección Desplegable para Reflexión Práctica -->
            <div class="mt-6 pt-4 border-t border-gray-100">
                <button onclick="toggleAccordion('cognitivo-reflection')" class="accordion-button flex justify-between items-center w-full text-left font-semibold text-primary-dark p-3 bg-primary-dark/10 rounded-xl transition duration-300 hover:bg-primary-dark/20">
                    <span>💡 Práctica: Cuestiona la historia</span>
                    <span class="transform transition duration-300 arrow-icon">▼</span>
                </button>
                <div id="cognitivo-reflection" class="accordion-content bg-yellow-50/50 rounded-b-xl px-4 text-sm text-gray-700">
                    <ul class="list-disc list-inside space-y-2 py-4">
                        <li>**Identifica:** Usa la técnica **Etiquetar y Validar** (Nombrar la emoción + Separar el hecho de la interpretación).</li>
                        <li>**Replantea:** Pregúntate: "¿Qué evidencia tengo de que este pensamiento es 100\% real?" Busca una interpretación alternativa.</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- CARD 3: COMPONENTE CONDUCTUAL -->
        <div id="card-conductual" class="card-component bg-white p-6 rounded-2xl shadow-xl border-t-8 border-indigo-500 flex flex-col justify-between animate-fade-in-up" style="animation-delay: 0.2s;">
            <div class="flex-grow">
                <div class="flex items-center mb-4">
                    <!-- Icono Conductual (Acción/Huir) -->
                    <div class="p-3 rounded-full bg-indigo-100 text-indigo-600">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8m-1 8v-1m0 0h-1m0 0l-8-8M7 8V7m0 0h1m0 0l8-8"></path></svg>
                    </div>
                    <h2 class="ml-4 text-2xl font-bold text-gray-900">3. Conductual (La Acción)</h2>
                </div>

                <p class="text-gray-600 mb-4">
                    Es la tendencia a la acción o la reacción observable (o el impulso interno) que surge de los componentes fisiológico y cognitivo.
                </p>
                <div class="text-sm font-semibold text-gray-700 p-3 bg-indigo-50 rounded-lg">
                    \textbf{Manifestaciones:} Gritar, huir, paralizarse, evitar una situación, aislarse, o buscar consuelo (ej. comer en exceso).
                </div>
            </div>

            <!-- Sección Desplegable para Reflexión Práctica -->
            <div class="mt-6 pt-4 border-t border-gray-100">
                <button onclick="toggleAccordion('conductual-reflection')" class="accordion-button flex justify-between items-center w-full text-left font-semibold text-primary-dark p-3 bg-primary-dark/10 rounded-xl transition duration-300 hover:bg-primary-dark/20">
                    <span>🏃 Práctica: Elige la respuesta</span>
                    <span class="transform transition duration-300 arrow-icon">▼</span>
                </button>
                <div id="conductual-reflection" class="accordion-content bg-indigo-50/50 rounded-b-xl px-4 text-sm text-gray-700">
                    <ul class="list-disc list-inside space-y-2 py-4">
                        <li>**Retrasa:** Antes de actuar, usa **La Pregunta de los 5 Segundos**: "¿Importará esto en 5 días?". Esto crea un espacio entre el impulso y la acción.</li>
                        <li>**Cambia:** En lugar de reaccionar impulsivamente, elige una **Acción Amable** (ej. caminar 5 minutos, escribir la emoción en lugar de gritar).</li>
                    </ul>
                </div>
            </div>
        </div>

    </main>

    <!-- Script para la Interactividad del Acordeón -->
    <script>
        /**
         * Función para alternar el estado (mostrar/ocultar) de la sección de reflexión
         * y rotar el icono de flecha.
         * @param {string} id - El ID del div de contenido del acordeón.
         */
        function toggleAccordion(id) {
            const content = document.getElementById(id);
            const button = content.previousElementSibling;
            const arrow = button.querySelector('.arrow-icon');

            // Alternar la clase 'active' en el contenido
            content.classList.toggle('active');

            // Rotar la flecha
            if (content.classList.contains('active')) {
                arrow.style.transform = 'rotate(180deg)';
            } else {
                arrow.style.transform = 'rotate(0deg)';
            }
        }
        
        // Función para inicializar el documento (opcional, pero buena práctica)
        window.onload = function() {
            console.log('Infografía cargada e interactiva.');
            // Opcional: Abrir la primera sección por defecto
            // toggleAccordion('fisiologico-reflection'); 
        };
    </script>
</body>
</html>`
  ]
},

        // PUNTO 3 — Rueda de Granularidad Emocional
        {
          id: 'm1a3',
          type: 'emotionWheel' as any,
          title: 'Punto 3 · Rueda de Granularidad Emocional',
          description: 'Decir "estoy mal" es poco preciso. Haz clic en las emociones primarias para descubrir los matices (granularidad) y cómo se sienten en el cuerpo.',
          coreEmotions: [
            {
              name: 'Ira',
              color: '#ef4444',
              nuances: ['Frustración', 'Resentimiento', 'Indignación', 'Furia'],
              physicalSensation: 'Calor en el pecho y cara, tensión en la mandíbula, respiración corta y acelerada.'
            },
            {
              name: 'Miedo',
              color: '#8b5cf6',
              nuances: ['Inseguridad', 'Ansiedad', 'Pavor', 'Abrumamiento'],
              physicalSensation: 'Nudo en el estómago, manos frías, pulso acelerado, mente acelerada o en blanco.'
            },
            {
              name: 'Tristeza',
              color: '#3b82f6',
              nuances: ['Decepción', 'Melancolía', 'Apatía', 'Duelo'],
              physicalSensation: 'Pesadez en los hombros y párpados, falta de energía, presión en la garganta y pecho.'
            },
            {
              name: 'Alegría',
              color: '#eab308',
              nuances: ['Satisfacción', 'Alivio', 'Entusiasmo', 'Éxtasis'],
              physicalSensation: 'Sensación de ligereza, sonrisa espontánea, respiración amplia y relajada, calor reconfortante.'
            }
          ]
        },

        // PUNTO 4 — Diario Emocional: Video + Recurso incrustado (misma pantalla)
        {
          id: 'm1a4',
          type: 'iframe',
          title: 'Punto 4 · Diario Emocional — ¿Qué es y cómo usarlo?',
          description: 'Mira el video y explora el recurso incrustado (Animindex-basic).',
          content: [
            `<!doctype html>
            <html lang="es">
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <style>
                body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; color: #101021; }
                .wrap { max-width: 1100px; margin: 0 auto; padding: 12px; }
                .video { position: relative; width: 100%; padding-top: 56.25%; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.15); }
                .video iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
                .heading { margin: 16px 0 8px; }
                .badge { display: inline-block; background: #6e4380; color: #fff; font-weight: 800; padding: 10px 14px; border-radius: 10px; }
                .note { margin: 8px 0 16px; color: #101021; opacity: 0.85; }
                .embed { width: 100%; height: 1300px; border: 0; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.15); }
                @media (max-width: 1024px) { .embed { height: 1200px; } }
                @media (max-width: 640px) { .embed { height: 1100px; } }
              </style>
            </head>
            <body>
              <div class="wrap">
                <div class="video">
                  <iframe src="https://drive.google.com/file/d/1p1mFBU08zTocHveE06feLEY8njPd8Vnn/preview" allow="autoplay; encrypted-media" allowfullscreen title="Diario Emocional — Video"></iframe>
                </div>
                <div class="heading"><span class="badge">Recurso Interactivo — Diario Emocional</span></div>
                <p class="note">Sugerencia de uso: registra activador, emoción (etiqueta precisa), intensidad (0–10), pensamiento principal y acción elegida.</p>
                <iframe class="embed" src="https://ernessofficial.github.io/Animindex-basic/" title="Animindex-basic — Recurso Incrustado"></iframe>
              </div>
            </body>
            </html>`
          ],
          questions: [
            {
              question: '¿Qué elementos mínimos conviene registrar en un diario emocional?',
              options: [
                { text: 'Activador, emoción, intensidad, pensamiento y acción', feedback: 'Correcto. Facilita la autorregulación.' },
                { text: 'Solo la emoción', feedback: 'Insuficiente.' },
                { text: 'Solo el pensamiento', feedback: 'Insuficiente.' },
                { text: 'Nada, solo reflexionar', feedback: 'Registrar ayuda a aprender de patrones.' },
              ],
            },
            {
              question: 'Completa: Más granularidad emocional =',
              options: [
                { text: 'Más opciones de regulación', feedback: 'Correcto.' },
                { text: 'Más confusión', feedback: 'Incorrecto.' },
                { text: 'Menos conciencia', feedback: 'Incorrecto.' },
                { text: 'Igual que no etiquetar', feedback: 'Incorrecto.' },
              ],
            },
            {
              question: 'Una utilidad del diario emocional es…',
              options: [
                { text: 'Detectar patrones y elegir respuestas más conscientes', feedback: 'Correcto.' },
                { text: 'Aumentar la rumiación', feedback: 'Incorrecto.' },
                { text: 'Evitar hablar con otros', feedback: 'Incorrecto.' },
                { text: 'Eliminar emociones “negativas”', feedback: 'No se trata de eliminar, sino de regular.' },
              ],
            },
          ],
        },
      ],
    },

    // ==========================================================
    // MÓDULO 2 — NEUROCIENCIA DE LA REGULACIÓN Y CONTROL DE IMPULSOS
    // (contenido más interactivo, sin repetir recursos previos)
    // ==========================================================
    {
      id: 'm2',
      title: 'Módulo 2: Neurociencia de la Regulación y Control de Impulsos',
      activities: [
        // Punto 1 — Recurso interactivo embebido (HTML+CSS+JS inline)
        {
          id: 'm2a1',
          type: 'iframe',
          title: 'Punto 1 · Del impulso a la elección (recurso interactivo)',
          description: 'Interactúa con el ciclo Señal → Pausa → Etiqueta → Elección directamente en esta pantalla.',
          videoSrc: assetPath('interactive/m2a1-del-impulso-a-la-eleccion.html?v=20251014-1'),
        },
        // Punto 2 — Video corto .mp4 de micro‑hábitos (nuevo)
        {
          id: 'm2a2',
          type: 'video',
          title: 'Punto 2 · Disparadores y Respuestas Regulatorias (video corto)',
          description: 'Aqui tienes 4 casos comunes y 4 micro-respuestas prácticas para bajar la activación y decidir mejor.',
          videoSrc: assetPath('videos/microrespuestas-casos.mp4'),
        },
        // Punto 3 — Cazador de Mitos de Autoregulación
        {
          id: 'm2a3',
          type: 'mythBuster' as any,
          title: 'Punto 3 · Cazador de Mitos de Autoregulación',
          description: 'Desliza o presiona para clasificar cada afirmación como un Mito (Falso) o un Hecho (Verdadero).',
          statements: [
            {
              text: 'Las personas con alta inteligencia emocional nunca experimentan enojo o frustración.',
              isMyth: true,
              explanation: 'Mito. Todos experimentamos ira y frustración; la diferencia radica en la capacidad de pausar y elegir cómo expresar y canalizar esa emoción de forma constructiva.'
            },
            {
              text: 'La respiración profunda prolongada estimula el nervio vago y reduce el ritmo cardíaco casi de inmediato.',
              isMyth: false,
              explanation: 'Hecho. La exhalación larga (como en la técnica 2x2x4) activa el sistema nervioso parasimpático, induciendo un estado físico de calma y seguridad.'
            },
            {
              text: 'Ignorar o tragarse las emociones difíciles ayuda a que desaparezcan más rápidamente.',
              isMyth: true,
              explanation: 'Mito. La supresión emocional intensifica la activación fisiológica de la amígdala a largo plazo. Nombrar y validar lo que sientes disipa su fuerza.'
            },
            {
              text: 'Un "secuestro de la amígdala" anula temporalmente la toma de decisiones lógicas en la corteza prefrontal.',
              isMyth: false,
              explanation: 'Hecho. Ante una amenaza percibida, la amígdala asume el control antes de que la corteza prefrontal pueda procesar la información. De ahí la necesidad de una pausa de 6 segundos.'
            }
          ]
        },
        // Punto 4 — Audio de práctica (nuevo, distinto al m1)
        {
          id: 'm2a4',
          type: 'audio',
          title: 'Punto 4 · Pausa fisiológica 2×2×4 (práctica guiada)',
          description: 'Respira 2 segundos inhalar, 2 sostener, 4 exhalar — 3 ciclos. Relajate y escucha la guía del audio.',
          audioSrc: assetPath('audios/pausafisiologica-guiada.mp3'),
        },
      ],
    },

    // ==========================================================
    // MÓDULO 3 — EL ANTÍDOTO: AUTOCOMPASIÓN Y RESILIENCIA
    // (nuevo contenido interactivo, sin repetir m2)
    // ==========================================================
    {
      id: 'm3',
      title: 'Módulo 3: El Antídoto: Autocompasión y Resiliencia',
      activities: [
        // Punto 1 — Infografía interactiva embebida (srcDoc)
        {
          id: 'm3a1',
          type: 'iframe',
          title: 'Punto 1 · Autocompasión vs. Permiso — Infografía Interactiva',
          description: 'Explora los 3 componentes (bondad, humanidad compartida, mindfulness) y desmitifica la autocompasión con una visual interactiva.',
          content: [
            `<!DOCTYPE html>
            <html lang="es">
            <head>
              <meta charset="UTF-8">
              <title>Autocompasión vs. Permiso – Infografía Interactiva</title>
              <style>
                body {
                  font-family: 'Segoe UI', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
                  margin: 0; padding: 0;
                  background: linear-gradient(135deg, #f5f7fa, #e4edf5);
                  color: #333;
                }
                .container { max-width: 900px; margin: 0 auto; padding: 20px; }
                h1 { text-align: center; color: #2c3e50; font-size: 2.2rem; margin-bottom: 10px; }
                .subtitle { text-align: center; color: #7f8c8d; font-size: 1.1rem; margin-bottom: 24px; }
                .infographic { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; }
                .card {
                  background: white; border-radius: 10px; box-shadow: 0 6px 15px rgba(0,0,0,0.08);
                  padding: 18px; width: 220px; text-align: center; cursor: pointer;
                  transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .card:hover { transform: translateY(-8px); box-shadow: 0 12px 20px rgba(0,0,0,0.15); }
                .card h3 { color: #2980b9; margin-top: 0; }
                .card p { font-size: 0.9rem; color: #555; }
                .card.active { background: #d1ecf1; border: 2px solid #3498db; }
                .detail-panel {
                  margin-top: 24px; padding: 20px; background: white; border-radius: 10px;
                  box-shadow: 0 4px 10px rgba(0,0,0,0.08); display: none;
                }
                .detail-panel h2 { color: #2c3e50; }
                .myth-buster { background: #fff9e6; padding: 15px; border-radius: 8px; margin-top: 16px; border-left: 4px solid #f39c12; }
                .myth-buster h3 { color: #c0392b; margin: 0 0 8px; }
                button { background: #3498db; color: white; border: none; padding: 10px 16px; border-radius: 5px; cursor: pointer; font-size: 1rem; margin-top: 12px; }
                button:hover { background: #2980b9; }
              </style>
            </head>
            <body>
              <div class="container">
                <h1>Autocompasión vs. Permiso</h1>
                <p class="subtitle">Una mirada profunda a la bondad, humanidad compartida, mindfulness y el mito de “ser blando”</p>
                <div class="infographic">
                  <div class="card" data-id="bondad">
                    <h3>1. Bondad Hacia Uno Mismo</h3>
                    <p>Tratarte con amabilidad, especialmente en momentos difíciles.</p>
                  </div>
                  <div class="card" data-id="humanidad">
                    <h3>2. Humanidad Compartida</h3>
                    <p>Reconocer que todos somos imperfectos y pasamos por dificultades.</p>
                  </div>
                  <div class="card" data-id="mindfulness">
                    <h3>3. Mindfulness</h3>
                    <p>Observar tus emociones sin juzgarlas ni reprimir.</p>
                  </div>
                  <div class="card" data-id="mito">
                    <h3>4. Desmitificar</h3>
                    <p>¿Ser compasivo es ser débil? ¡No!</p>
                  </div>
                </div>
                <div class="detail-panel" id="detail-panel">
                  <h2 id="detail-title">Detalle</h2>
                  <p id="detail-content">Haz clic en una sección para ver más información.</p>
                  <div class="myth-buster" id="myth-content" style="display:none;">
                    <h3>❌ Mito: "La autocompasión es permisividad"</h3>
                    <p>✔️ Realidad: La autocompasión fomenta la responsabilidad, no la evasión. Te permite aprender sin castigarte.</p>
                  </div>
                </div>
                <div style="height: 28px"></div>
                <h2 style="text-align:center;color:#2c3e50;font-size:1.4rem;margin:16px 0">Reflexionemos sobre la Validacion Emocional y Los Límites con Critero</h2>
                <div class="vlc">
                  <style>
                    .vlc .container { max-width: 900px; margin: 0 auto; padding: 0; }
                    .vlc .section { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); margin-bottom: 20px; }
                    .vlc .interactive-card { background: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #3498db; }
                    .vlc .btn { background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px; }
                    .vlc .btn:hover { background: #2980b9; }
                    .vlc .scenario { margin: 20px 0; padding: 15px; background: #e3f2fd; border-radius: 8px; }
                    .vlc .response-box { margin-top: 15px; display: none; }
                    .vlc .feedback { padding: 10px; border-radius: 5px; margin-top: 10px; display: none; }
                    .vlc .positive { background: #e8f5e9; color: #2e7d32; }
                    .vlc .negative { background: #ffebee; color: #c62828; }
                    .vlc .reflection { background: #fff8e1; padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #f39c12; }
                  </style>
                  <div class="container">
                    <div class="section">
                      <h2>¿Qué es la validación emocional?</h2>
                      <p>Reconocer, aceptar y comprender las emociones de otra persona sin necesariamente estar de acuerdo con su comportamiento.</p>
                      <div class="interactive-card">
                        <p><strong>Ejemplo:</strong> “Puedo ver que estás muy molesto con lo que pasó. Eso debe haber sido difícil.”</p>
                        <button class="btn" onclick="document.getElementById('vlc-validacion').style.display = (document.getElementById('vlc-validacion').style.display==='block'?'none':'block')">Reflexiona</button>
                        <div class="reflection" id="vlc-validacion" style="display:none;">
                          <p>¿Cómo te sentirías si alguien te validara de esta manera? ¿Qué diferencia hay con que te digan: “No deberías sentirte así”?</p>
                        </div>
                      </div>
                    </div>
                    <div class="section">
                      <h2>¿Y los límites con criterio?</h2>
                      <p>Establecer reglas claras y respetuosas que protejan tu bienestar y el de los demás, sin anular la emoción ajena.</p>
                      <div class="interactive-card">
                        <p><strong>Ejemplo:</strong> “Entiendo que estés molesto, pero no puedo seguir hablando si hay gritos.”</p>
                        <button class="btn" onclick="document.getElementById('vlc-limites').style.display = (document.getElementById('vlc-limites').style.display==='block'?'none':'block')">Reflexiona</button>
                        <div class="reflection" id="vlc-limites" style="display:none;">
                          <p>¿Qué pasa cuando no pones límites? ¿Y cuando los pones de forma rígida?</p>
                        </div>
                      </div>
                    </div>
                    <div class="section">
                      <h2>Escenario práctico</h2>
                      <div class="scenario">
                        <p>Tu amigo/a viene a contarte que se siente frustrado/a porque su pareja no lo/la escucha. Dice que está pensando en terminar la relación.</p>
                        <button class="btn" onclick="document.getElementById('vlc-response-box').style.display='block'">¿Cómo respondes?</button>
                        <div class="response-box" id="vlc-response-box">
                          <button class="btn" data-response="validar">Validar y preguntar: “Eso debe ser frustrante. ¿Qué necesitas?”</button>
                          <button class="btn" data-response="condonar">Decir: “Sí, tu pareja está mal, haz lo que tengas que hacer.”</button>
                          <button class="btn" data-response="limitar">Decir: “Te entiendo, pero no decidas nada hoy. Piénsalo bien.”</button>
                        </div>
                        <div class="feedback" id="vlc-scenario-feedback"></div>
                      </div>
                    </div>
                    <div class="section">
                      <h2>Reflexión final</h2>
                      <div class="reflection">
                        <p>La validación emocional no significa que estés de acuerdo con todo. Es reconocer la emoción de otro como válida. Los límites con criterio no son castigos, sino cuidado mutuo.</p>
                        <p>¿Qué límites has puesto últimamente sin invalidar emociones? ¿Qué validaciones has dado que no significaron permisividad?</p>
                      </div>
                    </div>
                  </div>
                  <script>
                    document.querySelectorAll('.vlc [data-response]').forEach(btn => {
                      btn.addEventListener('click', () => {
                        const response = btn.getAttribute('data-response');
                        const feedback = document.getElementById('vlc-scenario-feedback');
                        if(response==='validar'){
                          feedback.innerHTML = '✅ ¡Excelente! Validaste la emoción y mostraste curiosidad. Esto fortalece la relación y permite explorar soluciones juntos.';
                          feedback.className = 'feedback positive';
                        } else if(response==='condonar'){
                          feedback.innerHTML = '❌ Esta respuesta puede invalidar la posibilidad de reflexión o crecimiento. ¿Estás apoyando el comportamiento o la emoción?';
                          feedback.className = 'feedback negative';
                        } else {
                          feedback.innerHTML = '🟡 Esta respuesta es útil si hay riesgo de decisiones impulsivas. Pero ¿estás validando la emoción? Puedes hacer ambas cosas.';
                          feedback.className = 'feedback negative';
                        }
                        feedback.style.display = 'block';
                      });
                    });
                  </script>
                </div>
              </div>
              <script>
                document.querySelectorAll('.card').forEach(card => {
                  card.addEventListener('click', () => {
                    const id = card.dataset.id;
                    const panel = document.getElementById('detail-panel');
                    const title = document.getElementById('detail-title');
                    const content = document.getElementById('detail-content');
                    const myth = document.getElementById('myth-content');
                    document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                    switch(id) {
                      case 'bondad':
                        title.textContent = 'Bondad Hacia Uno Mismo';
                        content.innerHTML = '<p>Implica tratar tu sufrimiento con amabilidad, en lugar de con dureza o autocrítica.</p><p>¿Cómo? Reconoce tus errores sin castigarte. Pregúntate: “¿Cómo me gustaría que me tratara un amigo en esta situación?”</p>';
                        myth.style.display = 'none';
                        break;
                      case 'humanidad':
                        title.textContent = 'Humanidad Compartida';
                        content.innerHTML = '<p>Te ayuda a no sentirte aislado. Todos cometemos errores. Todos sufrimos.</p><p>Es una forma de conexión humana. No estás solo.</p>';
                        myth.style.display = 'none';
                        break;
                      case 'mindfulness':
                        title.textContent = 'Mindfulness';
                        content.innerHTML = '<p>Observa tus emociones sin juzgarlas ni reprimir. No te sumerjas ni te alejes de ellas.</p><p>Permite que estén, sin reaccionar automáticamente.</p>';
                        myth.style.display = 'none';
                        break;
                      case 'mito':
                        title.textContent = 'Desmitificar la Autocompasión';
                        content.innerHTML = '<p>La autocompasión no significa consentir malos hábitos. Es una forma de motivación interna basada en el respeto.</p>';
                        myth.style.display = 'block';
                        break;
                    }
                    panel.style.display = 'block';
                  });
                });
              </script>
            </body>
            </html>`
          ],
        },
        // Punto 2 — Tu Radar de Resiliencia y Autocompasión
        {
          id: 'm3a2',
          type: 'sliderAssessment' as any,
          title: 'Punto 2 · Tu Radar de Resiliencia y Autocompasión',
          description: 'Ajusta los deslizadores según tu tendencia actual para analizar tu nivel de resiliencia y autocuidado.',
          domains: [
            {
              id: 'bondad_propia',
              name: 'Bondad Propia',
              leftLabel: 'Me castigo y juzgo severamente',
              rightLabel: 'Me hablo con paciencia y apoyo'
            },
            {
              id: 'humanidad_compartida',
              name: 'Humanidad Compartida',
              leftLabel: 'Me siento solo en mi dolor',
              rightLabel: 'Sé que fallar es parte de ser humano'
            },
            {
              id: 'atencion_plena',
              name: 'Atención Plena (Mindfulness)',
              leftLabel: 'Sobredramatizo e ignoro el cuerpo',
              rightLabel: 'Observo mis emociones con calma'
            },
            {
              id: 'resiliencia_activa',
              name: 'Resiliencia Activa',
              leftLabel: 'Me hundo y evito actuar',
              rightLabel: 'Pauso, aprendo y sigo adelante'
            }
          ]
        },
        // Punto 3 — Audio nuevo: “Pausa de amabilidad activa”
        {
          id: 'm3a3',
          type: 'audio',
          title: 'Punto 3 · Pausa de amabilidad activa (3 min)',
          description: 'Práctica breve para suavizar la autocrítica y elegir una acción amable. (NOTA: Relajate y escucha el audio.)',
          audioSrc: assetPath('audios/pausa-amabilidad-activa.mp3'),
        },
        // Punto 4 — Infografía interactiva: Fortalece tu Resiliencia (embebida)
        {
          id: 'm3a4',
          type: 'iframe',
          title: 'Punto 4 · Fortalece Tu Resiliencia — Infografía Interactiva',
          description: 'Conoce los pilares prácticos de la resiliencia y define acciones concretas desde la visual interactiva.',
          content: [
            `<!DOCTYPE html>
            <html lang="es">
            <head>
              <meta charset="UTF-8">
              <title>Fortalece Tu Resiliencia – Infografía Interactiva</title>
              <style>
                body { font-family: 'Segoe UI', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; margin: 0; padding: 0; background: linear-gradient(135deg, #e0f7fa, #f5f5f5); color: #333; }
                .container { max-width: 900px; margin: 0 auto; padding: 20px; }
                h1 { text-align: center; color: #2c3e50; font-size: 2.4rem; margin-bottom: 10px; }
                .subtitle { text-align: center; color: #7f8c8d; font-size: 1.1rem; margin-bottom: 26px; }
                .resiliencia-tree { width: 100%; margin: 20px 0; display: flex; justify-content: center; align-items: center; }
                .resiliencia-tree img { max-width: 100%; max-height: 280px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); }
                .pilares { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px; }
                .pilar { background: white; border-radius: 10px; padding: 15px; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.08); cursor: pointer; transition: transform 0.3s ease; }
                .pilar:hover { transform: scale(1.05); }
                .pilar h3 { color: #2980b9; margin-top: 0; }
                .detalle-pilar { margin-top: 20px; padding: 15px; background: white; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); display: none; }
                .detalle-pilar h2 { color: #2c3e50; }
                .accion { margin-top: 15px; padding: 10px; background: #e3f2fd; border-radius: 5px; font-style: italic; }
                button { background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px; }
                button:hover { background: #2980b9; }
              </style>
            </head>
            <body>
              <div class="container">
                <h1>Fortalece Tu Resiliencia</h1>
                <p class="subtitle">Conoce los pilares que te ayudan a recuperarte y crecer ante la adversidad</p>
                <div class="resiliencia-tree">
                  <img src="https://res.cloudinary.com/djybwowo6/image/upload/v1782833448/el_texto_debe_estar_en_202606301617_ln5lna.jpg" alt="Árbol de resiliencia">
                </div>
                <div class="pilares">
                  <div class="pilar" data-id="conexion"><h3>Conexión con Uno Mismo</h3><p>Autoconocimiento y regulación emocional</p></div>
                  <div class="pilar" data-id="apoyo"><h3>Red de Apoyo</h3><p>Conexión con otros y apoyo social</p></div>
                  <div class="pilar" data-id="adaptabilidad"><h3>Adaptabilidad</h3><p>Flexibilidad ante el cambio</p></div>
                  <div class="pilar" data-id="soluciones"><h3>Enfoque en Soluciones</h3><p>Pensamiento práctico y proactivo</p></div>
                  <div class="pilar" data-id="autoeficacia"><h3>Autoeficacia</h3><p>Confianza en tus propias habilidades</p></div>
                  <div class="pilar" data-id="optimismo"><h3>Optimismo Realista</h3><p>Esperanza con base en la realidad</p></div>
                </div>
                <div class="detalle-pilar" id="detalle-pilar">
                  <h2 id="titulo-pilar">Haz clic en un pilar</h2>
                  <p id="descripcion-pilar">Selecciona un pilar para ver su descripción y una acción práctica.</p>
                  <div class="accion" id="accion-pilar"></div>
                </div>
              </div>
              <script>
                const pilaresData = {
                  conexion: { titulo: 'Conexión con Uno Mismo', descripcion: 'Conocer tus emociones, fortalezas y límites te permite responder con claridad ante la adversidad.', accion: 'Toma 5 minutos hoy para escribir: ¿Qué estoy sintiendo ahora? ¿Qué necesito?' },
                  apoyo: { titulo: 'Red de Apoyo', descripcion: 'Contar con personas de confianza fortalece tu capacidad de afrontamiento.', accion: 'Habla con alguien en quien confíes. Comparte lo que estás viviendo.' },
                  adaptabilidad: { titulo: 'Adaptabilidad', descripcion: 'Aceptar el cambio y ajustarte a nuevas circunstancias es clave para la resiliencia.', accion: 'Reflexiona: ¿Qué puedo aprender de esta situación? ¿Cómo puedo adaptarme?' },
                  soluciones: { titulo: 'Enfoque en Soluciones', descripcion: 'Dirigir la atención a lo que puedes hacer, no solo en lo que no puedes.', accion: 'Escribe una lista con 3 acciones concretas que puedes tomar hoy para mejorar tu situación.' },
                  autoeficacia: { titulo: 'Autoeficacia', descripcion: 'Creer en tu capacidad para superar desafíos fortalece tu confianza.', accion: 'Recuerda una situación pasada en la que superaste un reto. ¿Qué habilidades usaste?' },
                  optimismo: { titulo: 'Optimismo Realista', descripcion: 'Mantener la esperanza sin ignorar la realidad te permite seguir adelante.', accion: 'Busca una luz pequeña en tu situación actual. Puede ser una persona, un valor o una oportunidad.' }
                };
                document.querySelectorAll('.pilar').forEach(pilar => {
                  pilar.addEventListener('click', () => {
                    const id = pilar.dataset.id;
                    const detalle = document.getElementById('detalle-pilar');
                    const titulo = document.getElementById('titulo-pilar');
                    const descripcion = document.getElementById('descripcion-pilar');
                    const accion = document.getElementById('accion-pilar');
                    const data = pilaresData[id];
                    titulo.textContent = data.titulo;
                    descripcion.textContent = data.descripcion;
                    accion.textContent = data.accion;
                    detalle.style.display = 'block';
                  });
                });
              </script>
            </body>
            </html>`
          ]
        },
      ],
    },

    // ==========================================================
    // MÓDULO 4 — EMPATÍA PARA RELACIONES CON CRITERIO
    // (nuevo y sin repetir recursos tal cual; adaptado a la temática)
    // ==========================================================
    {
      id: 'm4',
      title: 'Módulo 4: Empatía para Relaciones con Criterio',
      activities: [
        // Punto 1 — Juego didáctico de Escucha Activa y Curiosidad (embebido)
        {
          id: 'm4a1',
          type: 'iframe',
          title: 'Punto 1 · Escucha Activa y Curiosidad — Juego Didáctico',
          description: 'Reflexiona sobre empatía y hábitos saludables con un juego interactivo.',
          content: [
            `<!DOCTYPE html>
            <html lang="es">
            <head>
              <meta charset="UTF-8">
              <title>Escucha Activa y Curiosidad – Juego Didáctico</title>
              <style>
                body { font-family: 'Segoe UI', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; margin: 0; padding: 0; background: linear-gradient(135deg, #e0f7fa, #f5f5f5); color: #333; }
                .container { max-width: 900px; margin: 0 auto; padding: 20px; }
                h1 { text-align: center; color: #2c3e50; font-size: 2.2rem; margin-bottom: 10px; }
                .subtitle { text-align: center; color: #7f8c8d; font-size: 1.1rem; margin-bottom: 24px; }
                .intro { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); margin-bottom: 24px; }
                .game-container { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); }
                .character { display: flex; align-items: center; margin: 20px 0; }
                .avatar { width: 60px; height: 60px; border-radius: 50%; background: #3498db; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.3rem; margin-right: 15px; }
                .dialogue { background: #f0f8ff; padding: 15px; border-radius: 8px; flex-grow: 1; }
                .options { display: flex; flex-direction: column; gap: 10px; margin-top: 15px; }
                .option-btn { background: #003366; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; text-align: left; font-size: 1rem; }
                .option-btn:hover { background: #004080; }
                .feedback { margin-top: 20px; padding: 15px; border-radius: 5px; display: none; }
                .positive { background: #e8f5e9; color: #2e7d32; }
                .negative { background: #ffebee; color: #c62828; }
                button { background: #3498db; color: white; border: none; padding: 10px 16px; border-radius: 5px; cursor: pointer; margin-top: 15px; }
                button:hover { background: #2980b9; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="video" style="position: relative; width: 100%; padding-top: 56.25%; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.15); margin-bottom: 24px;">
                  <video controls style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;">
                    <source src="/videos/escucha-activa-recurso.webm" type="video/webm">
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h1>Escucha Activa y Curiosidad</h1>
                <p class="subtitle">Un juego para reflexionar sobre la empatía y los hábitos saludables</p>
                <div class="intro">
                  <h2>¿Por qué es importante la empatía?</h2>
                  <p>La empatía, especialmente a través de la escucha activa y la curiosidad genuina, fortalece nuestras relaciones y mejora nuestro bienestar emocional. Escuchar sin juzgar, preguntar con interés y prestar atención plena son hábitos que nutren la conexión humana. Este juego te invita a reflexionar sobre cómo puedes aplicar estos hábitos en tu vida diaria.</p>
                </div>
                <div class="game-container">
                  <h2 id="scene-title"></h2>
                  <div class="character">
                    <div id="character-avatar" class="avatar"></div>
                    <div id="character-dialogue" class="dialogue"></div>
                  </div>
                  <div id="options-container" class="options">
                  </div>
                  <div class="feedback" id="feedback">
                    <p id="feedback-text"></p>
                    <button id="next-btn" style="display:none;">Siguiente escena</button>
                  </div>
                </div>
              </div>
              <script>
                const scenes = [
                  {
                    title: "Escena A: Tu amigo/a comparte un problema",
                    avatar: "A",
                    dialogue: "Últimamente me siento muy solo/a y no sé cómo manejarlo. Siento que nadie me entiende.",
                    options: [
                      { text: "Escuchar con atención y preguntar: ¿Qué te gustaría que hiciéramos?", feedback: "✅ ¡Buena elección! Mostrar curiosidad genuina y escuchar activamente fortalece la conexión y el bienestar emocional. Ayudas a tu amigo/a a sentirse escuchado/a y comprendido/a.", level: "Alto" },
                      { text: "Decir: “Deberías salir más, eso te ayudará”.", feedback: "❌ Esta respuesta puede hacer que tu amigo/a se sienta juzgado/a o incomprendido/a. Intenta escuchar antes de dar consejos.", level: "Bajo" },
                      { text: "Cambiar de tema rápidamente.", feedback: "❌ Ignorar el problema puede alejar la relación. Mostrar interés genuino es clave para el bienestar emocional de ambos.", level: "Bajo" }
                    ]
                  },
                  {
                    title: "Ficha B: Tu pareja está visiblemente molesta",
                    avatar: "B",
                    dialogue: "No puedo creer lo que acaba de pasar. Mi jefe me ha criticado injustamente delante de todo el equipo por un error menor. Estoy furioso/a.",
                    options: [
                      { text: "¿Qué necesitas de mí ahora? ¿Quieres desahogarte o que busquemos una solución?", feedback: "Alto: Demuestra escucha activa al pausar y reconocer el estado emocional. Muestra curiosidad empática al preguntar directamente por las necesidades de la otra persona, priorizando su bienestar emocional sobre una solución inmediata. Este es un hábito saludable que valida los sentimientos.", level: "Alto" },
                      { text: "Relájate, no es para tanto. Ya se te pasará, siempre exagera las cosas.", feedback: "Bajo: Invalida el sentimiento de la pareja y minimiza su experiencia. Esto es una barrera para la empatía y un ejemplo de no escucha. Daña la confianza y la seguridad en la relación. Hábito no saludable.", level: "Bajo" },
                      { text: "Bueno, ¿qué hacemos de cenar? Hablemos de otra cosa.", feedback: "Bajo: Evita el conflicto y la emoción, lo que es un bloqueo a la conexión emocional y la escucha activa. Niega la oportunidad de apoyo y curiosidad genuina sobre la situación. Hábito no saludable de evitación.", level: "Bajo" }
                    ]
                  },
                  {
                    title: "Ficha C: Un/a compañero/a de trabajo te comenta",
                    avatar: "C",
                    dialogue: "He decidido empezar a estudiar un curso a distancia por las noches. Sé que será difícil equilibrarlo con el trabajo, pero estoy muy ilusionado/a.",
                    options: [
                      { text: "¿Qué te motivó a tomar esta decisión? Cuéntame más sobre el curso y cómo te sientes al respecto.", feedback: "Alto: Muestra curiosidad genuina e interés en el proceso de pensamiento y los sentimientos del compañero/a. Refuerza la escucha activa y la empatía al enfocarse en su motivación e ilusión. Fomenta un hábito saludable de apoyo a los proyectos personales.", level: "Alto" },
                      { text: "Yo no lo haría, es demasiada carga. Deberías enfocarte solo en el trabajo.", feedback: "Bajo: Ofrece un juicio o consejo no solicitado basado en la propia perspectiva, sin empatía por la ilusión o esfuerzo del otro. Bloquea la curiosidad y la conexión al desanimar. Hábito no saludable de crítica.", level: "Bajo" },
                      { text: "Genial. Hablando de estudios, ¿sabes si tenemos que entregar el informe mañana?", feedback: "Bajo: Una respuesta superficial que cambia el foco al trabajo inmediatamente, mostrando falta de escucha y desinterés por la vida personal del compañero/a. Hábito no saludable de priorizar la tarea sobre la relación.", level: "Bajo" }
                    ]
                  },
                  {
                    title: "Ficha D: Hablando con un/a familiar estresado/a",
                    avatar: "D",
                    dialogue: "Ya no sé qué hacer con tantas responsabilidades. Siento que estoy fallándole a todo el mundo y que nunca voy a salir de este agujero.",
                    options: [
                      { text: "Parece que te sientes abrumado/a y con mucha presión, ¿verdad? ¿Hay algo que te agobia más en este momento?", feedback: "Alto: Emplea escucha activa a través de la técnica de reflejo (validación emocional), lo cual es muy empático. La pregunta posterior abre un espacio a la curiosidad profunda para entender la raíz del problema. Hábito saludable de validación y profundización.", level: "Alto" },
                      { text: "Anímate, solo tienes que organizarte mejor. ¡No seas tan dramático/a!", feedback: "Bajo: Minimiza y cuestiona la intensidad de la emoción, lo cual es opuesto a la empatía. Ignora la necesidad de ser escuchado/a y ofrece una solución simplista. Hábito no saludable que genera distancia emocional.", level: "Bajo" },
                      { text: "Ay, a mí me pasó algo parecido cuando...", feedback: "Medio/Bajo: Aunque busca conectar, desvía el foco de la otra persona a ti mismo/a, interrumpiendo la escucha activa.", level: "Medio/Bajo" }
                    ]
                  },
                  {
                    title: "Ficha E: Un/a amigo/a con una decisión importante",
                    avatar: "E",
                    dialogue: "Voy a dejar mi trabajo para empezar mi propio negocio, pero la verdad es que estoy aterrado/a. Es un salto de fe muy grande.",
                    options: [
                      { text: "¿Qué es lo que más te asusta y qué es lo que más te ilusiona de este nuevo camino?", feedback: "Alto: Muestra empatía al reconocer la emoción dual (miedo e ilusión). El refuerzo positivo a la valentía es un hábito saludable de apoyo. La curiosidad se centra en las emociones y expectativas del amigo/a, fomentando la apertura.", level: "Alto" },
                      { text: "Estás loco/a. Eso es muy arriesgado. ¿Estás seguro/a de que quieres hipotecar tu futuro así?", feedback: "Bajo: Genera miedo e inseguridad en lugar de apoyo. Es una respuesta de juicio que anula la empatía y la escucha. El tono es de reproche, lo que es un hábito no saludable de crítica destructiva.", level: "Bajo" },
                      { text: "¡Bueno, si quiebras, siempre puedes volver a vivir en casa de tus padres! ¡Jaja!", feedback: "Bajo: Intenta ayudar, pero evita abordar la emoción real (el miedo), demostrando falta de empatía por la seriedad del momento. Bloquea la escucha profunda al usar el humor como distracción. Hábito no saludable de trivializar.", level: "Bajo" }
                    ]
                  }
                ];

                let currentSceneIndex = 0;

                const sceneTitleEl = document.getElementById('scene-title');
                const avatarEl = document.getElementById('character-avatar');
                const dialogueEl = document.getElementById('character-dialogue');
                const optionsContainerEl = document.getElementById('options-container');
                const feedbackEl = document.getElementById('feedback');
                const feedbackTextEl = document.getElementById('feedback-text');
                const nextBtn = document.getElementById('next-btn');

                function renderScene(index) {
                  const scene = scenes[index];
                  sceneTitleEl.textContent = scene.title;
                  avatarEl.textContent = scene.avatar;
                  dialogueEl.textContent = scene.dialogue;
                  
                  optionsContainerEl.innerHTML = '';
                  scene.options.forEach(option => {
                    const button = document.createElement('button');
                    button.className = 'option-btn';
                    button.textContent = option.text;
                    button.addEventListener('click', () => {
                      feedbackTextEl.innerHTML = option.feedback;
                      if (option.level === 'Alto') {
                        feedbackEl.className = 'feedback positive';
                      } else {
                        feedbackEl.className = 'feedback negative';
                      }
                      feedbackEl.style.display = 'block';
                      nextBtn.style.display = 'block';
                    });
                    optionsContainerEl.appendChild(button);
                  });

                  feedbackEl.style.display = 'none';
                  nextBtn.style.display = 'none';
                }

                nextBtn.addEventListener('click', () => {
                  currentSceneIndex++;
                  if (currentSceneIndex < scenes.length) {
                    renderScene(currentSceneIndex);
                  } else {
                    alert('¡Has completado todas las escenas! Gracias por participar. Recuerda: escuchar con curiosidad genuina es un hábito saludable que fortalece el bienestar emocional.');
                    currentSceneIndex = 0; // Optional: reset to play again
                    renderScene(currentSceneIndex);
                  }
                });

                renderScene(currentSceneIndex);
              </script>
            </body>
            </html>`
          ],
        },
        // Punto 2 — Audio: “Escucha atenta 60‑60” (novedad)
        {
          id: 'm4a2',
          type: 'audio',
          title: 'Punto 2 · Práctica: Calibra tu escucha activa',
          description: 'Solo concentrate en escuchar el audio y reconocer los sonidos. Identifica cuando el sonido cambia de zona e intensidad.',
          audioSrc: assetPath('audios/escucha-activa-calibrado.mp3'),
        },
        // Punto 3 — Simulador de Diálogos Asertivos
        {
          id: 'm4a3',
          type: 'interactiveScenario' as any,
          title: 'Punto 3 · Simulador de Diálogos Asertivos',
          description: 'Enfréntate a situaciones de comunicación difíciles y selecciona la opción que combine empatía y límites con criterio.',
          scenarios: [
            {
              context: 'Un colaborador de tu equipo de trabajo entra a tu oficina visiblemente molesto y te reclama delante de otros: "Siempre me asignas las tareas más aburridas e irrelevantes a última hora del viernes".',
              options: [
                {
                  text: 'Responder asertivamente en el momento: "Entiendo que te sientas frustrado/a por la carga de tareas de hoy. Busquemos un espacio el lunes a primera hora a solas para revisar cómo distribuir las asignaciones de forma equitativa".',
                  isOptimal: true,
                  consequence: '¡Excelente elección! Muestra empatía activa reconociendo su frustración, protege su privacidad aplazando la discusión a solas y propone un límite resolutivo de prioridades.'
                },
                {
                  text: 'Reaccionar a la defensiva: "Todos aquí tenemos trabajo aburrido que hacer. Si no te gusta la carga laboral o el horario, habla con el director".',
                  isOptimal: false,
                  consequence: 'Invalida por completo la emoción del colaborador y escala el conflicto innecesariamente, dañando la seguridad del equipo.'
                },
                {
                  text: 'Evitar el conflicto y hacer su tarea: "No te preocupes, déjamela aquí y yo la termino. Puedes irte a casa".',
                  isOptimal: false,
                  consequence: 'Es una respuesta pasiva que no pone límites con criterio. Genera resentimiento personal y no ayuda a tu colaborador a aprender ni a organizarse.'
                }
              ]
            }
          ]
        },
        // Punto 4 — Tablero de Hábitos Emocionales
        {
          id: 'm4a4',
          type: 'habitTrackerBuilder' as any,
          title: 'Punto 4 · Tu Mochila de Hábitos Relacionales',
          description: 'Selecciona hasta 3 micro-hábitos de Inteligencia Emocional y asertividad que te comprometes a entrenar y aplicar en tus relaciones esta semana.',
          habitsToChoose: [
            { category: 'Escucha Activa', text: 'Esperar 3 segundos antes de responder a cualquier persona en una conversación.' },
            { category: 'Asertividad', text: 'Expresar mis peticiones usando la estructura: "Cuando ocurre X, me siento Y, porque necesito Z..."' },
            { category: 'Límites', text: 'Decir "No" amablemente pero con firmeza a cualquier tarea que comprometa mi límite de tiempo.' },
            { category: 'Validación', text: 'Validar explícitamente la emoción de alguien al menos una vez al día ("Veo que te preocupa...").' }
          ],
          maxSelection: 3
        },
      ],
    },

    // ==========================================================
    // QUIZ FINAL — Repaso de los 4 módulos
    // ==========================================================
    {
      id: 'm5',
      title: 'Módulo 5: Quiz Final Integrador',
      activities: [
        {
          id: 'm5a1',
          type: 'text',
          title: 'Punto 1 · La Brújula de Integración Emocional',
          description: 'Reflexión y recapitulación final sobre la aplicación práctica de los 4 pilares en tu vida diaria.',
          content: [
            'Felicidades por llegar al final de este recorrido. Has explorado la base de la Inteligencia Emocional y adquirido herramientas invaluables.',
            'Para que este conocimiento perdure, es fundamental la integración. Recuerda los 4 pilares clave:',
            '1. Conciencia Emocional: Observar sin juzgar y nombrar tus emociones de forma granular.',
            '2. Regulación de Impulsos: Aprovechar el espacio entre el estímulo y la respuesta con micro-pausas.',
            '3. Autocompasión: Hablarte a ti mismo con amabilidad en los momentos de caída y dificultad.',
            '4. Empatía con Criterio: Escuchar activamente al otro sin descuidar ni anular tus límites personales.',
            'A continuación, te invitamos a realizar el Quiz Final Integrador para poner a prueba tu comprensión y consolidar tus nuevas habilidades. ¡Adelante!'
          ]
        },
        {
          id: 'm5a2',
          type: 'quiz',
          title: 'Punto 2 · Evaluación final — 12 preguntas',
          description:
            'Repaso reflexivo de los puntos más relevantes de los cuatro módulos. Lee con calma y elige la mejor respuesta.',
          questions: [
            {
              question: 'Etiquetar con precisión una emoción favorece…',
              options: [
                { text: 'La autorregulación y la toma de perspectiva', feedback: 'Correcto.' },
                { text: 'La supresión emocional', feedback: 'Incorrecto.' },
                { text: 'Respuestas impulsivas', feedback: 'Incorrecto.' },
                { text: 'Desconexión del cuerpo', feedback: 'Incorrecto.' },
              ],
            },
            {
              question: 'Indica la tríada de la autocompasión:',
              options: [
                { text: 'Bondad hacia uno mismo, humanidad compartida, mindfulness', feedback: 'Correcto.' },
                { text: 'Autoindulgencia, aislamiento, distracción', feedback: 'Incorrecto.' },
                { text: 'Autoestima, comparación, exigencia', feedback: 'Incorrecto.' },
                { text: 'Motivación, ambición, resiliencia', feedback: 'Incorrecto.' },
              ],
            },
            {
              question: 'Un micro‑hábito eficaz para frenar el impulso es…',
              options: [
                { text: 'Respiración 2×2×4 con pausa atencional', feedback: 'Correcto.' },
                { text: 'Responder inmediatamente', feedback: 'Incorrecto.' },
                { text: 'Rumiación prolongada', feedback: 'Incorrecto.' },
                { text: 'Aumentar el tono de voz', feedback: 'Incorrecto.' },
              ],
            },
            {
              question: '¿Cuál es un componente conductual de la emoción?',
              options: [
                { text: 'Lenguaje corporal y acciones observables', feedback: 'Correcto.' },
                { text: 'Cambios hormonales', feedback: 'Fisiológico.' },
                { text: 'Evaluación cognitiva', feedback: 'Cognitivo.' },
                { text: 'Memoria autobiográfica', feedback: 'Relacionado, no conductual.' },
              ],
            },
            {
              question: 'La empatía con criterio implica…',
              options: [
                { text: 'Comprender y a la vez cuidar el propio límite', feedback: 'Correcto.' },
                { text: 'Decir a todo que sí', feedback: 'Incorrecto.' },
                { text: 'Evitar expresar necesidades', feedback: 'Incorrecto.' },
                { text: 'Juzgar rápidamente', feedback: 'Incorrecto.' },
              ],
            },
            {
              question: 'Para registrar intensidad emocional puedes usar…',
              options: [
                { text: 'Escala de 0 a 10', feedback: 'Correcto.' },
                { text: 'Solo palabras sueltas', feedback: 'Menos preciso.' },
                { text: 'Colores sin referencia', feedback: 'Menos granular.' },
                { text: 'Ningún registro', feedback: 'No ayuda a aprender.' },
              ],
            },
            {
              question: 'En el caso de María, una acción alineada con “miedo a fallar” sería…',
              options: [
                { text: 'Pedir feedback y clarificar expectativas', feedback: 'Correcto.' },
                { text: 'Trabajar sin pausas', feedback: 'Riesgo de agotamiento.' },
                { text: 'Evitar reuniones', feedback: 'No resuelve.' },
                { text: 'Culpabilizar a otros', feedback: 'No ayuda.' },
              ],
            },
            {
              question: 'Resiliencia cotidiana se construye con…',
              options: [
                { text: 'Pequeñas acciones repetidas y apoyo', feedback: 'Correcto.' },
                { text: 'Solo fuerza de voluntad', feedback: 'Incompleto.' },
                { text: 'Evitar sentir', feedback: 'Incorrecto.' },
                { text: 'Compararte constantemente', feedback: 'Contraproducente.' },
              ],
            },
            {
              question: 'La corteza prefrontal ayuda principalmente a…',
              options: [
                { text: 'Planificar y frenar impulsos', feedback: 'Correcto.' },
                { text: 'Aumentar la reactividad', feedback: 'Incorrecto.' },
                { text: 'Detectar amenaza primaria', feedback: 'Más propio de amígdala.' },
                { text: 'Regular la temperatura', feedback: 'No es el foco.' },
              ],
            },
            {
              question: 'Una técnica de comunicación con criterio es…',
              options: [
                { text: 'Observar, nombrar, pedir, acordar', feedback: 'Correcto.' },
                { text: 'Interrumpir para corregir', feedback: 'Contraproducente.' },
                { text: 'Generalizar (“siempre”, “nunca”)', feedback: 'Escala el conflicto.' },
                { text: 'Evitar decir cómo me siento', feedback: 'Reduce comprensión.' },
              ],
            },
            {
              question: 'Autocompasión en momentos de error significa…',
              options: [
                { text: 'Tratarte con amabilidad y aprender', feedback: 'Correcto.' },
                { text: 'Negar lo ocurrido', feedback: 'Incorrecto.' },
                { text: 'Castigarte para mejorar', feedback: 'No eficaz.' },
                { text: 'Culpar a otros', feedback: 'No asume responsabilidad.' },
              ],
            },
            {
              question: 'Para gestionar una reacción impulsiva, lo primero es…',
              options: [
                { text: 'Pausar y volver al cuerpo', feedback: 'Correcto. Luego decide.' },
                { text: 'Responder rápido', feedback: 'Impulsivo.' },
                { text: 'Justificarme', feedback: 'No ayuda.' },
                { text: 'Buscar culpables', feedback: 'No regula.' },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default course;