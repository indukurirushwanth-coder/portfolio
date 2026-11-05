import { useMemo, useState } from 'react'
import { FolderOpen, SlidersHorizontal } from 'lucide-react'
import { projectFilters, projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [expandedProject, setExpandedProject] = useState(null)

  const counts = useMemo(
    () =>
      Object.fromEntries(
        projectFilters.map((filter) => [
          filter.id,
          filter.id === 'all'
            ? projects.length
            : projects.filter((project) => project.status === filter.id).length,
        ]),
      ),
    [],
  )

  const visibleProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? projects
        : projects.filter((project) => project.status === activeFilter),
    [activeFilter],
  )

  // Filters only earn their space when more than one status is present.
  const availableFilters = useMemo(
    () => projectFilters.filter((filter) => filter.id === 'all' || counts[filter.id] > 0),
    [counts],
  )
  const showFilters = availableFilters.length > 2

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId)
    setExpandedProject(null)
  }

  const toggleProject = (projectId) => {
    setExpandedProject((current) => (current === projectId ? null : projectId))
  }

  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            eyebrow="03 / Selected work"
            title="Projects, shown for what they are."
            intro="Every build here is deployed, with a link to the live app and to the source wherever it is public."
          />
        </Reveal>

        <Reveal className="projects__toolbar" delay={60}>
          {showFilters && (
            <div className="filter-group" role="group" aria-label="Filter projects">
              <SlidersHorizontal
                className="filter-group__icon"
                size={16}
                aria-hidden="true"
              />
              {availableFilters.map((filter) => {
                const isActive = activeFilter === filter.id

                return (
                  <button
                    key={filter.id}
                    type="button"
                    className={`filter-button ${isActive ? 'is-active' : ''}`}
                    aria-pressed={isActive}
                    onClick={() => handleFilterChange(filter.id)}
                  >
                    {filter.label}
                    <span className="filter-button__count" aria-hidden="true">
                      {String(counts[filter.id] ?? 0).padStart(2, '0')}
                    </span>
                  </button>
                )
              })}
            </div>
          )}

          <p className="projects__count" aria-live="polite">
            Showing {visibleProjects.length}{' '}
            {visibleProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </Reveal>

        {visibleProjects.length > 0 ? (
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <Reveal
                key={project.id}
                className="project-grid__item"
                delay={index * 70}
              >
                <ProjectCard
                  project={project}
                  isExpanded={expandedProject === project.id}
                  onToggle={() => toggleProject(project.id)}
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <FolderOpen size={24} aria-hidden="true" />
            <h3>No projects in this view yet.</h3>
            <p>Try another filter — the work is still in progress.</p>
          </div>
        )}

        <Reveal className="projects__note" delay={100}>
          <p>
            Every link here was opened and checked before it was published.
            Placeholder repositories and fake demos are not used.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
