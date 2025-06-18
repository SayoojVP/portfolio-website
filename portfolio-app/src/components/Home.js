import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeSection = styled.section`
  padding: 5rem 0 0;
`;

const HomeContainer = styled.div`
  display: grid;
  gap: 1.5rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  position: relative;
`;

const HomeSocial = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: var(--first-color);
  border-bottom: none;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: translateY(-4px);
    color: var(--first-color-alt);
    opacity: 1;
  }
`;

const HomeData = styled.div`
  width: 100%;
`;

const HomeName = styled.h1`
  font-size: var(--big-font-size);
  margin-bottom: var(--mb-0-25);
  color: var(--title-color);
`;

const HomeTitle = styled.h3`
  font-size: var(--h3-font-size);
  color: var(--text-color);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-0-75);
`;

const HomeDescription = styled.p`
  margin-bottom: var(--mb-2);
`;

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: var(--first-color);
  color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: var(--font-medium);
  transition: 0.3s;
  border: none;
  text-decoration: none;
  
  svg {
    transition: 0.3s;
    margin-left: var(--mb-0-5);
  }
  
  &:hover {
    background-color: var(--first-color-alt);
    color: #fff;
    opacity: 1;
    
    svg {
      transform: translateX(4px);
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const HomeImg = styled.img`
  width: 280px;
  border-radius: 50%;
  justify-self: center;
  filter: drop-shadow(0 12px 12px rgba(0, 0, 0, 0.15));
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const BackgroundCircle = styled.div`
  width: 320px;
  height: 320px;
  background-color: var(--first-color);
  border-radius: 50%;
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  opacity: 0.1;
`;

const LoadingContainer = styled.div`
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.div`
  padding: 2rem;
  font-style: italic;
  color: var(--text-color-light);
  background-color: var(--container-color);
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Home = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Sayooj VP',
    title: 'Developer / UI Designer / Entrepreneur',
    bio: 'A passionate developer focused on creating beautiful and functional web applications.',
    photoUrl: 'https://media.licdn.com/dms/image/v2/D5603AQFFxWMruIXZ9w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698772918229?e=1755734400&v=beta&t=FGGbQn6vVqOSZ-3sFilxKOAuNyycTESvJD4G3J1Mpfc',
  });
  const [loading, setLoading] = useState(false);

  // Create refs for animated elements
  const socialRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const bioRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  
  // Animation effect when component mounts
  useEffect(() => {
    if (!loading) {
      // Add animation classes with staggered delay
      setTimeout(() => {
        if (socialRef.current) socialRef.current.classList.add('slide-in');
      }, 100);
      
      setTimeout(() => {
        if (nameRef.current) nameRef.current.classList.add('slide-up');
      }, 200);
      
      setTimeout(() => {
        if (titleRef.current) titleRef.current.classList.add('slide-up');
      }, 300);
      
      setTimeout(() => {
        if (bioRef.current) bioRef.current.classList.add('fade-in');
      }, 400);
      
      setTimeout(() => {
        if (buttonsRef.current) buttonsRef.current.classList.add('fade-in');
      }, 500);
      
      setTimeout(() => {
        if (imageRef.current) imageRef.current.classList.add('fade-in');
      }, 600);
    }
  }, [loading]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // First check if we're in production (Vercel deployment)
        if (process.env.NODE_ENV === 'production' || !window.location.hostname.includes('localhost')) {
          // In production, just use the default data and skip API call
          console.log('Using default personal info in production');
          setTimeout(() => {
            setLoading(false);
          }, 300);
          return;
        }
        
        // Only try to fetch from API in development
        const response = await fetch('/api/info');
        if (response.ok) {
          const data = await response.json();
          // Merge the API data with existing data
          setPersonalInfo(prevInfo => ({
            ...prevInfo,
            ...data
          }));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <Loading>Loading personal information...</Loading>
        </LoadingContainer>
      ) : (
        <HomeSection className="section container" id="home">
          <HomeContainer className="container grid">
            <div>
              <HomeContent className="home__content">
                <HomeSocial className="home__social" ref={socialRef} style={{ opacity: 0 }}>
                  <SocialIcon href="https://github.com/sayoojvp" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </SocialIcon>
                  <SocialIcon href="https://linkedin.com/in/sayoojvp" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                  </SocialIcon>
                  <SocialIcon href="https://twitter.com/sayoojvp" target="_blank" rel="noreferrer" aria-label="Twitter">
                    <FaTwitter />
                  </SocialIcon>
                </HomeSocial>
                
                <HomeData className="home__data">
                  <HomeName ref={nameRef} style={{ opacity: 0 }}>{personalInfo.name}</HomeName>
                  <HomeTitle ref={titleRef} style={{ opacity: 0 }}>{personalInfo.title}</HomeTitle>
                  <HomeDescription ref={bioRef} style={{ opacity: 0 }}>
                    {personalInfo.bio}
                  </HomeDescription>
                  <div ref={buttonsRef} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', opacity: 0 }}>
                    <Button to="/projects">
                      View My Work <FaArrowRight />
                    </Button>
                    <Button to="/contact" style={{ 
                      backgroundColor: 'transparent', 
                      color: 'var(--first-color)',
                      border: '2px solid var(--first-color)'
                    }}>
                      Contact Me <FaArrowRight />
                    </Button>
                  </div>
                </HomeData>
              </HomeContent>
            </div>
            
            <ImageWrapper className="home__img" ref={imageRef} style={{ opacity: 0 }}>
              <BackgroundCircle />
              <HomeImg 
                src={personalInfo.photoUrl} 
                alt={personalInfo.name}
              />
            </ImageWrapper>
          </HomeContainer>
        </HomeSection>
      )}
    </>
  );
};

export default Home;