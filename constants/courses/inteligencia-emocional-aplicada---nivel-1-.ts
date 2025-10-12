import type { Course } from '../../types';
import { mockInstructor } from './courseData';

export const course: Course = {
  id: 'programa-inteligencia-emocional-nivel-1',
  title: 'Programa de Inteligencia Emocional Aplicada - Nivel 1',
  subtitle: 'Conciencia emocional, autorregulación, autocompasión y empatía práctica',
  description:
    'Un recorrido práctico y profundamente humano para desarrollar habilidades emocionales esenciales: reconocer, nombrar y regular emociones; cultivar autocompasión y resiliencia; y relacionarnos con empatía y criterio. Nivel 1 del programa de AnImiKdemi.',
  category: 'Inteligencia Emocional Aplicada',
  broadCategories: ['Autoconocimiento', 'Gestión Emocional', 'Habilidades Sociales'],
  coverImage: '/images/iea_nivel1_cover.png',
  instructor: mockInstructor,
  learningObjectives: [
    'Reconocer y etiquetar con precisión las emociones propias y ajenas.',
    'Comprender los componentes neurobiológicos clave de la regulación e impulsar hábitos de control de impulsos.',
    'Practicar autocompasión basada en evidencia para fortalecer la resiliencia cotidiana.',
    'Aplicar empatía con límites y criterio para mejorar relaciones y comunicación.',
  ],
  modules: [
    // ==========================
    // MÓDULO 1
    // ==========================
    {
      id: 'm1',
      title: 'Conciencia y Etiquetado Emocional',
      activities: [
        // Punto 1 — Bienvenida y contexto
        {
          id: 'm1a1',
          type: 'video',
          title: 'Bienvenida y contexto del curso',
          description:
            'Introducción al Nivel 1 del Programa de Inteligencia Emocional Aplicada. Qué verás en cada módulo y cómo aprovechar la experiencia de forma práctica e interactiva.',
          // Mantener la URL de Google Drive según indicación del usuario
          videoSrc:
            'https://drive.google.com/file/d/1jxCqgtCO4roxd6Uw3sf-kXXuiiA2xjUr/view?usp=sharing',
        },
        {
          id: 'm1a2',
          type: 'text',
          title: 'Transcripción del Video — Bienvenida',
          description: 'Texto de apoyo para acompañar el video de bienvenida.',
          content: [
            '¡Hola! Te damos la más cordial bienvenida a Animikdemi, el primer nivel de nuestro programa de Inteligencia Emocional Aplicada. Estás a punto de iniciar un viaje de autodescubrimiento y transformación diseñado para equiparte con habilidades emocionales esenciales para una vida más plena y consciente.',
            'En este espacio interactivo y dinámico, no solo aprenderás teoría, sino que aplicarás herramientas prácticas para entender, gestionar y utilizar tus emociones de forma inteligente en tu día a día.',
            'El Nivel 1 de Animikdemi está estructurado en cuatro módulos fundamentales, cada uno diseñado para construir una base sólida en tu desarrollo emocional:',
            '1) Conciencia y Etiquetado Emocional: Aprenderás a reconocer y nombrar con precisión lo que sientes. ¡Entender el lenguaje de tus emociones es el primer paso para gobernarlas!',
            '2) Neurociencia de la Regulación y Control de Impulsos: Descubrirás cómo funciona tu cerebro ante el estrés y las reacciones impulsivas, y desarrollarás estrategias efectivas para tomar el control.',
            '3) Autocompasión y Resiliencia: Exploraremos el poder de la amabilidad hacia ti mismo, una clave fundamental para superar la adversidad y recuperarte con fuerza y valentía.',
            '4) Empatía para Relaciones con Criterio: Finalmente, expandirás tu habilidad para entender a los demás, sentando las bases para construir conexiones auténticas, saludables y con un propósito claro.',
            'Recuerda: este es un curso interactivo. Tu participación activa, tu reflexión y tu apertura a la práctica son la llave maestra para desbloquear todo su potencial. Prepárate para experimentar, aprender y crecer. ¡Bienvenido a Animikdemi!'
          ],
        },
        {
          id: 'm1a3',
          type: 'quiz',
          title: 'Quiz — Vocabulario Emocional (6 preguntas)',
          description: 'Evalúa tu vocabulario emocional básico antes de continuar.',
          questions: [
            {
              question: '¿Qué significa etiquetar una emoción?',
              options: [
                { text: 'Ponerle un nombre preciso a lo que siento', feedback: 'Correcto. Nombrar con precisión mejora la autorregulación.' },
                { text: 'Ignorar lo que siento para que pase', feedback: 'Incorrecto. Ignorar no es etiquetar.' },
                { text: 'Expresar cualquier reacción sin filtro', feedback: 'Incorrecto. Etiquetar es reconocer, no reaccionar.' },
                { text: 'Buscar la causa externa de mis emociones', feedback: 'Parcial. La causa puede ayudar, pero etiquetar es nombrar la emoción.' },
              ],
            },
            {
              question: '¿Cuál es un ejemplo de emoción básica?',
              options: [
                { text: 'Alegría', feedback: 'Correcto.' },
                { text: 'Motivación', feedback: 'Incorrecto. Es un estado/motivador, no emoción básica.' },
                { text: 'Autoestima', feedback: 'Incorrecto. Es un constructo, no emoción básica.' },
                { text: 'Imaginación', feedback: 'Incorrecto.' },
              ],
            },
            {
              question: 'El término «granularidad emocional» se refiere a…',
              options: [
                { text: 'La capacidad de diferenciar emociones sutiles', feedback: 'Correcto. Más granularidad = mayor regulación.' },
                { text: 'La intensidad máxima de una emoción', feedback: 'Incorrecto.' },
                { text: 'El tiempo que dura una emoción', feedback: 'Incorrecto.' },
                { text: 'El número de emociones que existen', feedback: 'Incorrecto.' },
              ],
            },
            {
              question: 'Cuando digo “tengo nerviosismo y anticipación”, estoy…',
              options: [
                { text: 'Etiquetando con mayor precisión', feedback: 'Correcto. Dos etiquetas finas aportan claridad.' },
                { text: 'Confundiéndome más', feedback: 'Incorrecto.' },
                { text: 'Evitando mis emociones', feedback: 'Incorrecto.' },
                { text: 'Sobreintelectualizando', feedback: 'No necesariamente. La fineza ayuda a la regulación.' },
              ],
            },
            {
              question: '¿Qué suele ocurrir cuando nombramos con precisión lo que sentimos?',
              options: [
                { text: 'Disminuye la reactividad y aumenta la claridad', feedback: 'Correcto. Nombrar regula.' },
                { text: 'Aumenta la intensidad siempre', feedback: 'Incorrecto.' },
                { text: 'Se vuelven permanentes', feedback: 'Incorrecto.' },
                { text: 'Desaparecen en segundos', feedback: 'No necesariamente; pero ayuda a gestionarlas.' },
              ],
            },
            {
              question: 'Selecciona la opción con dos emociones diferentes:',
              options: [
                { text: 'Tristeza y melancolía', feedback: 'Parcial. Son cercanas, pero válidas como matices.' },
                { text: 'Rabia y frustración', feedback: 'Correcto. Comparten base, pero son distintas.' },
                { text: 'Cansancio y agotamiento', feedback: 'No son emociones; son estados físicos.' },
                { text: 'Pensamiento y juicio', feedback: 'No son emociones.' },
              ],
            },
          ],
        },

        // Punto 2 — La emoción y el etiquetado
        {
          id: 'm1a4',
          type: 'text',
          title: 'Lectura para reflexionar: La Emoción',
          description:
            'Comprende la emoción como una respuesta compleja y breve con componentes fisiológicos, cognitivos y conductuales.',
          content: [
            'Una emoción suele vivirse como una ráfaga: una respuesta intensa y de corta duración que nuestro organismo genera ante un estímulo relevante (algo que vemos, recordamos o anticipamos).',
            '1. Componente Fisiológico (Cuerpo) 🧠🫀: Cambios en ritmo cardiaco, respiración, tensión muscular y hormonas del estrés o del bienestar. Estas señales preparan al organismo para responder.',
          ],
        },
        {
          id: 'm1a5',
          type: 'text',
          title: 'Componente Cognitivo (Pensamientos) 🤔',
          description: 'Interpretación y etiquetado que damos a la situación y al cuerpo.',
          content: [
            'Este componente es la interpretación, evaluación y etiquetado que le damos a la situación y a nuestras sensaciones corporales. Nuestros pensamientos dan sentido a la experiencia emocional: no es lo mismo etiquetar “miedo” que “anticipación”.',
            'Desarrollar vocabulario emocional amplía nuestra capacidad de regulación. Más palabras, más opciones de acción consciente.',
          ],
        },
        {
          id: 'm1a6',
          type: 'text',
          title: 'Componente Conductual (Acción) 🗣️',
          description: 'La emoción también se expresa en acciones, gestos y voz.',
          content: [
            'Es la expresión observable de la emoción. Incluye nuestras acciones, expresiones faciales, tono de voz y lenguaje corporal.',
            'Ejemplos: gritar o fruncir el ceño (ira), llorar o encoger los hombros (tristeza), sonreír y abrir la postura (alegría).',
          ],
        },
        { id: 'm1a7', type: 'text', title: 'Imagen: Circuito Emoción-Cuerpo', description: 'Infografía de apoyo.', content: ['[Imagen referencial]'], },
        { id: 'm1a8', type: 'text', title: 'Imagen: Pensamientos y Etiquetas', description: 'Mapa mental de etiquetas emocionales.', content: ['[Imagen referencial]'], },

        // Punto 3 — Importancia del etiquetado
        {
          id: 'm1a9',
          type: 'text',
          title: 'Estudio de Caso: Nombrar cambia la historia',
          description: 'Caso práctico para reflexionar sobre la utilidad de etiquetar con precisión.',
          content: [
            'Situación: María, gerente de proyectos de 35 años, se siente abrumada por entregas ajustadas y reuniones tensas. Últimamente, está irritable, duerme mal y discute más con su pareja. Dice “estoy estresada”, pero no sabe si es frustración, ansiedad, miedo al error o sensación de injusticia.',
            'Al diferenciar: “tensión + frustración + miedo a fallar”, María puede diseñar respuestas específicas: pausas activas para la tensión, negociación para la frustración, y pedir feedback para el miedo.',
            'Preguntas para la reflexión: 1) ¿Cómo habría sido diferente su experiencia si hubiera podido nombrar emociones con precisión? 2) ¿Qué estrategias le sugerirías para ampliar su vocabulario emocional y gestionar mejor sus estados?'
          ],
        },

        // Punto 4 — Diario emocional
        {
          id: 'm1a10',
          type: 'text',
          title: 'Video: ¿Qué es el Diario Emocional?',
          description:
            'Dale play y conoce cómo el Diario Emocional puede ser tu aliado cotidiano.',
          content: [
            'Video: https://drive.google.com/file/d/1p1mFBU08zTocHveE06feLEY8njPd8Vnn/view?usp=sharing',
          ],
        },
        {
          id: 'm1a11',
          type: 'text',
          title: 'Ya puedes comenzar tu Diario Emocional',
          description: 'Accede al recurso e inicia tu registro diario.',
          content: [
            'Iniciar diario: https://ernessofficial.github.io/Animindex-basic/',
            'Sugerencia: registra activador, emoción (con etiqueta precisa), intensidad (0-10), pensamiento principal y acción elegida.',
          ],
        },
        {
          id: 'm1a12',
          type: 'quiz',
          title: 'Quiz — Diario Emocional (8 preguntas)',
          description:
            'Un breve repaso por este gran paso en tu aprendizaje sobre tus emociones.',
          questions: [
            {
              question: '¿Qué elementos mínimos conviene registrar en un diario emocional?',
              options: [
                { text: 'Activador, emoción, intensidad, pensamiento y acción', feedback: 'Correcto. Ese esquema facilita la autorregulación.' },
                { text: 'Solo la emoción', feedback: 'Insuficiente. Faltan activador, intensidad y acción.' },
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
                { text: 'Eliminar emociones negativas', feedback: 'Ninguna emoción debe “eliminarse”; se regula.' },
              ],
            },
            {
              question: '¿Qué escala simple puedes usar para la intensidad?',
              options: [
                { text: '0 a 10', feedback: 'Correcto.' },
                { text: '0 a 3', feedback: 'Posible, pero menos granular.' },
                { text: 'A/B/C', feedback: 'Demasiado vaga.' },
                { text: 'Rojo/Verde', feedback: 'Metáfora útil, pero menos precisa.' },
              ],
            },
            {
              question: '¿Cuál es una acción reguladora compatible con tensión + frustración?',
              options: [
                { text: 'Pausa fisiológica + negociación del alcance', feedback: 'Correcto. Combina cuerpo y contexto.' },
                { text: 'Ignorar la situación', feedback: 'Poco efectivo.' },
                { text: 'Exigirte más sin pausa', feedback: 'Riesgo de agotamiento.' },
                { text: 'Culpabilizar al equipo', feedback: 'No aporta regulación.' },
              ],
            },
            {
              question: 'Etiquetar “ansiedad anticipatoria” en vez de “estrés” es un ejemplo de…',
              options: [
                { text: 'Granularidad emocional', feedback: 'Correcto.' },
                { text: 'Supresión emocional', feedback: 'Incorrecto.' },
                { text: 'Catastrofismo', feedback: 'Incorrecto.' },
                { text: 'Evitar sentir', feedback: 'Incorrecto.' },
              ],
            },
            {
              question: 'El diario emocional funciona mejor cuando…',
              options: [
                { text: 'Se usa con constancia y curiosidad', feedback: 'Correcto.' },
                { text: 'Solo en crisis extremas', feedback: 'Mejor si también en lo cotidiano.' },
                { text: 'Se comparte siempre en público', feedback: 'No es necesario. Es personal.' },
                { text: 'Se rellena una vez al año', feedback: 'Demasiado poco frecuente.' },
              ],
            },
            {
              question: 'Una barrera habitual para escribir es… y una solución es…',
              options: [
                { text: 'Falta de tiempo → micro-registros de 1 minuto', feedback: 'Correcto. Manténlo simple y sostenible.' },
                { text: 'No tener emociones → esperar a sentir', feedback: 'Todos sentimos; observa señales sutiles.' },
                { text: 'No saber escribir → no hacerlo', feedback: 'Siempre hay alternativas simples o voz a texto.' },
                { text: 'Miedo a juzgarse → abandonar', feedback: 'Practica amabilidad y curiosidad.' },
              ],
            },
          ],
        },
      ],
    },

    // ==========================
    // MÓDULO 2
    // ==========================
    {
      id: 'm2',
      title: 'Neurociencia de la Regulación y Control de Impulsos',
      activities: [
        // Punto 1
        {
          id: 'm2a1',
          type: 'text',
          title: 'Mapa rápido del cerebro emocional',
          description:
            'Comprende el papel funcional de corteza prefrontal, sistema límbico y cuerpo en la regulación de impulsos.',
          content: [
            'La autorregulación integra tres capas: (1) Señales del cuerpo (interocepción), (2) Respuestas automáticas del sistema límbico, y (3) Dirección consciente de la corteza prefrontal.',
            'Prefrontal = planificación y freno; Amígdala = detección de amenaza; Ínsula = lectura de estado corporal. Trabajan en equipo para modular la conducta.',
          ],
        },
        // Punto 2
        {
          id: 'm2a2',
          type: 'video',
          title: 'Micro-hábitos de regulación (video)',
          description:
            'Demostración práctica de 3 micro-hábitos para bajar activación y decidir mejor.',
          videoSrc: '/videos/micro_habitos_regulacion.mp4',
        },
        // Punto 3
        {
          id: 'm2a3',
          type: 'audio',
          title: 'Práctica guiada: Pausa fisiológica 2×2×4',
          description:
            'Audio breve para activar el freno prefrontal mediante respiración y atención corporal.',
          audioSrc: '/audios/pausa_224.mp3',
        },
        // Punto 4
        {
          id: 'm2a4',
          type: 'reflectionTree',
          title: 'Árbol de decisiones ante el impulso',
          description:
            'Explora un mapa de opciones: Detectar señal → Pausar → Nombrar → Elegir micro-acción.',
        },
        // Recurso extra
        {
          id: 'm2a5',
          type: 'text',
          title: 'Checklist anti-impulso en 30 segundos',
          description: 'Guía rápida imprimible para tu día a día.',
          content: [
            '1) Alto corporal (respira y descruza). 2) Nombra 1 emoción. 3) Evalúa riesgo/beneficio. 4) Elige la mínima acción eficaz. 5) Revisa resultado en 10 min.',
          ],
        },
      ],
    },

    // ==========================
    // MÓDULO 3
    // ==========================
    {
      id: 'm3',
      title: 'El Antídoto: Autocompasión y Resiliencia',
      activities: [
        // Punto 1
        {
          id: 'm3a1',
          type: 'text',
          title: 'Qué es autocompasión (y qué no es)',
          description:
            'Diferencia entre autocompasión, lástima y permisividad. La autocompasión fortalece, no debilita.',
          content: [
            'Autocompasión = bondad hacia uno mismo + humanidad compartida + mindfulness. No es autoindulgencia: implica actuar en favor del propio bienestar a largo plazo.',
          ],
        },
        // Punto 2
        {
          id: 'm3a2',
          type: 'audio',
          title: 'Práctica: Mano en el pecho y frase de amabilidad',
          description:
            'Ejercicio breve para regular autocrítica y activar cuidado.',
          audioSrc: '/audios/mano_en_el_pecho.mp3',
        },
        // Punto 3
        {
          id: 'm3a3',
          type: 'text',
          title: 'Resiliencia cotidiana',
          description:
            'Pequeñas acciones repetidas que te devuelven al centro tras un revés.',
          content: [
            '1) Rituales de recuperación (sueño, movimiento, conexión). 2) Reencuadre cognitivo. 3) Pedir ayuda a tiempo. 4) Propósito y valores como brújula.',
          ],
        },
        // Punto 4
        {
          id: 'm3a4',
          type: 'upload',
          title: 'Mi kit de resiliencia',
          description:
            'Sube una página con tus 5 recordatorios de autocompasión + 3 acciones de resiliencia realistas para esta semana.',
        },
      ],
    },

    // ==========================
    // MÓDULO 4
    // ==========================
    {
      id: 'm4',
      title: 'Empatía para Relaciones con Criterio',
      activities: [
        // Punto 1
        {
          id: 'm4a1',
          type: 'text',
          title: 'Empatía con límites saludables',
          description:
            'La empatía no es complacer: es comprender con criterio y cuidar el propio límite.',
          content: [
            'Componentes: curiosidad genuina, escucha activa, validación, y límites claros. Empatía efectiva = comprensión + acción responsable.',
          ],
        },
        // Punto 2
        {
          id: 'm4a2',
          type: 'video',
          title: 'Demostración: Escucha activa en 3 niveles',
          description:
            'Video práctico para pasar de escuchar para responder a escuchar para comprender.',
          videoSrc: '/videos/escucha_activa_niveles.mp4',
        },
        // Punto 3
        {
          id: 'm4a3',
          type: 'text',
          title: 'Comunicación con criterio',
          description:
            'Diálogo que une empatía y límites: observar, nombrar, pedir, acordar.',
          content: [
            'Modelo breve: 1) Observo X, 2) Me siento Y, 3) Necesito Z, 4) ¿Podemos acordar…? Mantén tono y cuerpo abiertos.',
          ],
        },
        // Punto 4
        {
          id: 'm4a4',
          type: 'feedbackForm',
          title: 'Simulador de conversaciones difíciles',
          description:
            'Escoge un caso y practica un mensaje empático con criterio. Recibirás feedback del instructor.',
        },
      ],
    },

    // ==========================
    // QUIZ FINAL (repaso de los 4 módulos)
    // ==========================
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
                { text: 'La autorregulación y la toma de perspectiva', feedback: 'Correcto. Nombrar reduce reactividad.' },
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
              question: 'Un micro-hábito eficaz para frenar el impulso es…',
              options: [
                { text: 'Respiración 2×2×4 con pausa atencional', feedback: 'Correcto. Activa el freno prefrontal.' },
                { text: 'Responder inmediatamente', feedback: 'Incorrecto.' },
                { text: 'Rumiación prolongada', feedback: 'Incorrecto.' },
                { text: 'Aumentar el tono de voz', feedback: 'Incorrecto.' },
              ],
            },
            {
              question: '¿Cuál es un componente conductual de la emoción?',
              options: [
                { text: 'Lenguaje corporal y acciones observables', feedback: 'Correcto.' },
                { text: 'Cambios hormonales', feedback: 'Fisiológico, no conductual.' },
                { text: 'Evaluación cognitiva', feedback: 'Cognitivo.' },
                { text: 'Memoria autobiográfica', feedback: 'Relacionado, pero no conductual.' },
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
                { text: 'Colores sin referencia', feedback: 'Útil, pero menos granular.' },
                { text: 'Ningún registro', feedback: 'No ayuda a aprender.' },
              ],
            },
            {
              question: 'En el caso de María, una acción alineada con “miedo a fallar” sería…',
              options: [
                { text: 'Pedir feedback y clarificar expectativas', feedback: 'Correcto. Atiende la causa percibida.' },
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
                { text: 'Regular la temperatura', feedback: 'Función autonómica, no central aquí.' },
              ],
            },
            {
              question: 'Una técnica de comunicación con criterio es…',
              options: [
                { text: 'Observar, nombrar, pedir, acordar', feedback: 'Correcto.' },
                { text: 'Interrumpir para corregir', feedback: 'Contraproducente.' },
                { text: 'Generalizar (“siempre”, “nunca”)', feedback: 'Escala conflicto.' },
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
                { text: 'Pausar y volver al cuerpo', feedback: 'Correcto. Luego decidir.' },
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
