/**
 * ============================================================
 * CURSO: El Faro en la Tormenta - Foco en tiempos de crisis
 * ENFOQUE: Aprendizaje interactivo y andragogía para adultos
 * en estados de alta carga emocional. Sin videos ni audios.
 * ============================================================
 */

import type { Course } from '../../types';
import { assetPath } from '../../utils/paths';
import { mockInstructor } from './courseData';

export const course: Course = {

  // ----------------------------------------------------------
  //  METADATOS BÁSICOS
  // ----------------------------------------------------------
  id: 'faro-tormenta-foco-crisis',
  title: 'El Faro en la Tormenta: Foco y Concentración en Tiempos de Crisis',
  subtitle: 'Estrategias basadas en neurociencia para mantener la claridad funcional cuando el mundo interior tiembla.',
  description: `Cuando atravesamos una crisis emocional, el cerebro entra en modo supervivencia. La concentración se dispersa, la memoria falla y la niebla mental nos invade. Este no es un curso tradicional de productividad; es un protocolo de "primeros auxilios cognitivos". A través de ejercicios interactivos, fundamentados en la neurobiología del estrés y la psicología cognitiva, aprenderás a recuperar el anclaje, gestionar tu energía (no tu tiempo) y ejecutar micro-focos de atención para seguir adelante sin invalidar tu proceso emocional.`,

  // ----------------------------------------------------------
  //  TAXONOMÍA Y CATEGORIZACIÓN
  // ----------------------------------------------------------
  category: 'Duelo, Pérdida & Crisis',
  broadCategories: ['Gestión Emocional', 'Autoconocimiento'],
  coverImage: 'https://res.cloudinary.com/djybwowo6/image/upload/v1781560718/Logo_Featuring_Sound_Wave_in_Letter_O-13_ue0sfy.png',

  // ----------------------------------------------------------
  //  INSTRUCTOR
  // ----------------------------------------------------------
  instructor: mockInstructor,

  // ----------------------------------------------------------
  //  DURACIÓN Y OBJETIVOS
  // ----------------------------------------------------------
  estimatedDurationMinutes: 60,

  learningObjectives: [
    'Comprender el impacto neurológico del estrés agudo en la corteza prefrontal y la capacidad de atención sostenida.',
    'Aplicar técnicas de anclaje somático para regular el sistema nervioso y disipar la niebla mental.',
    'Reencuadrar expectativas de rendimiento y pensamientos rumiantes utilizando el Muro de Reencuadre Cognitivo.',
    'Desarrollar un protocolo personal de "Micro-Foco" para cumplir tareas críticas gestionando la energía disponible.',
  ],

  // ----------------------------------------------------------
  //  MÓDULOS Y ACTIVIDADES
  // ----------------------------------------------------------

  modules: [

    // ==========================================================
    //  MÓDULO 1: LA NIEBLA MENTAL (Neurociencia básica)
    // ==========================================================
    {
      id: 'm1',
      title: 'Módulo 1: Anatomía de la Niebla Mental',
      activities: [
        {
          id: 'm1a1',
          type: 'text',
          title: 'Lectura: Tu cerebro no está roto, está ocupado',
          description: 'Entiende por qué no puedes concentrarte desde una perspectiva neurobiológica.',
          content: [
            'Cuando atraviesas una crisis (duelo, ruptura, problema severo), tu cerebro detecta una amenaza vital. La amígdala, el centro de procesamiento emocional, toma el control y desactiva parcialmente la corteza prefrontal, el área responsable del pensamiento lógico y la concentración.',
            'Esto se conoce como "Secuestro Amigdalino" (Acuñado por el psicólogo Daniel Goleman en su obra "Inteligencia Emocional").',
            'Tu incapacidad temporal para concentrarte no es falta de voluntad ni debilidad. Es tu cerebro utilizando el 90% de su energía disponible (glucosa) en procesar el dolor y mantenerte alerta para sobrevivir a la amenaza emocional.',
            '• Referencia Clave: En "El cuerpo lleva la cuenta", el Dr. Bessel van der Kolk explica cómo el estrés severo altera los filtros del cerebro, haciendo que los estímulos cotidianos parezcan abrumadores.',
            'El primer paso para recuperar el foco es dejar de castigarte por no tenerlo. La compasión reduce el cortisol, y con menos cortisol, la concentración comienza a regresar.'
          ],
          imageSrc: 'https://res.cloudinary.com/djybwowo6/image/upload/v1781560720/Logo_Featuring_Sound_Wave_in_Letter_O-12_dus3dn.png',
          imageAltSrc: assetPath('images/cerebro_crisis_fallback.png'),
          audioSrc: 'https://res.cloudinary.com/djybwowo6/video/upload/v1781740158/elfarodelatormenta01_atynds.mp3',
        },
        {
          id: 'm1a2',
          type: 'interactiveInvisible',
          title: 'Exploración: La Carga Invisible',
          description: 'Descubre qué procesos en segundo plano están consumiendo tu RAM mental hoy.',
        }
      ],
    },

    // ==========================================================
    //  MÓDULO 2: VOLVER AL CUERPO (Regulación)
    // ==========================================================
    {
      id: 'm2',
      title: 'Módulo 2: Desactivar la Alarma',
      activities: [
        {
          id: 'm2a1',
          type: 'flipCards',
          title: 'Técnicas de Anclaje: Gira y Practica',
          description: 'Antes de enfocar la mente, hay que regular el cuerpo. Descubre estrategias fundamentadas.',
          introText: 'Haz clic para descubrir técnicas somáticas para "volver al aquí y ahora" (Grounding).',
          flipGroups: [
            {
              title: 'Técnicas Rápidas (Menos de 1 min)',
              color: '#24668e',
              cards: [
                {
                  front: 'Técnica 5-4-3-2-1',
                  back: 'Basada en estimulación sensorial: Nombra 5 cosas que ves, 4 que tocas, 3 que escuchas, 2 que hueles y 1 que saboreas. Interrumpe el circuito de rumiación.'
                },
                {
                  front: 'Choque Térmico (Reflejo de Inmersión)',
                  back: 'Mojar tu rostro con agua muy fría. Activa el nervio vago y disminuye el ritmo cardíaco inmediatamente (Técnica validada por la Terapia Dialéctico Conductual - DBT).'
                },
              ],
            },
            {
              title: 'Técnicas de Respiración (1 a 3 mins)',
              color: '#6e4380',
              cards: [
                {
                  front: 'Respiración Fisiológica (Dr. Huberman)',
                  back: 'Dos inhalaciones cortas por la nariz y una exhalación larga por la boca. Repite 3 veces. Es la forma más rápida de reducir la hiperactivación autonómica según el laboratorio de Neurobiología de Stanford.'
                },
                {
                  front: 'Box Breathing (Respiración en Caja)',
                  back: 'Inhala en 4 segs, retén 4 segs, exhala en 4 segs, mantén vacío 4 segs. Utilizada por los Navy SEALs para mantener el foco bajo estrés extremo.'
                },
              ],
            },
          ],
        },
        {
          id: 'm2a2',
          type: 'quiz',
          title: 'Autoevaluación: Mitos sobre la Productividad en Crisis',
          description: 'Pon a prueba lo que crees que "deberías" estar haciendo.',
          questions: [
            {
              question: 'Cuando estás en medio de una crisis y tienes que trabajar o estudiar, lo mejor es:',
              options: [
                {
                  text: 'Obligarse a trabajar 8 horas seguidas como siempre para "distraer" a la mente.',
                  feedback: 'Incorrecto. Forzar la mente cuando está agotada emocionalmente genera "Burnout". Es insostenible.'
                },
                {
                  text: 'Ajustar las expectativas, hacer pausas frecuentes y enfocarse solo en lo crítico.',
                  feedback: '¡Exacto! El cerebro necesita "recargar batería" mucho más a menudo durante el estrés. Bajar la exigencia paradójicamente mejora el resultado.'
                },
                {
                  text: 'Abandonar todas las responsabilidades hasta sentirse al 100% bien.',
                  feedback: 'No siempre es posible ni recomendable. Aislarse de la rutina por completo puede aumentar el sentimiento de descontrol y la rumiación.'
                },
              ],
            }
          ],
          ui: {
            optionBgColor: '#f8fafc',
            optionTextColor: '#1e293b',
          },
        }
      ],
    },

    // ==========================================================
    //  MÓDULO 3: GESTIÓN DE ENERGÍA Y EL MICRO-FOCO
    // ==========================================================
    {
      id: 'm3',
      title: 'Módulo 3: La Técnica del Micro-Foco',
      activities: [
        {
          id: 'm3a1',
          type: 'text',
          title: 'Lectura: La Teoría de las Cucharas',
          description: 'Aprende a gestionar tu energía diaria cuando es muy limitada.',
          content: [
            'Imagina que cada día despiertas con 10 cucharas. Cada cuchara representa una unidad de energía cognitiva y física. (Concepto original de Christine Miserandino).',
            'En un día normal, ducharte cuesta 0 cucharas y leer un reporte cuesta 1. Pero en crisis, despertarte cuesta 2, ducharte 1, y contener la angustia gasta 4. Te quedan solo 3 cucharas para el resto del día.',
            'EL MICRO-FOCO:',
            'Dado que tu ventana de atención es reducida, la clave no es la gestión del tiempo, sino la "Gestión del Foco Energético".',
            '• No pienses en "Hacer el proyecto". Piensa en "Escribir el primer párrafo en los próximos 10 minutos".',
            '• Utiliza el "Pomodoro de Crisis": En lugar de la técnica tradicional de 25 min de trabajo por 5 de descanso, utiliza bloques de 15 min de trabajo x 10 de descanso somático (sin pantallas, mirando a lo lejos).'
          ],
          imageSrc: 'https://res.cloudinary.com/djybwowo6/image/upload/v1781741377/Logo_Featuring_Sound_Wave_in_Letter_O_f79ttg.png',
          audioSrc: 'https://res.cloudinary.com/djybwowo6/video/upload/v1781740158/elfarodelatormenta02_slusdi.mp3',
        },
        {
          id: 'm3a2',
          type: 'cardGame',
          title: 'Juego de Micro-Focos: Cortando el Elefante',
          description: 'Empareja el pensamiento abrumador de "elefante completo" con su versión troceada y accionable de "micro-foco".',
          cards: [
            { id: 1, matchId: 1, text: 'Tengo que limpiar toda la casa hoy', type: 'limiting' },
            { id: 2, matchId: 1, text: 'Recogeré solo la basura del salón por 5 minutos', type: 'empowering' },
            { id: 3, matchId: 2, text: 'Tengo que hacer la presentación mensual (30 slides)', type: 'limiting' },
            { id: 4, matchId: 2, text: 'Escribiré el esquema de 3 puntos en un post-it', type: 'empowering' },
            { id: 5, matchId: 3, text: 'Debo procesar los 150 correos pendientes', type: 'limiting' },
            { id: 6, matchId: 3, text: 'Responderé solo a los 2 correos urgentes de mi jefe', type: 'empowering' },
            { id: 7, matchId: 4, text: 'Tengo que decidir el futuro de mi vida/proyecto', type: 'limiting' },
            { id: 8, matchId: 4, text: 'Solo necesito decidir qué voy a cenar esta noche', type: 'empowering' },
          ],
        }
      ],
    },

    // ==========================================================
    //  MÓDULO 4: GESTIÓN DE PENSAMIENTOS INTRUSIVOS
    // ==========================================================
    {
      id: 'm4',
      title: 'Módulo 4: Cuando la Mente Interrumpe',
      activities: [
        {
          id: 'm4a1',
          type: 'reframeWall',
          title: 'Muro Cognitivo: Dialogando con la Angustia',
          description: 'La rumiación (pensar en bucle sobre el problema) agota la energía frontal. Identifica tus bucles y reencuádralos.',
        },
        {
          id: 'm4a2',
          type: 'evaluation',
          title: 'Bitácora de Descarga',
          description: 'La técnica de "descarga en papel" libera RAM en tu cerebro. Escribe para vaciar.',
          questions: [
            { prompt: '¿Cuál es el pensamiento recurrente específico que te ha robado la concentración hoy?' },
            { prompt: '¿Puedes resolver ese problema en los próximos 60 minutos? Si la respuesta es NO, ¿qué frase te dirás para "posponer" amablemente la preocupación?' },
            { prompt: '¿Qué expectativa sobre ti mismo/a puedes soltar el día de hoy para aliviar la presión?' },
          ],
        }
      ],
    },

    // ==========================================================
    //  MÓDULO 5: PLAN DE ACCIÓN Y CIERRE
    // ==========================================================
    {
      id: 'm5',
      title: 'Módulo 5: Tu Protocolo de Supervivencia',
      activities: [
        {
          id: 'm5a1',
          type: 'reflectionTree',
          title: 'El Árbol de tu Estabilidad',
          description: 'Construye tu mapa visual. Raíces (Técnicas de anclaje), Tronco (Los límites que pondrás esta semana), Ramas (Tus tareas micro-enfocadas reales).',
          imageSrc: 'https://res.cloudinary.com/djybwowo6/image/upload/v1781560722/Tree_on_island_during_storm_202606152256_i77cnl.jpg',
          treeConfig: {
            categories: [
              { id: 'raices', title: 'Raíces: Técnicas de anclaje', icon: 'fas fa-anchor', bgColor: '#e2e8f0' },
              { id: 'tronco', title: 'Tronco: Límites de esta semana', icon: 'fas fa-shield-alt', bgColor: '#ffedd5' },
              { id: 'ramas', title: 'Ramas: Tareas micro-enfocadas', icon: 'fas fa-leaf', bgColor: '#dcfce7' }
            ],
            bank: {
              raices: ["Respiración Fisiológica", "Técnica 5-4-3-2-1", "Choque térmico", "Estiramiento consciente", "Pausa somática 2 min"],
              tronco: ["Apagar notificaciones de noche", "Decir 'no' a reuniones no vitales", "Evitar noticias antes de dormir", "Limitar rumiación a 15 min", "Cerrar laptop a las 18:00"],
              ramas: ["Escribir 1 correo crítico", "Anotar la idea principal", "Lavar los platos 5 min", "Hacer 1 esquema simple", "Decidir qué cenar"]
            },
            hideImage: true
          }
        },
        {
          id: 'm5a2',
          type: 'finalChallenge',
          title: 'Tu Protocolo Personal para Días Grises',
          description: 'Diseña tu plan de acción de 3 pasos para mañana. Cuando te sientas sobrepasado/a y la niebla aparezca, ¿Qué harás primero para el cuerpo? ¿Qué tarea descartarás? ¿A qué único micro-foco le dedicarás 15 minutos?',
        }
      ],
    }

  ],
};

export default course;