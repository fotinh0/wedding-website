import happiness from '../assets/happiness.png';
import happinessMobile from '../assets/happinessMini.png';
import scheduleTranslations from '../translations/schedule';
import type { Language } from '../types';

export default function SchedulePage({ language }: { language: Language }) {
  const t = scheduleTranslations[language.code];

  const ceremonyText = () => {
    if (language.code === 'es')
      return (
        <p className="text-lg leading-relaxed">
          La ceremonia tendrá lugar en{' '}
          <span className="font-bold">Zoe Hora</span> en Dhërmi, Albania.
        </p>
      );

    if (language.code === 'sq')
      return (
        <p className="text-lg leading-relaxed">
          Ceremonia do të zhvillohet në{' '}
          <span className="font-bold">Zoe Hora</span> në Dhërmi, Albania.
        </p>
      );

    return (
      <p className="text-lg leading-relaxed">
        The ceremony will take place at{' '}
        <span className="font-bold">Zoe Hora</span> in Dhërmi, Albania.
      </p>
    );
  };

  return (
    <div className="mx-auto">
      <img
        src={happinessMobile}
        alt="schedule-collage"
        className="h-fit sm:max-h-[60vh] mx-auto sm:hidden"
      />
      <img
        src={happiness}
        alt="schedule-collage"
        className="hidden sm:block h-fit sm:max-h-[60vh] mx-auto"
      />
      <div className="max-w-5xl mx-auto text-center px-4 my-16 sm:my-24">
        <div className="flex flex-col justify-center">
          <p className="text-[40px] sm:text-6xl mb-8 italic">{t.title}</p>
          <p className="tracking-wide font-light">{t.intro}</p>
        </div>
      </div>

      <div className="sm:py-24 bg-zinc-50">
        <div className="max-w-5xl mx-auto py-8">
          <div className="relative flex flex-col sm:flex-row items-center">
            <div className="sm:w-2/5 p-8 flex justify-end text-center">
              <h3 className="text-3xl italic">{t.ceremonyTitle}</h3>
            </div>
            <div className="sm:w-3/5 pt-0 pb-8 px-8 sm:pb-10 sm:pt-8 text-center sm:text-left sm:border-l">
              {ceremonyText()}
            </div>
          </div>
          <div className="relative flex flex-col sm:flex-row">
            <div className="sm:w-2/5 p-8 flex items-center text-center justify-end">
              <h3 className="text-3xl italic">{t.receptionTitle}</h3>
            </div>
            <div className="sm:w-3/5 pt-0 pb-8 px-8 sm:pb-10 sm:pt-8 text-center sm:text-left sm:border-l">
              <p className="text-lg leading-relaxed">{t.receptionText}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center">
            <div className="sm:w-2/5 p-8 flex items-center justify-end text-center">
              <h3 className="text-3xl italic">{t.otherEventsTitle}</h3>
            </div>

            <div className="sm:w-3/5 pt-0 pb-8 px-8 sm:pb-10 sm:pt-8 text-center sm:text-left sm:border-l">
              <p className="text-lg leading-relaxed">{t.otherEventsText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
