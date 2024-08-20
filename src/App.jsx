import Header from "./components/Header";
import HeroSection from './components/HeroSection';
import Portofolio from './components/Portofolio';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import React, { useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  // Create refs for gallery sections
  const weddingRef = useRef(null);
  const clubsRef = useRef(null);
  const eventsRef = useRef(null);

  // Function to scroll to specific section
  const handleScrollToSection = (section) => {
    switch (section) {
      case 'wedding':
        weddingRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'clubs':
        clubsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'events':
        eventsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <HeroSection />
        <Portofolio onScrollToSection={handleScrollToSection} />
        <Services />
        {/* <Gallery
          weddingRef={weddingRef}
          clubsRef={clubsRef}
          eventsRef={eventsRef}
        /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

