// src/components/Contact.js
import { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-align: center;
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

/* Inline message styled under the button */
const MessageBox = styled.div`
  margin-top: 10px;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 15px;
  display: inline-block;
  ${({ success, theme }) =>
    success
      ? css`
          color: #0f5132;
          background: #d1e7dd;
          border: 1px solid #badbcc;
        `
      : css`
          color: #842029;
          background: #f8d7da;
          border: 1px solid #f5c2c7;
        `}
`;

/* small helper to disable button while sending */
const DisabledOverlay = styled.div`
  pointer-events: none;
  opacity: 0.6;
`;

const Contact = () => {
  const [messageText, setMessageText] = useState(null); // string or null
  const [messageType, setMessageType] = useState(null); // 'success' | 'error' | null
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
        setMessageText("✅ Your message has been sent successfully!");
        e.target.reset();
      } else {
        // try to read returned json for error detail (optional)
        let errText = "❌ Failed to send message. Please try again!";
        try {
          const data = await response.json();
          if (data && data.error) errText = `❌ ${data.error}`;
        } catch (err) {
          // ignore parse errors
        }
        setMessageType("error");
        setMessageText(errText);
      }
    } catch (err) {
      console.error("Formspree Error:", err);
      setMessageType("error");
      setMessageText(
        "❌ Failed to send message. Please check your connection."
      );
    } finally {
      setIsSending(false);
      clearMessageAfter(6000);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>

        <ContactForm onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>

          <ContactInput
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />
          <ContactInput
            type="text"
            placeholder="Your Name"
            name="name"
            required
          />
          <ContactInput type="text" placeholder="Subject" name="subject" />
          <ContactInputMessage
            placeholder="Message"
            rows="4"
            name="message"
            required
          />

          {/* Disable visually while sending */}
          {isSending ? (
            <DisabledOverlay>
              <ContactButton type="button" disabled>
                Sending...
              </ContactButton>
            </DisabledOverlay>
          ) : (
            <ContactButton type="submit">Send</ContactButton>
          )}

          {/* Inline message under the button */}
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
