import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
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

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Scroll spy
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Nav>
      <NavbarContainer>
        {/* Logo */}
        <NavLogo to="/">
          <Span>👨‍💻 Portfolio</Span>
        </NavLogo>

        {/* Mobile Hamburger */}
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        {/* Desktop Nav Links */}
        <NavItems>
          {NAV_LINKS.map(({ label, href }) => (
            <NavLink
              key={href}
              href={href}
              className={
                activeSection === href.replace("#", "") ? "active" : ""
              }
            >
              {label}
            </NavLink>
          ))}
        </NavItems>

        {/* GitHub Button (Desktop) */}
        <ButtonContainer>
          <GitHubButton
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ fontSize: "17px" }} />
            GitHub
          </GitHubButton>
        </ButtonContainer>
        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen}>
          <MobileNavLogo to="/" onClick={() => setIsOpen(false)}>
            <Span>👨‍💻 Portfolio</Span>
          </MobileNavLogo>

          {NAV_LINKS.map(({ label, href }) => (
            <MobileLink
              key={href}
              href={href}
              className={
                activeSection === href.replace("#", "") ? "active" : ""
              }
              onClick={() => setIsOpen(false)}
            >
              {label}
            </MobileLink>
          ))}

          <div style={{ padding: "16px 32px 0" }}>
            <GitHubButton
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <FaGithub style={{ fontSize: "17px" }} />
              View GitHub
            </GitHubButton>
          </div>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
