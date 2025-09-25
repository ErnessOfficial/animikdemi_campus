import type { Course, Instructor } from '../../types';
import { assetPath } from '../../utils/paths';

export const mockInstructor: Instructor = {
    name: 'Ernesto Mendoza',
    title: 'Master en Terapia Conductual & Reintegracion Social',
    avatarUrl: assetPath('images/instructor_avatar.png'), 
    bio: 'Ernesto cuenta con una amplia formación que incluye un Master en Terapia Conductual por la Universidad Europea a Distancia y Un Master en Justicia Restaurativa & Reintegración Social por la University of Portsmouth en el Reino Unido.Con mas de 15 años de experiencia te guiara en este viaje con un estilo empático, honesto y basado en evidencia, para que obtengas herrameintas practicas para la gestión de tus emociones.'
}; 

export const courseData: Course = {
  id: 'autoconocimiento-101',
  title: 'El Viaje del Autoconocimiento',
  subtitle: 'Descubre tus valores, creencias y potencial para construir una vida más auténtica.',
  description: 'Este curso es una inmersión profunda en el núcleo de tu ser. A través de una serie de módulos interactivos, reflexiones guiadas y ejercicios prácticos, te embarcarás en un viaje para desentrañar las capas de tu identidad. Aprenderás a identificar tus valores fundamentales, a cuestionar y transformar creencias que te limitan, y a cultivar una mentalidad de crecimiento que te permitirá enfrentar los desafíos de la vida con resiliencia y autenticidad. No es solo un curso, es una herramienta para construir una relación más honesta y compasiva contigo mismo.',
  category: 'Autoconciencia & Regulación emocional',
  broadCategories: ['Autoconocimiento', 'Gestión Emocional'],
  coverImage: assetPath('images/course_cover_1.png'),
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
          title: 'Te Doy la Bienvenida a este Viaje',
          description: 'Una introducción a los conceptos clave del autoconocimiento y lo que exploraremos en este curso.',
          videoSrc: assetPath('videos/intro.mp4'),
          content: [
            "Ya estás a un paso de comenzar el recorrido por los lugares dentro de ti que a veces olvidamos visitar, pero lo importante es que vas a reencontrarte con alguien que te está esperando con muchas ansias y emoción de reconectar contigo y de aquí en adelante fortalecer vuestra unión. Te reencontrarás contigo, con esa parte de ti que por las prisas, las circunstancias y un sin fin de cosas más que no son tu culpa, se fue quedando atrás. Pero eso es hasta este momento.",
            "La falta de autoconocimiento emocional puede manifestarse de diversas maneras, afectando la vida personal y las interacciones con el entorno. Las personas con un bajo nivel de autoconocimiento a menudo exhiben una incapacidad para entender cómo se sienten los demás, llegando incluso a creer que otras personas son 'demasiado sensibles' a las emociones. Tienden a la atribución externa, culpando a otros por los problemas o fracasos en lugar de asumir responsabilidades.",
            "Cuando les sobrevienen emociones muy intensas, pueden sentirse desbordados, ya que no tienen práctica en lidiar con emociones menos intensas. Esto se traduce frecuentemente en relaciones interpersonales deficientes o conflictivas, debido a la falta de habilidades necesarias para mantener vínculos fructíferos. Los conflictos recurrentes son comunes, ya que no se comunican de forma correcta en momentos de desacuerdo.",
            "Otros indicadores incluyen la dificultad para alcanzar metas, un vocabulario emocional limitado que restringe la expresión de estados afectivos, y una actitud defensiva donde todo es percibido como un ataque personal, impidiendo la aceptación de críticas constructivas. El contacto social puede resultar agotador, llevando a la evitación de interacciones. También se observa una tendencia a basarse en prejuicios rígidos y a anclarse en el error sin aprender de él.",
            "Además, estas personas pueden experimentar una presencia elevada de emociones desagradables como miedo, tristeza, culpa, ira y aburrimiento, y tener una notable dificultad para identificar y nombrar sus propios estados emocionales.",
            "Espero que te haya llenado de motivación el video, así que te espero en la siguiente estación."
          ]
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
          ],
          imageSrc: assetPath('images/autoconocimiento001.png')
        },
        {
          id: 'm1a3',
          type: 'quiz',
          title: 'Reflexión Inicial',
          description: 'Un breve cuestionario para que tomes conciencia de tu estado actual de autoconocimiento.',
          ui: {
            optionBgColor: '#dfe2e2',
            optionTextColor: '#101021'
          },
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
          audioSrc: assetPath('audios/meditacion.mp3'),
          content: [
            "Detente un momento.",
            "Este es tu espacio para respirar y recuperar la calma.",
            "Cierra suavemente los ojos, si lo deseas. Toma aire lentamente por la nariz… y suéltalo despacio por la boca. Inhala calma… exhala tensión…",
            "Hazlo una vez más… Siente cómo con cada respiración tu cuerpo comienza a relajarse. Lleva tu atención a tus hombros. Déjalos caer, suelta el peso. Relaja tu mandíbula, tu frente… y permite que tu cuerpo descanse.",
            "Si algún pensamiento aparece, obsérvalo como si fuera una nube en el cielo. Déjalo pasar… y vuelve a tu respiración. Inhala calma. Exhala preocupación.",
            "Permanece unos instantes aquí… simplemente respirando… sintiendo paz en este momento.",
            "Ahora, suavemente, mueve tus manos, tus pies.",
            "Abre los ojos despacio…",
            "y recuerda: este estado de calma está siempre disponible dentro de ti."
          ]
        },
        {
          id: 'm2a2',
          type: 'reflectionTree',
          title: 'Mi Árbol de la Reflexión',
          description: 'Una actividad interactiva para visualizar tus valores, creencias y logros, construyendo una imagen clara de quién eres.',
          imageSrc: assetPath('images/tree_illustration.png'),
        },
        {
          id: 'm2a3',
          type: 'upload',
          title: 'Comparte tu Creación',
          description: 'Sube una imagen de tu "Árbol de la Reflexión" o un documento con tus reflexiones para guardarlo en tu progreso.',
          introText: 'Para entender tus valores, creencias y logros, puedes usar la metáfora del Árbol de la Reflexión. 🌳 Este módulo de autoconocimiento te guiará para que explores las raíces, el tronco, las ramas y los frutos de tu ser.',
          infoCards: [
            {
              title: 'Valores (Las Raíces)',
              color: '#f3e8ff',
              body: 'Los valores son los principios fundamentales que guían tus decisiones y acciones en la vida. Son la base de tu identidad y lo que consideras más importante. Por ejemplo, si valoras la honestidad, es probable que la busques en tus relaciones y la practiques en tu día a día. Cierra los ojos y visualiza tu árbol. ¿Qué valores son los más importantes para ti? Piensa en qué te guía. ¿Es la familia, la libertad, el respeto, la creatividad? Imagina que cada uno de estos valores es una raíz fuerte que te ancla a la tierra. Escríbelos.'
            },
            {
              title: 'Creencias (El Tronco)',
              color: '#ffe4e6',
              body: 'Las creencias son las ideas y suposiciones que has aceptado como verdaderas sobre ti mismo, los demás y el mundo. Actúan como el tronco de tu árbol, dando forma a tu percepción de la realidad. Si crees que eres capaz, te será más fácil enfrentar nuevos desafíos, mientras que una creencia limitante ("no soy lo suficientemente bueno") puede frenarte. Sigue visualizando tu árbol. Examina el tronco. ¿Qué ideas tienes sobre ti mismo? ¿Crees que eres digno de amor, que puedes superar obstáculos, que mereces el éxito? Identifica tanto tus creencias que te potencian como aquellas que te limitan. Escríbelas y decide cuáles quieres nutrir.'
            },
            {
              title: 'Logros (Las Ramas y los Frutos)',
              color: '#e0f2fe',
              body: 'Los logros son las metas que has alcanzado, los hitos que has superado y las experiencias de las que te sientes orgulloso. Son los resultados visibles de tus acciones, y representan el crecimiento de tus ramas y la cosecha de tus frutos. Ahora, mira las ramas de tu árbol. Cada rama es un área de tu vida (familia, trabajo, estudios, hobbies). En las puntas de esas ramas, visualiza los frutos: tus logros. ¿Qué has conseguido? ¿Un título, un viaje, una amistad duradera, un proyecto personal que terminaste? Reconoce cada uno de estos logros, sin importar lo pequeños que parezcan, y escríbelos.'
            }
          ],
          closingText: 'Al completar este ejercicio, no solo habrás identificado las partes de tu "árbol", sino que habrás reconocido la conexión entre ellas. Tus valores (raíces) alimentan tus creencias (tronco), y de ellas nacen tus acciones, que dan lugar a tus logros (ramas y frutos). 🌳'
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
          type: 'interactiveInvisible',
          title: 'La Trampa Invisible (Parte 1)',
          description: 'Explora cómo las creencias limitantes funcionan como un muro interno y conecta con una experiencia personal para detectarlas.',
        },
        {
          id: 'm3a3',
          type: 'reframeWall',
          title: 'Derribando el Muro (Parte 3)',
          description: 'Convierte una creencia limitante en una potenciadora, busca tu contra-ejemplo y define una acción concreta.',
        },
        {
          id: 'm3a4',
          type: 'cardGame',
          title: 'Juego de Pares: Identifica y Transforma',
          description: 'Encuentra las parejas de creencias limitantes y sus correspondientes creencias potenciadoras para entrenar tu mente a pensar de forma más constructiva.',
          imageSrc: assetPath('images/juegomodulo3.png'),
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
          videoSrc: assetPath('videos/mindset.mp4'),
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
