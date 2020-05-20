import React from 'react'
import { graphql } from 'gatsby';
import Layout from "../components/Layout";
import Biograph from '../components/about/Biograph';

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

const about = ({ data: { about: { nodes: bio } } }) => {
  return (
    <Layout>
      <Biograph bio={bio} />
    </Layout>
  )
}

export default about
