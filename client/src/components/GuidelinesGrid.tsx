import React from 'react';
import { GuidelineCard } from './GuidelineCard';
import { guidelines } from '../data/guidelines';

export function GuidelinesGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {guidelines.map((guideline, index) => (
        <GuidelineCard
          key={index}
          title={guideline.title}
          description={guideline.description}
          items={guideline.items}
        />
      ))}
    </div>
  );
}