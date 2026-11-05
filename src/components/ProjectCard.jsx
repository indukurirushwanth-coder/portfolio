import { ChevronDown, ExternalLink, Monitor, Clock3 } from 'lucide-react'
import { statusStyles } from '../data/projects'
import { isUsableUrl } from '../utils/links'
import { GitHubIcon } from './BrandIcons'

export default function ProjectCard({ project, isExpanded, onToggle }) {
  const detailsId = `project-details-${project.id}`
  const titleId = `project-title-${project.id}`
  const hasRepo = isUsableUrl(project.repoUrl)
  const hasLiveDemo = isUsableUrl(project.liveUrl)
  const tone = statusStyles[project.status] ?? 'blue'

  return (
    <article
      className={`project-card ${isExpanded ? 'is-expanded' : ''}`}
      aria-labelledby={titleId}
    >
      <figure className="project-card__media">
        <img
          src={project.image}
          alt={project.imageAlt}
          width="800"
          height="500"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className={`status-badge status-badge--${tone}`}>
            <span className="status-badge__dot" aria-hidden="true" />
            {project.statusLabel}
          </span>
          <span className="project-card__year">{project.year}</span>
        </div>

        <div>
          <h3 id={titleId} className="project-card__title">
            {project.title}
          </h3>
          <p className="project-card__tagline">{project.tagline}</p>
          <p className="project-card__description">{project.description}</p>
        </div>

        <ul
          className="tech-list"
          aria-label={`Technologies or planned technologies for ${project.title}`}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          <div className="project-card__links">
            {hasRepo ? (
              <a
                className="project-action"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon size={16} />
                Code
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <span
                className="project-action project-action--pending"
                title="This repository has not been published yet"
              >
                <GitHubIcon size={16} />
                Repo soon
              </span>
            )}

            {hasLiveDemo ? (
              <a
                className="project-action"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Live demo
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <span
                className="project-action project-action--pending"
                title="No public demo is available yet"
              >
                <Monitor size={16} aria-hidden="true" />
                Demo soon
              </span>
            )}
          </div>

          <button
            type="button"
            className="project-toggle"
            aria-expanded={isExpanded}
            aria-controls={detailsId}
            onClick={onToggle}
          >
            {isExpanded ? 'Hide details' : 'Project details'}
            <ChevronDown
              size={17}
              className={`project-toggle__icon ${isExpanded ? 'is-open' : ''}`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {isExpanded && (
        <div
          className="project-details"
          id={detailsId}
          role="region"
          aria-labelledby={titleId}
        >
          <div className="project-details__grid">
            <div>
              <h4>Problem</h4>
              <p>{project.problem}</p>
            </div>
            <div>
              <h4>Approach</h4>
              <p>{project.solution}</p>
            </div>
          </div>

          <div className="project-details__footer">
            <div className="project-details__block">
              <h4>Current status</h4>
              <p>{project.currentStatus}</p>
            </div>

            <div className="project-details__block">
              <h4>Technology</h4>
              <p>{project.technologies.join(' · ')}</p>
            </div>

            {project.demoAccess && (
              <div className="project-details__block project-details__block--wide">
                <h4>Demo access</h4>
                <dl className="demo-access">
                  <div className="demo-access__row">
                    <dt>Email</dt>
                    <dd>
                      <code>{project.demoAccess.email}</code>
                    </dd>
                  </div>
                  <div className="demo-access__row">
                    <dt>Password</dt>
                    <dd>
                      <code>{project.demoAccess.password}</code>
                    </dd>
                  </div>
                </dl>
                {project.demoAccess.note && (
                  <p className="demo-access__note">{project.demoAccess.note}</p>
                )}
              </div>
            )}

            <div className="project-details__block project-details__block--wide">
              <h4>Lessons &amp; next steps</h4>
              <p>{project.lessons}</p>
              <ul className="next-steps">
                {project.nextSteps.map((step) => (
                  <li key={step}>
                    <Clock3 size={14} aria-hidden="true" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}
