import React from 'react';
import type { Course } from '../../types';
import { downloadCertificate } from '../../utils/certificates';
import { format } from '../../utils/date';

interface CertificateCardProps {
  course: Course;
  userName?: string;
  completedAt?: string | null;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ course, userName = 'Participante', completedAt }) => {
  const handleDownload = async () => {
    const dateText = format(completedAt ? new Date(completedAt) : new Date());
    await downloadCertificate({ userName, courseTitle: course.title, dateText }, `certificado-${course.id}.png`);
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-[#101021]/10 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-[#24668e] text-white flex items-center justify-center rounded-lg">
          <i className="fas fa-award text-2xl"></i>
        </div>
        <div>
          <h4 className="font-bold text-[#101021]">{course.title}</h4>
          <p className="text-sm text-[#101021]/70">Certificado de Finalización</p>
        </div>
      </div>
      <button onClick={handleDownload} className="bg-[#24668e] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#1a4a69] transition text-sm">
        <i className="fas fa-download mr-2"></i>
        Descargar
      </button>
    </div>
  );
};

export default CertificateCard;
