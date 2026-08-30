import { FiDownload, FiCheckCircle } from 'react-icons/fi'
import { aboutInfo, personalInfo } from '../data/portfolioData.js'
import './About.css'

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-eyebrow">01 · About</p>
          <h2 className="section-title">
            Get to know <span>me</span>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__text reveal">
            <p>{aboutInfo.intro}</p>
            <p>{aboutInfo.focus}</p>

            <div className="about__education">
              <span className="about__education-label">Education</span>
              <p className="about__education-degree">{aboutInfo.education.degree}</p>
              <p className="about__education-duration">{aboutInfo.education.duration}</p>
            </div>

            <a
              href={personalInfo.resumePath}
              download
              className="btn btn-primary about__resume-btn"
            >
              <FiDownload size={18} />
              Download Resume
            </a>
          </div>

          <div className="about__highlights reveal">
            {aboutInfo.highlights.map((item) => (
              <div className="about__highlight-card surface-card" key={item}>
                <FiCheckCircle size={20} className="about__highlight-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
