import { ArrowUp, Github, Linkedin } from 'lucide-react'
import { portfolioData } from '../data/portfolioData.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <a className="brand footer-brand" href="#home" aria-label="Back to top">
          <span className="brand-mark">SA</span>
          <span className="brand-name">Saif Ansari<span>.</span></span>
        </a>
        <p>Data, ideas, and practical solutions.</p>
        <div className="footer-right">
          <div className="footer-socials">
            {portfolioData.githubUrl && <a href={portfolioData.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>}
            {portfolioData.linkedinUrl && <a href={portfolioData.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>}
          </div>
          <span>© {new Date().getFullYear()} Mohammad Saif Ansari</span>
          <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUp size={15} /></a>
        </div>
      </div>
    </footer>
  )
}
