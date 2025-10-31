import styled, { keyframes } from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  background: ${({ theme }) => theme.bg};

  /* Animated gradient overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 50%,
        rgba(0, 245, 255, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 80%,
        rgba(255, 0, 110, 0.1) 0%,
        transparent 50%
      );
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  z-index: 1;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

// 🔥 Rotating neon ring animation
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 35px rgba(147, 51, 234, 0.6), 
                0 0 55px rgba(236, 72, 153, 0.5),
                0 0 85px rgba(59, 130, 246, 0.4);
  }
  50% {
    box-shadow: 0 0 45px rgba(147, 51, 234, 0.8), 
                0 0 70px rgba(236, 72, 153, 0.7),
                0 0 100px rgba(59, 130, 246, 0.6);
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: clamp(240px, 35vw, 400px);
  height: clamp(240px, 35vw, 400px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  padding: 6px;

  /* Animated neon gradient ring */
  background: linear-gradient(135deg, #9333ea, #ec4899, #3b82f6, #9333ea);
  background-size: 400% 400%;
  animation: ${pulse} 3s ease-in-out infinite;

  /* Rotating effect */
  &::before {
    content: "";
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg, #9333ea, #ec4899, #3b82f6, #22d3ee);
    border-radius: 50%;
    animation: ${rotate} 4s linear infinite;
    opacity: 0.8;
    filter: blur(20px);
    z-index: -1;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.7);
  z-index: 2;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// 🔥 Text reveal animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientText = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  background: linear-gradient(135deg, #00f5ff, #ff006e, #b794f6);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientText} 3s ease infinite;
  cursor: pointer;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary}E6;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

// 🔥 3D button with multiple effects
const buttonPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(16, 237, 204, 0.7), 
                0 0 40px rgba(178, 72, 236, 0.7),
                0 0 60px rgba(178, 72, 236, 0.6);
  }
  50% {
    box-shadow: 0 0 30px rgba(16, 237, 204, 0.9), 
                0 0 60px rgba(178, 72, 236, 0.9),
                0 0 90px rgba(178, 72, 236, 0.8);
  }
`;

export const ResumeButton = styled.a`
  display: inline-block;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.4s ease-in-out;
  position: relative;
  overflow: hidden;
  z-index: 1;
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;

  /* Gradient background */
  background: linear-gradient(
    135deg,
    rgba(16, 237, 204, 0.9),
    rgba(178, 72, 236, 0.9)
  );

  /* Neon Glow */
  box-shadow: 0 0 20px rgba(16, 237, 204, 0.7), 0 0 40px rgba(178, 72, 236, 0.7),
    0 0 60px rgba(178, 72, 236, 0.6);

  /* Glassmorphism effect */
  backdrop-filter: blur(10px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);

  /* 3D depth */
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.5),
    -6px -6px 16px rgba(255, 255, 255, 0.05),
    inset 0 2px 8px rgba(255, 255, 255, 0.2);

  /* Shine effect overlay */
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
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: scale(1.08) translateY(-3px);
    filter: brightness(1.15);
    animation: ${buttonPulse} 1.5s ease-in-out infinite;
    box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.6),
      -10px -10px 25px rgba(255, 255, 255, 0.08),
      inset 0 2px 12px rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: scale(1.02);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;
