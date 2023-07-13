import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg";

const Contact = () => {
  const formIntialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  }

  const [formDetails, setFormDetails] = useState(formIntialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = () => {
    
  }

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className="align-item-center">
          <Col>
            <img src={contactImg} alt="Contact Us"/>
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className='px-1'>
                  <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(el) => onFormUpdate('firstName', el.target.value)}/>
                </Col>
                <Col sm={6} className='px-1'>
                  <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(el) => onFormUpdate('lastName', el.target.value)}/>
                </Col>
                <Col sm={6} className='px-1'>
                  <input type='email' value={formDetails.email} placeholder='Email Address' onChange={(el) => onFormUpdate('email', el.target.value)}/>
                </Col>
                <Col sm={6} className='px-1'>
                  <input type='tel' value={formDetails.phone} placeholder='Phone No.' onChange={(el) => onFormUpdate('phone', el.target.value)}/>
                </Col>
                <Col>
                  <textarea row="6" value={formDetails.message} placeholder='Message' onChange={(el) => onFormUpdate('message', el.target.value)}></textarea>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {
                  status.message && 
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
