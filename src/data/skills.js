/**
 * Skills are self-reported, so keep them honest.
 * Levels are intentionally qualitative — no fake percentages or progress bars.
 *
 * level options: "working" | "practising" | "learning" | "exploring"
 */
export const skillLevels = {
  working: {
    label: 'Working knowledge',
    description: 'Comfortable using it in small projects',
  },
  practising: {
    label: 'Practising',
    description: 'Used regularly and still improving',
  },
  learning: {
    label: 'Currently learning',
    description: 'Actively studying and building with it',
  },
  exploring: {
    label: 'Exploring',
    description: 'Curious, early, and experimenting',
  },
}

export const skillGroups = [
  {
    id: 'programming',
    icon: 'code',
    title: 'Programming',
    description: 'The languages I use to think and build.',
    skills: [
      { name: 'C++', level: 'working' }, // TODO: adjust levels to match you
      { name: 'JavaScript', level: 'working' },
      { name: 'Python', level: 'learning' },
    ],
  },
  {
    id: 'frontend',
    icon: 'monitor',
    title: 'Frontend',
    description: 'Turning ideas into responsive, usable interfaces.',
    skills: [
      { name: 'HTML & CSS', level: 'working' },
      { name: 'React', level: 'learning' },
      { name: 'Responsive design', level: 'practising' },
      { name: 'Vite', level: 'learning' },
    ],
  },
  {
    id: 'tools',
    icon: 'wrench',
    title: 'Developer Tools',
    description: 'The everyday workflow around the code.',
    skills: [
      { name: 'Git & GitHub', level: 'learning' },
      { name: 'VS Code', level: 'working' },
      { name: 'npm', level: 'learning' },
      { name: 'Chrome DevTools', level: 'learning' },
    ],
  },
  {
    id: 'ai',
    icon: 'sparkles',
    title: 'AI',
    description: 'Practical, responsible use of modern AI tooling.',
    skills: [
      { name: 'LLM APIs', level: 'exploring' },
      { name: 'Prompt design', level: 'learning' },
      { name: 'AI-assisted development', level: 'learning' },
      { name: 'Retrieval concepts', level: 'exploring' },
    ],
  },
  {
    id: 'fundamentals',
    icon: 'binary',
    title: 'CS Fundamentals',
    description: 'The ideas underneath the frameworks.',
    skills: [
      { name: 'Data structures & algorithms', level: 'practising' },
      { name: 'Object-oriented programming', level: 'learning' },
      { name: 'Problem solving', level: 'practising' },
      { name: 'Databases & SQL', level: 'learning' },
    ],
  },
]
