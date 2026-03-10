import { useEffect, useState } from "react";
import type { Language, NavigationItem } from "./types";
import HomePage from "./pages/HomePage";
import SchedulePage from "./pages/SchedulePage";
import TravelPage from "./pages/TravelPage";
import Navigation from "./components/Navigation";
import FAQPage from "./pages/FAQPage";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import languages from "./utils/languages";
import RSVPPage from "./pages/RSVPPage";

const englishNavigationItems = [
  { name: "Home", href: "home" },
  { name: "Schedule", href: "schedule" },
  { name: "Travel", href: "travel" },
  { name: "RSVP", href: "rsvp" },
  { name: "FAQs", href: "faqs" },
];

const albanianNavigationItems = [
  { name: "Kryefaqja", href: "home" },
  { name: "Programi", href: "schedule" },
  { name: "Udhëtimi", href: "travel" },
  { name: "RSVP", href: "rsvp" },
  { name: "Pyetje të Shpeshta", href: "faqs" },
];

const spanishNavigationItems = [
  { name: "Inicio", href: "home" },
  { name: "Agenda", href: "schedule" },
  { name: "Viaje", href: "travel" },
  { name: "RSVP", href: "rsvp" },
  { name: "Preguntas Frecuentes", href: "faqs" },
];

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[2],
  );
  const [navigationItems, setNavigationItems] = useState<NavigationItem[]>(
    englishNavigationItems,
  );

  useEffect(() => {
    if (selectedLanguage.code === "sq") {
      setNavigationItems(albanianNavigationItems);
    } else if (selectedLanguage.code === "es") {
      setNavigationItems(spanishNavigationItems);
    } else setNavigationItems(englishNavigationItems);
  }, [selectedLanguage.code]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get("page");
    if (pageParam) {
      setCurrentPage(pageParam);
    }
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            language={selectedLanguage}
            handleNavigation={handleNavigate}
          />
        );
      case "schedule":
        return (
          <SchedulePage
            language={selectedLanguage}
            handleNavigation={handleNavigate}
          />
        );
      case "travel":
        return (
          <TravelPage
            language={selectedLanguage}
            handleNavigation={handleNavigate}
          />
        );
      case "rsvp":
        return <RSVPPage language={selectedLanguage} />;
      case "faqs":
        return <FAQPage language={selectedLanguage} />;
      default:
        return (
          <HomePage
            language={selectedLanguage}
            handleNavigation={handleNavigate}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
        items={navigationItems}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <div className={`grow ${currentPage === "faqs" ? "border-t" : ""}`}>
        {renderPage()}
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
