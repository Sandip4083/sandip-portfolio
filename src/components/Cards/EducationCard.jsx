import styled, { keyframes } from 'styled-components';

// 🔥 Glowing description animation
const textGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 5px rgba(0, 245, 255, 0.3);
  }
  50% {
    text-shadow: 0 0 10px rgba(0, 245, 255, 0.5);
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  line-height: 1.6;
  
  @media only screen and (max-width: 768px){
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

// 🔥 Holographic card with 3D transform
const hoverFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const borderShine = keyframes`
  0% {
    border-color: rgba(0, 245, 255, 0.5);
    box-shadow: 
      0 0 20px rgba(0, 245, 255, 0.4),
      0 0 40px rgba(0, 245, 255, 0.2),
      inset 0 0 30px rgba(0, 245, 255, 0.05);
  }
  50% {
    border-color: rgba(255, 0, 110, 0.5);
    box-shadow: 
      0 0 30px rgba(255, 0, 110, 0.5),
      0 0 60px rgba(255, 0, 110, 0.3),
      inset 0 0 40px rgba(255, 0, 110, 0.08);
  }
  100% {
    border-color: rgba(0, 245, 255, 0.5);
    box-shadow: 
      0 0 20px rgba(0, 245, 255, 0.4),
      0 0 40px rgba(0, 245, 255, 0.2),
      inset 0 0 30px rgba(0, 245, 255, 0.05);
  }
`;

const Card = styled.div`
  width: 650px;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    rgba(15, 14, 23, 0.95) 0%,
    rgba(23, 23, 33, 0.9) 100%
  );
  backdrop-filter: blur(20px) saturate(150%);
  padding: 18px 22px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  /* Animated glowing border */
  border: 2px solid rgba(0, 245, 255, 0.5);
  box-shadow: 
    0 0 20px rgba(0, 245, 255, 0.4),
    0 0 40px rgba(0, 245, 255, 0.2),
    inset 0 0 30px rgba(0, 245, 255, 0.05);
  animation: ${borderShine} 4s ease-in-out infinite;
  
  /* Corner decorations */
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    border: 2px solid;
    transition: all 0.4s ease;
  }
  
  &::before {
    top: -2px;
    left: -2px;
    border-color: transparent;
    border-top-color: #00F5FF;
    border-left-color: #00F5FF;
    border-radius: 20px 0 0 0;
  }
  
  &::after {
    bottom: -2px;
    right: -2px;
    border-color: transparent;
    border-bottom-color: #FF006E;
    border-right-color: #FF006E;
    border-radius: 0 0 20px 0;
  }

  &:hover {
    animation: ${hoverFloat} 1s ease-in-out infinite;
    box-shadow: 
      0 0 35px rgba(0, 245, 255, 0.6),
      0 0 70px rgba(255, 0, 110, 0.4),
      inset 0 0 50px rgba(0, 245, 255, 0.1);
    transform: scale(1.02);
  }
  
  &:hover::before,
  &:hover::after {
    width: 100px;
    height: 100px;
  }

  &:hover ${Span}{
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  @media only screen and (max-width: 768px){
    padding: 14px 18px;
    gap: 10px;
    width: 300px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
  align-items: flex-start;
`;

// 🔥 Glowing logo with rotation
const logoGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px rgba(0, 245, 255, 0.6);
    transform: rotate(0deg);
  }
  50% {
    box-shadow: 0 0 25px rgba(255, 0, 110, 0.8);
    transform: rotate(5deg);
  }
`;

const Image = styled.img`
  height: 60px;
  border-radius: 12px;
  margin-top: 4px;
  border: 2px solid rgba(0, 245, 255, 0.5);
  background: ${({ theme }) => theme.card};
  padding: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    animation: ${logoGlow} 1s ease-in-out infinite;
  }
  
  @media only screen and (max-width: 768px){
    height: 50px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

// 🔥 Gradient text for school name
const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, #00F5FF, #FF006E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${textGlow} 2s ease-in-out infinite;
  
  @media only screen and (max-width: 768px){
    font-size: 16px;
  }
`;

const Degree = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  
  @media only screen and (max-width: 768px){
    font-size: 13px;
  }
`;

// 🔥 Neon date badge
const Date = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  background: rgba(0, 245, 255, 0.1);
  padding: 4px 10px;
  border-radius: 8px;
  border: 1px solid rgba(0, 245, 255, 0.3);
  display: inline-block;
  width: fit-content;
  
  @media only screen and (max-width: 768px){
    font-size: 11px;
    padding: 3px 8px;
  }
`;

// 🔥 Highlighted grade badge
const Grade = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(135deg, rgba(0, 245, 255, 0.15), rgba(255, 0, 110, 0.15));
  padding: 8px 14px;
  border-radius: 10px;
  border: 2px solid rgba(0, 245, 255, 0.4);
  box-shadow: 0 0 15px rgba(0, 245, 255, 0.3);
  
  b {
    background: linear-gradient(135deg, #00F5FF, #FF006E);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media only screen and (max-width: 768px){
    font-size: 13px;
    padding: 6px 12px;
  }
`;

const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={education.img} alt={education.school} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Grade>
                <b>Grade:</b> {education.grade}
            </Grade>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    );
};

export default EducationCard;