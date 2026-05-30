import './Contacto.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Bannercontacto from './components/Contacto/Bannercontacto'
import Contactos from './components/Contacto/Contactos'
import Prefootercontacto from './components/Contacto/Prefootercontacto'

function Contacto() {
    return (
        <>
            <Navbar />

            <main className="contact-page">
                <Bannercontacto />
                <Contactos />
                <Prefootercontacto />
            </main>

            <Footer />
        </>
    )
}

export default Contacto
