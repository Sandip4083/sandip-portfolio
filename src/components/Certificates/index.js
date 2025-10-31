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

  /* Animated radial gradient background */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 25% 25%,
        rgba(0, 245, 255, 0.12) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 75% 75%,
        rgba(255, 0, 110, 0.1) 0%,
        transparent 50%
      );
    pointer-events: none;
    z-index: 0;
  }

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

// 🔥 3D Holographic Title with trophy emoji
const float = keyframes`
  0%, 100% { 
    transform: translateY(0px) perspective(1000px) rotateX(0deg); 
  }
  50% { 
    transform: translateY(-12px) perspective(1000px) rotateX(4deg); 
  }
`;

const rainbowShift = keyframes`
  0% { 
    background-position: 0% 50%;
    filter: hue-rotate(0deg);
  }
  50% { 
    background-position: 100% 50%;
    filter: hue-rotate(25deg);
  }
  100% { 
    background-position: 0% 50%;
    filter: hue-rotate(0deg);
  }
`;

export const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  letter-spacing: 3px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;

  background: linear-gradient(
    135deg,
    #00f5ff 0%,
    #ff006e 25%,
    #b794f6 50%,
    #00f5ff 75%,
    #ff006e 100%
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${rainbowShift} 5s ease infinite,
    ${float} 3.5s ease-in-out infinite;

  /* 3D depth with glow */
  filter: drop-shadow(0 0 30px rgba(0, 245, 255, 0.5))
    drop-shadow(0 0 60px rgba(255, 0, 110, 0.3));

  /* Trophy emoji with animation */
  &::before {
    content: "🏆";
    font-size: 48px;
    animation: rotate 2s ease-in-out infinite;
    filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.6));
  }

  @keyframes rotate {
    0%,
    100% {
      transform: rotate(-5deg);
    }
    50% {
      transform: rotate(5deg);
    }
  }

  /* Glowing underline */
  &::after {
    content: "";
    position: absolute;
    bottom: -18px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #00f5ff, transparent);
    border-radius: 2px;
    box-shadow: 0 0 20px #00f5ff;
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

// 🔥 Futuristic certificate card with holographic effect
const borderPulse = keyframes`
  0%, 100% {
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
`;

const cardFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
`;

const Certificate = styled.div`
  width: 100%;
  max-width: 500px;
  background: linear-gradient(
    135deg,
    rgba(15, 14, 23, 0.95) 0%,
    rgba(23, 23, 33, 0.9) 100%
  );
  backdrop-filter: blur(20px) saturate(150%);
  border-radius: 20px;
  padding: 24px 40px;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  overflow: hidden;

  /* Animated neon border */
  border: 2px solid rgba(0, 245, 255, 0.5);
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.4), 0 0 40px rgba(0, 245, 255, 0.2),
    inset 0 0 30px rgba(0, 245, 255, 0.05);
  animation: ${borderPulse} 4s ease-in-out infinite;

  /* Corner bracket decorations */
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 70px;
    height: 70px;
    border: 3px solid;
    transition: all 0.4s ease;
  }

  &::before {
    top: -2px;
    left: -2px;
    border-color: transparent;
    border-top-color: #00f5ff;
    border-left-color: #00f5ff;
    border-radius: 20px 0 0 0;
  }

  &::after {
    bottom: -2px;
    right: -2px;
    border-color: transparent;
    border-bottom-color: #ff006e;
    border-right-color: #ff006e;
    border-radius: 0 0 20px 0;
  }

  &:hover {
    box-shadow: 0 0 35px rgba(0, 245, 255, 0.6), 0 0 70px rgba(255, 0, 110, 0.4),
      inset 0 0 50px rgba(0, 245, 255, 0.1);
    transform: translateY(-10px) scale(1.02);
    animation: ${cardFloat} 1.5s ease-in-out infinite;
  }

  &:hover::before,
  &:hover::after {
    width: 100px;
    height: 100px;
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

// 🔥 Gradient title with pulse
const titleGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px rgba(0, 245, 255, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(0, 245, 255, 0.8);
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
  animation: ${titleGlow} 2s ease-in-out infinite;

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

// 🔥 Certificate item with 3D effect and glow
const itemPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 10px rgba(0, 245, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 25px rgba(0, 245, 255, 0.7);
  }
`;

const iconBounce = keyframes`
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  25% { 
    transform: translateY(-5px) rotate(-5deg); 
  }
  75% { 
    transform: translateY(-5px) rotate(5deg); 
  }
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
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  overflow: hidden;

  /* Shine sweep effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background: rgba(0, 245, 255, 0.15);
    border-color: #00f5ff;
    transform: scale(1.1) translateY(-5px);
    animation: ${itemPulse} 1s ease-in-out infinite;
  }

  /* Add medal emoji on hover */
  &:hover::after {
    content: "🏅";
    position: absolute;
    top: -15px;
    right: -10px;
    font-size: 20px;
    animation: ${iconBounce} 0.6s ease-in-out;
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

// 🔥 Glowing certificate icon with rotation
const iconSpin = keyframes`
  0%, 100% { 
    transform: rotate(0deg) scale(1);
  }
  50% { 
    transform: rotate(15deg) scale(1.15);
  }
`;

const CertificateImage = styled.img`
  width: 28px;
  height: 28px;
  transition: all 0.3s ease;
  filter: drop-shadow(0 0 8px rgba(0, 245, 255, 0.5));

  ${CertificateItem}:hover & {
    animation: ${iconSpin} 0.6s ease-in-out;
    filter: drop-shadow(0 0 15px rgba(0, 245, 255, 0.9));
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
