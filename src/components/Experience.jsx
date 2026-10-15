import { BriefcaseBusiness, MapPin } from 'lucide-react'
import { portfolioData } from '../data/portfolioData.js'
import { useReveal } from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'

export default function Experience() {
  const { ref, isVisible } = useReveal()
  return (
    <section className="section-shell" id="experience" aria-labelledby="experience-title">
      <div className={`page-container reveal${isVisible ? ' is-visible' : ''}`} ref={ref}>
        <SectionHeading
          eyebrow="Professional experience"
          title="Experience that moves the numbers."
          description="Applied analytics to streamline reporting, surface performance, and improve operational workflows."
          titleId="experience-title"
        />
        <div className="experience-timeline">
          {portfolioData.experience.map((item) => (
            <article className="timeline-entry experience-entry" key={item.company}>
              <div className="timeline-marker"><BriefcaseBusiness size={17} aria-hidden="true" /></div>
              <div className="experience-card">
                <div className="experience-topline">
                  <div>
                    <span className="entry-type">{item.type}</span>
                    <h3>{item.role}</h3>
                    <p className="entry-company">{item.company}</p>
                  </div>
                  <span className="date-pill">{item.dates}</span>
                </div>
                <p className="entry-location"><MapPin size={14} aria-hidden="true" /> {item.location}</p>
                <ul className="detail-list">
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <div className="experience-tags" aria-label="Areas of work">
                  <span>SQL &amp; Excel ETL</span><span>Power BI</span><span>Reporting automation</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
