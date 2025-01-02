// 1. Services Page Implementation (Services.jsx)
import React, { useState } from 'react';

const services = [
  { id: 1, title: 'Interior Design', description: 'We create stunning and functional interior spaces.', icon: '🏠' },
  { id: 2, title: 'Architectural Consultation', description: 'Expert advice for your architectural projects.', icon: '📐' },
  { id: 3, title: 'Project Management', description: 'End-to-end management for your projects.', icon: '📋' },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 bg-white shadow rounded-lg hover:shadow-lg cursor-pointer"
            onClick={() => setSelectedService(service)}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
            <button
              className="text-black absolute top-2 right-2"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
            <h3 className="text-xl font-bold mb-4">{selectedService.title}</h3>
            <p>{selectedService.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
