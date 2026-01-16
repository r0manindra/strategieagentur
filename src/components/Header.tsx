import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/agentur', label: 'Die Agentur' },
    { path: '/expertisen', label: 'Infos & Expertisen' },
  ]

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <NavLink to="/" className="logo">
            <svg className="logo-icon" viewBox="0 0 100 100" width="30" height="30">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
              <polygon points="50,15 55,50 50,55 45,50" fill="#2d8a5e"/>
              <polygon points="50,85 55,50 50,45 45,50" fill="currentColor" opacity="0.3"/>
              <circle cx="50" cy="50" r="5" fill="currentColor"/>
            </svg>
            <span>StrategieAgentur</span>
          </NavLink>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <a href="tel:+436991331411" className="btn btn-primary nav-cta">
            Kontakt
          </a>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => isActive ? 'active' : ''}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a href="tel:+436991331411" className="btn btn-primary">
                  Kontakt
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
