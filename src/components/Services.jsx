import React, { useState } from 'react';
import './Header.scss';  // Import the SCSS file for styling
import { Button } from 'react-bootstrap';
import BookNow from './BookNow'; // Import the BookNow component

const Services = () => {
  const services = [
    { title: 'Wedding', description: 'Create unforgettable memories with our comprehensive wedding services.' },
    { title: 'Pre-Wedding', description: 'Capture the magic before the big day with our pre-wedding sessions.' },
    { title: 'Clubs & Parties', description: 'Document the fun and excitement of your club events and parties.' },
    { title: 'Events', description: 'Cover all types of events with professional and stylish photography.' },
    { title: 'Family Functions', description: 'Preserve precious moments of your family gatherings with our expert services.' }
  ];

  // State for showing BookNow modal
  const [showBookNow, setShowBookNow] = useState(false);

  const handleShowBookNow = () => setShowBookNow(true);
  const handleCloseBookNow = () => setShowBookNow(false);

  return (
    <>
      <div id='services' className='services-container '>
        <h2 className='services-heading'>~Our Services~</h2>
        <div className='services-grid'>
          {services.map((service, index) => (
            <div className='service-item' key={index}>
              <h3 className='service-title'>{service.title}</h3>
              <p className='service-description'>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center button p-2 pb-4 fs-2 mt-3">
          <Button className='p-2.6' onClick={handleShowBookNow}>BOOK NOW</Button>
        </div>
      </div>

      {/* Include the BookNow modal */}
      {showBookNow && (
        <BookNow show={showBookNow} onClose={handleCloseBookNow} />
      )}
    </>
  );
};

export default Services;
