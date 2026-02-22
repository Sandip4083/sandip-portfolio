import { CloseRounded, GitHub, Launch, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(40px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0; left: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 20px;
`;

const Wrapper = styled.div`
  max-width: 540px;
  width: 100%;
  border-radius: 20px;
  background: linear-gradient(145deg, #111120 0%, #0e0e1e 100%);
  border: 1px solid rgba(133, 76, 230, 0.25);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(133, 76, 230, 0.1);
  padding: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  animation: ${slideUp} 0.3s ease-out;
  margin: auto;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(133, 76, 230, 0.3);
    border-color: rgba(133, 76, 230, 0.5);
    transform: scale(1.08);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: contain;
  display: block;
  background: #0d0d1c;
`;

const Content = styled.div`
  padding: 24px 28px 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  margin: 0;
`;

const DateRow = styled.div`
  font-size: 12.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: -6px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

const Tag = styled.div`
  font-size: 11.5px;
  font-weight: 600;
  color: #c084fc;
  background: rgba(133, 76, 230, 0.12);
  border: 1px solid rgba(133, 76, 230, 0.28);
  padding: 4px 10px;
  border-radius: 7px;
  letter-spacing: 0.2px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
`;

const Desc = styled.p`
  font-size: 14.5px;
  line-height: 1.75;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;

const SectionLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #854ce6;
  margin-bottom: 8px;
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
`;

const MemberImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(133, 76, 230, 0.4);
`;

const MemberInfo = styled.div`
  flex: 1;
`;

const MemberName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 8px;
`;

const SocialBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(133, 76, 230, 0.1);
  border: 1px solid rgba(133, 76, 230, 0.25);
  color: #c084fc;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(133, 76, 230, 0.22);
    border-color: #854ce6;
    transform: translateY(-2px);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const ActionButton = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;

  ${({ variant }) => variant === 'primary' ? `
    background: linear-gradient(135deg, #854ce6, #00f5ff);
    color: #fff;
    border: none;

    &:hover {
      filter: brightness(1.1);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(133, 76, 230, 0.4);
    }
  ` : `
    background: rgba(255, 255, 255, 0.05);
    color: #b0b0c8;
    border: 1.5px solid rgba(255, 255, 255, 0.1);

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.18);
      transform: translateY(-2px);
    }
  `}
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  const closeModal = () => setOpenModal({ state: false, project: null });

  return (
    <Modal
      open={true}
      onClose={closeModal}
    >
      <Overlay onClick={closeModal}>
        <Wrapper onClick={(e) => e.stopPropagation()}>
          <CloseBtn onClick={closeModal}>
            <CloseRounded style={{ fontSize: 18 }} />
          </CloseBtn>

          <Image src={project?.image} alt={project?.title} />

          <Content>
            <Title>{project?.title}</Title>

            <DateRow>📅 {project?.date}</DateRow>

            <Tags>
              {project?.tags?.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </Tags>

            <Divider />

            <Desc>{project?.description}</Desc>

            {project?.member && project.member.length > 0 && (
              <>
                <Divider />
                <div>
                  <SectionLabel>Team Members</SectionLabel>
                  <Members>
                    {project.member.map((member, i) => (
                      <Member key={i}>
                        <MemberImage src={member.img} alt={member.name} />
                        <MemberInfo>
                          <MemberName>{member.name}</MemberName>
                        </MemberInfo>
                        <SocialIcons>
                          {member.github && (
                            <SocialBtn href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                              <GitHub style={{ fontSize: 16 }} />
                            </SocialBtn>
                          )}
                          {member.linkedin && (
                            <SocialBtn href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                              <LinkedIn style={{ fontSize: 16 }} />
                            </SocialBtn>
                          )}
                        </SocialIcons>
                      </Member>
                    ))}
                  </Members>
                </div>
              </>
            )}

            <Divider />

            <ButtonGroup>
              {project?.github && (
                <ActionButton href={project.github} target="_blank" rel="noopener noreferrer" variant="secondary">
                  <GitHub style={{ fontSize: 17 }} />
                  Source Code
                </ActionButton>
              )}
              {project?.webapp && (
                <ActionButton href={project.webapp} target="_blank" rel="noopener noreferrer" variant="primary">
                  <Launch style={{ fontSize: 17 }} />
                  Live Demo
                </ActionButton>
              )}
            </ButtonGroup>
          </Content>
        </Wrapper>
      </Overlay>
    </Modal>
  );
};

export default ProjectDetails;