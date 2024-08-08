import React, { useState, useEffect } from 'react';
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

import colorSharp from "../assets/img/color-sharp-left.png";

export const Skills = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  const responsive = {
    superLargeDesktop: {
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

  const skills = [
    { src: Python, label: "Python", alt: "Python Icon" },
    { src: Flutter, label: "Flutter & Dart", alt: "Flutter Icon" },
    { src: Swift, label: "Swift", alt: "Swift Icon" },
    { src: Flask, label: "Flask", alt: "Flask Icon" },
    { src: NLP, label: "NLP", alt: "NLP Icon" },
    { src: Tensorflow, label: "Machine Learning", alt: "Machine Learning Icon" },
    { src: OpenCV, label: "Computer Vision", alt: "Computer Vision Icon" },
    { src: Django, label: "Django", alt: "Django Icon" },
    { src: Streamlit, label: "Streamlit", alt: "Streamlit Icon" },
    { src: ReactIcon, label: "React", alt: "React Icon" },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    setIsMobileOrTablet(mediaQuery.matches);

    const handleResize = () => setIsMobileOrTablet(mediaQuery.matches);
    mediaQuery.addListener(handleResize);

    return () => mediaQuery.removeListener(handleResize);
  }, []);

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Experienced Python Developer, proficient in Mobile Application Development, Full Stack Development, Natural Language Processing, Computer Vision, and Machine Learning.</p>
              {isMobileOrTablet ? (
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                  {skills.map((skill, index) => (
                    <div className="item" key={index}>
                      <img src={skill.src} alt={skill.alt} />
                      <h5>{skill.label}</h5>
                    </div>
                  ))}
                </Carousel>
              ) : (
                <div className="grid-container">
                  {skills.map((skill, index) => (
                    <div className="grid-item" key={index}>
                      <img src={skill.src} alt={skill.alt} />
                      <h5>{skill.label}</h5>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
