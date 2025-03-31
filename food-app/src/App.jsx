import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'
import './App.css'

function App() {

  return (
    <div>
      <Navbar />
        <Hero />
        <Food />
    </div>
  )
}

export default App
