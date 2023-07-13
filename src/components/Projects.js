import "./styles/Projects.css";
import projImg1 from "../assets/img/proj-img1.png";
import projImg2 from "../assets/img/proj-img2.png";
import projImg3 from "../assets/img/proj-img3.png";
import { Col, Container, Row } from "react-bootstrap";

const Projects = () => {
  const projects = [
    {
      title: "Buiness Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Buiness Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Buiness Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Buiness Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Buiness Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Buiness Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              aperiam quasi iusto eveniet corrupti tenetur et.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
