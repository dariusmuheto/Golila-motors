import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import VisionMission from './components/VisionMission';
import WhatWeDo from './components/WhatWeDo';
import Inventory from './components/Inventory';
import Partners from './components/Partners';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Hero />
      <main className="relative z-10">
        <AboutUs />
        <VisionMission />
        <WhatWeDo />
        <Inventory />
        <Partners />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}