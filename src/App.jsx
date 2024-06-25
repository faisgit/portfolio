import React from 'react'
import Navbar from './components/navbar'
import { AboutMe } from './components/AboutMe'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/projects'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App