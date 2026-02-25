import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      {/* Global page footer — sits below all sections */}
      <footer className="site-footer" role="contentinfo">
        <p>© 2025 Nithish Kumar P. Built with React &amp; ❤️</p>
      </footer>
    </div>
  )
}

export default App
