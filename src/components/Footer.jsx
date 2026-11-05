import { ArrowUp, Mail } from 'lucide-react'
import { navLinks, profile } from '../data/profile'
import { isUsableEmail } from '../utils/links'
import SocialLinks from './SocialLinks'

const currentYear = new Date().getFullYear()

export default function Footer() {
  const hasRealEmail = isUsableEmail(profile.email)

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <span className="brand__mark" aria-hidden="true">
                {profile.initials}
              </span>
              <span className="brand__text">
                <span className="brand__name">{profile.displayName}</span>
                <span className="brand__role">{profile.shortRole}</span>
              </span>
              <span className="sr-only">— back to top</span>
            </a>
            <p>{profile.shortBio}</p>
            <SocialLinks socials={profile.socials} iconOnly />
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <h2>Explore</h2>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-contact">
            <h2>Say hello</h2>
            <p>{profile.availability}.</p>
            {hasRealEmail ? (
              <a className="footer-email" href={`mailto:${profile.email}`}>
                <Mail size={16} aria-hidden="true" />
                {profile.email}
              </a>
            ) : (
              <span
                className="footer-email footer-email--placeholder"
                title="Add your email address in src/data/profile.js"
              >
                <Mail size={16} aria-hidden="true" />
                Email placeholder
              </span>
            )}
            <a className="text-link" href="#contact">
              Use the contact form
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} {profile.name}. Built with React, Vite &amp; care.
          </p>
          <a className="footer-top-link" href="#home">
            Back to top
            <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
