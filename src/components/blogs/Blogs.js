import React from 'react'
import styled from 'styled-components';
import SingleBlog from './SingleBlog';

const Blogs = ({ blogs }) => {
  return (
    <BlogsWrapper>
      <h2>Blog Articles</h2>
      <div className="section-center blogs-center">
        {blogs.map(item => (
          <SingleBlog key={item.id} {...item} />
        ))}
      </div>
    </BlogsWrapper>
  )
}

const BlogsWrapper = styled.section`
padding: 5rem 0;
h2{
  text-align:center;
  margin-bottom:3rem;
  font-family: var(--ff-title);
}
  @media (min-width: 576px) {
    .blogs-center {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      column-gap: 2rem;
    }

    .section-center{
      width: 90vw;
        grid-auto-rows: 1fr;

    }
  }
`;

export default Blogs
