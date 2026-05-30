import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import ContactInfoCard from './ContactInfoCard'
import './Contactos.css'

const contactCards = [
    {
        title: 'Email',
        tone: 'blue',
        lines: ['contacto@vendefacil.com', 'soporte@vendefacil.com'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3.75" y="5.25" width="16.5" height="13.5" rx="2.4" stroke="currentColor" strokeWidth="1.7" />
                <path d="M5.5 7L12 12.2L18.5 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Telefono',
        tone: 'green',
        lines: ['+51 926532594'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.22 4.5H9.82C10.34 4.5 10.79 4.86 10.9 5.37L11.55 8.36C11.64 8.77 11.5 9.2 11.17 9.47L9.62 10.75C10.47 12.49 11.89 13.91 13.63 14.76L14.91 13.21C15.18 12.88 15.61 12.74 16.02 12.83L19.01 13.48C19.52 13.59 19.88 14.04 19.88 14.56V17.16C19.88 17.9 19.28 18.5 18.54 18.5H17.25C10.62 18.5 5.25 13.13 5.25 6.5V5.84C5.25 5.1 5.85 4.5 6.59 4.5H7.22Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        title: 'Direccion',
        tone: 'purple',
        lines: ['Lima, Peru'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 20.25C15.75 16.5 18 13.58 18 10.5C18 7.19 15.31 4.5 12 4.5C8.69 4.5 6 7.19 6 10.5C6 13.58 8.25 16.5 12 20.25Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                />
                <circle cx="12" cy="10.5" r="2.25" stroke="currentColor" strokeWidth="1.7" />
            </svg>
        ),
    },
    {
        title: 'Horario',
        tone: 'orange',
        lines: ['Lunes a Viernes: 9:00 AM - 6:00 PM', 'Sabados: Cerrado', 'Domingos: Cerrado'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.7" />
                <path d="M12 7.75V12L14.75 14.75" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
]

function Contactos() {
    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    })
    const [cargando, setCargando] = useState(false)

    const manejarCambio = (event) => {
        const { name, value } = event.target

        setFormulario({
            ...formulario,
            [name]: value,
        })
    }

    const manejarEnvio = async (event) => {
        event.preventDefault()
        setCargando(true)

        try {
            const templateParams = {
                nombre: formulario.nombre,
                email: formulario.email,
                mensaje: formulario.mensaje,
            }

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            )

            Swal.fire({
                title: 'Mensaje enviado',
                text: 'Gracias por contactarnos. Te responderemos a la brevedad.',
                icon: 'success',
                confirmButtonColor: '#1f5eff',
                background: '#ffffff',
                color: '#0d2344',
            })

            setFormulario({ nombre: '', email: '', mensaje: '' })
        } catch (error) {
            console.error('Error al enviar el mensaje:', error)

            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al enviar el mensaje. Intentalo mas tarde.',
                icon: 'error',
                confirmButtonColor: '#1f5eff',
                background: '#ffffff',
                color: '#0d2344',
            })
        } finally {
            setCargando(false)
        }
    }

    return (
        <section className="contacto-section">
            <div className="contacto-container">
                <div className="contacto-grid">
                    <div className="contacto-form-wrapper">
                        <div className="contacto-panel">
                            <h2 className="contacto-panel__title">Envianos un Mensaje</h2>

                            <form onSubmit={manejarEnvio} className="contacto-form">
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={formulario.nombre}
                                        onChange={manejarCambio}
                                        placeholder="Tu nombre"
                                        required
                                        disabled={cargando}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formulario.email}
                                        onChange={manejarCambio}
                                        placeholder="tu@email.com"
                                        required
                                        disabled={cargando}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="mensaje">Mensaje</label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        value={formulario.mensaje}
                                        onChange={manejarCambio}
                                        placeholder="Cuentame sobre tu proyecto..."
                                        rows="5"
                                        required
                                        disabled={cargando}
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn-submit" disabled={cargando}>
                                    {cargando ? 'Enviando...' : 'Enviar Mensaje'}
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="contacto-info">
                        <h2 className="contacto-info__title">Informacion de Contacto</h2>
                        <p className="contacto-info__desc">
                            Nuestro equipo esta disponible para ayudarte. Contactanos por cualquiera de estos medios.
                        </p>

                        <div className="contacto-info__cards">
                            {contactCards.map((card) => (
                                <ContactInfoCard key={card.title} {...card} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contactos
