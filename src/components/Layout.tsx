import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Header />
      <main style={{ paddingTop: '56px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
