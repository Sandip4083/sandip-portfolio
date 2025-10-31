import { Link as LinkR } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// 🔥 Glassmorphism navbar with blur effect
export const Nav = styled.div`
  background: rgba(13, 17, 41, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 2px solid rgba(0, 245, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 245, 255, 0.15);
  transition: all 0.3s ease-in-out;

  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

// 🔥 Animated gradient logo
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
  background: linear-gradient(135deg, #00f5ff, #ff006e, #b794f6);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientShift} 3s ease infinite;
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// 🔥 Modern nav links with underline animation
export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  position: relative;

  /* Animated underline */
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 50%;
    background: linear-gradient(90deg, #00f5ff, #ff006e);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: ${({ theme }) => theme.primary};

    &::after {
      width: 100%;
    }
  }
`;

// 🔥 Neon glow button with pulse effect
const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 10px ${(props) => props.theme?.primary || "#00F5FF"},
                0 0 20px ${(props) => props.theme?.primary || "#00F5FF"},
                0 0 30px ${(props) => props.theme?.primary || "#00F5FF"};
  }
  50% {
    box-shadow: 0 0 15px ${(props) => props.theme?.primary || "#00F5FF"},
                0 0 30px ${(props) => props.theme?.primary || "#00F5FF"},
                0 0 45px ${(props) => props.theme?.primary || "#00F5FF"};
  }
`;

export const GitHubButton = styled.a`
  border: 2px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 600;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.4s ease-in-out;
  position: relative;
  overflow: hidden;
  background: rgba(0, 245, 255, 0.05);

  /* Shine effect */
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
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    transform: scale(1.05);
    animation: ${pulse} 1.5s ease-in-out infinite;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: translate(-100%, 60%) scale(1.1);
    }
  }
`;

// 🔥 Glassmorphism mobile menu with slide animation
export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: rgba(13, 17, 41, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 10px 40px 0 rgba(0, 245, 255, 0.2),
    inset 0 1px 0 rgba(0, 245, 255, 0.1);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
  border: 1px solid rgba(0, 245, 255, 0.1);
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 2px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

// 🔥 Mobile link with hover effect
export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  font-size: 18px;
  position: relative;
  padding: 8px 0;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background: ${({ theme }) => theme.primary};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &:hover::after {
    width: 80%;
  }

  &.active {
    color: ${({ theme }) => theme.primary};

    &::after {
      width: 80%;
    }
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;

  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;
