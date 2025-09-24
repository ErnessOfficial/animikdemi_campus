import type { Course } from '../../types';
import { mockInstructor } from './courseData';
import { assetPath } from '../../utils/paths';

export const course: Course = {
  id: 'gestion-del-estres-cotidiano',
  title: 'Gestión del Estrés Cotidiano',
  subtitle: 'Estrategias prácticas para recuperar el equilibrio en tu día a día',
  description:
    'Aprende a reconocer, comprender y manejar el estrés con técnicas simples y efectivas. Este curso te guiará paso a paso para recuperar tu bienestar en medio de las exigencias diarias.',
  category: 'Autocuidado y Regulación Emocional',
  broadCategories: ['Gestión Emocional'],
  coverImage: assetPath('images/estres_portada.png'),
  instructor: mockInstructor,
  learningObjectives: [
    'Identificar las principales fuentes de estrés en la vida cotidiana.',
    'Aplicar técnicas de respiración y relajación para calmar la mente.',
    'Desarrollar rutinas prácticas para prevenir y manejar el estrés.',
  ],
  modules: [
    {
      id: 'm1',
      title: 'Introducción al Estrés',
      activities: [
        {
          id: 'm1a1',
          type: 'video',
          title: 'Bienvenida y fundamentos del estrés',
          description:
            'En este video conocerás qué es el estrés, cómo se manifiesta en el cuerpo y cuáles son sus principales causas.',
          videoSrc: assetPath('videos/estres_intro.mp4'),
        },
        {
          id: 'm1a2',
          type: 'quiz',
          title: 'Autoevaluación inicial',
          description: 'Reflexiona sobre cómo percibes el estrés en tu vida diaria.',
          questions: [
            {
              question: '¿Cuál de los siguientes NO es un síntoma común del estrés?',
              options: [
                { text: 'Tensión muscular', feedback: 'No, este sí es un síntoma común.' },
                { text: 'Mayor claridad mental', feedback: 'Correcto, el estrés suele nublar la mente.' },
                { text: 'Problemas de sueño', feedback: 'No, el insomnio es una consecuencia frecuente.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'm2',
      title: 'Herramientas para Manejar el Estrés',
      activities: [
        {
          id: 'm2a1',
          type: 'text',
          title: 'Técnicas básicas de autocuidado',
          description: 'Conoce prácticas simples que puedes incorporar en tu día a día para reducir el impacto del estrés.',
          content: [
            'Organiza tu tiempo con descansos breves y frecuentes.',
            'Integra pequeños momentos de gratitud y respiración consciente.',
            'Mantén una rutina de sueño saludable.',
          ],
        },
        {
          id: 'm2a2',
          type: 'audio',
          title: 'Práctica guiada: Respiración 4x4',
          description: 'Ejercicio de respiración cuadrada para calmar cuerpo y mente en minutos.',
          audioSrc: assetPath('audios/respiracion_4x4.mp3'),
        },
      ],
    },
    {
      id: 'm3',
      title: 'Construyendo Resiliencia',
      activities: [
        {
          id: 'm3a1',
          type: 'text',
          title: 'Estrategias a largo plazo',
          description: 'Descubre cómo fortalecer tu resiliencia para enfrentar mejor los retos del futuro.',
          content: [
            'Cultivar hábitos de ejercicio y alimentación saludable.',
            'Establecer redes de apoyo emocional.',
            'Practicar la autocompasión en momentos de dificultad.',
          ],
        },
        {
          id: 'm3a2',
          type: 'reflectionTree',
          title: 'Reflexión guiada',
          description: 'Explora cómo reaccionas frente al estrés y elige nuevas respuestas más saludables.',
        },
        {
          id: 'm3a3',
          type: 'finalChallenge',
          title: 'Reto final: Tu plan anti-estrés',
          description: 'Diseña un plan personal para gestionar el estrés en tu vida cotidiana.',
        },
      ],
    },
  ],
};
