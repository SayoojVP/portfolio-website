import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 5rem 0 2rem;
`;

const ProjectsContainer = styled.div`
  overflow: initial;
`;

const ProjectsContent = styled.div`
  padding: 0 1.5rem;
`;

const ProjectsHeader = styled.div`
  margin-bottom: var(--mb-2);
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled.div`
  background-color: var(--container-color);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-8px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-0-75);
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
`;

const ProjectDescription = styled.p`
  margin-bottom: var(--mb-1-5);
  line-height: 1.6;
`;

const ProjectData = styled.div`
  padding: 1.5rem;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: var(--mb-1-5);
`;

const TechTag = styled.span`
  background-color: var(--first-color-lighter);
  color: var(--first-color);
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  color: var(--first-color);
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  border-bottom: none;

  svg {
    font-size: 1rem;
  }
  
  &:hover {
    color: var(--first-color-alt);
    opacity: 1;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  transition: transform 0.4s;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with payment processing, inventory management, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      githubLink: 'https://github.com/yourusername/ecommerce-platform',
      demoLink: 'https://your-ecommerce-demo.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity tool that helps teams organize projects, track progress, and collaborate effectively.',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      githubLink: 'https://github.com/yourusername/task-manager',
      demoLink: 'https://your-task-app-demo.com',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive web application that displays current weather data and forecasts for cities worldwide.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      githubLink: 'https://github.com/yourusername/weather-dashboard',
      demoLink: 'https://your-weather-demo.com',
    },
    {
      id: 4,
      title: 'Personal Finance Tracker',
      description: 'An application to help users track expenses, set budgets, and visualize spending habits.',
      technologies: ['JavaScript', 'D3.js', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      githubLink: 'https://github.com/yourusername/finance-tracker',
      demoLink: 'https://your-finance-demo.com',
    },
  ];

  return (
    <ProjectsSection className="section container" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">A selection of my most recent work</span>
      
      <ProjectsContainer className="container">
        <ProjectsContent>
          <ProjectsGrid className="projects__container">
            {projects.map((project) => (
              <ProjectCard key={project.id} className="project__card">
                <ProjectImage 
                  src={project.image} 
                  alt={project.title} 
                  className="project__img"
                />
                <ProjectData>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechList>
                    {project.technologies.map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </TechList>
                  <ProjectLinks>
                    <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </ProjectLink>
                    <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Demo
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectData>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </ProjectsContent>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
