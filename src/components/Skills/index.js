import styled, { keyframes } from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 40px 20px 80px 20px;

  @media (max-width: 960px) {
    padding: 30px 16px 60px 16px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
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

export const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  letter-spacing: 3px;
  background: linear-gradient(135deg, #00f5ff 0%, #ff006e 50%, #b794f6 100%);
  background-size: 200% 200%;
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

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 20px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 450px;
  background: linear-gradient(
    135deg,
    rgba(15, 14, 23, 0.95) 0%,
    rgba(23, 23, 33, 0.9) 100%
  );
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 20px 35px;
  border: 2px solid rgba(0, 245, 255, 0.3);
  box-shadow: 0 5px 15px rgba(0, 245, 255, 0.2);

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 16px 30px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 14px 26px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  background: linear-gradient(135deg, #00f5ff, #ff006e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 18px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 0;
`;

const SkillItem = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(0, 245, 255, 0.08);
  border: 2px solid rgba(0, 245, 255, 0.3);
  border-radius: 12px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: default;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 9px 14px;
  }

  @media (max-width: 500px) {
    font-size: 13px;
    padding: 8px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills & Technologies</Title>
        <Desc>Here are some of the technologies I've been working with.</Desc>
        <SkillsContainer>
          {skills.map((skill, i) => (
            <Skill key={i}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, idx) => (
                  <SkillItem key={idx}>
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
