import React, { useEffect, useState } from 'react';
const FeedbackForm: React.FC<{ onReadyToComplete?: (ready: boolean) => void }> = ({ onReadyToComplete }) => {
  const [filled, setFilled] = useState(false);
  const scenarios = [
    {
      title: "Situación 1: El Feedback Vago",
      response: 'David te responde: "Sí, está bien. Buen trabajo en general."',
      questions: [
        { label: "Tu Reacción Inicial:", placeholder: "¿Qué piensas o sientes al escuchar esto? ¿Te sientes satisfecho/a, o te quedas con ganas de más?" },
        { label: "Reflexión y Acción:", placeholder: 'Escribe la pregunta exacta que le harías a continuación para obtener información más específica. Ejemplo: "Gracias, David. Me alegra que te haya parecido bien. Para seguir mejorando, ¿hubo alguna parte en particular que te resultó especialmente clara...?"' }
      ]
    },
    {
      title: "Situación 2: El Feedback Directo y Duro",
      response: 'David te responde: "Si te soy sincero, me pareció bastante confuso. Los datos que presentas no parecen respaldar tus conclusiones y la estructura es difícil de seguir."',
      questions: [
        { label: "Tu Reacción Inicial:", placeholder: "Sé honesto/a. ¿Cuál es tu primer impulso? ¿Sientes enojo, vergüenza, ganas de defenderte? ¿Qué pensamiento limitante aparece en tu mente?" },
        { label: "Reflexión y Acción:", placeholder: 'Escribe una pregunta para pedir una aclaración sobre un punto específico. Ejemplo: "Gracias por tu honestidad, David. ¿Podrías señalarme un ejemplo concreto donde los datos no te parecieron claros?"' }
      ]
    },
    {
      title: "Situación 3: El Feedback Inesperado",
      response: 'David te responde: "El informe está bien escrito, pero me di cuenta de que en la reunión donde lo mencionaste, no dejaste que el equipo de marketing diera su opinión. Sonó como si no valoraras su aporte."',
      questions: [
        { label: "Tu Reacción Inicial:", placeholder: "¿Te sorprende? ¿Cómo reacciona tu cuerpo (tensión, calor)? ¿Qué te dices a ti mismo/a?" },
        { label: "Reflexión y Acción:", placeholder: 'Escribe una respuesta que valide su perspectiva y te dé tiempo para reflexionar. Ejemplo: "Vaya, te agradezco mucho que me digas eso. No era consciente de haber proyectado esa imagen..."' }
      ]
    }
  ];

  useEffect(() => {
    onReadyToComplete?.(filled);
  }, [filled, onReadyToComplete]);

  return (
    <div className="space-y-8">
      <div className="p-4 bg-[#6e4380]/10 border-l-4 border-[#6e4380] text-[#6e4380] rounded-r-lg">
        <p><strong>Objetivo:</strong> Prepararte mental y emocionalmente para recibir distintos tipos de feedback, aprendiendo a extraer información valiosa sin tomarlo como algo personal.</p>
      </div>

      {scenarios.map((scenario, sIndex) => (
        <div key={sIndex} className="bg-white p-6 rounded-lg shadow-md border border-[#101021]/10">
          <h4 className="text-xl font-bold text-[#101021] mb-2">{scenario.title}</h4>
          <p className="italic text-[#101021]/90 bg-[#101021]/5 p-3 rounded-md mb-6">{scenario.response}</p>
          <div className="space-y-6">
            {scenario.questions.map((q, qIndex) => (
              <div key={qIndex}>
                <label htmlFor={`scenario-${sIndex}-question-${qIndex}`} className="block text-md font-semibold text-[#101021] mb-2">{q.label}</label>
                <textarea
                  id={`scenario-${sIndex}-question-${qIndex}`}
                  name={`scenario-${sIndex}-question-${qIndex}`}
                  rows={4}
                  className="w-full p-3 border border-[#101021]/30 rounded-md focus:ring-2 focus:ring-[#6e4380] focus:border-[#6e4380] transition"
                  placeholder={q.placeholder}
                  onChange={(e) => setFilled(e.target.value.trim().length > 0 || filled)}
                ></textarea>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-white p-6 rounded-lg shadow-md border border-[#101021]/10">
          <h4 className="text-xl font-bold text-[#101021] mb-4">Reflexión Final</h4>
          <div className="space-y-6">
            <div>
              <label className="block text-md font-semibold text-[#101021] mb-2">¿Cuál de estas tres situaciones te resultaría más difícil de manejar en la vida real y por qué?</label>
              <textarea id="final-reflection" name="final-reflection" rows={3} className="w-full p-3 border border-[#101021]/30 rounded-md focus:ring-2 focus:ring-[#6e4380] focus:border-[#6e4380] transition"></textarea>
            </div>
            <div>
              <label className="block text-md font-semibold text-[#101021] mb-2">Escribe una "frase de anclaje" que puedas repetirte antes de recibir feedback.</label>
              <input type="text" id="anchor-phrase" name="anchor-phrase" className="w-full p-3 border border-[#101021]/30 rounded-md focus:ring-2 focus:ring-[#6e4380] focus:border-[#6e4380] transition" placeholder='Ejemplo: "Esto es para mi progreso, no es un juicio sobre mi valor."' />
            </div>
          </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
