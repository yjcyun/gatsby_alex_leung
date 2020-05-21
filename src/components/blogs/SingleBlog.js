import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const SingleBlog = ({ title, id, image, date, category, slug, desc }) => {
  return (
    <BlogWrapper>
      <Link to={`blogs/${slug}`} key={id} className="blog">
        <article>
          <Image fluid={image.childImageSharp.fluid} className="blog-img" alt="blog" />
          <div className="blog-card">
            <h4>{title}</h4>
            <div className="blog-footer">
              <p>{category}</p>
            </div>
          </div>
        </article>
      </Link>
    </BlogWrapper>

  )
}

const BlogWrapper = styled.section`
  .blog{
    display: block;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
  }

  .blog:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .blog article {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .blog-card {
    display: grid;
    grid-template-rows: auto 1fr auto;
    color: black;
    padding: 1.5rem 1rem;
  }

  .blog-img{
    height: 15rem;
  }

  .blog-footer {
    display:flex;
    align-items: center;
    color: grey;
  }
  @media (min-width: 576px) {
    .blog-img {
      height: 17.5rem;
    }
  }
`;

export default SingleBlog
