import React, { useEffect, useState } from 'react';

export interface FlipGroup {
  title: string;
  color?: string;
  cards: Array<{ front: string; back: string }>;
}

const FlipCards: React.FC<{
  heading?: string;
  imageSrc?: string;
  note?: string;
  groups: FlipGroup[];
  onReadyToComplete?: (ready: boolean) => void;
}> = ({ heading, imageSrc, note, groups, onReadyToComplete }) => {
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    onReadyToComplete?.(interacted);
  }, [interacted, onReadyToComplete]);

  return (
    <div className="space-y-6">
      {heading && (
        <div className="bg-[#e6f2f8] border-l-4 border-[#24668e] p-4 rounded-r-lg">
          <h3 className="text-lg sm:text-xl font-bold text-[#00385b]">{heading}</h3>
        </div>
      )}
      {imageSrc && (
        <div className="flex justify-center">
          <img src={imageSrc} alt="Ilustración del módulo" className="rounded-lg shadow-md w-full h-auto max-w-3xl" />
        </div>
      )}
      {note && (
        <div className="text-sm text-[#101021] bg-[#101021]/5 border border-[#101021]/10 rounded-md p-3">
          <i className="fas fa-hand-pointer mr-2 text-[#24668e]"></i>
          {note}
        </div>
      )}

      {groups.map((group, gi) => (
        <section key={gi} className="space-y-4">
          <h4 className="text-xl font-extrabold" style={{ color: group.color || '#4c1760' }}>
            <span className="px-2 py-1 rounded" style={{ backgroundColor: (group.color || '#4c1760') + '20' }}>{group.title}</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.cards.map((card, ci) => (
              <FlipCard key={ci} front={card.front} back={card.back} color={group.color} onFlip={() => setInteracted(true)} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

const FlipCard: React.FC<{ front: string; back: string; color?: string; onFlip?: () => void }> = ({ front, back, color = '#4c1760', onFlip }) => {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => { setFlipped(v => !v); onFlip?.(); };
  return (
    <div className="w-full h-40 md:h-48 perspective cursor-pointer" onClick={toggle}>
      <div className={`relative w-full h-full duration-500 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full backface-hidden bg-white border border-[#101021]/10 rounded-lg shadow flex items-center justify-center p-4">
          <div className="text-center">
            <div className="mb-2" style={{ color }}><i className="fas fa-book-open text-xl"></i></div>
            <span className="text-lg font-bold" style={{ color }}>{front}</span>
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#f8f7fb] border border-[#101021]/10 rounded-lg shadow p-4 flex items-center justify-center text-center">
          <p className="text-sm text-[#101021]">{back}</p>
        </div>
      </div>
      <style>{`
        .perspective { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
      `}</style>
    </div>
  );
};

export default FlipCards;
