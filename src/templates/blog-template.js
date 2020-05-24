import React from 'react';
import { graphql, Link } from 'gatsby';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const BlogTemplate = ({ data }) => {
  const { blog: { content,title } } = data;

  return (
    <Layout>
      <SEO title={title}/>
      <BlogTempWrapper>
        <div className="section-center blog-temp-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="blog-btn">
            <FaLongArrowAltLeft className="blog-icon" />
            <span>back to blog</span>
          </Link>
        </div>
      </BlogTempWrapper>
      <Footer color="#fff" />
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: {eq: $slug}){
      content
      title
    }
  }
`;

const BlogTempWrapper = styled.div`
padding: 5rem 0;
  h1{
    margin-bottom: 2rem;
  }
  h2,h3,h4,h5,h6 {
    margin-bottom:1.7rem;
  }
  ul{
    margin: 2rem 1rem;
    display: inline-block;
  }
  ul li {
    padding: 0.5rem 0;
    list-style: circle;
  }
  blockquote {
    background: lightgrey;
    border-radius: 10px;
    padding: 1rem;
    line-height:2;
    margin: 2rem 0;
    display: inline-block;
  }

  pre {
    background: #222;
    color: yellow;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    margin:2rem 0;
  }

  img{
  width:100%;
  height: auto;
  margin: 3rem 0;
  }

  p{
    line-height: 2;
    font-size:1.1rem;
  }
  .blog-temp-center {
    width: 85vw;
  }
  .blog-content {
    margin-bottom:2.5rem;
  }

  .blog-btn {
    color: black;
    text-transform:uppercase;
    letter-spacing:0.1rem;
    font-size: 1.3rem;
    margin-top: 2rem;
    color: var(--clr-black);
    box-shadow: 0 2px var(--clr-black);

  }

  .blog-btn:hover {
    color: rgba(233,33,99,1);
    box-shadow: 0 2px rgba(233,33,99,1);

  }

  .blog-btn span{
    margin-left: 1rem;
  }
`;

export default BlogTemplate
