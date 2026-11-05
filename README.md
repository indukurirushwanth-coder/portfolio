# Rushwanth Varma Indukuri — Portfolio

A dark, responsive personal portfolio built with **React + Vite**, plain CSS, and a small set of Lucide icons. It is designed for software-engineering internships, placements, project showcases, and open-source preparation.

![Portfolio preview](public/images/projects/portfolio-preview.webp)

> **Current status:** fully working locally. Personal contact details, social links, profile photograph, and institution are filled in. Degree/program, dates, coursework, and achievements remain clearly marked placeholders. Project links in the data file were checked and return HTTP 200 responses.

---

## What is included

- Sticky responsive navigation with a working mobile menu and active-section highlighting
- Dark futuristic design system with glass cards, gradients, a fine grid, restrained motion, and reduced-motion support
- Hero, About, Skills, Projects, Open Source, Education, Learning Journey, and Contact sections
- Six data-driven project cards: ResearchLens AI, ShopX, Prabhas Universe, Restaurant Website, Smart Attend, and this portfolio
- Project filtering (All / Live / In progress / Concepts) and accessible expandable project details
- Honest status labels: live projects link to the source and deployment; concepts and unfinished work are labelled
- Contact form with client-side validation and a transparent **mailto fallback** (no fake “message sent” state)
- Reusable components, centralised profile/project/skill data, self-hosted fonts, and local images
- SEO metadata, Open Graph image, favicon, web manifest, `robots.txt`, and a standalone `404.html`
- Self-hosted fonts via Fontsource — no external font requests at runtime
- README, Git/GitHub guide, and Netlify/Vercel deployment instructions

---

## Prerequisites

Install:

1. **Node.js** `^20.19.0` or `>=22.12.0` (required by Vite 8)
2. **npm** (included with Node.js)
3. **Git** (for version control and deployment)
4. A code editor such as VS Code

Check your versions:

```powershell
node --version
npm --version
git --version
```

> On this Windows machine, PowerShell blocks `npm.ps1`. If you see `npm.ps1 cannot be loaded`, use `npm.cmd` instead of `npm` for every command below, or switch the terminal to Command Prompt.

---

## Quick start

Open a terminal in the project folder:

```powershell
cd "C:\Users\induk\OneDrive\Desktop\portfolio"
npm install
npm run dev
```

Vite prints a local address, usually:

```text
http://localhost:5173/
```

Open it in a browser. Stop the server with `Ctrl + C`.

### Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the Vite development server with hot reload |
| `npm run lint` | Runs Oxlint over the source |
| `npm run build` | Creates an optimised production build in `dist/` |
| `npm run preview` | Serves the production build locally for a final check |
| `node scripts/capture-live-site.mjs <url> <output.webp>` | Optional: captures a screenshot of a deployed project with Puppeteer |

Typical final check:

```powershell
npm.cmd run lint
npm.cmd run build
npm.cmd run preview
```

Then open the URL printed by `preview` (usually `http://localhost:4173`).

---

## Project structure

```text
portfolio/
├─ public/
│  ├─ favicon.svg
│  ├─ apple-touch-icon.png
│  ├─ og-image.png
│  ├─ site.webmanifest
│  ├─ robots.txt
│  ├─ 404.html
│  └─ images/
│     ├─ profile.webp
│     ├─ profile-placeholder.svg   (unused fallback)
│     └─ projects/
│        ├─ researchlens-ai.svg
│        ├─ shopx.svg
│        ├─ prabhas-universe.webp
│        ├─ restaurant-website.webp
│        ├─ smart-attend.svg
│        └─ portfolio-preview.webp
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Footer.jsx
│  │  ├─ SectionHeading.jsx
│  │  ├─ ProjectCard.jsx
│  │  ├─ SkillGroup.jsx
│  │  ├─ SocialLinks.jsx
│  │  ├─ BrandIcons.jsx
│  │  └─ Reveal.jsx
│  ├─ sections/
│  │  ├─ Hero.jsx
│  │  ├─ About.jsx
│  │  ├─ Skills.jsx
│  │  ├─ Projects.jsx
│  │  ├─ OpenSource.jsx
│  │  ├─ Education.jsx
│  │  ├─ LearningJourney.jsx
│  │  └─ Contact.jsx
│  ├─ data/
│  │  ├─ profile.js
│  │  ├─ projects.js
│  │  └─ skills.js
│  ├─ hooks/
│  │  └─ useActiveSection.js
│  ├─ utils/
│  │  └─ links.js
│  ├─ styles/
│  │  ├─ variables.css
│  │  ├─ global.css
│  │  ├─ components.css
│  │  └─ sections.css
│  ├─ App.jsx
│  └─ main.jsx
├─ scripts/
│  └─ capture-live-site.mjs
├─ index.html
├─ package.json
├─ vite.config.js
├─ .gitignore
└─ README.md
```

`puppeteer-core` is a dev-only dependency used by the optional screenshot helper. It uses the Chrome installation at `C:\Program Files\Google\Chrome\Application\chrome.exe`; adjust the `chrome` path at the top of the script if yours is elsewhere.

### How the pieces fit together

- **`src/main.jsx`** is the entry point. It imports the fonts and CSS files, then mounts `<App />` inside React's `StrictMode`.
- **`src/App.jsx`** is the page layout: skip link, background decoration, navbar, all sections in order, and the footer.
- **`src/sections/*`** render the big page areas. They import reusable components and read content from `src/data/*`.
- **`src/components/*`** are small, reusable pieces such as cards, headings, social links, and the project card.
- **`src/data/*`** is the single source of truth for editable content. Change text here instead of hunting through JSX.
- **`src/hooks/useActiveSection.js`** watches scroll position and tells the navbar which section is active.
- **`src/components/Reveal.jsx`** reveals content on scroll once; reduced-motion users see it immediately.
- **`src/styles/variables.css`** holds colours, fonts, spacing, radii, and shadows.
- **`src/styles/global.css`** holds the reset, page background, accessibility helpers, and reduced-motion rules.
- **`src/styles/components.css`** styles shared components.
- **`src/styles/sections.css`** styles the individual sections and responsive layouts.

React renders data in one direction:

```text
data (arrays/objects) → .map() → component props → JSX → CSS
```

Examples:

```jsx
{projects.map((project) => (
  <ProjectCard key={project.id} project={project} />
))}
```

If you add an item to the array, a new card appears automatically.

---

## Customise your content

### 1. Name, bio, headline, availability

Open **`src/data/profile.js`**.

The important fields are:

```js
name, displayName, initials, role, shortRole, shortBio
hero: { eyebrow, titleLead, titleAccent, intro, learningNow, foundation }
availability, focusAreas
about: { lead, paragraphs, principles, quickFacts }
```

Search for `TODO` to find the remaining unfinished fields.

### 2. Photo

The site currently uses the real photograph at `public/images/profile.webp`:

```js
photo: '/images/profile.webp',
photoAlt: 'Rushwanth Varma Indukuri, wearing a light patterned shirt, looking to the side.',
```

To replace it:

1. Add the new image to `public/images/` — for example `public/images/profile.jpg`.
2. Use a portrait crop around **4:5**, at least **800 × 1000 px**, ideally under 400 KB.
3. In `src/data/profile.js`, update `photo` and write a specific `photoAlt`.
4. Run the site and check the crop on mobile and desktop.

`public/images/profile-placeholder.svg` is now unused and can be deleted. The original square upload (`ebd6e7be-46b8-480c-be21-689da133f88c.jpeg`) is kept in the project root as a local source file and is excluded from Git; you can delete it once you are happy with `profile.webp`. Do not replace the real photograph with a stock image of another person on a personal portfolio.

### 3. Email, location, GitHub, LinkedIn

`src/data/profile.js` already contains the confirmed contact details:

```js
location: 'Bhimavaram, India',
email: 'indukurirushwanth@gmail.com',
socials: [
  { label: 'GitHub', url: 'https://github.com/indukurirushwanth-coder', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rushwanth-varma-a20a1243b', icon: 'linkedin' },
]
```

Rules:

- Include `https://` in social URLs, otherwise they are treated as invalid and shown as placeholders.
- Use a real email address, not a reserved `example.com` address. The form refuses to open a mail draft while the email is a placeholder.
- Keep `emailPlaceholder` and `locationPlaceholder` set to `false` once real values are present.
- If you change your email or social handle later, update this file only — the navbar, hero, contact card, and footer all read from it.

### 4. Education

The institution and city are filled in. The degree/program, dates, and coursework are unknown, so they are still placeholders.

Find `education.entries` in `profile.js`:

```js
{
  institution: 'NxtWave Institute of Advanced Technology',
  program: 'Add your degree or program',
  period: 'Add start year – end year',
  location: 'Bhimavaram, India',
  coursework: ['Add relevant coursework', 'Add a second subject', 'Add a third subject'],
  placeholder: true,
  institutionPlaceholder: false,
  programPlaceholder: true,
  periodPlaceholder: true,
  locationPlaceholder: false,
  courseworkPlaceholder: true,
}
```

When you have confirmed information:

- Replace the program and period strings.
- Replace the coursework items with real subjects.
- Set `programPlaceholder`, `periodPlaceholder`, and `courseworkPlaceholder` to `false`.
- Set `placeholder: false` when no unfinished fields remain. This removes the edit note and the dotted placeholder styling.
- Do **not** invent a degree, grade, or graduation date.

### 5. Add or edit a project

Open **`src/data/projects.js`**. Copy one project object and edit:

```js
{
  id: 'unique-kebab-case-id',
  title: 'Project title',
  tagline: 'One short sentence',
  description: 'What it is, honestly.',
  status: 'in-progress',          // "live" | "in-progress" | "concept"
  statusLabel: 'In progress',
  year: '2026',
  featured: false,                 // reserved for future sorting
  image: '/images/projects/my-project.webp',
  imageAlt: 'Describe what the screenshot shows',
  technologies: ['React', 'CSS'],
  repoUrl: 'https://github.com/...', // leave empty if not published
  liveUrl: 'https://...',           // leave empty if not deployed
  problem: 'The problem or design challenge.',
  solution: 'What you built or plan to build.',
  currentStatus: 'Be precise about what works and what does not.',
  lessons: 'What you learned.',
  nextSteps: ['Concrete next step'],
}
```

Important:

- Only add a `repoUrl` or `liveUrl` after you have opened and verified the link.
- Do not describe unimplemented features as finished. Put future ideas in `nextSteps`.
- Empty links automatically render as “Repo soon” / “Demo soon” spans, not broken links.
- Add the image to `public/images/projects/`.
- Use **800 × 500** (or 1600 × 1000) for a 16:10 card, ideally WebP under 250 KB.
- `.webp`, `.png`, `.jpg`, and `.svg` are all supported by the `<img>` tag.

Filtering is automatic for the three statuses. If you add a fourth status, also update:

1. `projectFilters` in `projects.js`
2. `statusStyles` in `projects.js`
3. The matching colour class in `src/styles/components.css`
4. The comparison in `src/components/ProjectCard.jsx` if needed

Current counts:

- All: 6
- Live: 3
- In progress: 2
- Concepts: 1

### 6. Replace project screenshots

Put the new file in `public/images/projects/` and update the project's `image` and `imageAlt` fields.

The three live projects already use real captures: `researchlens-ai.webp` (the live sign-in screen), `prabhas-universe.webp`, and `restaurant-website.webp`. If you redeploy any of them, take a fresh screenshot so the card stays accurate.

The included helper can capture a 1600 × 1000 viewport:

```powershell
node scripts/capture-live-site.mjs https://your-project.example.com public/images/projects/your-project.webp
```

Review the screenshot before committing it; a sign-in screen is honest for a gated app, but it should still represent the project clearly.

If you change the portfolio design substantially, regenerate `public/images/projects/portfolio-preview.webp` from the new site.

### 7. Skills

Open **`src/data/skills.js`**.

Each skill uses one qualitative level:

- `working` — Working knowledge
- `practising` — Practising
- `learning` — Currently learning
- `exploring` — Exploring

There are deliberately **no percentages or progress bars**, because those numbers are usually invented. Adjust the names and levels honestly.

### 8. Learning journey, milestones, and achievements

In `profile.js`:

- `learning.tracks` controls the four learning cards.
- `learning.milestones` controls the “Next milestones” list.
- `learning.achievements` is intentionally empty. Add only real, verifiable achievements:

```js
achievements: [
  {
    title: 'Course or award name',
    detail: 'What you completed or received',
    year: '2026',
  },
]
```

- `openSource.roadmap` is a plan, not a contribution log. Only add verified open-source contributions when a pull request is actually merged.

### 9. Page metadata and social preview

Edit **`index.html`**:

- `<title>` and `<meta name="description">`
- Open Graph and Twitter tags
- JSON-LD Person data (name, job title, email, location, social links)
- Favicon / manifest links

After deployment, change the relative Open Graph image paths:

```html
<meta property="og:image" content="https://your-domain.com/og-image.png" />
<meta name="twitter:image" content="https://your-domain.com/og-image.png" />
```

Most social platforms require a full URL for previews. You may also add a canonical URL and a sitemap once you have a domain:

```html
<link rel="canonical" href="https://your-domain.com/" />
```

The included `og-image.png` is **1200 × 630** and the Apple touch icon is **180 × 180**. Replace them with matching designs if you rebrand.

---

## Contact form: what actually happens

There is **no backend**.

1. The visitor fills in name, email, and message.
2. JavaScript validates the fields on submit (and on blur after a value exists).
3. Invalid fields receive inline errors and the first invalid field is focused.
4. When everything is valid, the browser opens the visitor's own email app using a `mailto:` URL with a prefilled subject and body.
5. The success message explicitly says that nothing has been sent until the visitor presses **Send** in their email app.

This is why you will never see a fake “message delivered” confirmation. The form also works if the user's device has a mail client configured; the status message offers a direct email link as a fallback.

### Connecting a real form service later

If you want messages to send without opening an email app, use a form service or a serverless function. A secure pattern:

1. Create the form with a provider such as Formspree, Web3Forms, or Resend.
2. Store the form endpoint in an environment variable, for example `VITE_FORM_ENDPOINT` in `.env.local`.
3. Read it in code with `import.meta.env.VITE_FORM_ENDPOINT`.
4. On submit, `POST` the fields with `fetch`, then show the success state **only after a successful response**.
5. Keep any private API key in a serverless function, not in frontend code. Vite environment variables are bundled and visible to visitors.
6. Keep `.env.local` and all `.env*` files out of Git. `.gitignore` already excludes them.
7. Update the privacy copy in `profile.contact.formNote`.

A public form endpoint is not a secret in the same way an API key is, but you should still protect it with the provider's spam controls (hCaptcha, Turnstile, origin restrictions, etc.). If you need a secret token, proxy the request through Netlify Functions, Vercel Functions, or another server.

The current mailto form is a legitimate, fully working implementation; it simply delegates the actual send to the visitor's email client.

---

## Accessibility and performance notes

Implemented:

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`, `figure`, `article`)
- Skip-to-content link with working focus movement
- Visible `:focus-visible` states
- Descriptive alt text on content images
- Active navigation state with `aria-current="location"`
- Mobile menu with `aria-expanded`, `aria-controls`, Escape to close, and focus return
- Project filter buttons with `aria-pressed` and a live result count
- Expandable project details with `aria-expanded`, `aria-controls`, and a labelled region
- Form labels, required fields, inline errors, `aria-invalid`, and live status messages
- `prefers-reduced-motion` support for all entrance and ambient animations
- Contrast-reviewed dark palette
- Responsive layouts down to 320 px with no horizontal overflow
- Lazy loading for non-critical project images
- Self-hosted fonts and local image assets
- No tracking scripts, cookies, or third-party analytics

Checks performed during the build:

- `npm run lint` — passed
- `npm run build` — passed
- Headless Chrome at 1440 × 900, 768 × 900, 390 × 844, and 320 × 700 — no horizontal overflow
- Project filters and details expanded correctly; the current six-project data resolves to All 6, Live 3, In progress 2, Concepts 1
- Mobile menu opened, closed on Escape, and closed after navigation
- Skip link moved focus to `#main-content`
- Form validation rejected empty and invalid values; a valid submission generated a mailto draft state
- Axe automated accessibility scan at desktop, mobile, and 320 px — **0 reported violations** (some contrast checks were marked “incomplete” because the cards use gradients; the palette was reviewed manually)
- No page-load console errors or warnings in the checks above

Not performed:

- Lighthouse scoring
- Testing on a physical phone or with a real screen reader
- A real email delivery test (the implementation intentionally uses mailto; no server side exists)

A `mailto:` request will appear as aborted in headless Chrome because there is no email handler. That is expected, not a site error.

---

## Git and GitHub — step by step

The project is currently **not initialized as a Git repository and has not been pushed anywhere**. The commands below are for you to run after reviewing the files. I cannot access your GitHub account, so I cannot verify a push.

### 1. Review what will be committed

```powershell
cd "C:\Users\induk\OneDrive\Desktop\portfolio"
git status
```

If Git says “not a git repository”, initialize it first:

```powershell
git init
```

### 2. Set your Git identity (once per machine, only if needed)

```powershell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Use the email associated with GitHub. If you want to keep your personal email private, GitHub provides a `@users.noreply.github.com` address in **Settings → Emails**.

### 3. Check that secrets and generated files are ignored

The included `.gitignore` excludes:

- `node_modules/`
- `dist/`
- `.env` / `.env.*` (except `.env.example`)
- editor folders, logs, OS files, and host caches

Run:

```powershell
git status --short
```

You should **not** see `node_modules`, `dist`, or any `.env` file. If you ever add a form-service key, keep it in `.env.local` and never force-add it.

If you accidentally commit a secret, rotate/revoke it immediately. Removing the file in a later commit is not enough because old commits still contain it.

### 4. Make the first commit

```powershell
git add .
git commit -m "Build personal portfolio with React and Vite"
git branch -M main
```

### 5. Create an empty GitHub repository

1. Go to <https://github.com/new>.
2. Enter a repository name, for example `portfolio`.
3. Choose Public or Private.
4. **Do not** add a README, `.gitignore`, or license — those would create commits that conflict with your local history.
5. Click **Create repository**.

GitHub then shows a remote URL similar to:

```text
https://github.com/YOUR-USERNAME/portfolio.git
```

### 6. Connect the remote and push

Replace the placeholders with your actual username and repository name:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git remote -v
git push -u origin main
```

On the first push, Git may open a browser sign-in or ask for a **Personal Access Token (PAT)**. Paste the token into the password prompt — never into a source file or chat message.

### 7. Verify

Open the repository in your browser and confirm the files and commit are there. Only then should you consider the push successful.

### Everyday workflow after that

```powershell
git status
git add .
git commit -m "Describe what changed"
git push
```

Pull before starting work if you also edit on GitHub or another machine:

```powershell
git pull
```

---

## Deploy to Netlify

1. Push the project to GitHub first.
2. Sign in at <https://app.netlify.com/>.
3. Choose **Add new project → Import an existing project**.
4. Connect GitHub and select your portfolio repository.
5. Use these build settings:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Framework preset | Vite (if offered) |

6. Under environment settings, set the Node version if the default is too old:

```text
NODE_VERSION = 20.19.0
```

(or a newer supported 22.x version).

7. Click **Deploy site**.
8. Netlify gives you a public URL such as `https://your-site.netlify.app`.
9. Open it, test navigation, filters, images, and the contact form.
10. Future pushes to the connected branch trigger automatic redeploys. You can also run a manual deploy from the Netlify dashboard.

The included `public/404.html` is copied into `dist/` and is used for unknown paths on static hosting.

If you later add React Router, you will need a redirect rule so client-side routes do not return a host-level 404:

```toml
# netlify.toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

There is no router in this version, so that rule is not required today.

---

## Deploy to Vercel

1. Push the project to GitHub first.
2. Sign in at <https://vercel.com/new>.
3. Import the repository.
4. Vercel normally detects Vite. Confirm:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |

5. If needed, set the Node.js version to **22.x** in **Project Settings → General**.
6. Click **Deploy**.
7. Vercel provides a public URL such as `https://your-project.vercel.app`.
8. Future pushes to the connected branch deploy automatically.

For a single-page site with hash navigation and public assets, no rewrite is required. If you later add client-side routing, add a Vercel rewrite to `/index.html` for non-file routes.

After deployment, update the Open Graph image URLs in `index.html` to the full public URL, then commit and push. Re-test the social preview using a debugger tool if the old image is cached.

### Deployment troubleshooting

- **Build fails with an unsupported Node version:** set Node to `20.19+` or `22.12+`. Vite 8 requires it.
- **Build fails on a missing module:** run `npm ci` locally, then build again. Never commit `node_modules`.
- **Images or favicon return 404 after deploy:** paths are case-sensitive on Linux hosts. Use exactly `/images/projects/...` and match the filename casing.
- **Site works locally but not at a subpath:** this project assumes deployment at `/`. If you host under `/portfolio/`, set `base: '/portfolio/'` in `vite.config.js` and update internal asset paths.
- **Blank page:** open DevTools → Console. Usually it is an import typo or a runtime error. Run `npm run dev` locally and fix it there first.
- **Contact form does not send automatically:** that is intentional. It opens the visitor's mail app. Connect a form service if you need direct delivery.
- **Old social preview:** social platforms cache OG images. Re-scrape the URL after redeployment.

---

## Common local troubleshooting

### `npm.ps1 cannot be loaded`

PowerShell's execution policy is blocking npm's wrapper on this machine. Use:

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run build
```

Alternatively, use Command Prompt or change the execution policy for your user account after understanding the security implications:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### `vite is not recognized`

Dependencies are missing:

```powershell
npm install
```

### Port already in use

Vite will offer another port, or you can specify one:

```powershell
npm run dev -- --port 3000
```

### Styles do not update

Stop the dev server with `Ctrl + C`, restart it, then hard-refresh the browser (`Ctrl + Shift + R`).

### OneDrive sync issues

This project lives inside OneDrive. If file watchers behave strangely or `node_modules` syncs slowly:

1. Stop the dev server.
2. Move the project to a local folder such as `C:\dev\portfolio`.
3. Run `npm install` again there.

Never commit `node_modules` or `dist` regardless of where the project lives.

---

## Remaining personal details to fill in

These are the only intentionally unfinished content areas:

- [ ] **Degree or program** — replace the placeholder in `education.entries[0].program`
- [ ] **Education dates** — replace `period`
- [ ] **Coursework** — replace the three placeholder subjects
- [ ] Set `placeholder: false` and the relevant field flags once education is complete
- [ ] **Achievements** — add only verified courses, awards, or merged contributions
- [ ] **Portfolio project links** — add the repository and deployment URLs after publishing
- [ ] **ShopX demo** — add a live URL only if a public deployment exists
- [ ] **Open Graph image URL** — make it absolute after deployment
- [ ] Optional: canonical URL, sitemap, custom domain

Already confirmed and filled in:

- Name, role, availability, location
- Email, GitHub, LinkedIn
- Profile photograph
- Institution: NxtWave Institute of Advanced Technology
- Six project descriptions, statuses, stacks, and verified links
- Real screenshots for the three live projects

---

## Credits

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Lucide](https://lucide.dev/) icons (ISC license)
- [Fontsource](https://fontsource.org/) for self-hosted Inter and Space Grotesk (SIL Open Font License)
- Custom GitHub and LinkedIn marks are simple inline SVG shapes included in `BrandIcons.jsx`

The written content and personal project data belong to Rushwanth Varma Indukuri. Add a license of your choice before distributing the code as a template.
