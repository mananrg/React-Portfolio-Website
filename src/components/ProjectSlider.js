import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PlanetsApp from "../assets/img/PlanetsApp.png";
import Chatbot from "../assets/img/Chatbot.png";
import PortfolioWebsite from "../assets/img/PortfolioWebsite.png";
import SecondHandz from "../assets/img/SecondHandz.png";
import CodeGIF from "../assets/img/code.gif";
import PortfolioNew from "../assets/img/PortfolioNew.png";
import ToDoGen from "../assets/img/ToDoRN.png";
import ReadmeGen from "../assets/img/StreamlitReadmeGen.png";
const images = [
  { link: 'https://github.com/mananrg/Flutter-solar-application.git', url: PlanetsApp, altText: 'Planets App' },
  { link: 'https://github.com/mananrg/Flutter_ChatGPT_Bot.git', url: Chatbot, altText: 'Chatbot App' },
  { link: 'https://github.com/mananrg/Second-Cycle', url: SecondHandz, altText: 'Second Handz' },
  { link: 'https://github.com/mananrg/react-portfolio-website', url: PortfolioNew, altText: 'Portfolio Website' },
  { link: 'https://github.com/mananrg/Streamlit-README.gen.git', url: ReadmeGen, altText: 'Streamlit Readme Generator'},
  { link: 'https://github.com/mananrg/Task-Manager-ReactNative.git', url: ToDoGen, altText: 'React Native ToDo Generator'}
  // Add other project images here
];

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToScroll: 1, // Scroll only one project at a time
  slidesToShow: 3,

  responsive: [
    {
      breakpoint: 1024, // Adjust breakpoint depending on desired screen size
      settings: {
        slidesToShow: 3, // Show 3 projects on larger screens
      }
    },
    {
      breakpoint: 600, // Adjust breakpoint for phone screens
      settings: {
        slidesToShow: 1, // Show 1 project on smaller screens
      }
    }
  ]
};

const ImageSlider = () => (
  <Slider {...settings}>
    {images.map(({ url, altText, link }) => (
      <div key={url} className="project-slider-div">
        <div className="project-slider">
          <img src={url} alt={altText} className="project-slider-image" />
          <a href={link} target="_blank" className="project-link" rel="noreferrer">
            <img src={CodeGIF}></img>
          </a>
        </div>
      </div>
    ))}
  </Slider>
);

export default ImageSlider;
