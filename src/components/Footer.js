import React from 'react'
import styled from 'styled-components';
import SocialLinks from '../constants/socialLinks';

const Footer = ({color}) => {
  return (
    <FooterWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={color} fillOpacity="1" d="M0,128L34.3,154.7C68.6,181,137,235,206,224C274.3,213,343,139,411,133.3C480,128,549,192,617,181.3C685.7,171,754,85,823,85.3C891.4,85,960,171,1029,181.3C1097.1,192,1166,128,1234,90.7C1302.9,53,1371,43,1406,37.3L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
      <h3>You've reached the bottom of the page</h3>
      <SocialLinks footer styleClass="footer-icons" />
      <p>Copyright &copy; {new Date().getFullYear()} Alex Leung</p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background: var(--clr-black);
  text-align: center;
  color: white;
  outline: none;

  h3{
    width: 80vw;
    margin: 0 auto;
  }
  p {
    font-size:0.9rem;
    padding-bottom: 2rem;
  }
  svg{
    display: block;
  }
  .footer-icons {
    padding-bottom: 5rem;
    width: 15rem;
    margin: 3rem auto 0;
  }
  .footer-icons a {
    color: white;
    font-size: 2.5rem;
  }

  @media (min-width: 768px) {
    .footer-icons {
      width: 20rem;
    }
    
    .footer-icons a {
      color: white;
      font-size: 3rem;
    }
  }
`;

export default Footer
