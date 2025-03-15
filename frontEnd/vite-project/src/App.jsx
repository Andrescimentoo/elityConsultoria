import React from 'react'
import './App.css'
import { Input } from './components/input/input.jsx'
import { Titles } from './components/title/title.jsx'


export function App() {
  
  return (
    <>
      <section>
        <header>
          <Titles />
        </header>
  
        <main>
          <Input />
        </main>
       
      </section>
    </>
  )
}

