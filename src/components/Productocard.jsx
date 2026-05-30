import './Productocard.css'

function Productocard({
  category,
  title,
  price,
  oldPrice,
  rating = 5,
  reviews = 0,
  discount,
  imageSrc = '',
  imageAlt = '',
  href = '#',
}) {
  const stars = Array.from({ length: 5 }, (_, index) => index < Math.round(rating))

  return (
    <article className="producto-card">
      <a className="producto-card__link" href={href}>
        <div className="producto-card__media">
          {discount ? <span className="producto-card__discount">-{discount}%</span> : null}

          {imageSrc ? (
            <img className="producto-card__image" src={imageSrc} alt={imageAlt || title} />
          ) : (
            <div className="producto-card__placeholder" aria-label="Espacio reservado para imagen del producto">
              <span>Imagen</span>
            </div>
          )}
        </div>

        <div className="producto-card__body">
          <span className="producto-card__category">{category}</span>
          <h3>{title}</h3>

          <div className="producto-card__rating">
            <div className="producto-card__stars" aria-label={`Calificacion de ${rating} sobre 5`}>
              {stars.map((isActive, index) => (
                <svg
                  key={`${title}-star-${index}`}
                  viewBox="0 0 24 24"
                  fill={isActive ? 'currentColor' : 'none'}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3.75L14.55 8.92L20.25 9.75L16.13 13.77L17.1 19.45L12 16.77L6.9 19.45L7.87 13.77L3.75 9.75L9.45 8.92L12 3.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              ))}
            </div>
            <span className="producto-card__reviews">({reviews})</span>
          </div>

          <div className="producto-card__footer">
            <div className="producto-card__prices">
              <span className="producto-card__price">S/ {price}</span>
              {oldPrice ? <span className="producto-card__old-price">S/ {oldPrice}</span> : null}
            </div>

            <span className="producto-card__cart" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.25 6H6.65L8.05 13.7C8.19 14.46 8.85 15.01 9.62 15.01H17.6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.95 8.96H18.91C19.54 8.96 20.01 9.56 19.86 10.16L18.77 14.22"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10.25" cy="18.25" r="1.1" fill="currentColor" />
                <circle cx="17.1" cy="18.25" r="1.1" fill="currentColor" />
              </svg>
            </span>
          </div>
        </div>
      </a>
    </article>
  )
}

export default Productocard
