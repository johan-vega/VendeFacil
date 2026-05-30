import './Prefooter.css'

function Prefooter() {
  return (
    <section className="prefooter">
      <div className="prefooter__inner">
        <h2>Listo para empezar a comprar?</h2>
        <p>
          Unete a miles de clientes satisfechos y descubre la mejor experiencia de compra online
        </p>

        <div className="prefooter__actions">
          <a className="prefooter__button prefooter__button--primary" href="#catalogo">
            Explorar Productos
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

          <a className="prefooter__button prefooter__button--secondary" href="#/contacto">
            Contactanos
          </a>
        </div>
      </div>
    </section>
  )
}

export default Prefooter
