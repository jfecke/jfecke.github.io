import React from "react";
import "./style.css";

function About(props) {
  return (
    <div  className="aboutme">
      <div className="ContainerofBtn">
        <a href="https://www.linkedin.com/in/joelfecke/" target="_blank" rel="noopener noreferrer" className="card card2">
          <img src={process.env.PUBLIC_URL + "/assets/images/linkedIn.png"}alt="#" />
        </a>
        <a href="https://docs.google.com/document/d/1tWfq-OUi5l_meuzdo1xfOeoL4lNlJ4hA41YoQEdAeVc/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="card card2">
          <img src={process.env.PUBLIC_URL + "/assets/images/resume.png"} alt="#" />
        </a>
        <a href="https://github.com/jfecke" target="_blank" rel="noopener noreferrer" className="card card2">
          <img src={process.env.PUBLIC_URL + "/assets/images/github.png"} alt="#" />
        </a>
      </div>
    </div>
  );
}

export default About;
