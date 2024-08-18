import React from 'react'
import Header from "./components/Header";
import HeroSection from './components/HeroSection';
import Portofolio from './components/Portofolio';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <HeroSection />
        <Portofolio />
        <Services />
        <Gallery />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
