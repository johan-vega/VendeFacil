import './Categoriascards.css'

const categories = [
  {
    title: 'Electronicos',
    linkLabel: 'Ver productos',
    href: '#',
    tone: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="5.25"
          y="4.5"
          width="13.5"
          height="9.75"
          rx="1.8"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M3.75 18H20.25"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M8.25 14.25L6.75 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M15.75 14.25L17.25 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Ropa',
    linkLabel: 'Ver productos',
    href: '#',
    tone: 'purple',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.25 5.25L10.4 7.4C11.28 8.28 12.72 8.28 13.6 7.4L15.75 5.25L19.5 7.5L18 11.25L15.75 10.5V19.5H8.25V10.5L6 11.25L4.5 7.5L8.25 5.25Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Accesorios',
    linkLabel: 'Ver productos',
    href: '#',
    tone: 'pink',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.75 5.25C9.75 4.01 10.76 3 12 3C13.24 3 14.25 4.01 14.25 5.25V6.4C16.73 7.33 18.5 9.72 18.5 12.5C18.5 16.09 15.59 19 12 19C8.41 19 5.5 16.09 5.5 12.5C5.5 9.72 7.27 7.33 9.75 6.4V5.25Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9 12.5H15"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Ofertas',
    linkLabel: 'Ver productos',
    href: '#',
    tone: 'orange',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.75 4.5H7.92C7.32 4.5 6.74 4.74 6.32 5.17L4.92 6.57C4.49 6.99 4.25 7.57 4.25 8.17V13C4.25 13.6 4.49 14.18 4.92 14.6L11.15 20.83C12.03 21.71 13.47 21.71 14.35 20.83L20.83 14.35C21.71 13.47 21.71 12.03 20.83 11.15L14.6 4.92C14.18 4.49 13.6 4.25 13 4.25H12.75V4.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="9" r="1.15" fill="currentColor" />
      </svg>
    ),
  },
]

function Categoriascards() {
  return (
    <section className="category-cards" aria-labelledby="category-cards-title">
      <div className="category-cards__header">
        <h2 id="category-cards-title">Explora por Categoria</h2>
        <p>Encuentra exactamente lo que buscas</p>
      </div>

      <div className="category-cards__grid">
        {categories.map((category) => (
          <a
            key={category.title}
            className={`category-card category-card--${category.tone}`}
            href={category.href}
          >
            <span className="category-card__icon" aria-hidden="true">
              {category.icon}
            </span>
            <h3>{category.title}</h3>
            <span className="category-card__link">{category.linkLabel}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Categoriascards
