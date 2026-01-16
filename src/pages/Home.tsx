import { motion } from 'framer-motion'
import Compass from '../components/Compass'
import GuillochePattern from '../components/GuillochePattern'
import '../components/GuillochePattern.css'
import './Home.css'

const services = [
  {
    title: 'Finanzierung & Förderung',
    description: 'Maßgeschneiderte Finanzierungsmodelle mit optimaler Förderungsintegration.'
  },
  {
    title: 'Liquidität & Kapital',
    description: 'Nachhaltige Sicherung Ihrer Liquidität und steueroptimierter Vermögensaufbau.'
  },
  {
    title: 'Nachfolge & Beteiligung',
    description: 'Professionelle Begleitung bei Übergaben, Übernahmen und strategischen Beteiligungen.'
  },
  {
    title: 'Wachstum & Innovation',
    description: 'Gezielte Marktpositionierung und Innovationsstrategien für nachhaltiges Wachstum.'
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <GuillochePattern variant="hero" />
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div className="hero-label-wrapper" variants={fadeInUp}>
                <span className="hero-label-line" />
                <span className="hero-label">Strategische Beratung</span>
                <span className="hero-label-line" />
              </motion.div>
              <motion.h1 variants={fadeInUp}>
                Ihre Zukunft.<br />
                <span className="text-display-italic">Strategisch</span> gesichert.
              </motion.h1>
              <motion.p variants={fadeInUp}>
                Wir entwickeln mit Ihnen maßgeschneiderte Strategien für Finanzierung,
                Wachstum und nachhaltige Unternehmensentwicklung.
              </motion.p>
              <motion.div className="hero-cta" variants={fadeInUp}>
                <a href="tel:+436991331411" className="btn btn-primary">
                  Gespräch vereinbaren
                </a>
                <a href="#leistungen" className="btn btn-outline">
                  Mehr erfahren
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="compass-frame">
                <Compass size={220} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="section services-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span>Leistungen</span>
            <h2>Unsere Schwerpunkte</h2>
          </motion.div>

          <motion.div
            className="grid grid-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.article
                key={index}
                className="card service-card"
                variants={fadeInUp}
              >
                <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section philosophy-section">
        <div className="container">
          <GuillochePattern variant="section" />
          <motion.div
            className="philosophy-content"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <blockquote>
              <p className="text-display-italic">
                „Der richtige Zeitpunkt, das richtige Produkt,
                die richtige Positionierung — das ist kein Zufall,
                sondern Strategie."
              </p>
            </blockquote>
          </motion.div>

          <motion.div
            className="values-grid grid grid-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="value-item" variants={fadeInUp}>
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h4>Weitblick</h4>
              <p>Strategien mit langfristiger Perspektive für Ihr Unternehmen.</p>
            </motion.div>
            <motion.div className="value-item" variants={fadeInUp}>
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h4>Kompetenz</h4>
              <p>Fundiertes Fachwissen aus jahrzehntelanger Erfahrung.</p>
            </motion.div>
            <motion.div className="value-item" variants={fadeInUp}>
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h4>Partnerschaft</h4>
              <p>Echte Identifikation mit Ihren Zielen und Herausforderungen.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span>Ihr nächster Schritt</span>
            <h2>Lassen Sie uns starten</h2>
            <p className="cta-subtitle">
              Vereinbaren Sie ein unverbindliches Erstgespräch.
            </p>
            <a href="tel:+436991331411" className="cta-phone">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

export default Home
