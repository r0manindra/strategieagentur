import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <svg className="logo-icon" viewBox="0 0 100 100" width="26" height="26">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
                <polygon points="50,15 55,50 50,55 45,50" fill="#3da873"/>
                <polygon points="50,85 55,50 50,45 45,50" fill="currentColor" opacity="0.3"/>
                <circle cx="50" cy="50" r="5" fill="currentColor"/>
              </svg>
              <span>StrategieAgentur</span>
            </Link>
            <p className="footer-tagline">
              Sichern Sie mit uns die Zukunft Ihres Unternehmens.
            </p>
          </div>

          <div className="footer-contact">
            <h4>Kontakt</h4>
            <address>
              <p><strong>Ing. Michael L. Schmid</strong></p>
              <p>Mondseerstrasse 2</p>
              <p>A-4893 Zell am Moos</p>
              <p>
                <a href="tel:+436991331411">T: +43 699 133 14 111</a>
              </p>
              <p>
                <a href="mailto:office@StrategieAgentur.at">E: office@StrategieAgentur.at</a>
              </p>
            </address>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/agentur">Die Agentur</Link></li>
              <li><Link to="/expertisen">Infos & Expertisen</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} StrategieAgentur. Alle Rechte vorbehalten.</p>
          <div className="footer-legal">
            <a href="#">Impressum</a>
            <a href="#">Disclaimer</a>
            <a href="#">DSGVO</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
