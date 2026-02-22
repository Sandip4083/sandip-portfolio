import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled, { ThemeProvider, keyframes } from "styled-components";
import "./App.css";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Body = styled.div`
  background-color: #0a0a14;
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background:
    linear-gradient(
      38.73deg,
      rgba(133, 76, 230, 0.1) 0%,
      rgba(133, 76, 230, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 245, 255, 0) 50%,
      rgba(0, 245, 255, 0.07) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const BackToTop = styled.button`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 999;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, #854ce6, #00f5ff);
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 24px rgba(133, 76, 230, 0.45);
  transition: all 0.25s ease;
  animation: ${fadeIn} 0.3s ease;

  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 10px 36px rgba(133, 76, 230, 0.6);
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  @media (max-width: 640px) {
    bottom: 24px;
    right: 20px;
    width: 42px;
    height: 42px;
    border-radius: 12px;
  }
`;

function App() {
  const [darkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Certificates />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>

        {showTop && (
          <BackToTop onClick={scrollToTop} aria-label="Back to top">
            <ArrowUpwardIcon style={{ fontSize: 20 }} />
          </BackToTop>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
