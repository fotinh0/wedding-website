import { useState } from 'react';
import type { Language } from '../types';
import faqTranslations from '../translations/faq';

export default function FAQPage({ language }: { language: Language }) {
  const [openStates, setOpenStates] = useState<Record<number, boolean>>({});
  const t = faqTranslations[language.code];

  const toggleAccordion = (index: number) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center sm:mt-24 mb-12 sm:mb-20">
        <p className="text-[40px] sm:text-7xl font-light mb-12">{t.title}</p>
        <p className="text-lg sm:text-xl text-gray-600 font-light tracking-wide">
          {t.subtitle}
        </p>
      </div>

      <div className="space-y-4">
        {t.faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 cursor-pointer">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full py-5 flex items-center justify-between text-left"
            >
              <span className="text-base md:text-lg font-light text-black tracking-wide pr-4 cursor-pointer">
                {faq.question}
              </span>
              <span className="text-2xl text-black font-light shrink-0">
                {openStates[index] ? '−' : '+'}
              </span>
            </button>

            {openStates[index] && (
              <div className="pb-6 sm:pr-8 text-sm md:text-base text-gray-600 font-light leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-20 bg-zinc-50 p-12 text-center mb-20">
        <p className="text-3xl font-light mb-6 tracking-wide">
          {t.stillHaveQuestions}
        </p>
        <p className="mb-8 font-light">{t.contactText}</p>
        <a
          href="mailto:indiana.foti@gmail.com"
          className="inline-block bg-black text-white px-10 py-4 text-sm font-light tracking-widest uppercase transition-all transform hover:scale-105"
        >
          {t.contactButton}
        </a>
      </div>
    </div>
  );
}
