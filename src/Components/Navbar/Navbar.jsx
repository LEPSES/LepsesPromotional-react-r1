import React from 'react'
import './Navbar.css'
import { useState } from 'react';
import Logo from '../../assets/Logo.svg'
const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
 
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if(window.scrollY >=80)
    {
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={navbar ? 'nav active': 'nav'}>
      <div className="nav__brand">
       <img src={Logo} alt="" />
    </div>
      <ul className={active} style={{display:'flex',width:'35%',justifyContent:'space-around'}}>
        <li className="nav__item">
          <a href="#Home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#About" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#Team" className="nav__link">
            Team
          </a>
        </li>
        <li className="nav__item">
          <a href="#Launch" className="nav__link">
            Launch
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar