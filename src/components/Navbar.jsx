import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    const desktopQuery = window.matchMedia('(min-width: 981px)')
    const handleDesktopChange = (event) => {
      if (event.matches) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    desktopQuery.addEventListener('change', handleDesktopChange)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
      desktopQuery.removeEventListener('change', handleDesktopChange)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}
      ref={headerRef}
    >
      <div className="container site-header__inner">
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

        <nav className="desktop-nav" aria-label="Primary">
          <ul>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id

              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <a className="header-cta" href="#contact">
          Let&apos;s talk
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <button
          type="button"
          className="menu-toggle"
          ref={menuButtonRef}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <nav aria-label="Mobile">
            <ul>
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id

                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className={`mobile-nav-link ${isActive ? 'is-active' : ''}`}
                      aria-current={isActive ? 'location' : undefined}
                      onClick={closeMenu}
                    >
                      <span className="mobile-nav-link__index" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
          <a
            className="button button--primary mobile-menu__cta"
            href="#contact"
            onClick={closeMenu}
          >
            Start a conversation
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <p className="mobile-menu__note">{profile.availability}</p>
        </div>
      )}
    </header>
  )
}
