import { useEffect, useState } from 'react'

/**
 * Tracks which navigable section is currently in view.
 * A scroll listener is used instead of IntersectionObserver because sections
 * vary a lot in height and this gives predictable active states on every screen.
 */
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    let frame = 0

    const updateActiveSection = () => {
      frame = 0
      const marker = window.scrollY + window.innerHeight * 0.32
      let current = sectionIds[0] ?? ''

      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) continue

        const top = section.getBoundingClientRect().top + window.scrollY
        if (top <= marker) current = id
      }

      // Make the final link active when the page is scrolled to the very bottom.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4

      if (atBottom) current = sectionIds[sectionIds.length - 1] ?? current
      setActiveSection((previous) =>
        previous === current ? previous : current,
      )
    }

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    window.addEventListener('hashchange', scheduleUpdate)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.removeEventListener('hashchange', scheduleUpdate)
    }
  }, [sectionIds])

  return activeSection
}
