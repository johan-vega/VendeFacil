import { useMemo, useState } from 'react'
import './Producto.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Productocard from './components/Productocard'
import { getProductBySlug, getRelatedProducts } from './data/products'

function ProductPlaceholder() {
  return (
    <div className="product-detail__placeholder" aria-label="Espacio reservado para imagen del producto">
      <span>Imagen</span>
    </div>
  )
}

function ProductStars({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => index < Math.round(rating))

  return (
    <div className="product-detail__stars">
      {stars.map((isActive, index) => (
        <svg
          key={`product-star-${index}`}
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
  )
}

function ProductActionIcon({ type }) {
  if (type === 'favorite') {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 20.25C12 20.25 4.5 15.6 4.5 9.75C4.5 7.26 6.51 5.25 9 5.25C10.42 5.25 11.69 5.91 12.5 6.95C13.31 5.91 14.58 5.25 16 5.25C18.49 5.25 20.5 7.26 20.5 9.75C20.5 15.6 13 20.25 13 20.25H12Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.75 8.25L8.25 12L15.75 15.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="6.75" r="2.25" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="6" cy="12" r="2.25" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="17.25" r="2.25" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function ProductBenefit({ tone, title, text, icon }) {
  return (
    <article className={`product-detail__benefit product-detail__benefit--${tone}`}>
      <span className="product-detail__benefit-icon" aria-hidden="true">
        {icon}
      </span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  )
}

function Producto({ productSlug }) {
  const product = getProductBySlug(productSlug)
  const relatedProducts = useMemo(() => getRelatedProducts(productSlug, 3), [productSlug])
  const gallery = product?.gallery?.length ? product.gallery : product?.imageSrc ? [product.imageSrc] : []
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const selectedImage = gallery[selectedImageIndex] ?? ''

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="product-page">
          <section className="product-page__not-found">
            <h1>Producto no encontrado</h1>
            <p>No pudimos encontrar el producto que estas buscando.</p>
            <a href="#/catalogo">Volver al catalogo</a>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  const currentPrice = Number.parseFloat(product.price)
  const oldPriceValue = product.oldPrice ? Number.parseFloat(product.oldPrice) : 0
  const savings = oldPriceValue ? (oldPriceValue - currentPrice).toFixed(2) : null
  const total = (currentPrice * quantity).toFixed(2)

  return (
    <>
      <Navbar />

      <main className="product-page">
        <div className="product-page__breadcrumbs">
          <a href="#/">Inicio</a>
          <span>/</span>
          <a href="#/catalogo">Catalogo</a>
          <span>/</span>
          <span>{product.title}</span>
        </div>

        <a className="product-page__back" href="#/catalogo">
          <span aria-hidden="true">←</span>
          Volver al catalogo
        </a>

        <section className="product-detail">
          <div className="product-detail__gallery">
            <div className="product-detail__main-image">
              {selectedImage ? (
                <>
                  {product.discount ? (
                    <span className="product-detail__discount">-{product.discount}% OFF</span>
                  ) : null}
                  <img src={selectedImage} alt={product.imageAlt || product.title} />
                </>
              ) : (
                <ProductPlaceholder />
              )}
            </div>

            <div className="product-detail__thumbnails">
              {gallery.map((image, index) => (
                <button
                  key={`${product.slug}-thumb-${index}`}
                  type="button"
                  className={`product-detail__thumb ${selectedImageIndex === index ? 'is-active' : ''}`}
                  onClick={() => setSelectedImageIndex(index)}
                  aria-label={`Ver imagen ${index + 1} de ${product.title}`}
                >
                  {image ? <img src={image} alt="" /> : <ProductPlaceholder />}
                </button>
              ))}
            </div>
          </div>

          <div className="product-detail__content">
            <span className="product-detail__category">{product.category}</span>
            <h1>{product.title}</h1>

            <div className="product-detail__rating">
              <ProductStars rating={product.rating} />
              <span>{product.ratingValue.toFixed(1)} ({product.reviews} reseñas)</span>
            </div>

            <div className="product-detail__price-row">
              <span className="product-detail__price">S/ {product.price}</span>
              {product.oldPrice ? <span className="product-detail__old-price">S/ {product.oldPrice}</span> : null}
            </div>

            {savings ? <p className="product-detail__savings">Ahorra S/ {savings}!</p> : null}

            <p className="product-detail__stock">
              <span aria-hidden="true">•</span>
              {product.stockLabel}
            </p>

            <div className="product-detail__description">
              <h2>Descripcion</h2>
              <p>{product.description}</p>
            </div>

            <div className="product-detail__purchase">
              <div className="product-detail__quantity-block">
                <span className="product-detail__label">Cantidad</span>

                <div className="product-detail__quantity-row">
                  <div className="product-detail__quantity-control">
                    <button
                      type="button"
                      onClick={() => setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1))}
                      aria-label="Reducir cantidad"
                    >
                      −
                    </button>
                    <span>{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((currentQuantity) => currentQuantity + 1)}
                      aria-label="Aumentar cantidad"
                    >
                      +
                    </button>
                  </div>

                  <p className="product-detail__total">Total: S/ {total}</p>
                </div>
              </div>

              <div className="product-detail__actions">
                <button type="button" className="product-detail__add-cart">
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
                  Agregar al Carrito
                </button>

                <button type="button" className="product-detail__icon-button" aria-label="Guardar en favoritos">
                  <ProductActionIcon type="favorite" />
                </button>

                <button type="button" className="product-detail__icon-button" aria-label="Compartir producto">
                  <ProductActionIcon type="share" />
                </button>
              </div>
            </div>

            <div className="product-detail__benefits">
              <ProductBenefit
                tone="blue"
                title="Envio Gratis"
                text={product.shippingText}
                icon={
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 6.75H13.5V16.5H3.75V6.75Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M13.5 9H17.16L19.5 11.92V16.5H13.5V9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <circle cx="8.25" cy="17.25" r="1.5" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="16.5" cy="17.25" r="1.5" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                }
              />

              <ProductBenefit
                tone="green"
                title="Garantia"
                text={product.warrantyText}
                icon={
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 3.75L18.75 6.42V11.8C18.75 15.37 16.45 18.55 12 20.25C7.55 18.55 5.25 15.37 5.25 11.8V6.42L12 3.75Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </section>

        <section className="product-related">
          <div className="product-related__header">
            <h2>Productos Relacionados</h2>
            <p>Tambien pueden interesarte estos productos de la tienda.</p>
          </div>

          <div className="product-related__grid">
            {relatedProducts.map((relatedProduct) => (
              <Productocard key={relatedProduct.slug} {...relatedProduct} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Producto
