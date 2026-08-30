import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import WhyHireMe from './components/WhyHireMe.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  // Subtle fade-in-on-scroll: any element with the `.reveal` class gets the
  // `.is-visible` class added once it enters the viewport. Kept in one place
  // so every section shares identical, lightweight scroll animation logic.
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window) || revealEls.length === 0) {
      revealEls.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    revealEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
