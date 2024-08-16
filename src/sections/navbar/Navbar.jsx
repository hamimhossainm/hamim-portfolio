import React from 'react'
import logo from '../../assets/logo.jpg'
import Data from './Data'
import './navbar.css'
import { IoMdColorPalette } from "react-icons/io";


const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
          <a href="index.html" className='nav__logo'>
            <img src={logo} alt="Logo" />
          </a>

          <ul className="nav__menu">
            {
              Data.map((item)=>(
                <li key={item.id}><a href={item.link}>{item.title}</a></li>
              ))
            }
          </ul>

          <button id='theme__icon' ><IoMdColorPalette /></button>
        </div>
    </nav>
  )
}

export default Navbar
