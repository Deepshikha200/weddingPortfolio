import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Header.css';

const HeroSection = () => {
  useEffect(() => {
    ScrollReveal().reveal('.heading-section', {
      delay: 400,
      distance: '50px',
      origin: 'top',
      duration: 2000,
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.heading-description', {
      delay: 800,
      origin: 'top',
      duration: 1500,
    });
  }, []);

  // Inline style object
  const rightStyle = {
    backgroundImage: `url('9E0A5571.jpg')`,
    backgroundSize: 'cover',
    height: '650px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <section className='hero-section d-flex' id='home'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-12 left text-white text-center">
            <h3 className="heading-section">Capturing Your Special Moments with Elegance and Passion</h3>
            <p className='heading-description mb-5'>
              At Ved Diaries, we believe every moment of your wedding day deserves to be remembered. We capture the emotions, joy, and beauty of your special day, creating timeless memories that reflect your unique love story. Let us preserve your moments with elegance and authenticity.
            </p>
          </div>
          <div className="col-md-8 col-12 right" style={rightStyle}>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
