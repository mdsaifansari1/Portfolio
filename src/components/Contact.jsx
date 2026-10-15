import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { portfolioData } from '../data/portfolioData.js'
import { useReveal } from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'

function ProfileContact({ href, label, icon: Icon }) {
  return href ? (
    <a
      className="contact-link"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="contact-link-icon">
        <Icon size={17} aria-hidden="true" />
      </span>
      <span>{label}</span>
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  ) : (
    <div
      className="contact-link contact-link-muted"
      aria-label={`${label}: URL not provided`}
    >
      <span className="contact-link-icon">
        <Icon size={17} aria-hidden="true" />
      </span>
      <span>{label}</span>
      <small>URL not provided</small>
    </div>
  )
}

export default function Contact() {
  const { ref, isVisible } = useReveal()

  return (
    <section
      className="section-shell contact-section section-muted"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div
        className={`page-container reveal${isVisible ? ' is-visible' : ''}`}
        ref={ref}
      >
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's connect."
          centered
          titleId="contact-title"
        />

        <div className="contact-info-grid">
          <a
            className="contact-link"
            href={`mailto:${portfolioData.email}`}
          >
            <span className="contact-link-icon">
              <Mail size={17} aria-hidden="true" />
            </span>
            <span>{portfolioData.email}</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <a
            className="contact-link"
            href={`tel:${portfolioData.phone.replace(/[\s-]/g, '')}`}
          >
            <span className="contact-link-icon">
              <Phone size={17} aria-hidden="true" />
            </span>
            <span>{portfolioData.phone}</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <ProfileContact
            href={portfolioData.linkedinUrl}
            label="LinkedIn"
            icon={Linkedin}
          />

          <ProfileContact
            href={portfolioData.githubUrl}
            label="GitHub"
            icon={Github}
          />

          <div className="contact-location">
            <span className="contact-link-icon">
              <MapPin size={17} aria-hidden="true" />
            </span>
            <span>Rourkela, Odisha</span>
          </div>
        </div>
      </div>
    </section>
  )
}