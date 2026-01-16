import { motion } from 'framer-motion'
import './Expertisen.css'

const industries = [
  'Portfoliomanagement',
  'Startup / Forschung',
  'Health-Care / Wellness',
  'Energie- & Umwelttechnologien',
  'Tourismus, Gastronomie & Regionalentwicklung',
  'IT, Mobile Communication, E-Commerce',
  'Facility Management',
  'Bau- und Baunebengewerbe',
  'Werbung, Marketing und PR',
  'Mergers & Acquisitions',
  'Technische Produkte B2B',
  'Konsumgüter B2B und B2C',
  'Gewerbe- und Anlageimmobilien',
  'Fertigungsindustrie',
  'Finanzierungs- & Förderungsmanagement',
  'Vorsorgemanagement'
]

const brochures = [
  {
    title: 'Folder StrategieAgentur',
    description: 'Unser Unternehmens-Portfolio'
  },
  {
    title: 'Vermarktungskonzeption',
    description: 'Strategische Marktplatzierung'
  },
  {
    title: 'Startup Kapitalsuche',
    description: 'Finanzierungsstrategien'
  },
  {
    title: 'Startup ist nicht gleich Startup',
    description: 'Individuelle Ansätze'
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
      staggerChildren: 0.05
    }
  }
}

const Expertisen = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="expertisen-hero">
        <div className="container">
          <motion.div
            className="expertisen-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className="page-label" variants={fadeInUp}>
              Kompetenzen
            </motion.span>
            <motion.h1 variants={fadeInUp}>Infos & Expertisen</motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section industries-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>Branchen</span>
            <h2>Branchenerfahrung</h2>
          </motion.div>

          <motion.div
            className="industries-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="industry-item"
                variants={fadeInUp}
              >
                <span className="industry-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="industry-name">{industry}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brochures Section */}
      <section className="section brochures-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>Downloads</span>
            <h2>Broschüren & Infos</h2>
          </motion.div>

          <motion.div
            className="grid grid-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {brochures.map((brochure, index) => (
              <motion.a
                key={index}
                href="#"
                className="card brochure-card"
                variants={fadeInUp}
              >
                <div className="brochure-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                <h3>{brochure.title}</h3>
                <p>{brochure.description}</p>
                <span className="brochure-link">
                  Download
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <motion.div
            className="contact-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info">
              <h2>Kontaktieren Sie uns</h2>
              <p>Lassen Sie uns gemeinsam Ihre Strategie entwickeln.</p>
            </div>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <span>Telefon</span>
                  <a href="tel:+436991331411">+43 699 133 14 111</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <span>E-Mail</span>
                  <a href="mailto:office@StrategieAgentur.at">office@StrategieAgentur.at</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <span>Adresse</span>
                  <p>Mondseerstrasse 2<br/>A-4893 Zell am Moos</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Expertisen
