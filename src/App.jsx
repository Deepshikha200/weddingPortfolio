import React from 'react'
import Header from "./components/Header";
import HeroSection from './components/HeroSection';
import Portofolio from './components/Portofolio';
import Services from './components/Services';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Portofolio />
      <Services />
      <Gallery />
    </div>
  )
}

export default App
