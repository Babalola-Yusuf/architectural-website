// 3. About Page Implementation (About.jsx)
import React from 'react';

const milestones = [
  { year: 2010, description: 'Company founded.' },
  { year: 2015, description: 'Awarded Best Design Firm.' },
  { year: 2020, description: 'Completed 100th project.' },
];

const About = () => {
  return (
    <div className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
      <div className="mb-8">
        <p className="text-lg">
          Minale + Mann is a renowned architectural firm specializing in creating
          beautiful and functional spaces. With over a decade of experience, we
          have transformed countless ideas into reality.
        </p>
      </div>
      <h3 className="text-xl font-bold mb-4">Our Journey</h3>
      <ul className="list-disc pl-6">
        {milestones.map((milestone, index) => (
          <li key={index} className="mb-2">
            <strong>{milestone.year}:</strong> {milestone.description}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Meet Our Team</h3>
        <p>We are a team of passionate designers and architects dedicated to excellence.</p>
      </div>
    </div>
  );
};

export default About;
