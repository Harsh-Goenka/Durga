import React from 'react';

export function ProcessSection() {
  const steps = [
    { title: 'Analysis', description: 'Understanding requirements' },
    { title: 'Design', description: 'Creating solutions' },
    { title: 'Development', description: 'Building robust code' },
    { title: 'Testing', description: 'Ensuring quality' }
  ];

  return (
    <section className="py-12 bg-gray-50" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-indigo-600">{index + 1}</span>
              </div>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}