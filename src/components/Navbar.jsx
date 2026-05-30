import './Navbar.css'

const navLinks = [
    { label: 'Inicio', href: '#/' },
    { label: 'Catalogo', href: '#/catalogo' },
    { label: 'Contacto', href: '#/contacto' },
]

function Navbar() {
    return (
        <>
            <header className="store-navbar">
                <div className="store-navbar__container">
                    <a className="store-navbar__brand" href="#/" aria-label="Ir a inicio">
                        <span className="store-navbar__brand-icon" aria-hidden="true">
                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="10" fill="url(#brand-gradient)" />
                                <path
                                    d="M8 10H11.2L13.08 19.4C13.23 20.18 13.91 20.75 14.71 20.75H23"
                                    stroke="white"
                                    strokeWidth="2.15"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14.35 16.35H22.1C22.73 16.35 23.28 15.92 23.44 15.31L24.65 10.75H12.52"
                                    stroke="white"
                                    strokeWidth="2.15"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <circle cx="14.95" cy="23.55" r="1.65" fill="white" />
                                <circle cx="21.65" cy="23.55" r="1.65" fill="white" />
                                <defs>
                                    <linearGradient id="brand-gradient" x1="3" y1="2" x2="29" y2="30" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#4F5940" />
                                        <stop offset="1" stopColor="#4F5940" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <span className="store-navbar__brand-text">VendeFacil</span>
                    </a>

                    <nav className="store-navbar__links" aria-label="Navegacion principal">
                        {navLinks.map((link) => (
                            <a key={link.label} className="store-navbar__link" href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <form className="store-navbar__search" role="search">
                        <span className="store-navbar__search-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
                                <path
                                    d="M20 20L15.25 15.25"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                        <input type="search" placeholder="Buscar productos..." aria-label="Buscar productos" />
                    </form>

                    <div className="store-navbar__actions">
                        <a className="store-navbar__icon-button" href="#perfil" aria-label="Perfil de usuario">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5C7.5 9.98528 9.51472 12 12 12Z"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                />
                                <path
                                    d="M4 21C4.83 17.96 7.79 15.75 12 15.75C16.21 15.75 19.17 17.96 20 21"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </a>

                        <a className="store-navbar__icon-button store-navbar__cart" href="#carrito" aria-label="Carrito de compras">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.75 5.25H6.15L7.56 13.01C7.7 13.78 8.37 14.34 9.15 14.34H17.85"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.47 8.25H19.02C19.69 8.25 20.18 8.89 20.02 9.54L18.89 13.86"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <circle cx="9.75" cy="18.75" r="1.25" fill="currentColor" />
                                <circle cx="17.25" cy="18.75" r="1.25" fill="currentColor" />
                            </svg>
                            <span className="store-navbar__badge">3</span>
                        </a>
                    </div>
                </div>
            </header>

            <div className="store-navbar__offset" aria-hidden="true"></div>
        </>
    )
}

export default Navbar
