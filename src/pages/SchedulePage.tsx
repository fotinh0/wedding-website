import happinessMobile from "../assets/happinessMini.png";
import happinessLg from "../assets/scheduleCollageLg.png";
import CTABanner from "../components/CTABanner";
import homepageTranslations from "../translations/homepage";
import scheduleTranslations from "../translations/schedule";
import type { Language } from "../types";
import women from "../assets/Women.png";
import men from "../assets/Men.png";
import { useState } from "react";

export default function SchedulePage({
  language,
  handleNavigation,
}: {
  language: Language;
  handleNavigation: (page: string) => void;
}) {
  const t = scheduleTranslations[language.code];
  const tHome = homepageTranslations[language.code];

  const [openWomen, setOpenWomen] = useState(false);
  const [openMen, setOpenMen] = useState(false);

  const getWelcomePartyDetails = () => {
    let dressCodeLabel = "Dress";
    let dressCode = "Smart casual";
    let durationLabel = "Duration";
    let duration = "Approximately 2-3 hours";

    if (language.code === "sq") {
      dressCodeLabel = "Veshja";
      dressCode = "Smart casual";
      durationLabel = "Kohëzgjatja";
      duration = "Rreth 2-3 orë";
    }

    if (language.code === "es") {
      dressCodeLabel = "Vestimenta";
      dressCode = "Smart casual";
      durationLabel = "Duración";
      duration = "Aproximadamente 2-3 horas";
    }

    return (
      <>
        <p className="text-sm text-gray-500 leading-relaxed mt-4">
          <span className="font-bold">{dressCodeLabel}:</span> {dressCode}
        </p>
        <p className="text-sm text-gray-500 leading-relaxed">
          <span className="font-bold">{durationLabel}:</span> {duration}
        </p>
      </>
    );
  };

  return (
    <div className="mx-auto">
      <CTABanner
        text={tHome.RSVPCTAText}
        handleNavigation={() => handleNavigation("rsvp")}
      />
      <div
        id="hero"
        className="relative w-full h-[35.71vh] max-h-[35.71vh] sm:h-[65.75vh] sm:max-h-[65.75vh] overflow-hidden"
      >
        <img
          src={happinessMobile}
          alt="schedule-collage"
          className="absolute inset-0 w-full h-full object-cover sm:hidden"
        />
        <img
          src={happinessLg}
          alt="schedule-collage"
          className="hidden sm:block absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="text-center py-16 sm:py-24 px-8 max-w-4xl mx-auto">
        <p className="text-[35px] sm:text-5xl font-normal mb-6">{t?.title}</p>
        <p className="text-base md:text-lg tracking-wide font-light text-gray-500 leading-relaxed">
          {t?.intro}
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-50 pb-20 sm:pb-28">
          {/* Timeline */}
          <div>
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-500 mb-2">
              {t.scheduleLabel}
            </p>
            <p className="text-2xl sm:text-3xl font-normal mb-8">
              {t.timelineLabel}
            </p>

            <ol className="relative border-l border-gray-200 ml-1">
              {t.timeline.map((item, i) => {
                return item.isEvent ? (
                  <li key={i} className="pl-6 relative mb-8">
                    {/* Dot */}
                    <span
                      className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border ${
                        i === 0
                          ? "bg-gray-800 border-gray-800"
                          : "bg-white border-gray-400"
                      }`}
                    />
                    {!item.hideTime && (
                      <p className="text-xs sm:text-sm tracking-[0.15em] uppercase text-gray-500 mb-1">
                        {item.time}
                      </p>
                    )}
                    <p className="italic text-base sm:text-lg mb-0.5">
                      {item.event}
                    </p>
                  </li>
                ) : (
                  <li key={i} className="pl-6 relative">
                    {/* Horizontal line */}
                    <span className="absolute -left-4 top-2.5 w-8 h-px bg-gray-300" />
                    <p className="italic text-base sm:text-lg mb-4 tracking-wide text-gray-600">
                      {item.event}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Information */}
          <div>
            <p className="text-xs sm:text-sm tracking-[0.15em] uppercase text-gray-500 mb-2">
              {t.whatToExpectLabel}
            </p>
            <p className="text-2xl sm:text-3xl font-normal mb-8">
              {t.infromationLabel}
            </p>
            <div className="space-y-6">
              {t.info.map((item, i) => (
                <div key={i}>
                  {i !== 0 && <hr className="border-t border-gray-100 mb-6" />}
                  <span className="inline-block text-[10px] tracking-[0.12em] uppercase border border-gray-500 rounded-full px-2.5 py-0.5 text-gray-600 mb-2">
                    {item.badge}
                  </span>
                  <h3 className="italic text-base sm:text-lg mb-2">
                    {item.heading}
                  </h3>
                  {item.body.map((p, j) => (
                    <p
                      key={j}
                      className="text-sm text-gray-500 leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                  {i === 0 && getWelcomePartyDetails()}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <hr className="border-t border-gray-300 mb-16 mx-8 sm:mb-20 sm:max-w-6xl sm:mx-auto sm:hidden" />

      <div id="wedding-attire" className="max-w-5xl mx-auto px-8 pb-16">
        <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-400 mb-2">
          {t.dressCodeLabel}
        </p>
        <p className="text-2xl sm:text-3xl font-normal mb-10">
          {t.weddingAttireLabel}
        </p>

        {/* Women */}
        <div className="mb-16">
          <h3 className="italic text-lg mb-2">{t.womenAttireLabel}</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            {t.womenAttireText}
          </p>
          <button
            onClick={() => setOpenWomen(true)}
            className="block overflow-hidden rounded-xl w-full focus:outline-none mb-6 cursor-zoom-in"
          >
            <img
              src={women}
              alt="Women's attire inspiration"
              className="w-full object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </button>
        </div>

        <hr className="border-t border-gray-100 mb-16" />

        {/* Men */}
        <div>
          <h3 className="italic text-lg mb-2">{t.menAttireLabel}</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            {t.menAttireText}
          </p>
          <button
            onClick={() => setOpenMen(true)}
            className="block overflow-hidden rounded-xl w-full focus:outline-none mb-6 cursor-zoom-in"
          >
            <img
              src={men}
              alt="Men's attire inspiration"
              className="w-full object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </button>
        </div>
      </div>

      {/* ── Lightboxes ── */}
      {openWomen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setOpenWomen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              setOpenWomen(false);
            }}
          >
            ×
          </button>
          <img
            src={women}
            alt="Women's attire inspiration"
            className="max-w-full max-h-full rounded-xl"
          />
        </div>
      )}
      {openMen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setOpenMen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              setOpenMen(false);
            }}
          >
            ×
          </button>
          <img
            src={men}
            alt="Men's attire inspiration"
            className="max-w-full max-h-full rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
