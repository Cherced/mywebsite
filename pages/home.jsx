import React from 'react'
import { Header } from '../Components/Header'
import {Banner} from '../Components/Banner'
import {AboutMe} from '../Components/AboutMe'
import { Proyects } from '../Components/Proyects'
import { Atom } from '../Components/Atom'
import { Footer } from '../Components/Footer'

const home = () => {
  return (
    <div className="homeContainer">
    <Header />
    <Banner /> 
    <AboutMe /> 
    <Proyects />
    <Atom />
    <Footer />    
    </div>
  )
}

export default home