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

const gradientText = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 10px;
  letter-spacing: 2px;
  background: linear-gradient(135deg, #00f5ff 0%, #ff006e 50%, #b794f6 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientText} 4s ease infinite;

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
  backdrop-filter: blur(30px);
  padding: 45px 40px;
  border-radius: 25px;
  gap: 22px;
  border: 2px solid rgba(0, 245, 255, 0.3);
  box-shadow: 0 5px 20px rgba(0, 245, 255, 0.2);

  @media (max-width: 768px) {
    padding: 35px 25px;
    gap: 20px;
  }
`;

const ContactTitle = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: 700;
  background: linear-gradient(135deg, #00f5ff, #ff006e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const InputWrapper = styled.div`
  position: relative;

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
    letter-spacing: 0.5px;
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
  transition: all 0.25s ease;

  &::placeholder {
    color: transparent;
  }

  &:focus {
    border: 2px solid #00f5ff;
    background: rgba(0, 245, 255, 0.05);
    box-shadow: 0 0 12px rgba(0, 245, 255, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 15px;
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
  transition: all 0.25s ease;
  resize: vertical;
  min-height: 140px;
  font-family: inherit;

  &::placeholder {
    color: transparent;
  }

  &:focus {
    border: 2px solid #00f5ff;
    background: rgba(0, 245, 255, 0.05);
    box-shadow: 0 0 12px rgba(0, 245, 255, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 14px 18px;
    min-height: 120px;
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-align: center;
  background: linear-gradient(135deg, #00f5ff 0%, #0080ff 100%);
  padding: 17px 24px;
  border-radius: 15px;
  border: none;
  color: white;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-top: 10px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 5px 20px rgba(0, 245, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 25px rgba(0, 245, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: linear-gradient(135deg, #555, #777);
    cursor: not-allowed;
    opacity: 0.6;
    transform: none;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 15px 20px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MessageBox = styled.div`
  margin-top: 10px;
  padding: 15px 20px;
  border-radius: 15px;
  font-size: 15px;
  font-weight: 600;
  animation: ${fadeIn} 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    font-size: 22px;
  }

  ${({ success }) =>
    success
      ? css`
          color: #0f5132;
          background: linear-gradient(135deg, #d1e7dd 0%, #a3cfbb 100%);
          border: 2px solid #00f5ff;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);

          &::before {
            content: "✅";
          }
        `
      : css`
          color: #842029;
          background: linear-gradient(135deg, #f8d7da 0%, #f1aeb5 100%);
          border: 2px solid #ff006e;
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.25);

          &::before {
            content: "⚠️";
          }
        `}

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 13px 16px;
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
        <Title>Get In Touch</Title>
        <Desc>
          Have a project in mind or want to collaborate? Drop me a message!
        </Desc>

        <ContactForm onSubmit={handleSubmit}>
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

          <ContactButton type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
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
