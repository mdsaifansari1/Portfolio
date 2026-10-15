import { Award, BookOpen, Braces, UsersRound } from 'lucide-react'
import { portfolioData } from '../data/portfolioData.js'
import { useReveal } from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'

export function Coursework() {
  const { ref, isVisible } = useReveal()
  return (
    <section className="section-shell" id="coursework" aria-labelledby="coursework-title">
      <div className={`page-container reveal${isVisible ? ' is-visible' : ''}`} ref={ref}>
        <div className="coursework-layout">
          <div className="coursework-intro">
            <span className="section-icon"><BookOpen size={20} aria-hidden="true" /></span>
            <SectionHeading
              eyebrow="Relevant coursework"
              title="The concepts behind the code."
              description="Selected coursework supporting an interest in data, software, and intelligent systems."
              titleId="coursework-title"
            />
          </div>
          <div className="coursework-list">
            {portfolioData.coursework.map((course, index) => (
              <div className="course-item" key={course}>
                <span>0{index + 1}</span><strong>{course}</strong><Braces size={15} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Achievements() {
  const { ref, isVisible } = useReveal()
  const achievement = portfolioData.achievement
  return (
    <section className="section-shell section-muted" id="achievements" aria-labelledby="achievements-title">
      <div className={`page-container reveal${isVisible ? ' is-visible' : ''}`} ref={ref}>
        <div className="achievement-card">
          <div className="achievement-icon"><Award size={22} aria-hidden="true" /></div>
          <div className="achievement-copy">
            <span className="eyebrow">Problem solving</span>
            <h2 id="achievements-title">{achievement.title}</h2>
            <p>Demonstrating proficiency with complex JOINs, window functions, subqueries, and aggregations.</p>
            <div className="achievement-platforms">
              {achievement.platforms.map((platform) => (
                <span className="platform-chip" key={platform}>{platform}</span>
              ))}
            </div>
          </div>
          <div className="achievement-number" aria-hidden="true">100<span>+</span></div>
        </div>
      </div>
    </section>
  )
}

export function Leadership() {
  const { ref, isVisible } = useReveal()
  const leadership = portfolioData.leadership
  return (
    <section className="section-shell" id="leadership" aria-labelledby="leadership-title">
      <div className={`page-container reveal${isVisible ? ' is-visible' : ''}`} ref={ref}>
        <SectionHeading
          eyebrow="Beyond the classroom"
          title="Leadership through literature."
          description="Creating space for Urdu literature and creative expression at NIT Rourkela."
          titleId="leadership-title"
        />
        <article className="leadership-card">
          <div className="leadership-marker"><UsersRound size={18} aria-hidden="true" /></div>
          <div className="leadership-main">
            <div className="experience-topline">
              <div>
                <span className="entry-type">Leadership &amp; extracurricular</span>
                <h3>{leadership.role}</h3>
                <p className="entry-company">{leadership.organization} <span>·</span> {leadership.affiliation}</p>
              </div>
              <span className="date-pill">{leadership.dates}</span>
            </div>
            <ul className="detail-list">
              {leadership.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}
