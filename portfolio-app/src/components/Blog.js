import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const BlogSection = styled.section`
  padding: 5rem 0 2rem;
`;

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const BlogList = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 2.5rem;
`;

const BlogCard = styled.div`
  background-color: var(--container-color);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.4s;
  
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`;

const BlogHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--mb-1);
`;

const PostDate = styled.div`
  display: flex;
  align-items: center;
  color: var(--text-color-light);
  font-size: var(--small-font-size);
  
  svg {
    margin-right: 0.5rem;
    font-size: 0.85rem;
  }
`;

const BlogContent = styled.div`
  margin-bottom: var(--mb-1-5);
`;

const PostTitle = styled.h3`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-0-5);
  
  a {
    color: var(--title-color);
    border-bottom: none;
    transition: color 0.3s;
    
    &:hover {
      color: var(--first-color);
      opacity: 1;
    }
  }
`;

const PostDescription = styled.p`
  margin-bottom: var(--mb-1);
`;

const ReadMore = styled.a`
  display: inline-flex;
  align-items: center;
  color: var(--first-color);
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  border-bottom: none;
  
  svg {
    font-size: 0.75rem;
    margin-left: 0.25rem;
    transition: transform 0.3s;
  }
  
  &:hover {
    opacity: 1;
    
    svg {
      transform: translateX(4px);
    }
  }
`;

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Building a Responsive Portfolio with React',
      date: '15 Jun 2025',
      description: 'Learn how to create a responsive and attractive portfolio website using React, styled-components, and modern CSS techniques.',
      link: '#',
    },
    {
      id: 2,
      title: 'The Evolution of Modern JavaScript Frameworks',
      date: '02 May 2025',
      description: 'Examining how JavaScript frameworks have evolved over time and what we can expect in the coming years.',
      link: '#',
    },
    {
      id: 3,
      title: 'Optimizing Database Performance in Web Applications',
      date: '18 Apr 2025',
      description: 'Practical strategies to improve database performance that every developer should know about.',
      link: '#',
    },
    {
      id: 4,
      title: 'UI Design Trends for 2025',
      date: '03 Mar 2025',
      description: 'A look at the latest design trends that are shaping the future of user interfaces and digital experiences.',
      link: '#',
    },
    {
      id: 5,
      title: 'Implementing Authentication in React Applications',
      date: '22 Feb 2025',
      description: 'A step-by-step guide to implementing secure authentication in your React applications.',
      link: '#',
    },
    {
      id: 6,
      title: 'Best Practices for API Design',
      date: '15 Jan 2025',
      description: 'Learn how to design APIs that are efficient, maintainable, and developer-friendly.',
      link: '#',
    },
  ];

  return (
    <BlogSection className="section container" id="blog">
      <h2 className="section__title">Blog</h2>
      <span className="section__subtitle">My thoughts on development and design</span>
      
      <BlogContainer>
        <BlogList>
          {posts.map(post => (
            <BlogCard key={post.id}>
              <BlogHeader>
                <PostDate>
                  <FaCalendarAlt /> {post.date}
                </PostDate>
              </BlogHeader>
              
              <BlogContent>
                <PostTitle>
                  <a href={post.link}>{post.title}</a>
                </PostTitle>
                <PostDescription>
                  {post.description}
                </PostDescription>
              </BlogContent>
              
              <ReadMore href={post.link}>
                Read more <FaArrowRight />
              </ReadMore>
            </BlogCard>
          ))}
        </BlogList>
      </BlogContainer>
    </BlogSection>
  );
};

export default Blog;
