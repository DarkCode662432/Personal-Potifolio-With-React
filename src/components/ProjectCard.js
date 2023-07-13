import "./styles/ProjectCard.css";
import { Col, Row } from "react-bootstrap";
const ProjectCard = ({title, description, imgUrl}) => {
  return (
      <Col sm={6} md={4}>
        <div className="project-impBox">
          <img src={imgUrl} alt="" />
          <div className="project-text">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>
  );
}

export default ProjectCard;
