import { useState } from 'react';
import type { Lang, NavigationItem } from './types';
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchdeulePage';
import TravelPage from './pages/TravelPage';
import Navigation from './components/Navigation';
import FAQPage from './pages/FAQPage';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLang, setCurrentLang] = useState<Lang>('en');

  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: 'home' },
    { name: 'Schedule', href: 'schedule' },
    { name: 'Travel', href: 'travel' },
    { name: 'FAQs', href: 'faqs' },
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
      case 'travel':
        return <TravelPage />;
      case 'faqs':
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
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
      />
      {renderPage()}
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
