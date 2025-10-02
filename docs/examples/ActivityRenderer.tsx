// src/components/ActivityRenderer.tsx

import React from 'react';
import InteractiveGameActivity from './activities/InteractiveGameActivity';

interface ActivityProps {
  type: string;
  title: string;
  description: string;
  [key: string]: any;
}

const ActivityRenderer: React.FC<ActivityProps> = (props) => {
  const handleGameComplete = (score: number, max: number) => {
    console.log(`Juego completado: ${score}/${max}`);
    // Aquí podrías marcar como completado en el estado global o API
  };

  switch (props.type) {
    case 'interactiveGame':
      return (
        <InteractiveGameActivity
          title={props.title}
          description={props.description}
          instructions={props.instructions}
          onComplete={handleGameComplete}
        />
      );
    // ... otros casos: video, quiz, etc.
    default:
      return <p>Tipo de actividad no soportado: {props.type}</p>;
  }
};

export default ActivityRenderer;