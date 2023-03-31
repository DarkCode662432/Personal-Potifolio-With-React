import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import HeaderImg from '../assets/img/header-img.svg';
import './styles/Bannar.css';


const Bannar = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Front-end Web Developer", "Front-end Web Designer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random()*100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
    setText(updateText);
    
    if (isDeleting) {
      setDelta(prevDelta => prevDelta/2);
    }
    
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    }else if (isDeleting && updateText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum+1);
      setDelta(500);
    }
  }

  return (
    <header className="bannar" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portifolio</span>
            <h1>
              {`Hi I'm Faisal, `} <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              nulla exercitationem blanditiis assumenda possimus, autem in,
              cumque voluptatum, repudiandae velit magnam minus? Veritatis vero
              saepe aut ipsa velit, quidem nam adipisci rem. Delectus ratione
              numquam, modi labore eius cupiditate est possimus facilis
              voluptatum odit nisi repellendus, hic aliquid, commodi deserunt!
            </p>
            <button onClick={()=> console.log("Connect")}>Let's Connect <ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={HeaderImg} alt="Header Img" className="bg-img" />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Bannar;