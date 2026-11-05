import {
  Binary,
  GitBranch,
  MonitorSmartphone,
  Sparkles,
  Trophy,
} from 'lucide-react'
import { profile } from '../data/profile'
import SectionHeading from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'

const { learning } = profile

const iconMap = {
  binary: Binary,
  monitor: MonitorSmartphone,
  sparkles: Sparkles,
  'git-branch': GitBranch,
}

export default function LearningJourney() {
  return (
    <section
      id="learning"
      className="section"
      aria-labelledby="learning-heading"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            id="learning-heading"
            eyebrow="06 / Learning journey"
            title="What I am practising now, and what comes next."
            intro={learning.intro}
          />
        </Reveal>

        <div className="learning__tracks">
          {learning.tracks.map((track, index) => {
            const Icon = iconMap[track.icon] ?? Sparkles

            return (
              <Reveal key={track.id} delay={index * 60}>
                <article className="learning-track">
                  <div className="learning-track__head">
                    <span className="icon-badge" aria-hidden="true">
                      <Icon size={19} />
                    </span>
                    <span className="learning-track__status">{track.status}</span>
                  </div>
                  <h3>{track.title}</h3>
                  <p>{track.description}</p>
                  <ul className="chip-list chip-list--small">
                    {track.focus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>

        <div className="learning__bottom">
          <Reveal className="milestones" delay={80}>
            <div className="panel-heading">
              <p className="card-kicker">Goals, in order</p>
              <h3>Next milestones</h3>
            </div>
            <ol className="milestone-list">
              {learning.milestones.map((milestone) => (
                <li key={milestone.title}>
                  <span className="milestone__label">{milestone.label}</span>
                  <div>
                    <div className="milestone__title-row">
                      <h4>{milestone.title}</h4>
                      <span className="milestone__status">{milestone.status}</span>
                    </div>
                    <p>{milestone.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="achievements" delay={140}>
            <div className="panel-heading">
              <p className="card-kicker">Evidence only</p>
              <h3>Verified achievements</h3>
            </div>

            {learning.achievements.length > 0 ? (
              <ul className="achievement-list">
                {learning.achievements.map((achievement) => (
                  <li key={achievement.title}>
                    <Trophy size={18} aria-hidden="true" />
                    <div>
                      <h4>{achievement.title}</h4>
                      <p>{achievement.detail}</p>
                      {achievement.year && (
                        <span className="achievement__year">
                          {achievement.year}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="achievements__empty">
                <span className="achievements__icon" aria-hidden="true">
                  <Trophy size={24} />
                </span>
                <p>{learning.achievementsEmptyMessage}</p>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
