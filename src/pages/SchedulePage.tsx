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
    let dressCodeLabel = "Dress code";
    let dressCode =
      "Smart casual — summer attire suited for a winery (flowy or midi dresses, lightweight fabrics, button-downs, polos, chino pants). Please avoid white, ivory, or similar shades.";
    let durationLabel = "Duration";
    let duration = "Approximately 2-3 hours";

    if (language.code === "sq") {
      dressCodeLabel = "Kodi i veshjes";
      dressCode =
        "Smart casual — veshje verore të përshtatshme për një kantinë (fustane të rrjedhshme ose midi, materiale të lehta, këmisha, polo, pantallona chino). Ju lutemi shmangni të bardhën, ngjyrën fildish ose nuanca të ngjashme.";
      durationLabel = "Kohëzgjatja";
      duration = "Rreth 2-3 orë";
    }

    if (language.code === "es") {
      dressCodeLabel = "Código de vestimenta";
      dressCode =
        "Smart casual — atuendos de verano apropiados para una bodega (vestidos fluidos o midi, telas ligeras, camisas, polos, chinos). Por favor, eviten el blanco, marfil o tonos similares.";
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

  const getMakeupDetails = () => {
    if (language.code === "sq") {
      return (
        <div>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Për të ftuarit që janë të interesuar për grim dhe flokë, një mundësi
            në Vlorë është Markus Ramaj (
            <a
              href="https://www.instagram.com/markussramaj/?__d=dist"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300"
            >
              @markussramaj
            </a>
            ). <br />
            WhatsApp: +355 69 845 8075
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Çmimet për shërbimet e flokëve dhe grimit fillojnë rreth €80. Duke
            qenë se Vlora është rreth një orë larg nga Dhërmiu, ju rekomandojmë
            të rezervoni më herët gjatë ditës për të pasur kohë për udhëtim. Ju
            lutemi planifikoni të vini rreth orës 16:30, oraret përfundimtare do
            të ndahen më afër datës. Keni mundesi të eksploroni edhe artistë të
            tjerë.
          </p>
        </div>
      );
    }

    if (language.code === "es") {
      return (
        <div>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Para los invitados interesados en servicios de peluquería y
            maquillaje, una opción en Vlorë es Markus Ramaj (
            <a
              href="https://www.instagram.com/markussramaj/?__d=dist"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300"
            >
              @markussramaj
            </a>
            ). <br />
            WhatsApp: +355 69 845 8075
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Los precios para servicios de peluquería y maquillaje comienzan
            aproximadamente en €80. Dado que Vlorë está a alrededor de 1 hora de
            Dhërmi, recomendamos reservar más temprano en el día para permitir
            tiempo de traslado. Se recomienda llegar sobre las 4:30 p.m., y el
            horario final se confirmará más cerca de la fecha. Los invitados
            también pueden explorar otros profesionales.
          </p>
        </div>
      );
    }

    return (
      <div>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          For guests interested in hair and makeup, one option in Vlorë is
          Markus Ramaj (
          <a
            href="https://www.instagram.com/markussramaj/?__d=dist"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300"
          >
            @markussramaj
          </a>
          ). <br />
          WhatsApp: +355 69 845 8075
        </p>
        <p className="text-sm text-gray-500 leading-relaxed">
          Pricing for hair and makeup services starts at approximately €80. As
          Vlorë is about one hour from Dhërmi, we recommend booking earlier in
          the day to allow time for travel. Guests should plan to arrive around
          4:30 PM, with final timing to be shared closer to the date. Guests are
          welcome to explore other artists as well.
        </p>
      </div>
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
            <p className="text-sm text-gray-500 leading-relaxed">
              {t.timelineDisclaimer}
            </p>
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

      <div
        id="wedding-attire"
        className="max-w-5xl mx-auto px-8 pb-20 sm:pb-28"
      >
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

      {/* ── Divider ── */}
      <hr className="border-t border-gray-300 mb-16 mx-8 sm:mb-20 sm:max-w-6xl sm:mx-auto sm:hidden" />

      <div id="hair-and-makeup" className="max-w-5xl mx-auto px-8 pb-16">
        <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-400 mb-2">
          {t.optionalLabel}
        </p>
        <p className="text-2xl sm:text-3xl font-normal mb-8">
          {t.hairAndMakeupLabel}
        </p>
        {getMakeupDetails()}
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
