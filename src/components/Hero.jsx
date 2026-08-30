import { useEffect, useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { personalInfo, heroCodeSnippet } from '../data/portfolioData.js'
import './Hero.css'

const TYPING_SPEED = 70
const DELETING_SPEED = 40
const HOLD_MS = 1600

function useRotatingText(words) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]
    let timeout

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), HOLD_MS)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    } else {
      const nextText = isDeleting
        ? currentWord.slice(0, text.length - 1)
        : currentWord.slice(0, text.length + 1)
      timeout = setTimeout(
        () => setText(nextText),
        isDeleting ? DELETING_SPEED : TYPING_SPEED
      )
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words])

  return text
}

function Hero() {
  const rotatingText = useRotatingText(personalInfo.rotatingRoles)

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__greeting reveal">Hi, I'm</p>
          <h1 className="hero__name reveal">{personalInfo.name}</h1>
          <h2 className="hero__role reveal">{personalInfo.role}</h2>

          <p className="hero__rotating reveal" aria-live="polite">
            <span className="hero__rotating-prefix">Also working as</span>
            <span className="hero__rotating-text">
              {rotatingText}
              <span className="hero__cursor" aria-hidden="true" />
            </span>
          </p>

          <p className="hero__tagline reveal">{personalInfo.tagline}</p>

          <div className="hero__actions reveal">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero__socials reveal">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FiLinkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Send an email">
              <FiMail size={20} />
            </a>
          </div>
        </div>

        <div className="hero__visual reveal" aria-hidden="true">
          <div className="editor">
            <div className="editor__titlebar">
              <span className="editor__dot editor__dot--red" />
              <span className="editor__dot editor__dot--yellow" />
              <span className="editor__dot editor__dot--green" />
              <span className="editor__filename">developer.js</span>
            </div>
            <div className="editor__body">
              {heroCodeSnippet.map((line, index) => (
                <div
                  className="editor__line"
                  key={index}
                  style={{ animationDelay: `${0.5 + index * 0.12}s` }}
                >
                  <span className="editor__lineno">{index + 1}</span>
                  <span className="editor__code">
                    {line.type === 'comment' && <span className="tok-comment">{line.text}</span>}
                    {line.type === 'keyword' && (
                      <>
                        <span className="tok-keyword">{line.text}</span>
                        {line.extra}
                      </>
                    )}
                    {line.type === 'function' && (
                      <>
                        <span className="tok-function">{line.text}</span>
                        {line.extra}
                      </>
                    )}
                    {line.type === 'string' && <span className="tok-string">{line.text}</span>}
                    {line.type === 'line' && line.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero__glow" />
        </div>
      </div>

      <a href="#about" className="hero__scroll-cue" aria-label="Scroll to About section">
        <FiArrowDown size={18} />
      </a>
    </section>
  )
}

export default Hero
