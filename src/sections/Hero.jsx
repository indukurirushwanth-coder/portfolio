import { ArrowDownRight, ArrowUpRight, Code2, Sparkles } from 'lucide-react'
import { profile } from '../data/profile'
import SocialLinks from '../components/SocialLinks'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="eyebrow__line" aria-hidden="true" />
            {profile.hero.eyebrow}
          </p>

          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-line">{profile.hero.titleLead}</span>
            <span className="hero__title-line gradient-text">
              {profile.hero.titleAccent}
            </span>
          </h1>

          <p className="hero__intro">{profile.hero.intro}</p>

          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              View projects
              <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--secondary" href="#contact">
              Contact me
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="hero__connect">
            <span className="hero__connect-label">Find me on</span>
            <SocialLinks socials={profile.socials} />
          </div>

          <ul className="focus-list" aria-label="Areas of focus">
            {profile.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="portrait-wrap">
            <div className="portrait-orbit portrait-orbit--outer" aria-hidden="true" />
            <div className="portrait-orbit portrait-orbit--inner" aria-hidden="true" />
            <span className="portrait-spark portrait-spark--one" aria-hidden="true" />
            <span className="portrait-spark portrait-spark--two" aria-hidden="true" />
            <span className="portrait-spark portrait-spark--three" aria-hidden="true" />

            <figure className="portrait">
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                width="720"
                height="900"
                fetchPriority="high"
                decoding="async"
              />
            </figure>

            <div className="portrait-card portrait-card--learning">
              <span className="portrait-card__icon" aria-hidden="true">
                <Sparkles size={16} />
              </span>
              <span>
                <span className="portrait-card__label">Currently learning</span>
                <span className="portrait-card__value">{profile.hero.learningNow}</span>
              </span>
            </div>

            <div className="portrait-card portrait-card--focus">
              <span className="portrait-card__icon" aria-hidden="true">
                <Code2 size={16} />
              </span>
              <span>
                <span className="portrait-card__label">Foundation</span>
                <span className="portrait-card__value">{profile.hero.foundation}</span>
              </span>
            </div>
          </div>

          <p className="hero__availability">
            <span className="pulse-dot" aria-hidden="true" />
            {profile.availability}
          </p>
        </div>
      </div>
    </section>
  )
}
