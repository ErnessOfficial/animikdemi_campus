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
        <p className="mt-2 text-white/90">Aqui encontraras otras herramnientas y materiales que te ayudaran en la construcción de tu aprendizaje desde capsulas formativas express, creadas para crear bases o consolidar tu aprendizaje sobre algun tema  hasta recursos externos de mucho interes. Solo entra y echa un vistazo</p>
      </div>
      <ResourceList
        heading="Listado de Recursos  Complementarios"
        subtitle="filtra por palabra clave o titulo para encontrar lo que te interesa"
        items={complementary}
        onBack={onBack}
      />
    </div>
  );
};

export default ComplementaryResourcesPage;
