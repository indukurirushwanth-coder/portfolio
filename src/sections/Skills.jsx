import { skillGroups, skillLevels } from '../data/skills'
import SectionHeading from '../components/SectionHeading'
import SkillGroup from '../components/SkillGroup'
import { Reveal } from '../components/Reveal'

const levelOrder = ['working', 'practising', 'learning', 'exploring']

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="skills-heading"
            eyebrow="02 / Skills"
            title="Tools of the trade, at an honest level."
            intro="No invented percentages. Labels show what I can use today and what I am actively learning."
          />
        </Reveal>

        <Reveal className="skills__legend" delay={60}>
          <span className="skills__legend-title">How to read this</span>
          <ul>
            {levelOrder.map((levelKey) => {
              const level = skillLevels[levelKey]
              return (
                <li key={levelKey}>
                  <span
                    className="legend-dot"
                    data-level={levelKey}
                    aria-hidden="true"
                  />
                  <span>{level.label}</span>
                </li>
              )
            })}
          </ul>
        </Reveal>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 60}>
              <SkillGroup group={group} />
            </Reveal>
          ))}
        </div>

        <Reveal className="skills__note" delay={120}>
          <p>
            Skill levels are self-assessed and will change as I keep building.
            The goal is progress with evidence, not a perfect-looking list.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
