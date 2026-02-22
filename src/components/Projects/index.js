import { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../Cards/ProjectCards";

const Container = styled.div`
  background: #0a0a14;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 80px 24px 100px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 700px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(133, 76, 230, 0.45),
      transparent
    );
  }

  @media (max-width: 960px) {
    padding: 60px 20px 80px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  gap: 16px;
  z-index: 1;
`;

const SectionLabel = styled.div`
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #a78bfa;
  background: rgba(133, 76, 230, 0.09);
  border: 1px solid rgba(133, 76, 230, 0.25);
  padding: 5px 18px;
  border-radius: 100px;
`;

const Title = styled.h2`
  font-size: clamp(32px, 4vw, 46px);
  text-align: center;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  font-family: "Space Grotesk", "Inter", sans-serif;
  letter-spacing: -0.5px;
  margin: 0;
  line-height: 1.15;

  span {
    background: linear-gradient(135deg, #a78bfa 0%, #ff006e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 640px) {
    font-size: clamp(26px, 7vw, 36px);
  }
`;

const Desc = styled.p`
  font-size: 15.5px;
  text-align: center;
  max-width: 480px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  margin: 0;
`;

const FilterBar = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 24px;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 5px;
`;

const FilterBtn = styled.button`
  border: none;
  outline: none;
  background: ${({ active }) =>
    active ? "linear-gradient(135deg, #854ce6, #c026d3)" : "transparent"};
  padding: 8px 18px;
  border-radius: 10px;
  cursor: pointer;
  color: ${({ active }) => (active ? "#fff" : "rgba(255,255,255,0.45)")};
  font-weight: ${({ active }) => (active ? "700" : "500")};
  font-size: 13.5px;
  transition: all 0.2s ease;
  white-space: nowrap;
  box-shadow: ${({ active }) =>
    active ? "0 4px 14px rgba(133, 76, 230, 0.35)" : "none"};

  &:hover {
    color: ${({ active }) => (active ? "#fff" : "rgba(255,255,255,0.75)")};
    background: ${({ active }) =>
      active
        ? "linear-gradient(135deg, #854ce6, #c026d3)"
        : "rgba(133, 76, 230, 0.1)"};
  }

  @media (max-width: 640px) {
    padding: 7px 13px;
    font-size: 12.5px;
    border-radius: 8px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 22px;
  flex-wrap: wrap;
  margin-top: 36px;
  width: 100%;
`;

const BottomCTA = styled.div`
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

const CTAText = styled.p`
  font-size: 14.5px;
  color: ${({ theme }) => theme.text_secondary};
`;

const CTABtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 12px;
  background: rgba(133, 76, 230, 0.1);
  border: 1.5px solid rgba(133, 76, 230, 0.35);
  color: #a78bfa;
  font-size: 14.5px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.22s ease;

  &:hover {
    background: rgba(133, 76, 230, 0.2);
    border-color: rgba(133, 76, 230, 0.6);
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(133, 76, 230, 0.25);
  }
`;

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "web app" },
  { label: "Mobile", value: "mobile app" },
  { label: "ML / AI", value: "Machine Learning" },
  { label: "AI Games", value: "AI Game" },
];

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  const filtered =
    toggle === "all" ? projects : projects.filter((p) => p.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <SectionLabel>Portfolio</SectionLabel>
        <Title>
          My Work &amp; <span>Projects</span>
        </Title>
        <Desc>
          A curated showcase of what I've built — from web apps and mobile apps
          to AI &amp; ML projects.
        </Desc>

        <FilterBar>
          {FILTERS.map(({ label, value }) => (
            <FilterBtn
              key={value}
              active={toggle === value}
              onClick={() => setToggle(value)}
            >
              {label}
            </FilterBtn>
          ))}
        </FilterBar>

        <CardContainer>
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>

        <BottomCTA>
          <CTAText>
            Want to see more? All my projects are available on GitHub.
          </CTAText>
          <CTABtn
            href="https://github.com/Sandip4083"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚀 View All Projects on GitHub
          </CTABtn>
        </BottomCTA>
      </Wrapper>
    </Container>
  );
};

export default Projects;
