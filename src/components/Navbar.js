import React from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import NavLinks from '../constants/links';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="toggle-btn">
            <FiAlignJustify />
          </button>
        </div>
        <NavLinks styleClass="nav-links" />
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  background: var(--clr-white);
  height: 5rem;
  display:flex;
  align-items: center;
  z-index:100;

  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .nav-header {
    display:flex;
    justify-content:space-between;
    align-items: center;
  }
  
  .nav-header img {
    margin-bottom: 0.375rem;
  }

  .toggle-btn {
    font-size: 2rem;
    background: transparent;
    border-color:transparent;
    color: var(--clr-black);
    cursor: pointer;
    transition: var(--transition);
    :focus{
      outline: none;
    }
  }

  .toggle-btn:hover {
    color: var(--clr-hover);
  }

  .nav-links {
    display: none;
  }

  @media (min-width: 768px) {
    .toggle-btn {
      display: none;
    }

    .nav-links {
      display: flex;
      justify-content: flex-end;
    }

    .nav-links li {
      margin-right: 2rem;
    }

    .nav-links a {
      text-transform: capitalize;
      color: var(--clr-black);
      font-weight: bold;
      transition: var(--transition);
      padding: 0.5rem 0;
    }

    .nav-links a:hover {
      color: var(--clr-hover);
      box-shadow: 0 2px var(--clr-black);
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
  }
`;
export default Navbar;


