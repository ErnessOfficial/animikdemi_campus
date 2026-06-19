import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

interface CourseCompletionModalProps {
  courseTitle: string;
  onGoToCertificates: () => void;
  onClose: () => void;
}

const CourseCompletionModal: React.FC<CourseCompletionModalProps> = ({
  courseTitle,
  onGoToCertificates,
  onClose,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Retraso ligero para que el modal aparezca suavemente después de la acción
    const t = setTimeout(() => {
      setVisible(true);
      triggerConfetti();
    }, 300);
    return () => clearTimeout(t);
  }, []);

  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${visible ? 'opacity-100 bg-[#101021]/80 backdrop-blur-sm' : 'opacity-0 bg-transparent pointer-events-none'}`}>
      <div className={`bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transform transition-all duration-700 delay-100 ${visible ? 'scale-100 translate-y-0' : 'scale-90 translate-y-12'}`}>
        <div className="w-24 h-24 bg-[#6e4380]/10 text-[#6e4380] rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="fas fa-trophy text-5xl animate-bounce"></i>
        </div>
        <h2 className="text-3xl font-extrabold text-[#101021] mb-2">¡Felicidades!</h2>
        <p className="text-[#101021]/70 mb-6 text-lg">
          Has completado con éxito el curso:<br/>
          <strong className="text-[#6e4380] block mt-2 text-xl">{courseTitle}</strong>
        </p>
        
        <div className="space-y-3">
          <button
            onClick={onGoToCertificates}
            className="w-full bg-gradient-to-r from-[#6e4380] to-[#24668e] text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            <i className="fas fa-certificate mr-2"></i>
            Ir a mis Certificaciones
          </button>
          <button
            onClick={onClose}
            className="w-full bg-[#101021]/5 text-[#101021]/70 font-bold py-3 px-6 rounded-xl hover:bg-[#101021]/10 transition-all"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCompletionModal;
