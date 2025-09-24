import React, { useState } from 'react';

const ITEMS_BANK = {
  valores: ["Honestidad", "Respeto", "Amor", "Libertad", "Creatividad", "Familia"],
  creencias: ["Puedo lograr lo que me propongo", "El fracaso es aprendizaje", "Soy digno/a de amor", "El cambio es bueno"],
  logros: ["Terminé mis estudios", "Superé un miedo", "Ayudé a un amigo", "Aprendí una nueva habilidad", "Viajé solo/a"]
};

type Category = 'valores' | 'creencias' | 'logros';

const ReflectionTree: React.FC = () => {
  const [tree, setTree] = useState<Record<Category, string[]>>({
    valores: [],
    creencias: [],
    logros: [],
  });

  const addItemToTree = (category: Category, item: string) => {
    if (!tree[category].includes(item)) {
      setTree(prevTree => ({
        ...prevTree,
        [category]: [...prevTree[category], item]
      }));
    }
  };
  
  const removeItemFromTree = (category: Category, item: string) => {
    setTree(prevTree => ({
        ...prevTree,
        [category]: prevTree[category].filter(i => i !== item)
    }));
  };

  const renderBranch = (category: Category, title: string, icon: string) => (
    <div className="bg-white p-4 rounded-lg shadow-md min-h-[200px]">
      <h4 className="font-bold text-lg mb-3 text-[#101021] flex items-center"><i className={`${icon} mr-2 text-[#24668e]`}></i> {title}</h4>
      <div className="flex flex-wrap gap-2">
        {tree[category].map(item => (
          <span key={item} className="flex items-center bg-[#24668e]/20 text-[#1a4a69] text-sm font-medium px-2.5 py-1 rounded-full">
            {item}
            <button onClick={() => removeItemFromTree(category, item)} className="ml-2 text-[#1f597c] hover:text-[#1a4a69]">&times;</button>
          </span>
        ))}
        {tree[category].length === 0 && <p className="text-sm text-[#101021]/50 italic">Añade elementos desde el banco.</p>}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        {renderBranch('valores', 'Mis Valores Fundamentales', 'fas fa-heart')}
        {renderBranch('creencias', 'Mis Creecnais Potenciadoras', 'fas fa-lightbulb')}
        {renderBranch('logros', 'Mis Logros y Fortalezas', 'fas fa-trophy')}
      </div>

      <div className="bg-[#101021]/5 p-4 rounded-lg border border-[#101021]/10">
        <h4 className="font-bold text-center mb-4 text-[#101021]">Banco de Elementos</h4>
        <div className="grid md:grid-cols-3 gap-6">
          {(Object.keys(ITEMS_BANK) as Category[]).map(category => (
            <div key={category}>
              <h5 className="font-semibold mb-2 capitalize text-[#101021]">{category}</h5>
              <div className="flex flex-wrap gap-2">
                {ITEMS_BANK[category].map(item => (
                  <button
                    key={item}
                    onClick={() => addItemToTree(category, item)}
                    className="bg-[#6e4380]/10 text-[#6e4380] text-sm px-3 py-1 rounded-full hover:bg-[#6e4380]/20 transition"
                  >
                    + {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReflectionTree;