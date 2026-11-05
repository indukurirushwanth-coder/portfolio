import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  PencilLine,
  Target,
} from 'lucide-react'
import { profile } from '../data/profile'
import SectionHeading from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'

const factIcons = [MapPin, GraduationCap, Target, BookOpen, BriefcaseBusiness]
const hasPlaceholders = profile.about.quickFacts.some((fact) => fact.placeholder)

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="about-heading"
            eyebrow="01 / About"
            title="Curiosity, turned into practice."
            intro="A little context on how I learn, what I care about, and where I am heading."
          />
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__story" delay={80}>
            <p className="about__lead">{profile.about.lead}</p>
            {profile.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 42)}>{paragraph}</p>
            ))}

            <div className="principles">
              {profile.about.principles.map((principle, index) => (
                <article className="principle" key={principle.title}>
                  <span className="principle__number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="snapshot-wrap" delay={160}>
            <aside className="snapshot" aria-labelledby="snapshot-heading">
              <div className="snapshot__header">
                <div>
                  <p className="snapshot__kicker">At a glance</p>
                  <h3 id="snapshot-heading">Quick facts</h3>
                </div>
                <span className="snapshot__mark" aria-hidden="true">
                  RV
                </span>
              </div>

              <dl className="snapshot__list">
                {profile.about.quickFacts.map((fact, index) => {
                  const Icon = factIcons[index] ?? Target

                  return (
                    <div className="snapshot__row" key={fact.label}>
                      <dt>
                        <span className="snapshot__icon" aria-hidden="true">
                          <Icon size={16} />
                        </span>
                        {fact.label}
                      </dt>
                      <dd
                        className={fact.placeholder ? 'is-placeholder' : ''}
                        title={
                          fact.placeholder
                            ? 'Editable placeholder — update src/data/profile.js'
                            : undefined
                        }
                      >
                        {fact.value}
                      </dd>
                    </div>
                  )
                })}
              </dl>

              {hasPlaceholders && (
                <p className="snapshot__note">
                  <PencilLine size={14} aria-hidden="true" />
                  Dotted values are placeholders waiting for your details.
                </p>
              )}
            </aside>

            <div className="snapshot-glow" aria-hidden="true" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
