import { lazy, Suspense } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

// Lazy load components below the fold for better initial mobile performance
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

// Simple loading skeleton/spinner for Suspense
const SectionLoader = () => (
  <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>
    <div className="loader">Loading...</div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />

      <Suspense fallback={<SectionLoader />}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Suspense>

      {/* Global page footer — sits below all sections */}
      <footer className="site-footer" role="contentinfo">
        <p>© 2025 Nithish Kumar P. Built with React &amp; ❤️</p>
      </footer>
    </div>
  )
}

export default App
