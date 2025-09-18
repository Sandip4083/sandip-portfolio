import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import HeroImg from "../../images/sandip.jpg";
import {
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  Img,
  ImgWrapper,
  ResumeButton,
  Span,
  SubTitle,
  TextLoop,
  Title,
} from "./HeroStyle";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          {/* ---- Left Side ---- */}
          <HeroLeftContainer id="Left">
            <Title>
              Hello World,&nbsp;&nbsp; I'm
              <br />
              <span style={{ whiteSpace: "nowrap" }}>{Bio.name}</span>
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="_blank">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          {/* ---- Right Side (Image with Neon Border) ---- */}
          <HeroRightContainer id="Right">
            <ImgWrapper>
              <Img src={HeroImg} alt="hero-image" />
            </ImgWrapper>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
