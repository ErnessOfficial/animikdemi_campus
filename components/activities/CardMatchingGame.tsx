import React, { useState, useEffect } from 'react';
import { assetPath } from '../../utils/paths';
import type { Card } from '../../types';

interface CardMatchingGameProps {
  cards: Card[];
  onReadyToComplete?: (ready: boolean) => void;
}

const CardMatchingGame: React.FC<CardMatchingGameProps> = ({ cards: initialCards, onReadyToComplete }) => {
  const [cards, setCards] = useState<any[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [solved, setSolved] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [recentlyMatched, setRecentlyMatched] = useState<number[]>([]);

  const totalPairs = initialCards.length / 2;
  const pairsFound = solved.length / 2;
  const progressPercent = totalPairs === 0 ? 0 : (pairsFound / totalPairs) * 100;

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
    if (disabled || flipped.includes(index) || solved.includes(cards[index].id)) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setDisabled(true);
      const [firstIndex, secondIndex] = newFlipped;
      if (cards[firstIndex].matchId === cards[secondIndex].id || cards[firstIndex].id === cards[secondIndex].matchId) {
        setSolved(prev => [...prev, cards[firstIndex].id, cards[secondIndex].id]);
        setRecentlyMatched([firstIndex, secondIndex]);
        setTimeout(() => setRecentlyMatched([]), 1500);
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
  
  const allSolved = solved.length === initialCards.length;
  useEffect(() => {
    if (initialCards.length > 0) {
      onReadyToComplete?.(allSolved);
    }
  }, [allSolved, onReadyToComplete, initialCards.length]);

  return (
    <div>
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-opacity ${allSolved ? 'opacity-50' : ''}`}>
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index) || solved.includes(card.id);
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
                  <img src={assetPath('images/animikroNEWnofondo.png')} alt="Animikdemi" className="w-16 h-16 opacity-90" />
                </div>
                {/* Front of card */}
                <div
                  className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-lg p-4 flex items-center justify-center text-center text-sm shadow-xl transition-all duration-300 ${
                    recentlyMatched.includes(index)
                      ? 'bg-[#dcfce7] text-[#14532d] ring-4 ring-[#4ade80] shadow-[0_0_20px_rgba(74,222,128,0.6)] scale-[1.03]'
                      : card.type === 'limiting' ? 'bg-[#dd566f]/20 text-[#a33851]' : 'bg-[#24668e]/20 text-[#1a4a69]'
                  }`}
                >
                  <p>{card.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex flex-col items-center max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md border border-[#101021]/10">
        <h4 className="text-[#00385b] font-bold mb-4 uppercase tracking-widest text-sm">Progreso: Cortando el Elefante</h4>
        <svg viewBox="0 0 512 512" width="140" height="140" className="drop-shadow-lg transition-all duration-1000">
          <defs>
            <linearGradient id="elephantProgress" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset={`${progressPercent}%`} stopColor="#24668e" />
              <stop offset={`${progressPercent}%`} stopColor="#e2e8f0" />
            </linearGradient>
          </defs>
          <path d="M495.8,200.7c-4.4-12.7-11.4-24.5-20.7-34.5c-37.5-40.4-106.8-21.7-133.4-12.9c-23.7-27.1-59.5-44.2-99.1-44.2 c-66.2,0-120.9,49.1-128.3,113c-4.2-1.9-8.9-3-13.8-3c-15.6,0-28.7,10.6-32.3,25c-0.2,0.8-0.3,1.5-0.3,2.3v39.4 c0,18.7,14,34.4,32.4,36.5v87c0,13.2,10.8,24,24,24h32c13.2,0,24-10.8,24-24v-64h16v64c0,13.2,10.8,24,24,24h32 c13.2,0,24-10.8,24-24v-83.6c11.9,1.4,24,2.2,36.5,2.2c16.3,0,32.1-1.7,47.3-4.9c9.4,26.5,29.9,46.7,56.7,56.3 c24.2,8.6,50.7,6.4,72.6-6.1c16.3-9.3,26.5-26.6,26.5-45.5v-36C512,246.3,506.4,218.4,495.8,200.7z M352.5,190.5 c7.5,0,13.5,6.1,13.5,13.5s-6.1,13.5-13.5,13.5s-13.5-6.1-13.5-13.5S345,190.5,352.5,190.5z" fill="url(#elephantProgress)" style={{ transition: 'fill 1s ease-in-out' }} />
        </svg>
        <div className="w-full bg-[#f0f2f5] rounded-full h-3 mt-6">
          <div className="bg-[#24668e] h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <p className="text-sm font-semibold mt-3 text-[#4c1760]">{pairsFound} de {totalPairs} partes del elefante completadas</p>
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