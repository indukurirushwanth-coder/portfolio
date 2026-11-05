/**
 * ---------------------------------------------------------------------------
 * YOUR PROFILE — edit this file first.
 * ---------------------------------------------------------------------------
 * Everything marked with "TODO" or a `placeholder: true` flag is intentionally
 * unfinished. Search for "TODO" in this file and replace those values.
 *
 * Nothing here should claim an experience, award, or result that you cannot
 * verify. It is much stronger to say "learning" than to invent a credential.
 */

export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'open-source', label: 'Open Source', href: '#open-source' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const profile = {
  name: 'Rushwanth Varma Indukuri',
  displayName: 'Rushwanth Varma',
  firstName: 'Rushwanth',
  initials: 'RV',
  role: 'Student Developer / Aspiring Software Engineer',
  shortRole: 'Student Developer',
  shortBio:
    'Student developer exploring C++, data structures, web development, AI, and open source.',

  // TODO: This copy is intentionally honest and beginner-friendly. Make it yours.
  hero: {
    eyebrow: "Hi, I'm Rushwanth Varma Indukuri",
    titleLead: 'I build thoughtful software',
    titleAccent: 'and learn in public.',
    intro:
      'A student developer exploring C++, data structures, web development, AI, and open source. I care about clean fundamentals, interfaces that feel simple, and projects that keep getting better after the first commit.',
    learningNow: 'React & applied AI',
    foundation: 'C++ · DSA · Web',
  },

  availability: 'Open to internships & open-source collaboration',
  focusAreas: ['C++', 'DSA', 'Web', 'AI', 'Open Source'],

  photo: '/images/profile.webp',
  photoAlt:
    'Rushwanth Varma Indukuri, wearing a light patterned shirt, looking to the side.',

  location: 'Bhimavaram, India',
  locationPlaceholder: false,
  email: 'indukurirushwanth@gmail.com',
  emailPlaceholder: false,

  socials: [
    {
      label: 'GitHub',
      url: 'https://github.com/indukurirushwanth-coder',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rushwanth-varma-a20a1243b',
      icon: 'linkedin',
    },
  ],

  about: {
    lead:
      'I am a student developer who likes to understand how things work — then make them feel effortless to use.',
    paragraphs: [
      'My curiosity usually starts with a simple question: “How does this actually work?” That has pulled me toward C++ and data structures on one side, and thoughtful front-end development on the other. I enjoy the point where low-level problem solving meets a clean, human interface.',
      'Most of my learning happens by building. I work through fundamentals, rebuild ideas from scratch, and turn small concepts into projects. I care about readable code, interfaces that do not make people think, and the little details that make a page feel finished.',
      'Right now I am strengthening my JavaScript and React skills, practising data structures and algorithms, exploring practical AI, and learning how open-source collaboration works. I am looking for internship opportunities and beginner-friendly projects where I can contribute, learn from code review, and improve.',
    ],
    principles: [
      {
        title: 'Clarity over cleverness',
        text: 'Readable code and interfaces that explain themselves.',
      },
      {
        title: 'Learn by building',
        text: 'Small, real projects teach more than passive tutorials.',
      },
      {
        title: 'Finish, then refine',
        text: 'A shipped draft is more useful than a perfect plan.',
      },
    ],
    quickFacts: [
      { label: 'Based in', value: 'Bhimavaram, India' },
      {
        label: 'Education',
        value: 'B.Tech · NxtWave Institute of Advanced Technology',
      },
      { label: 'Focus', value: 'C++, DSA & web development' },
      { label: 'Currently learning', value: 'React, AI & open source' },
      { label: 'Open to', value: 'Internships & collaborations' },
    ],
  },

  // TODO: Add the degree/program and coursework you want to publish.
  // Do not guess a degree, grade, or date.
  education: {
    entries: [
      {
        institution: 'NxtWave Institute of Advanced Technology',
        program: 'B-Tech',
        specialization: 'Computer Science',
        period: '2025 — 2029',
        location: 'Bhimavaram, India',
        coursework: [
          'Add relevant coursework',
          'Add a second subject',
          'Add a third subject',
        ],
        placeholder: true,
        institutionPlaceholder: false,
        programPlaceholder: true,
        periodPlaceholder: false,
        locationPlaceholder: false,
        courseworkPlaceholder: true,
      },
    ],
    selfStudy: [
      'Data structures & algorithms',
      'Modern React and the web platform',
      'Applied AI and LLM-powered interfaces',
      'Open-source collaboration workflows',
    ],
  },

  openSource: {
    intro:
      'Open source is where I want to learn how real software teams communicate: clear issues, small pull requests, thoughtful reviews, and documentation that respects the next reader.',
    honestyNote:
      'This section is a roadmap, not a contribution log. Nothing is listed here until it is real and verifiable.',
    goal:
      'Contribute consistently to beginner-friendly projects, build a public trail of reviewed work, and prepare a thoughtful Google Summer of Code proposal when the time is right.',
    focusAreas: [
      'Documentation',
      'Accessibility',
      'Testing',
      'Developer experience',
      'Small, focused bug fixes',
    ],
    roadmap: [
      {
        phase: 'Now',
        title: 'Learn the workflow properly',
        text: 'Practise Git, GitHub issues, branches, pull requests, and responding to review feedback.',
        status: 'In progress',
      },
      {
        phase: 'Next',
        title: 'Make the first small contribution',
        text: 'Find a well-scoped issue in a project I use, start with documentation or tests, and follow the contribution guide exactly.',
        status: 'Upcoming',
      },
      {
        phase: 'Then',
        title: 'Build a contribution habit',
        text: 'Contribute regularly, keep pull requests focused, and learn from maintainers rather than optimising for counts.',
        status: 'Future goal',
      },
      {
        phase: 'Later',
        title: 'Prepare for GSoC',
        text: 'Study organisations and codebases early, discuss ideas with maintainers, and write a proposal grounded in real project needs.',
        status: 'Future goal',
      },
    ],
    links: [
      {
        label: 'Google Summer of Code',
        description: 'Official programme information and timelines',
        href: 'https://summerofcode.withgoogle.com/',
      },
      {
        label: 'Open Source Guides',
        description: 'How to contribute, maintain, and communicate',
        href: 'https://opensource.guide/',
      },
      {
        label: 'First Contributions',
        description: 'A hands-on first pull-request walkthrough',
        href: 'https://github.com/firstcontributions/first-contributions',
      },
      {
        label: 'Good First Issue',
        description: 'Curated beginner-friendly issues',
        href: 'https://goodfirstissue.dev/',
      },
    ],
  },

  learning: {
    intro:
      'A snapshot of what I am actively working on. These are learning goals, not performance claims — no percentages, no invented streaks.',
    tracks: [
      {
        id: 'dsa',
        icon: 'binary',
        title: 'C++ & DSA',
        status: 'In progress',
        description:
          'Working through arrays, strings, recursion, searching, sorting, and core data structures by solving small problems consistently.',
        focus: ['Pattern recognition', 'Complexity', 'Clean C++'],
      },
      {
        id: 'web',
        icon: 'monitor',
        title: 'Web development',
        status: 'In progress',
        description:
          'Strengthening modern JavaScript and React by building complete interfaces, with attention to accessibility, responsiveness, and performance.',
        focus: ['React', 'Semantic HTML', 'CSS systems'],
      },
      {
        id: 'ai',
        icon: 'sparkles',
        title: 'Applied AI',
        status: 'Exploring',
        description:
          'Learning how LLM-powered applications are designed: prompting, retrieval, evaluation, and the UX of showing sources and uncertainty.',
        focus: ['LLM APIs', 'Retrieval', 'Responsible UX'],
      },
      {
        id: 'oss',
        icon: 'git-branch',
        title: 'Open source',
        status: 'Learning',
        description:
          'Practising the collaboration side of engineering: issues, branches, focused pull requests, code review, and good documentation.',
        focus: ['Git workflow', 'Code review', 'Writing'],
      },
    ],
    milestones: [
      {
        label: 'Now',
        title: 'Structured DSA practice',
        text: 'Solve problems regularly and write down the pattern behind each solution.',
        status: 'In progress',
      },
      {
        label: 'Next',
        title: 'Take ResearchLens AI beyond the MVP',
        text: 'Restore a public demo and test retrieval quality against a fixed set of questions.',
        status: 'Upcoming',
      },
      {
        label: 'Future',
        title: 'First merged open-source PR',
        text: 'Start with docs or tests, then grow into small features.',
        status: 'Goal',
      },
      {
        label: 'Future',
        title: 'Prepare a GSoC proposal',
        text: 'Research organisations and contribute before proposal season begins.',
        status: 'Goal',
      },
    ],
    // TODO: Add only real, verifiable milestones here (courses completed,
    // awards received, merged PRs, measurable project outcomes).
    achievements: [],
    achievementsEmptyMessage:
      'No verified achievements have been added yet. When a course, award, or contribution is complete, add it in src/data/profile.js — this space is reserved for evidence, not aspirations.',
  },

  contact: {
    intro:
      'Have an internship, a project, or a beginner-friendly open-source issue in mind? I would be glad to hear from you.',
    responseNote: 'I will reply as soon as I can.',
    formNote:
      'This form opens your own email app with the message filled in. It does not send anything automatically, and this site does not store your details.',
  },
}
