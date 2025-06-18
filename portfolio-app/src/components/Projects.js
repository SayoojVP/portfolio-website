import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { FaGithub, FaExternalLinkAlt } from '../utils/iconExports';

const ProjectsSection = styled.section`
  padding: 5rem 0 2rem;
`;

const ProjectsContainer = styled.div`
  overflow: initial;
`;

const ProjectsContent = styled.div`
  padding: 0 1.5rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
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
      title: 'Xpenso - Expense Tracker',
      description: 'A comprehensive Android application designed to help users track their daily expenses, set budgets, and visualize spending patterns. Features include expense categorization, budget alerts, and detailed spending analytics.',
      technologies: ['Android', 'Flutter', 'Firebase', 'Android Studio', 'Material Design'],
      image: 'https://moneyview.in/images/blog/wp-content/uploads/2017/10/Blog-11-reasonsfeature-min.jpg',
      githubLink: 'https://github.com/SayoojVP/Xpenso-tracker',
    },
    {
      id: 2,
      title: 'Expiry Inventory Management System',
      description: 'A specialized inventory management solution focused on tracking product expiration dates for businesses in retail and pharmaceuticals. The system provides automated alerts for soon-to-expire items and helps reduce waste through intelligent inventory rotation.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
      image: 'https://img.freepik.com/free-vector/warehouse-interior-with-cardboard-boxes-racks_107791-1120.jpg',
      githubLink: 'https://github.com/SayoojVP/expiry-inventory-management',
    },
  ];

  return (
    <ProjectsSection className="section container" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My featured projects</span>
      
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
