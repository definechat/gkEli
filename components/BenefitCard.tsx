
import React from 'react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-emerald-500 hover:shadow-emerald-500/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex justify-center items-center mb-4 text-emerald-500">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};
