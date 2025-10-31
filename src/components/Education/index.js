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

const gradientText = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  letter-spacing: 3px;
  background: linear-gradient(90deg, #00f5ff 0%, #ff006e 50%, #b794f6 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientText} 4s ease infinite;

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

  @media (max-width: 660px) {
    align-items: end;
  }
`;

const StyledTimelineItem = styled(TimelineItem)`
  &::before {
    flex: 0;
    padding: 0;
  }
`;

const StyledTimelineDot = styled(TimelineDot)`
  && {
    background: linear-gradient(135deg, #00f5ff, #0080ff);
    border: 3px solid rgba(0, 245, 255, 0.3);
    box-shadow: 0 0 15px rgba(0, 245, 255, 0.5);
    width: 20px;
    height: 20px;
  }
`;

const StyledTimelineConnector = styled(TimelineConnector)`
  && {
    background: linear-gradient(180deg, #00f5ff 0%, #ff006e 50%, #b794f6 100%);
    width: 3px;
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
