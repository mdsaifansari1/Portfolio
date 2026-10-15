export default function SectionHeading({ eyebrow, title, description, centered = false, titleId }) {
  return (
    <div className={`section-heading${centered ? ' section-heading-centered' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={titleId}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
