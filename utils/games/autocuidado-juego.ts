// archivo: autocuidado-juego.ts

interface Situacion {
  id: number;
  descripcion: string;
  opciones: Opcion[];
}

interface Opcion {
  texto: string;
  esCorrecta: boolean;
  retroalimentacion: string;
}

export class JuegoAutocuidado {
  private situaciones: Situacion[] = [
    {
      id: 1,
      descripcion: "Llevas varias horas trabajando sin parar y sientes tensión en los hombros. ¿Qué haces?",
      opciones: [
        {
          texto: "Sigo trabajando, no tengo tiempo para descansar.",
          esCorrecta: false,
          retroalimentacion:
            "⚠️ Aunque parezca eficiente, seguir sin pausa puede aumentar el estrés y reducir tu productividad. Es mejor hacer una pausa breve."
        },
        {
          texto: "Me levanto, estiro los brazos y tomo 3 respiraciones profundas.",
          esCorrecta: true,
          retroalimentacion:
            "✅ ¡Excelente! Pequeñas pausas activas ayudan a liberar tensión muscular y mejorar la concentración."
        }
      ]
    },
    {
      id: 2,
      descripcion: "Recibes un correo con críticas sobre tu trabajo. Te sientes frustrado. ¿Cómo respondes?",
      opciones: [
        {
          texto: "Respondo inmediatamente explicando por qué no estoy de acuerdo.",
          esCorrecta: false,
          retroalimentacion:
            "⚠️ Responder bajo emociones intensas puede empeorar la situación. Es mejor tomar aire antes de actuar."
        },
        {
          texto: "Respiro profundamente, me doy 10 minutos y luego respondo con calma.",
          esCorrecta: true,
          retroalimentacion:
            "✅ ¡Muy bien! La autorregulación emocional es clave. Respirar ayuda a pensar con claridad."
        }
      ]
    },
    {
      id: 3,
      descripcion: "Tienes muchas tareas pendientes y no sabes por dónde empezar. ¿Qué haces?",
      opciones: [
        {
          texto: "Intento hacer todo al mismo tiempo para terminar rápido.",
          esCorrecta: false,
          retroalimentacion:
            "⚠️ Intentar hacer muchas cosas a la vez genera caos mental. Priorizar es más efectivo."
        },
        {
          texto: "Hago una lista, ordeno las tareas por prioridad y empiezo por una pequeña.",
          esCorrecta: true,
          retroalimentacion:
            "✅ ¡Perfecto! Organizarte reduce la ansiedad y te da sensación de control."
        }
      ]
    }
  ];

  private indiceActual: number = 0;
  private puntaje: number = 0;
  private juegoTerminado: boolean = false;
  private mensajeFinal: string = '';

  constructor() {}

  // Devuelve la situación actual
  getSituacionActual(): Situacion | null {
    if (this.indiceActual >= this.situaciones.length) {
      return null;
    }
    return this.situaciones[this.indiceActual];
  }

  // Procesa la selección del usuario
  seleccionarOpcion(opcionIndex: number): { correcta: boolean; retroalimentacion: string } {
    const situacion = this.getSituacionActual();
    if (!situacion) return { correcta: false, retroalimentacion: 'Juego terminado.' };

    const opcion = situacion.opciones[opcionIndex];
    if (opcion.esCorrecta) {
      this.puntaje++;
    }

    // Avanzamos a la siguiente situación
    this.indiceActual++;

    if (this.indiceActual === this.situaciones.length) {
      this.finalizarJuego();
    }

    return {
      correcta: opcion.esCorrecta,
      retroalimentacion: opcion.retroalimentacion
    };
  }

  // Finaliza el juego y genera mensaje final
  private finalizarJuego(): void {
    this.juegoTerminado = true;
    const porcentaje = (this.puntaje / this.situaciones.length) * 100;

    if (porcentaje === 100) {
      this.mensajeFinal = '🎉 ¡Felicidades! Dominas las bases del autocuidado. Sigue aplicándolas cada día.';
    } else if (porcentaje >= 60) {
      this.mensajeFinal = '👍 ¡Buen trabajo! Ya conoces algunas estrategias clave. Practícalas más.';
    } else {
      this.mensajeFinal = '💡 Estás en el camino. Repasa las retroalimentaciones y sigue aprendiendo sobre autocuidado.';
    }
  }

  // Devuelve si el juego terminó
  estaTerminado(): boolean {
    return this.juegoTerminado;
  }

  // Devuelve el resultado final
  getResultado(): { puntaje: number; total: number; mensaje: string } {
    return {
      puntaje: this.puntaje,
      total: this.situaciones.length,
      mensaje: this.mensajeFinal
    };
  }

  // Reinicia el juego
  reiniciar(): void {
    this.indiceActual = 0;
    this.puntaje = 0;
    this.juegoTerminado = false;
    this.mensajeFinal = '';
  }
}