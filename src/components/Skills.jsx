import { skillCategories } from '../data/portfolioData.js'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-eyebrow">02 · Skills</p>
          <h2 className="section-title">
            Technologies I <span>work with</span>
          </h2>
          <p className="section-subtitle">
            A practical toolkit built around the MERN stack, covering everything from
            interface to database.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((category) => (
            <div className="skills__card surface-card reveal" key={category.category}>
              <h3 className="skills__card-title">{category.category}</h3>
              <div className="skills__badges">
                {category.skills.map((skill) => (
                  <span className="badge" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
