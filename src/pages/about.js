import React from 'react'
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import Layout from "../components/Layout";

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        id
        title
        info
        image {
          childImageSharp {
            fluid (rotate: 90){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    experience: allStrapiExperiences {
      nodes {
        company
        date
        desc {
          id
          name
        }
        id
        position
      }
    }
  }
`

const about = ({ data: { about: { nodes } } }) => {
  const { title, info, image } = nodes[0];
  return (
    <Layout>
      <AboutWrapper className="about-page">
        <div className="section-center">
          <article className="about-title about-intro">{title}
          </article>
          <article className="about-center">
            <div>
              <Image fluid={image.childImageSharp.fluid} className="about-img"
                objectFit="cover"
                alt="photo of Alex" />
            </div>
            <div>
              <h2 className="about-title" style={{ color: '#AB5232' }}>Biograph</h2>
              <p className="about-info">{info}</p>
            </div>
          </article>
        </div>
      </AboutWrapper>
    </Layout>
  )
}

const AboutWrapper = styled.section`
padding: 3rem 0;
margin-bottom: 5rem;
  .about-title {
    font-size: 2.7rem;
    line-height: 1.3;
    font-family: var(--ff-title);
    margin-bottom: 1rem;
  }
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

export default about
