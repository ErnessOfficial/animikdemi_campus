// src/components/activities/InteractiveGameActivity.tsx

import React, { useState, useEffect } from 'react';
import './InteractiveGameActivity.css'; // Archivo CSS opcional (incluido más abajo)
import { JuegoAutocuidado } from '../../utils/games/autocuidado-juego';

interface Props {
  title: string;
  description: string;
  instructions?: string;
  onComplete: (score: number, maxScore: number) => void; // Para notificar progreso al sistema
}

const InteractiveGameActivity: React.FC<Props> = ({
  title,
  description,
  instructions = 'Elige la opción más saludable en cada situación.',
  onComplete,
}) => {
  const [juego] = useState(new JuegoAutocuidado());
  const [situacionActual, setSituacionActual] = useState(juego.getSituacionActual());
  const [retroalimentacion, setRetroalimentacion] = useState<string | null>(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [resultado, setResultado] = useState<{ puntaje: number; total: number; mensaje: string } | null>(
    null
  );

  // Maneja la selección de una opción
  const handleSeleccionar = (index: number) => {
    const respuesta = juego.seleccionarOpcion(index);
    setRetroalimentacion(respuesta.retroalimentacion);

    // Si el juego terminó, mostramos resultados
    if (juego.estaTerminado()) {
      const res = juego.getResultado();
      setResultado(res);
      setMostrarResultado(true);
      setSituacionActual(null);

      // Notificamos al contenedor que se completó
      onComplete(res.puntaje, res.total);
    } else {
      // Esperar 3 segundos antes de pasar a la siguiente situación
      setTimeout(() => {
        setSituacionActual(juego.getSituacionActual());
        setRetroalimentacion(null);
      }, 3000);
    }
  };

  // Reiniciar el juego (opcional)
  const reiniciar = () => {
    juego.reiniciar();
    setSituacionActual(juego.getSituacionActual());
    setRetroalimentacion(null);
    setMostrarResultado(false);
    setResultado(null);
  };

  // Efecto inicial
  useEffect(() => {
    if (!situacionActual && !mostrarResultado && !juego.estaTerminado()) {
      setSituacionActual(juego.getSituacionActual());
    }
  }, [situacionActual, mostrarResultado]);

  return (
    <div className="interactive-game-container">
      <h2>{title}</h2>
      <p className="game-description">{description}</p>
      <div className="game-instructions">
        <strong>Instrucciones:</strong> {instructions}
      </div>

      {!mostrarResultado && situacionActual && (
        <div className="game-card">
          <h3>Situación {situacionActual.id}</h3>
          <p className="scenario-text">{situacionActual.descripcion}</p>

          <div className="options-container">
            {situacionActual.opciones.map((opcion, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleSeleccionar(index)}
                disabled={!!retroalimentacion}
              >
                {opcion.texto}
              </button>
            ))}
          </div>

          {retroalimentacion && (
            <div className="feedback-box">
              <p>{retroalimentacion}</p>
            </div>
          )}
        </div>
      )}

      {mostrarResultado && resultado && (
        <div className="result-screen">
          <h3>🎉 ¡Juego terminado!</h3>
          <p>
            <strong>Puntaje:</strong> {resultado.puntaje} de {resultado.total}
          </p>
          <div className="final-message">
            <p>{resultado.mensaje}</p>
          </div>
          <button className="restart-button" onClick={reiniciar}>
            🔄 Jugar de nuevo
          </button>
        </div>
      )}
    </div>
  );
};

export default InteractiveGameActivity;
