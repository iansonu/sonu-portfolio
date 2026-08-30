import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolioData.js'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-eyebrow">03 · Projects</p>
          <h2 className="section-title">
            Things I've <span>built</span>
          </h2>
          <p className="section-subtitle">
            A selection of full-stack projects that reflect how I approach real-world
            problems with the MERN stack.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card surface-card reveal" key={project.id}>
              <div className="project-card__preview">
                <span className="project-card__number">{project.id}</span>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__name">{project.name}</h3>
                <p className="project-card__desc">{project.description}</p>

                <ul className="project-card__features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <div className="project-card__tech">
                  {project.technologies.map((tech) => (
                    <span className="badge" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <FiGithub size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
