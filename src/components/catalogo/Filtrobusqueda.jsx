import './Filtrobusqueda.css'

function Filtrobusqueda({
  categoryOptions,
  priceOptions,
  sortOptions,
  selectedCategory,
  selectedPriceRange,
  selectedSort,
  onCategoryChange,
  onPriceChange,
  onSortChange,
  onClearFilters,
}) {
  return (
    <aside className="catalog-filters">
      <div className="catalog-filters__header">
        <div className="catalog-filters__title">
          <span className="catalog-filters__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.5 6H19.5L14.25 12.15V18L9.75 19.5V12.15L4.5 6Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h2>Filtros</h2>
        </div>

        <button type="button" className="catalog-filters__clear" onClick={onClearFilters}>
          Limpiar
        </button>
      </div>

      <div className="catalog-filters__group">
        <h3>Categoria</h3>
        <ul>
          {categoryOptions.map((option) => (
            <li key={option}>
              <label>
                <input
                  type="radio"
                  name="category-filter"
                  value={option}
                  checked={selectedCategory === option}
                  onChange={(event) => onCategoryChange(event.target.value)}
                />
                <span>{option}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="catalog-filters__group">
        <h3>Rango de Precio</h3>
        <ul>
          {priceOptions.map((option) => (
            <li key={option}>
              <label>
                <input
                  type="radio"
                  name="price-filter"
                  value={option}
                  checked={selectedPriceRange === option}
                  onChange={(event) => onPriceChange(event.target.value)}
                />
                <span>{option}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="catalog-filters__group">
        <h3>Ordenar por</h3>
        <select value={selectedSort} onChange={(event) => onSortChange(event.target.value)}>
          {sortOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </aside>
  )
}

export default Filtrobusqueda
