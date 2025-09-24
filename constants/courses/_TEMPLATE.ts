// Plantilla para crear un curso compatible con AnImiKdemi Campus
// Instrucciones rápidas:
// 1) Duplica este archivo, renómbralo (p. ej. mi-curso-101.ts)
// 2) Asegura un id único (kebab-case) y rutas de assets en /public (imágenes/videos/audios)
// 3) Exporta el objeto como `course` (y opcionalmente `default`)

import type { Course } from '../../types';
import { mockInstructor } from './courseData';

export const course: Course = {
  // Identificadores básicos
  id: 'mi-curso-101', // ÚNICO, formato kebab-case
  title: 'Título del Curso',
  subtitle: 'Subtítulo claro y atractivo',
  description:
    'Descripción breve del valor del curso, enfoque didáctico y resultados esperados.',

  // Catálogo y taxonomía
  category: 'Autoconciencia & Regulación emocional',
  broadCategories: ['Autoconocimiento'], // 'Autoconocimiento' | 'Gestión Emocional' | 'Habilidades Sociales'
  coverImage: '/images/mi_curso_portada.png', // Coloca la imagen en public/images

  // Instructor (puedes definir uno propio si prefieres)
  instructor: mockInstructor,

  // Objetivos de aprendizaje (verbos de acción, medibles y claros)
  learningObjectives: [
    'Comprender X concepto y su aplicación práctica.',
    'Aplicar Y técnica en escenarios cotidianos.',
    'Desarrollar Z habilidad con ejercicios guiados.'
  ],

  // Contenido (al menos 1 módulo con 1 actividad)
  modules: [
    {
      id: 'm1',
      title: 'Módulo 1: Fundamentos',
      activities: [
        {
          id: 'm1a1',
          type: 'text',
          title: 'Introducción',
          description: 'Contexto del módulo y qué aprenderás.',
          content: [
            'Párrafo 1 explicando el tema.',
            'Párrafo 2 con un ejemplo práctico.'
          ]
        },
        {
          id: 'm1a2',
          type: 'video',
          title: 'Clase en video',
          description: 'Demostración paso a paso.',
          videoSrc: '/videos/mi_curso_intro.mp4' // Coloca el video en public/videos
        },
        {
          id: 'm1a3',
          type: 'quiz',
          title: 'Autoevaluación',
          description: 'Refuerza lo aprendido.',
          questions: [
            {
              question: '¿Cuál es el propósito principal de X?',
              options: [
                { text: 'Opción A', feedback: 'Explicación breve (correcto/incorrecto).' },
                { text: 'Opción B', feedback: 'Explicación breve (correcto/incorrecto).' },
                { text: 'Opción C', feedback: 'Explicación breve (correcto/incorrecto).' }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default course;

