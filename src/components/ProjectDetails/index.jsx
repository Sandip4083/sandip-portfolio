import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000000a7;
    display: flex;
    align-items: top;
    justify-content: center;
    overflow-y: scroll;
    transition: all 0.5s ease;
`;

// 🔥 EXTRA SMALL MODAL: 360px max-width
const Wrapper = styled.div`
    max-width: 360px;
    width: 92%;
    border-radius: 10px;
    margin: 25px 10px;
    height: min-content;
    background-color: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text_primary};
    padding: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
`;

// 🔥 Title: 16px
const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 3px 3px 0px 3px;
    line-height: 1.3;
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
`;

// 🔥 Date: 10px
const Date = styled.div`
    font-size: 10px;
    margin: 2px 3px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 9px;
    }
`

// 🔥 Description: 11px
const Desc = styled.div`
    font-size: 11px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin: 3px 3px;
    line-height: 1.5;
    @media only screen and (max-width: 600px) {
        font-size: 10px;
    }
`;

// 🔥 Image: compact
const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    margin-top: 10px;
    box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.3);
`;

// 🔥 Label: 14px
const Label = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 3px 3px;
    @media only screen and (max-width: 600px) {
        font-size: 13px;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 3px 0px;
    gap: 3px;
`;

// 🔥 Tag: 9px
const Tag = styled.div`
    font-size: 9px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    padding: 2px 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.primary + 20};
    @media only screen and (max-width: 600px) {
        font-size: 8px;
    }
`;

const Members = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 5px 3px;
`;

const Member = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

// 🔥 Member Image: 26px
const MemberImage = styled.img`
    width: 26px;
    height: 26px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 600px) {
        width: 24px;
        height: 24px;
    }
`;

// 🔥 Member Name: 11px
const MemberName = styled.div`
    font-size: 11px;
    font-weight: 500;
    flex: 1;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 600px) {
        font-size: 10px;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 6px 0px 3px 0px;
    gap: 6px;
`;

// 🔥 Button: 11px, compact
const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 7px 8px;
    border-radius: 7px;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }
    @media only screen and (max-width: 600px) {
        font-size: 10px;
        padding: 6px 7px;
    }
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 6px;
`;

const index = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "6px",
                            right: "10px",
                            cursor: "pointer",
                            fontSize: "18px",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <Image src={project?.image} />
                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project?.description}</Desc>
                    {project.member && (
                        <>
                            <Label>Members</Label>
                            <Members>
                                {project?.member.map((member, index) => (
                                    <Member key={index}>
                                        <MemberImage src={member.img} />
                                        <MemberName>{member.name}</MemberName>
                                        <SocialIcons>
                                            <a href={member.github} target="new" style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
                                                <GitHub style={{ fontSize: '16px' }} />
                                            </a>
                                            <a href={member.linkedin} target="new" style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
                                                <LinkedIn style={{ fontSize: '16px' }} />
                                            </a>
                                        </SocialIcons>
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}
                    <ButtonGroup>
                        <Button href={project?.webapp} target='new'>View Live App</Button>
                    </ButtonGroup>
                </Wrapper>
            </Container>
        </Modal>
    )
}

export default index