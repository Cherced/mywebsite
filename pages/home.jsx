import React from 'react'
import { Header } from '../Components/Header'
import {Banner} from '../Components/Banner'
import {Community} from '../Components/Community'
import {Intro} from '../Components/Intro'
import { Proyects } from '../Components/Proyects'
import { Footer } from '../Components/Footer'

const home = () => {
  return (
    <React.Fragment>
    <Header />
    <Banner />  
    <Community />
    <Intro />
    <Proyects />
    <Footer />    
    </React.Fragment>
  )
}

export default home