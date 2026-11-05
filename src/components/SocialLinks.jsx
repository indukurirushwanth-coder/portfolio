import { ArrowUpRight, Globe, Plus } from 'lucide-react'
import { isUsableUrl } from '../utils/links'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
}

export default function SocialLinks({
  socials,
  iconOnly = false,
  className = '',
}) {
  return (
    <ul
      className={`socials ${iconOnly ? 'socials--icons' : ''} ${className}`.trim()}
      aria-label="Social links"
    >
      {socials.map((social) => {
        const Icon = iconMap[social.icon] ?? Globe
        const hasUrl = isUsableUrl(social.url)

        return (
          <li key={social.label}>
            {hasUrl ? (
              <a
                className="social-link"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={18} aria-hidden="true" />
                {iconOnly ? (
                  <span className="sr-only">
                    {social.label} (opens in a new tab)
                  </span>
                ) : (
                  <span>{social.label}</span>
                )}
                {!iconOnly && (
                  <ArrowUpRight
                    className="social-link__arrow"
                    size={15}
                    aria-hidden="true"
                  />
                )}
              </a>
            ) : (
              <span
                className="social-link social-link--placeholder"
                title={
                  social.placeholder ??
                  `Add your ${social.label} URL in src/data/profile.js`
                }
              >
                <Icon size={18} aria-hidden="true" />
                {iconOnly ? (
                  <span className="sr-only">
                    {social.label} link not added yet
                  </span>
                ) : (
                  <>
                    <span>{social.label}</span>
                    <span className="social-link__status">add link</span>
                    <Plus size={14} aria-hidden="true" />
                  </>
                )}
              </span>
            )}
          </li>
        )
      })}
    </ul>
  )
}
