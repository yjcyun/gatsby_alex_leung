import React from 'react';
import { FiAlignJustify} from 'react-icons/fi';
import NavLinks from '../constants/links';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav>
    <div>
      <img src={logo} alt="logo"/>
      <button><FiAlignJustify/></button>
      </div>
      <NavLinks />
    </nav>
  )
}

export default Navbar
