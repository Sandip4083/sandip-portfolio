import styled, { keyframes } from "styled-components";
import { certificates } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 60px 20px 100px 20px;

  @media (max-width: 960px) {
    padding: 40px 16px 80px 16px;
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
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
  background: linear-gradient(135deg, #00f5ff 0%, #ff006e 50%, #b794f6 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientText} 4s ease infinite;

  &::before {
    content: "🏆";
    font-size: 48px;
  }

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 38px;
    letter-spacing: 2px;

    &::before {
      font-size: 36px;
    }
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-top: 25px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CertificatesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 30px;
  justify-content: center;
`;

const Certificate = styled.div`
  width: 100%;
  max-width: 500px;
  background: linear-gradient(
    135deg,
    rgba(15, 14, 23, 0.95) 0%,
    rgba(23, 23, 33, 0.9) 100%
  );
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 24px 40px;
  transition: all 0.3s ease;
  border: 2px solid rgba(0, 245, 255, 0.3);
  box-shadow: 0 5px 15px rgba(0, 245, 255, 0.2);

  &:hover {
    border-color: rgba(0, 245, 255, 0.6);
    box-shadow: 0 8px 25px rgba(0, 245, 255, 0.3);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 18px 32px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 16px 28px;
  }
`;

const CertificateTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(135deg, #00f5ff, #ff006e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const CertificateList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 20px;
`;

const CertificateItem = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(0, 245, 255, 0.08);
  border: 2px solid rgba(0, 245, 255, 0.3);
  border-radius: 12px;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 245, 255, 0.15);
    border-color: #00f5ff;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 14px;
  }

  @media (max-width: 500px) {
    font-size: 13px;
    padding: 8px 12px;
  }
`;

const CertificateImage = styled.img`
  width: 28px;
  height: 28px;
  transition: transform 0.3s ease;

  ${CertificateItem}:hover & {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const Certificates = () => {
  return (
    <Container id="certificates">
      <Wrapper>
        <Title>Certificates</Title>
        <Desc>
          Here are some of my professional certifications and achievements.
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
