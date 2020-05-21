import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/Layout";
import Blogs from '../components/blogs/Blogs';

export const query = graphql`
  {
    blog:allStrapiBlogs(sort: {fields: date, order: DESC}) {
      nodes {
        category
        date(formatString: "MMMM Do, YYYY")
        desc
        id
        slug
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const blog = ({
  data: { blog: { nodes: blogs } }
}) => {
  return (
    <Layout>
      <Blogs blogs={blogs} />
    </Layout>
  )
}

export default blog
