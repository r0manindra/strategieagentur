import { motion } from 'framer-motion'
import './Agentur.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const Agentur = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="agentur-hero">
        <div className="container">
          <motion.div
            className="agentur-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className="page-label" variants={fadeInUp}>
              Über uns
            </motion.span>
            <motion.h1 variants={fadeInUp}>Die Agentur</motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section founder-section">
        <div className="container">
          <div className="founder-grid">
            <motion.div
              className="founder-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/michael_schmid.gif"
                alt="Ing. Michael L. Schmid"
                className="founder-photo"
              />
              <div className="founder-info">
                <h3>Ing. Michael L. Schmid</h3>
                <span>Gründer & Inhaber</span>
              </div>
            </motion.div>

            <motion.div
              className="founder-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p className="lead-text" variants={fadeInUp}>
                Viele erfolgreiche Unternehmen oder Projekte entstehen aus einem einfachen Grund...
              </motion.p>

              <motion.blockquote variants={fadeInUp}>
                <p>
                  ...zum richtigen Zeitpunkt, mit dem richtigen Produkt und dem passenden Image,
                  professionell vorbereitet am richtigen Markt zu sein...
                </p>
              </motion.blockquote>

              <motion.p variants={fadeInUp}>
                ...das müssen Sie nicht dem Zufall überlassen. Das können wir für Sie entwickeln und umsetzen.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="section philosophy-cards-section">
        <div className="container">
          <motion.div
            className="philosophy-cards grid grid-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="card philosophy-card" variants={fadeInUp}>
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <h3>Der richtige Zeitpunkt</h3>
              <p>Timing ist alles. Wir analysieren Märkte und identifizieren den optimalen Moment für Ihren Erfolg.</p>
            </motion.div>

            <motion.div className="card philosophy-card" variants={fadeInUp}>
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3>Das richtige Produkt</h3>
              <p>Gemeinsam entwickeln wir Ihr Produkt oder Projekt bis zur Marktreife und darüber hinaus.</p>
            </motion.div>

            <motion.div className="card philosophy-card" variants={fadeInUp}>
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3v18h18"/>
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                </svg>
              </div>
              <h3>Der richtige Markt</h3>
              <p>Professionelle Positionierung und zielgerichtete Marktkommunikation für maximale Wirkung.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section agentur-cta">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Rufen Sie uns an - reden wir darüber!</h2>
            <a href="tel:+436991331411" className="cta-phone">
              +43 699 133 14 111
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Agentur
