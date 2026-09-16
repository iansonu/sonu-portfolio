import { useState } from 'react'
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData.js'
import './Contact.css'

const initialFormState = { name: '', email: '', subject: '', message: '' }

function validate(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Please enter your name.'

  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.subject.trim()) errors.subject = 'Please enter a subject.'

  if (!values.message.trim()) {
    errors.message = 'Please enter a message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }

  return errors
}

function Contact() {
  const [values, setValues] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'success'

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      // NOTE: There is no backend wired up yet. In a real deployment, this is
      // where you'd call an API route or an email service (e.g. EmailJS,
      // Formspree, or a custom Node/Express endpoint) to actually send the
      // message. For now we just confirm receipt on the frontend.
      setStatus('success')
      setValues(initialFormState)
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-eyebrow">05 · Contact</p>
          <h2 className="section-title">
            Let's build something <span>together</span>
          </h2>
          <p className="section-subtitle">
            Open to full-time roles, internships, and freelance opportunities. Feel free to
            reach out — I usually reply within a day.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info reveal">
            <a href={`mailto:${personalInfo.email}`} className="contact__info-item">
              <span className="contact__info-icon">
                <FiMail size={18} />
              </span>
              <div>
                <span className="contact__info-label">Email</span>
                <span className="contact__info-value">{personalInfo.email}</span>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-item"
            >
              <span className="contact__info-icon">
                <FiLinkedin size={18} />
              </span>
              <div>
                <span className="contact__info-label">LinkedIn</span>
                <span className="contact__info-value">{personalInfo.linkedin}</span>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-item"
            >
              <span className="contact__info-icon">
                <FiGithub size={18} />
              </span>
              <div>
                <span className="contact__info-label">GitHub</span>
                <span className="contact__info-value">{personalInfo.github}</span>
              </div>
            </a>

            <div className="contact__info-item contact__info-item--static">
              <span className="contact__info-icon">
                <FiMapPin size={18} />
              </span>
              <div>
                <span className="contact__info-label">Location</span>
                <span className="contact__info-value">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <form className="contact__form surface-card reveal" onSubmit={handleSubmit} noValidate>
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={errors.name ? 'has-error' : ''}
                />
                {errors.name && <span className="contact__error">{errors.name}</span>}
              </div>

              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={errors.email ? 'has-error' : ''}
                />
                {errors.email && <span className="contact__error">{errors.email}</span>}
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className={errors.subject ? 'has-error' : ''}
              />
              {errors.subject && <span className="contact__error">{errors.subject}</span>}
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                placeholder="Tell me a bit about the opportunity or project..."
                className={errors.message ? 'has-error' : ''}
              />
              {errors.message && <span className="contact__error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary contact__submit">
              <FiSend size={17} />
              Send Message
            </button>

            {status === 'success' && (
              <p className="contact__note" role="status">
                Thanks for reaching out! This form isn't connected to a backend yet, so
                nothing was actually sent — email/backend integration can be added later.
                In the meantime, please reach me directly at{' '}
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
