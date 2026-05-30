import './Footer.css'

const quickLinks = [
  { label: 'Inicio', href: '#/' },
  { label: 'Catalogo', href: '#/catalogo' },
  { label: 'Contacto', href: '#/contacto' },
  { label: 'Sobre Nosotros', href: '#' },
]

const categories = [
  { label: 'Electronicos', href: '#' },
  { label: 'Ropa', href: '#' },
  { label: 'Accesorios', href: '#' },
  { label: 'Ofertas', href: '#' },
]

const contacts = [
  {
    label: 'contacto@vendefacil.com',
    href: 'mailto:contacto@vendefacil.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.75" y="5.25" width="16.5" height="13.5" rx="2.4" stroke="currentColor" strokeWidth="1.7" />
        <path d="M5.5 7L12 12.2L18.5 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: '+51 926532594',
    href: 'tel:+51926532594',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.22 4.5H9.82C10.34 4.5 10.79 4.86 10.9 5.37L11.55 8.36C11.64 8.77 11.5 9.2 11.17 9.47L9.62 10.75C10.47 12.49 11.89 13.91 13.63 14.76L14.91 13.21C15.18 12.88 15.61 12.74 16.02 12.83L19.01 13.48C19.52 13.59 19.88 14.04 19.88 14.56V17.16C19.88 17.9 19.28 18.5 18.54 18.5H17.25C10.62 18.5 5.25 13.13 5.25 6.5V5.84C5.25 5.1 5.85 4.5 6.59 4.5H7.22Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Lima, Peru',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 20.25C15.75 16.5 18 13.58 18 10.5C18 7.19 15.31 4.5 12 4.5C8.69 4.5 6 7.19 6 10.5C6 13.58 8.25 16.5 12 20.25Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10.5" r="2.25" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 20.25V12.75H16.13L16.5 9.75H13.5V7.83C13.5 6.96 13.74 6.38 14.99 6.38H16.6V3.68C16.32 3.64 15.36 3.56 14.25 3.56C11.93 3.56 10.35 4.98 10.35 7.6V9.75H7.75V12.75H10.35V20.25H13.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.88 7.12C18.45 7.31 17.99 7.44 17.5 7.5C18 7.2 18.39 6.74 18.57 6.18C18.1 6.46 17.58 6.66 17.02 6.77C16.58 6.3 15.95 6 15.25 6C13.93 6 12.86 7.07 12.86 8.39C12.86 8.57 12.88 8.74 12.92 8.9C10.93 8.8 9.17 7.85 7.98 6.41C7.77 6.77 7.65 7.19 7.65 7.64C7.65 8.47 8.07 9.2 8.71 9.63C8.32 9.62 7.97 9.51 7.67 9.34V9.37C7.67 10.53 8.49 11.49 9.59 11.71C9.39 11.76 9.18 11.79 8.96 11.79C8.81 11.79 8.66 11.77 8.52 11.75C8.82 12.69 9.69 13.37 10.72 13.39C9.91 14.03 8.9 14.41 7.81 14.41C7.62 14.41 7.43 14.4 7.25 14.38C8.29 15.05 9.53 15.44 10.87 15.44C15.24 15.44 17.64 11.82 17.64 8.68V8.37C18.11 8.03 18.51 7.61 18.88 7.12Z" fill="currentColor" />
      </svg>
    ),
  },
]

function Footer() {
  return (
    <footer className="site-footer" id="contacto">
      <div className="site-footer__inner">
        <div className="site-footer__brand-column">
          <a className="site-footer__brand" href="#/">
            <span className="site-footer__logo" aria-hidden="true"></span>
            <span className="site-footer__brand-text">VendeFacil</span>
          </a>

          <p className="site-footer__description">
            Tu tienda online de confianza para electronicos, ropa y accesorios de calidad.
          </p>

          <div className="site-footer__socials">
            {socialLinks.map((social) => (
              <a key={social.label} className="site-footer__social-link" href={social.href} aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer__links-column">
          <h3>Enlaces Rapidos</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__links-column">
          <h3>Categorias</h3>
          <ul>
            {categories.map((category) => (
              <li key={category.label}>
                <a href={category.href}>{category.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__contact-column">
          <h3>Contacto</h3>
          <ul>
            {contacts.map((contact) => (
              <li key={contact.label}>
                <a href={contact.href}>
                  <span className="site-footer__contact-icon" aria-hidden="true">
                    {contact.icon}
                  </span>
                  <span>{contact.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
