import './Banner.css'

const benefits = [
  {
    title: 'Envio Gratis',
    subtitle: 'En compras +S/ 200',
    tone: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.75 6.75H13.5V16.5H3.75V6.75Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 9H17.16L19.5 11.92V16.5H13.5V9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="8.25" cy="17.25" r="1.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16.5" cy="17.25" r="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Compra Segura',
    subtitle: '100% protegido',
    tone: 'green',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 3.75L18.75 6.42V11.8C18.75 15.37 16.45 18.55 12 20.25C7.55 18.55 5.25 15.37 5.25 11.8V6.42L12 3.75Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Pago Facil',
    subtitle: 'Multiples metodos',
    tone: 'purple',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.75" y="6.75" width="16.5" height="10.5" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.75 10.5H20.25" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Mejores Precios',
    subtitle: 'Ofertas diarias',
    tone: 'orange',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.25 15.75L9.75 11.25L13.5 15L18.75 9.75"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15.75 9.75H18.75V12.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function Banner() {
  return (
    <section className="home-banner" id="inicio">
      <div className="home-banner__hero">
        <div className="home-banner__inner">
          <div className="home-banner__content">
            <span className="home-banner__pill">Ofertas hasta 30% de descuento</span>
            <h1>Compra lo mejor en VendeFacil</h1>
            <p>
              Descubre productos de calidad en electronicos, ropa y accesorios.
              Envio gratis en compras mayores a S/ 200.
            </p>

            <div className="home-banner__actions">
              <a className="home-banner__button home-banner__button--primary" href="#catalogo">
                Ver Catalogo
                <span aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>

              <a className="home-banner__button home-banner__button--secondary" href="#contacto">
                Contactar
              </a>
            </div>
          </div>

          <div className="home-banner__visual">
            <div className="home-banner__art">
              <svg
                className="home-banner__artwork"
                viewBox="0 0 640 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Ilustracion de carrito de compras con cajas"
              >
                <rect x="0" y="0" width="640" height="380" rx="24" fill="#87C8F6" />
                <ellipse cx="321" cy="320" rx="180" ry="24" fill="#6AB6EA" opacity="0.55" />

                <g opacity="0.92">
                  <rect x="72" y="235" width="42" height="22" rx="3" fill="#D6AE78" />
                  <rect x="82" y="228" width="20" height="9" rx="2" fill="#C99960" />
                  <rect x="500" y="258" width="52" height="28" rx="3" fill="#DFC195" />
                  <rect x="515" y="252" width="20" height="10" rx="2" fill="#D2AD7D" />
                  <rect x="215" y="276" width="38" height="20" rx="3" fill="#C89A61" />
                  <rect x="228" y="270" width="12" height="8" rx="2" fill="#B9874C" />
                  <rect x="560" y="220" width="38" height="20" rx="3" fill="#E8C695" />
                  <rect x="572" y="214" width="14" height="7" rx="2" fill="#DAB37D" />
                </g>

                <g opacity="0.35">
                  <rect x="115" y="183" width="10" height="58" rx="5" fill="#A57532" />
                  <rect x="442" y="170" width="10" height="66" rx="5" fill="#A57532" />
                </g>

                <g>
                  <rect x="282" y="120" width="98" height="52" rx="4" fill="#B98B4E" transform="rotate(4 282 120)" />
                  <rect x="315" y="71" width="55" height="55" rx="4" fill="#CCA065" transform="rotate(3 315 71)" />
                  <rect x="242" y="83" width="48" height="48" rx="4" fill="#A97A3E" transform="rotate(-6 242 83)" />
                  <rect x="334" y="44" width="42" height="42" rx="4" fill="#C89A61" transform="rotate(4 334 44)" />
                  <rect x="255" y="168" width="47" height="42" rx="4" fill="#A97A3E" transform="rotate(3 255 168)" />
                </g>

                <g opacity="0.95">
                  <path
                    d="M210 193H257L272 275C273.6 283.4 280.95 289.5 289.5 289.5H411"
                    stroke="#50606D"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M257 208H434C441.4 208 446.7 215.1 445.1 222.2L430.7 286.1C429.4 291.9 424.2 296 418.3 296H287.6"
                    stroke="#566A78"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M278 224H426"
                    stroke="#7E8C96"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                  />
                  <path d="M289 224V291" stroke="#7E8C96" strokeWidth="2.1" />
                  <path d="M318 224V291" stroke="#7E8C96" strokeWidth="2.1" />
                  <path d="M347 224V291" stroke="#7E8C96" strokeWidth="2.1" />
                  <path d="M376 224V291" stroke="#7E8C96" strokeWidth="2.1" />
                  <path d="M405 224V291" stroke="#7E8C96" strokeWidth="2.1" />
                  <path
                    d="M430 192L463 184"
                    stroke="#3555D3"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <circle cx="306" cy="310" r="15" fill="#D82A34" />
                  <circle cx="306" cy="310" r="8" fill="#2E323C" />
                  <circle cx="417" cy="310" r="15" fill="#D82A34" />
                  <circle cx="417" cy="310" r="8" fill="#2E323C" />
                  <path d="M260 289L290 289" stroke="#566A78" strokeWidth="4" strokeLinecap="round" />
                  <path d="M404 296H432" stroke="#566A78" strokeWidth="4" strokeLinecap="round" />
                </g>

                <g opacity="0.32">
                  <rect x="270" y="309" width="188" height="8" rx="4" fill="#66A9D8" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="home-banner__benefits">
        <div className="home-banner__benefits-inner">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="banner-benefit">
              <span className={`banner-benefit__icon banner-benefit__icon--${benefit.tone}`}>
                {benefit.icon}
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Banner
