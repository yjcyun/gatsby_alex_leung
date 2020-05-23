import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import SocialLinks from '../constants/socialLinks';

const Hero = () => {
  useEffect(()=>{
    AOS.init({
      duration:2000
    })
  })
  return (
    <HeroWrapper>
      <div className="section-center hero-center">
        <div className="hero-info">
          <div data-aos="fade-up">
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
  font-size: 4rem; 
  letter-spacing: 0.2rem; 
}

.hero-info h3 {
  max-width: 30rem;
  font-weight: 400;
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
