import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 24px 100px;
  overflow: hidden;

  @media (max-width: 960px) {
    padding: 60px 20px 80px;
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
  gap: 16px;
  z-index: 1;
`;

const SectionLabel = styled.div`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #10b981;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.22);
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
    background: linear-gradient(135deg, #10b981, #00f5ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Desc = styled.p`
  font-size: 16px;
  text-align: center;
  max-width: 500px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  line-height: 1.7;
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background: rgba(17, 17, 32, 0.9);
  backdrop-filter: blur(24px);
  padding: 40px 36px;
  border-radius: 24px;
  gap: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: 32px;

  @media (max-width: 640px) {
    padding: 28px 22px;
    gap: 18px;
  }
`;

const ContactTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-family: "Space Grotesk", "Inter", sans-serif;
  margin-bottom: 4px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const Label = styled.label`
  font-size: 12.5px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const ContactInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border: 1.5px solid rgba(255, 255, 255, 0.09);
  outline: none;
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 13px 16px;
  transition: all 0.22s ease;
  font-family: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.5;
  }

  &:focus {
    border-color: rgba(16, 185, 129, 0.5);
    background: rgba(16, 185, 129, 0.04);
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }

  @media (max-width: 640px) {
    font-size: 14px;
    padding: 12px 14px;
  }
`;

const ContactInputMessage = styled.textarea`
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border: 1.5px solid rgba(255, 255, 255, 0.09);
  outline: none;
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 13px 16px;
  transition: all 0.22s ease;
  resize: vertical;
  min-height: 130px;
  font-family: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.5;
  }

  &:focus {
    border-color: rgba(16, 185, 129, 0.5);
    background: rgba(16, 185, 129, 0.04);
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }

  @media (max-width: 640px) {
    font-size: 14px;
    padding: 12px 14px;
    min-height: 110px;
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-align: center;
  background: linear-gradient(135deg, #10b981, #00f5ff);
  padding: 15px 24px;
  border-radius: 12px;
  border: none;
  color: #0a0a14;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.22s ease;
  letter-spacing: 0.3px;
  margin-top: 6px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.35);
    filter: brightness(1.05);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const MessageBox = styled.div`
  padding: 14px 18px;
  border-radius: 12px;
  font-size: 14.5px;
  font-weight: 600;
  animation: ${fadeIn} 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  ${({ success }) =>
    success
      ? css`
          color: #065f46;
          background: rgba(16, 185, 129, 0.12);
          border: 1.5px solid rgba(16, 185, 129, 0.35);

          &::before {
            content: "✅";
          }
        `
      : css`
          color: #7f1d1d;
          background: rgba(220, 38, 38, 0.1);
          border: 1.5px solid rgba(220, 38, 38, 0.35);

          &::before {
            content: "⚠️";
          }
        `}
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
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setMessageType("success");
        setMessageText("Message sent! I'll get back to you soon. 🎉");
        e.target.reset();
      } else {
        let errText = "Failed to send. Please try again.";
        try {
          const data = await response.json();
          if (data?.error) errText = data.error;
        } catch {}
        setMessageType("error");
        setMessageText(errText);
      }
    } catch (err) {
      setMessageType("error");
      setMessageText("Connection error. Check your internet and try again.");
    } finally {
      setIsSending(false);
      clearMessageAfter(6000);
    }
  };

  return (
    <Container id="contact">
      <Wrapper>
        <SectionLabel>Contact</SectionLabel>
        <Title>
          Get In <span>Touch</span>
        </Title>
        <Desc>
          Have a project in mind or want to collaborate? Drop me a message and
          I'll respond promptly.
        </Desc>

        <ContactForm onSubmit={handleSubmit}>
          <ContactTitle>Send a Message ✉️</ContactTitle>

          <InputGroup>
            <Label>Your Email</Label>
            <ContactInput
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>Your Name</Label>
            <ContactInput
              type="text"
              name="name"
              placeholder="John Doe"
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>Subject</Label>
            <ContactInput
              type="text"
              name="subject"
              placeholder="What's this about?"
            />
          </InputGroup>

          <InputGroup>
            <Label>Message</Label>
            <ContactInputMessage
              rows="5"
              name="message"
              placeholder="Tell me about your project..."
              required
            />
          </InputGroup>

          <ContactButton type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message →"}
          </ContactButton>

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
