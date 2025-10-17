import type { Course } from '../../types';
import { mockInstructor } from './courseData';
import { assetPath } from '../../utils/paths';

// Curso: Programa de Inteligencia Emocional Aplicada - Nivel 1
// Nota de compatibilidad:
// - Assets referenciados desde la raíz: /images, /videos, /audios (colócalos físicamente en /public/...)
// - Se mantienen los videos de Google Drive indicados por el usuario.
// - Se evita repetir recursos salvo que estén adaptados al tema del módulo.
// - Contenido ampliado para hacerlo más interactivo, dinámico y reflexivo.

export const course: Course = {
  id: 'programa-inteligencia-emocional-nivel-1',
  title: 'Programa de Inteligencia Emocional Aplicada - Nivel 1',
  subtitle: 'Conciencia emocional, autorregulación, autocompasión y empatía práctica',
  description:
    'Un recorrido práctico para desarrollar habilidades emocionales esenciales: reconocer y etiquetar emociones, regular impulsos, cultivar autocompasión y comunicarnos con empatía y criterio. Nivel 1 del programa de AnImiKdemi.',
  category: 'Inteligencia Emocional Aplicada',
  broadCategories: ['Autoconocimiento', 'Gestión Emocional', 'Habilidades Sociales'],
  coverImage: assetPath('images/inteligencia-emocional-aplicada---nivel-1-_portada.png'),
  instructor: mockInstructor,
  learningObjectives: [
    'Reconocer y etiquetar con precisión las emociones propias y ajenas.',
    'Aplicar micro-hábitos de regulación para mejorar el control de impulsos.',
    'Practicar autocompasión basada en evidencia como base de la resiliencia.',
    'Usar empatía con límites y criterio para mejorar relaciones y comunicación.',
  ],
  modules: [
    // ==========================================================
    // MÓDULO 1 — CONCIENCIA Y ETIQUETADO EMOCIONAL (reorganizado)
    // ==========================================================
    {
      id: 'm1',
      title: 'Módulo 1: Conciencia y Etiquetado Emocional',
      activities: [
        // PUNTO 1 — Video + Transcripción + Quiz (en secuencia inmediata)
        {
          id: 'm1a1',
          type: 'video',
          title: 'Punto 1 · Bienvenida y contexto del curso',
          description:
            'Dale play para conocer la estructura del Nivel 1 y, al finalizar, responde el quiz para reforzar conceptos clave.',
          videoSrc:
            'https://drive.google.com/file/d/1jxCqgtCO4roxd6Uw3sf-kXXuiiA2xjUr/view?usp=sharing',
          content: [
            'Transcripción del video — Bienvenida',
            'Lee la transcripción y, al final, realiza el Quiz de Vocabulario Emocional.',
            '¡Hola! Te damos la más cordial bienvenida a Animikdemi, el primer nivel de nuestro programa de Inteligencia Emocional Aplicada. Estás a punto de iniciar un viaje de autodescubrimiento y transformación diseñado para equiparte con habilidades emocionales esenciales para una vida más plena y consciente.',
            'En este espacio interactivo y dinámico, no solo aprenderás teoría, sino que aplicarás herramientas prácticas para entender, gestionar y utilizar tus emociones de forma inteligente en tu día a día.',
            'El Nivel 1 de Animikdemi está estructurado en cuatro módulos fundamentales:',
            '1) Conciencia y Etiquetado Emocional — reconocer y nombrar con precisión lo que sientes.',
            '2) Neurociencia de la Regulación y Control de Impulsos — entender cómo reacciona tu cerebro y cómo recuperar el control.',
            '3) Autocompasión y Resiliencia — amabilidad activa hacia ti para recuperarte con fuerza.',
            '4) Empatía para Relaciones con Criterio — comprender al otro sin perder tu propio límite.',
            'Recuerda: este es un curso interactivo. Tu participación activa, tu reflexión y tus prácticas son la llave para desbloquear su potencial. ¡Bienvenido/a a Animikdemi!'
          ],
          questions: [
            {
              question: '¿Qué significa etiquetar una emoción?',
              options: [
                { text: 'Ponerle un nombre preciso a lo que siento', feedback: 'Correcto. Nombrar con precisión mejora la autorregulación.' },
                { text: 'Ignorar lo que siento', feedback: 'Incorrecto. Ignorar no es etiquetar.' },
                { text: 'Reaccionar sin filtro', feedback: 'Incorrecto.' },
                { text: 'Buscar una causa externa', feedback: 'Parcial: la causa ayuda, pero etiquetar es nombrar la emoción.' },
              ],
            },
            {
              question: '¿Cuál es un ejemplo de emoción básica?',
              options: [
                { text: 'Alegría', feedback: 'Correcto.' },
                { text: 'Motivación', feedback: 'Incorrecto. Es un estado motivacional.' },
                { text: 'Autoestima', feedback: 'Incorrecto. Es un constructo.' },
                { text: 'Imaginación', feedback: 'Incorrecto.' },
              ],
            },
            {
              question: 'La «granularidad emocional» es…',
              options: [
                { text: 'Diferenciar emociones sutiles', feedback: 'Correcto.' },
                { text: 'La intensidad máxima', feedback: 'Incorrecto.' },
                { text: 'La duración', feedback: 'Incorrecto.' },
                { text: 'El número de emociones existentes', feedback: 'Incorrecto.' },
              ],
            },
            {
              question: 'Decir “nerviosismo y anticipación” es…',
              options: [
                { text: 'Etiquetar con precisión', feedback: 'Correcto. Dos etiquetas finas aportan claridad.' },
                { text: 'Confundirse', feedback: 'Incorrecto.' },
                { text: 'Evitar sentir', feedback: 'Incorrecto.' },
                { text: 'Intelectualizar en exceso', feedback: 'No necesariamente.' },
              ],
            },
            {
              question: 'Nombrar con precisión lo que siento suele…',
              options: [
                { text: 'Disminuir la reactividad', feedback: 'Correcto.' },
                { text: 'Aumentar la intensidad', feedback: 'Incorrecto.' },
                { text: 'Hacer permanente la emoción', feedback: 'Incorrecto.' },
                { text: 'Eliminarla al instante', feedback: 'No necesariamente.' },
              ],
            },
            {
              question: 'Selecciona dos emociones distintas:',
              options: [
                { text: 'Rabia y frustración', feedback: 'Correcto: comparten base, pero son distintas.' },
                { text: 'Tristeza y melancolía', feedback: 'Parcial: matices cercanos.' },
                { text: 'Cansancio y agotamiento', feedback: 'Estados físicos, no emociones.' },
                { text: 'Juicio y pensamiento', feedback: 'Procesos cognitivos, no emociones.' },
              ],
            },
          ],
          // 'realiza el quiz a continuación para reforzar tu aprendizaje.' // <-- removed duplicate description
        },
        {
          id: 'm1a2',
          type: 'iframe',
          title: 'Componentes de las Emociones',
          description: 'Presentación Interactiva para el Aprendizaje Reflexivo Emocional',
          content: [
            'Esta presentación interactiva desarrolla en detalle los tres componentes de las emociones (fisiológico, cognitivo y conductual) a través de una estructura de slides navegables con elementos didácticos como hotspots clicables para explicaciones ampliadas, un quiz reflexivo de 6 preguntas (mezcla de opción múltiple y verdadero/falso) con feedback inmediato, y un módulo de reflexión personal con prompts guiados para journaling emocional. El diseño incentiva el aprendizaje reflexivo al invitar al usuario a conectar el contenido con experiencias propias, promoviendo la regulación emocional',
            `<!DOCTYPE html>
<html lang=
