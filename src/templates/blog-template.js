import React from 'react';
import { graphql, Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Layout from '../components/Layout';

const BlogTemplate = ({ data }) => {
  console.log(data);
  const { blog: { content } } = data;
  console.log(content);

  return (
    <Layout>
      <BlogTempWrapper>
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" >blog</Link>
        </div>
      </BlogTempWrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: {eq: $slug}){
      content
    }
  }
`;

const BlogTempWrapper = styled.div`
padding:5rem 0;
  ul{
    margin: 2rem 1rem;
    display: inline-block;
  }
  ul li {
    padding: 0.5rem 0;
    list-style: circle;
    
  }
  img{
    width:100%;
    height: auto;
    margin: 3rem 0;
  }

`;

export default BlogTemplate
