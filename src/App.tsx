import { useEffect, useState } from 'react';
import type { Language, NavigationItem } from './types';
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchdeulePage';
import TravelPage from './pages/TravelPage';
import Navigation from './components/Navigation';
import FAQPage from './pages/FAQPage';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import languages from './utils/languages';

const englishNavigationItems = [
  { name: 'Home', href: 'home' },
  { name: 'Schedule', href: 'schedule' },
  { name: 'Travel', href: 'travel' },
  { name: 'FAQs', href: 'faqs' },
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0]
  );
  const [navigationItems, setNavigationItems] = useState<NavigationItem[]>(
    englishNavigationItems
  );

  useEffect(() => {
    if (selectedLanguage.code === 'sq') {
      setNavigationItems([
        { name: 'Shtëpia', href: 'home' },
        { name: 'Programi', href: 'schedule' },
        { name: 'Udhëtimi', href: 'travel' },
        { name: 'Pyetje të Bëra Shpesh', href: 'faqs' },
      ]);
    } else if (selectedLanguage.code === 'es') {
      setNavigationItems([
        { name: 'Inicio', href: 'home' },
        { name: 'Agenda', href: 'schedule' },
        { name: 'Viaje', href: 'travel' },
        { name: 'Preguntas Frecuentes', href: 'faqs' },
      ]);
    } else setNavigationItems(englishNavigationItems);
  }, [selectedLanguage.code]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        // return <HomePage onNavigate={handleNavigate} />;
        return <HomePage language={selectedLanguage} />;
      case 'schedule':
        return <SchedulePage language={selectedLanguage} />;
      case 'travel':
        return <TravelPage language={selectedLanguage} />;
      case 'faqs':
        return <FAQPage language={selectedLanguage} />;
      default:
        return <HomePage language={selectedLanguage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
        items={navigationItems}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      {renderPage()}
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
