import React from 'react';
import styled from 'styled-components';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt,
  FaGithub,
  FaDatabase,
  SiExpress, 
  SiMongodb, 
  SiPostgresql,
  SiBootstrap,
  SiFigma,
  SiNotion,
  SiGooglesheets,
  SiPython,
  SiC
} from '../utils/iconExports';

const SkillsSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(
    180deg,
    var(--body-color) 0%,
    var(--container-color) 100%
  );
`;

const SkillsContainer = styled.div`
  row-gap: 2rem;
  display: grid;
  
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
`;

const SkillsGroup = styled.div`
  margin-bottom: var(--mb-3);
  background-color: var(--body-color);
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--first-color), transparent);
  }
`;

const SkillsTitle = styled.h3`
  font-size: var(--h3-font-size);
  color: var(--title-color);
  margin-bottom: var(--mb-1-5);
  text-align: center;
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--mb-1);
  
  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--container-color);
  padding: 1.25rem;
  border-radius: .5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background-color: var(--first-color);
    transition: height 0.3s ease;
  }
  
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
    
    &::before {
      height: 100%;
    }
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: var(--first-color);
  margin-bottom: 0.75rem;
  position: relative;
  z-index: 1;
  
  svg {
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
    transition: all 0.3s ease;
  }
  
  ${SkillItem}:hover & svg {
    transform: scale(1.15) rotate(5deg);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
  }
`;

const SkillName = styled.span`
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-0-25);
  text-align: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  
  ${SkillItem}:hover & {
    color: var(--first-color);
    font-weight: var(--font-semi-bold);
  }
`;

const Skills = () => {
  return (
    <SkillsSection className="section container" id="skills">
      <h2 className="section__title">Skills & Expertise</h2>
      <span className="section__subtitle">My technical level</span>
      
      <SkillsContainer className="skills__container container grid">
        <SkillsGroup className="skills__group">
          <SkillsTitle>Frontend Development</SkillsTitle>
          <SkillsList className="skills__list">
            <SkillItem>
              <SkillIcon><FaHtml5 /></SkillIcon>
              <SkillName>HTML</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><FaCss3Alt /></SkillIcon>
              <SkillName>CSS</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><FaJs /></SkillIcon>
              <SkillName>JavaScript</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><FaReact /></SkillIcon>
              <SkillName>React</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiBootstrap /></SkillIcon>
              <SkillName>Bootstrap</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiPython /></SkillIcon>
              <SkillName>Python</SkillName>
            </SkillItem>
          </SkillsList>
        </SkillsGroup>
        
        <SkillsGroup className="skills__group">
          <SkillsTitle>Backend & Database</SkillsTitle>
          <SkillsList className="skills__list">
            <SkillItem>
              <SkillIcon><FaNodeJs /></SkillIcon>
              <SkillName>Node.js</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiExpress /></SkillIcon>
              <SkillName>Express</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiMongodb /></SkillIcon>
              <SkillName>MongoDB</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiPostgresql /></SkillIcon>
              <SkillName>PostgreSQL</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><FaDatabase /></SkillIcon>
              <SkillName>MySQL</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiC /></SkillIcon>
              <SkillName>C</SkillName>
            </SkillItem>
          </SkillsList>
        </SkillsGroup>
      </SkillsContainer>
      
      <SkillsContainer className="skills__container container grid" style={{ marginTop: "2rem" }}>
        <SkillsGroup className="skills__group">
          <SkillsTitle>Tools</SkillsTitle>
          <SkillsList className="skills__list">
            <SkillItem>
              <SkillIcon><SiFigma /></SkillIcon>
              <SkillName>Figma</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiNotion /></SkillIcon>
              <SkillName>Notion</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiGooglesheets /></SkillIcon>
              <SkillName>Google Sheets</SkillName>
            </SkillItem>
          </SkillsList>
        </SkillsGroup>
          
        <SkillsGroup className="skills__group">
          <SkillsTitle>Version Control</SkillsTitle>
          <SkillsList className="skills__list">
            <SkillItem>
              <SkillIcon><FaGitAlt /></SkillIcon>
              <SkillName>Git</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon><FaGithub /></SkillIcon>
              <SkillName>GitHub</SkillName>
            </SkillItem>
          </SkillsList>
        </SkillsGroup>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
