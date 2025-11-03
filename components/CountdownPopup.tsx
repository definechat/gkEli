
import React from 'react';

interface CountdownPopupProps {
  seconds: number;
}

export const CountdownPopup: React.FC<CountdownPopupProps> = ({ seconds }) => {
  return (
    <div className="fixed bottom-5 right-5 bg-gray-800 border border-emerald-500 text-white py-3 px-6 rounded-lg shadow-2xl z-50 animate-fade-in-up">
      <p className="text-sm">Você será redirecionado em... <span className="font-bold text-lg text-emerald-400">{seconds}</span></p>
    </div>
  );
};
