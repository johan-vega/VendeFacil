import { useEffect, useState } from 'react'
import App from './App.jsx'
import Catalogo from './Catalogo.jsx'
import Contacto from './Contacto.jsx'
import Producto from './Producto.jsx'
import WhatsappButton from './components/WhatsappButton'

function resolveRouteFromHash(hash) {
  if (hash.startsWith('#/producto/')) {
    return {
      page: 'producto',
      productSlug: hash.replace('#/producto/', '').split('?')[0],
    }
  }

  if (hash.startsWith('#/contacto')) {
    return { page: 'contacto' }
  }

  if (hash.startsWith('#/catalogo')) {
    return { page: 'catalogo' }
  }

  return { page: 'inicio' }
}

function RootRouter() {
  const [route, setRoute] = useState(() => resolveRouteFromHash(window.location.hash))

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = '#/'
    }

    const handleHashChange = () => {
      const nextHash = window.location.hash

      setRoute(resolveRouteFromHash(nextHash))

      if (nextHash.startsWith('#/')) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  let pageContent = <App />

  if (route.page === 'catalogo') {
    pageContent = <Catalogo />
  } else if (route.page === 'contacto') {
    pageContent = <Contacto />
  } else if (route.page === 'producto') {
    pageContent = <Producto key={route.productSlug} productSlug={route.productSlug} />
  }

  return (
    <>
      {pageContent}
      <WhatsappButton />
    </>
  )
}

export default RootRouter
