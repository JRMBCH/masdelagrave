import { useEffect, useState } from "react";

type Language = "fr" | "en";

const rooms = [
  {
    name: "Vanille",
    image: "/images/mas-06.webp",
    fr: "La chambre Vanille avec douche à l’italienne et WC privés, lit king-size 180 cm (ou 2 × 90 cm). La douceur des murs vanille donne une touche romantique. La chambre baigne dans une douceur intemporelle.",
    en: "The Vanilla room has an Italian shower and private toilet, with a king-size bed (180 cm or 2 × 90 cm). The sweetness of the vanilla walls gives a romantic touch. The room is bathed in timeless softness.",
  },
  {
    name: "Lin",
    image: "/images/mas-07.webp",
    fr: "La chambre Lin avec douche et WC privés, lit king-size (180 cm ou 2 × 90 cm). Une touche de fraîcheur avec ses murs décorés à la chaux blanche et patine à l’ancienne, un esprit jeune et romantique.",
    en: "The Linen room has a private shower and toilet, with a king-size bed (180 cm or 2 × 90 cm). Whitewashed walls and an antique patina bring a fresh, young and romantic atmosphere.",
  },
  {
    name: "Opale",
    image: "/images/mas-08.webp",
    fr: "La chambre Opale avec salle de bain et WC privés, lit 160 cm, offre une ambiance calme. Les murs vous rappelleront la douceur d’un ciel de Provence.",
    en: "The Opal room has a private bathroom and toilet, a 160 cm bed and a calm atmosphere. The walls will remind you of the softness of a Provence sky.",
  },
];

const gallery = [
  { src: "/images/mas-01.webp", alt: "Le Mas de la Grave et sa piscine" },
  { src: "/images/mas-02.webp", alt: "Lauriers roses dans le jardin" },
  { src: "/images/mas-03.webp", alt: "Volets provençaux du Mas" },
  { src: "/images/mas-04.webp", alt: "Fontaine dans le jardin" },
  { src: "/images/mas-05.webp", alt: "Raisins du verger" },
  { src: "/images/mas-09.webp", alt: "Salon ombragé dans le jardin" },
  { src: "/images/mas-10.webp", alt: "Piscine et jardin du Mas" },
  { src: "/images/mas-11.webp", alt: "Le pont d’Avignon" },
  { src: "/images/mas-12.webp", alt: "Salle de douche de la chambre Lin" },
  { src: "/images/mas-13.webp", alt: "Salle de douche de la chambre Vanille" },
  { src: "/images/mas-14.webp", alt: "Salle de bain de la chambre Opale" },
];

const copy = {
  fr: {
    nav: ["Le Mas", "Chambres", "Galerie", "Tarifs", "Contact"],
    eyebrow: "Maison d’hôtes · Provence",
    title: "Le Mas de la Grave",
    subtitle: "Une parenthèse au rythme de la Provence",
    heroCta: "Découvrir les chambres",
    book: "Nous contacter",
    aboutLabel: "Bienvenue au Mas",
    aboutTitle: "Le charme d’une maison de famille",
    about:
      "Danielle et Patrick vous accueillent chaleureusement et vous proposent trois chambres au premier étage, non-fumeur. Une documentation touristique est disponible durant votre séjour. Danielle vous guidera pour découvrir les nombreux sites touristiques aux alentours.",
    breakfast:
      "Le copieux petit-déjeuner — confitures maison, pain, viennoiseries, jus et fruits de saison — est servi dans la salle à manger ou sur la terrasse, sous la pergola et à l’ombre du mûrier.",
    roomsLabel: "Séjourner",
    roomsTitle: "Nos trois chambres",
    roomsIntro:
      "Confortablement installées pour deux personnes, elles possèdent chacune leur atmosphère et leur décoration.",
    roomDetails: "Salle d’eau privée · 2 personnes",
    galleryLabel: "L’esprit du lieu",
    galleryTitle: "Au calme, entre jardin et piscine",
    ratesLabel: "Préparer votre séjour",
    ratesTitle: "Tarifs 2026",
    ratesIntro: "Tous nos tarifs sont communiqués sur demande.",
    rateNight: "Une nuit",
    rateTwo: "À partir de deux nuits",
    rateFive: "À partir de cinq nuits",
    rateRoom: "2 personnes avec petit-déjeuner, par nuit",
    rateHouse: "Nos 3 chambres en formule gîte",
    high: "Haute saison 2026",
    low: "Basse saison 2026",
    houseDetail: "6 personnes sans petit-déjeuner, pour 6 nuits",
    request: "Sur demande",
    conditions: "Conditions de séjour",
    arrival: "Arrivée à partir de 16 h",
    departure: "Départ au plus tard à 11 h",
    cleaning: "Frais de ménage du gîte : 50 €",
    deposit: "Caution pour le gîte : 500 €",
    touristTax: "Taxe de séjour : 0,60 € par personne et par jour",
    closure:
      "Fermeture annuelle : janvier, février et mars, sauf vacances de Pâques, puis de novembre à décembre.",
    contactLabel: "Venir au Mas",
    contactTitle: "Votre séjour commence ici",
    contactText:
      "Pour toute réservation, 30 % du total ou une nuit minimum sont demandés en arrhes. Celles-ci ne sont pas remboursables en cas d’annulation. Merci de confirmer vos dates de séjour par courrier ou par e-mail.",
    payment:
      "Nous ne prenons pas de carte de crédit ni de chèque étranger. Pour l’étranger, un virement bancaire de 30 % du montant total est demandé.",
    address: "181 route de la Grave, 84210 Althen-des-Paluds",
    emailUs: "Écrire un e-mail",
    callUs: "Nous appeler",
    directions: "Itinéraire",
    follow: "Suivez-nous",
    footer: "Maison d’hôtes en Provence",
  },
  en: {
    nav: ["The Mas", "Rooms", "Gallery", "Rates", "Contact"],
    eyebrow: "Bed & Breakfast · Provence",
    title: "Le Mas de la Grave",
    subtitle: "A peaceful interlude in the heart of Provence",
    heroCta: "Discover the rooms",
    book: "Contact us",
    aboutLabel: "Welcome to the Mas",
    aboutTitle: "The charm of a family home",
    about:
      "Danielle and Patrick warmly welcome you and offer three bedrooms on the first non-smoking floor. Tourist information is available during your stay, and Danielle will guide you to discover the many attractions in the area.",
    breakfast:
      "The hearty breakfast — homemade jams, bread, pastries, juices and seasonal fruit — is served in the dining room or on the terrace, under the pergola in the shade of the mulberry tree.",
    roomsLabel: "Stay",
    roomsTitle: "Our three rooms",
    roomsIntro:
      "Comfortably designed for two people, each room has its own atmosphere and decoration.",
    roomDetails: "Private bathroom · 2 guests",
    galleryLabel: "The spirit of the place",
    galleryTitle: "Peaceful days by the garden and pool",
    ratesLabel: "Plan your stay",
    ratesTitle: "2026 rates",
    ratesIntro: "All our rates are available on request.",
    rateNight: "One night",
    rateTwo: "From two nights",
    rateFive: "From five nights",
    rateRoom: "2 people with breakfast, per night",
    rateHouse: "Our 3 rooms as a holiday house",
    high: "High season 2026",
    low: "Low season 2026",
    houseDetail: "6 people without breakfast, for 6 nights",
    request: "On request",
    conditions: "Stay conditions",
    arrival: "Arrival from 4 pm",
    departure: "Departure by 11 am",
    cleaning: "Holiday house cleaning fee: €50",
    deposit: "Holiday house deposit: €500",
    touristTax: "Tourist tax: €0.60 per person per day",
    closure:
      "Annual closure: January, February and March, except the Easter holidays, then November through December.",
    contactLabel: "Come to the Mas",
    contactTitle: "Your stay starts here",
    contactText:
      "For reservations, a deposit of 30% or a minimum of one night is required. It is non-refundable in case of cancellation. Please confirm your dates by post or email.",
    payment:
      "We do not accept credit cards or foreign cheques. A bank transfer of 30% of the total is required from abroad.",
    address: "181 route de la Grave, 84210 Althen-des-Paluds, France",
    emailUs: "Send an email",
    callUs: "Call us",
    directions: "Directions",
    follow: "Follow us",
    footer: "Bed & Breakfast in Provence",
  },
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className={`menu-icon ${open ? "is-open" : ""}`} aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") setLightbox((lightbox + 1) % gallery.length);
      if (event.key === "ArrowLeft") setLightbox((lightbox - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <header className="site-header">
        <a href="#accueil" className="brand" aria-label="Le Mas de la Grave, accueil">
          <span className="brand-mark">M</span>
          <span>
            Le Mas
            <small>de la Grave</small>
          </span>
        </a>

        <nav className={`nav ${menuOpen ? "is-open" : ""}`} aria-label="Navigation principale">
          {["apropos", "chambres", "galerie", "tarifs", "contact"].map((id, index) => (
            <button key={id} onClick={() => goTo(id)}>
              {t.nav[index]}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-switch" aria-label="Choisir la langue">
            <button
              className={language === "fr" ? "active" : ""}
              onClick={() => setLanguage("fr")}
              aria-pressed={language === "fr"}
            >
              FR
            </button>
            <span />
            <button
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
          <button className="header-cta" onClick={() => goTo("contact")}>
            {t.book}
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      <section className="hero" id="accueil">
        <img src="/images/mas-01.webp" alt="Le Mas de la Grave et sa piscine" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>
          <button className="button button-light" onClick={() => goTo("chambres")}>
            {t.heroCta}
            <ArrowIcon />
          </button>
        </div>
        <div className="hero-location">
          <span>43° 59′ N</span>
          <span>Althen-des-Paluds</span>
        </div>
        <button
          className="scroll-cue"
          onClick={() => goTo("apropos")}
          aria-label="Découvrir le Mas"
        >
          <span />
        </button>
      </section>

      <section className="about section" id="apropos">
        <div className="about-images">
          <div className="about-main-image image-frame">
            <img src="/images/mas-02.webp" alt="Lauriers roses du jardin" loading="lazy" />
          </div>
          <div className="about-small-image image-frame">
            <img src="/images/mas-04.webp" alt="La fontaine du jardin" loading="lazy" />
          </div>
          <span className="year-stamp">
            Provence
            <br />
            depuis 1998
          </span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">{t.aboutLabel}</p>
          <h2>{t.aboutTitle}</h2>
          <div className="leaf-divider">◇</div>
          <p className="lead">{t.about}</p>
          <p>{t.breakfast}</p>
          <div className="signature">Danielle &amp; Patrick</div>
        </div>
      </section>

      <section className="rooms section" id="chambres">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.roomsLabel}</p>
            <h2>{t.roomsTitle}</h2>
          </div>
          <p>{t.roomsIntro}</p>
        </div>
        <div className="room-grid">
          {rooms.map((room, index) => (
            <article className="room-card" key={room.name}>
              <div className="room-image">
                <img src={room.image} alt={`Chambre ${room.name}`} loading="lazy" />
                <span>0{index + 1}</span>
              </div>
              <div className="room-content">
                <p className="room-meta">{t.roomDetails}</p>
                <h3>Chambre {room.name}</h3>
                <p>{room[language]}</p>
                <a href="mailto:masdelagrave@wanadoo.fr?subject=Demande de réservation">
                  {t.request}
                  <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="galerie">
        <div className="gallery-heading">
          <p className="eyebrow light">{t.galleryLabel}</p>
          <h2>{t.galleryTitle}</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <button
              className={`gallery-item item-${index + 1}`}
              key={image.src}
              onClick={() => setLightbox(index)}
              aria-label={`Agrandir : ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span>Voir</span>
            </button>
          ))}
        </div>
      </section>

      <section className="rates section" id="tarifs">
        <div className="rates-intro">
          <p className="eyebrow">{t.ratesLabel}</p>
          <h2>{t.ratesTitle}</h2>
          <p>{t.ratesIntro}</p>
          <a
            className="button button-dark"
            href="mailto:masdelagrave@wanadoo.fr?subject=Demande de tarifs"
          >
            {t.request}
            <ArrowIcon />
          </a>
        </div>
        <div className="rates-list">
          {[t.rateNight, t.rateTwo, t.rateFive].map((label) => (
            <div className="rate-row" key={label}>
              <div>
                <h3>{label}</h3>
                <p>{t.rateRoom}</p>
              </div>
              <strong>{t.request}</strong>
            </div>
          ))}
          <div className="rate-row house-rate">
            <div>
              <h3>{t.rateHouse}</h3>
              <p>{t.houseDetail}</p>
            </div>
            <div>
              <span>{t.high}</span>
              <strong>{t.request}</strong>
              <span>{t.low}</span>
              <strong>{t.request}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="conditions">
        <div className="conditions-image">
          <img src="/images/mas-05.webp" alt="Raisins dans le jardin du Mas" loading="lazy" />
        </div>
        <div className="conditions-copy">
          <p className="eyebrow">{t.conditions}</p>
          <ul>
            {[t.arrival, t.departure, t.cleaning, t.deposit, t.touristTax].map((item) => (
              <li key={item}>
                <span>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="closure">{t.closure}</p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-content">
          <p className="eyebrow light">{t.contactLabel}</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <p className="payment-note">{t.payment}</p>
          <div className="contact-buttons">
            <a
              href="mailto:masdelagrave@wanadoo.fr?subject=Demande de séjour au Mas de la Grave"
              className="button button-light"
            >
              {t.emailUs}
              <ArrowIcon />
            </a>
            <a href="tel:+33609420632" className="text-link">
              {t.callUs} <span>+33 (0)6 09 42 06 32</span>
            </a>
          </div>
        </div>
        <div className="contact-card">
          <span className="contact-card-label">Le Mas de la Grave</span>
          <h3>{t.address}</h3>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Le+Mas+de+la+Grave+Althen-des-Paluds"
            target="_blank"
            rel="noreferrer"
          >
            {t.directions}
            <ArrowIcon />
          </a>
          <div className="contact-rule" />
          <p>+33 (0)4 90 62 17 53</p>
          <p>+33 (0)6 09 42 06 32</p>
          <p>masdelagrave@wanadoo.fr</p>
        </div>
      </section>

      <footer>
        <a href="#accueil" className="footer-brand">
          Le Mas de la Grave
        </a>
        <p>{t.footer} · Althen-des-Paluds</p>
        <div className="footer-links">
          <span>{t.follow}</span>
          <a href="https://www.instagram.com/masdelagrave/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a
            href="https://www.tripadvisor.fr/Hotel_Review-g780930-d4558107-Reviews-Le_Mas_de_la_Grave-Althen_des_Paluds_Vaucluse_Provence_Alpes_Cote_d_Azur.html"
            target="_blank"
            rel="noreferrer"
          >
            Tripadvisor
          </a>
        </div>
      </footer>

      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Aperçu de la galerie">
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Fermer">
            ×
          </button>
          <button
            className="lightbox-nav previous"
            onClick={() => setLightbox((lightbox - 1 + gallery.length) % gallery.length)}
            aria-label="Image précédente"
          >
            ‹
          </button>
          <img src={gallery[lightbox].src} alt={gallery[lightbox].alt} />
          <button
            className="lightbox-nav next"
            onClick={() => setLightbox((lightbox + 1) % gallery.length)}
            aria-label="Image suivante"
          >
            ›
          </button>
          <span className="lightbox-count">
            {lightbox + 1} / {gallery.length}
          </span>
        </div>
      )}
    </main>
  );
}
