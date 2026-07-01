import type { Course } from '../../types';
import { mockInstructor } from './courseData';
import { assetPath } from '../../utils/paths';

export const course: Course = {
  id: 'bienestar-trabajo-101',
  title: 'Bienestar Laboral: Metodología PILAR',
  subtitle: 'Construye resiliencia, propósito y seguridad psicológica en tu entorno profesional.',
  description:
    'Un micro-curso dinámico de 40 minutos para dominar el marco de resiliencia organizacional PILAR: Propósito, Inclusión, Liderazgo, Autogestión y Reconocimiento. Diseñado para prevenir el burnout y fomentar equipos que florecen.',
  category: 'Bienestar en el Trabajo - Especial "PILAR"',
  broadCategories: ['Gestión Emocional', 'Habilidades Sociales'],
  coverImage: assetPath('images/course_cover_6.png'),
  instructor: mockInstructor,
  estimatedDurationMinutes: 40,
  learningObjectives: [
    'Aplicar de forma práctica el marco interdependiente de la Metodología PILAR.',
    'Identificar y propiciar la seguridad psicológica en tu equipo de trabajo.',
    'Diferenciar entre presentismo, burnout y una cultura de productividad sostenible.',
    'Diseñar un tablero personalizado de micro-hábitos de autocuidado y autogestión.'
  ],
  modules: [
    // ==========================================================
    // MÓDULO 1 — EL SENTIDO Y LA SEGURIDAD (P & I)
    // ==========================================================
    {
      id: 'm1',
      title: 'Módulo 1: El Sentido y la Seguridad (P & I)',
      activities: [
        {
          id: 'm1a1',
          type: 'sliderAssessment' as any,
          title: 'Punto 1 · Radar de Resiliencia Organizacional (PILAR)',
          description: 'Evalúa la presencia de los 5 pilares en tu trabajo actual para obtener tu diagnóstico de salud laboral.',
          domains: [
            {
              id: 'pilar_p',
              name: 'P - Propósito',
              leftLabel: 'Mi trabajo carece de significado',
              rightLabel: 'Mis valores se alinean con la misión'
            },
            {
              id: 'pilar_i',
              name: 'I - Inclusión',
              leftLabel: 'Tengo miedo de cometer errores',
              rightLabel: 'Me siento seguro de expresar ideas'
            },
            {
              id: 'pilar_l',
              name: 'L - Liderazgo',
              leftLabel: 'Liderazgo inaccesible o rígido',
              rightLabel: 'Líderes que modelan el bienestar'
            },
            {
              id: 'pilar_a',
              name: 'A - Autogestión',
              leftLabel: 'No gestiono mi estrés diario',
              rightLabel: 'Tengo micro-hábitos de autocuidado'
            },
            {
              id: 'pilar_r',
              name: 'R - Reconocimiento',
              leftLabel: 'Mis esfuerzos son invisibles',
              rightLabel: 'Se validan mis logros y crecimiento'
            }
          ]
        },
        {
          id: 'm1a2',
          type: 'text',
          title: 'Punto 2 · Seguridad Psicológica e Inclusión',
          description: 'Nociones clave sobre el cimiento esencial de la innovación y la colaboración según Amy Edmondson.',
          imageSrc: 'https://res.cloudinary.com/djybwowo6/image/upload/v1782833448/placeholder_pilar_m1a2_z9xypq.jpg',
          content: [
            'La seguridad psicológica no significa ser complaciente o evitar el debate. Se define como la libertad para ser vulnerable: cometer errores, hacer preguntas, proponer ideas audaces y dar feedback sin temor a represalias, juicios destructivos o humillaciones públicas.',
            'Basado en las investigaciones de la Dra. Amy Edmondson de Harvard, existen 5 pilares para consolidar este entorno:',
            '1. Confianza en el Equipo: Fomentar el respeto mutuo y la empatía activa.',
            '2. Apertura ante el Error: Tratar los fallos como oportunidades de aprendizaje y mejora, no como motivos de castigo.',
            '3. Colaboración Inclusiva: Valorar la diversidad de opiniones y escuchar todas las voces por igual.',
            '4. Feedback Constante: Ofrecer una guía bidireccional clara, asertiva y orientada a soluciones.',
            '5. Liderazgo Accesible: Líderes que modelan la humildad intelectual reconociendo que no lo saben todo.',
            'Cuando falta seguridad psicológica, los equipos caen en el silencio defensivo y la desconfianza, lo que dispara los riesgos psicosociales y la rotación de talento.'
          ]
        }
      ]
    },

    // ==========================================================
    // MÓDULO 2 — LIDERAZGO Y AUTOGESTIÓN (L & A)
    // ==========================================================
    {
      id: 'm2',
      title: 'Módulo 2: Liderazgo y Autogestión (L & A)',
      activities: [
        {
          id: 'm2a1',
          type: 'mythBuster' as any,
          title: 'Punto 1 · Mitos sobre la Productividad y el Burnout',
          description: 'Desliza o presiona para derribar falsas creencias sobre el rendimiento y el autocuidado en la oficina.',
          statements: [
            {
              text: 'Trabajar bajo estrés continuo estimula la creatividad y mejora la resiliencia.',
              isMyth: true,
              explanation: 'Mito. El estrés crónico satura la amígdala cerebral y bloquea la corteza prefrontal, anulando la creatividad, el análisis estratégico y deteriorando la salud mental.'
            },
            {
              text: 'La autogestión consiste en capacitar al colaborador con herramientas de mindfulness, actividad física y finanzas.',
              isMyth: false,
              explanation: 'Hecho. Empoderar a los empleados reduce la dependencia de intervenciones externas y fomenta una cultura de proactividad y responsabilidad sobre su salud.'
            },
            {
              text: 'El presentismo (estar físicamente sin motivación real para rendir) genera pérdidas de productividad equivalentes a la ausencia física.',
              isMyth: false,
              explanation: 'Hecho. Los empleados quemados o desmotivados rinden significativamente menos, lo que impacta de manera invisible pero masiva en los resultados organizacionales.'
            }
          ]
        },
        {
          id: 'm2a2',
          type: 'interactiveScenario' as any,
          title: 'Punto 2 · Simulador: El Feedback de Mejora Crítico',
          description: 'Pon a prueba tus habilidades de comunicación consciente al recibir una observación difícil por parte de tu líder.',
          imageSrc: 'https://res.cloudinary.com/djybwowo6/image/upload/v1782833448/placeholder_pilar_m2a2_w8aypd.jpg',
          scenarios: [
            {
              context: 'Tu líder de proyecto te cita a solas y te comenta de manera directa y firme: "El último informe financiero que presentaste tiene bastantes inconsistencias en la comparativa de datos y la estructura es compleja. Debes corregirlo hoy".',
              options: [
                {
                  text: 'Pausar tu impulso de defensa, validar la observación y preguntar asertivamente: "Agradezco que me lo digas. ¿Podrías señalarme un ejemplo concreto de los datos que consideras inconsistentes para asegurarme de alinearlos bien hoy?"',
                  isOptimal: true,
                  consequence: '¡Excelente! Has co-regulado tu reacción defensiva inicial, agradecido la apertura y pedido aclaraciones constructivas sobre hechos objetivos, lo que acelera la solución sin dañar tu autoestima.'
                },
                {
                  text: 'Justificarte inmediatamente: "Es que no me pasaron los datos a tiempo y además he tenido demasiadas reuniones esta semana, era imposible revisarlo con calma".',
                  isOptimal: false,
                  consequence: 'Esta respuesta denota evasión y reactividad. Al defenderte en lugar de escuchar, pierdes la oportunidad de corregir con agilidad y proyectas falta de asunción de responsabilidad.'
                },
                {
                  text: 'Aceptar en silencio con timidez y molestia: "Está bien, lo haré de nuevo", y pasar el resto del día rumiando que tu líder te tiene mala voluntad.',
                  isOptimal: false,
                  consequence: 'Esta reacción pasivo-agresiva promueve la desconfianza, la rumiación destructiva y no aclara el estándar esperado del informe, arriesgando un nuevo error.'
                }
              ]
            }
          ]
        }
      ]
    },

    // ==========================================================
    // MÓDULO 3 — RECONOCIMIENTO Y HÁBITOS (R)
    // ==========================================================
    {
      id: 'm3',
      title: 'Módulo 3: Reconocimiento y Hábitos (R)',
      activities: [
        {
          id: 'm3a1',
          type: 'emotionWheel' as any,
          title: 'Punto 1 · La Rueda del Aprecio y Crecimiento',
          description: 'El reconocimiento va mucho más allá de un bono financiero. Explora las distintas vías de motivación y validación profesional.',
          imageSrc: 'https://res.cloudinary.com/djybwowo6/image/upload/v1782833448/placeholder_pilar_m3a1_rueda.jpg',
          coreEmotions: [
            {
              name: 'Verbal / Social',
              color: '#eab308',
              nuances: ['Agradecimiento público', 'Reconocimiento en equipo', 'Feedback específico', 'Validación del esfuerzo'],
              physicalSensation: 'Aumenta el sentido de pertenencia y cohesión, reforzando la moral y lealtad con la organización.'
            },
            {
              name: 'Crecimiento',
              color: '#8b5cf6',
              nuances: ['Plan de carrera claro', 'Capacitación profesional', 'Nuevos retos estimulantes', 'Mentorías internas'],
              physicalSensation: 'Satisface la necesidad humana de desarrollo continuo y autorrealización, incrementando la retención de talento.'
            },
            {
              name: 'Calidad de Vida',
              color: '#3b82f6',
              nuances: ['Flexibilidad horaria', 'Días de descanso extra', 'Soporte de bienestar', 'Límites de desconexión'],
              physicalSensation: 'Reduce directamente el estrés corporal y el ausentismo, equilibrando la vida personal y profesional.'
            }
          ]
        },
        {
          id: 'm3a2',
          type: 'habitTrackerBuilder' as any,
          title: 'Punto 2 · Tu Mochila de Hábitos PILAR',
          description: 'Selecciona 3 micro-hábitos de autocuidado y límites profesionales que te comprometes a incorporar en tu rutina laboral esta semana.',
          habitsToChoose: [
            { category: 'Autocuidado', text: 'Hacer micro-pausas activas de 2 minutos por cada 90 minutos de trabajo enfocado.' },
            { category: 'Desconexión', text: 'Apagar o silenciar las notificaciones de chat laboral a partir de mi hora de salida.' },
            { category: 'Reconocimiento', text: 'Enviar un mensaje breve de agradecimiento a un colega que me haya apoyado esta semana.' },
            { category: 'Seguridad Psicológica', text: 'Admitir un error de forma natural en mi próxima reunión grupal para modelar la apertura.' }
          ],
          maxSelection: 3
        }
      ]
    }
  ]
};

export default course;
