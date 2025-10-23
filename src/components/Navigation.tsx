import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { NavigationItem } from '../types';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  items: NavigationItem[];
}

export default function Navigation({
  currentPage,
  onNavigate,
  items,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50 bg-white/98 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-4 items-center h-35 sm:flex-col sm:justify-normal">
          <h1
            onClick={() => onNavigate('home')}
            className="text-5xl text-black tracking-wide cursor-pointer sm:mt-6"
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
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
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
          </div>
        </div>
      )}
    </nav>
  );
}
