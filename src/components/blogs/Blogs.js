import React from 'react'
import styled from 'styled-components';
import SingleBlog from './SingleBlog';

const Blogs = ({ blogs }) => {
  return (
    <BlogsWrapper>
      <div className="section-center blogs-center">
        {blogs.map(item => (
          <SingleBlog key={item.id} {...item} />
        ))}
      </div>
    </BlogsWrapper>
  )
}

const BlogsWrapper = styled.section`
  @media (min-width: 576px) {
    .blogs-center {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      column-gap: 2rem;
    }
  }
`;

export default Blogs
