import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import OpenSource from './sections/OpenSource'
import Education from './sections/Education'
import LearningJourney from './sections/LearningJourney'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <div className="site-backdrop" aria-hidden="true">
        <div className="site-backdrop__grid" />
        <div className="site-backdrop__stars" />
        <div className="site-backdrop__orb site-backdrop__orb--one" />
        <div className="site-backdrop__orb site-backdrop__orb--two" />
        <div className="site-backdrop__orb site-backdrop__orb--three" />
      </div>

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <OpenSource />
        <Education />
        <LearningJourney />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
