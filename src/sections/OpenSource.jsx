import {
  ArrowUpRight,
  Compass,
  GitBranch,
  ShieldCheck,
  Target,
} from 'lucide-react'
import { profile } from '../data/profile'
import SectionHeading from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'

const { openSource } = profile

function statusTone(status) {
  if (status === 'In progress') return 'active'
  if (status === 'Upcoming') return 'next'
  return 'future'
}

export default function OpenSource() {
  return (
    <section
      id="open-source"
      className="section"
      aria-labelledby="open-source-heading"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            id="open-source-heading"
            eyebrow="04 / Open source"
            title="Learn in the open. Contribute with care."
            intro={openSource.intro}
          />
        </Reveal>

        <div className="oss__grid">
          <Reveal className="oss__main" delay={60}>
            <article className="oss-goal">
              <div className="oss-goal__head">
                <span className="icon-badge" aria-hidden="true">
                  <Target size={20} />
                </span>
                <p className="card-kicker">The goal</p>
              </div>
              <h3>Build a real trail of reviewed work.</h3>
              <p>{openSource.goal}</p>

              <div className="oss-honesty">
                <ShieldCheck size={18} aria-hidden="true" />
                <p>{openSource.honestyNote}</p>
              </div>

              <div className="oss-focus">
                <p className="card-kicker">Where I want to help</p>
                <ul className="chip-list">
                  {openSource.focusAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            </article>

            <div className="resource-list">
              <div className="resource-list__head">
                <Compass size={18} aria-hidden="true" />
                <h3>Learning resources</h3>
              </div>
              <ul>
                {openSource.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <span className="resource-list__label">
                          {link.label}
                        </span>
                        <span className="resource-list__description">
                          {link.description}
                        </span>
                      </span>
                      <ArrowUpRight size={17} aria-hidden="true" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="oss__roadmap" delay={140}>
            <div className="roadmap">
              <div className="roadmap__head">
                <span className="icon-badge" aria-hidden="true">
                  <GitBranch size={20} />
                </span>
                <div>
                  <p className="card-kicker">Step by step</p>
                  <h3>Open-source roadmap</h3>
                </div>
              </div>

              <ol className="roadmap__list">
                {openSource.roadmap.map((item, index) => (
                  <li
                    className={`roadmap-item roadmap-item--${statusTone(item.status)}`}
                    key={item.title}
                  >
                    <div className="roadmap-item__marker" aria-hidden="true">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="roadmap-item__content">
                      <div className="roadmap-item__meta">
                        <span className="roadmap-item__phase">{item.phase}</span>
                        <span className="roadmap-item__status">
                          {item.status}
                        </span>
                      </div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
