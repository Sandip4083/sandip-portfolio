import React from "react";
import { DiCssdeck } from "react-icons/di";
import { FaBars, FaGithub } from "react-icons/fa";
import { useTheme } from "styled-components";
import { Bio } from "../../data/constants";
import {
  ButtonContainer,
  GitHubButton,
  MobileIcon,
  MobileLink,
  MobileMenu,
  MobileNavLogo,
  Nav,
  NavItems,
  NavLink,
  NavLogo,
  NavbarContainer,
  Span,
} from "./NavbarStyledComponent";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        {/* Desktop Logo */}
        <NavLogo to="/">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              cursor: "pointer",
            }}
          >
            <Span>🧑‍💻 PORTFOLIO</Span>
          </div>
        </NavLogo>

        {/* Mobile Icon (Hamburger) */}
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>

        {/* Navbar Links (Desktop) */}
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>

        {/* GitHub Button (Desktop) */}
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            <FaGithub style={{ marginRight: "8px", fontSize: "20px" }} />
            Github Profile
          </GitHubButton>
        </ButtonContainer>

        {/* Mobile Menu */}
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            {/* Mobile Logo */}
            <MobileNavLogo to="/" onClick={() => setIsOpen(false)}>
              <DiCssdeck size="2rem" /> <Span>Portfolio</Span>
            </MobileNavLogo>

            <MobileLink href="#about" onClick={() => setIsOpen(false)}>
              About
            </MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </MobileLink>
            <MobileLink href="#experience" onClick={() => setIsOpen(false)}>
              Experience
            </MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(false)}>
              Education
            </MobileLink>

            {/* GitHub Button (Mobile) */}
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              <FaGithub style={{ marginRight: "8px", fontSize: "20px" }} />
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
