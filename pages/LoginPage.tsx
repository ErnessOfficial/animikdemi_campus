import React from 'react';

interface LoginPageProps {
  onLogin: () => void;
  onRegister: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onRegister }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f0f2f5]">
      <div className="text-center p-12 bg-white rounded-2xl shadow-xl max-w-md w-full mx-4">
        <img src={assetPath('images/logo_animikdemi.png')} alt="AnImiKdemi Logo" className="h-16 mx-auto mb-6" />
        <h1 className="text-3xl font-extrabold text-[#101021]">Bienvenido a AnImiKdemi Campus</h1>
        <p className="mt-2 text-[#101021]/70">Tu viaje de aprendizaje emocional comienza aquí.</p>

        <div className="mt-8 space-y-4">
          <button
            onClick={onLogin}
            className="w-full bg-[#24668e] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#1a4a69] transition-transform transform hover:scale-105 shadow-md text-lg"
          >
            Iniciar Sesión
          </button>
          <button
            onClick={onRegister}
            className="w-full bg-transparent text-[#24668e] font-bold py-3 px-6 rounded-lg border-2 border-[#24668e] hover:bg-[#24668e]/10 transition-transform transform hover:scale-105 text-lg"
          >
            Registrarse
          </button>
        </div>
        <p className="mt-8 text-xs text-[#101021]/50">
          Al continuar, aceptas nuestros Términos de Servicio y Política de Privacidad.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
import { assetPath } from '../utils/paths';
