import React from 'react';
import { FaLinkedin, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon" />,
    url: 'https://www.linkedin.com'
  },
  {
    id: 2,
    icon: <FaTwitterSquare className="social-icon" />,
    url: 'https://www.twitter.com'
  },
  {
    id: 3,
    icon: <FaInstagramSquare className="social-icon" />,
    url: 'https://www.instagram.com'
  }
];

const links = data.map(link => (
  <li key={link.id}>
    <a href={link.url} className="social-link">
      {link.icon}
    </a>
  </li>
));

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ''}`}>
      {links}
    </ul>
  )
}