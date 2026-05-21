import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import MySkills from './components/MySkills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#09090b] w-full min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Service />
      <Portfolio />
      <MySkills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
