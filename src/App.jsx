import { useState } from 'react';
import SplashScreen from './lib/pages/SplashScreen';
import HomePage from './lib/pages/HomePage';
import AboutMePage from './lib/pages/AboutMePage';
import SkillsPage from './lib/pages/SkillsPage';
import PageTransition from './lib/pages/PageTransition';
import MyProjectPage from './lib/pages/MyProjectPage';
import ServicePage from './lib/pages/ServicePage';
import ContactPage from './lib/pages/ContactPage';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [showPage, setShowPage] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [pendingPage, setPendingPage] = useState(null);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setTimeout(() => setShowPage(true), 100);
  };

  // Called when any nav button is clicked
  const navigateTo = (page) => {
    if (page === currentPage) return;
    setPendingPage(page);
    setTransitioning(true);
  };

  // Called when the loading bar hits 100%
  const handleTransitionComplete = () => {
    setCurrentPage(pendingPage);
    setTransitioning(false);
    setPendingPage(null);
  };

  return (
    <div className="App" style={{ height: '100vh', overflow: 'hidden' }}>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {transitioning && (
        <PageTransition onComplete={handleTransitionComplete} />
      )}

      {!showSplash && !transitioning && currentPage === 'home' && (
        <HomePage show={showPage} setCurrentPage={navigateTo} />
      )}
      {!showSplash && !transitioning && currentPage === 'about' && (
        <AboutMePage show={showPage} setCurrentPage={navigateTo} />
      )}
      {!showSplash && !transitioning && currentPage === 'skills' && (
        <SkillsPage show={showPage} setCurrentPage={navigateTo} />
      )}
      {!showSplash && !transitioning && currentPage === 'projects' && (
        <MyProjectPage show={showPage} setCurrentPage={navigateTo} />
      )}
      {!showSplash && !transitioning && currentPage === 'service' && (
        <ServicePage show={showPage} setCurrentPage={navigateTo} />
      )}
      {!showSplash && !transitioning && currentPage === 'contact' && (
        <ContactPage show={showPage} setCurrentPage={navigateTo} />
      )}
    </div>
  );
}

export default App;
