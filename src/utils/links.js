/**
 * Small link helpers shared by the social links and contact form.
 * Keeping this logic in one place prevents "dead" placeholder links.
 */

const RESERVED_EMAIL_DOMAINS = ['example.com', 'example.org', 'example.net']

export function isUsableUrl(url) {
  if (typeof url !== 'string' || url.trim() === '') return false

  try {
    const parsed = new URL(url)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

export function isUsableEmail(email) {
  if (typeof email !== 'string' || !email.includes('@')) return false

  const domain = email.split('@')[1]?.toLowerCase()
  return !RESERVED_EMAIL_DOMAINS.includes(domain)
}

export function buildMailto({ email, subject, body }) {
  // encodeURIComponent keeps spaces as %20. URLSearchParams would use "+",
  // which not every email client decodes correctly in a mailto body.
  const query = [
    subject ? `subject=${encodeURIComponent(subject)}` : '',
    body ? `body=${encodeURIComponent(body)}` : '',
  ]
    .filter(Boolean)
    .join('&')

  return `mailto:${email}${query ? `?${query}` : ''}`
}
