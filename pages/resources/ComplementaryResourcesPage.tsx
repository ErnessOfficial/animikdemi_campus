import React from 'react';
import ResourceList from '../../components/resources/ResourceList';
import { complementary } from '../../constants/resources/complementary';

interface Props {
  onBack: () => void;
}

const ComplementaryResourcesPage: React.FC<Props> = ({ onBack }) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#6e4380] to-[#24668e] text-white rounded-xl p-6 shadow mb-6">
        <h1 className="text-2xl font-extrabold">Recursos Complementarios</h1>
        <p className="mt-2 text-white/90">Enlaces a artículos y recursos externos para ampliar tu aprendizaje.</p>
      </div>
      <ResourceList
        heading="Recursos externos"
        subtitle="Filtra por título para encontrar lo que necesitas."
        items={complementary}
        onBack={onBack}
      />
    </div>
  );
};

export default ComplementaryResourcesPage;

