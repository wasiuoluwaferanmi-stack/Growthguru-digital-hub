import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="nav-logo" style={{ marginBottom: 10 }}>
            <span className="nav-logo-mark" aria-hidden="true" />
            Growthguru<span className="nav-logo-accent">.</span>
          </div>
          <p style={{ maxWidth: 340 }}>
            CRM automation, no-code development, and digital marketing systems —
            built by Wasiu Akeem Oluwaferanmi.
          </p>
        </div>

        <div className="footer-col">
          <span className="footer-heading">Site</span>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Get Started</Link>
        </div>

        <div className="footer-col">
          <span className="footer-heading">Connect</span>
          <a href="https://x.com/wasiuoluwayqhj" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
          <a href="https://www.facebook.com/profile.php?id=61582043461765" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>

      <div className="container">
        <p className="footer-bottom">© {year} Growthguru Digital Hub. All rights reserved.</p>
      </div>
    </footer>
  )
}
