import styled from "styled-components";
import { skills } from "../../data/constants";

/* ── Layout ── */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 80px 24px 100px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(133, 76, 230, 0.04) 50%,
    transparent
  );

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
  max-width: 1100px;
  gap: 16px;
  z-index: 1;
`;

const SectionLabel = styled.div`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #854ce6;
  background: rgba(133, 76, 230, 0.1);
  border: 1px solid rgba(133, 76, 230, 0.25);
  padding: 6px 18px;
  border-radius: 100px;
`;

const Title = styled.h2`
  font-size: clamp(36px, 4vw, 48px);
  text-align: center;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.5px;
  font-family: "Space Grotesk", "Inter", sans-serif;
  margin: 0;

  span {
    background: linear-gradient(135deg, #00f5ff 0%, #854ce6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: clamp(28px, 6vw, 38px);
  }
`;

const Desc = styled.p`
  font-size: 16px;
  text-align: center;
  max-width: 500px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 24px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 460px;
  background: rgba(17, 17, 32, 0.8);
  border-radius: 20px;
  padding: 28px 32px;
  border: 1px solid rgba(133, 76, 230, 0.16);
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;

  &:hover {
    border-color: rgba(133, 76, 230, 0.4);
    box-shadow: 0 8px 40px rgba(133, 76, 230, 0.12);
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    max-width: 380px;
    padding: 22px 24px;
  }

  @media (max-width: 500px) {
    max-width: 100%;
    padding: 20px;
  }
`;

const SkillTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Space Grotesk", "Inter", sans-serif;

  &::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 18px;
    background: linear-gradient(135deg, #00f5ff, #854ce6);
    border-radius: 3px;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillItem = styled.div`
  font-size: 13.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(133, 76, 230, 0.4);
    background: rgba(133, 76, 230, 0.08);
    color: ${({ theme }) => theme.text_primary};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 12.5px;
    padding: 7px 12px;
  }
`;

const SkillImage = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <SectionLabel>Technologies</SectionLabel>
        <Title>
          Skills & <span>Expertise</span>
        </Title>
        <Desc>
          Here are the technologies and tools I work with to bring ideas to
          life.
        </Desc>
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
