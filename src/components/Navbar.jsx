import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks, personalInfo } from '../data/portfolioData.js'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Add a background/shadow to the navbar once the page has scrolled a bit.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Highlight the nav link for whichever section is currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    if (!('IntersectionObserver' in window) || sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={handleLinkClick}>
          <span className="navbar__logo-bracket">&lt;</span>
          Sonu<span className="navbar__logo-accent">.</span>Nishad
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        <nav className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href ? 'is-active' : ''}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${personalInfo.email}`}
            className="btn btn-primary btn-sm navbar__cta"
            onClick={handleLinkClick}
          >
            Let's Talk
          </a>
        </nav>

        <button
          className="navbar__toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
