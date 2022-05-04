import React, {useState} from 'react'

export const Header = () => {
const [resume, setResume] = useState(false)
const [ menu, setMenu ] = useState(false)

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
      <p>
        I am a professional in business administration, the last 8 years of
        my life I have worked in all operational areas of a corporation,
        leading a company of civil projects, there I learned about
        programming, and I fell in love with the whole beautiful world
        computer science, so I am looking for an opportunity to demonstrate
        my capabilities and take my talents to another level, I believe in
        continuous learning as the most important added value of my profile,
        thanks for reading.
      </p>
      <a href="https://www.youtube.com/watch?v=2Z603ccaj74"><button className="button" type="text">MORE</button></a>
    </div>
    <ul className={`menu_items ${menu ? "show" : ""}`}>
      <li><a className="active" href="#">Servicios</a></li>
      <li><a href="#">Nosotros</a></li>
      <li><a href="#">Portafolio</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contáctenos</a></li>
    </ul>
    <span className="btn_menu" onClick={handleClickShowMenu}>
      <img src="/assets/images/Navbar.png" alt="Nav" />
    </span>
  </nav>
</header>
  )
}
