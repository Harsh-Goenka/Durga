import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface GuidelineProps {
  title: string;
  description: string;
  items: string[];
}

export function GuidelineCard({ title, description, items }: GuidelineProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover-card">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}