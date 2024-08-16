import React from 'react';
import './Header.scss';  // Import the SCSS file for styling

const Services = () => {
  const services = [
    { title: 'Wedding', description: 'Create unforgettable memories with our comprehensive wedding services.' },
    { title: 'Pre-Wedding', description: 'Capture the magic before the big day with our pre-wedding sessions.' },
    { title: 'Clubs & Parties', description: 'Document the fun and excitement of your club events and parties.' },
    { title: 'Events', description: 'Cover all types of events with professional and stylish photography.' },
    { title: 'Family Functions', description: 'Preserve precious moments of your family gatherings with our expert services.' }
  ];

  return (
    <div id='services' className='services-container'>
      <h2 className='services-heading'>~Our Services~</h2>
      <div className='services-grid'>
        {services.map((service, index) => (
          <div className='service-item' key={index}>
            <h3 className='service-title'>{service.title}</h3>
            <p className='service-description'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
