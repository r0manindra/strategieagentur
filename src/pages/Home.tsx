import { motion } from 'framer-motion'
import Compass from '../components/Compass'
import './Home.css'

const services = [
  {
    title: 'Finanzierungen & Förderungen',
    description: 'Solide Finanzierungsmodelle mit strukturierter Finanzierung. Integration von Förderungen. Investitionsmanagement in einer stabilen Finanzumgebung.'
  },
  {
    title: 'Liquidität & Kapitalaufbau',
    description: 'Sicherung der Liquidität für das Tagesgeschäft. Steuer- und ertragsoptimierter Kapitalaufbau. Gewinnfreibetrag & Vorsorgemanagement.'
  },
  {
    title: 'Betriebsnachfolge & Beteiligungen',
    description: 'Professionell vorbereitete und realisierte Betriebsnachfolge oder Übernahme. Strategisches Beteiligungs-Management. Unternehmensverkauf.'
  },
  {
    title: 'Wachstum & Innovationen',
    description: 'Wachstum durch Innovationsmanagement. Schärfung der Positionierung und Marktkommunikation. Nutzung von Synergien und Umwegrentabilitäten.'
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span className="hero-label" variants={fadeInUp}>
                Strategische Unternehmensberatung
              </motion.span>
              <motion.h1 variants={fadeInUp}>
                Sichern Sie mit uns die Zukunft Ihres Unternehmens
              </motion.h1>
              <motion.p variants={fadeInUp}>
                Nicht nur in Zeiten wie diesen ist es wichtig ein Unternehmen auf solide Beine zu stellen.
                Liquiditätssicherung, Wertebildung, Innovationskraft und Marktanpassung sind nur einige
                Stichwörter, zu denen es gilt die richtigen Instrumente einzusetzen.
              </motion.p>
              <motion.div className="hero-cta" variants={fadeInUp}>
                <a href="tel:+436991331411" className="btn btn-primary">
                  Reden wir darüber
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="/expertisen" className="btn btn-outline">
                  Mehr erfahren
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Compass size={350} />
            </motion.div>
          </div>
        </div>
        <div className="hero-gradient" />
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>Unsere Schwerpunkte</span>
            <h2>Aktuelle Schwerpunkte</h2>
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
          <motion.div
            className="philosophy-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote>
              <p>
                "Auch ein Unternehmen, ein Startup oder ein Projekt sind 'Produkte', die richtig entwickelt,
                beworben und auf den richtigen Märkten platziert werden müssen!"
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
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <p>Unser Engagement für Ihr Unternehmen wird von uns mit Weitblick behandelt.</p>
            </motion.div>
            <motion.div className="value-item" variants={fadeInUp}>
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <p>Ob Unternehmen, Projekt oder Produkt - fachliche Kompetenz ist nur ein Werkzeug.</p>
            </motion.div>
            <motion.div className="value-item" variants={fadeInUp}>
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <p>Viel wichtiger ist die Identifikation mit Ihren Intentionen und Herausforderungen.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>Nehmen Sie uns beim Wort</span>
            <h2>"Reden wir darüber"</h2>
            <a href="tel:+436991331411" className="cta-phone">
              +43 699 133 14 111
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
