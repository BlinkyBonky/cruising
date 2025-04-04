import React from 'react'
import { Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Excursions from './components/Excursions'
import BokaBay from './pages/BokaBay'
import Payment from './pages/Payment'

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<><Navbar />
        <Excursions /> </>}/>

        <Route path='/rafting' element={ <h1>Rafting</h1>} />
        <Route path='/Boka Bay' element={<BokaBay />} />
        <Route path='/:id/payment' element={<Payment />}></Route>
      </Routes>
      

    </>
  )
}

export default App