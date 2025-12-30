import React from 'react'

import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'
import Nav from './components/Nav.jsx'
import Experience from './components/Experience.jsx'
import Project from './components/Project.jsx'
import Education from './components/Education.jsx'
import Certtraine from './components/Cert&traine.jsx'
import Getin from './components/Getin.jsx'

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Skills />
      <Experience />
      <Project />
      <Education />
      <Certtraine />
      <Getin />
    </div>
  )
}

export default App
