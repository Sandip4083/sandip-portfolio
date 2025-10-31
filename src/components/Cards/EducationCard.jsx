import styled from 'styled-components';

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

const Card = styled.div`
  width: 650px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(15, 14, 23, 0.95) 0%, rgba(23, 23, 33, 0.9) 100%);
  backdrop-filter: blur(20px);
  padding: 18px 22px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.3s ease;
  border: 2px solid rgba(0, 245, 255, 0.3);
  box-shadow: 0 5px 15px rgba(0, 245, 255, 0.2);

  &:hover {
    border-color: rgba(0, 245, 255, 0.6);
    box-shadow: 0 8px 25px rgba(0, 245, 255, 0.3);
    transform: translateY(-5px);
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

const Image = styled.img`
  height: 60px;
  border-radius: 12px;
  margin-top: 4px;
  border: 2px solid rgba(0, 245, 255, 0.4);
  background: ${({ theme }) => theme.card};
  padding: 4px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
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

const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, #00F5FF, #FF006E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
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

const Grade = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(135deg, rgba(0, 245, 255, 0.15), rgba(255, 0, 110, 0.15));
  padding: 8px 14px;
  border-radius: 10px;
  border: 2px solid rgba(0, 245, 255, 0.4);
  box-shadow: 0 0 10px rgba(0, 245, 255, 0.2);
  
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