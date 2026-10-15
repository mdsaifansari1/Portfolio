import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { portfolioData } from '../data/portfolioData.js'

const links = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Education', 'education'],
  ['Coursework', 'coursework'],
  ['Achievements', 'achievements'],
  ['Leadership', 'leadership'],
  ['Contact', 'contact'],
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-shell page-container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Go to home">
          <span className="brand-mark">SA</span>
          <span className="brand-name">Saif Ansari<span>.</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <div
          className={`nav-content${menuOpen ? ' nav-content-open' : ''}`}
          id="primary-navigation"
        >
          <ul className="nav-links">
            {links.map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={closeMenu}>{label}</a>
              </li>
            ))}
          </ul>
          <a className="nav-cta" href={`mailto:${portfolioData.email}`} onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}
