import React from 'react';
import { Link } from 'gatsby';

const data = [
  {
    id: 1,
    text: 'home',
    url: '/'
  },
  {
    id: 2,
    text: 'about',
    url: '/about'
  },
  {
    id: 3,
    text: 'blog',
    url: '/blog'
  },
  {
    id: 4,
    text: 'gallery',
    url: '/gallery'
  },
  {
    id: 5,
    text: 'contact',
    url: '/contact'
  }
];

const tempNavLinks = data.map(link => {
  return (
      <li key={link.id}>
        <Link to={link.url}>{link.text}</Link>
      </li>
  );
});

export default({styleClass})=>{
  return(
    <ul className={`nav-links ${styleClass? 'styleClass': ''}`}>
      {tempNavLinks}
    </ul>
  )
}