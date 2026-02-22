import styled from "styled-components";
import { certificates } from "../../data/constants";

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
    rgba(0, 245, 255, 0.03) 50%,
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
  color: #fbbf24;
  background: rgba(251, 191, 36, 0.08);
  border: 1px solid rgba(251, 191, 36, 0.22);
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
    background: linear-gradient(135deg, #fbbf24 0%, #f97316 100%);
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
`;

const CertificatesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 48px;
  gap: 24px;
  justify-content: center;
`;

const Certificate = styled.div`
  width: 100%;
  max-width: 480px;
  background: rgba(17, 17, 32, 0.8);
  border-radius: 20px;
  padding: 28px 32px;
  border: 1px solid rgba(251, 191, 36, 0.12);
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(251, 191, 36, 0.35);
    box-shadow: 0 8px 40px rgba(251, 191, 36, 0.08);
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    max-width: 380px;
    padding: 22px 24px;
  }

  @media (max-width: 500px) {
    padding: 20px 18px;
  }
`;

const CertificateTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Space Grotesk", "Inter", sans-serif;

  &::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 18px;
    background: linear-gradient(135deg, #fbbf24, #f97316);
    border-radius: 3px;
  }
`;

const CertificateList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CertificateItem = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  padding: 11px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(251, 191, 36, 0.07);
    border-color: rgba(251, 191, 36, 0.3);
    color: ${({ theme }) => theme.text_primary};
    transform: translateX(4px);
  }

  @media (max-width: 500px) {
    font-size: 13px;
    padding: 10px 14px;
  }
`;

const CertificateImage = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;
  flex-shrink: 0;
`;

const CertBadge = styled.span`
  margin-left: auto;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #fbbf24;
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid rgba(251, 191, 36, 0.25);
  border-radius: 6px;
  padding: 2px 8px;
`;

const Certificates = () => {
  return (
    <Container id="certificates">
      <Wrapper>
        <SectionLabel>🏅 Achievements</SectionLabel>
        <Title>
          My <span>Certificates</span>
        </Title>
        <Desc>
          Professional certifications and courses that demonstrate my commitment
          to continuous learning.
        </Desc>
        <CertificatesContainer>
          {certificates.map((certificate, i) => (
            <Certificate key={i}>
              <CertificateTitle>{certificate.title}</CertificateTitle>
              <CertificateList>
                {certificate.certs.map((item, idx) => (
                  <CertificateItem
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CertificateImage src={item.image} alt={item.name} />
                    {item.name}
                    <CertBadge>View</CertBadge>
                  </CertificateItem>
                ))}
              </CertificateList>
            </Certificate>
          ))}
        </CertificatesContainer>
      </Wrapper>
    </Container>
  );
};

export default Certificates;
