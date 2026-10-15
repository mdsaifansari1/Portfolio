import { ArrowUpRight, Database, Lightbulb, Workflow } from 'lucide-react'
import { useReveal } from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'

const focusAreas = [
  { icon: Database, title: 'Data analytics', text: 'SQL, reporting, and turning data into useful insights.' },
  { icon: Workflow, title: 'Machine learning', text: 'Exploring analytical methods and practical ML applications.' },
  { icon: Lightbulb, title: 'Applied AI', text: 'Building with generative AI, retrieval, and language models.' },
]

export default function About() {
  const { ref, isVisible } = useReveal()

  return (
    <section className="section-shell section-muted" id="about" aria-labelledby="about-title">
      <div className={`page-container reveal${isVisible ? ' is-visible' : ''}`} ref={ref}>
        <SectionHeading eyebrow="A little about me" title="Curious by nature. Grounded in data." titleId="about-title" />
        <div className="about-layout">
          <div className="about-copy">
            <h3>Building practical solutions from data to AI.</h3>
            <p>
              I&apos;m Mohammad Saif Ansari, a student at NIT Rourkela with a strong interest in
              data analytics, machine learning, and generative AI. I enjoy working with SQL and
              Python, exploring datasets, and creating projects that make complex information
              easier to understand and use.
            </p>
            <p>
              From designing reporting workflows to experimenting with retrieval-augmented
              generation, I&apos;m interested in thoughtful, data-driven problem solving.
            </p>
            <a className="text-link" href="#experience">Explore my experience <ArrowUpRight size={15} /></a>
          </div>
          <div className="focus-grid">
            {focusAreas.map(({ icon: Icon, title, text }, index) => (
              <article className="focus-card" key={title}>
                <span className="focus-index">0{index + 1}</span>
                <span className="focus-icon"><Icon size={19} aria-hidden="true" /></span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
