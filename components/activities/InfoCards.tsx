import React, { useState } from 'react';
import type { InfoCard } from '../../types';

interface InfoCardsProps {
  cards: InfoCard[];
}

const InfoCards: React.FC<InfoCardsProps> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Solo una abierta

  const toggle = (i: number) => {
    setActiveIndex(prev => (prev === i ? -1 : i));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, i) => (
        <div
          key={i}
          className="rounded-lg shadow-md border border-[#101021]/10 transition-transform hover:scale-[1.01]"
          style={{ backgroundColor: card.color || '#ffffff' }}
        >
          <button
            onClick={() => toggle(i)}
            className="w-full text-left p-4 cursor-pointer"
            aria-expanded={activeIndex === i}
          >
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-[#4c1760] mr-2">{card.title}</h4>
              <i className={`fas fa-chevron-down text-[#00385b] transition-transform ${activeIndex === i ? 'rotate-180' : ''}`}></i>
            </div>
          </button>
          {activeIndex === i && (
            <div className="px-4 pb-4 text-[#101021]">
              <p className="text-sm leading-relaxed">{card.body}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
