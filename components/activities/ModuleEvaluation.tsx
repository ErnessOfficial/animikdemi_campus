import React, { useEffect, useState } from 'react';

interface EvaluationQuestion {
  prompt: string;
}

interface ModuleEvaluationProps {
  questions: EvaluationQuestion[];
  onReadyToComplete?: (ready: boolean) => void;
}

const ModuleEvaluation: React.FC<ModuleEvaluationProps> = ({ questions, onReadyToComplete }) => {
  const [answers, setAnswers] = useState<string[]>(() => questions.map(() => ''));

  useEffect(() => {
    // ready si al menos una respuesta tiene contenido
    const ready = answers.some(a => a.trim().length > 0);
    onReadyToComplete?.(ready);
  }, [answers, onReadyToComplete]);

  return (
    <div className="space-y-8">
      {questions.map((q, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-[#101021]/10">
          <label htmlFor={`eval-q-${index}`} className="block text-lg font-semibold text-[#101021] mb-4">
            {index + 1}. {q.prompt}
          </label>
          <textarea
            id={`eval-q-${index}`}
            rows={5}
            className="w-full p-3 border border-[#101021]/30 rounded-md focus:ring-2 focus:ring-[#6e4380] focus:border-[#6e4380] transition"
            placeholder="Escribe tu reflexión aquí..."
            value={answers[index]}
            onChange={(e) => {
              const v = e.target.value;
              setAnswers(prev => prev.map((a, i) => (i === index ? v : a)));
            }}
          ></textarea>
        </div>
      ))}
    </div>
  );
};

export default ModuleEvaluation;
