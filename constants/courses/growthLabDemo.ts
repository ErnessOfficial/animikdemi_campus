import type { Course } from '../../types';

const growthLabDemo: Course = {
  id: 'laboratorio-ie',
  title: 'Laboratorio Práctico de Inteligencia Emocional',
  subtitle: 'Ejercicios interactivos de autodescubrimiento y micro-hábitos',
  description: 'Un curso práctico diseñado para explorar tu autopercepción, expandir tu vocabulario emocional, desmitificar creencias, simular conversaciones complejas y estructurar planes de hábitos prácticos.',
  category: 'Gestión Emocional',
  broadCategories: ['Gestión Emocional', 'Autoconocimiento', 'Habilidades Sociales'],
  coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
  instructor: {
    name: 'Dra. Elena Rostova',
    title: 'Especialista en Neurociencia Afectiva y EQ',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    bio: 'Investigadora clínica y mentora dedicada al diseño de metodologías prácticas para la ecuanimidad y el crecimiento personal sostenible.'
  },
  learningObjectives: [
    'Evaluar tu autopercepción emocional de forma gráfica en tiempo real.',
    'Identificar matices lingüísticos emocionales y sus correlatos somáticos.',
    'Diferenciar mitos comunes de hechos científicos sobre la salud mental.',
    'Aplicar la comunicación asertiva en simulaciones interpersonales complejas.',
    'Diseñar un plan de acción semanal combinando micro-hábitos efectivos.'
  ],
  modules: [
    {
      id: 'lab-m1',
      title: 'Módulo 1: Medición y Autopercepción',
      activities: [
        {
          id: 'lab-act1',
          type: 'sliderAssessment',
          title: 'El Radar de Ecuanimidad (Radar EQ)',
          description: 'Reflexiona y evalúa tu estado de balance actual en las siguientes dimensiones de tu bienestar emocional:',
          sliderDomains: [
            { id: 'atencion', name: 'Atención Plena', leftLabel: 'Disperso y distraído', rightLabel: 'Enfocado y presente' },
            { id: 'autocompasion', name: 'Autocompasión', leftLabel: 'Severo y autocrítico', rightLabel: 'Amable y comprensivo' },
            { id: 'ecuanimidad', name: 'Ecuanimidad', leftLabel: 'Reactivo a los estímulos', rightLabel: 'Ecuánime y centrado' },
            { id: 'claridad', name: 'Claridad Mental', leftLabel: 'Mentalidad nublada', rightLabel: 'Pensamiento lúcido' },
            { id: 'conexion', name: 'Conexión Empática', leftLabel: 'Aislado de los demás', rightLabel: 'Sintonizado y cercano' }
          ]
        }
      ]
    },
    {
      id: 'lab-m2',
      title: 'Módulo 2: Geografía del Sentir',
      activities: [
        {
          id: 'lab-act2',
          type: 'emotionWheel',
          title: 'El Mapa de Sensaciones Somáticas',
          description: 'Aprende a decodificar las señales de tu cuerpo explorando las sensaciones somáticas y los matices semánticos de cada emoción base:',
          coreEmotions: [
            {
              id: 'alegria',
              name: 'Alegría',
              color: '#ebb15b',
              nuances: ['Júbilo', 'Serenidad', 'Optimismo', 'Gratitud', 'Entusiasmo'],
              physicalSensation: 'Sensación de calidez y expansión en el pecho, ligereza en las extremidades y ganas de sonreír.'
            },
            {
              id: 'ira',
              name: 'Ira',
              color: '#dd566f',
              nuances: ['Indignación', 'Frustración', 'Resentimiento', 'Furia', 'Hostilidad'],
              physicalSensation: 'Aumento de la temperatura corporal, tensión en la mandíbula, puños apretados y pulso acelerado.'
            },
            {
              id: 'tristeza',
              name: 'Tristeza',
              color: '#24668e',
              nuances: ['Melancolía', 'Desaliento', 'Añoranza', 'Duelo', 'Pesadumbre'],
              physicalSensation: 'Sensación de opresión o "nudo" en la garganta, pesadez generalizada y fatiga muscular.'
            },
            {
              id: 'miedo',
              name: 'Miedo',
              color: '#6e4380',
              nuances: ['Ansiedad', 'Temor', 'Pánico', 'Recelo', 'Desasosiego'],
              physicalSensation: 'Frío en el estómago, respiración superficial, boca seca, temblores leves y estado de alerta.'
            },
            {
              id: 'afecto',
              name: 'Afecto',
              color: '#4cbd9a',
              nuances: ['Ternura', 'Compasión', 'Aprecio', 'Cariño', 'Empatía'],
              physicalSensation: 'Suavidad en el pecho, relajación facial, sensación de seguridad y calma del sistema nervioso.'
            }
          ]
        }
      ]
    },
    {
      id: 'lab-m3',
      title: 'Módulo 3: Mitos de la Mente',
      activities: [
        {
          id: 'lab-act3',
          type: 'mythBuster',
          title: 'Desmitificador de la Salud Emocional',
          description: 'Clasifica las siguientes afirmaciones comunes como Mitos (creencias erróneas) o Hechos (avalados científicamente):',
          swipeStatements: [
            {
              id: 'myth1',
              text: 'Expresar la ira de forma agresiva (romper cosas o gritar) es la mejor manera de liberarla.',
              isMyth: true,
              explanation: 'Falso. Las investigaciones demuestran que ventilar la ira de forma agresiva en realidad incrementa la excitación fisiológica y refuerza el hábito irritable, dificultando la calma.'
            },
            {
              id: 'myth2',
              text: 'La autocompasión nos vuelve perezosos, indulgentes y reduce nuestra motivación personal.',
              isMyth: true,
              explanation: 'Falso. Tratarte con compasión reduce el miedo al fracaso, lo que incrementa tu motivación intrínseca para mejorar y reponerte rápidamente de los errores.'
            },
            {
              id: 'myth3',
              text: 'El estrés agudo de corta duración puede mejorar la agudeza mental y el rendimiento temporal.',
              isMyth: false,
              explanation: 'Verdadero. El estrés positivo a corto plazo (eustrés) activa hormonas que preparan el cerebro para el enfoque sostenido, incrementando temporalmente la retención.'
            }
          ]
        }
      ]
    },
    {
      id: 'lab-m4',
      title: 'Módulo 4: Simulaciones Sociales',
      activities: [
        {
          id: 'lab-act4',
          type: 'interactiveScenario',
          title: 'Establecimiento de Límites Profesionales',
          description: 'Ponte a prueba en esta simulación y selecciona la opción óptima para responder asertivamente a la invasión de tus horarios personales:',
          scenarios: [
            {
              id: 'scene1',
              context: 'Son las 9:45 PM y tu compañero de proyecto Carlos te envía un mensaje urgente pidiendo que revises y corrijas un reporte que debe entregarse mañana a las 8:00 AM.',
              options: [
                {
                  text: 'Responder de inmediato molesto: "Carlos, respeta mis horas de descanso. No son horas de pedir esto."',
                  isOptimal: false,
                  consequence: 'Carlos se pone a la defensiva y responde con resentimiento, afectando la comunicación futura de los proyectos del equipo.'
                },
                {
                  text: 'Ignorar por completo el mensaje y apagar el teléfono celular hasta el día siguiente.',
                  isOptimal: false,
                  consequence: 'Evitas el conflicto de momento, pero Carlos entra en pánico y comete errores críticos en el reporte final de mañana.'
                },
                {
                  text: 'Responder asertivamente: "Hola Carlos, ya estoy fuera de horario. Mañana a las 7:30 AM lo reviso con prioridad para entregarlo a tiempo. ¡Buenas noches!"',
                  isOptimal: true,
                  consequence: '¡Excelente decisión! Estableces un límite claro y profesional, no muestras hostilidad, aseguras tu descanso y provees una alternativa constructiva.'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'lab-m5',
      title: 'Módulo 5: Construcción Práctica',
      activities: [
        {
          id: 'lab-act5',
          type: 'habitTrackerBuilder',
          title: 'Tu Mochila de Bienestar Semanal',
          description: 'Crea tu plan semanal seleccionando los micro-hábitos que te comprometes a realizar esta semana:',
          habitsToChoose: [
            '5 minutos de respiración abdominal al despertar',
            'Escribir 3 agradecimientos en mi diario al dormir',
            '10 minutos de caminata consciente sin teléfono celular',
            'Realizar un escaneo corporal somático al acostarme',
            'Practicar una pausa reflexiva de 2 minutos a mediodía',
            'Apagar todas las pantallas 45 minutos antes de acostarme'
          ],
          maxSelection: 3
        }
      ]
    }
  ]
};

export default growthLabDemo;
