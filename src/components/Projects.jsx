import { ArrowUpRight, BarChart3, Code2, Database, Layers3 } from 'lucide-react'
import { portfolioData } from '../data/portfolioData.js'
import { useReveal } from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'

const visualIcons = { dashboard: BarChart3, rag: Layers3, sql: Database }

function ProjectVisual({ type, title }) {
  const Icon = visualIcons[type] || Code2
  return (
    <div className={`project-visual project-visual-${type}`} aria-hidden="true">
      <div className="project-visual-grid" />
      <div className="project-visual-label"><span>PROJECT / 0{portfolioData.projects.findIndex((project) => project.visual === type) + 1}</span><Icon size={18} /></div>
      {type === 'dashboard' && (
        <div className="mini-dashboard">
          <div className="mini-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="mini-line"><span /><span /><span /><span /></div>
        </div>
      )}
      {type === 'rag' && (
        <div className="rag-flow">
          <span>DOCS</span><i /><span>RAG</span><i /><span>LLM</span>
        </div>
      )}
      {type === 'sql' && (
        <div className="sql-window">
          <span><i /> SELECT</span><span>  genre, COUNT(*)</span><span>  FROM titles</span><span>  GROUP BY genre;</span>
        </div>
      )}
      <span className="sr-only">{title} project visual</span>
    </div>
  )
}

export default function Projects() {
  const { ref, isVisible } = useReveal()
  return (
    <section className="section-shell section-muted" id="projects" aria-labelledby="projects-title">
      <div className={`page-container reveal${isVisible ? ' is-visible' : ''}`} ref={ref}>
        <SectionHeading
          eyebrow="Selected projects"
          title="Projects, built around real questions."
          description="Hands-on work across business intelligence, retrieval-augmented generation, and SQL analysis."
          titleId="projects-title"
        />
        <div className="project-grid">
          {portfolioData.projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <ProjectVisual type={project.visual} title={project.title} />
              <div className="project-content">
                <div className="project-meta"><span>{project.category}</span><span>0{index + 1}</span></div>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <ul className="project-highlights">
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <div className="project-footer">
                  <div className="tag-list">
                    {project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
                  </div>
                  {project.codeUrl && (
                    <a className="project-link" href={project.codeUrl} target="_blank" rel="noreferrer">
                      Code <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
