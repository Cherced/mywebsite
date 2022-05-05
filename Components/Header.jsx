import React, {useState} from 'react'
import {useRouter} from 'next/router'

export const Header = () => {
const [resume, setResume] = useState(false)
const [ menu, setMenu ] = useState(false)
const router = useRouter()

const handleClickShowResume = () => {
  if (!menu) {
    setResume(!resume)
  } else {
    setMenu(!menu)
    setResume(!resume)
  }
}

const handleClickShowMenu = () => {
  console.log('clicked')
  if (!resume) {
    setMenu(!menu)
  } else {
    setResume(!resume)
    setMenu(!menu)
  }
}


  
  return (
<header>
  <nav className="menu">
    <span className="logo" onClick={handleClickShowResume}><img src="/assets/images/brand.png" alt="brand" /></span>
    <div className={`resume ${resume ? "show2" : ""}`}>
      <img src="/assets/images/brandIntro.png" alt="brandIntro" />
      <p>Frontend developer, with a degree in business administration, Croosfiter, lover of motorSports, and all the mecaninc staff, traveller, i belive on the continuous learning as fundamental principle of life , I have worked around 6 years in the administration of public civil infrastructure projects, with the pandemic I wanted to do a big change on my professional life, and I take the decision to make the a switch of professional career .</p>
      <p>I'm currently improving my technical skills in frontend technologies... HTML, CSS, JAVASCRIPT, a fan of Vercel and its Next.js framework, I am also currently in an intensive learning program to successfully meet that goal, his name is Platzi Master.</p>
      <p>my goal is to never stop learning, and if on this industry we have unicorns, I want to be the same pegasus!</p>
      <p>Thanks For Reading</p>
      <a onClick={() => (router.push('/VideoAboutMe'))}><button className="button" type="text">MORE</button></a>
    </div>
    <ul className={`menu_items ${menu ? "show" : ""}`}>
      <li><a className="active" href="#">Services</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
    <span className="btn_menu" onClick={handleClickShowMenu}>
      <img src="/assets/images/Navbar.png" alt="Nav" />
    </span>
  </nav>
</header>
  )
}
