import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import styled, { keyframes } from "styled-components";
import { Bio } from "../../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 3rem 0 2rem 0;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(15, 14, 23, 1) 0%,
    rgba(10, 10, 20, 1) 100%
  );
  position: relative;
  overflow: hidden;

  /* Animated gradient overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      #00f5ff,
      #ff006e,
      #b794f6,
      transparent
    );
    box-shadow: 0 0 20px #00f5ff;
  }

  /* Radial glow */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 200px;
    background: radial-gradient(
      circle,
      rgba(0, 245, 255, 0.08) 0%,
      transparent 70%
    );
    filter: blur(40px);
    pointer-events: none;
  }
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  z-index: 1;
`;

// 🔥 Gradient animated logo
const shimmer = keyframes`
  0% { 
    background-position: -200% center;
  }
  100% { 
    background-position: 200% center;
  }
`;

const Logo = styled.h2`
  font-weight: 700;
  font-size: 28px;
  background: linear-gradient(90deg, #00f5ff 0%, #ff006e 50%, #b794f6 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s linear infinite;
  text-shadow: 0 0 30px rgba(0, 245, 255, 0.3);
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 900px;
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

// 🔥 Futuristic nav links with underline animation
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;

  /* Animated underline */
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 50%;
    background: linear-gradient(90deg, #00f5ff, #ff006e);
    transition: all 0.3s ease;
    transform: translateX(-50%);
    box-shadow: 0 0 10px #00f5ff;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

// 🔥 Glowing social media icons with rotation
const iconGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 10px rgba(0, 245, 255, 0.4);
  }
  50% {
    box-shadow: 0 0 25px rgba(0, 245, 255, 0.8);
  }
`;

const iconFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const SocialMediaIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(0, 245, 255, 0.08);
  border: 2px solid rgba(0, 245, 255, 0.3);
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  overflow: hidden;

  /* Shine effect */
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
    color: ${({ theme }) => theme.primary};
    background: rgba(0, 245, 255, 0.15);
    border-color: ${({ theme }) => theme.primary};
    transform: scale(1.15) rotate(10deg);
    animation: ${iconGlow} 1s ease-in-out infinite,
      ${iconFloat} 1s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
  }
`;

// 🔥 Animated copyright with pulse
const textPulse = keyframes`
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
`;

const Copyright = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  animation: ${textPulse} 3s ease-in-out infinite;

  /* Subtle glow */
  text-shadow: 0 0 10px rgba(0, 245, 255, 0.2);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// 🔥 Decorative particles
const particleFloat = keyframes`
  0%, 100% { 
    transform: translateY(0px) translateX(0px);
    opacity: 0.3;
  }
  50% { 
    transform: translateY(-20px) translateX(10px);
    opacity: 0.6;
  }
`;

const Particle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${({ color }) => color || "#00F5FF"};
  border-radius: 50%;
  opacity: 0.3;
  box-shadow: 0 0 10px ${({ color }) => color || "#00F5FF"};
  animation: ${particleFloat} ${(props) => props.duration || "6s"} ease-in-out
    infinite;
  animation-delay: ${(props) => props.delay || "0s"};
  pointer-events: none;

  &:nth-child(1) {
    top: 20%;
    left: 10%;
  }
  &:nth-child(2) {
    top: 40%;
    right: 15%;
  }
  &:nth-child(3) {
    bottom: 30%;
    left: 20%;
  }
  &:nth-child(4) {
    bottom: 50%;
    right: 10%;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        {/* Decorative particles */}
        <Particle color="#00F5FF" duration="7s" delay="0s" />
        <Particle color="#FF006E" duration="8s" delay="1s" />
        <Particle color="#B794F6" duration="6s" delay="2s" />
        <Particle color="#00F5FF" duration="9s" delay="0.5s" />

        <Logo>Sandip Kumar Sah</Logo>

        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#certificates">Certificates</NavLink>
        </Nav>

        <SocialMediaIcons>
          <SocialMediaIcon
            href={Bio.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.insta}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>

        <Copyright>
          © {new Date().getFullYear()} Sandip Kumar Sah • All Rights Reserved
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
