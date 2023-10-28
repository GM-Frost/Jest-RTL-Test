import React from 'react'

import './App.css'
import Application from './components/application/Application'
import Skills from './components/skills/Skills'
import Counter from './components/counter/Counter'
import Multiselect from './components/multiselect/Multiselect'
import AppProviders from './providers/AppProviders'

function App() {
  return (
    <>
      <AppProviders>
        <Skills skills={['React', 'HTML']} />
        <div className="py-10"></div>
        <Application />
        <div className="py-10"></div>
        <Counter />
        <div className="py-10"></div>
        <Multiselect />
      </AppProviders>
    </>
  )
}

export default App
