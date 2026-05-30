import './ContactInfoCard.css'

function ContactInfoCard({ icon, title, lines, tone = 'blue' }) {
  return (
    <article className="contact-info-card">
      <span className={`contact-info-card__icon contact-info-card__icon--${tone}`} aria-hidden="true">
        {icon}
      </span>

      <div className="contact-info-card__content">
        <h3>{title}</h3>
        <div className="contact-info-card__lines">
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ContactInfoCard
