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
  id: 'programa-inteligencia-emocional-nivel-1',
  title: 'Programa de Inteligencia Emocional Aplicada - Nivel 1',
  subtitle: 'Conciencia emocional, autorregulación, autocompasión y empatía práctica',
  description:
    'Un recorrido práctico para desarrollar habilidades emocionales esenciales: reconocer y etiquetar emociones, regular impulsos, cultivar autocompasión y comunicarnos con empatía y criterio. Nivel 1 del programa de AnImiKdemi.',
  category: 'Inteligencia Emocional Aplicada',
  broadCategories: ['Autoconocimiento', 'Gestión Emocional', 'Habilidades Sociales'],
  coverImage: assetPath('images/inteligencia-emocional-aplicada---nivel-1-_portada.png'),
  instructor: mockInstructor,
  learningObjectives: [
    'Reconocer y etiquetar con precisión las emociones propias y ajenas.',
    'Aplicar micro-hábitos de regulación para mejorar el control de impulsos.',
    'Practicar autocompasión basada en evidencia como base de la resiliencia.',
    'Usar empatía con límites y criterio para mejorar relaciones y comunicación.',
  ],
  modules: [
    // ==========================================================
    // MÓDULO 1 — CONCIENCIA Y ETIQUETADO EMOCIONAL (reorganizado)
    // ==========================================================
    {
      id: 'm1',
      title: 'Conciencia y Etiquetado Emocional',
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
          type: 'text',
          title: 'Punto 2 · Lectura para reflexionar: La emoción y su etiquetado',
          description: 'Lee de corrido los 3 componentes y observa las imágenes de apoyo en esta misma pantalla.',
          content: [
            'La emoción suele vivirse como una ráfaga: una respuesta intensa y de corta duración que surge ante un estímulo relevante (algo que vemos, recordamos o anticipamos).',
            '1) Componente Fisiológico (Cuerpo) 🧠🫀 — Cambios en ritmo cardiaco, respiración, tensión muscular y hormonas del estrés/bienestar. Estas señales preparan al organismo para responder.',
            '2) Componente Cognitivo (Pensamientos) 🤔 — Interpretación, evaluación y etiquetado de la situación y de nuestras sensaciones corporales. No es lo mismo etiquetar “miedo” que “anticipación”. Más vocabulario = más regulación.',
            '3) Componente Conductual (Acción) 🗣️ — Expresión observable: acciones, gestos, tono de voz y postura. Ejemplos: gritar o fruncir el ceño (ira), llorar o encoger hombros (tristeza), sonreír y abrir la postura (alegría).',
            'Imagen · Circuito emoción‑cuerpo → /images/circuito_emocion_cuerpo.png',
            'Imagen · Pensamientos y etiquetas → /images/mapa_pensamientos_etiquetas.png',
          ],
        },

        // PUNTO 3 — Estudio de caso + formulario para escribir y guardar
        {
          id: 'm1a3',
          type: 'feedbackForm',
          title: 'Punto 3 · Estudio de caso: Nombrar cambia la historia',
          description:
            'Lee el caso y responde en los campos de texto. Usa “Guardar” para almacenar tus respuestas en tu progreso del curso.',
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
                .embed { width: 100%; height: 1200px; border: 0; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.15); }
                @media (max-width: 1024px) { .embed { height: 1100px; } }
                @media (max-width: 640px) { .embed { height: 1000px; } }
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
      title: 'Neurociencia de la Regulación y Control de Impulsos',
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
          title: 'Punto 2 · Micro‑hábitos de regulación (video corto)',
          description: 'Demostración práctica de 3 micro‑hábitos para bajar activación y decidir mejor.',
          videoSrc: assetPath('videos/micro_habitos_regulacion.mp4'),
        },
        // Punto 3 — Juego de cartas: disparadores vs. respuestas regulatorias
        {
          id: 'm2a3',
          type: 'cardGame',
          title: 'Punto 3 · Juego: Disparador ↔ Respuesta regulatoria',
          description: 'Empareja disparadores comunes con micro‑respuestas efectivas.',
          cards: [
            { id: 1, matchId: 101, text: 'Correo urgente a última hora', type: 'limiting' },
            { id: 2, matchId: 102, text: 'Comentario crítico en reunión', type: 'limiting' },
            { id: 3, matchId: 103, text: 'Notificación constante en el móvil', type: 'limiting' },
            { id: 4, matchId: 104, text: 'Tráfico/espera inesperada', type: 'limiting' },
            { id: 101, matchId: 1, text: 'Respiración 2×2×4 + clarificar prioridad', type: 'empowering' },
            { id: 102, matchId: 2, text: 'Pausa de 10 segundos + parafraseo', type: 'empowering' },
            { id: 103, matchId: 3, text: 'Silenciar 20 min + lote de respuestas', type: 'empowering' },
            { id: 104, matchId: 4, text: 'Escaneo corporal + música neutra', type: 'empowering' },
          ],
        },
        // Punto 4 — Audio de práctica (nuevo, distinto al m1)
        {
          id: 'm2a4',
          type: 'audio',
          title: 'Punto 4 · Pausa fisiológica 2×2×4 (práctica guiada)',
          description: 'Respira 2 segundos inhalar, 2 sostener, 4 exhalar — 3 ciclos.',
          audioSrc: assetPath('audios/pausa_224.mp3'),
        },
      ],
    },

    // ==========================================================
    // MÓDULO 3 — EL ANTÍDOTO: AUTOCOMPASIÓN Y RESILIENCIA
    // (nuevo contenido interactivo, sin repetir m2)
    // ==========================================================
    {
      id: 'm3',
      title: 'El Antídoto: Autocompasión y Resiliencia',
      activities: [
        // Punto 1 — Mini‑presentación en tarjetas
        {
          id: 'm3a1',
          type: 'text',
          title: 'Punto 1 · Autocompasión, no permisividad',
          description: 'Tarjetas para comprender los 3 componentes y mitos frecuentes.',
          content: [
            'Tarjeta 1 — Bondad hacia uno mismo: habla contigo como a un buen amigo.',
            'Tarjeta 2 — Humanidad compartida: no estás solo/a en la dificultad.',
            'Tarjeta 3 — Mindfulness: observa sin juicio para elegir mejor.',
            'Mito común: “ser blando”. Realidad: la autocompasión impulsa acciones saludables a largo plazo.',
          ],
        },
        // Punto 2 — Juego de cartas: autocrítica ↔ reencuadre compasivo
        {
          id: 'm3a2',
          type: 'cardGame',
          title: 'Punto 2 · Juego: De la autocrítica al cuidado efectivo',
          description: 'Empareja frases de autocrítica con respuestas compasivas y accionables.',
          cards: [
            { id: 1, matchId: 201, text: '“Siempre arruino todo”', type: 'limiting' },
            { id: 2, matchId: 202, text: '“No debería sentirme así”', type: 'limiting' },
            { id: 3, matchId: 203, text: '“Si descanso, soy flojo/a”', type: 'limiting' },
            { id: 201, matchId: 1, text: '“Estoy aprendiendo; ¿qué micro‑paso ahora?”', type: 'empowering' },
            { id: 202, matchId: 2, text: '“Es humano sentir; respiro y nombro lo que hay”', type: 'empowering' },
            { id: 203, matchId: 3, text: '“Descansar repone recursos; agendo 10 min”', type: 'empowering' },
          ],
        },
        // Punto 3 — Audio nuevo: “Pausa de amabilidad activa”
        {
          id: 'm3a3',
          type: 'audio',
          title: 'Punto 3 · Pausa de amabilidad activa (3 min)',
          description: 'Práctica breve para suavizar la autocrítica y elegir una acción amable.',
          audioSrc: assetPath('audios/pausa_amabilidad.mp3'),
        },
        // Punto 4 — Desafío final del módulo (distinto a uploads previos)
        {
          id: 'm3a4',
          type: 'finalChallenge',
          title: 'Punto 4 · Desafío: Resiliencia en 72 horas',
          description:
            'Define 1 contratiempo reciente y completa: (1) qué pasó, (2) qué sentiste/etiqueta, (3) qué reencuadre compasivo aplicarás, (4) 2 micro‑acciones realistas antes de 72 h.',
        },
      ],
    },

    // ==========================================================
    // MÓDULO 4 — EMPATÍA PARA RELACIONES CON CRITERIO
    // (nuevo y sin repetir recursos tal cual; adaptado a la temática)
    // ==========================================================
    {
      id: 'm4',
      title: 'Empatía para Relaciones con Criterio',
      activities: [
        // Punto 1 — Mini‑presentación en tarjetas: empatía con límites
        {
          id: 'm4a1',
          type: 'text',
          title: 'Punto 1 · Empatía con límites saludables',
          description: 'Tarjetas: curiosidad, escucha, validación y límites claros.',
          content: [
            'Tarjeta 1 — Curiosidad genuina: pregunta para comprender, no para responder.',
            'Tarjeta 2 — Escucha activa: parafrasea y verifica comprensión.',
            'Tarjeta 3 — Validación emocional: reconocer la experiencia del otro.',
            'Tarjeta 4 — Límite con criterio: cuida tu energía y tus acuerdos.',
          ],
        },
        // Punto 2 — Audio: “Escucha atenta 60‑60” (novedad)
        {
          id: 'm4a2',
          type: 'audio',
          title: 'Punto 2 · Práctica: Escucha atenta 60‑60',
          description: '60 segundos escuchas, 60 segundos sintetizas; repite 2 rondas.',
          audioSrc: assetPath('audios/escucha_6060.mp3'),
        },
        // Punto 3 — Juego de cartas: necesidad ↔ petición clara
        {
          id: 'm4a3',
          type: 'cardGame',
          title: 'Punto 3 · Juego: De la necesidad a la petición',
          description: 'Empareja necesidades frecuentes con una petición concreta y respetuosa.',
          cards: [
            { id: 1, matchId: 301, text: 'Necesito claridad en tareas', type: 'limiting' },
            { id: 2, matchId: 302, text: 'Necesito tiempo para concentrarme', type: 'limiting' },
            { id: 3, matchId: 303, text: 'Necesito apoyo emocional', type: 'limiting' },
            { id: 301, matchId: 1, text: '“¿Podemos acordar checklist antes del viernes?”', type: 'empowering' },
            { id: 302, matchId: 2, text: '“¿Podemos bloquear 2 h sin reuniones?”', type: 'empowering' },
            { id: 303, matchId: 3, text: '“¿Podrías escucharme 10 min sin aconsejar?”', type: 'empowering' },
          ],
        },
        // Punto 4 — Reto guiado (distinto al del m3)
        {
          id: 'm4a4',
          type: 'finalChallenge',
          title: 'Punto 4 · Reto: Conversación con criterio',
          description:
            'Elige un tema real y escribe: (1) Observación, (2) Emoción, (3) Necesidad, (4) Petición clara. Practícalo con alguien de confianza.',
        },
      ],
    },

    // ==========================================================
    // QUIZ FINAL — Repaso de los 4 módulos
    // ==========================================================
    {
      id: 'm5',
      title: 'Quiz Final Integrador',
      activities: [
        {
          id: 'm5a1',
          type: 'quiz',
          title: 'Evaluación final — 12 preguntas',
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
