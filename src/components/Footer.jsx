import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { personalInfo, navLinks } from '../data/portfolioData.js'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{personalInfo.name}</p>
          <p className="footer__role">{personalInfo.role}</p>
        </div>

        <nav className="footer__links">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__socials">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FiLinkedin size={18} />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Send an email">
            <FiMail size={18} />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2026 {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
