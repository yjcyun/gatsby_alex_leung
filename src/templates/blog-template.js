import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
// import ReactMarkdown from 'react-markdown';

const BlogTemplate = () => {
  return (
    <div>
      blog template page
    </div>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: {eq: $slug}){
      content
    }
  }
`;

export default BlogTemplate
