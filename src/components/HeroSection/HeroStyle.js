import styled, { keyframes } from "styled-components";

/* ── Animations ── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const rotateRing = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const colorShift = keyframes`
  0%   { background-position: 0%   50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0%   50%; }
`;

/* ── Layout ── */
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5px 40px 80px;
  background:
    radial-gradient(
      ellipse 80% 60% at 50% -10%,
      rgba(133, 76, 230, 0.12) 0%,
      transparent 70%
    ),
    radial-gradient(
      ellipse 60% 40% at 100% 60%,
      rgba(0, 245, 255, 0.07) 0%,
      transparent 60%
    ),
    #0a0a14;
  overflow: hidden;

  /* decorative elements */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(
        circle at 20% 30%,
        rgba(133, 76, 230, 0.06) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 80%,
        rgba(0, 245, 255, 0.04) 0%,
        transparent 50%
      );
    pointer-events: none;
  }

  @media (max-width: 960px) {
    padding: 10px 24px 60px;
  }
  @media (max-width: 640px) {
    padding: 8px 20px 48px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 60px;
  z-index: 1;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
`;

export const HeroLeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;

  @media (max-width: 960px) {
    order: 2;
    align-items: center;
    max-width: 100%;
  }
`;

export const HeroRightContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    order: 1;
  }
`;

/* ── Image ── */
export const ImgWrapper = styled.div`
  position: relative;
  width: clamp(260px, 30vw, 360px);
  height: clamp(260px, 30vw, 360px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: transform 0.4s ease;

  /* Outer pulsing glow aura */
  &::before {
    content: "";
    position: absolute;
    inset: -14px;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      #00f5ff,
      #854ce6,
      #ff006e,
      #fbbf24,
      #00f5ff
    );
    animation: ${rotateRing} 5s linear infinite;
    z-index: 0;
    filter: blur(1px);
  }

  /* Dark gap ring between gradient and image */
  &::after {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: #0a0a14;
    z-index: 1;
    box-shadow: inset 0 0 20px rgba(133, 76, 230, 0.15);
  }

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 960px) {
    width: clamp(200px, 42vw, 280px);
    height: clamp(200px, 42vw, 280px);
  }
`;

export const ImgInner = styled.div`
  position: relative;
  z-index: 2;
  width: calc(100% - 12px);
  height: calc(100% - 12px);
  border-radius: 50%;
  background: #0a0a14;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow:
    0 0 30px rgba(133, 76, 230, 0.15),
    0 0 60px rgba(0, 245, 255, 0.05);
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  transition:
    transform 0.5s ease,
    filter 0.4s ease;

  &:hover {
    transform: scale(1.06);
    filter: brightness(1.08);
  }
`;

/* GlowDot — kept for export compatibility but no longer used */
export const GlowDot = styled.div`
  display: none;
`;

/* ── Text content ── */
export const GreetingTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(133, 76, 230, 0.1);
  border: 1.5px solid rgba(133, 76, 230, 0.4);
  border-radius: 100px;
  padding: 7px 18px;
  font-size: 14px;
  font-weight: 600;
  color: #c084fc;
  width: fit-content;
  animation: ${fadeUp} 0.5s ease-out both;
  letter-spacing: 0.3px;

  &::before {
    content: "👋";
    font-size: 16px;
  }

  @media (max-width: 640px) {
    font-size: 13px;
    padding: 6px 14px;
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: clamp(36px, 4.5vw, 54px);
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.15;
  margin: 0;
  animation: ${fadeUp} 0.5s ease-out 0.1s both;
  font-family: "Space Grotesk", "Inter", sans-serif;
  letter-spacing: -0.5px;
`;

export const NameHighlight = styled.span`
  background: linear-gradient(135deg, #00f5ff 0%, #854ce6 50%, #ff006e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: clamp(18px, 2.2vw, 24px);
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.text_primary};
  align-items: center;
  animation: ${fadeUp} 0.5s ease-out 0.2s both;

  @media (max-width: 960px) {
    justify-content: center;
  }
  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Span = styled.span`
  background: linear-gradient(135deg, #00f5ff, #854ce6, #ff006e, #00f5ff);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${colorShift} 5s ease infinite;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  font-size: clamp(14px, 1.1vw, 16px);
  line-height: 1.75;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 520px;
  animation: ${fadeUp} 0.5s ease-out 0.3s both;

  @media (max-width: 960px) {
    text-align: center;
    max-width: 500px;
  }
`;

/* ── Stats ── */
export const StatsRow = styled.div`
  display: flex;
  gap: 0;
  margin: 4px 0 8px;
  animation: ${fadeUp} 0.5s ease-out 0.4s both;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  width: fit-content;
  overflow: hidden;

  @media (max-width: 960px) {
    align-self: center;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 14px 28px;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background: rgba(255, 255, 255, 0.08);
  }

  .number {
    font-size: 26px;
    font-weight: 800;
    background: linear-gradient(135deg, #00f5ff, #854ce6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: "Space Grotesk", sans-serif;
    line-height: 1;
  }

  .label {
    font-size: 12px;
    color: ${({ theme }) => theme.text_secondary};
    font-weight: 500;
    letter-spacing: 0.3px;
  }

  @media (max-width: 640px) {
    padding: 12px 20px;
    .number {
      font-size: 22px;
    }
    .label {
      font-size: 11px;
    }
  }
`;

/* ── Buttons ── */
export const ButtonGroup = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  animation: ${fadeUp} 0.5s ease-out 0.5s both;

  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  text-decoration: none;
  padding: 13px 28px;
  color: #0a0a14;
  background: linear-gradient(135deg, #00f5ff, #854ce6);
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  transition: all 0.25s ease;
  box-shadow: 0 4px 20px rgba(133, 76, 230, 0.35);
  letter-spacing: 0.2px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(133, 76, 230, 0.5);
    filter: brightness(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 640px) {
    width: 100%;
    padding: 13px 24px;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  text-decoration: none;
  padding: 13px 28px;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(255, 255, 255, 0.05);
  border: 1.5px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.25s ease;
  letter-spacing: 0.2px;

  &:hover {
    background: rgba(255, 255, 255, 0.09);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }

  @media (max-width: 640px) {
    width: 100%;
    padding: 13px 24px;
  }
`;

/* ── Social Icons ── */
export const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  animation: ${fadeUp} 0.5s ease-out 0.6s both;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: rgba(255, 255, 255, 0.05);
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 18px;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(133, 76, 230, 0.15);
    border-color: rgba(133, 76, 230, 0.5);
    color: #c084fc;
    transform: translateY(-3px);
    box-shadow: 0 4px 16px rgba(133, 76, 230, 0.25);
  }

  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
    font-size: 17px;
  }
`;
