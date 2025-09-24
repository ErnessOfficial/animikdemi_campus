import React, { useState, useEffect } from 'react';
import type { Card } from '../../types';

interface CardMatchingGameProps {
  cards: Card[];
}

const CardMatchingGame: React.FC<CardMatchingGameProps> = ({ cards: initialCards }) => {
  const [cards, setCards] = useState<any[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [solved, setSolved] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const shuffle = <T,>(array: T[]): T[] => {
      let currentIndex = array.length, randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }
      return array;
    };
    setCards(shuffle([...initialCards]));
  }, [initialCards]);

  const handleClick = (index: number) => {
    if (disabled || flipped.includes(index) || solved.includes(cards[index].matchId)) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setDisabled(true);
      const [firstIndex, secondIndex] = newFlipped;
      if (cards[firstIndex].matchId === cards[secondIndex].matchId) {
        setSolved(prev => [...prev, cards[firstIndex].matchId]);
        setFlipped([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 1500);
      }
    }
  };
  
  const allSolved = solved.length === initialCards.length / 2;

  return (
    <div>
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-opacity ${allSolved ? 'opacity-50' : ''}`}>
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index) || solved.includes(card.matchId);
          return (
            <div
              key={index}
              className="w-full h-48 perspective"
              onClick={() => handleClick(index)}
            >
              <div
                className={`relative w-full h-full duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
              >
                {/* Back of card */}
                <div className="absolute w-full h-full backface-hidden bg-[#6e4380] rounded-lg flex items-center justify-center cursor-pointer shadow-lg">
                  <i className="fas fa-question text-4xl text-white"></i>
                </div>
                {/* Front of card */}
                <div
                  className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-lg p-4 flex items-center justify-center text-center text-sm shadow-xl ${
                    card.type === 'limiting' ? 'bg-[#dd566f]/20 text-[#a33851]' : 'bg-[#24668e]/20 text-[#1a4a69]'
                  }`}
                >
                  <p>{card.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {allSolved && (
        <div className="mt-8 text-center p-8 bg-[#24668e]/10 rounded-lg animate-fade-in">
          <i className="fas fa-star text-5xl text-[#6e4380] mb-4"></i>
          <h3 className="text-2xl font-bold text-[#1a4a69]">¡Felicidades!</h3>
          <p className="mt-2 text-[#101021]">Has identificado y desafiado con éxito las creencias limitantes. Este es un paso poderoso hacia un mayor autoconocimiento y empoderamiento.</p>
        </div>
      )}
      <style>{`
        .perspective { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
      `}</style>
    </div>
  );
};

export default CardMatchingGame;