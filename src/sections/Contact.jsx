import { useState } from 'react'
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  LockKeyhole,
  Mail,
  MapPin,
  Send,
  ShieldAlert,
} from 'lucide-react'
import { profile } from '../data/profile'
import { buildMailto, isUsableEmail } from '../utils/links'
import SectionHeading from '../components/SectionHeading'
import SocialLinks from '../components/SocialLinks'
import { Reveal } from '../components/Reveal'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const fieldValidators = {
  name: (value) => {
    const trimmed = value.trim()
    if (!trimmed) return 'Please enter your name.'
    if (trimmed.length < 2) return 'Your name needs at least 2 characters.'
    if (trimmed.length > 80) return 'Please keep your name under 80 characters.'
    return ''
  },
  email: (value) => {
    const trimmed = value.trim()
    if (!trimmed) return 'Please enter your email address.'
    if (trimmed.length > 120) return 'Please use an email under 120 characters.'
    if (!emailPattern.test(trimmed))
      return 'Please enter a valid email address, like name@example.com.'
    return ''
  },
  message: (value) => {
    const trimmed = value.trim()
    if (!trimmed) return 'Please write a short message.'
    if (trimmed.length < 10)
      return 'A little more detail helps — at least 10 characters.'
    if (trimmed.length > 2000)
      return 'Please keep your message under 2,000 characters.'
    return ''
  },
}

const emptyValues = { name: '', email: '', message: '' }

export default function Contact() {
  const [values, setValues] = useState(emptyValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const hasRealEmail = isUsableEmail(profile.email)

  const handleChange = (event) => {
    const { name, value } = event.target

    setValues((current) => ({ ...current, [name]: value }))
    if (status) setStatus(null)

    if (errors[name] && !fieldValidators[name](value)) {
      setErrors((current) => ({ ...current, [name]: '' }))
    }
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    if (!value.trim()) return

    setErrors((current) => ({
      ...current,
      [name]: fieldValidators[name](value),
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = Object.fromEntries(
      Object.entries(fieldValidators).map(([field, validate]) => [
        field,
        validate(values[field]),
      ]),
    )

    setErrors(nextErrors)

    const firstInvalidField = Object.keys(fieldValidators).find(
      (field) => nextErrors[field],
    )

    if (firstInvalidField) {
      setStatus({
        type: 'error',
        message: 'Please fix the highlighted fields and try again.',
      })
      window.requestAnimationFrame(() => {
        document.getElementById(`contact-${firstInvalidField}`)?.focus()
      })
      return
    }

    if (!hasRealEmail) {
      setStatus({
        type: 'setup',
        message:
          'The contact email is still a placeholder, so no mail app was opened. Add a real email in src/data/profile.js to enable this form.',
      })
      return
    }

    const mailtoHref = buildMailto({
      email: profile.email,
      subject: `Portfolio contact from ${values.name.trim()}`,
      body: `Hi ${profile.firstName},\n\n${values.message.trim()}\n\n—\n${values.name.trim()}\n${values.email.trim()}`,
    })

    setStatus({
      type: 'success',
      message:
        'Your email app should open with the message prefilled. Nothing is sent until you press Send there.',
      mailtoHref,
    })

    window.location.href = mailtoHref
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="contact-heading"
            eyebrow="07 / Contact"
            title="Let’s build something worth learning from."
            intro={profile.contact.intro}
          />
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__info" delay={60}>
            <div className="contact-card">
              <span className="contact-card__status">
                <span className="pulse-dot" aria-hidden="true" />
                {profile.availability}
              </span>

              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-method__icon" aria-hidden="true">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="contact-method__label">Email</p>
                    {hasRealEmail ? (
                      <a
                        className="contact-method__value"
                        href={`mailto:${profile.email}`}
                      >
                        {profile.email}
                      </a>
                    ) : (
                      <span
                        className="contact-method__value is-placeholder"
                        title="Add your email address in src/data/profile.js"
                      >
                        {profile.email} (placeholder)
                      </span>
                    )}
                  </div>
                </div>

                <div className="contact-method">
                  <span className="contact-method__icon" aria-hidden="true">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="contact-method__label">Location</p>
                    <span
                      className={`contact-method__value ${profile.locationPlaceholder ? 'is-placeholder' : ''}`}
                      title={
                        profile.locationPlaceholder
                          ? 'Add your location in src/data/profile.js'
                          : undefined
                      }
                    >
                      {profile.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="contact-card__divider" aria-hidden="true" />

              <div>
                <p className="contact-method__label">Find me online</p>
                <SocialLinks socials={profile.socials} />
              </div>

              <p className="contact-card__note">{profile.contact.responseNote}</p>
            </div>

            <div className="contact-aside">
              <p className="card-kicker">Good reasons to reach out</p>
              <ul>
                <li>Internship and placement opportunities</li>
                <li>Beginner-friendly open-source collaboration</li>
                <li>Feedback on a project or a shared learning goal</li>
              </ul>
            </div>
          </Reveal>

          <Reveal className="contact__form-wrap" delay={140}>
            <div className="contact-form-card">
              <div className="contact-form-card__head">
                <div>
                  <p className="card-kicker">Direct message</p>
                  <h3>Send a message</h3>
                </div>
                <span className="contact-form-card__icon" aria-hidden="true">
                  <Send size={19} />
                </span>
              </div>

              {!hasRealEmail && (
                <div className="setup-note">
                  <ShieldAlert size={18} aria-hidden="true" />
                  <p>
                    Setup note: the email address is a placeholder. Update{' '}
                    <code>src/data/profile.js</code> to enable the mailto
                    fallback.
                  </p>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <div className="field__label-row">
                    <label htmlFor="contact-name">Name</label>
                    <span className="field__requirement">Required</span>
                  </div>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="name"
                    maxLength={80}
                    placeholder="Your name"
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? 'contact-name-error' : undefined
                    }
                  />
                  {errors.name && (
                    <p className="field__error" id="contact-name-error">
                      <AlertCircle size={14} aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="field">
                  <div className="field__label-row">
                    <label htmlFor="contact-email">Email</label>
                    <span className="field__requirement">Required</span>
                  </div>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                    maxLength={120}
                    placeholder="you@example.com"
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? 'contact-email-error' : undefined
                    }
                  />
                  {errors.email && (
                    <p className="field__error" id="contact-email-error">
                      <AlertCircle size={14} aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="field">
                  <div className="field__label-row">
                    <label htmlFor="contact-message">Message</label>
                    <span className="field__requirement">
                      {values.message.length}/2000
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={2000}
                    placeholder="Tell me a little about what you have in mind…"
                    required
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? 'contact-message-error' : undefined
                    }
                  />
                  {errors.message && (
                    <p className="field__error" id="contact-message-error">
                      <AlertCircle size={14} aria-hidden="true" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button className="button button--primary form-submit" type="submit">
                  Open email draft
                  <ArrowUpRight size={17} aria-hidden="true" />
                </button>

                <p className="form-privacy">
                  <LockKeyhole size={14} aria-hidden="true" />
                  {profile.contact.formNote}
                </p>

                {status && (
                  <div
                    className={`form-status form-status--${status.type}`}
                    role={status.type === 'success' ? 'status' : 'alert'}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle2 size={18} aria-hidden="true" />
                    ) : (
                      <AlertCircle size={18} aria-hidden="true" />
                    )}
                    <div>
                      <p>{status.message}</p>
                      {status.mailtoHref && (
                        <a className="text-link" href={status.mailtoHref}>
                          Email me directly if it did not open
                          <span aria-hidden="true">→</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
