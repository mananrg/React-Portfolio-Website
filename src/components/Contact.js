import React, { useRef, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';


const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLICKEY;

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    reply_to: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.first_name || !formData.last_name || !formData.reply_to || !formData.message) {
      alert("The form is incomplete. Please fill in all fields!");
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
        alert("Email Sent Successfully!");
        // Reset the form data after successful submission
        setFormData({
          first_name: '',
          last_name: '',
          reply_to: '',
          message: '',
        });
      }, (error) => {
        console.log(error.text);
        alert("Email Failed, Trying using the contact listed below");
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={20} sm={6} className="px-1">
                        <input
                          placeholder="First Name"
                          type="text"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col size={20} sm={6} className="px-1">
                        <input
                          placeholder="Last Name"
                          type="text"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col size={20} sm={12} className="px-1">
                        <input
                          placeholder="Email address"
                          type="email"
                          name="reply_to"
                          value={formData.reply_to}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col size={20} sm={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input className="contact-form-btn" type="submit" value="Send" />
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
