import { GraduationCap, MapPin } from 'lucide-react'
import { portfolioData } from '../data/portfolioData.js'
import { useReveal } from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'

export default function Education() {
  const { ref, isVisible } = useReveal()
  return (
    <section className="section-shell section-muted" id="education" aria-labelledby="education-title">
      <div className={`page-container reveal${isVisible ? ' is-visible' : ''}`} ref={ref}>
        <SectionHeading
          eyebrow="Education"
          title="Learning, with a strong foundation."
          description="Academic foundations in engineering, science, and analytical thinking."
          titleId="education-title"
        />
        <div className="education-layout">
          <article className="education-feature">
            <div className="education-feature-top">
              <span className="education-icon"><GraduationCap size={23} aria-hidden="true" /></span>
              <span className="education-current">CURRENT</span>
            </div>
            <span className="eyebrow">Bachelor of Technology</span>
            <h3>{portfolioData.education[0].institution}</h3>
            <div className="education-stats">
              <span><strong>{portfolioData.education[0].detail.split(': ')[1]}</strong><small>CGPA</small></span>
              <span><strong>{portfolioData.education[0].dates}</strong><small>STUDY PERIOD</small></span>
            </div>
            <p className="entry-location"><MapPin size={14} aria-hidden="true" /> {portfolioData.education[0].location}</p>
          </article>
          <div className="education-previous">
            <h3>Earlier education</h3>
            {portfolioData.education.slice(1).map((item) => (
              <article className="school-card" key={item.institution}>
                <span className="school-marker" aria-hidden="true" />
                <div>
                  <span className="school-date">{item.dates}</span>
                  <h4>{item.institution}</h4>
                  <p>{item.degree}</p>
                  <span className="school-result">{item.detail} <span>·</span> {item.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
