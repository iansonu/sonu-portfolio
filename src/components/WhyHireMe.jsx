import { FiLayers, FiCpu, FiCode, FiTrendingUp } from 'react-icons/fi'
import { strengths } from '../data/portfolioData.js'
import './WhyHireMe.css'

const icons = [FiLayers, FiCpu, FiCode, FiTrendingUp]

function WhyHireMe() {
  return (
    <section id="why-hire-me" className="section why-hire-me">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-eyebrow">04 · Why me</p>
          <h2 className="section-title">
            What I <span>bring</span> to a team
          </h2>
        </div>

        <div className="why-hire-me__grid">
          {strengths.map((strength, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div className="why-hire-me__card surface-card reveal" key={strength.title}>
                <div className="why-hire-me__icon">
                  <Icon size={22} />
                </div>
                <h3 className="why-hire-me__title">{strength.title}</h3>
                <p className="why-hire-me__desc">{strength.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyHireMe
