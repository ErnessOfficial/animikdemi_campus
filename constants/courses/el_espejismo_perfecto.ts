/**
 * ============================================================
 * CURSO: El Espejismo Perfecto
 * ENFOQUE: Rumia Nostálgica y Comparación Social Disfuncional
 * METODOLOGÍA: Andragogía, microlearning interactivo, TCC.
 * ============================================================
 */

import type { Course } from '../../types';
import { assetPath } from '../../utils/paths';
import { mockInstructor } from './courseData';

export const course: Course = {

  // ----------------------------------------------------------
  //  METADATOS BÁSICOS
  // ----------------------------------------------------------
  id: 'espejismo-comparacion-nostalgia',
  title: 'El Espejismo Perfecto: Liberándote de la Nostalgia y la Comparación',
  subtitle: 'Comprende por qué idealizas el pasado y te mides con los demás, y aprende a construir satisfacción en tu presente.',
  description: `¿Sientes a menudo que tus mejores años quedaron atrás? ¿Revisas las redes sociales y terminas sintiendo que te estás quedando atrás en la vida frente a tus pares? La rumia nostálgica y la comparación social disfuncional son trampas cognitivas que distorsionan nuestra realidad y nos roban la alegría del presente. En este curso interactivo, fundamentado en la Teoría de la Comparación Social y la psicología de los sesgos de memoria, aprenderás a detectar estas trampas, desarmar la insatisfacción crónica y reescribir tus propias métricas de éxito.`,

  // ----------------------------------------------------------
  //  TAXONOMÍA Y CATEGORIZACIÓN
  // ----------------------------------------------------------
  category: 'Autoconciencia & Regulación emocional',
  broadCategories: ['Autoconocimiento', 'Gestión Emocional'],
  coverImage:'https://res.cloudinary.com/djybwowo6/image/upload/v1781882987/Curso_de_bienestar_emocional_202606191636_m0ng0x.jpg',

  // ----------------------------------------------------------
  //  INSTRUCTOR
  // ----------------------------------------------------------
  instructor: mockInstructor,

  // ----------------------------------------------------------
  //  DURACIÓN Y OBJETIVOS
  // ----------------------------------------------------------
  estimatedDurationMinutes: 75,

  learningObjectives: [
    'Evaluar el nivel personal de tendencia a la rumia nostálgica y la comparación mediante una autoevaluación diagnóstica preliminar.',
    'Identificar el sesgo de "Retrospección Color de Rosa" y cómo el cerebro edita selectivamente el pasado.',
    'Diferenciar entre comparación social ascendente inspiracional y comparación disfuncional destructiva (Teoría de Festinger).',
    'Aplicar el reencuadre cognitivo para transformar la envidia o la insatisfacción en combustible para metas personales.',
  ],

  // ----------------------------------------------------------
  //  MÓDULOS Y ACTIVIDADES
  // ----------------------------------------------------------

  modules: [

    // ==========================================================
    //  MÓDULO 1: EL ESPEJO Y EL RETROVISOR (Diagnóstico)
    // ==========================================================
    {
      id: 'm1',
      title: 'Módulo 1: El Diagnóstico del Espejo',
      activities: [
        // ---- NUEVO TIPO DE ACTIVIDAD: diagnosticTest ----
        // Diseñado específicamente para evaluar rangos con lógica de sumatoria.
        {
          id: 'm1a1',
          type: 'diagnosticTest' as any, // Hacemos cast a 'any' asumiendo que el equipo de dev añadirá este tipo
          title: 'Test Interactivo: ¿Vives en el Presente o en el Escaparate?',
          description: 'Responde con honestidad a estas 15 afirmaciones. Este ejercicio no es un diagnóstico clínico, sino una brújula de autoconocimiento para orientar tu aprendizaje.',
          scoringOptions: [
            { text: 'Nunca', value: 0 },
            { text: 'A veces', value: 1 },
            { text: 'Frecuentemente', value: 2 }
          ],
          questions: [
            '1. Siento que mis mejores épocas o años más felices ya quedaron en el pasado.',
            '2. Reviso los perfiles sociales de antiguos compañeros y me siento estancado/a.',
            '3. Suelo pensar "si tan solo hubiera tomado otra decisión en el pasado, hoy sería feliz".',
            '4. Minimizo mis logros actuales porque alguien de mi edad ya ha logrado más.',
            '5. Al recordar relaciones o trabajos anteriores, olvido lo malo y solo extraño lo bueno.',
            '6. Evito reuniones sociales o familiares para no tener que explicar "en qué ando" o "qué he logrado".',
            '7. Siento una insatisfacción difusa con mi pareja/casa/trabajo al compararlos con los de mis amigos.',
            '8. Paso tiempo imaginando cómo sería mi vida si no hubiera "perdido" ciertas oportunidades.',
            '9. Oculto partes de mi vida (como mis problemas o inseguridades) para aparentar el éxito de los demás.',
            '10. Siento que el presente es aburrido, gris o demasiado difícil comparado con "antes".',
            '11. Me cuesta alegrarme genuinamente por el éxito ajeno sin sentir pena por mí mismo/a.',
            '12. Constantemente uso la frase "antes todo era más fácil/mejor".',
            '13. Mido mi valor personal según el salario, estado civil o posesiones en contraste con mi entorno.',
            '14. Siento ansiedad después de pasar más de 15 minutos en redes sociales viendo la vida de otros.',
            '15. Creo firmemente que la vida me debe algo o ha sido más injusta conmigo que con los demás.'
          ] as any,
          resultsMapping: [
            {
              min: 0,
              max: 9,
              level: 'Nivel 1: Bajo - Anclaje Saludable',
              title: 'Vives predominantemente en tu propio carril.',
              description: 'No presentas rasgos significativos de rumia o comparación tóxica. Haces comparaciones esporádicas (lo cual es natural en el ser humano), pero no permites que esto dicte tu valor ni te robe la energía de tu presente.'
            },
            {
              min: 10,
              max: 19,
              level: 'Nivel 2: Medio - Comparación Sectorizada',
              title: 'Luces de alerta en áreas específicas.',
              description: 'Muestras algunos signos de insatisfacción. Es probable que no te compares en todo, pero tienes "puntos débiles" (quizá solo en lo laboral, o solo al ver parejas felices). Tu cerebro usa la nostalgia como refugio ocasional cuando el presente se pone difícil.'
            },
            {
              min: 20,
              max: 30,
              level: 'Nivel 3: Alto - El Espejismo Activo',
              title: 'Secuestro del Presente.',
              description: 'Muestras patrones muy marcados de rumia y comparación disfuncional. Estás evaluando tu "detrás de cámaras" (con todos sus errores y rutinas) contra el "tráiler de la película" de los demás. Este curso te será de vital ayuda para resetear tus métricas de vida.'
            }
          ]
        } as any,
        {
          id: 'm1a2',
          type: 'text',
          title: 'Lectura: La Psicología de la Insatisfacción',
          description: 'Entendiendo la maquinaria de nuestra mente comparativa.',
          content: [
            '¿Por qué hacemos esto? En 1954, el psicólogo Leon Festinger desarrolló la "Teoría de la Comparación Social". Postuló que los humanos tenemos un impulso innato de evaluarnos a nosotros mismos.',
            'El problema es que en la prehistoria nos comparábamos con una tribu de 50 personas para saber si corríamos lo suficientemente rápido para huir de un depredador. Hoy, tu cerebro de la Edad de Piedra está intentando compararse con el éxito editado, filtrado y multimillonario de 4 billones de personas en internet.',
            '• El efecto "Highlight Reel": Estás comparando tu vida diaria (con lavar los platos, deudas y cansancio) con el "carrete de mejores momentos" de otra persona.',
            '• La Retrospección Color de Rosa (Rosy Retrospection): Es un sesgo cognitivo documentado donde el cerebro, para protegerte, borra el estrés, el aburrimiento y el dolor del pasado, dejándote el recuerdo de una época dorada que, en realidad, nunca existió así.'
          ],
        }
      ],
    },

    // ==========================================================
    //  MÓDULO 2: LA TRAMPA DE LA NOSTALGIA
    // ==========================================================
    {
      id: 'm2',
      title: 'Módulo 2: Desmontando la Edad de Oro',
      activities: [
        {
          id: 'm2a1',
          type: 'flipCards',
          title: 'El Museo de la Nostalgia: Expectativa vs Realidad',
          description: 'Haz clic en las tarjetas para desmontar los mitos comunes sobre el pasado idealizado.',
          flipGroups: [
            {
              title: 'Mitos de la "Época Dorada"',
              color: '#d97706',
              cards: [
                {
                  front: 'Mito: "En la universidad/escuela era completamente feliz y sin preocupaciones."',
                  back: 'Realidad: Olvidas el estrés extremo de los exámenes, la inseguridad sobre el futuro y los dramas sociales. Recuerdas las fiestas, pero borraste la angustia.'
                },
                {
                  front: 'Mito: "Mi ex pareja y yo teníamos una conexión perfecta que nunca repetiré."',
                  back: 'Realidad (Sesgo de Confirmación): Tu cerebro omite las discusiones, las incompatibilidades graves y la razón por la que terminaron, idealizando solo los picos de dopamina.'
                },
              ],
            },
            {
              title: 'Tipos de Nostalgia (Según S. Boym)',
              color: '#4338ca',
              cards: [
                {
                  front: 'Nostalgia Restaurativa (Peligrosa)',
                  back: 'El intento de reconstruir obsesivamente el pasado. Creer que si pudieras volver atrás, o recuperar a alguien, tus problemas actuales desaparecerían. Invalida el presente.'
                },
                {
                  front: 'Nostalgia Reflexiva (Saludable)',
                  back: 'Aceptar que el pasado se fue, mirarlo con cariño y gratitud. Disfrutar del recuerdo como una vieja foto, sabiendo que el hogar ahora es el momento presente.'
                },
              ],
            }
          ],
        },
        {
          id: 'm2a2',
          type: 'interactiveInvisible',
          title: 'Práctica: La Memoria Completa',
          description: 'El cerebro edita el pasado. Vamos a obligarlo a recordar la película completa.',
          // El usuario escribe un recuerdo idealizado ("Extraño mi antiguo trabajo") 
          // y el componente le obliga a listar 3 cosas negativas que había borrado de esa época.
        }
      ],
    },

    // ==========================================================
    //  MÓDULO 3: EL LADRÓN DE LA ALEGRÍA
    // ==========================================================
    {
      id: 'm3',
      title: 'Módulo 3: La Anatomía de la Comparación',
      activities: [
        {
          id: 'm3a1',
          type: 'cardGame',
          title: 'Juego: Hackeando el Estímulo Visual',
          description: 'Empareja el disparador tóxico (lo que ves y sientes) con su realidad cognitiva (el reencuadre lógico).',
          cards: [
            { id: 1, matchId: 1, text: 'Veo a alguien de mi edad comprando una casa enorme.', type: 'limiting' },
            { id: 2, matchId: 1, text: 'No conozco sus deudas, su herencia ni los sacrificios ocultos tras esa foto.', type: 'empowering' },
            { id: 3, matchId: 2, text: 'Sus vacaciones en Bali hacen ver mi vida miserable.', type: 'limiting' },
            { id: 4, matchId: 2, text: 'Es un viaje de 10 días, los otros 355 días tienen rutinas tan ordinarias como las mías.', type: 'empowering' },
            { id: 5, matchId: 3, text: 'La pareja perfecta en redes celebrando su aniversario.', type: 'limiting' },
            { id: 6, matchId: 3, text: 'Las redes muestran la validación pública, no la calidad de la intimidad privada.', type: 'empowering' },
            { id: 7, matchId: 4, text: 'Siento que ya "se me hizo tarde" para lograr el éxito.', type: 'limiting' },
            { id: 8, matchId: 4, text: 'El éxito es cronológicamente ciego; las líneas de tiempo vitales son inventos culturales, no biológicos.', type: 'empowering' },
          ],
        },
        {
          id: 'm3a2',
          type: 'quiz',
          title: 'Check-point: Dirección de la Comparación',
          description: 'Identifica los efectos de hacia dónde miras.',
          questions: [
            {
              question: 'Según la psicología, la "Comparación Ascendente" (mirar a quienes consideramos mejores que nosotros) puede tener dos efectos. ¿Cuáles son?',
              options: [
                { text: 'Aumento de autoestima y arrogancia.', feedback: 'Incorrecto. Eso suele darse en la comparación descendente extrema.' },
                { text: 'O bien nos inspira a mejorar, o bien nos hunde en la envidia y la insuficiencia.', feedback: '¡Correcto! Depende de nuestra autoestima base. Si creemos que ese éxito es inalcanzable, nos deprimimos. Si creemos que es posible para nosotros, nos inspira.' },
                { text: 'Siempre genera depresión severa sin importar el contexto.', feedback: 'No siempre. Si vemos a un mentor, la comparación ascendente puede ser muy constructiva.' }
              ]
            }
          ],
          ui: { optionBgColor: '#fdf4ff', optionTextColor: '#701a75' }
        }
      ],
    },

    // ==========================================================
    //  MÓDULO 4: REDEFINIENDO EL ÉXITO
    // ==========================================================
    {
      id: 'm4',
      title: 'Módulo 4: Auditoría de tus Reglas de Vida',
      activities: [
        {
          id: 'm4a1',
          type: 'evaluation',
          title: 'Ejercicio Reflexivo: ¿Quién escribió tus métricas?',
          description: 'La insatisfacción nace cuando nos medimos con reglas que no elegimos (la sociedad, nuestros padres, el algoritmo).',
          content: ['Tómate tu tiempo para responder estas preguntas. No hay respuestas correctas, solo tuyas.'],
          questions: [
            { prompt: 'Si nadie en el mundo pudiera publicar en redes sociales sus logros ni su vida amorosa, ¿qué cambiarías de tu vida actual?' },
            { prompt: 'Identifica una regla de éxito que te impusieron (ej: "A los 30 debes estar casado/a"). ¿Estás dispuesto/a a seguir sufriendo por no cumplirla?' },
            { prompt: 'Define TÚ el éxito hoy: Escribe 3 cosas sencillas que ya tienes en tu presente que te hacen sentir tranquilidad.' }
          ],
        },
        {
          id: 'm4a2',
          type: 'reframeWall',
          title: 'El Alquimista de la Envidia',
          description: 'La envidia es un radar de lo que deseamos, no un defecto moral. Escribe una situación que te genere envidia y transfórmala en curiosidad o inspiración. Ej: "Envidio su ascenso" -> "Investigaré qué habilidades aprendió para aplicarlas yo".',
        }
      ],
    },

    // ==========================================================
    //  MÓDULO 5: CONSTRUYENDO UN PRESENTE SÓLIDO
    // ==========================================================
    {
      id: 'm5',
      title: 'Módulo 5: Desintoxicación y Cierre',
      activities: [
        {
          id: 'm5a1',
          type: 'reflectionTree',
          title: 'El Árbol de tu Línea Temporal',
          description: 'Construye tu identidad real. Raíces: Un error del pasado que te hizo sabio. Tronco: Un valor que te define hoy. Ramas: Dos frutos (logros, aunque parezcan pequeños) de tu presente.',
          imageSrc: assetPath('images/tree_illustration.png'),
        },
        {
          id: 'm5a2',
          type: 'finalChallenge',
          title: 'Desafío de 7 Días: Dieta Anti-Comparación',
          description: 'Genera tu compromiso escrito. Durante los próximos 7 días: 1. Silencia o deja de seguir al menos a 3 cuentas/personas en redes sociales que sistemáticamente te hagan sentir que "no eres suficiente" o que "vas atrasado en la vida". 2. Cuando la nostalgia ataque, en lugar de revisar fotos de hace 5 años, llama a un amigo para conversar en el presente. ¿Estás listo/a? Escribe "ACEPTO" y tu propia regla para esta semana.',
        }
      ],
    }

  ],
};

export default course;