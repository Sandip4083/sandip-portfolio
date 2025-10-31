import { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../Cards/ProjectCards";

// 🔥 Animated gradient background
const gradientMove = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const Container = styled.div`
  background: linear-gradient(
    135deg,
    rgba(15, 14, 23, 1) 0%,
    rgba(23, 23, 33, 1) 50%,
    rgba(15, 14, 23, 1) 100%
  );
  background-size: 200% 200%;
  animation: ${gradientMove} 15s ease infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 60px 0px 100px 0px;

  /* Radial glow overlays */
  &::before {
    content: "";
    position: absolute;
    top: 10%;
    left: 10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(0, 245, 255, 0.15) 0%,
      transparent 70%
    );
    filter: blur(60px);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 10%;
    right: 10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(255, 0, 110, 0.12) 0%,
      transparent 70%
    );
    filter: blur(80px);
    pointer-events: none;
  }

  @media (max-width: 960px) {
    padding: 40px 0px 80px 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 20px;
  z-index: 1;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

// 🔥 3D holographic title
const float = keyframes`
  0%, 100% { 
    transform: translateY(0px) perspective(1000px) rotateX(0deg); 
  }
  50% { 
    transform: translateY(-15px) perspective(1000px) rotateX(5deg); 
  }
`;

const colorShift = keyframes`
  0% { 
    filter: hue-rotate(0deg);
    background-position: 0% 50%;
  }
  50% { 
    filter: hue-rotate(30deg);
    background-position: 100% 50%;
  }
  100% { 
    filter: hue-rotate(0deg);
    background-position: 0% 50%;
  }
`;

const Title = styled.div`
  font-size: 56px;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  letter-spacing: 4px;
  position: relative;

  background: linear-gradient(
    135deg,
    #00f5ff 0%,
    #ff006e 25%,
    #b794f6 50%,
    #00f5ff 75%,
    #ff006e 100%
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${colorShift} 5s ease infinite, ${float} 4s ease-in-out infinite;

  /* 3D layers */
  text-shadow: 0 0 30px rgba(0, 245, 255, 0.5), 0 0 60px rgba(255, 0, 110, 0.3),
    0 0 90px rgba(183, 148, 246, 0.2);

  /* Glowing line below */
  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(
      90deg,
      transparent,
      #00f5ff,
      #ff006e,
      transparent
    );
    border-radius: 2px;
    box-shadow: 0 0 20px #00f5ff, 0 0 40px #ff006e;
  }

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 40px;
    letter-spacing: 2px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

// 🔥 Futuristic toggle buttons with neon effects
const ToggleButtonGroup = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.primary};
  background: rgba(0, 245, 255, 0.05);
  backdrop-filter: blur(10px);
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 16px;
  font-weight: 600;
  margin: 30px 0px;
  padding: 6px;
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.3),
    inset 0 0 20px rgba(0, 245, 255, 0.05);

  @media (max-width: 768px) {
    font-size: 12px;
    flex-wrap: wrap;
    gap: 6px;
    justify-content: center;
  }
`;

const slideIn = keyframes`
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const ToggleButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  padding: 10px 20px;
  border-radius: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  overflow: hidden;

  /* Active state with gradient */
  ${({ active, theme }) =>
    active &&
    css`
      background: linear-gradient(135deg, ${theme.primary}, #ff006e);
      color: white;
      box-shadow: 0 0 20px ${theme.primary}88,
        inset 0 0 20px rgba(255, 255, 255, 0.2);
      animation: ${slideIn} 0.3s ease;
    `}

  /* Shine effect on hover */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background: ${({ active, theme }) =>
      active
        ? `linear-gradient(135deg, ${theme.primary}, #FF006E)`
        : `${theme.primary}22`};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 8px 14px;
    border-radius: 10px;
    font-size: 11px;
  }
`;

const Divider = styled.div`
  width: 2px;
  background: linear-gradient(
    180deg,
    transparent 0%,
    ${({ theme }) => theme.primary} 50%,
    transparent 100%
  );
  margin: 0 4px;

  @media (max-width: 768px) {
    display: none;
  }
`;

// 🔥 Card container with stagger animation
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;

  /* Stagger animation for cards */
  > * {
    animation: cardFadeIn 0.6s ease-out backwards;
  }

  > *:nth-child(1) {
    animation-delay: 0.1s;
  }
  > *:nth-child(2) {
    animation-delay: 0.2s;
  }
  > *:nth-child(3) {
    animation-delay: 0.3s;
  }
  > *:nth-child(4) {
    animation-delay: 0.4s;
  }
  > *:nth-child(5) {
    animation-delay: 0.5s;
  }
  > *:nth-child(6) {
    animation-delay: 0.6s;
  }
  > *:nth-child(7) {
    animation-delay: 0.7s;
  }
  > *:nth-child(8) {
    animation-delay: 0.8s;
  }

  @keyframes cardFadeIn {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to mobile
          apps. Here are some of my projects.
        </Desc>

        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}
          >
            Web Apps
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "mobile app"}
            onClick={() => setToggle("mobile app")}
          >
            Mobile Apps
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "Machine Learning"}
            onClick={() => setToggle("Machine Learning")}
          >
            ML/AI
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "AI Game"}
            onClick={() => setToggle("AI Game")}
          >
            AI Games
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer key={toggle}>
          {projects
            .filter((item) => toggle === "all" || item.category === toggle)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
