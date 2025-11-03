
import React from 'react';
import { StarIcon } from './Icons';

interface TestimonialCardProps {
  quote: string;
  name: string;
  age: number;
  result: string;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex justify-center mb-4">
    {Array.from({ length: rating }).map((_, index) => (
      <StarIcon key={index} />
    ))}
  </div>
);

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, age, result }) => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 flex flex-col h-full">
      <StarRating rating={5} />
      <p className="text-gray-300 italic mb-6 flex-grow">"{quote}"</p>
      <div className="mt-auto">
        <p className="font-bold text-lg text-emerald-400">{name}, {age}</p>
        <p className="text-gray-400 font-semibold">{result} eliminados</p>
      </div>
    </div>
  );
};
