import { useState } from 'react'
import './Catalogo.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Productocard from './components/Productocard'
import Bannercatalogo from './components/catalogo/Bannercatalogo'
import Filtrobusqueda from './components/catalogo/Filtrobusqueda'
import { products as catalogProducts } from './data/products'

const categoryOptions = ['Todos', 'Electronicos', 'Ropa', 'Accesorios']
const priceOptions = [
    'Todos los precios',
    'Menos de S/ 400',
    'S/ 400 - S/ 800',
    'S/ 800 - S/ 2000',
    'Mas de S/ 2000',
]
const sortOptions = ['Destacados', 'Menor precio', 'Mayor precio', 'Mas vendidos']

function getNumericPrice(price) {
    return Number.parseFloat(price)
}

function Catalogo() {
    const [selectedCategory, setSelectedCategory] = useState('Todos')
    const [selectedPriceRange, setSelectedPriceRange] = useState('Todos los precios')
    const [selectedSort, setSelectedSort] = useState('Destacados')

    const filteredProducts = catalogProducts
        .filter((product) => {
            if (selectedCategory === 'Todos') {
                return true
            }

            return product.category === selectedCategory
        })
        .filter((product) => {
            const price = getNumericPrice(product.price)

            switch (selectedPriceRange) {
                case 'Menos de S/ 400':
                    return price < 400
                case 'S/ 400 - S/ 800':
                    return price >= 400 && price <= 800
                case 'S/ 800 - S/ 2000':
                    return price > 800 && price <= 2000
                case 'Mas de S/ 2000':
                    return price > 2000
                default:
                    return true
            }
        })
        .sort((firstProduct, secondProduct) => {
            if (selectedSort === 'Menor precio') {
                return getNumericPrice(firstProduct.price) - getNumericPrice(secondProduct.price)
            }

            if (selectedSort === 'Mayor precio') {
                return getNumericPrice(secondProduct.price) - getNumericPrice(firstProduct.price)
            }

            if (selectedSort === 'Mas vendidos') {
                return secondProduct.reviews - firstProduct.reviews
            }

            return 0
        })

    const handleClearFilters = () => {
        setSelectedCategory('Todos')
        setSelectedPriceRange('Todos los precios')
        setSelectedSort('Destacados')
    }

    return (
        <>
            <Navbar />
            <Bannercatalogo />

            <main className="catalog-page">
                <div className="catalog-page__layout">
                    <Filtrobusqueda
                        categoryOptions={categoryOptions}
                        priceOptions={priceOptions}
                        sortOptions={sortOptions}
                        selectedCategory={selectedCategory}
                        selectedPriceRange={selectedPriceRange}
                        selectedSort={selectedSort}
                        onCategoryChange={setSelectedCategory}
                        onPriceChange={setSelectedPriceRange}
                        onSortChange={setSelectedSort}
                        onClearFilters={handleClearFilters}
                    />

                    <section className="catalog-page__products">
                        <p className="catalog-page__count">
                            Mostrando {filteredProducts.length} producto{filteredProducts.length === 1 ? '' : 's'}
                        </p>

                        <div className="catalog-page__grid">
                            {filteredProducts.map((product) => (
                                <Productocard key={product.title} {...product} />
                            ))}
                        </div>

                        {filteredProducts.length === 0 ? (
                            <div className="catalog-page__empty">
                                <h2>Sin resultados</h2>
                                <p>Prueba con otra categoria, rango de precio o cambia el orden actual.</p>
                            </div>
                        ) : null}
                    </section>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Catalogo
