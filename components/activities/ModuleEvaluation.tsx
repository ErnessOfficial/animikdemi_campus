import React from 'react';

interface EvaluationQuestion {
  prompt: string;
}

interface ModuleEvaluationProps {
  questions: EvaluationQuestion[];
}

const ModuleEvaluation: React.FC<ModuleEvaluationProps> = ({ questions }) => {
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
          ></textarea>
        </div>
      ))}
    </div>
  );
};

export default ModuleEvaluation;