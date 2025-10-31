import styled from 'styled-components';

const Button = styled.button`
    display: none;
    width: 100%;
    padding: 8px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 12px;
    font-weight: 700;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
`

const Card = styled.div`
    width: 200px;
    height: 260px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 8px ${({ theme }) => theme.primary}88;
    overflow: hidden;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 16px ${({ theme }) => theme.primary};
    }

    &:hover ${Button} {
        display: block;
    }

    @media (max-width: 768px) {
        width: 100%;
        max-width: 280px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 95px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 7px;
    box-shadow: 0 0 10px 2px rgba(0,0,0,0.3);
    object-fit: contain;
    flex-shrink: 0;
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 3px;
    margin-top: 2px;
    flex-shrink: 0;
`

const Tag = styled.span`
    font-size: 9px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => `${theme.primary}15`};
    padding: 2px 4px;
    border-radius: 5px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 0px;
    flex: 1;
    min-height: 0;
    overflow: hidden;
`

const Title = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    line-height: 1.3;
`

const Date = styled.div`
    font-size: 9px;
    margin-top: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
`

const Description = styled.div`
    font-size: 11px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 2px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    line-height: 1.4;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-top: 4px;
    min-height: 22px;
    margin-top: auto;
    flex-shrink: 0;
`

const Avatar = styled.img`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-left: -5px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
    border: 1.5px solid ${({ theme }) => theme.card};
    flex-shrink: 0;
    
    &:first-child {
        margin-left: 0;
    }
`

const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <Card onClick={() => setOpenModal({ state: true, project })}>
            <Image src={project.image} alt={project.title} />
            <Tags>
                {project.tags?.slice(0, 3).map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            {project.member && project.member.length > 0 && (
                <Members>
                    {project.member.map((member, index) => (
                        <Avatar key={index} src={member.img} alt="Project member" />
                    ))}
                </Members>
            )}
        </Card>
    )
}

export default ProjectCards