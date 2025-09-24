import type { Course } from '../../types';
import { mockInstructor } from './courseData';

export const courseDataMindfulness: Course = {
  id: 'mindfulness-101',
  title: 'Conectando con tu Calma Interior',
  subtitle: 'Mindfulness para reducir el estrés y la ansiedad.',
  description: 'Este curso es una guía práctica y compasiva para desarrollar la atención plena. Aprenderás a anclarte en el presente, a observar tus pensamientos sin juicio y a cultivar una actitud de calma y aceptación ante los desafíos de la vida. A través de meditaciones guiadas, ejercicios sencillos y reflexiones, descubrirás un refugio de serenidad dentro de ti mismo.',
  category: 'Ansiedad, Estrés y Calma',
  broadCategories: ['Gestión Emocional'],
  coverImage: '/images/course_cover_4.png',
  instructor: mockInstructor,
  learningObjectives: [
    'Comprender los principios fundamentales del mindfulness y sus beneficios.',
    'Utilizar la respiración como una herramienta para calmar el sistema nervioso.',
    'Observar pensamientos y emociones sin quedar atrapado/a en ellos.',
    'Integrar prácticas de atención plena en las actividades de la vida diaria.',
    'Cultivar una actitud de autocompasión y aceptación.',
  ],
  modules: [
    {
      id: 'm1',
      title: 'Módulo 1: Fundamentos del Mindfulness',
      activities: [
        {
          id: 'm1a1',
          type: 'video',
          title: 'Te doy la bienvenida a tu Refugio Interior',
          description: 'Una introducción al curso, donde sentaremos las bases de nuestro viaje hacia la calma y la atención plena.',
          videoSrc: '/videos/intro.mp4', // Placeholder video
        },
        {
          id: 'm1a2',
          type: 'text',
          title: '¿Qué es (y qué no es) el Mindfulness?',
          description: 'Aclaramos conceptos clave y desmentimos los mitos más comunes sobre la práctica del mindfulness.',
          content: [
            "El mindfulness, o atención plena, es la conciencia que surge al prestar atención de manera intencional, en el momento presente y sin juzgar. No se trata de poner la mente en blanco, sino de observar lo que sucede (pensamientos, emociones, sensaciones) con una actitud de curiosidad y aceptación.",
            "• NO es una religión: Aunque tiene raíces en tradiciones contemplativas, el mindfulness es una práctica secular respaldada por la ciencia.",
            "• NO es para eliminar pensamientos: El objetivo no es detener los pensamientos, sino cambiar nuestra relación con ellos, observándolos como nubes que pasan por el cielo de nuestra mente.",
            "• NO es solo para relajarse: Aunque la relajación es un efecto secundario frecuente, el objetivo principal es cultivar la conciencia y la claridad mental, incluso en momentos difíciles."
          ]
        },
        {
          id: 'm1a3',
          type: 'audio',
          title: 'Práctica de la Respiración Consciente (3 Minutos)',
          description: 'Tu primera meditación guiada. Un ejercicio simple y poderoso para anclarte en el aquí y ahora.',
          audioSrc: '/audios/meditacion.mp3', // Placeholder audio
          content: [
            "(Sonido suave de una campana)",
            "Encuentra una postura cómoda, con la espalda erguida pero no rígida. Puedes cerrar los ojos si te sientes a gusto.",
            "Lleva tu atención al flujo natural de tu respiración. Siente el aire entrando por tu nariz, llenando tus pulmones, y saliendo de nuevo.",
            "No necesitas cambiar nada. Simplemente observa. Siente cómo tu abdomen se expande suavemente al inhalar y se contrae al exhalar.",
            "Es normal que tu mente se distraiga. Cuando notes que te has ido, simplemente reconoce a dónde fue tu pensamiento y, con amabilidad, guía tu atención de vuelta a la respiración.",
            "Cada vez que regresas, fortaleces tu músculo de la atención. Permanece así, respirando, por unos momentos más.",
            "(Sonido suave de una campana)"
          ]
        },
        {
          id: 'm1a4',
          type: 'quiz',
          title: 'Mitos y Realidades del Mindfulness',
          description: 'Comprueba lo que has aprendido sobre los conceptos básicos de la atención plena.',
          questions: [
            {
              question: 'El objetivo principal del mindfulness es...',
              options: [
                { text: 'Dejar la mente completamente en blanco.', feedback: 'Incorrecto. El objetivo no es eliminar los pensamientos, sino observarlos sin juzgar y sin dejarse arrastrar por ellos.' },
                { text: 'Alcanzar un estado de relajación profunda inmediata.', feedback: 'Si bien la relajación es un beneficio común, el objetivo principal es cultivar la conciencia y la atención al momento presente.' },
                { text: 'Prestar atención al momento presente de forma intencional y sin juicio.', feedback: '¡Correcto! Esa es la definición clásica del mindfulness: una conciencia amable y sin prejuicios de lo que está sucediendo ahora mismo.' },
              ]
            }
          ],
        },
      ]
    },
    {
      id: 'm2',
      title: 'Módulo 2: El Cuerpo como Ancla al Presente',
      activities: [
        {
          id: 'm2a1',
          type: 'audio',
          title: 'Meditación Guiada: Escaneo Corporal',
          description: 'Un viaje de atención a través de tu cuerpo para reconectar con tus sensaciones físicas y liberar tensiones.',
          audioSrc: '/audios/meditacion.mp3', // Placeholder audio
        },
        {
          id: 'm2a2',
          type: 'text',
          title: 'El Piloto Automático: Reconociendo tus Patrones',
          description: 'Descubre cómo operamos en "piloto automático" la mayor parte del tiempo y cómo el mindfulness nos ayuda a tomar las riendas.',
          content: [
              "¿Alguna vez has llegado a tu destino sin recordar el camino? ¿O has comido algo sin saborearlo? Eso es el piloto automático. Es un estado mental en el que realizamos acciones de forma mecánica, mientras nuestra mente divaga por el pasado o el futuro. Si bien es útil para tareas sencillas, nos hace perdernos gran parte de nuestra vida.",
              "El mindfulness es el antídoto al piloto automático. Al traer la atención a nuestras sensaciones corporales, como en el escaneo corporal, o a una tarea cotidiana, rompemos el hechizo de la distracción y volvemos a habitar plenamente nuestra experiencia."
          ]
        },
        {
          id: 'm2a3',
          type: 'evaluation',
          title: 'Diario de Sensaciones',
          description: 'Reflexiona sobre tu experiencia con el escaneo corporal y tu conciencia corporal en general.',
          questions: [
            { prompt: 'Describe una sensación en tu cuerpo que notaste durante el escaneo corporal y que normalmente pasas por alto.' },
            { prompt: '¿En qué momento del día de hoy notaste que estabas funcionando en "piloto automático"? ¿Cómo podrías haber introducido un momento de atención plena en esa situación?' }
          ]
        }
      ]
    },
    {
      id: 'm3',
      title: 'Módulo 3: Navegando el Paisaje de los Pensamientos',
      activities: [
        {
          id: 'm3a1',
          type: 'video',
          title: 'Observando los Pensamientos sin Juicio',
          description: 'Aprende a ver tus pensamientos como eventos mentales pasajeros en lugar de verdades absolutas.',
          videoSrc: '/videos/mindset.mp4', // Placeholder video
        },
        {
          id: 'm3a2',
          type: 'cardGame',
          title: 'Juego: Pensamiento Ancla vs. Pensamiento Nube',
          description: 'Identifica los pensamientos que te arrastran (nubes) y transfórmalos en pensamientos que te anclan al presente (anclas).',
          cards: [
            { id: 1, matchId: 1, text: 'Siempre me equivoco en esto.', type: 'limiting' },
            { id: 2, matchId: 1, text: 'Estoy aprendiendo. Este es un pensamiento, no un hecho.', type: 'empowering' },
            { id: 3, matchId: 2, text: 'Esta sensación de ansiedad nunca se irá.', type: 'limiting' },
            { id: 4, matchId: 2, text: 'Siento ansiedad ahora. Es una sensación temporal y puedo respirar con ella.', type: 'empowering' },
            { id: 5, matchId: 3, text: 'Debería estar haciendo algo más productivo.', type: 'limiting' },
            { id: 6, matchId: 3, text: 'En este momento, elijo descansar. Es una acción valiosa.', type: 'empowering' },
          ]
        },
      ]
    },
    {
        id: 'm4',
        title: 'Módulo 4: Mindfulness en la Vida Cotidiana',
        activities: [
          {
            id: 'm4a1',
            type: 'text',
            title: 'Micro-prácticas de Mindfulness',
            description: 'Descubre cómo integrar la atención plena en tus actividades diarias con ejercicios de 1 a 5 minutos.',
            content: [
                "No necesitas sentarte a meditar durante una hora para beneficiarte del mindfulness. Puedes transformar cualquier actividad en una práctica:",
                "• Café/Té Consciente: En lugar de beberlo en piloto automático, tómate un minuto para sentir el calor de la taza, oler el aroma, y saborear realmente el primer sorbo.",
                "• Caminata Consciente: Siente el contacto de tus pies con el suelo con cada paso. Nota el aire en tu piel, los sonidos a tu alrededor.",
                "• Escucha Consciente: En tu próxima conversación, intenta escuchar con toda tu atención, sin planear tu respuesta mientras la otra persona habla.",
                "• Pausa de un Minuto: Simplemente detente, respira tres veces conscientemente y pregúntate: ¿Qué está pasando en mi interior ahora mismo?"
            ]
          },
          {
            id: 'm4a2',
            type: 'upload',
            title: 'Tu Momento Mindful',
            description: 'Captura y comparte una foto o un breve texto sobre un momento de atención plena que hayas experimentado esta semana.',
          },
        ]
    },
    {
        id: 'm5',
        title: 'Módulo 5: Cultivando la Compasión y la Calma Duradera',
        activities: [
          {
            id: 'm5a1',
            type: 'audio',
            title: 'Meditación de la Bondad Amorosa (Loving-Kindness)',
            description: 'Una práctica para cultivar sentimientos de calidez, amabilidad y compasión hacia ti mismo y hacia los demás.',
            audioSrc: '/audios/meditacion.mp3', // Placeholder
          },
          {
            id: 'm5a2',
            type: 'finalChallenge',
            title: 'Creando tu Plan de Práctica Personal',
            description: 'Diseña un plan sostenible para continuar integrando el mindfulness en tu vida más allá de este curso.',
          }
        ]
    },
  ]
};
