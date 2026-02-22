import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import styled, { keyframes } from "styled-components";
import { Bio } from "../../data/constants";

const shimmer = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const FooterContainer = styled.footer`
  width: 100%;
  background: linear-gradient(180deg, #060610 0%, #04040c 100%);
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
      #854ce6,
      #00f5ff,
      #ff006e,
      #fbbf24,
      #854ce6
    );
    background-size: 300% 100%;
    animation: ${shimmer} 6s ease infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 120px;
    background: radial-gradient(
      ellipse,
      rgba(133, 76, 230, 0.08),
      transparent 70%
    );
    pointer-events: none;
  }
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 40px 0;
  position: relative;
  z-index: 1;

  @media (max-width: 640px) {
    padding: 44px 24px 0;
  }
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }
`;

const BrandCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Logo = styled.h2`
  font-weight: 800;
  font-size: 26px;
  background: linear-gradient(135deg, #00f5ff, #854ce6, #ff006e);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 4s ease infinite;
  font-family: "Space Grotesk", "Inter", sans-serif;
  letter-spacing: -0.3px;
  margin: 0;
`;

const Tagline = styled.p`
  font-size: 14.5px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  max-width: 280px;
  margin: 0;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 4px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.text_secondary};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 11px;
  transition: all 0.22s ease;
  font-size: 17px;

  &:hover {
    color: ${({ hoverColor }) => hoverColor || "#c084fc"};
    background: ${({ hoverColor }) =>
      hoverColor ? `${hoverColor}15` : "rgba(133, 76, 230, 0.12)"};
    border-color: ${({ hoverColor }) =>
      hoverColor || "rgba(133, 76, 230, 0.4)"};
    transform: translateY(-3px);
    box-shadow: 0 6px 20px
      ${({ hoverColor }) =>
        hoverColor ? `${hoverColor}25` : "rgba(133, 76, 230, 0.2)"};
  }
`;

const NavCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const NavColTitle = styled.div`
  font-size: 11.5px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    width: 3px;
    height: 14px;
    border-radius: 2px;
    background: linear-gradient(135deg, #00f5ff, #854ce6);
  }

  @media (max-width: 768px) {
    &::before {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 14.5px;
  font-weight: 500;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    color: #00f5ff;
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: none;
    }
  }
`;

const BottomBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0;
  gap: 16px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.3);
  margin: 0;

  span {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 600;
  }
`;

const BuiltWith = styled.div`
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    color: #ff006e;
    font-size: 14px;
  }
`;

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
];

function Footer() {
  return (
    <FooterContainer>
      <FooterInner>
        <TopSection>
          <BrandCol>
            <Logo>Sandip Kumar Sah</Logo>
            <Tagline>
              Full Stack Developer & AI Enthusiast crafting elegant digital
              experiences with clean code.
            </Tagline>
            <SocialRow>
              <SocialIcon
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                hoverColor="#fff"
              >
                <GitHubIcon style={{ fontSize: 18 }} />
              </SocialIcon>
              <SocialIcon
                href={Bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                hoverColor="#0a66c2"
              >
                <LinkedInIcon style={{ fontSize: 18 }} />
              </SocialIcon>
              <SocialIcon
                href={Bio.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                hoverColor="#1da1f2"
              >
                <TwitterIcon style={{ fontSize: 18 }} />
              </SocialIcon>
              <SocialIcon
                href={Bio.insta}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                hoverColor="#e1306c"
              >
                <InstagramIcon style={{ fontSize: 18 }} />
              </SocialIcon>
              <SocialIcon
                href={Bio.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                hoverColor="#1877f2"
              >
                <FacebookIcon style={{ fontSize: 18 }} />
              </SocialIcon>
            </SocialRow>
          </BrandCol>

          <NavCol>
            <NavColTitle>Navigate</NavColTitle>
            {NAV_LINKS.map(({ label, href }) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}
          </NavCol>

          <NavCol>
            <NavColTitle>Connect</NavColTitle>
            <NavLink
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon style={{ fontSize: 15 }} /> GitHub
            </NavLink>
            <NavLink
              href={Bio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon style={{ fontSize: 15 }} /> LinkedIn
            </NavLink>
            <NavLink
              href={Bio.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon style={{ fontSize: 15 }} /> Twitter
            </NavLink>
            <NavLink href={Bio.insta} target="_blank" rel="noopener noreferrer">
              <InstagramIcon style={{ fontSize: 15 }} /> Instagram
            </NavLink>
            <NavLink href="#contact">
              <EmailIcon style={{ fontSize: 15 }} /> Contact Me
            </NavLink>
          </NavCol>
        </TopSection>

        <BottomBar>
          <Copyright>
            © {new Date().getFullYear()} <span>Sandip Kumar Sah</span> · All
            Rights Reserved
          </Copyright>
          <BuiltWith>
            Built with <span>❤</span> using React
          </BuiltWith>
        </BottomBar>
      </FooterInner>
    </FooterContainer>
  );
}

export default Footer;
