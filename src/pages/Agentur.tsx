import { motion } from 'framer-motion'
import './Agentur.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
                Erfolgreiche Unternehmen entstehen nicht zufällig — sie werden strategisch entwickelt.
              </motion.p>

              <motion.blockquote variants={fadeInUp}>
                <p>
                  Zum richtigen Zeitpunkt, mit dem richtigen Angebot,
                  professionell positioniert am richtigen Markt zu sein.
                </p>
              </motion.blockquote>

              <motion.p variants={fadeInUp}>
                Das können wir gemeinsam für Ihr Unternehmen entwickeln und umsetzen.
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
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <h3>Der richtige Zeitpunkt</h3>
              <p>Wir identifizieren den optimalen Moment für Ihre strategischen Entscheidungen.</p>
            </motion.div>

            <motion.div className="card philosophy-card" variants={fadeInUp}>
              <div className="card-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3>Das richtige Angebot</h3>
              <p>Gemeinsam entwickeln wir Ihr Produkt oder Projekt bis zur Marktreife.</p>
            </motion.div>

            <motion.div className="card philosophy-card" variants={fadeInUp}>
              <div className="card-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3v18h18"/>
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                </svg>
              </div>
              <h3>Der richtige Markt</h3>
              <p>Professionelle Positionierung für maximale Wirkung bei Ihrer Zielgruppe.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section agentur-cta">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Bereit für den nächsten Schritt?</h2>
            <p className="cta-subtitle">
              Kontaktieren Sie uns für ein persönliches Gespräch.
            </p>
            <a href="tel:+436991331411" className="cta-phone">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +43 699 133 14 111
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Agentur
