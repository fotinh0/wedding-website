import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { Language, NavigationItem } from '../types';
import LanguageDropdown from './LanguageDropdown';
import { createPortal } from 'react-dom';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  items: NavigationItem[];
  selectedLanguage: Language;
  setSelectedLanguage: (language: Language) => void;
}

export default function Navigation({
  currentPage,
  onNavigate,
  items,
  selectedLanguage,
  setSelectedLanguage,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50 bg-white/98 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 pt-2 sm:px-6 lg:px-8">
        {createPortal(
          <div className="hidden md:block absolute top-2 right-4 sm:top-4 sm:right-10 z-50">
            <LanguageDropdown
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
          </div>,
          document.body
        )}
        <div className="flex justify-between gap-4 items-center h-30 sm:h-35 md:flex-col md:justify-normal">
          <h1
            onClick={() => onNavigate('home')}
            className="text-[2.8rem] sm:text-6xl text-black tracking-wide cursor-pointer sm:mt-6"
          >
            Indiana & Foti
          </h1>

          <div className="hidden md:flex space-x-10">
            {items.map((item) => (
              <button
                key={item.href}
                onClick={() => onNavigate(item.href)}
                className={`text-sm uppercase transition-colors text-black cursor-pointer hover:border-b hover:border-black ${
                  currentPage === item.href ? 'border-b border-black' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-black transition-colors"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {items.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  onNavigate(item.href);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors font-sans text-sm uppercase tracking-wider ${
                  currentPage === item.href
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="border-t border-gray-100 px-4 pt-4 flex z-60">
              <LanguageDropdown
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
