import { Link as LinkR } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-100%); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Nav = styled.div`
  background: rgba(10, 10, 20, 0.82);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(133, 76, 230, 0.18);
  box-shadow:
    0 4px 30px rgba(0, 0, 0, 0.4),
    0 1px 0 rgba(133, 76, 230, 0.1);
  transition: background 0.3s ease;
  animation: ${slideDown} 0.5s ease-out;

  @media (max-width: 960px) {
    height: 64px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  z-index: 1;
  width: 100%;
  padding: 0 32px;
  max-width: 1300px;

  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s ease;
  flex-shrink: 0;

  &:hover {
    opacity: 0.85;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: 800;
  font-size: 20px;
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: 0.5px;
  background: linear-gradient(135deg, #00f5ff, #854ce6, #ff006e);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientShift} 4s ease infinite;

  @media (max-width: 640px) {
    font-size: 17px;
  }
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: color 0.2s ease;
  text-decoration: none;
  position: relative;
  padding: 6px 14px;
  border-radius: 8px;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 2px;
    left: 50%;
    background: linear-gradient(90deg, #00f5ff, #854ce6);
    transition: all 0.25s ease;
    transform: translateX(-50%);
    border-radius: 2px;
  }

  &:hover {
    color: #00f5ff;
    background: rgba(0, 245, 255, 0.06);
  }

  &:hover::after {
    width: 60%;
  }

  &.active {
    color: #00f5ff;
    background: rgba(0, 245, 255, 0.08);

    &::after {
      width: 60%;
    }
  }
`;

export const GitHubButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  border: 1.5px solid rgba(133, 76, 230, 0.6);
  background: rgba(133, 76, 230, 0.08);
  border-radius: 10px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.25s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background: rgba(133, 76, 230, 0.2);
    border-color: #854ce6;
    color: #fff;
    transform: translateY(-1px);
    box-shadow: 0 4px 20px rgba(133, 76, 230, 0.3);
  }

  @media screen and (max-width: 768px) {
    font-size: 13px;
    padding: 8px 14px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 160px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  padding: 6px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    color: #854ce6;
    background: rgba(133, 76, 230, 0.1);
  }

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  width: 100%;
  padding: 16px 0 24px 0;
  background: rgba(10, 10, 20, 0.97);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(133, 76, 230, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  z-index: 99;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-110%)"};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
`;

export const MobileLink = styled.a`
  width: 100%;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  padding: 14px 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);

  &:hover {
    color: #00f5ff;
    background: rgba(0, 245, 255, 0.05);
    padding-left: 40px;
  }

  &.active {
    color: #00f5ff;
  }
`;

export const MobileNavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 8px 32px 16px 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  width: 100%;
`;

/* Legacy exports for compatibility */
export const MobileMenuItems = styled.ul``;
export const MobileMenuLink = styled(LinkR)``;
export const MobileMenuButton = styled.a``;
