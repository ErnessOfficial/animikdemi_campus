/**
 * ============================================================
 * CURSO: Las Claves de la Inteligencia Emocional
 * ENFOQUE: Autoconciencia, Autoregulación y Habilidades Sociales
 * METODOLOGÍA: Microlearning con simulación y herramientas visuales.
 * ============================================================
 */

import type { Course } from '../../types';
import { assetPath } from '../../utils/paths';
import { mockInstructor } from './courseData';

export const course: Course = {

  id: 'claves-inteligencia-emocional',
  title: 'El Algoritmo Humano: Claves Esenciales de la Inteligencia Emocional',
  subtitle: 'Domina tus reacciones, lee tu entorno y transforma tus relaciones a través del autoconocimiento.',
  description: `En un mundo hiperconectado y acelerado, la habilidad técnica ya no es suficiente. La Inteligencia Emocional (EQ) es el verdadero diferenciador del éxito personal y profesional. En este micro-curso interactivo, explorarás los 5 pilares de Daniel Goleman, aprenderás a usar el enfoque RULER para descifrar tu mapa emocional y te enfrentarás a simuladores de escenarios para entrenar tu "músculo" emocional en tiempo real.`,

  category: 'Autoconciencia & Regulación emocional',
  broadCategories: ['Gestión Emocional', 'Habilidades Sociales'],
  coverImage: 'https://res.cloudinary.com/djybwowo6/image/upload/v1782765145/eq_algoritmo_portada_sq2rpf.png',
  instructor: mockInstructor,
  estimatedDurationMinutes: 45,

  learningObjectives: [
    'Evaluar el estado actual de tus 5 dominios de inteligencia emocional.',
    'Ampliar tu granularidad emocional para identificar con exactitud lo que sientes más allá del "bien" o "mal".',
    'Desmitificar creencias erróneas sobre el control emocional y la supresión de sentimientos.',
    'Aplicar la empatía cognitiva y afectiva en simuladores de escenarios interpersonales complejos.',
    'Diseñar un tablero de hábitos emocionales para integrar el aprendizaje en tu día a día.'
  ],

  modules: [

    // ==========================================================
    //  MÓDULO 1: EL MAPA INTERIOR (Autoconciencia)
    // ==========================================================
    {
      id: 'm1',
      title: 'Módulo 1: El Mapa Interior',
      activities: [
        {
          id: 'm1a1',
          type: 'sliderAssessment' as any, // NUEVO COMPONENTE
          title: 'El Radar EQ: Tu Punto de Partida',
          description: 'Ajusta los deslizadores según cómo te percibes hoy. Sé honesto, esto generará tu radar emocional base.',
          domains: [
            { 
              id: 'autoconciencia', 
              name: 'Autoconciencia', 
              leftLabel: 'Ignoro mis emociones', 
              rightLabel: 'Reconozco al instante lo que siento' 
            },
            { 
              id: 'autoregulacion', 
              name: 'Autoregulación', 
              leftLabel: 'Reacciono impulsivamente', 
              rightLabel: 'Pauso y elijo mi respuesta' 
            },
            { 
              id: 'automotivacion', 
              name: 'Automotivación', 
              leftLabel: 'Dependo del aplauso externo', 
              rightLabel: 'Me impulsa mi propósito interno' 
            },
            { 
              id: 'empatia', 
              name: 'Empatía', 
              leftLabel: 'Me cuesta leer a los demás', 
              rightLabel: 'Sintonizo fácilmente con el dolor ajeno' 
            },
            { 
              id: 'habilidades_sociales', 
              name: 'Habilidades Sociales', 
              leftLabel: 'Evito conflictos y networking', 
              rightLabel: 'Construyo relaciones y medio en crisis' 
            }
          ]
        },
        {
          id: 'm1a2',
          type: 'emotionWheel' as any, // NUEVO COMPONENTE
          title: 'Explorador de Granularidad Emocional',
          description: 'Decir "estoy mal" es como decir "tengo un dolor". Haz clic en las emociones primarias para descubrir los matices (granularidad) y cómo se sienten en el cuerpo.',
          coreEmotions: [
            {
              name: 'Ira',
              color: '#ef4444',
              nuances: ['Frustración', 'Resentimiento', 'Indignación', 'Furia'],
              physicalSensation: 'Calor en el pecho, tensión en la mandíbula, respiración corta.'
            },
            {
              name: 'Miedo',
              color: '#8b5cf6',
              nuances: ['Inseguridad', 'Ansiedad', 'Pavor', 'Abrumamiento'],
              physicalSensation: 'Nudo en el estómago, pulso acelerado, mente en blanco.'
            },
            {
              name: 'Tristeza',
              color: '#3b82f6',
              nuances: ['Decepción', 'Melancolía', 'Apatía', 'Duelo'],
              physicalSensation: 'Pesadez en los hombros, falta de energía, presión en la garganta.'
            },
            {
              name: 'Alegría',
              color: '#eab308',
              nuances: ['Satisfacción', 'Alivio', 'Entusiasmo', 'Éxtasis'],
              physicalSensation: 'Ligereza, respiración profunda, calor relajante.'
            }
          ]
        }
      ],
    },

    // ==========================================================
    //  MÓDULO 2: EL BOTÓN DE PAUSA (Autoregulación)
    // ==========================================================
    {
      id: 'm2',
      title: 'Módulo 2: El Botón de Pausa',
      activities: [
        {
          id: 'm2a1',
          type: 'mythBuster' as any, // NUEVO COMPONENTE (Estilo Tinder Swipe)
          title: 'Cazador de Mitos Emocionales',
          description: 'Desliza hacia la IZQUIERDA si crees que es un Mito (Falso), o a la DERECHA si crees que es un Hecho (Verdadero).',
          statements: [
            {
              text: 'Las personas con alta inteligencia emocional nunca se enojan.',
              isMyth: true,
              explanation: 'Mito. Se enojan, pero saben expresar su enojo a la persona adecuada, en el grado adecuado y en el momento oportuno (Aristóteles).'
            },
            {
              text: 'Ignorar o reprimir una emoción negativa hace que desaparezca más rápido.',
              isMyth: true,
              explanation: 'Mito. La supresión emocional genera un efecto rebote. Lo que resistes, persiste. Nombrar la emoción reduce la carga en la amígdala cerebral.'
            },
            {
              text: 'La inteligencia emocional se puede entrenar a cualquier edad gracias a la neuroplasticidad.',
              isMyth: false,
              explanation: 'Hecho. A diferencia del Coeficiente Intelectual (IQ), que tiende a ser fijo, el EQ es una habilidad flexible que puede desarrollarse durante toda la vida.'
            },
            {
              text: 'Llorar en el trabajo es siempre un síntoma de baja inteligencia emocional.',
              isMyth: true,
              explanation: 'Mito. Las lágrimas son una respuesta fisiológica al estrés. La alta EQ implica saber gestionar el momento con profesionalidad, no convertirse en un robot.'
            }
          ]
        },
        {
          id: 'm2a2',
          type: 'text',
          title: 'Lectura: Entre el Estímulo y la Respuesta',
          description: 'El secreto del autocontrol resumido en 1 minuto.',
          content: [
            'Como decía el psiquiatra Viktor Frankl: "Entre el estímulo y la respuesta hay un espacio. En ese espacio reside nuestro poder para elegir nuestra respuesta. Y en nuestra respuesta yace nuestro crecimiento y nuestra libertad".',
            'La autoregulación no es no sentir. Es crear un "milisegundo extra" entre sentir la emoción y actuar. En ese milisegundo es donde decides no enviar ese correo furioso o no lanzar ese comentario sarcástico.'
          ],
        }
      ],
    },

    // ==========================================================
    //  MÓDULO 3: EL RADAR SOCIAL (Empatía)
    // ==========================================================
    {
      id: 'm3',
      title: 'Módulo 3: El Radar Social',
      activities: [
        {
          id: 'm3a1',
          type: 'interactiveScenario' as any, // NUEVO COMPONENTE (Simulador)
          title: 'Simulador de Crisis: La Reunión de Equipo',
          description: 'Pon a prueba tu empatía cognitiva y afectiva. Elige la mejor respuesta ante esta situación real.',
          scenarios: [
            {
              context: 'Estás liderando un proyecto. De pronto, Clara, una colaboradora habitualmente muy eficiente, entrega su parte llena de errores. Cuando le preguntas, te responde de forma cortante frente a todos: "Hice lo que pude, tengo demasiadas cosas encima".',
              options: [
                {
                  text: 'Responder asertivamente en ese momento: "Clara, te pido que cuidemos el tono en la reunión. Tienes que arreglar los errores hoy".',
                  isOptimal: false,
                  consequence: 'Has defendido tu autoridad (bien), pero leíste mal el contexto emocional (mal). Clara está claramente desbordada, exhibirla frente al equipo activará su modo defensivo y dañará la relación.'
                },
                {
                  text: 'Ignorar el comentario para no hacer una escena y arreglar los errores tú mismo más tarde.',
                  isOptimal: false,
                  consequence: 'Esto es pasividad, no empatía. Estás asumiendo un trabajo que no te corresponde y no estás ayudando a Clara a resolver su problema subyacente de sobrecarga.'
                },
                {
                  text: 'Decir: "Entiendo que estamos con mucha carga. Vamos a revisar este documento tú y yo a solas al terminar la reunión para ver cómo reorganizamos las prioridades".',
                  isOptimal: true,
                  consequence: '¡Excelente! Empatía pura. Has validado su estrés públicamente ("estamos con carga"), protegido su dignidad llevando la corrección al ámbito privado, y te enfocas en la solución (reorganizar), no en la culpa.'
                }
              ]
            }
          ]
        }
      ],
    },

    // ==========================================================
    //  MÓDULO 4: EL GIMNASIO EMOCIONAL (Implementación)
    // ==========================================================
    {
      id: 'm4',
      title: 'Módulo 4: Tu Gimnasio Emocional',
      activities: [
        {
          id: 'm4a1',
          type: 'habitTrackerBuilder' as any, // NUEVO COMPONENTE
          title: 'Diseña tu Tablero de Hábitos EQ',
          description: 'Selecciona 3 micro-hábitos que te comprometes a entrenar esta semana. Arrástralos a tu "Mochila de Acción".',
          habitsToChoose: [
            { category: 'Autoconciencia', text: 'Pausar 3 veces al día para preguntarme: ¿Qué emoción estoy sintiendo ahora mismo?' },
            { category: 'Autoregulación', text: 'Aplicar la "Regla de las 24 horas" antes de responder a cualquier mensaje o email que me genere enojo.' },
            { category: 'Empatía', text: 'En mi próxima conversación difícil, hacer al menos 2 preguntas para entender al otro antes de dar mi punto de vista.' },
            { category: 'Habilidades Sociales', text: 'Dar un feedback positivo e inesperado a un compañero de trabajo o familiar.' }
          ],
          maxSelection: 3
        },
        {
          id: 'm4a2',
          type: 'evaluation',
          title: 'El Compromiso Final',
          description: 'Deja un registro por escrito para solidificar tu aprendizaje.',
          questions: [
            { prompt: 'De los 5 pilares de la Inteligencia Emocional, ¿cuál es el que más necesitas fortalecer urgentemente y por qué?' }
          ]
        }
      ],
    }

  ],
};

export default course;