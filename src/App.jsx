import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Banner from './components/inicio/Banner'
import Categoriascards from './components/inicio/Categoriascards'
import Destacado from './components/inicio/Destacado'
import Descuentos from './components/inicio/Descuentos'
import Prefooter from './components/inicio/Prefooter'

function App() {
  return (
    <>
      <Navbar />

      <main className="app-shell">
        <Banner />
        <Categoriascards />
        <Destacado />
        <Descuentos />
        <Prefooter />
      </main>
      <Footer />
    </>
  )
}

export default App
