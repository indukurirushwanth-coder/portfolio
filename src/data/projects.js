/**
 * PROJECTS — real work first, concepts last.
 *
 * Rules for editing:
 * - Only add a repoUrl / liveUrl when the link actually works.
 * - Describe only features that exist. Put future ideas under "nextSteps".
 * - Links and stacks here were checked against the public repositories.
 *
 * status options: "live" | "in-progress" | "concept"
 */

export const projectFilters = [
  { id: 'all', label: 'All work' },
  { id: 'live', label: 'Live' },
  { id: 'concept', label: 'Concepts' },
]

export const projects = [
  {
    id: 'researchlens-ai',
    title: 'ResearchLens AI',
    tagline: 'Grounded answers across multiple papers.',
    description:
      'A deployed hackathon MVP for multi-document research: upload PDFs, ask a question, and get an answer tied to the exact documents and pages that support it.',
    status: 'live',
    statusLabel: 'Live · hackathon MVP',
    year: '2026',
    featured: true,
    image: '/images/projects/researchlens-ai.webp',
    imageAlt:
      'Screenshot of the ResearchLens AI sign-in screen on its live deployment',
    technologies: [
      'React 19',
      'Node.js & Express',
      'Gemini API',
      'BM25 retrieval',
      'PostgreSQL',
      'JWT auth',
    ],
    repoUrl:
      'https://github.com/indukurirushwanth-coder/AI-for-Research-Knowledge-Discovery',
    liveUrl: 'https://ai-for-research-knowledge-discovery-ord9.onrender.com',
    problem:
      'Research gets scattered across PDFs, browser tabs, and rough notes. A general-purpose chatbot can answer quickly, but it often hides where an answer came from — which makes the result hard to trust or verify.',
    solution:
      'Upload a small set of papers, then query them together. Page-aware chunking keeps exact page numbers, BM25 ranks the most relevant passages, and every answer is shown next to clickable source cards. A separate view compares papers across objectives, methods, and stated gaps.',
    currentStatus:
      'Live on Render and open source on GitHub, with unit and integration tests in the repository. The site opens on a sign-in screen; create an account to try the workspace. On Render’s free tier the first request can take a few seconds while the service wakes up.',
    lessons:
      'Designing citations and document scope before polishing the answer — and seeing how far a transparent retrieval baseline like BM25 can go before reaching for embeddings.',
    nextSteps: [
      'Add a guided sample workspace so visitors can explore without registering',
      'Evaluate retrieval quality against a fixed question set',
      'Try hybrid keyword + embedding retrieval',
    ],
  },
  {
    id: 'prabhas-universe',
    title: 'Prabhas Universe',
    tagline: 'A fan-built home for a filmography.',
    description:
      'A cinematic single-page archive for actor Prabhas: searchable filmography, box-office stats, gallery lightbox, timeline, awards, articles, and a quiz — built with plain HTML, CSS, and JavaScript.',
    status: 'live',
    statusLabel: 'Live · fan project',
    year: '2026',
    featured: false,
    image: '/images/projects/prabhas-universe.webp',
    imageAlt:
      'Screenshot of the Prabhas Universe website hero section with its cinematic dark layout',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    repoUrl: 'https://github.com/indukurirushwanth-coder/prabhas-universe',
    liveUrl: 'https://prabhas-universe-eta.vercel.app/',
    problem:
      'Fan sites often become crowded link lists. The design challenge is to make a large filmography feel browsable, atmospheric, and easy to move through on a phone.',
    solution:
      'One visual direction, split into clear sections: an animated particle hero, searchable and filterable filmography, a box-office dashboard, a lightbox gallery, a career timeline, awards, articles, and an interactive quiz.',
    currentStatus:
      'Live on Vercel and open source on GitHub. The screenshot on this card is a real capture of the deployed site.',
    lessons:
      'Splitting a large single-page build into small JavaScript modules, and keeping motion and image-heavy sections usable on a phone.',
    nextSteps: [
      'Verify filmography and box-office figures against official sources',
      'Add full keyboard focus management to the lightbox',
      'Audit colour contrast across the cinematic theme',
    ],
  },
  {
    id: 'restaurant-website',
    title: 'Restaurant Website',
    tagline: 'A menu that filters itself.',
    description:
      'A responsive restaurant site built with plain HTML, CSS, and JavaScript — category-filtered menu, photo gallery, customer reviews, location details, a contact form, and a small chatbot widget.',
    status: 'live',
    statusLabel: 'Live · template project',
    year: '2026',
    featured: false,
    image: '/images/projects/restaurant-website.webp',
    imageAlt:
      'Screenshot of the Sample Restaurant website with its hero section and navigation',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    repoUrl:
      'https://github.com/indukurirushwanth-coder/Sample-Restaurant-website',
    liveUrl: 'https://sample-restaurant-website.vercel.app/',
    problem:
      'A small restaurant needs a credible web presence quickly: menu, photos, reviews, location, and a way to get in touch — without a CMS or a build step.',
    solution:
      'A single static site with a dynamic menu and category filtering, gallery, reviews, map/location block, contact form, and a lightweight chatbot. Menu items, contact details, and branding are meant to be swapped per restaurant.',
    currentStatus:
      'Live on Vercel and open source as a reusable template. The screenshot on this card is a real capture of the deployed site.',
    lessons:
      'Designing for content that changes — keeping the markup easy to edit without making the page feel like a template.',
    nextSteps: [
      'Move the menu into a single data file',
      'Wire the contact form to a real endpoint',
      'Improve the chatbot’s fallback answers',
    ],
  },
  {
    id: 'smart-attend',
    title: 'Smart Attend',
    tagline: 'Attendance and marks, without the spreadsheet.',
    description:
      'A deployed school attendance system with separate student, teacher, and admin dashboards — class rosters, attendance marking, marks entry, leave requests, holiday calendars, reports, and CSV export.',
    status: 'live',
    statusLabel: 'Live · school app',
    year: '2026',
    featured: false,
    image: '/images/projects/smart-attend.webp',
    imageAlt:
      'Screenshot of the Smart Attend admin dashboard, with summary cards for students, teachers, classes, attendance, and tickets',
    technologies: [
      'React',
      'React Router',
      'Tailwind CSS',
      'Socket.IO',
      'Recharts',
    ],
    repoUrl: '',
    liveUrl: 'https://smart-attendence-onj0.onrender.com',
    problem:
      'Manual attendance is repetitive, easy to mistype, and awkward to review later. Small classrooms still deserve a tool that is faster than a spreadsheet without becoming enterprise software.',
    solution:
      'Three role-based dashboards over one data model. Teachers mark attendance, enter marks, manage classes, and request leave. Students see an attendance calendar, marks, overall percentage, and can raise tickets. Admins manage students, teachers, classes, subjects, holidays, edit requests, and reports, with CSV export.',
    currentStatus:
      'Live on Render. Open the demo account below to explore the student, teacher, and admin views. There is no public repository yet.',
    demoAccess: {
      email: 'temporary8418@gmail.com',
      password: '123456789',
      note: 'Shared demo account with admin access — please do not change the password or delete existing records.',
    },
    lessons:
      'Designing one data model that has to make sense to three very different users — and keeping an attendance grid usable on a phone.',
    nextSteps: [
      'Add a read-only demo account so visitors can explore each role',
      'Publish the repository',
      'Add offline support for marking attendance without a connection',
    ],
  },
]

export const statusStyles = {
  live: 'emerald',
  'in-progress': 'blue',
  concept: 'violet',
}
