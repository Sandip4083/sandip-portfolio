import { useState } from "react";
import { projects } from "../../data/constants";
import ProjectCard from "../Cards/ProjectCards";
import {
  CardContainer,
  Container,
  Desc,
  Title,
  Wrapper,
} from "./ProjectsStyle";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle] = useState("all"); // ✅ setToggle removed

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <CardContainer>
          {projects
            .filter((item) => toggle === "all" || item.category === toggle) // ✅ fixed ===
            .map((project, index) => (
              <ProjectCard
                key={index}
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
