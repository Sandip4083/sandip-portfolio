import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import Typewriter from "typewriter-effect";
import { Bio, projects, skills, certificates } from "../../data/constants";
import HeroImg from "../../images/sandip.jpg";
import {
  ButtonGroup,
  GreetingTag,
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  Img,
  ImgInner,
  ImgWrapper,
  NameHighlight,
  ResumeButton,
  SecondaryButton,
  SocialIcon,
  SocialLinks,
  Span,
  StatItem,
  StatsRow,
  SubTitle,
  TextLoop,
  Title,
} from "./HeroStyle";

const HeroSection = () => {
  // 🔥 Real-time data fetching from constants
  const [stats, setStats] = useState({
    projects: 0,
    skills: 0,
    certificates: 0,
  });

  useEffect(() => {
    // Count projects
    const projectCount = projects?.length || 0;

    // Count skills (all skills from all categories)
    const skillCount =
      skills?.reduce((total, category) => {
        return total + (category.skills?.length || 0);
      }, 0) || 0;

    // Count certificates (all certificates from all categories)
    const certCount =
      certificates?.reduce((total, category) => {
        return total + (category.certs?.length || 0);
      }, 0) || 0;

    setStats({
      projects: projectCount,
      skills: skillCount,
      certificates: certCount,
    });
  }, []);

  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          {/* ---- Left Side ---- */}
          <HeroLeftContainer>
            <GreetingTag>Hello World</GreetingTag>

            <Title>
              I'm <NameHighlight>{Bio.name}</NameHighlight>
            </Title>

            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </Span>
            </TextLoop>

            <SubTitle>{Bio.description}</SubTitle>

            {/* 🔥 Real-time Dynamic Stats */}
            <StatsRow>
              <StatItem delay="0.9s">
                <div className="number">{stats.projects}+</div>
                <div className="label">Projects</div>
              </StatItem>
              <StatItem delay="1s">
                <div className="number">{stats.skills}+</div>
                <div className="label">Skills</div>
              </StatItem>
              <StatItem delay="1.1s">
                <div className="number">{stats.certificates}+</div>
                <div className="label">Certificates</div>
              </StatItem>
            </StatsRow>

            <ButtonGroup>
              <ResumeButton href={Bio.resume} target="_blank">
                <HiDocumentText size={22} />
                Check Resume
              </ResumeButton>
              <SecondaryButton href="#contact">
                <MdEmail size={20} />
                Get In Touch
              </SecondaryButton>
            </ButtonGroup>

            <SocialLinks>
              <SocialIcon
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialIcon>
              <SocialIcon
                href={Bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon
                href={Bio.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIcon>
              <SocialIcon
                href={Bio.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon
                href={Bio.insta}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIcon>
            </SocialLinks>
          </HeroLeftContainer>

          {/* ---- Right Side ---- */}
          <HeroRightContainer>
            <ImgWrapper>
              <ImgInner>
                <Img src={HeroImg} alt={Bio.name} />
              </ImgInner>
            </ImgWrapper>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
