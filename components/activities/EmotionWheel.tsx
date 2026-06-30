import React, { useState } from 'react';
import type { Activity } from '../../types';

interface EmotionWheelProps {
  activity: Activity;
  onReadyToComplete?: (ready: boolean) => void;
}

const EmotionWheel: React.FC<EmotionWheelProps> = ({ activity, onReadyToComplete }) => {
  const coreEmotions = activity.coreEmotions || [];
  const getEmotionId = (e: any) => e.id || e.name;
  const [selectedEmotionId, setSelectedEmotionId] = useState<string | null>(null);
  const [selectedNuances, setSelectedNuances] = useState<Record<string, boolean>>({});

  const handleSelectEmotion = (id: string) => {
    setSelectedEmotionId(id);
  };

  const handleToggleNuance = (nuance: string) => {
    setSelectedNuances(prev => {
      const updated = { ...prev, [nuance]: !prev[nuance] };
      // Allow marking as completed when at least one nuance is selected
      const hasAnySelected = Object.values(updated).some(Boolean);
      onReadyToComplete?.(hasAnySelected);
      return updated;
    });
  };

  const selectedEmotion = coreEmotions.find(e => getEmotionId(e) === selectedEmotionId);

  return (
    <div className="space-y-6">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
        Selecciona una de las emociones base para explorar sus matices semánticos y su impacto somático:
      </p>

      {/* Grid of base core emotions */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {coreEmotions.map(emotion => {
          const emotionId = getEmotionId(emotion);
          const isSelected = emotionId === selectedEmotionId;
          return (
            <button
              key={emotionId}
              onClick={() => handleSelectEmotion(emotionId)}
              style={{ 
                backgroundColor: isSelected ? emotion.color : undefined,
                color: isSelected ? '#ffffff' : undefined,
                borderColor: emotion.color
              }}
              className={`p-4 rounded-xl border-2 text-center font-bold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md touch-target flex flex-col items-center justify-center gap-1.5 ${
                isSelected 
                  ? 'shadow-lg border-transparent' 
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span className={`w-3.5 h-3.5 rounded-full shrink-0 ${isSelected ? 'bg-white' : ''}`} style={{ backgroundColor: isSelected ? undefined : emotion.color }} />
              <span>{emotion.name}</span>
            </button>
          );
        })}
      </div>

      {/* Emotion matices and physical details drawer */}
      {selectedEmotion ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-md animate-fade-in">
          {/* Left Column: Semantic Nuances (Matices) */}
          <div className="space-y-4">
            <div>
              <h4 className="font-extrabold text-sm sm:text-base text-[#4c1760] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedEmotion.color }} />
                Matices de {selectedEmotion.name}
              </h4>
              <p className="text-xs text-slate-500 font-semibold mt-1">Expande tu vocabulario emocional. Selecciona el matiz que más resuene contigo ahora:</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {selectedEmotion.nuances.map(nuance => {
                const isChecked = !!selectedNuances[nuance];
                return (
                  <button
                    key={nuance}
                    onClick={() => handleToggleNuance(nuance)}
                    style={{
                      backgroundColor: isChecked ? `${selectedEmotion.color}25` : undefined,
                      borderColor: isChecked ? selectedEmotion.color : undefined,
                      color: isChecked ? selectedEmotion.color : undefined,
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all duration-200 touch-target ${
                      isChecked 
                        ? 'border-transparent shadow-sm' 
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                    }`}
                  >
                    {isChecked && <i className="fas fa-check-circle mr-1.5 text-xs animate-scale-in"></i>}
                    {nuance}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Somatic Sensation (Sensación Física) */}
          <div className="space-y-4 border-t md:border-t-0 md:border-l border-slate-100 pt-5 md:pt-0 md:pl-6 flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="font-extrabold text-sm sm:text-base text-[#4c1760] flex items-center gap-2">
                <i className="fas fa-child text-[#24668e]"></i>
                Sensación Somática / Corporal
              </h4>
              <div className="bg-[#24668e]/5 border border-[#24668e]/10 p-4 rounded-xl">
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed italic">
                  "{selectedEmotion.physicalSensation}"
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl flex items-center gap-2.5 mt-4">
              <i className="fas fa-info-circle text-slate-400"></i>
              <span className="text-[10px] text-slate-500 font-semibold leading-tight">
                La auto-observación de dónde se aloja la emoción en tu cuerpo te permite liberarla de manera natural.
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <i className="far fa-smile text-slate-300 text-3xl mb-2 block"></i>
          <p className="text-xs sm:text-sm text-slate-500 font-bold">Haz clic en alguna de las emociones de arriba para ver su mapa de sensaciones.</p>
        </div>
      )}
    </div>
  );
};

export default EmotionWheel;
