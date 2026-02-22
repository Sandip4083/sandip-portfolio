import styled from "styled-components";

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
  max-width: 860px;
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

const ComingSoonCard = styled.div`
  margin-top: 48px;
  width: 100%;
  max-width: 600px;
  background: rgba(17, 17, 32, 0.8);
  border: 1px dashed rgba(133, 76, 230, 0.35);
  border-radius: 20px;
  padding: 52px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;

  .icon {
    font-size: 52px;
    line-height: 1;
  }

  .title {
    font-size: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    font-family: "Space Grotesk", "Inter", sans-serif;
  }

  .sub {
    font-size: 15px;
    color: ${({ theme }) => theme.text_secondary};
    max-width: 380px;
    line-height: 1.65;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(133, 76, 230, 0.1);
    border: 1px solid rgba(133, 76, 230, 0.3);
    border-radius: 100px;
    padding: 6px 16px;
    font-size: 13px;
    font-weight: 600;
    color: #c084fc;
    margin-top: 8px;

    &::before {
      content: "⚡";
    }
  }
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <SectionLabel>Professional</SectionLabel>
        <Title>
          Work <span>Experience</span>
        </Title>
        <Desc>
          My professional journey and contributions to impactful projects.
        </Desc>
        <ComingSoonCard>
          <div className="icon">🚀</div>
          <div className="title">Building Experience</div>
          <div className="sub">
            Currently focused on academic excellence at KIIT University and
            personal projects. Professional work experience will be added here
            soon.
          </div>
          <div className="badge">Actively seeking opportunities</div>
        </ComingSoonCard>
      </Wrapper>
    </Container>
  );
};

export default Experience;
