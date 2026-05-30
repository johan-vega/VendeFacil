import './WhatsappButton.css'

const whatsappMessage =
  'Hola quisiera comunicarme con un asesor de ventas para hacer una compra web'

const whatsappLink = `https://wa.me/51926532594?text=${encodeURIComponent(whatsappMessage)}`

function WhatsappButton() {
  return (
    <a
      className="whatsapp-button"
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Enviar mensaje por WhatsApp"
      title="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.2 15.2C27.2 21.5 22.08 26.62 15.77 26.62C13.75 26.62 11.85 26.09 10.19 25.17L4.8 26.62L6.3 21.43C5.26 19.69 4.67 17.67 4.67 15.52C4.67 9.21 9.79 4.08 16.1 4.08C22.08 4.08 27.2 9.21 27.2 15.2Z"
          fill="white"
          fillOpacity="0.15"
        />
        <path
          d="M15.94 4.7C10.13 4.7 5.42 9.39 5.42 15.18C5.42 17.17 5.98 19.11 7.03 20.79L5.96 24.72L10 23.66C11.61 24.62 13.44 25.13 15.33 25.13H15.34C21.14 25.13 25.85 20.43 25.85 14.64C25.85 8.84 21.15 4.7 15.94 4.7Z"
          fill="white"
        />
        <path
          d="M22.06 18.02C21.81 17.89 20.59 17.28 20.36 17.2C20.13 17.11 19.96 17.07 19.79 17.32C19.62 17.57 19.13 18.15 18.99 18.31C18.85 18.47 18.71 18.49 18.46 18.36C16.99 17.63 16.03 17.06 14.94 15.18C14.65 14.68 15.23 14.71 15.78 13.62C15.86 13.45 15.82 13.31 15.76 13.19C15.7 13.06 15.2 11.85 14.99 11.35C14.79 10.87 14.58 10.93 14.43 10.92C14.29 10.91 14.12 10.91 13.95 10.91C13.78 10.91 13.5 10.98 13.27 11.23C13.04 11.48 12.39 12.09 12.39 13.33C12.39 14.57 13.29 15.77 13.42 15.94C13.56 16.11 15.31 18.8 18 19.97C19.7 20.71 20.36 20.77 20.88 20.69C21.47 20.6 22.69 20.08 22.95 19.36C23.2 18.64 23.2 18.04 23.12 17.91C23.03 17.78 22.87 17.72 22.62 17.6L22.06 18.02Z"
          fill="#1FAF38"
        />
      </svg>
    </a>
  )
}

export default WhatsappButton
