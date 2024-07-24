import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
       {/*   <MailchimpForm />*/}
          <Col  className="contact-padding">
            <img src={logo} alt="Logo" />
            <p>Email: gandhimanan1@gmail.com</p>
            <p>Contact: +1-9543107438</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mananrg/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Linkedin" /></a>
              <a href="https://github.com/mananrg" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Github" /></a>
              <a href="https://gandhimanan1.medium.com/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
