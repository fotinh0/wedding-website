import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Language } from '../types';
import languages from '../utils/languages';
import { US, DO, AL } from 'country-flag-icons/react/3x2';

interface LanguageDropdownProps {
  selectedLanguage: Language;
  setSelectedLanguage: (language: Language) => void;
}

export default function LanguageDropdown({
  selectedLanguage,
  setSelectedLanguage,
}: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedLanguageIcon, setSelectedLanguageIcon] = useState(
    <US className="w-5" />
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');

    if (langParam) {
      const foundLang = languages.find(
        (lang) => lang.code.toLowerCase() === langParam.toLowerCase()
      );
      if (foundLang) {
        setSelectedLanguage(foundLang);
        if (foundLang.code === 'es')
          setSelectedLanguageIcon(<DO className="w-5" />);
        else if (foundLang.code === 'sq')
          setSelectedLanguageIcon(<AL className="w-5" />);
        else setSelectedLanguageIcon(<US className="w-5" />);
      }
    }
  }, [setSelectedLanguage]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (selectedLanguage.code === 'es')
      setSelectedLanguageIcon(<DO className="w-5" />);
    else if (selectedLanguage.code === 'sq')
      setSelectedLanguageIcon(<AL className="w-5" />);
    else setSelectedLanguageIcon(<US className="w-5" />);
    setIsOpen(false);
  }, [selectedLanguage.code]);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:border-transparent"
      >
        <div className="w-1/2">{selectedLanguageIcon}</div>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="block absolute mt-1 right-0.5 w-full min-w-[100px] bg-white border border-gray-200 rounded-lg z-100 animate-fadeIn">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
              className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-150 ${
                selectedLanguage.code === language.code
                  ? 'bg-gray-100 '
                  : 'text-gray-700'
              }`}
            >
              <span className="text-sm">{language.name}</span>
              {selectedLanguage.code === language.code && (
                <span className="ml-auto text-gray-800">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
