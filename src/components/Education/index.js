import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import styled, { keyframes } from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;

  /* Animated gradient background */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 15% 20%,
        rgba(0, 245, 255, 0.08) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 85% 80%,
        rgba(255, 0, 110, 0.06) 0%,
        transparent 50%
      );
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 960px) {
    padding: 20px 0px 60px 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0px 0px 0px;
  gap: 12px;
  z-index: 1;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

// 🔥 3D floating title with holographic effect
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotateX(0deg); }
  50% { transform: translateY(-12px) rotateX(5deg); }
`;

const shimmer = keyframes`
  0% { 
    background-position: -200% center;
  }
  100% { 
    background-position: 200% center;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  position: relative;
  letter-spacing: 3px;

  background: linear-gradient(
    90deg,
    #00f5ff 0%,
    #ff006e 25%,
    #b794f6 50%,
    #00f5ff 75%,
    #ff006e 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 4s linear infinite, ${float} 3s ease-in-out infinite;

  /* 3D effect */
  text-shadow: 2px 2px 0px rgba(0, 245, 255, 0.3),
    4px 4px 0px rgba(255, 0, 110, 0.2), 6px 6px 20px rgba(183, 148, 246, 0.4);

  /* Glowing underline */
  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #00f5ff, transparent);
    border-radius: 2px;
    box-shadow: 0 0 20px #00f5ff;
  }

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 38px;
    letter-spacing: 2px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-top: 25px;

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

// 🔥 Custom styled timeline with neon effects
const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;

  /* Vertical neon line behind timeline */
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      #00f5ff 20%,
      #ff006e 50%,
      #b794f6 80%,
      transparent 100%
    );
    transform: translateX(-50%);
    opacity: 0.3;
    filter: blur(2px);
  }

  @media (max-width: 660px) {
    align-items: end;

    &::before {
      left: 20px;
    }
  }
`;

// 🔥 Custom Timeline Item with animations
const StyledTimelineItem = styled(TimelineItem)`
  &::before {
    flex: 0;
    padding: 0;
  }

  /* Alternating animation */
  &:nth-child(odd) {
    animation: slideInLeft 0.6s ease-out;
  }

  &:nth-child(even) {
    animation: slideInRight 0.6s ease-out;
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

// 🔥 Glowing dot with pulse
const pulseDot = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(0, 245, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 0 15px rgba(0, 245, 255, 0);
  }
`;

const StyledTimelineDot = styled(TimelineDot)`
  && {
    background: linear-gradient(135deg, #00f5ff, #0080ff);
    border: 3px solid rgba(0, 245, 255, 0.3);
    box-shadow: 0 0 20px rgba(0, 245, 255, 0.6), 0 0 40px rgba(0, 245, 255, 0.3);
    animation: ${pulseDot} 2s ease-in-out infinite;
    width: 20px;
    height: 20px;
  }
`;

// 🔥 Neon connector line
const StyledTimelineConnector = styled(TimelineConnector)`
  && {
    background: linear-gradient(180deg, #00f5ff 0%, #ff006e 50%, #b794f6 100%);
    width: 3px;
    box-shadow: 0 0 10px rgba(0, 245, 255, 0.5);
  }
`;

const index = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My academic journey has shaped my technical foundation and
          problem-solving mindset.
        </Desc>
        <TimelineSection>
          <Timeline>
            {education.map((edu, index) => (
              <StyledTimelineItem key={index}>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={edu} />
                </TimelineContent>
                <TimelineSeparator>
                  <StyledTimelineDot />
                  {index !== education.length - 1 && (
                    <StyledTimelineConnector />
                  )}
                </TimelineSeparator>
              </StyledTimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default index;
