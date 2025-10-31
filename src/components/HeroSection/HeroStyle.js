import styled, { keyframes } from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 55px 30px 60px 30px;
  min-height: auto;
  z-index: 1;
  background: linear-gradient(135deg, #0f0e17 0%, #1a1a2e 50%, #0f0e17 100%);
  overflow: hidden;
  scroll-margin-top: 80px;

  /* Static glowing orbs */
  &::before {
    content: "";
    position: absolute;
    top: -10%;
    right: -5%;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(16, 237, 204, 0.1) 0%,
      transparent 70%
    );
    border-radius: 50%;
    filter: blur(80px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -10%;
    left: -5%;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(178, 72, 236, 0.08) 0%,
      transparent 70%
    );
    border-radius: 50%;
    filter: blur(90px);
  }

  @media (max-width: 960px) {
    padding: 100px 20px 50px 20px;
  }
  @media (max-width: 640px) {
    padding: 90px 16px 40px 16px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 50px;
  z-index: 1;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const HeroLeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 960px) {
    order: 2;
    align-items: center;
    text-align: center;
  }
`;

export const HeroRightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    order: 1;
  }
`;

// 🔥 Epic rotating ring animation
const rotateRing = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 40px rgba(16, 237, 204, 0.5),
      0 0 80px rgba(178, 72, 236, 0.3);
  }
  50% {
    box-shadow: 
      0 0 60px rgba(16, 237, 204, 0.7),
      0 0 120px rgba(178, 72, 236, 0.5);
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: clamp(280px, 32vw, 380px);
  height: clamp(280px, 32vw, 380px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  /* Animated rotating gradient border */
  &::before {
    content: "";
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    padding: 6px;
    background: linear-gradient(
      45deg,
      #10edcc,
      #b248ec,
      #ff006e,
      #00f5ff,
      #10edcc
    );
    background-size: 300% 300%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: ${rotateRing} 4s linear infinite;
    filter: blur(1px);
  }

  /* Pulsing glow effect */
  &::after {
    content: "";
    position: absolute;
    inset: -25px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(16, 237, 204, 0.25) 0%,
      transparent 70%
    );
    animation: ${pulseGlow} 3s ease-in-out infinite;
    z-index: -1;
  }

  @media (max-width: 960px) {
    width: clamp(220px, 45vw, 300px);
    height: clamp(220px, 45vw, 300px);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid #0f0e17;
  transition: transform 0.4s ease;
  position: relative;
  z-index: 2;

  &:hover {
    transform: scale(1.05);
  }
`;

// Simple fade in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const GreetingTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(16, 237, 204, 0.1);
  border: 2px solid rgba(16, 237, 204, 0.3);
  border-radius: 50px;
  padding: 8px 20px;
  font-size: 15px;
  font-weight: 600;
  color: #10edcc;
  width: fit-content;
  animation: ${fadeIn} 0.6s ease-out;
  margin-bottom: 4px;

  &::before {
    content: "👋";
    font-size: 18px;
  }

  @media (max-width: 640px) {
    font-size: 13px;
    padding: 7px 16px;
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 40px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  margin: 0;
  animation: ${fadeIn} 0.8s ease-out 0.2s both;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 30px;
  }
`;

export const NameHighlight = styled.span`
  background: linear-gradient(135deg, #10edcc, #b248ec, #ff006e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  position: relative;
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 26px;
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.text_primary};
  align-items: center;
  margin: 0;
  animation: ${fadeIn} 0.8s ease-out 0.4s both;

  @media (max-width: 960px) {
    justify-content: center;
  }

  @media (max-width: 640px) {
    font-size: 20px;
    flex-wrap: wrap;
  }
`;

const colorShift = keyframes`
  0%, 100% { 
    background-position: 0% 50%;
  }
  50% { 
    background-position: 100% 50%;
  }
`;

export const Span = styled.span`
  background: linear-gradient(135deg, #10edcc, #b248ec, #ff006e, #00f5ff);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${colorShift} 5s ease infinite;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  font-size: 15px;
  line-height: 1.6;
  margin: 8px 0 18px 0;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 560px;
  animation: ${fadeIn} 0.8s ease-out 0.6s both;

  @media (max-width: 960px) {
    text-align: center;
    margin: 8px auto 18px auto;
  }

  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 1.55;
  }
`;

// 🔥 Dynamic Stats Row
export const StatsRow = styled.div`
  display: flex;
  gap: 35px;
  margin: 0 0 20px 0;
  animation: ${fadeIn} 0.8s ease-out 0.7s both;

  @media (max-width: 960px) {
    justify-content: center;
  }

  @media (max-width: 640px) {
    gap: 28px;
  }
`;

const countUp = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  animation: ${countUp} 0.5s ease-out;
  animation-delay: ${(props) => props.delay || "0s"};
  animation-fill-mode: both;

  .number {
    font-size: 30px;
    font-weight: 800;
    background: linear-gradient(135deg, #10edcc, #b248ec);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
  }

  .label {
    font-size: 13px;
    color: ${({ theme }) => theme.text_secondary};
    font-weight: 500;
  }

  @media (max-width: 640px) {
    .number {
      font-size: 26px;
    }
    .label {
      font-size: 11px;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 0 0 18px 0;
  animation: ${fadeIn} 0.8s ease-out 0.8s both;

  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  padding: 14px 32px;
  color: #0f0e17;
  background: linear-gradient(135deg, #10edcc, #00f5ff);
  border-radius: 50px;
  font-size: 15px;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 0 25px rgba(16, 237, 204, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 35px rgba(16, 237, 204, 0.6);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 640px) {
    width: 100%;
    padding: 13px 30px;
    font-size: 15px;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  padding: 14px 32px;
  color: #10edcc;
  background: rgba(16, 237, 204, 0.1);
  border: 2px solid #10edcc;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(16, 237, 204, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 0 25px rgba(16, 237, 204, 0.3);
  }

  @media (max-width: 640px) {
    width: 100%;
    padding: 13px 30px;
    font-size: 15px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 0;
  animation: ${fadeIn} 0.8s ease-out 1s both;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  background: rgba(16, 237, 204, 0.1);
  border: 2px solid rgba(16, 237, 204, 0.3);
  border-radius: 50%;
  color: #10edcc;
  font-size: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(16, 237, 204, 0.2);
    border-color: #10edcc;
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(16, 237, 204, 0.4);
  }

  @media (max-width: 640px) {
    width: 44px;
    height: 44px;
    font-size: 19px;
  }
`;
