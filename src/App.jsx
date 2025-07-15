import { useState } from 'react'

import './assets/style.css'
import Header from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Resume from './components/resume'

function App() {


  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Resume/>
    <Projects/>
    <Contact/>
      
    </>
  )
}

export default App
