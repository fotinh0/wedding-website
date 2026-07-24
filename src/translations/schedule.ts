interface TimelineItem {
  date: string;
  event: string;
  time?: string;
  detail: string;
  isEvent: boolean;
  hideDate: boolean;
}

interface ScheduleTranslation {
  title: string;
  intro: string;
  scheduleLabel: string;
  timelineLabel: string;
  timeline: TimelineItem[];
  timelineDisclaimer: string;
  whatToExpectLabel: string;
  infromationLabel: string;
  info: {
    badge: string;
    heading: string;
    body: string[];
  }[];
  dressCodeLabel: string;
  weddingAttireLabel: string;
  weddingAttireText: string;
  womenAttireLabel: string;
  womenAttireText: string;
  menAttireLabel: string;
  menAttireText: string;
  optionalLabel: string;
  hairAndMakeupLabel: string;
  registryLabel: string;
}

interface ScheduleTranslations {
  en: ScheduleTranslation;
  sq: ScheduleTranslation;
  es: ScheduleTranslation;
}

export const scheduleTranslations: ScheduleTranslations = {
  en: {
    title: "Wedding Weekend Details",
    intro:
      "Everything you need to celebrate with us in Albania, from the welcome evening to the last dance. Details will continue to be updated as plans are finalized.",
    scheduleLabel: "Schedule",
    timelineLabel: "Timeline",
    timeline: [
      {
        date: "Friday, July 31",
        event: "Welcome Dinner",
        time: "7:00 PM",
        detail:
          "The welcome gathering will take place at Fig and Olive in Himarë, approximately 30-40 minutes from Zoe Hora. A relaxed evening to connect ahead of the wedding day.",
        isEvent: true,
        hideDate: false,
      },
      // {
      //   date: "",
      //   event: "Saturday, August 1, 2026",
      //   detail: "",
      //   isEvent: false,
      //   hideDate: true,
      // },
      {
        date: "Saturday, August 1",
        event: "Guest Arrival",
        time: "5:00 PM",
        detail: "Zoe Hora, Dhërmi — guests seated 30 min prior",
        isEvent: true,
        hideDate: false,
      },
      {
        date: "Saturday",
        time: "5:30 PM",
        event: "Ceremony",
        detail: "Zoe Hora, Dhërmi — guests seated 30 min prior",
        isEvent: true,
        hideDate: true,
      },
      {
        date: "Saturday, TBD",
        time: "6:00 PM",
        event: "Cocktail Hour",
        detail: "Garden terrace, Zoe Hora",
        isEvent: true,
        hideDate: true,
      },
      {
        date: "Saturday, TBD",
        time: "7:30 PM",
        event: "Dinner & Reception",
        detail: "Dining, toasts, and dancing",
        isEvent: true,
        hideDate: true,
      },
      {
        date: "Late night",
        event: "After Party",
        time: "12:00 AM - 3:00 AM",
        detail: "Music, drinks & dancing for those who want to continue",
        isEvent: true,
        hideDate: true,
      },
    ],
    timelineDisclaimer:
      "To ensure everyone is seated before the ceremony begins, we kindly ask that guests arrive by 5:00 PM. The ceremony will begin at 5:30 PM sharp.",
    whatToExpectLabel: "What to Expect",
    infromationLabel: "Information",
    info: [
      {
        badge: "Friday",
        heading: "Welcome Dinner",
        body: [
          "The welcome dinner will take place at Fig and Olive in Himarë, approximately 30-40 minutes from Zoe Hora. A relaxed evening to connect ahead of the wedding day.",
        ],
      },
      {
        badge: "Saturday",
        heading: "Wedding Day",
        body: [
          "The ceremony and reception will take place at Zoe Hora in Dhërmi, Albania. Dinner, drinks, and dancing will follow the ceremony. Come ready to eat, toast, and celebrate the night away.",
        ],
      },
      {
        badge: "Late night",
        heading: "After Party",
        body: [
          "For those who want to continue the celebration, join us for music, drinks, and dancing into the night.",
        ],
      },
    ],
    dressCodeLabel: "Dress Code",
    weddingAttireLabel: "Wedding Attire",
    weddingAttireText:
      "Our wedding will be black tie. Guests are invited to dress in formal eveningwear. A style guide with visual examples is provided below for reference.",
    womenAttireLabel: "For Women",
    womenAttireText:
      "Floor-length gowns and elegant evening dresses are encouraged. Please kindly avoid white, ivory, or similar shades, as these colors are reserved for the bride.",
    menAttireLabel: "For Men",
    menAttireText:
      "Classic tuxedos and suits with a formal tie or bow tie are encouraged. Please avoid white or off-white suits or jackets, as these colors are reserved for the couple.",
    optionalLabel: "Optional",
    hairAndMakeupLabel: "Hair & Makeup",
    registryLabel: "Registry",
  },

  sq: {
    title: "Detajet e fundjavës së dasmës",
    intro:
      "Gjithçka që ju duhet për të festuar me ne në Shqipëri. Detajet do të përditësohen ndërkohë planet finalizohen.",
    scheduleLabel: "Programi",
    timelineLabel: "Kronologjia",
    timeline: [
      {
        date: "E premte, 31 Korrik",
        event: "Darka e mirëseardhjes",
        time: "7:00 PM",
        detail:
          "Takimi i mirëseardhjes do të zhvillohet në Fig and Olive ne Himarë, rreth 30-40 minuta nga Zoe Hora. Një mbrëmje e qetë për t’u njohur përpara ditës së dasmës.",
        isEvent: true,
        hideDate: false,
      },
      // {
      //   date: "",
      //   event: "E Shtune, 1 Gusht, 2026",
      //   detail: "",
      //   isEvent: false,
      //   hideDate: true,
      // },
      {
        date: "E shtunë, 1 gusht",
        event: "Ardhja e të ftuarve",
        time: "17:00",
        detail: "Zoe Hora, Dhërmi — të ftuarit ulen 30 minuta më herët",
        isEvent: true,
        hideDate: false,
      },
      {
        date: "E shtunë, për t’u konfirmuar",
        event: "Ceremonia",
        time: "17:30",
        detail: "Zoe Hora, Dhërmi — të ftuarit ulen 30 minuta më herët",
        isEvent: true,
        hideDate: true,
      },
      {
        date: "E shtunë, për t’u konfirmuar",
        time: "18:00",
        event: "Hora e koktejit",
        detail: "Tarraca e kopshtit, Zoe Hora",
        isEvent: true,
        hideDate: true,
      },
      {
        date: "E shtunë, për t’u konfirmuar",
        time: "19:30",
        event: "Recepsioni & Festimi",

        detail: "Ushqim, dolli dhe kërcim",
        isEvent: true,
        hideDate: true,
      },
      {
        date: "Natën vonë",
        event: "After Party",
        time: "00:00 - 3:00",
        detail: "Muzikë, pije dhe kërcim për ata që duan të vazhdojnë",
        isEvent: true,
        hideDate: true,
      },
    ],
    timelineDisclaimer:
      "Për t'u siguruar që të gjithë të jenë ulur përpara fillimit të ceremonisë, ju lutemi të mbërrini deri në orën 17:00. Ceremonia do të fillojë saktësisht në orën 17:30.",
    whatToExpectLabel: "Çfarë të prisni",
    infromationLabel: "Informacion",
    info: [
      {
        badge: "E premte",
        heading: "Darka e mirëseardhjes",
        body: [
          "Takimi i mirëseardhjes do të zhvillohet në Fig and Olive në Himarë, rreth 30-40 minuta nga Zoe Hora. Një mbrëmje e qetë për t’u njohur përpara ditës së dasmës.",
        ],
      },
      {
        badge: "E shtunë",
        heading: "Dita e dasmës",
        body: [
          "Ceremonia dhe recepsioni do të zhvillohen në Zoe Hora. Pas ceremonisë do të ketë darkë, pije dhe kërcim. Përgatituni të hani, të bëni dolli dhe të festoni gjatë gjithë natës.",
        ],
      },
      {
        badge: "Natën vonë",
        heading: "After Party",
        body: [
          "Për ata që duan të vazhdojnë festën, bashkohuni me ne për muzikë, pije dhe kërcim deri vonë.",
        ],
      },
    ],
    dressCodeLabel: "Kodi i veshjes",
    weddingAttireLabel: "Veshja për dasmën",
    weddingAttireText:
      "Dasma jonë do të jetë black tie. Të ftuarit janë të ftuar të vishen me veshje elegante mbrëmjeje. Një guidë stili me shembuj vizualë është dhënë më poshtë për referencë.",
    womenAttireLabel: "Për gra",
    womenAttireText:
      "Rekomandohen fustane të gjata dhe elegante. Ju lutemi shmangni të bardhën, ngjyrën fildish ose nuanca të ngjashme, pasi këto janë të rezervuara për nusen.",
    menAttireLabel: "Për burra",
    menAttireText:
      "Rekomandohen tuxedo ose kostume klasikë me kravatë ose papion. Ju lutemi shmangni kostumet ose xhaketat e bardha, pasi këto ngjyra janë të rezervuara për çiftin.",
    optionalLabel: "Opsionale",
    hairAndMakeupLabel: "Flokë & Makeup",
    registryLabel: "Lista e dhuratave",
  },

  es: {
    title: "Detalles del fin de semana de la boda",
    intro:
      "Todo lo que necesitas para celebrar con nosotros en Albania, desde la bienvenida hasta el último baile. Los detalles seguirán actualizándose a medida que se finalicen los planes.",
    scheduleLabel: "Programa",
    timelineLabel: "Itinerario",
    timeline: [
      {
        date: "Viernes, 31 de julio",
        event: "Evento de bienvenida",
        time: "7:00 PM",
        detail:
          "La reunión de bienvenida se llevará a cabo en Fig and Olive en Himarë, aproximadamente a 30-40 minutos de Zoe Hora. Una velada relajada para conectar antes del día de la boda.",
        isEvent: true,
        hideDate: false,
      },
      // {
      //   date: "",
      //   event: "Sábado, Agosto 1, 2026",
      //   detail: "",
      //   isEvent: false,
      //   hideDate: true,
      // },
      {
        date: "Sábado, 1 de agosto",
        time: "5:00 PM",
        event: "Llegada de invitados",
        detail: "Zoe Hora, Dhërmi — invitados sentados 30 minutos antes",
        isEvent: true,
        hideDate: false,
      },
      {
        date: "Sábado",
        event: "Ceremonia",
        time: "5:30 PM",
        detail: "Zoe Hora, Dhërmi — invitados sentados 30 minutos antes",
        isEvent: true,
        hideDate: true,
      },
      {
        date: "Sábado",
        event: "Cóctel",
        time: "6:00 PM",
        detail: "Terraza del jardín, Zoe Hora",
        isEvent: true,
        hideDate: true,
      },
      {
        date: "Sábado",
        event: "Cena y recepción",
        time: "7:30 PM",
        detail: "Cena, brindis y baile",
        isEvent: true,
        hideDate: true,
      },
      {
        date: "Tarde en la noche",
        time: "12:00 AM - 3:00 AM",
        event: "After Party",
        detail: "Música, bebidas y baile para quienes deseen continuar",
        isEvent: true,
        hideDate: true,
      },
    ],
    timelineDisclaimer:
      "Para asegurarnos de que todos estén sentados antes de que comience la ceremonia, les pedimos amablemente que lleguen a las 5:00 p.m. La ceremonia comenzará puntualmente a las 5:30 p.m.",
    whatToExpectLabel: "Qué esperar",
    infromationLabel: "Información",
    info: [
      {
        badge: "Viernes",
        heading: "Evento de bienvenida",
        body: [
          "La reunión de bienvenida se llevará a cabo en Fig and Olive en Himarë, aproximadamente a 30-40 minutos de Zoe Hora. Una velada relajada para conectar antes del día de la boda.",
        ],
      },
      {
        badge: "Sábado",
        heading: "Día de la boda",
        body: [
          "La ceremonia y la recepción se llevarán a cabo en Zoe Hora en Dhërmi, Albania. Después de la ceremonia habrá cena, bebidas y baile. Prepárate para comer, brindar y celebrar toda la noche.",
        ],
      },
      {
        badge: "Tarde en la noche",
        heading: "After Party",
        body: [
          "Para quienes deseen continuar la celebración, acompáñennos para disfrutar de música, bebidas y baile hasta tarde.",
        ],
      },
    ],
    dressCodeLabel: "Código de vestimenta",
    weddingAttireLabel: "Vestimenta",
    weddingAttireText:
      "Nuestra boda será de etiqueta (black tie). Se invita a los invitados a vestir con atuendos formales de noche. A continuación se incluye una guía de estilo con ejemplos visuales como referencia.",
    womenAttireLabel: "Para mujeres",
    womenAttireText:
      "Se recomiendan vestidos largos y elegantes. Por favor, eviten el blanco, marfil o tonos similares, ya que estos colores están reservados para la novia.",
    menAttireLabel: "Para hombres",
    menAttireText:
      "Se recomiendan esmóquines clásicos y trajes elegantes con corbata o corbatín. Por favor, eviten trajes o chaquetas blancas o en tonos similares, ya que estos colores están reservados para la pareja.",
    optionalLabel: "Opcional",
    hairAndMakeupLabel: "Peluquería y Maquillaje",
    registryLabel: "Lista de regalos",
  },
};

export default scheduleTranslations;
