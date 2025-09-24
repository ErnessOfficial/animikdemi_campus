import React from 'react';
import type { Course } from '../../types';

interface EnrollmentConfirmationModalProps {
  course: Course;
  onConfirm: () => void;
  onCancel: () => void;
}

const EnrollmentConfirmationModal: React.FC<EnrollmentConfirmationModalProps> = ({ course, onConfirm, onCancel }) => {
  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in"
        onClick={onCancel}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg transform transition-all text-center p-8"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-[#24668e]/10 mb-4">
            <i className="fas fa-graduation-cap text-3xl text-[#24668e]"></i>
        </div>

        <h3 className="text-2xl font-bold text-[#101021]">Confirmar Inscripción</h3>
        
        <div className="mt-4 mb-8 text-[#101021]/80">
            <p>Estás a punto de inscribirte en el curso:</p>
            <p className="font-semibold text-lg mt-2 text-[#101021]">"{course.title}"</p>
        </div>

        <div className="flex justify-center space-x-4">
          <button 
            onClick={onCancel} 
            className="w-full sm:w-auto bg-[#101021]/10 text-[#101021] font-bold py-3 px-6 rounded-lg hover:bg-[#101021]/20 transition"
          >
            Cancelar
          </button>
          <button 
            onClick={onConfirm} 
            className="w-full sm:w-auto bg-[#dd566f] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#c04359] transition shadow-lg"
          >
            Confirmar e Iniciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentConfirmationModal;
