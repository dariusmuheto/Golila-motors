import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import VisionMission from './components/VisionMission';
import WhatWeDo from './components/WhatWeDo';
import Inventory from './components/Inventory';
import Partners from './components/Partners';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

(window as any).goToDashboard = () => {
  window.location.hash = 'dashboard';
  window.dispatchEvent(new CustomEvent('admin-dashboard-access'));
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'dashboard'>('home');
  useEffect(() => {
    const handleAdminAccess = () => {
      setCurrentPage('dashboard');
    };

    window.addEventListener('admin-dashboard-access', handleAdminAccess);
    
    return () => {
      window.removeEventListener('admin-dashboard-access', handleAdminAccess);
    };
  }, []);

  const renderPage = () => {
    if (currentPage === 'dashboard') {
      return <Dashboard onLogout={() => setCurrentPage('home')} />;
    }

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
  };

  return (
    <div>
     
      {currentPage === 'dashboard' && (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentPage('home')}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  ← Back to Site
                </button>
                <span className="text-xl font-bold text-gray-900">Admin Panel</span>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Main Content */}
      {renderPage()}
    </div>
  );
}