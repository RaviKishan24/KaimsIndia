import { useState } from 'react'
import './App.css'
import Footer from './Footer'
import Contactus from './Contactus'
import Navbar from './Navbar'
import Hero from "./Hero"
import About from './About'
import Service from './Service'


function App() {


  return (
    <>

      <Navbar />
      <Hero />
      <Service />
      <About />
      <Contactus />

      <Footer />

    </>
  )
}

export default App
