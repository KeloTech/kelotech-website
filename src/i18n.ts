export type Lang = "fi" | "en";

export const translations = {
  fi: {
    metaTitle: "Kelotech | Verkkosivut ja mobiilisovellukset yrityksille",
    metaDescription:
      "Kelotech tekee verkkosivut pienyrityksille ja julkaisee mobiilisovelluksia App Storeen ja Google Playhin. Suomalainen ohjelmistoyritys Helsingistä.",
    nav: { services: "Palvelut", process: "Näin se toimii", contact: "Ota yhteyttä" },
    hero: {
      badge: "Suomalainen ohjelmistoyritys",
      title: "Verkkosivut ja mobiilisovellukset yrityksellesi",
      subtitle:
        "Teemme pienyrityksille ammattimaiset verkkosivut ja rakennamme mobiilisovelluksia suunnittelusta julkaisuun asti. Näet valmiin työn ennen kuin maksat mitään.",
      ctaPrimary: "Pyydä esittely",
      ctaSecondary: "Katso palvelut",
      trustLine: "Julkaisemme sovelluksia näillä alustoilla",
      appsOnStore: "4 sovellusta App Storessa",
    },
    services: {
      title: "Palvelut",
      subtitle: "Selkeät hinnat, ei piilokuluja. Hintoihin ei lisätä arvonlisäveroa.",
      website: {
        name: "Verkkosivut yrityksille",
        price: "640 €",
        priceNote: "kertamaksu",
        description: "Valmis sivusto yrityksesi tiedoilla. Lasku tulee vasta, kun olet nähnyt valmiin sivun ja hyväksynyt sen.",
        features: [
          "Sivusto yrityksesi teksteillä ja kuvilla",
          "Yhteydenottolomake suoraan sähköpostiisi",
          "Toimii puhelimella ja tietokoneella",
          "Hakukoneiden perusasetukset",
          "Kaksi korjauskierrosta sisältyy hintaan",
        ],
      },
      maintenance: {
        name: "Ylläpito",
        price: "44 €/kk",
        priceNote: "laskutus 132 € kolmen kuukauden välein",
        description: "Kaikki mitä sivusto tarvitsee pysyäkseen verkossa ja ajan tasalla.",
        features: [
          "Oma .fi-osoite ja sen vuosimaksu",
          "Palvelin ja tietoturvavarmenne (https)",
          "Varmuuskopiot",
          "Pienet päivitykset, esim. aukiolot ja hinnat",
          "Vastaus muutospyyntöihin 2 arkipäivässä",
        ],
      },
      apps: {
        name: "Mobiilisovellukset",
        price: "Tarjouksen mukaan",
        priceNote: "hinnoitellaan projektikohtaisesti",
        description: "Sovellukset iOS- ja Android-laitteille suunnittelusta julkaisuun asti.",
        features: [
          "Julkaisu App Storeen ja Google Playhin",
          "Suunnittelu, toteutus ja testaus",
          "Julkaisun jälkeinen ylläpito ja päivitykset",
        ],
      },
    },
    process: {
      title: "Näin se toimii",
      steps: [
        { title: "Näet valmiin sivun", text: "Teemme yrityksellesi oman version valmiiksi ja esittelemme sen videopuhelussa. Tämä ei maksa mitään." },
        { title: "Kerrot muutostoiveet", text: "Teemme muutokset toiveidesi mukaan vuorokauden sisällä. Kaksi korjauskierrosta sisältyy hintaan." },
        { title: "Maksat vasta kun hyväksyt", text: "Lasku lähetetään vasta, kun olet hyväksynyt valmiin sivun. Sen jälkeen julkaisemme sivun omassa .fi-osoitteessasi." },
      ],
    },
    trust: {
      title: "Miksi Kelotech",
      items: [
        { title: "4 sovellusta App Storessa", text: "Suunnittelemme, rakennamme ja julkaisemme omia sovelluksia. Sama osaaminen on käytössäsi." },
        { title: "Suomalainen yritys", text: "KeloTech Group Oy, Y-tunnus 3573879-3. Palvelu suomeksi ja lasku suomalaisesta yrityksestä." },
        { title: "Ei riskiä", text: "Näet valmiin työn ennen kuin maksat. Jos et ole tyytyväinen, et maksa mitään." },
      ],
    },
    contact: {
      title: "Ota yhteyttä",
      description: "Kerro lyhyesti yrityksestäsi ja mitä tarvitset, niin palaamme asiaan yhden arkipäivän sisällä.",
      emailLabel: "Sähköposti",
      locationLabel: "Sijainti",
      location: "Helsinki",
      name: "Nimi *",
      namePlaceholder: "Nimesi",
      email: "Sähköposti *",
      emailPlaceholder: "nimi@yritys.fi",
      message: "Viesti *",
      messagePlaceholder: "Kerro yrityksestäsi ja mitä tarvitset...",
      send: "Lähetä viesti",
      sending: "Lähetetään...",
      success: "Viesti lähetetty! Palaamme asiaan pian.",
      error: "Viestin lähetys epäonnistui. Yritä uudelleen tai lähetä sähköpostia suoraan.",
    },
    footer: {
      tagline: "Verkkosivut ja mobiilisovellukset suomalaisille yrityksille.",
      contactTitle: "Yhteystiedot",
      companyTitle: "Yritys",
      companyLines: ["KeloTech Group Oy", "Y-tunnus 3573879-3", "Helsinki"],
      rights: "Kaikki oikeudet pidätetään.",
    },
  },
  en: {
    metaTitle: "Kelotech | Websites and Mobile Apps for Businesses",
    metaDescription:
      "Kelotech builds websites for small businesses and publishes mobile apps on the App Store and Google Play. A Finnish software company based in Helsinki.",
    nav: { services: "Services", process: "How it works", contact: "Contact" },
    hero: {
      badge: "Finnish software company",
      title: "Websites and mobile apps for your business",
      subtitle:
        "We build professional websites for small businesses and develop mobile apps from design to launch. You see the finished work before you pay anything.",
      ctaPrimary: "Request a demo",
      ctaSecondary: "View services",
      trustLine: "We publish apps on these platforms",
      appsOnStore: "4 apps on the App Store",
    },
    services: {
      title: "Services",
      subtitle: "Clear pricing, no hidden fees. Prices are VAT free.",
      website: {
        name: "Websites for businesses",
        price: "640 €",
        priceNote: "one-time fee",
        description: "A complete website with your business details. You are invoiced only after you have seen and approved the finished site.",
        features: [
          "Website with your texts and photos",
          "Contact form straight to your email",
          "Works on phones and computers",
          "Basic search engine setup",
          "Two revision rounds included",
        ],
      },
      maintenance: {
        name: "Maintenance",
        price: "44 €/month",
        priceNote: "billed 132 € every three months",
        description: "Everything your website needs to stay online and up to date.",
        features: [
          "Your own .fi domain and its annual fee",
          "Hosting and security certificate (https)",
          "Backups",
          "Small updates, e.g. opening hours and prices",
          "Response to change requests within 2 business days",
        ],
      },
      apps: {
        name: "Mobile apps",
        price: "By quote",
        priceNote: "priced per project",
        description: "Apps for iOS and Android devices, from design to launch.",
        features: [
          "Publishing to the App Store and Google Play",
          "Design, development and testing",
          "Post-launch maintenance and updates",
        ],
      },
    },
    process: {
      title: "How it works",
      steps: [
        { title: "You see the finished site", text: "We build a version for your business and present it in a video call. This costs nothing." },
        { title: "You tell us what to change", text: "We make the changes within one day. Two revision rounds are included." },
        { title: "You pay only after approving", text: "The invoice is sent only after you have approved the finished site. Then we publish it on your own .fi domain." },
      ],
    },
    trust: {
      title: "Why Kelotech",
      items: [
        { title: "4 apps on the App Store", text: "We design, build and publish our own apps. The same expertise works for you." },
        { title: "Finnish company", text: "KeloTech Group Oy, business ID 3573879-3. Service in Finnish and English, invoiced by a Finnish company." },
        { title: "No risk", text: "You see the finished work before you pay. If you are not happy, you pay nothing." },
      ],
    },
    contact: {
      title: "Get in touch",
      description: "Tell us briefly about your business and what you need, and we will get back to you within one business day.",
      emailLabel: "Email",
      locationLabel: "Location",
      location: "Helsinki, Finland",
      name: "Name *",
      namePlaceholder: "Your name",
      email: "Email *",
      emailPlaceholder: "name@company.com",
      message: "Message *",
      messagePlaceholder: "Tell us about your business and what you need...",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent! We will get back to you soon.",
      error: "Failed to send the message. Please try again or email us directly.",
    },
    footer: {
      tagline: "Websites and mobile apps for Finnish businesses.",
      contactTitle: "Contact",
      companyTitle: "Company",
      companyLines: ["KeloTech Group Oy", "Business ID 3573879-3", "Helsinki, Finland"],
      rights: "All rights reserved.",
    },
  },
};

export type Translation = (typeof translations)["fi"];
