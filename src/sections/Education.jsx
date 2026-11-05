import {
  BookOpenCheck,
  GraduationCap,
  MapPin,
  PencilLine,
} from 'lucide-react'
import { profile } from '../data/profile'
import SectionHeading from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'

const { education } = profile
const hasPlaceholders = education.entries.some((entry) => entry.placeholder)

export default function Education() {
  return (
    <section
      id="education"
      className="section"
      aria-labelledby="education-heading"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            id="education-heading"
            eyebrow="05 / Education"
            title="The formal path, plus what I study on my own."
            intro="My academic path, with unfinished fields clearly marked instead of guessed."
          />
        </Reveal>

        <div className="education__grid">
          <Reveal className="education__main" delay={60}>
            <ol className="education__list">
              {education.entries.map((entry) => (
                <li className="education-entry" key={entry.institution}>
                  <div className="education-entry__marker" aria-hidden="true">
                    <GraduationCap size={20} />
                  </div>

                  <article className="education-card">
                    <p
                      className={`education-card__period ${
                        entry.periodPlaceholder ? 'is-placeholder' : ''
                      }`}
                    >
                      {entry.period}
                    </p>
                    <h3
                      className={
                        entry.institutionPlaceholder ? 'is-placeholder' : ''
                      }
                    >
                      {entry.institution}
                    </h3>
                    <p
                      className={`education-card__program ${
                        entry.programPlaceholder ? 'is-placeholder' : ''
                      }`}
                    >
                      {entry.program}
                    </p>
                    <p className="education-card__location">
                      <MapPin size={15} aria-hidden="true" />
                      <span
                        className={
                          entry.locationPlaceholder ? 'is-placeholder' : ''
                        }
                      >
                        {entry.location}
                      </span>
                    </p>

                    <div className="education-card__coursework">
                      <p className="card-kicker">Coursework &amp; focus</p>
                      <ul
                        className={`chip-list ${
                          entry.courseworkPlaceholder
                            ? 'chip-list--placeholder'
                            : ''
                        }`}
                      >
                        {entry.coursework.map((course) => (
                          <li key={course}>{course}</li>
                        ))}
                      </ul>
                    </div>

                    {entry.placeholder && (
                      <p className="edit-note">
                        <PencilLine size={14} aria-hidden="true" />
                        <span>
                          Some details are still placeholders — update them in{' '}
                          <code>src/data/profile.js</code>.
                        </span>
                      </p>
                    )}
                  </article>
                </li>
              ))}
            </ol>

            {hasPlaceholders && (
              <p className="education__footnote">
                Unconfirmed program and coursework details are left as
                placeholders — nothing is guessed.
              </p>
            )}
          </Reveal>

          <Reveal className="education__side" delay={140}>
            <aside className="study-card" aria-labelledby="self-study-heading">
              <div className="study-card__head">
                <span className="icon-badge" aria-hidden="true">
                  <BookOpenCheck size={20} />
                </span>
                <div>
                  <p className="card-kicker">Self-directed</p>
                  <h3 id="self-study-heading">Beyond the classroom</h3>
                </div>
              </div>
              <p>
                A parallel curriculum I am building through projects, practice,
                and documentation.
              </p>
              <ul className="study-list">
                {education.selfStudy.map((item, index) => (
                  <li key={item}>
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="study-card__note">
                Self-directed learning, not a formal credential.
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
