/**
 * ============================================================
 * CURSO: Resetea tu mente - Gestión del estrés y Burnout
 * ENFOQUE: Fisiología del estrés, productividad vs valía, 
 *          descanso sin culpa y prevención clínica del burnout.
 * METODOLOGÍA: Microlearning de alto impacto (25 min).
 * ============================================================
 */

import type { Course } from '../../types';
import { assetPath } from '../../utils/paths';
import { mockInstructor } from './courseData';

export const course: Course = {

  // ----------------------------------------------------------
  //  METADATOS BÁSICOS
  // ----------------------------------------------------------
  id: 'resetea-tu-mente-burnout',
  title: 'Resetea tu Mente: Gestión del Estrés y Prevención del Burnout',
  subtitle: 'Aprende a desactivar la alarma fisiológica, separar tu valía de tu productividad y descansar sin culpa.',
  description: `¿Sientes cansancio incluso después de dormir? ¿Te irritas con facilidad y sientes que ninguna cantidad de esfuerzo es suficiente? Vivimos en una cultura de hiper-productividad que nos empuja al agotamiento extremo. En este micro-curso intensivo de 25 minutos, descubrirás la diferencia clínica entre estrés y burnout (CIE-11 de la OMS), entenderás tu fisiología (lucha, huida o parálisis) y aprenderás estrategias científicamente probadas para "completar el ciclo biológico del estrés" y recuperar tu energía vital.`,

  // ----------------------------------------------------------
  //  TAXONOMÍA Y CATEGORIZACIÓN
  // ----------------------------------------------------------
  category: 'Ansiedad, Estrés y Calma',
  broadCategories: ['Gestión Emocional', 'Autoconocimiento'],
  coverImage: assetPath('images/resetea_mente_portada.png'),

  // ----------------------------------------------------------
  //  INSTRUCTOR
  // ----------------------------------------------------------
  instructor: mockInstructor,

  // ----------------------------------------------------------
  //  DURACIÓN Y OBJETIVOS
  // ----------------------------------------------------------
  estimatedDurationMinutes: 25,

  learningObjectives: [
    'Identificar la diferencia entre un pico de estrés normal y el síndrome clínico del Burnout.',
    'Comprender la respuesta biológica de supervivencia (lucha, huida, parálisis) ante estresores modernos.',
    'Aplicar técnicas basadas en evidencia para "completar el ciclo del estrés" a nivel fisiológico.',
    'Desvincular cognitivamente la valía personal de los resultados de productividad laboral.',
  ],

  // ----------------------------------------------------------
  //  MÓDULOS Y ACTIVIDADES
  // ----------------------------------------------------------

  modules: [

    // ==========================================================
    //  MÓDULO 1: LA ANATOMÍA DEL AGOTAMIENTO
    // ==========================================================
    {
      id: 'm1',
      title: 'Módulo 1: Estrés vs. Burnout',
      activities: [
        {
          id: 'm1a1',
          type: 'diagnosticTest' as any,
          title: 'Termómetro de Agotamiento: ¿Dónde estás hoy?',
          description: 'El psicólogo Herbert Freudenberger definió el Burnout en 1974. Hoy la OMS lo reconoce como un fenómeno ocupacional. Evalúa tus síntomas recientes (últimos 30 días).',
          scoringOptions: [
            { text: 'Rara vez', value: 0 },
            { text: 'A veces', value: 1 },
            { text: 'Casi todos los días', value: 2 }
          ],
          questions: [
            '1. Siento un agotamiento físico y emocional que no se alivia durmiendo.',
            '2. He desarrollado cinismo o distancia mental hacia mi trabajo o mis responsabilidades diarias.',
            '3. Siento que mi eficacia ha disminuido; hago mucho pero logro poco.',
            '4. Tareas pequeñas (como contestar un correo o fregar un plato) me parecen montañas inescalables.',
            '5. Me irrito con mis seres queridos por cosas mínimas que antes no me molestaban.',
            '6. Uso la comida, el alcohol o las pantallas de forma compulsiva para "desconectar" al final del día.'
          ],
          resultsMapping: [
            {
              min: 0,
              max: 3,
              level: 'Zona Verde: Estrés Manejable',
              title: 'Carga normal.',
              description: 'Experimentas picos de estrés, pero tu sistema nervioso logra volver a la calma. Es el momento ideal para aprender prevención.'
            },
            {
              min: 4,
              max: 8,
              level: 'Zona Ámbar: Sobrecarga Sostenida',
              title: 'Alerta de fatiga.',
              description: 'Tu cuerpo está gastando más energía de la que repone. Estás rozando el límite. Necesitas implementar pausas de descarga fisiológica urgentes.'
            },
            {
              min: 9,
              max: 12,
              level: 'Zona Roja: Riesgo de Burnout',
              title: 'Sistema colapsado.',
              description: 'Presentas las tres dimensiones clínicas del burnout (agotamiento, despersonalización y baja eficacia). Tu prioridad número uno debe ser el descanso radical y la reestructuración de límites.'
            }
          ]
        } as any,
        {
          id: 'm1a2',
          type: 'text',
          title: 'Fisiología: Lucha, Huida o Parálisis',
          description: 'Entiende cómo tu cerebro procesa una bandeja de entrada llena como si fuera un león salvaje.',
          content: [
            'La respuesta de estrés no es tu enemiga; es un mecanismo evolutivo diseñado por la amígdala para salvar tu vida.',
            '• LUCHA (Fight): Sientes ira, tensión en la mandíbula, necesidad de discutir o hiper-microgestionar todo.',
            '• HUIDA (Flight): Sientes ansiedad, respiración agitada, necesidad de escapar, procastinación severa (huida digital).',
            '• PARÁLISIS (Freeze): Bloqueo mental, disociación (mirar al vacío), incapacidad para tomar decisiones simples.',
            'El problema moderno: Evolutivamente, el estrés duraba minutos (huir del león). Hoy, el "león" es la hipoteca o un jefe tóxico, y dura meses. Tu cuerpo se inunda de cortisol y adrenalina constantemente, causando inflamación crónica y, eventualmente, Burnout.'
          ],
        }
      ],
    },

    // ==========================================================
    //  MÓDULO 2: COMPLETANDO EL CICLO
    // ==========================================================
    {
      id: 'm2',
      title: 'Módulo 2: Desactivando la Alarma Biológica',
      activities: [
        {
          id: 'm2a1',
          type: 'flipCards',
          title: 'Hackeando tu Sistema Nervioso',
          description: 'Según las Dras. Emily y Amelia Nagoski, solucionar el problema que causa el estrés NO elimina el estrés físico del cuerpo. Descubre cómo "completar el ciclo" fisiológico.',
          introText: 'Haz clic en las tarjetas para descubrir acciones que le dicen a tu cerebro: "Ya estamos a salvo".',
          flipGroups: [
            {
              title: 'Descarga Física (Alto Impacto)',
              color: '#d946ef',
              cards: [
                {
                  front: 'Movimiento Fuerte (20 a 60 min)',
                  back: 'Correr, bailar intensamente, boxear. Es la señal evolutiva más clara de que "has sobrevivido a la amenaza" y el cuerpo puede relajar los músculos.'
                },
                {
                  front: 'Tensión y Relajación Progresiva',
                  back: 'Aprieta todos los músculos de tu cuerpo al máximo por 10 segundos y luego suéltalos de golpe. Repite 3 veces. Libera tensión residual severa.'
                },
              ],
            },
            {
              title: 'Regulación Emocional y Social',
              color: '#0ea5e9',
              cards: [
                {
                  front: 'El Abrazo de los 20 Segundos',
                  back: 'Abrazar a un ser querido (o mascota) sintiendo el peso del cuerpo por 20 segundos altera las hormonas, reduciendo la presión arterial y liberando oxitocina.'
                },
                {
                  front: 'El Llanto Liberador o la Risa Profunda',
                  back: 'No reprimas las lágrimas. Llorar es un mecanismo biológico que excreta cortisol del cuerpo. Una carcajada genuina y profunda desde el estómago tiene un efecto regulador similar.'
                },
              ],
            }
          ],
        }
      ],
    },

    // ==========================================================
    //  MÓDULO 3: PRODUCTIVIDAD TÓXICA VS VALÍA
    // ==========================================================
    {
      id: 'm3',
      title: 'Módulo 3: La Trampa de la "Máquina"',
      activities: [
        {
          id: 'm3a1',
          type: 'cardGame',
          title: 'Asociación Cognitiva: Rompiendo Reglas Inútiles',
          description: 'A menudo el Burnout ocurre por las creencias que tenemos sobre el descanso. Empareja la creencia tóxica con su reencuadre saludable.',
          cards: [
            { id: 1, matchId: 1, text: 'Mi valor como persona depende de lo mucho que haya tachado en mi lista de tareas hoy.', type: 'limiting' },
            { id: 2, matchId: 1, text: 'Soy valioso por quien soy. La productividad es una acción, no mi identidad.', type: 'empowering' },
            { id: 3, matchId: 2, text: 'Descansar es perder el tiempo o ser perezoso. Debo "ganarme" el derecho a relajarme.', type: 'limiting' },
            { id: 4, matchId: 2, text: 'El descanso es una necesidad biológica innegociable, como respirar o beber agua.', type: 'empowering' },
            { id: 5, matchId: 3, text: 'Si me esfuerzo solo un poco más y aguanto, eventualmente las cosas se calmarán.', type: 'limiting' },
            { id: 6, matchId: 3, text: 'Ignorar el agotamiento no lo desaparece; lo convierte en una deuda con altos intereses físicos.', type: 'empowering' },
            { id: 7, matchId: 4, text: 'Tengo que estar disponible siempre para todos en el trabajo y en casa.', type: 'limiting' },
            { id: 8, matchId: 4, text: 'Poner límites salva mis relaciones. Una batería al 0% no puede iluminar a nadie.', type: 'empowering' },
          ],
        },
        {
          id: 'm3a2',
          type: 'reframeWall',
          title: 'El Muro de la Culpa',
          description: 'Identifica y destruye la culpa. Escribe una situación en la que te sentiste culpable por descansar esta semana. Luego, escribe qué le dirías a un amigo muy querido que te confesara esa misma culpa. Aplicátelo a ti mismo.',
        }
      ],
    },

    // ==========================================================
    //  MÓDULO 4: PLAN DE RECUPERACIÓN SOSTENIBLE
    // ==========================================================
    {
      id: 'm4',
      title: 'Módulo 4: Tu Reseteo Personal',
      activities: [
        {
          id: 'm4a1',
          type: 'quiz',
          title: 'Verificación de Límites Vitales',
          description: '¿Cuál de estas opciones es un ejemplo de un "límite saludable" para prevenir el burnout?',
          questions: [
            {
              question: 'Te piden un favor laboral a las 6:00 PM cuando ya has terminado tu jornada y estás exhausto/a. ¿Cuál es la respuesta asertiva que protege tu energía?',
              options: [
                { text: 'Hacerlo rápidamente quejándote en silencio para no generar conflictos.', feedback: 'Incorrecto. Esto alimenta el resentimiento y contribuye directamente a la despersonalización del Burnout.' },
                { text: '"Entiendo la urgencia. Ahora mismo he terminado mi jornada, pero será mi prioridad número uno mañana a las 9:00 AM."', feedback: '¡Correcto! Eres profesional, ofreces una solución, pero mantienes firme la frontera de tu tiempo de recuperación fisiológica.' },
                { text: 'Ignorar el mensaje y no responder nunca.', feedback: 'Incorrecto. Aunque pone un límite, genera ansiedad en el entorno y no resuelve la comunicación.' }
              ]
            }
          ],
          ui: { optionBgColor: '#f1f5f9', optionTextColor: '#334155' }
        },
        {
          id: 'm4a2',
          type: 'finalChallenge',
          title: 'El Protocolo de las 48 Horas',
          description: 'Aterriza lo aprendido. Diseña un plan innegociable para las próximas 48 horas. Define: 1. Una tarea no vital que vas a cancelar o delegar. 2. Una técnica física para completar el ciclo del estrés (ej. bailar 10 min o llorar). 3. Un bloque de 30 minutos de "descanso radical" (sin pantallas, sin lectura, solo existir).',
        }
      ],
    }

  ],
};

export default course;