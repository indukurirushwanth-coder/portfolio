export default function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = 'left',
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">
        <span className="eyebrow__line" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </div>
  )
}
