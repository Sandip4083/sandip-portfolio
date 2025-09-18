import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

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

/* 🔥 Only Neon Gradient Border around Image */
export const ImgWrapper = styled.div`
  position: relative;
  width: clamp(240px, 35vw, 400px);
  height: clamp(240px, 35vw, 400px);
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  overflow: hidden;

  /* Neon Gradient Ring */
  padding: 6px;
  background: linear-gradient(135deg, #9333ea, #ec4899, #3b82f6);
  box-shadow: 0 0 35px rgba(147, 51, 234, 0.6), 0 0 55px rgba(236, 72, 153, 0.5),
    0 0 85px rgba(59, 130, 246, 0.4);
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;

  /* White border for contrast */
  border: 4px solid rgba(255, 255, 255, 0.7);
  z-index: 2;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);

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
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary}E6;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 28px;
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

  background: linear-gradient(
    135deg,
    rgba(16, 237, 204, 0.9),
    rgba(178, 72, 236, 0.9)
  );

  /* Neon Glow */
  box-shadow: 0 0 10px rgba(16, 237, 204, 0.7), 0 0 20px rgba(178, 72, 236, 0.7),
    0 0 40px rgba(178, 72, 236, 0.6), 0 0 60px rgba(16, 237, 204, 0.6);

  border: 2px solid transparent;
  border-radius: 12px;

  backdrop-filter: blur(10px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);

  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.5),
    -6px -6px 16px rgba(255, 255, 255, 0.05),
    inset 0 2px 8px rgba(255, 255, 255, 0.2);

  &:hover {
    transform: scale(1.08);
    filter: brightness(1.15);
    box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.6),
      -10px -10px 25px rgba(255, 255, 255, 0.08),
      inset 0 2px 12px rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;
