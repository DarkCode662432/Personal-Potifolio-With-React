import "./styles/Projects.css";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ProjectCard from "./ProjectCard";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";


const Projects = () => {
  const projects = [
    {
      title: "Buiness Startup 1",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Buiness Startup 2",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Buiness Startup 3",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Buiness Startup 4",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Buiness Startup 5",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Buiness Startup 6",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              aperiam quasi iusto eveniet corrupti tenetur et.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" id="pills-tab" className="nav-pilles mb-5 justify-content-center align-items-center">
                <Nav.Item>
                  <Nav.Link eventKey="first">all projcts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Even Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Odd Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard 
                        key={index}
                        {...project}
                        />
                      )
                      })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, index) => {
                      if (project.title[project.title.length-1]%2 === 0){
                        return (
                          <ProjectCard 
                          key={index}
                          {...project}
                          />
                        );
                      }
                    }
                  )}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects.map((project, index) => {
                      if (project.title[project.title.length-1]%2 === 1){
                          return (
                            <ProjectCard 
                            key={index}
                            {...project}
                            />
                          );
                        }
                      }
                    )}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-img-right" src={colorSharp2} alt=""></img>
    </section>
  );
};

export default Projects;
