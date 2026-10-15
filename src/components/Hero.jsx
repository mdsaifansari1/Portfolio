import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData.js'

function ProfileLink({ href, label, children }) {
  if (!href) {
    return (
      <span className="profile-link profile-link-unavailable" aria-label={`${label} URL not provided`}>
        {children}<span>{label}</span><span className="sr-only">URL not provided</span>
      </span>
    )
  }

  return (
    <a className="profile-link" href={href} target="_blank" rel="noreferrer">
      {children}<span>{label}</span><ArrowUpRight size={13} aria-hidden="true" />
    </a>
  )
}

function DataVisual() {
  return (
    <div className="hero-visual" aria-label="Illustration of data analytics and machine learning concepts">
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="visual-card">
        <div className="visual-card-top">
          <span><i /> LIVE DATA OVERVIEW</span>
          <span className="visual-dots" aria-hidden="true">•••</span>
        </div>
        <div className="visual-metric">
          <div>
            <span className="metric-label">Insight pipeline</span>
            <strong>Data <span>→</span> decisions</strong>
          </div>
          <div className="metric-mark" aria-hidden="true"><ArrowUpRight size={18} /></div>
        </div>
        <div className="chart-wrap" aria-hidden="true">
          <div className="chart-y-labels"><span>100</span><span>50</span><span>0</span></div>
          <svg className="chart-svg" viewBox="0 0 320 124" role="presentation">
            <defs>
              <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity=".2" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path className="chart-grid" d="M0 24H320M0 62H320M0 100H320" />
            <path className="chart-area" d="M0 95 C22 91 28 75 51 78 S82 87 106 60 S143 67 165 47 S197 61 219 38 S256 48 278 23 S305 33 320 12 V124 H0Z" />
            <path className="chart-line" d="M0 95 C22 91 28 75 51 78 S82 87 106 60 S143 67 165 47 S197 61 219 38 S256 48 278 23 S305 33 320 12" />
            <circle cx="278" cy="23" r="4" fill="#7dd3fc" />
          </svg>
        </div>
        <div className="visual-card-bottom">
          <span><span className="visual-code">01</span> SQL query</span>
          <span><span className="visual-code">02</span> ML model</span>
          <span><span className="visual-code">03</span> AI insights</span>
        </div>
      </div>
      <div className="floating-chip chip-sql"><span className="chip-symbol">&gt;_</span> SQL</div>
      <div className="floating-chip chip-ai"><span className="chip-spark">✳</span> Applied AI</div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-grid page-container">
        <div className="hero-copy">
          <div className="availability"><span /> DATA · ML · GENERATIVE AI</div>
          <p className="hero-greeting">Hi, I&apos;m</p>
          <h1 id="hero-title">Mohammad Saif <span>Ansari</span></h1>
          <p className="hero-role">{portfolioData.role}</p>
          <p className="hero-intro">
            A data analyst and aspiring AI/ML professional focused on turning data into actionable
            insights and building practical, intelligent solutions.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View my work <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#contact">
              <Mail size={16} aria-hidden="true" /> Contact me
            </a>
          </div>
          <div className="hero-socials" aria-label="Social profiles">
            <ProfileLink href={portfolioData.githubUrl} label="GitHub"><Github size={16} /></ProfileLink>
            <span className="social-divider" aria-hidden="true" />
            <ProfileLink href={portfolioData.linkedinUrl} label="LinkedIn"><Linkedin size={16} /></ProfileLink>
          </div>
        </div>
        <DataVisual />
      </div>
      <a className="scroll-cue" href="#about"><ArrowDown size={14} /> Scroll to explore</a>
    </section>
  )
}
