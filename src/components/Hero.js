import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import SocialLinks from '../constants/socialLinks';

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="section-center hero-center">
        <div className="hero-info">
          <div>
            <h1>alex leung</h1>
            <h3>A software engineer at Square</h3>
            <SocialLinks />
          </div>
        </div>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
margin-top: -5rem;
padding-top: 5rem;
height: 100vh;
background: var(--clr-white);
position: relative;

.hero-center{
  height: 100%;
  width: 80vw;
  display: grid;
  align-items: center;
}

.hero-info h1 {
  font-weight: bold;
  font-family: var(--ff-primary);
  text-transform: uppercase;  
}

.hero-info h3 {
  max-width: 30rem;
}
@media (min-width: 768px) {
  .hero-info h1 {
    font-size: 8rem;
  }
  .social-links {
    width: 12rem;
  }
  .social-link {
    font-size: 3rem;
  }
}
`;

export default Hero
