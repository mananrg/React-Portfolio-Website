import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Cards } from "./Cards";
import Arduino from "../assets/img/Certificates/Arduino.jpeg";
import ComputerVision from "../assets/img/Certificates/ComputerVision.jpeg";
import DeepLearningComputerVision from "../assets/img/Certificates/DeepLearningComputerVision.jpeg";
import Django from "../assets/img/Certificates/Django.jpeg";
import Flask from "../assets/img/Certificates/Flask.jpeg";
import Esp32 from "../assets/img/Certificates/Esp32.jpeg";
import FlutterOLX from "../assets/img/Certificates/Flutter OLX Clone.jpeg";
import MachineLearningND from "../assets/img/Certificates/machine-learning-nanodegree.svg";
import NLP from "../assets/img/Certificates/NLP.jpeg";
import PythonND from "../assets/img/Certificates/python-nanodegree.svg";
import tensorflow from "../assets/img/Certificates/tensorflow.jpeg";
import colorSharp2 from "../assets/img/color-sharp-right.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ImageSlider from "./ProjectSlider";

import img1 from "../assets/img/ExtraCurriculum/1.jpg";
import img3 from "../assets/img/ExtraCurriculum/3.jpg";
import img4 from "../assets/img/ExtraCurriculum/4.jpg";
import img5 from "../assets/img/ExtraCurriculum/5.jpg";
import img6 from "../assets/img/ExtraCurriculum/6.jpg";
import img7 from "../assets/img/ExtraCurriculum/7.jpg";
import img8 from "../assets/img/ExtraCurriculum/8.jpg";
import img9 from "../assets/img/ExtraCurriculum/9.jpg";
import img10 from "../assets/img/ExtraCurriculum/10.jpg";
import img11 from "../assets/img/ExtraCurriculum/11.jpg";
import img12 from "../assets/img/ExtraCurriculum/12.jpg";
import img13 from "../assets/img/ExtraCurriculum/13.jpg";
import img14 from "../assets/img/ExtraCurriculum/14.jpg";
import img15 from "../assets/img/ExtraCurriculum/15.jpg";
import img16 from "../assets/img/ExtraCurriculum/16.jpg";
import img17 from "../assets/img/ExtraCurriculum/17.jpg";
import img18 from "../assets/img/ExtraCurriculum/18.jpg";
import img19 from "../assets/img/ExtraCurriculum/19.jpg";

export const ProjAndCertificates = () => {
  const certificates = [
    {
      title: "App Development",
      description: "OLX CLONE",
      imgUrl: FlutterOLX,
    },
    {
      title: "Web Development",
      description: "Django Web Dev Fullstack",
      imgUrl: Django,
    },
    {
      title: "Web Development",
      description: "Flask Bootcamp",
      imgUrl: Flask,
    },
    {
      title: "Programming",
      description: "Udacity - Python Nanodegree",
      imgUrl: PythonND,
    },
    {
      title: "Machine Learning",
      description: "Udacity - Machine Learning Nanodegree",
      imgUrl: MachineLearningND,
    },
    {
      title: "Computer Vision",
      description: "Master Computer Vision - OpenCV3",
      imgUrl: ComputerVision,
    },
    {
      title: "Natural Language Processing",
      description: "NLP using spacy and NLTK",
      imgUrl: NLP,
    },
    {
      title: "Deep Learning",
      description: "Deep Learning using Tensorflow and Machine Learning",
      imgUrl: tensorflow,
    },
    {
      title: "Computer Vision",
      description: "Autonomous Car",
      imgUrl: DeepLearningComputerVision,
    },
    {
      title: "IoT",
      description: "Esp32 for Arduino Makers",
      imgUrl: Esp32,
    },
    {
      title: "IoT",
      description: "Introduction to Arduino",
      imgUrl: Arduino,
    },
  ];
  const extraCurriculum = [
    {
      title: "",
      description: "",
      imgUrl: img16,
    },
    {
      title: "",
      description: "",
      imgUrl: img1,
    },
    {
      title: "",
      description: "",
      imgUrl: img8,
    },
    {
      title: "",
      description: "",
      imgUrl: img9,
    },
    {
      title: "",
      description: "",
      imgUrl: img10,
    },

    {
      title: "",
      description: "",
      imgUrl: img12,
    },
    {
      title: "",
      description: "",
      imgUrl: img13,
    },

    {
      title: "",
      description: "",
      imgUrl: img17,
    },
    {
      title: "",
      description: "",
      imgUrl: img18,
    },
    {
      title: "",
      description: "",
      imgUrl: img5,
    },

    {
      title: "",
      description: "",
      imgUrl: img3,
    },
    {
      title: "",
      description: "",
      imgUrl: img14,
    },
    {
      title: "",
      description: "",
      imgUrl: img19,
    },
    {
      title: "",
      description: "",
      imgUrl: img4,
    },

    {
      title: "",
      description: "",
      imgUrl: img6,
    },
    {
      title: "",
      description: "",
      imgUrl: img7,
    },

    {
      title: "",
      description: "",
      imgUrl: img15,
    },
    {
      title: "",
      description: "",
      imgUrl: img11,
    },
    {
      title: "",
      description: "",
      imgUrl: img11,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="project-certificate-title">
                    Projects and Certifications
                  </h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Certificates</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Extra</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <ImageSlider />
                        <a href="https://github.com/mananrg" id="github-repo">
                          ALL PROJECTS
                        </a>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {certificates.map((certificate, index) => {
                            return <Cards key={index} {...certificate} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {extraCurriculum.map((certificate, index) => {
                            return <Cards key={index} {...certificate} />;
                          })}
                        </Row>{" "}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
