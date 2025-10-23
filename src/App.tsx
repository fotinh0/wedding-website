import { useState } from 'react';
import type { NavigationItem } from './types';
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchdeulePage';
import RSVPPage from './pages/RSVPPage';
import TravelPage from './pages/TravelPage';
import Navigation from './components/Navigation';
import FAQPage from './pages/FAQPage';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: 'home' },
    { name: 'Schedule', href: 'schedule' },
    // { name: 'RSVP', href: 'rsvp' },
    // { name: 'Gallery', href: 'gallery' },
    { name: 'Travel', href: 'travel' },
    { name: 'FAQ', href: 'faq' },
  ];

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        // return <HomePage onNavigate={handleNavigate} />;
        return <HomePage />;
      case 'schedule':
        return <SchedulePage />;
      case 'rsvp':
        return <RSVPPage />;
      case 'travel':
        return <TravelPage />;
      case 'faq':
        return <FAQPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
        items={navigationItems}
      />
      {renderPage()}
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
