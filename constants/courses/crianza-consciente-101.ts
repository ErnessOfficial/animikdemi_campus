import type { Course } from '../../types';
import { mockInstructor } from './courseData';
import { assetPath } from '../../utils/paths';

export const course: Course = {
  id: 'crianza-consciente-101',
  title: 'Crianza Consciente para Familias Modernas',
  subtitle: 'Navega los retos de la crianza desde la empatía, la conexión y el respeto mutuo.',
  description:
    'Un micro-curso directo a lo esencial para padres, madres y cuidadores. En solo 35 minutos aprenderás a decodificar berrinches, regular tu propia reactividad y establecer límites firmes pero profundamente amorosos.',
  category: 'Familia, Crianza & Adolescencia',
  broadCategories: ['Habilidades Sociales', 'Gestión Emocional'],
  coverImage: assetPath('images/course_cover_7.png'),
  instructor: mockInstructor,
  estimatedDurationMinutes: 35,
  learningObjectives: [
    'Evaluar tu nivel de reactividad automática en situaciones de tensión familiar.',
    'Decodificar los mitos comunes sobre el comportamiento y las rabietas infantiles.',
    'Aplicar la conexión antes que la corrección en escenarios de crisis o desbordes.',
    'Establecer límites claros sin recurrir a gritos, castigos ni invalidación emocional.'
  ],
  modules: [
    // ==========================================================
    // MÓDULO 1 — TU RADAR PARENTAL
    // ==========================================================
    {
      id: 'm1',
      title: 'Módulo 1: Tu Radar Parental',
      activities: [
        {
          id: 'm1a1',
          type: 'sliderAssessment' as any,
          title: 'Punto 1 · Radar de Reactividad Parental',
          description: 'Ajusta los deslizadores según tu reacción más habitual en momentos de desborde de tus hijos. Esto generará tu radar de autocontrol.',
          domains: [
            {
              id: 'pausa_reactiva',
              name: 'Pausa vs Reactividad',
              leftLabel: 'Grito o reacciono de inmediato',
              rightLabel: 'Pauso, respiro y calmo mi sistema'
            },
            {
              id: 'conexion_emocional',
              name: 'Conexión Emocional',
              leftLabel: 'Minimizo o castigo la rabieta',
              rightLabel: 'Valido su sentir antes de corregir'
            },
            {
              id: 'limites_claros',
              name: 'Límites Claros',
              leftLabel: 'Cedo para evitar el conflicto',
              rightLabel: 'Mantengo el límite con amabilidad'
            },
            {
              id: 'autocompasion_parental',
              name: 'Autocompasión Parental',
              leftLabel: 'Me culpo excesivamente',
              rightLabel: 'Acepto mis errores y aprendo'
            }
          ]
        },
        {
          id: 'm1a2',
          type: 'text',
          title: 'Punto 2 · Conexión antes que Corrección',
          description: 'Nociones clave para entender por qué la calma del adulto es el primer paso para regular al niño.',
          content: [
            'El principio fundamental de la crianza consciente es: "Conexión antes que Corrección". Un cerebro infantil desregulado o en medio de una rabieta no puede procesar explicaciones lógicas ni lecciones morales.',
            'La amígdala del niño está en modo de supervivencia (lucha o huida). En ese estado, el castigo o el aislamiento ("ve a tu cuarto a pensar") solo aumentan su desconexión y miedo.',
            'Como adultos, nuestro rol es actuar como el "co-regulador" del niño. Ofrecemos nuestra calma para serenar su sistema nervioso. Solo cuando la calma ha retornado, la corteza prefrontal del niño vuelve a estar disponible para conversar, reparar y aprender.'
          ]
        }
      ]
    },

    // ==========================================================
    // MÓDULO 2 — DECODIFICANDO BERRINCHES
    // ==========================================================
    {
      id: 'm2',
      title: 'Módulo 2: Decodificando Berrinches',
      activities: [
        {
          id: 'm2a1',
          type: 'mythBuster' as any,
          title: 'Punto 1 · Mitos sobre el Comportamiento Infantil',
          description: 'Desliza o presiona para descubrir qué ideas populares son mitos y cuáles hechos respaldados por la ciencia.',
          statements: [
            {
              text: 'Los berrinches son un intento del niño para manipular y controlar a los padres.',
              isMyth: true,
              explanation: 'Mito. Las rabietas son desbordes emocionales genuinos causados por la inmadurez de la corteza prefrontal del niño, que aún no puede autorregularse.'
            },
            {
              text: 'Ignorar por completo un berrinche enseña al niño a regularse solo.',
              isMyth: true,
              explanation: 'Mito. Ignorar enseña que el dolor o desborde no es aceptado. La regulación se aprende mediante el acompañamiento físico y la presencia del adulto.'
            },
            {
              text: 'El cerebro de los niños termina de desarrollarse completamente alrededor de los 25 años.',
              isMyth: false,
              explanation: 'Hecho. La corteza prefrontal (encargada de la lógica, control de impulsos y empatía) es la última en madurar, completando su desarrollo en la adultez joven.'
            }
          ]
        },
        {
          id: 'm2a2',
          type: 'interactiveScenario' as any,
          title: 'Punto 2 · Simulador: El Berrinche en el Supermercado',
          description: 'Enfréntate a una situación cotidiana de desborde público y elige la respuesta óptima de crianza consciente.',
          scenarios: [
            {
              context: 'Estás en el supermercado y tu hijo/a de 4 años se tira al suelo gritando y llorando porque te has negado a comprarle un dulce. La gente a tu alrededor te mira con juicio.',
              options: [
                {
                  text: 'Agacharte a su altura, contener físicamente si lo permite y decirle: "Sé que querías el dulce y te molesta no tenerlo. No compraremos el dulce hoy, pero estoy aquí contigo mientras pasa tu enojo".',
                  isOptimal: true,
                  consequence: '¡Excelente! Has conectado con su emoción ("sé que te molesta") manteniendo el límite con firmeza ("no compraremos el dulce"). Has co-regulado su sistema con tu presencia sin ceder al juicio social.'
                },
                {
                  text: 'Ceder de inmediato y comprarle el dulce para evitar la escena y las miradas de los demás.',
                  isOptimal: false,
                  consequence: 'Aunque detiene el berrinche al instante, esto le enseña al niño que el llanto y el desborde son herramientas eficaces para doblar tus límites y conseguir lo que desea.'
                },
                {
                  text: 'Amenazarlo con un castigo severo: "¡Cállate ya o nos vamos a casa y no verás la tele en toda la semana!".',
                  isOptimal: false,
                  consequence: 'Esta respuesta escala la tensión. Suma miedo e indefensión a un cerebro que ya está desbordado, impidiendo el aprendizaje emocional saludable.'
                }
              ]
            }
          ]
        }
      ]
    },

    // ==========================================================
    // MÓDULO 3 — LÍMITES CON EMPATÍA
    // ==========================================================
    {
      id: 'm3',
      title: 'Módulo 3: Límites con Empatía',
      activities: [
        {
          id: 'm3a1',
          type: 'emotionWheel' as any,
          title: 'Punto 1 · La Rueda de Necesidades Detrás del Llanto',
          description: 'El mal comportamiento es solo la punta del iceberg. Explora los matices de las necesidades insatisfechas que suelen detonar los desbordes.',
          coreEmotions: [
            {
              name: 'Fisiológica',
              color: '#3b82f6',
              nuances: ['Hambre', 'Sueño/Cansancio', 'Sobrestimulación', 'Dolor físico'],
              physicalSensation: 'Se manifiesta con llanto irritable, torpeza física y baja tolerancia a la frustración.'
            },
            {
              name: 'Emocional',
              color: '#ef4444',
              nuances: ['Celos', 'Inseguridad', 'Necesidad de atención', 'Miedo al abandono'],
              physicalSensation: 'Búsqueda constante de cercanía, comportamientos regresivos (ej. hablar como bebé) o rabietas repentinas.'
            },
            {
              name: 'Autonomía',
              color: '#eab308',
              nuances: ['Frustración de poder', 'Necesidad de elegir', 'Impotencia', 'Ganas de explorar'],
              physicalSensation: 'Oposición activa ("No quiero", "Yo solo"), tirarle cosas o rigidez corporal.'
            }
          ]
        },
        {
          id: 'm3a2',
          type: 'habitTrackerBuilder' as any,
          title: 'Punto 2 · Tu Mochila de Calma Familiar',
          description: 'Selecciona 3 micro-hábitos de regulación y límites compasivos a los que te comprometes para tu rutina familiar de esta semana.',
          habitsToChoose: [
            { category: 'Pausa Adulto', text: 'Respirar 3 veces profundo antes de responder a un grito de mi hijo/a.' },
            { category: 'Validación', text: 'Decir: "Veo que estás enojado, está bien sentir enojo" antes de dar explicaciones.' },
            { category: 'Límites', text: 'Mantener el "No" de forma tranquila, sin gritar ni enojarme yo también.' },
            { category: 'Reparación', text: 'Pedir disculpas a mi hijo/a si he perdido los estribos y grité.' }
          ],
          maxSelection: 3
        }
      ]
    }
  ]
};

export default course;
