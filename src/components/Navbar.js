import React, { useState } from 'react'
import Logo from '../images/Logo .svg'

export default function Navbar() {

  const [menu, setMenu] = useState(false)

  const toggleMenu = () =>{
    setMenu(!menu);
  }

  return (
    <nav className={`navbar ${menu ? "open": ""}`}>
        <a href="/" className='logo'>
          <img src={Logo} alt='little-lemon-logo'/>
        </a>
        <div  className='menu-icon' onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        <ul className={`nav-links ${menu ? "visible": ""}`} >
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Services</a>
          </li>
          <li>
            <a href='/'>Menu</a>
          </li>
          <li>
            <a href='/'>Reservations</a>
          </li>
          <li>
            <a href='/'>Order Online</a>
          </li>
        </ul>

    </nav>
  )
}
