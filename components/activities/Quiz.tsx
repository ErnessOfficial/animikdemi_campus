import React, { useState } from 'react';
import type { QuizQuestion } from '../../types';

interface QuizProps {
  questions: QuizQuestion[];
  ui?: {
    optionBgColor?: string;
    optionTextColor?: string;
  };
  onReadyToComplete?: (ready: boolean) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, ui, onReadyToComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
      onReadyToComplete?.(true);
    }
  };

  if (quizFinished) {
    return (
      <div className="text-left p-6 sm:p-8 bg-[#24668e]/10 rounded-lg">
        <div className="text-center mb-6">
          <i className="fas fa-check-circle text-5xl text-[#24668e] mb-4"></i>
          <h3 className="text-2xl font-bold text-[#1a4a69]">¡Reflexión Completada!</h3>
          <p className="mt-2 text-[#101021]">
            Aquí tienes un resumen de tus respuestas. Este es tu punto de partida en el viaje del autoconocimiento.
          </p>
        </div>
        
        <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
          {questions.map((question, index) => {
            const userAnswer = answers[index];
            const selectedOption = question.options.find(opt => opt.text === userAnswer);

            return (
              <div key={index} className="bg-white p-4 rounded-md shadow-sm border border-[#101021]/10">
                <p className="font-semibold text-sm text-[#101021]">{question.question}</p>
                <p className="mt-2 text-[#6e4380]">
                  <i className="fas fa-arrow-right mr-2 text-xs"></i>
                  <span className="font-medium">{userAnswer}</span>
                </p>
                {selectedOption && (
                  <div className="mt-3 pt-3 border-t border-[#101021]/10">
                    <p className="text-sm text-[#101021]/80">
                      <strong className="font-semibold text-[#24668e]">Reflexión:</strong> {selectedOption.feedback}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-6">
            <button 
              onClick={() => { setQuizFinished(false); setCurrentQuestionIndex(0); setAnswers([]); }} 
              className="bg-[#24668e] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#1a4a69] transition"
            >
              Volver a empezar
            </button>
        </div>
        <style>{`
            .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: rgba(0,0,0,0.05);
                border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #24668e;
                border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #1a4a69;
            }
        `}</style>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  // Not finished yet
  if (onReadyToComplete) onReadyToComplete(false);

  return (
    <div className="p-4 sm:p-6 bg-transparent rounded-xl border border-[#101021]/10">
      <div className="mb-6">
        <p className="text-sm font-semibold text-[#00385b] mb-2">Pregunta {currentQuestionIndex + 1} de {questions.length}</p>
        <div className="w-full bg-[#101021]/20 rounded-full h-2.5">
            <div className="bg-[#4c1760] h-2.5 rounded-full transition-all duration-500" style={{width: `${progress}%`}}></div>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-[#00385b] mb-6">{currentQuestion.question}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.text)}
            className="text-left w-full p-4 rounded-lg border-2 border-[#101021]/20 hover:border-[#4c1760] transition-all transform hover:scale-105"
            style={{ backgroundColor: ui?.optionBgColor || '#ffffff', color: ui?.optionTextColor || undefined }}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
