import styled from 'styled-components';

const Card = styled.div`
  width: 600px;
  border-radius: 18px;
  background: rgba(17, 17, 32, 0.85);
  padding: 22px 26px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border: 1px solid rgba(0, 245, 255, 0.12);
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(0, 245, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 245, 255, 0.08);
    transform: translateY(-4px);
  }

  @media only screen and (max-width: 768px) {
    padding: 18px 20px;
    gap: 10px;
    width: 300px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;

const Image = styled.img`
  height: 54px;
  width: 54px;
  border-radius: 12px;
  object-fit: contain;
  border: 1.5px solid rgba(0, 245, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  padding: 5px;
  flex-shrink: 0;

  @media only screen and (max-width: 768px) {
    height: 44px;
    width: 44px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Space Grotesk', 'Inter', sans-serif;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};

  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const DateBadge = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #00f5ff;
  background: rgba(0, 245, 255, 0.08);
  border: 1px solid rgba(0, 245, 255, 0.22);
  padding: 3px 10px;
  border-radius: 7px;
  width: fit-content;
  margin-top: 2px;

  @media only screen and (max-width: 768px) {
    font-size: 11px;
    padding: 2px 8px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(133, 76, 230, 0.08);
  border: 1px solid rgba(133, 76, 230, 0.2);
  padding: 8px 14px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "🎓";
    font-size: 15px;
  }

  b {
    color: #c084fc;
    font-weight: 700;
  }

  @media only screen and (max-width: 768px) {
    font-size: 13px;
    padding: 7px 12px;
  }
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;

  @media only screen and (max-width: 768px) {
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

  ${Card}:hover & {
    overflow: visible;
    -webkit-line-clamp: unset;
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
          <DateBadge>{education.date}</DateBadge>
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