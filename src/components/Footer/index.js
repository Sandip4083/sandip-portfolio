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

const gradientText = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Logo = styled.h2`
  font-weight: 700;
  font-size: 28px;
  background: linear-gradient(90deg, #00f5ff 0%, #ff006e 50%, #b794f6 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientText} 3s ease infinite;
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

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;

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
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
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
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    background: rgba(0, 245, 255, 0.15);
    border-color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
  }
`;

const Copyright = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
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
