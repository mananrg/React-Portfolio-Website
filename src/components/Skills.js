import Python from "../assets/img/icons8-python.svg";
import Swift from "../assets/img/icons8-swift-480.svg";
import OpenCV from "../assets/img/icons8-opencv.svg";
import Django from "../assets/img/icons8-django.svg";
import NLP from "../assets/img/spacy.svg";
import Tensorflow from "../assets/img/icons8-tensorflow.svg";
import Flutter from "../assets/img/icons8-flutter.svg";
import Flask from "../assets/img/flask.svg";
import Streamlit from '../assets/img/streamlit.png';
import ReactIcon  from '../assets/img/react.png';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp-left.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Experienced Python Developer, proficient in Mobile Application Development, Full Stack Development Natural Language Processing and Computer Vision and Machine Learning.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={Python} alt="Python Icon" />
                  <h5>Python</h5>
                </div>

                <div className="item">
                  <img src={Flutter} alt="Dart Icon" />
                  <h5>Flutter & Dart</h5>
                </div>

                <div className="item">
                  <img src={Swift} alt="Swift Icon" />
                  <h5>Swift</h5>
                </div>

                <div className="item">
                  <img src={Flask} alt="Flask Icon" />
                  <h5>Flask</h5>
                </div>

                <div className="item">
                  <img src={NLP} alt="NLP Icon" />
                  <h5>NLP</h5>
                </div>

                <div className="item">
                  <img src={Tensorflow} alt="Machine Learning Icon" />
                  <h5>Machine Learning</h5>
                </div>

                <div className="item">
                  <img src={OpenCV} alt="Computer Vision Icon" />
                  <h5>Computer Vision</h5>
                </div>
                {/*https://nikitahl.github.io/svg-circle-progress-generator*/}


                <div className="item">
                  <img src={Django} alt="Django Icon" />
                  <h5>Django</h5>
                </div>

                <div className="item">
                  <img src={Streamlit} alt="Streamlit Icon" />
                  <h5>Streamlit</h5>
                </div>

                <div className="item">
                  <img src={ReactIcon} alt="React Icon" />
                  <h5>React</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image"/>
    </section>
  )

}