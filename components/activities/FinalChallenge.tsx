import React, { useEffect, useState } from 'react';

const FinalChallenge: React.FC<{ onReadyToComplete?: (ready: boolean) => void }> = ({ onReadyToComplete }) => {
  const [text, setText] = useState('');
  useEffect(() => {
    onReadyToComplete?.(text.trim().length > 0);
  }, [text, onReadyToComplete]);
  return (
    <div className="bg-gradient-to-br from-[#101021] to-[#24668e] p-8 rounded-xl shadow-2xl text-[#fffafa]">
      <div className="text-center mb-8">
        <i className="fas fa-rocket text-5xl text-[#dd566f] mb-4"></i>
        <h3 className="text-3xl font-extrabold tracking-tight">Desafío Final: Mi Plan de Autodesafío</h3>
        <p className="mt-2 text-[#fffafa]/80 max-w-2xl mx-auto">
          Has completado el curso, ¡pero tu viaje de autoconocimiento apenas comienza! Ahora es el momento de poner en práctica lo que has aprendido.
        </p>
      </div>

      <div className="bg-[#fffafa]/5 p-6 rounded-lg space-y-4">
        <h4 className="font-bold text-lg text-[#dd566f]">Instrucciones:</h4>
        <ol className="list-decimal list-inside space-y-2 text-[#fffafa]/90">
          <li><strong>Identifica una Creencia Limitante:</strong> Elige una de las creencias que has explorado o una nueva que hayas descubierto sobre ti.</li>
          <li><strong>Define una Meta Concreta:</strong> Escribe una acción específica, medible, alcanzable, relevante y con un plazo de tiempo (SMART) que te ayude a desafiar esa creencia.</li>
          <li><strong>Comprométete:</strong> Escribe tu plan en el espacio de abajo como un compromiso contigo mismo/a.</li>
        </ol>
      </div>

      <div className="mt-8">
        <label htmlFor="challenge-plan" className="block text-lg font-semibold text-[#fffafa] mb-3">
          Mi Meta de Autodesafío:
        </label>
        <textarea
          id="challenge-plan"
          rows={6}
          className="w-full p-4 border border-[#fffafa]/20 rounded-md bg-[#101021] text-[#fffafa] focus:ring-2 focus:ring-[#dd566f] focus:border-[#dd566f] transition placeholder-[#fffafa]/50"
          placeholder="Ejemplo: Para desafiar mi creencia de 'no soy bueno/a hablando en público', me comprometo a participar activamente con una pregunta o comentario en la próxima reunión de equipo de esta semana."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default FinalChallenge;
