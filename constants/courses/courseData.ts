import type { Course, Instructor } from '../../types';

export const mockInstructor: Instructor = {
    name: 'Ernesto Mendoza',
    title: 'Master en Terapia Conductual & Reintegracion Social',
    avatarUrl: '/images/instructor_avatar.png', 
    bio: 'Ernesto cuenta con una amplia formación que incluye un Master en Terapia Conductual por la Universidad Europea a Distancia y Un Master en Justicia Restaurativa & Reintegración Social por la University of Portsmouth en el Reino Unido.Con mas de 15 años de experiencia te guiara en este viaje con un estilo empático, honesto y basado en evidencia, para que obtengas herrameintas practicas para la gestión de tus emociones.'
}; 

export const courseData: Course = {
  id: 'autoconocimiento-101',
  title: 'El Viaje del Autoconocimiento',
  subtitle: 'Descubre tus valores, creencias y potencial para construir una vida más auténtica.',
  description: 'Este curso es una inmersión profunda en el núcleo de tu ser. A través de una serie de módulos interactivos, reflexiones guiadas y ejercicios prácticos, te embarcarás en un viaje para desentrañar las capas de tu identidad. Aprenderás a identificar tus valores fundamentales, a cuestionar y transformar creencias que te limitan, y a cultivar una mentalidad de crecimiento que te permitirá enfrentar los desafíos de la vida con resiliencia y autenticidad. No es solo un curso, es una herramienta para construir una relación más honesta y compasiva contigo mismo.',
  category: 'Autoconciencia & Regulación emocional',
  broadCategories: ['Autoconocimiento', 'Gestión Emocional'],
  coverImage: '/images/course_cover_1.png',
  instructor: mockInstructor,
  learningObjectives: [
    'Identificar y priorizar tus valores personales fundamentales.',
    'Reconocer y diferenciar entre creencias limitantes y potenciadoras.',
    'Aplicar técnicas para cultivar una mentalidad de crecimiento.',
    'Desarrollar una mayor autoconciencia emocional en situaciones cotidianas.',
    'Crear un plan de acción personal para el desarrollo continuo.'
  ],
  modules: [
    {
      id: 'm1',
      title: 'Módulo 1: El Punto de Partida',
      activities: [
        {
          id: 'm1a1',
          type: 'video',
          title: 'Bienvenida al Viaje',
          description: 'Una introducción a los conceptos clave del autoconocimiento y lo que exploraremos en este curso.',
          videoSrc: '/videos/intro.mp4',
        },
        {
          id: 'm1a2',
          type: 'text',
          title: '¿Qué es el Autoconocimiento?',
          description: 'Profundiza en la definición y la importancia de conocerse a uno mismo para el desarrollo personal.',
          content: [
            "El autoconocimiento es el proceso reflexivo por el cual una persona adquiere noción de su yo, de sus cualidades y defectos, de sus limitaciones, necesidades, aficiones y temores. Es la base de la inteligencia emocional, nos permite vivir de forma más consciente y tomar decisiones alineadas con nuestros verdaderos deseos y valores.",
            "• Autoconciencia emocional: Reconocer nuestras propias emociones y cómo afectan a nuestros pensamientos y comportamiento.",
            "• Autoevaluación precisa: Conocer nuestras fortalezas y debilidades.",
            "• Confianza en uno mismo: Seguridad en la valoración que hacemos sobre nosotros mismos y sobre nuestras capacidades.",
            "En este módulo, sentaremos las bases para que puedas construir un mapa detallado de tu mundo interior. ¡Empecemos!"
          ]
        },
        {
          id: 'm1a3',
          type: 'quiz',
          title: 'Reflexión Inicial',
          description: 'Un breve cuestionario para que tomes conciencia de tu estado actual de autoconocimiento.',
          questions: [
            {
              question: 'Cuando enfrentas un desafío inesperado, ¿cuál es tu reacción más común?',
              options: [
                { text: 'Me siento abrumado/a y no sé por dónde empezar.', feedback: 'Reconocer esta sensación es el primer paso. A lo largo del curso, aprenderemos a gestionar esa abrumación y a encontrar claridad.' },
                { text: 'Busco inmediatamente una solución práctica, a veces sin pensar en cómo me siento.', feedback: 'La acción es importante, pero también lo es entender la emoción que la impulsa. Exploraremos cómo conectar ambas.' },
                { text: 'Intento analizar la situación objetivamente para entenderla mejor.', feedback: 'El análisis es una gran herramienta. Veremos cómo complementarla con la intuición y la conciencia emocional.' },
                { text: 'Pido ayuda o consejo a alguien de confianza.', feedback: 'Apoyarse en otros es una fortaleza. El autoconocimiento también te ayudará a saber qué tipo de ayuda necesitas.' },
              ]
            },
            {
              question: '¿Con qué frecuencia dedicas tiempo exclusivamente a reflexionar sobre tus pensamientos y sentimientos?',
              options: [
                { text: 'Casi nunca, mi día a día es muy ajetreado.', feedback: 'Es un desafío común. Descubriremos técnicas sencillas para integrar la reflexión en tu rutina sin que te quite mucho tiempo.' },
                { text: 'A veces, cuando algo importante sucede.', feedback: 'Eso es un buen comienzo. Aprenderás a hacer de la reflexión un hábito proactivo, no solo reactivo.' },
                { text: 'Regularmente, intento tener mis momentos de introspección.', feedback: '¡Excelente! Este curso te dará nuevas herramientas y perspectivas para enriquecer esos momentos.' },
                { text: 'Constantemente, a veces pienso demasiado las cosas.', feedback: 'La introspección es clave, pero también lo es evitar la rumiación. Aprenderemos a diferenciar y a encontrar un equilibrio saludable.' },
              ]
            },
          ],
        },
        {
          id: 'm1a4',
          type: 'evaluation',
          title: 'Evaluación del Módulo 1',
          description: 'Responde a estas preguntas para consolidar lo que has aprendido en este módulo.',
          questions: [
            { prompt: 'Según lo que has visto, ¿por qué crees que el autoconocimiento es importante para tu vida en este momento?' },
            { prompt: 'Describe una situación reciente en la que una mejor comprensión de tus emociones podría haber cambiado el resultado.' }
          ]
        },
      ]
    },
    {
      id: 'm2',
      title: 'Módulo 2: Explorando tu Identidad',
      activities: [
        {
          id: 'm2a1',
          type: 'audio',
          title: 'Meditación Guiada: Conectando con tus Valores',
          description: 'Un ejercicio de audio para ayudarte a identificar tus valores fundamentales de una manera intuitiva y profunda.',
          audioSrc: '/audios/meditacion.mp3',
          content: [
            "(Música suave de fondo)",
            "Encuentra una postura cómoda, sentado o acostado. Cierra los ojos suavemente.",
            "Toma tres respiraciones profundas. Inhalando por la nariz, llenando tus pulmones por completo. Y exhalando lentamente por la boca, soltando cualquier tensión.",
            "Ahora, trae a tu mente un momento en tu vida en el que te sentiste profundamente feliz y satisfecho/a. Un momento en el que todo se sentía bien, en el que sentías que estabas siendo tú mismo/a.",
            "Revive ese momento. ¿Qué estabas haciendo? ¿Con quién estabas? ¿Qué cualidades o principios estaban presentes en esa situación? Quizás era la creatividad, la conexión, la libertad, la seguridad...",
            "No lo pienses demasiado. Solo deja que las palabras o sensaciones emerjan. Esos son tus valores en acción.",
            "(Pausa)",
            "Ahora, poco a poco, trae tu conciencia de vuelta a la habitación. Mueve suavemente los dedos de las manos y los pies. Y cuando estés listo/a, abre los ojos.",
            "Anota las palabras o sentimientos que surgieron. Esos son pistas importantes sobre lo que realmente valoras."
          ]
        },
        {
          id: 'm2a2',
          type: 'reflectionTree',
          title: 'Mi Árbol de la Reflexión',
          description: 'Una actividad interactiva para visualizar tus valores, creencias y logros, construyendo una imagen clara de quién eres.',
          imageSrc: '/images/tree_illustration.png',
        },
        {
          id: 'm2a3',
          type: 'upload',
          title: 'Comparte tu Creación',
          description: 'Sube una imagen de tu "Árbol de la Reflexión" o un documento con tus reflexiones para guardarlo en tu progreso.',
        }
      ]
    },
    {
      id: 'm3',
      title: 'Módulo 3: Creencias Limitantes vs. Potenciadoras',
      activities: [
        {
          id: 'm3a1',
          type: 'text',
          title: 'El Poder de tus Creencias',
          description: 'Entiende cómo tus creencias, conscientes e inconscientes, moldean tu realidad y tus acciones.',
          content: [
            "Nuestras creencias son los filtros a través de los cuales vemos el mundo. Actúan como profecías autocumplidas: si crees que no puedes hacer algo, probablemente no lo intentarás con todas tus fuerzas. Si crees que eres capaz, buscarás la manera de lograrlo.",
            "Existen dos tipos principales de creencias:",
            "• Creencias Limitantes: Son ideas que nos restringen, nos impiden crecer y alcanzar nuestro potencial. Ejemplos: 'No soy lo suficientemente bueno/a', 'Es demasiado tarde para cambiar', 'El fracaso es algo terrible'.",
            "• Creencias Potenciadoras: Son ideas que nos impulsan, nos dan fuerza y nos abren a nuevas posibilidades. Ejemplos: 'Puedo aprender cualquier cosa que me proponga', 'Cada error es una oportunidad de aprendizaje', 'Merezco ser feliz'.",
            "El primer paso para cambiar una creencia limitante es identificarla y tomar conciencia de ella. En la siguiente actividad, haremos exactamente eso."
          ]
        },
        {
          id: 'm3a2',
          type: 'cardGame',
          title: 'Juego de Pares: Identifica y Transforma',
          description: 'Encuentra las parejas de creencias limitantes y sus correspondientes creencias potenciadoras para entrenar tu mente a pensar de forma más constructiva.',
          cards: [
            { id: 1, matchId: 1, text: 'No soy lo suficientemente bueno/a para ese puesto.', type: 'limiting' },
            { id: 2, matchId: 1, text: 'Tengo las habilidades y la capacidad de aprender para tener éxito.', type: 'empowering' },
            { id: 3, matchId: 2, text: 'Si fracaso, será una catástrofe.', type: 'limiting' },
            { id: 4, matchId: 2, text: 'El fracaso es una oportunidad para aprender y crecer.', type: 'empowering' },
            { id: 5, matchId: 3, text: 'No puedo pedir ayuda, pareceré débil.', type: 'limiting' },
            { id: 6, matchId: 3, text: 'Pedir ayuda es un signo de fortaleza y autoconciencia.', type: 'empowering' },
            { id: 7, matchId: 4, text: 'Es demasiado tarde para aprender algo nuevo.', type: 'limiting' },
            { id: 8, matchId: 4, text: 'Nunca es tarde para crecer y adquirir nuevas habilidades.', type: 'empowering' },
          ]
        },
      ]
    },
    {
      id: 'm4',
      title: 'Módulo 4: La Mentalidad de Crecimiento',
      activities: [
        {
          id: 'm4a1',
          type: 'video',
          title: 'Mentalidad Fija vs. Mentalidad de Crecimiento',
          description: 'Un video explicativo sobre la teoría de Carol Dweck y cómo puede transformar tu forma de enfrentar los desafíos.',
          videoSrc: '/videos/mindset.mp4',
        },
        {
          id: 'm4a2',
          type: 'feedbackForm',
          title: 'Práctica: Recibiendo Feedback',
          description: 'Simula diferentes escenarios de feedback para practicar una respuesta desde la mentalidad de crecimiento, sin tomarlo como algo personal.',
        },
      ]
    },
    {
      id: 'm5',
      title: 'Módulo 5: Integración y Plan de Acción',
      activities: [
        {
          id: 'm5a1',
          type: 'finalChallenge',
          title: 'Desafío Final: Tu Plan de Acción',
          description: 'Es hora de poner todo en práctica. Crea un plan concreto para seguir desarrollando tu autoconocimiento más allá de este curso.',
        }
      ]
    },
  ]
};
