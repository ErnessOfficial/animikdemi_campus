import React, { useState } from 'react';
import type { DiagnosticQuestion } from '../../types';

interface DiagnosticTestModalProps {
  questions: DiagnosticQuestion[];
  onComplete: (answers: string[], recommendedCategory: string) => void;
}

const DiagnosticTestModal: React.FC<DiagnosticTestModalProps> = ({ questions, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const handleAnswerSelect = (category: string) => {
    const newSelectedCategories = [...selectedCategories, category];
    setSelectedCategories(newSelectedCategories);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Logic to determine recommendation
      const categoryCounts: Record<string, number> = {
        'Autoconocimiento': 0,
        'Gestión Emocional': 0,
        'Habilidades Sociales': 0,
      };

      newSelectedCategories.forEach((cat) => {
        categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
      });
      
      let recommendedCategory = 'Autoconocimiento';
      let maxCount = 0;
      for (const cat in categoryCounts) {
        if (categoryCounts[cat] > maxCount) {
          maxCount = categoryCounts[cat];
          recommendedCategory = cat;
        }
      }

      onComplete(newSelectedCategories, recommendedCategory);
    }
  };
  
  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all max-h-[90vh] flex flex-col">
        <div className="p-6 border-b border-[#101021]/10 flex justify-between items-center flex-shrink-0">
          <h2 className="text-2xl font-bold text-[#101021]">Test de Bienvenida</h2>
        </div>
        
        <div className="p-8 overflow-y-auto">
            {currentQuestion ? (
                <div>
                    <div className="mb-6">
                        <p className="text-sm font-semibold text-[#6e4380] mb-2">Pregunta {currentStep + 1} de {questions.length}</p>
                        <div className="w-full bg-[#101021]/10 rounded-full h-2.5">
                            <div className="bg-gradient-to-r from-[#24668e] to-[#6e4380] h-2.5 rounded-full transition-all duration-500" style={{width: `${progress}%`}}></div>
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#101021] mb-6">{currentQuestion.question}</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(option.category)}
                            className="text-left w-full p-4 bg-white rounded-lg border-2 border-[#101021]/20 hover:border-[#6e4380] hover:bg-[#6e4380]/10 transition-all transform hover:scale-105"
                        >
                            {option.text}
                        </button>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Cargando test...</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticTestModal;