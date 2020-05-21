import React from 'react'
import { graphql } from 'gatsby';
import Layout from "../components/Layout";
import Biograph from '../components/about/Biograph';
import Timeline from '../components/about/Timeline';

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
    timeline: allStrapiExperiences(sort: {fields: strapiId, order: DESC}) {
      nodes {
        company
        date
        desc {
          id
          name
        }
        id
        position
        strapiId
      }
    }
  }
`

const about = ({
  data: { about: { nodes: bio } },
  data: { timeline: { nodes: exp } }
}) => {
  return (
    <Layout>
      <Biograph bio={bio} />
      <Timeline exp={exp} />
    </Layout>
  )
}

export default about
