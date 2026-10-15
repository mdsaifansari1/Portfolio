import { Brain, ChartNoAxesCombined, Code2, Sparkles, Terminal } from 'lucide-react'
import { portfolioData } from '../data/portfolioData.js'
import { useReveal } from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'

const icons = { code: Code2, chart: ChartNoAxesCombined, brain: Brain, sparkles: Sparkles, terminal: Terminal }

export default function Skills() {
  const { ref, isVisible } = useReveal()
  return (
    <section className="section-shell" id="skills" aria-labelledby="skills-title">
      <div className={`page-container reveal${isVisible ? ' is-visible' : ''}`} ref={ref}>
        <SectionHeading
          eyebrow="Technical toolkit"
          title="Tools for the work that matters."
          description="A practical toolkit spanning analytics, machine learning, and generative AI."
          titleId="skills-title"
        />
        <div className="skills-grid">
          {portfolioData.skills.map((group, index) => {
            const Icon = icons[group.icon]
            return (
              <article className="skill-card" key={group.category}>
                <div className="skill-card-heading">
                  <span className="skill-icon"><Icon size={19} aria-hidden="true" /></span>
                  <span className="skill-number">0{index + 1}</span>
                </div>
                <h3>{group.category}</h3>
                <div className="tag-list">
                  {group.items.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
