import React from 'react';

interface ResourceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  onExplore: () => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ imageSrc, title, description, onExplore }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-[#101021]/10">
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#101021]">{title}</h3>
        <p className="text-sm text-[#101021]/70 mt-2">{description}</p>
        <button
          onClick={onExplore}
          className="mt-4 inline-block bg-[#24668e] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#1a4a69] transition"
        >
          Explorar
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;

