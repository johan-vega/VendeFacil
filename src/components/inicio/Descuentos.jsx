import Productocard from '../Productocard'
import './Descuentos.css'
import { discountProductSlugs, getProductsBySlugs } from '../../data/products'

const discountProducts = getProductsBySlugs(discountProductSlugs)

function Descuentos() {
  return (
    <section className="discount-products" aria-labelledby="discount-products-title">
      <div className="discount-products__header">
        <span className="discount-products__pill">Ofertas limitadas</span>
        <h2 id="discount-products-title">Descuentos Especiales</h2>
        <p>Aprovecha estas ofertas antes de que terminen</p>
      </div>

      <div className="discount-products__grid">
        {discountProducts.map((product) => (
          <Productocard key={product.title} {...product} />
        ))}
      </div>
    </section>
  )
}

export default Descuentos
