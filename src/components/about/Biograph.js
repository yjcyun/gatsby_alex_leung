import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';

const Biograph = (props) => {
  const { title, image, info } = props.bio[0];

  return (
    <div>
      <AboutWrapper className="about-page">
        <div className="section-center">
          <article className="about-title about-intro">
            {title}
          </article>
          <article className="about-center">
            <div>
              <Image fluid={image.childImageSharp.fluid} className="about-img"
                objectFit="cover"
                alt="photo of Alex" />
            </div>
            <div>
              <h2 className="about-title subtitle">Biograph</h2>
              <p className="about-info">{info}</p>
            </div>
          </article>
        </div>
      </AboutWrapper>
    </div>
  )
}

const AboutWrapper = styled.section`
padding: 3rem 0;
margin-bottom: 5rem;
  .about-img {
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  .about-info {
    text-align: left;
    line-height:1.8;
  }
  
  @media (min-width: 992px) {
    .about-center{
      display: grid;
      grid-template-columns: 2fr 3fr;
      column-gap: 4rem;
      align-items:center;
      padding-top: 2rem;
    }
    .about-title.about-intro {
      margin-bottom: 2rem;
    }
  }
`;

export default Biograph
