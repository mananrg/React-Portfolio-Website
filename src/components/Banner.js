import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/development.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import DownloadButton from "./DownloadResume";

export const Banner = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Developer", "Python Enthusiast", "Mobile App Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-right">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Manan -`} <span className="txt-rotate" dataPeriod="1000" data-rotate={toRotate}><span className="wrap">{text}</span></span></h1>

                <p>I am a software engineer and machine learning specialist with expertise in Python, Flutter, and other programming languages. Over 2+ years of experience developing full-stack mobile and web applications, integrating APIs, and leveraging cutting-edge technologies like computer vision and natural language processing.</p>
                <DownloadButton />
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""} id="phoneImg">
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility> 
          </Col>
        </Row>
      </Container>
    </section>
  )
 
}
