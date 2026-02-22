import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import styled from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 24px 100px;

  @media (max-width: 960px) {
    padding: 60px 20px 80px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  gap: 16px;
  z-index: 1;
`;

const SectionLabel = styled.div`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #00f5ff;
  background: rgba(0, 245, 255, 0.08);
  border: 1px solid rgba(0, 245, 255, 0.22);
  padding: 6px 18px;
  border-radius: 100px;
`;

const Title = styled.h2`
  font-size: clamp(36px, 4vw, 48px);
  text-align: center;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  font-family: "Space Grotesk", "Inter", sans-serif;
  letter-spacing: -0.5px;
  margin: 0;

  span {
    background: linear-gradient(135deg, #00f5ff 0%, #854ce6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Desc = styled.p`
  font-size: 16px;
  text-align: center;
  max-width: 500px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  margin: 0;
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 900px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 660px) {
    align-items: flex-end;
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
    background: linear-gradient(135deg, #00f5ff, #854ce6);
    border: none;
    box-shadow:
      0 0 0 4px rgba(0, 245, 255, 0.15),
      0 0 12px rgba(0, 245, 255, 0.3);
    width: 14px;
    height: 14px;
    margin: 8px 0;
  }
`;

const StyledTimelineConnector = styled(TimelineConnector)`
  && {
    background: linear-gradient(
      180deg,
      rgba(0, 245, 255, 0.4) 0%,
      rgba(133, 76, 230, 0.4) 100%
    );
    width: 2px;
    min-height: 30px;
  }
`;

const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <SectionLabel>Academic</SectionLabel>
        <Title>
          My <span>Education</span>
        </Title>
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

export default Education;
