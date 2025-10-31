import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../Cards/ProjectCards";

const Container = styled.div`
  background: linear-gradient(
    135deg,
    rgba(15, 14, 23, 1) 0%,
    rgba(23, 23, 33, 1) 50%,
    rgba(15, 14, 23, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 60px 20px 100px 20px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 10%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(0, 245, 255, 0.08) 0%,
      transparent 70%
    );
    border-radius: 50%;
    filter: blur(100px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 20%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(255, 0, 110, 0.06) 0%,
      transparent 70%
    );
    border-radius: 50%;
    filter: blur(100px);
  }

  @media (max-width: 960px) {
    padding: 40px 16px 80px 16px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  z-index: 1;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const gradientText = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.div`
  font-size: 56px;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  letter-spacing: 4px;
  background: linear-gradient(135deg, #00f5ff 0%, #ff006e 50%, #b794f6 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientText} 4s ease infinite, ${fadeIn} 0.8s ease-out;

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
  animation: ${fadeIn} 0.8s ease-out 0.2s both;

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 2px solid rgba(0, 245, 255, 0.3);
  background: rgba(15, 14, 23, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 6px;
  margin: 30px 0px;
  box-shadow: 0 8px 32px rgba(0, 245, 255, 0.15);
  animation: ${fadeIn} 0.8s ease-out 0.4s both;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 6px;
    justify-content: center;
    padding: 8px;
    border-radius: 25px;
    font-size: 12px;
  }
`;

const ToggleButton = styled.button`
  border: none;
  outline: none;
  background: ${({ active }) =>
    active ? "linear-gradient(135deg, #00f5ff, #ff006e)" : "transparent"};
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  color: ${({ active }) => (active ? "#000" : "#00f5ff")};
  font-weight: ${({ active }) => (active ? "700" : "600")};
  font-size: 16px;
  transition: all 0.3s ease;
  white-space: nowrap;

  ${({ active }) =>
    active &&
    `
    box-shadow: 0 5px 15px rgba(0, 245, 255, 0.4);
  `}

  &:hover {
    background: ${({ active }) =>
      active
        ? "linear-gradient(135deg, #00f5ff, #ff006e)"
        : "rgba(0, 245, 255, 0.1)"};
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 8px 14px;
    border-radius: 10px;
    font-size: 11px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  animation: ${fadeIn} 0.8s ease-out 0.6s both;
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
          <ToggleButton
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}
          >
            Web Apps
          </ToggleButton>
          <ToggleButton
            active={toggle === "mobile app"}
            onClick={() => setToggle("mobile app")}
          >
            Mobile Apps
          </ToggleButton>
          <ToggleButton
            active={toggle === "Machine Learning"}
            onClick={() => setToggle("Machine Learning")}
          >
            ML/AI
          </ToggleButton>
          <ToggleButton
            active={toggle === "AI Game"}
            onClick={() => setToggle("AI Game")}
          >
            AI Games
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer>
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
