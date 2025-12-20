import Marquee from "react-fast-marquee";
import travelCollage from "../assets/travelCollage.png";
import type { Language } from "../types";
import travelTranslations from "../translations/travel";

export default function TravelPage({
  language,
  handleNavigation,
}: {
  language: Language;
  handleNavigation: (page: string) => void;
}) {
  const t = travelTranslations[language.code];

  const introText = () => {
    if (language.code === "es")
      return (
        <p className="text-lg font-light md:w-3xl mx-auto">
          ¡Estamos muy emocionados de darte la bienvenida a{" "}
          <span className="font-bold">Dhërmi, Albania</span> para nuestra boda!
          Para ayudarte a planificar tu viaje, hemos reunido algunos detalles a
          continuación. Continuaremos actualizando esta página y enviando
          mensajes de texto a medida que se finalicen los detalles, para que
          siempre tengas la información más reciente.
        </p>
      );

    if (language.code === "sq")
      return (
        <p className="text-lg font-light md:w-3xl mx-auto">
          Jemi shumë të lumtur t’ju mirëpresim në{" "}
          <span className="font-bold">Dhërmi, Albania</span> për dasmën tonë! Më
          poshtë do të gjeni informacione të dobishme për t’ju ndihmuar në
          planifikimin e qëndrimit tuaj. Kjo faqe do të përditësohet vazhdimisht
          ndërsa detajet finalizohen, dhe do të ndajmë gjithashtu njoftime të
          rëndësishme përmes mesazheve.
        </p>
      );

    return (
      <p className="text-lg font-light md:w-3xl mx-auto">
        We’re so excited to welcome you to{" "}
        <span className="font-bold">Dhërmi, Albania</span> for our wedding.
        Below is helpful information to assist with planning your stay. This
        page will continue to be updated as details are finalized, and we’ll
        also share important updates via text.
      </p>
    );
  };

  const accommodationsText = () => {
    if (language.code === "es")
      return (
        <div className="flex flex-col gap-6">
          <p>
            Si planeas hospedarte en <span className="font-bold">Zoe Hora</span>
            , hemos organizado tarifas especiales de boda para nuestros
            invitados. Para ayudarte a elegir la habitación que mejor se adapte
            a tus necesidades, hemos preparado los siguientes documentos:
          </p>

          <div className="flex flex-col justify-evenly gap-4">
            <p>
              <a
                href="https://www.dropbox.com/scl/fi/ydeu0nu0a6chmuui9a1dd/Zoe-Hora-S2026-prices.pdf?rlkey=3hnoju3a8etkfncilw2r1w386&st=neqnlzr7&dl=0"
                target="_blank"
                className="underline cursor-pointer font-bold"
              >
                {" "}
                Tarifas de Habitaciones de Zoe Hora (PDF)
              </a>{" "}
              <br />{" "}
              <span className="italic text-sm">
                (Disponibilidad, capacidad y tarifas especiales de boda)
              </span>
            </p>
            <p>
              <a
                href="https://www.dropbox.com/scl/fi/lcx9pj8oimui50ccnsdjr/Rooms-Catalogue-Zoe-Hora-S2025.pdf?rlkey=w1jc8ctufvic6pn8q8qu8gfql&st=7jtngyv3&dl=0"
                target="_blank"
                className="underline cursor-pointer font-bold"
              >
                Catálogo de Habitaciones de Zoe Hora (PDF)
              </a>{" "}
              <br />{" "}
              <span className="italic text-sm">
                (Distribución de las habitaciones y detalles)
              </span>
            </p>
          </div>

          <p>
            También hay varios hoteles y villas encantadores cerca, en Dhërmi y
            en las localidades costeras vecinas, para quienes prefieran opciones
            alternativas de alojamiento.
          </p>
        </div>
      );

    if (language.code === "sq")
      return (
        <div className="flex flex-col gap-6">
          <p>
            Nëse planifikoni të qëndroni në{" "}
            <span className="font-bold">Zoe Hora</span>, kemi siguruar çmime
            speciale dasme për të ftuarit tanë. Për t’ju ndihmuar të zgjidhni
            dhomën që i përshtatet më mirë nevojave tuaja, kemi përgatitur
            dokumentet e mëposhtme:
          </p>

          <div className="flex flex-col justify-evenly gap-4">
            <p>
              <a
                href="https://www.dropbox.com/scl/fi/ydeu0nu0a6chmuui9a1dd/Zoe-Hora-S2026-prices.pdf?rlkey=3hnoju3a8etkfncilw2r1w386&st=neqnlzr7&dl=0"
                target="_blank"
                className="underline cursor-pointer font-bold"
              >
                {" "}
                Zoe Hora Cmimet e Dhomave (PDF)
              </a>{" "}
              <br />{" "}
              <span className="italic text-sm">
                (Disponueshmëria, kapaciteti dhe çmimet speciale të dasmës)
              </span>
            </p>
            <p>
              <a
                href="https://www.dropbox.com/scl/fi/lcx9pj8oimui50ccnsdjr/Rooms-Catalogue-Zoe-Hora-S2025.pdf?rlkey=w1jc8ctufvic6pn8q8qu8gfql&st=7jtngyv3&dl=0"
                target="_blank"
                className="underline cursor-pointer font-bold"
              >
                Zoe Hora Katalogu i Dhomave (PDF)
              </a>{" "}
              <br />{" "}
              <span className="italic text-sm">
                (Planimet e dhomave dhe detajet)
              </span>
            </p>
          </div>

          <p>
            Ka gjithashtu disa hotele dhe vila shumë të bukura në afërsi, në
            Dhërmi dhe në qytetet bregdetare përreth, për ata që preferojnë
            alternativa të tjera akomodimi.
          </p>
        </div>
      );

    return (
      <div className="flex flex-col gap-6">
        <p>
          If you're planning to stay at{" "}
          <span className="font-bold">Zoe Hora</span>, we've arranged special
          wedding rates for our guests. To help you choose the room that best
          fits your needs, we’ve provided the following documents:
        </p>

        <div className="flex flex-col justify-evenly gap-4">
          <p>
            <a
              href="https://www.dropbox.com/scl/fi/ydeu0nu0a6chmuui9a1dd/Zoe-Hora-S2026-prices.pdf?rlkey=3hnoju3a8etkfncilw2r1w386&st=neqnlzr7&dl=0"
              target="_blank"
              className="underline cursor-pointer font-bold"
            >
              {" "}
              Zoe Hora Room Rates (PDF)
            </a>{" "}
            <br />{" "}
            <span className="italic text-sm">
              (Availability, capacity, and special wedding rates)
            </span>
          </p>
          <p>
            <a
              href="https://www.dropbox.com/scl/fi/lcx9pj8oimui50ccnsdjr/Rooms-Catalogue-Zoe-Hora-S2025.pdf?rlkey=w1jc8ctufvic6pn8q8qu8gfql&st=7jtngyv3&dl=0"
              target="_blank"
              className="underline cursor-pointer font-bold"
            >
              Zoe Hora Room Catalog (PDF)
            </a>{" "}
            <br />{" "}
            <span className="italic text-sm">(Room layouts and details)</span>
          </p>
        </div>

        <p>
          There are also several lovely hotels and villas nearby in Dhërmi and
          surrounding coastal towns for those who prefer alternative
          accommodations.
        </p>
      </div>
    );
  };

  const bookingText = () => {
    if (language.code === "es") {
      return (
        <div className="flex flex-col gap-6">
          <p>
            Las reservas deben realizarse a través de{" "}
            <span className="font-bold">WhatsApp al +355 69 606 0025</span>. Al
            contactar al hotel, por favor incluye tu nombre completo, número de
            noches con fechas específicas, número de huéspedes, número(s) de
            habitación preferida(s) y la referencia{" "}
            <span className="font-bold">Boda de Indiana & Foti</span>.
          </p>

          <p>
            Se requiere un <span className="font-bold">depósito del 50%</span>{" "}
            para confirmar la reserva, el cual puede pagarse mediante un enlace
            de pago seguro o transferencia bancaria. El saldo restante se pagará
            en persona. Las habitaciones estarán reservadas para nuestros
            invitados{" "}
            <span className="font-bold">hasta la última semana de enero</span>,
            después de lo cual la disponibilidad restante se liberará al
            público.
          </p>

          <p>
            Recomendamos hospedarse{" "}
            <span className="font-bold">al menos dos noches</span> — 31 de julio
            (evento de bienvenida) y 1 de agosto (día de la boda). Para más
            detalles sobre cada evento, por favor visita la página{" "}
            <span
              className="italic cursor-pointer hover:underline"
              onClick={() => handleNavigation("schedule")}
            >
              Agenda
            </span>
            . Recomendamos especialmente quedarse la noche de la boda, ya que
            las celebraciones se extenderán hasta tarde.
          </p>
        </div>
      );
    }
    if (language.code === "sq") {
      return (
        <div className="flex flex-col gap-6">
          <p>
            Rezervimet duhet të bëhen përmes{" "}
            <span className="font-bold">
              WhatsApp në numrin +355 69 606 0025
            </span>
            . Kur të kontaktoni hotelin, ju lutemi përfshini emrin dhe mbiemrin
            tuaj të plotë, numrin e netëve me datat përkatëse, numrin e të
            ftuarve, numrin(at) e dhomës(ave) të preferuara, si dhe referencën{" "}
            <span className="font-bold">Dasma e Indiana & Foti</span>.
          </p>

          <p>
            Për të konfirmuar rezervimin kërkohet një{" "}
            <span className="font-bold">depozitë prej 50%</span>, e cila paguhet
            përmes një linku të sigurt pagese ose me transfertë bankare. Shuma e
            mbetur paguhet personalisht. Dhomat janë të rezervuara për të
            ftuarit tanë{" "}
            <span className="font-bold">deri në javën e fundit të janarit</span>
            , pas së cilës disponueshmëria e mbetur do t’i kalojë publikut.
          </p>

          <p>
            <span className="font-bold">
              Rekomandojmë të qëndroni të paktën dy netë
            </span>{" "}
            — 31 korrik (eventi i mirëseardhjes) dhe 1 gusht (dita e dasmës).
            Për më shumë detaje mbi secilin event, ju lutemi vizitoni faqen{" "}
            <span
              className="italic cursor-pointer hover:underline"
              onClick={() => handleNavigation("schedule")}
            >
              Programi
            </span>
            . Veçanërisht rekomandojmë qëndrimin natën e dasmës, pasi festimet
            do të zgjasin deri vonë.
          </p>
        </div>
      );
    }
    return (
      <div className="flex flex-col gap-4">
        <p>
          Reservations must be made via{" "}
          <span className="font-bold">WhatsApp at +355 69 606 0025</span>. When
          contacting the hotel, please include your full name, number of nights
          with specific dates, number of guests, preferred room number(s), and
          reference <span className="font-bold">Indiana & Foti Wedding</span>.
        </p>

        <p>
          A <span className="font-bold">50% deposit</span> is required to
          confirm your reservation and is payable via secure payment link or
          bank transfer, with the remaining balance paid in person. Rooms are
          reserved for our guests{" "}
          <span className="font-bold">until the last week of January</span>,
          after which remaining availability will be released to the public.
        </p>

        <p>
          We recommend staying{" "}
          <span className="font-bold">at least two nights</span> — July 31
          (welcome event) and August 1 (wedding day). For more details on each
          event, please visit the{" "}
          <span
            className="italic cursor-pointer hover:underline"
            onClick={() => handleNavigation("schedule")}
          >
            Schedule
          </span>{" "}
          page. We especially recommend staying the night of the wedding, as
          celebrations will end late.
        </p>
      </div>
    );
  };

  const currencyTip = () => {
    if (language.code === "es")
      return (
        <li>
          <span className="font-bold">Moneda:</span> Lek albanés (ALL) o Euro
        </li>
      );
    if (language.code === "sq")
      return (
        <li>
          <span className="font-bold">Monedha:</span> Lek Shqiptar (ALL) ose
          Euro
        </li>
      );
    return (
      <li>
        <span className="font-bold">Currency:</span> Albanian Lek (ALL) or Euro
      </li>
    );
  };

  const weatherTip = () => {
    if (language.code === "es")
      return (
        <li>
          <span className="font-bold">Clima:</span> Espera días cálidos y
          soleados en Dhërmi durante el verano
        </li>
      );
    if (language.code === "sq")
      return (
        <li>
          <span className="font-bold">Moti:</span> Prisni ditë të ngrohta e me
          diell në Dhërmi gjatë verës
        </li>
      );
    return (
      <li>
        <span className="font-bold">Weather:</span> Expect warm, sunny days in
        Dhërmi during the summer
      </li>
    );
  };

  const DrivingTip = () => {
    if (language.code === "es")
      return (
        <li>
          <span className="font-bold">Conducción:</span> Las carreteras a lo
          largo de la costa son pintorescas pero con curvas — planea tiempo
          adicional para viajar
        </li>
      );
    if (language.code === "sq")
      return (
        <li>
          <span className="font-bold">Drejtimi:</span> Rrugët përgjatë bregdetit
          janë të bukura, por me kthesa — planifikoni kohë shtesë për udhëtim
        </li>
      );
    return (
      <li>
        <span className="font-bold">Driving:</span> Roads along the coast are
        scenic but winding — plan extra time for travel
      </li>
    );
  };

  const LanguageTip = () => {
    if (language.code === "es")
      return (
        <li>
          <span className="font-bold">Idioma:</span> El inglés se habla
          comúnmente en las zonas turísticas
        </li>
      );
    if (language.code === "sq")
      return (
        <li>
          <span className="font-bold">Gjuha:</span> Anglishtja flitet zakonisht
          në zonat turistike
        </li>
      );
    return (
      <li>
        <span className="font-bold">Language:</span> English is commonly spoken
        in tourist areas
      </li>
    );
  };

  return (
    <div className="mx-auto pt-4 sm:pt-0">
      <video
        className="max-h-[80vh] mx-auto"
        loop
        preload="auto"
        muted
        autoPlay
        playsInline
      >
        <source
          src={
            "https://palevioletred-guanaco-529765.hostingersite.com/wp-content/uploads/2025/03/zoe-hora-home-transcode.mp4"
          }
          type="video/mp4"
        />
      </video>

      <div className="text-center mt-12 sm:mt-24 mb-12 mx-4 border-gray-200">
        <p className="text-[40px] sm:text-6xl mb-12">{t.title}</p>
        {introText()}
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex flex-col justify-center text-center bg-zinc-50 py-12 px-6">
          <h3 className="text-2xl sm:text-3xl mb-6">{t.accommodationsTitle}</h3>
          <div className="md:w-3xl mx-auto px-4">{accommodationsText()}</div>
        </div>
        <div className="flex flex-col justify-center text-center">
          <h3 className="text-2xl sm:text-3xl mb-6">{t.bookingTitle}</h3>
          <div className="md:w-3xl mx-auto px-4">{bookingText()}</div>
        </div>
        <div className="flex flex-col justify-center text-center bg-zinc-50 py-12 px-6">
          <h3 className="text-2xl sm:text-3xl mb-6">{t.gettingThereTitle}</h3>
          <div className="md:w-3xl mx-auto px-4">
            <p>{t.gettingThereText}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center">
          <h3 className="text-2xl sm:text-3xl mb-6">{t.exploringTitle}</h3>
          <div className="md:w-3xl mx-auto px-4">
            <p>{t.exploringText}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center bg-zinc-50 py-12 px-6">
          <h3 className="text-2xl sm:text-3xl mb-6">{t.tipsTitle}</h3>
          <div className="md:w-3xl mx-auto px-4">
            <ul>
              {currencyTip()}
              {weatherTip()}
              {DrivingTip()}
              {LanguageTip()}
            </ul>
          </div>
        </div>
      </div>

      {/* Collage section */}
      <Marquee speed={50}>
        {[travelCollage, travelCollage, travelCollage].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`wedding-${i}`}
            className="h-[50vh] w-auto object-cover my-24"
          />
        ))}
      </Marquee>
    </div>
  );
}
