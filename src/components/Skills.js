import Carousel from "react-multi-carousel";
import { Row, Container, Col } from "react-bootstrap";
import ItemSkill from "./ItemSkill";
import "react-multi-carousel/lib/styles.css";
import "./styles/Skills.css"
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt aliquid unde voluptas iusto facere optio laboriosam
                nisi? Commodi repellat vero quam voluptas error soluta dolore.
                Laboriosam eos impedit reprehenderit possimus!
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <ItemSkill img={meter1} title="Web Devolpment"></ItemSkill>
                <ItemSkill img={meter2} title="Brand Identity"></ItemSkill>
                <ItemSkill img={meter3} title="Logo Design"></ItemSkill>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
};

export default Skills;
