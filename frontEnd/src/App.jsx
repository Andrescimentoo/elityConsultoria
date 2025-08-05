import React from 'react'
import './App.css'
import { GerarLeads } from './components/geranciadorDeLeads/gerarLeads/gerarLeads.jsx'
import { Titles } from './components/geranciadorDeLeads/titleFazerConsulta/title.jsx'


export function App() {
  
  return (
    <>
      <section>
        <header>
          <Titles />
        </header>
  
        <main>
          <GerarLeads/>
        </main>
       
      </section>
    </>
  )
}

