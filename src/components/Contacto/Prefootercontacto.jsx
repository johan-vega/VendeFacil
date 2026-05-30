import './Prefootercontacto.css'

const faqItems = [
  {
    question: 'Cuanto tarda el envio?',
    answer: 'El envio estandar tarda de 3 a 5 dias habiles. Ofrecemos envio express de 1-2 dias.',
  },
  {
    question: 'Tienen politica de devoluciones?',
    answer: 'Si, aceptamos devoluciones dentro de los 15 dias posteriores a la compra.',
  },
  {
    question: 'Cuales son los metodos de pago?',
    answer: 'Aceptamos tarjetas de credito, debito, PayPal y transferencias bancarias.',
  },
  {
    question: 'Ofrecen garantia en productos?',
    answer: 'Todos nuestros productos tienen garantia del fabricante de 1 año minimo.',
  },
]

function Prefootercontacto() {
  return (
    <section className="contact-faq">
      <div className="contact-faq__header">
        <h2>Preguntas Frecuentes</h2>
        <p>Encuentra respuestas rapidas a las preguntas mas comunes</p>
      </div>

      <div className="contact-faq__grid">
        {faqItems.map((item) => (
          <article key={item.question} className="contact-faq__item">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Prefootercontacto
