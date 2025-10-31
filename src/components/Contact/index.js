// src/components/Contact/index.js
import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 20px 100px 20px;
  overflow: hidden;

  /* Animated mesh gradient background */
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
        circle at 20% 30%,
        rgba(0, 245, 255, 0.15) 0%,
        transparent 40%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(255, 0, 110, 0.12) 0%,
        transparent 40%
      ),
      radial-gradient(
        circle at 50% 50%,
        rgba(183, 148, 246, 0.1) 0%,
        transparent 50%
      );
    animation: meshMove 20s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes meshMove {
    0%,
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(5%, -5%) rotate(120deg);
    }
    66% {
      transform: translate(-5%, 5%) rotate(240deg);
    }
  }

  @media (max-width: 960px) {
    padding: 40px 16px 80px 16px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 20px;
  z-index: 1;
`;

// 🔥 Holographic title with 3D effect
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const holographicShift = keyframes`
  0% { 
    background-position: 0% 50%;
    filter: hue-rotate(0deg);
  }
  50% { 
    background-position: 100% 50%;
    filter: hue-rotate(20deg);
  }
  100% { 
    background-position: 0% 50%;
    filter: hue-rotate(0deg);
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 10px;
  position: relative;
  letter-spacing: 2px;

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
  animation: ${holographicShift} 5s ease infinite,
    ${float} 3s ease-in-out infinite;

  /* 3D text shadow */
  filter: drop-shadow(0 0 30px rgba(0, 245, 255, 0.5))
    drop-shadow(0 0 60px rgba(255, 0, 110, 0.3));

  @media (max-width: 768px) {
    font-size: 38px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 30px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// 🔥 Futuristic card with border animation
const borderGlow = keyframes`
  0%, 100% {
    border-color: rgba(0, 245, 255, 0.5);
    box-shadow: 
      0 0 20px rgba(0, 245, 255, 0.3),
      0 0 40px rgba(255, 0, 110, 0.2),
      inset 0 0 40px rgba(0, 245, 255, 0.05);
  }
  50% {
    border-color: rgba(255, 0, 110, 0.5);
    box-shadow: 
      0 0 30px rgba(255, 0, 110, 0.4),
      0 0 60px rgba(0, 245, 255, 0.3),
      inset 0 0 60px rgba(255, 0, 110, 0.08);
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    135deg,
    rgba(15, 14, 23, 0.95) 0%,
    rgba(23, 23, 33, 0.9) 100%
  );
  backdrop-filter: blur(30px) saturate(150%);
  padding: 50px 45px;
  border-radius: 30px;
  gap: 20px;
  position: relative;
  overflow: hidden;

  /* Animated glowing border */
  border: 2px solid rgba(0, 245, 255, 0.5);
  animation: ${borderGlow} 4s ease-in-out infinite;

  /* Corner accents */
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    border: 3px solid;
    border-color: transparent;
    transition: all 0.5s ease;
  }

  &::before {
    top: 0;
    left: 0;
    border-top-color: #00f5ff;
    border-left-color: #00f5ff;
    border-radius: 30px 0 0 0;
  }

  &::after {
    bottom: 0;
    right: 0;
    border-bottom-color: #ff006e;
    border-right-color: #ff006e;
    border-radius: 0 0 30px 0;
  }

  &:hover::before,
  &:hover::after {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 768px) {
    padding: 35px 25px;
  }
`;

// 🔥 Holographic heading with icon
const ContactTitle = styled.div`
  font-size: 32px;
  margin-bottom: 15px;
  font-weight: 700;
  background: linear-gradient(135deg, #00f5ff, #ff006e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: 15px;

  &::before {
    content: "✉️";
    font-size: 36px;
    filter: drop-shadow(0 0 10px rgba(0, 245, 255, 0.5));
  }

  @media (max-width: 768px) {
    font-size: 26px;

    &::before {
      font-size: 30px;
    }
  }
`;

// 🔥 Futuristic input with scan line effect
const scanLine = keyframes`
  0% { top: 0%; opacity: 0.8; }
  50% { opacity: 0.3; }
  100% { top: 100%; opacity: 0.8; }
`;

const InputWrapper = styled.div`
  position: relative;

  /* Floating label */
  label {
    position: absolute;
    left: 18px;
    top: -10px;
    background: linear-gradient(135deg, #00f5ff, #0080ff);
    color: white;
    padding: 2px 10px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    z-index: 1;
    letter-spacing: 1px;
  }
`;

const ContactInput = styled.input`
  width: 100%;
  background: rgba(10, 10, 20, 0.6);
  border: 2px solid rgba(0, 245, 255, 0.3);
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 15px;
  padding: 16px 20px;
  transition: all 0.4s ease;
  position: relative;

  &::placeholder {
    color: transparent;
  }

  /* Scan line effect on focus */
  &:focus {
    border: 2px solid #00f5ff;
    background: rgba(0, 245, 255, 0.05);
    box-shadow: 0 0 20px rgba(0, 245, 255, 0.3),
      inset 0 0 30px rgba(0, 245, 255, 0.1);
    transform: translateY(-3px);
  }

  &:focus::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00f5ff, transparent);
    animation: ${scanLine} 2s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 14px 18px;
  }
`;

const ContactInputMessage = styled.textarea`
  width: 100%;
  background: rgba(10, 10, 20, 0.6);
  border: 2px solid rgba(0, 245, 255, 0.3);
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 15px;
  padding: 16px 20px;
  transition: all 0.4s ease;
  resize: vertical;
  min-height: 140px;
  font-family: inherit;

  &::placeholder {
    color: transparent;
  }

  &:focus {
    border: 2px solid #00f5ff;
    background: rgba(0, 245, 255, 0.05);
    box-shadow: 0 0 20px rgba(0, 245, 255, 0.3),
      inset 0 0 30px rgba(0, 245, 255, 0.1);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 14px 18px;
  }
`;

// 🔥 Cyberpunk button with animated border
const borderRotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const ButtonWrapper = styled.div`
  position: relative;
  margin-top: 15px;

  /* Rotating border effect */
  &::before {
    content: "";
    position: absolute;
    inset: -3px;
    background: linear-gradient(45deg, #00f5ff, #ff006e, #b794f6, #00f5ff);
    border-radius: 15px;
    animation: ${borderRotate} 3s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-align: center;
  background: linear-gradient(135deg, #00f5ff 0%, #0080ff 100%);
  padding: 18px 24px;
  border-radius: 15px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 5px 20px rgba(0, 245, 255, 0.3);

  /* Liquid effect */
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
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: scale(1.03) translateY(-3px);
    box-shadow: 0 10px 40px rgba(0, 245, 255, 0.5),
      0 0 60px rgba(0, 245, 255, 0.3);
    background: linear-gradient(135deg, #00f5ff 0%, #ff006e 100%);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 16px 20px;
  }
`;

const DisabledOverlay = styled.div`
  pointer-events: none;
  opacity: 0.6;

  button {
    background: linear-gradient(135deg, #555, #777);
  }
`;

// 🔥 Status message with glitch effect
const glitchAnimation = keyframes`
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
`;

const slideInScale = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px) scale(0.8);
  }
  60% {
    transform: translateY(5px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const MessageBox = styled.div`
  margin-top: 15px;
  padding: 16px 20px;
  border-radius: 15px;
  font-size: 15px;
  font-weight: 600;
  animation: ${slideInScale} 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  overflow: hidden;

  /* Icon */
  &::before {
    font-size: 24px;
    animation: ${glitchAnimation} 0.3s ease-in-out;
  }

  /* Animated background bars */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    animation: shimmer 2s ease-in-out infinite;
  }

  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  ${({ success }) =>
    success
      ? css`
          color: #0f5132;
          background: linear-gradient(135deg, #d1e7dd 0%, #a3cfbb 100%);
          border: 2px solid #00f5ff;
          box-shadow: 0 5px 25px rgba(16, 185, 129, 0.4);

          &::before {
            content: "✅";
          }
        `
      : css`
          color: #842029;
          background: linear-gradient(135deg, #f8d7da 0%, #f1aeb5 100%);
          border: 2px solid #ff006e;
          box-shadow: 0 5px 25px rgba(220, 38, 38, 0.4);

          &::before {
            content: "⚠️";
          }
        `}

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 14px 18px;
  }
`;

// 🔥 Decorative particles
const particleFloat = keyframes`
  0%, 100% { 
    transform: translateY(0px) translateX(0px) rotate(0deg);
    opacity: 0.3;
  }
  25% { 
    transform: translateY(-30px) translateX(10px) rotate(90deg);
    opacity: 0.6;
  }
  50% { 
    transform: translateY(-60px) translateX(-10px) rotate(180deg);
    opacity: 0.3;
  }
  75% { 
    transform: translateY(-30px) translateX(10px) rotate(270deg);
    opacity: 0.6;
  }
`;

const DecorativeParticle = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background: ${({ color }) => color || "#00F5FF"};
  border-radius: 50%;
  opacity: 0.3;
  box-shadow: 0 0 10px ${({ color }) => color || "#00F5FF"};
  animation: ${particleFloat} ${(props) => props.duration || "8s"} ease-in-out
    infinite;
  animation-delay: ${(props) => props.delay || "0s"};
  pointer-events: none;

  &:nth-child(1) {
    top: 20%;
    left: 10%;
  }
  &:nth-child(2) {
    top: 40%;
    right: 15%;
  }
  &:nth-child(3) {
    bottom: 30%;
    left: 20%;
  }
  &:nth-child(4) {
    bottom: 50%;
    right: 10%;
  }
  &:nth-child(5) {
    top: 60%;
    left: 50%;
  }
`;

const Contact = () => {
  const [messageText, setMessageText] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const clearMessageAfter = (ms = 6000) => {
    setTimeout(() => {
      setMessageText(null);
      setMessageType(null);
    }, ms);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessageText(null);
    setMessageType(null);

    try {
      const formData = new FormData(e.target);
      const response = await fetch("https://formspree.io/f/mgvlbwnb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setMessageType("success");
        setMessageText("Message sent successfully! I'll get back to you soon.");
        e.target.reset();
      } else {
        let errText = "Failed to send message. Please try again!";
        try {
          const data = await response.json();
          if (data && data.error) errText = data.error;
        } catch (err) {
          // ignore
        }
        setMessageType("error");
        setMessageText(errText);
      }
    } catch (err) {
      console.error("Formspree Error:", err);
      setMessageType("error");
      setMessageText("Connection error. Please check your internet.");
    } finally {
      setIsSending(false);
      clearMessageAfter(6000);
    }
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Let's Connect</Title>
        <Desc>
          Have a project in mind or want to collaborate? Drop me a message!
        </Desc>

        <ContactForm onSubmit={handleSubmit}>
          {/* Decorative particles */}
          <DecorativeParticle color="#00F5FF" duration="7s" delay="0s" />
          <DecorativeParticle color="#FF006E" duration="9s" delay="1s" />
          <DecorativeParticle color="#B794F6" duration="8s" delay="2s" />
          <DecorativeParticle color="#00F5FF" duration="10s" delay="0.5s" />
          <DecorativeParticle color="#FF006E" duration="7.5s" delay="1.5s" />

          <ContactTitle>Send Message</ContactTitle>

          <InputWrapper>
            <label>EMAIL</label>
            <ContactInput type="email" name="email" required />
          </InputWrapper>

          <InputWrapper>
            <label>NAME</label>
            <ContactInput type="text" name="name" required />
          </InputWrapper>

          <InputWrapper>
            <label>SUBJECT</label>
            <ContactInput type="text" name="subject" />
          </InputWrapper>

          <InputWrapper>
            <label>MESSAGE</label>
            <ContactInputMessage rows="5" name="message" required />
          </InputWrapper>

          {isSending ? (
            <DisabledOverlay>
              <ButtonWrapper>
                <ContactButton type="button" disabled>
                  Sending...
                </ContactButton>
              </ButtonWrapper>
            </DisabledOverlay>
          ) : (
            <ButtonWrapper>
              <ContactButton type="submit">Launch Message</ContactButton>
            </ButtonWrapper>
          )}

          {messageText && (
            <MessageBox success={messageType === "success"}>
              {messageText}
            </MessageBox>
          )}
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
