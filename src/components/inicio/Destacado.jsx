import Productocard from '../Productocard'
import './Destacado.css'
import { featuredProductSlugs, getProductsBySlugs } from '../../data/products'

const featuredProducts = getProductsBySlugs(featuredProductSlugs)

function Destacado() {
  return (
    <section className="featured-products" id="catalogo" aria-labelledby="featured-products-title">
      <div className="featured-products__header">
        <div>
          <h2 id="featured-products-title">Productos Destacados</h2>
          <p>Lo mas popular de nuestra tienda</p>
        </div>

        <a className="featured-products__link" href="#/catalogo">
          Ver todos
          <span aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
      </div>

      <div className="featured-products__grid">
        {featuredProducts.map((product) => (
          <Productocard key={product.title} {...product} />
        ))}
      </div>
    </section>
  )
}

export default Destacado
