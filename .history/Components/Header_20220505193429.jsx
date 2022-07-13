import React, {useState} from 'react'
import {useRouter} from 'next/router'

export const Header = () => {
const [ menu, setMenu ] = useState(false)
const router = useRouter()

const goContact = () => {
  router.push('/contactMe')
}

const handleClickShowMenu = () => {
    console.log('clicked')
    setMenu(!menu)
  }

  return (
<header id="header">
  <nav className="menu">
    <span className="logo"><img src="/assets/images/brand.png" alt="brand" /></span>
    <ul className={`menu_items ${menu ? "show" : ""}`}>
      <li><a className="active" href="#services"  onClick={handleClickShowMenu}>Services</a></li>
      <li><a href="#aboutMe"onClick={handleClickShowMenu}>About Me</a></li>
      <li><a href="#portfolio" onClick={handleClickShowMenu}>Portfolio</a></li>
      <li><a href="#" onClick={handleClickShowMenu}>Blog</a></li>
      <li><a onClick={goContact}>Contact Me</a></li>
    </ul>
    <span className="btn_menu" onClick={handleClickShowMenu}>
      <img src="/assets/images/Navbar.png" alt="Nav" />
    </span>
  </nav>
</header>
  )
}
