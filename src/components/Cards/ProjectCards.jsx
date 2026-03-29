import styled from 'styled-components';
import { FaExternalLinkAlt, FaBookOpen } from 'react-icons/fa';

/* ── Category colors ── */
const CATEGORY_COLORS = {
  'web app': { color: '#00f5ff', bg: 'rgba(0, 245, 255, 0.10)', border: 'rgba(0, 245, 255, 0.25)' },
  'Machine Learning': { color: '#c084fc', bg: 'rgba(133, 76, 230, 0.10)', border: 'rgba(133, 76, 230, 0.25)' },
  'mobile app': { color: '#34d399', bg: 'rgba(52, 211, 153, 0.10)', border: 'rgba(52, 211, 153, 0.25)' },
  'AI Game': { color: '#fbbf24', bg: 'rgba(251, 191, 36, 0.10)', border: 'rgba(251, 191, 36, 0.25)' },
};
const getColor = (cat) => CATEGORY_COLORS[cat] || CATEGORY_COLORS['web app'];

/* ── Card ── */
const Card = styled.div`
  width: 320px;
  background: rgba(17, 17, 32, 0.85);
  border-radius: 16px;
  border: 1px solid rgba(133, 76, 230, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.26s ease, box-shadow 0.26s ease, border-color 0.26s ease;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.35);
  position: relative;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 16px 40px rgba(133, 76, 230, 0.2), 0 4px 12px rgba(0, 0, 0, 0.4);
    border-color: rgba(133, 76, 230, 0.45);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 360px;
  }
`;



/* ── Image ── */
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 190px;
  overflow: hidden;
  background: #0d0d1c;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${({ isLogo }) => isLogo ? 'contain' : 'cover'};
  object-position: center;
  padding: ${({ isLogo }) => isLogo ? '2px' : '0'};
  display: block;
  background: #0d0d1c;
  transition: transform 0.42s ease;

  ${Card}:hover & {
    transform: scale(1.06);
  }
`;


const ImageBottomGradient = styled.div`
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 50px;
  background: linear-gradient(to top, rgba(17, 17, 32, 0.95), transparent);
  pointer-events: none;
`;

/* ── Status + Category badges ── */
const BadgeRow = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 4;
`;

const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
  backdrop-filter: blur(10px);
  background: rgba(10, 10, 20, 0.85);
  border: 1px solid rgba(52, 211, 153, 0.5);
  color: #34d399;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #34d399;
    box-shadow: 0 0 6px #34d399;
  }
`;

const CategoryBadge = styled.div`
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({ cat }) => getColor(cat).color};
  background: rgba(10, 10, 20, 0.85);
  border: 1px solid ${({ cat }) => getColor(cat).border};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
`;

/* ── Body ── */
const CardBody = styled.div`
  padding: 16px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const Tag = styled.span`
  font-size: 10.5px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 5px;
  letter-spacing: 0.2px;
  color: ${({ cat }) => getColor(cat).color};
  background: ${({ cat }) => getColor(cat).bg};
  border: 1px solid ${({ cat }) => getColor(cat).border};
`;

const Title = styled.div`
  font-size: 15.5px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.35;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  text-transform: capitalize;
`;

const DateRow = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: -4px;
  opacity: 0.75;
`;

const Description = styled.div`
  font-size: 13px;
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  flex: 1;
`;

/* ── Footer with visible buttons ── */
const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const FooterBtn = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 10px;
  border-radius: 9px;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;

  ${({ variant }) => variant === 'live' ? `
    background: linear-gradient(135deg, #854ce6, #00f5ff);
    color: #fff;
    border: none;
    &:hover {
      filter: brightness(1.12);
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(133, 76, 230, 0.35);
    }
  ` : `
    background: rgba(255, 255, 255, 0.05);
    color: #a0a0c0;
    border: 1px solid rgba(255, 255, 255, 0.08);
    &:hover {
      background: rgba(133, 76, 230, 0.1);
      border-color: rgba(133, 76, 230, 0.3);
      color: #c084fc;
    }
  `}
`;


const ProjectCards = ({ project }) => {
  const hasAbout = !!(project.About || project.github);
  const hasLive = !!(project.Live || project.webapp);
  const aboutUrl = project.About || project.github;
  const liveUrl = project.Live || project.webapp;

  return (
    <Card>

      <ImageWrapper>
        <Image src={project.image} alt={project.title} isLogo={project.isLogo} />
        <ImageBottomGradient />

        <BadgeRow>
          {hasLive && <StatusBadge>Live</StatusBadge>}
          <CategoryBadge cat={project.category}>
            {project.category === 'web app' ? 'Web' :
              project.category === 'mobile app' ? 'Mobile' :
                project.category === 'Machine Learning' ? 'ML/AI' :
                  project.category === 'AI Game' ? 'Game' : project.category}
          </CategoryBadge>
        </BadgeRow>
      </ImageWrapper>

      <CardBody>
        <Tags>
          {project.tags?.slice(0, 4).map((tag, i) => (
            <Tag key={i} cat={project.category}>{tag}</Tag>
          ))}
        </Tags>
        <Title>{project.title}</Title>
        <DateRow>📅 {project.date}</DateRow>
        <Description>{project.description}</Description>

        <Footer onClick={(e) => e.stopPropagation()}>
          {hasAbout && (
            <FooterBtn href={aboutUrl} target="_blank" rel="noopener noreferrer" variant="about">
              <FaBookOpen size={11} /> About
            </FooterBtn>
          )}
          {hasLive && (
            <FooterBtn href={liveUrl} target="_blank" rel="noopener noreferrer" variant="live">
              <FaExternalLinkAlt size={10} /> Live
            </FooterBtn>
          )}
        </Footer>
      </CardBody>
    </Card>
  );
};

export default ProjectCards;