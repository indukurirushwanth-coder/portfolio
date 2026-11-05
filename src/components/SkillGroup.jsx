import {
  Binary,
  Code2,
  GitBranch,
  Layers3,
  MonitorSmartphone,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { skillLevels } from '../data/skills'

const iconMap = {
  code: Code2,
  monitor: MonitorSmartphone,
  wrench: Wrench,
  sparkles: Sparkles,
  binary: Binary,
  'git-branch': GitBranch,
  layers: Layers3,
}

export default function SkillGroup({ group }) {
  const Icon = iconMap[group.icon] ?? Layers3
  const titleId = `skill-group-${group.id}`

  return (
    <article className="skill-group" aria-labelledby={titleId}>
      <div className="skill-group__head">
        <span className="skill-group__icon" aria-hidden="true">
          <Icon size={20} />
        </span>
        <div>
          <h3 id={titleId}>{group.title}</h3>
          <p>{group.description}</p>
        </div>
      </div>

      <ul className="skill-list">
        {group.skills.map((skill) => {
          const level = skillLevels[skill.level] ?? {
            label: 'Skill',
            description: '',
          }

          return (
            <li key={skill.name}>
              <span
                className="skill-chip"
                data-level={skill.level}
                title={level.description}
              >
                <span className="skill-chip__dot" aria-hidden="true" />
                {skill.name}
                <span className="sr-only"> — {level.label}</span>
              </span>
            </li>
          )
        })}
      </ul>
    </article>
  )
}
