import React from "react";
import Wrapper from "../Wrapper";
import "./style.css";

function About(props) {
  return (
    <Wrapper>
        <div className="aboutme"> 
          <div className="card mypic">
            <img src={process.env.PUBLIC_URL + "/assets/images/joel.jpg"} alt="#" />
          </div>
          <div className="card mybio">
            Full Stack Web Developer with a passion for object-oriented programing. Currently a Certified Scrum Master with 
            a BS in Mechanical Engineering. Experienced project manager with a proven record of leadership and execution of 
            complex and challenging technical projects. Diverse military and civilian background spanning multiple disciplines 
            and industries. Strong interpersonal and communication skills utilized to lead and motivate cross-functional teams 
            to achieve stretch goals. Creative and innovative problem solver with relentless focus on learning new skills.
          </div>
        </div>
        
        
        <a href="https://www.linkedin.com/in/joelfecke/" target="_blank" rel="noopener noreferrer" className="card card2">
          <img src={process.env.PUBLIC_URL + "/assets/images/linkedIn.png"}alt="#" />
        </a>
        <a href="https://gdoc.pub/doc/e/2PACX-1vQAoZiMlNIH07BIpJIN3s9i0fWRbpMWNLrgv_i11wksvx-MYkiMm2MRAE_3qsZTk2frX75IR8x43OpE" target="_blank" rel="noopener noreferrer" className="card card2">
          <img src={process.env.PUBLIC_URL + "/assets/images/resume.png"} alt="#" />
        </a>
        <a href="https://github.com/jfecke" target="_blank" rel="noopener noreferrer" className="card card2">
          <img src={process.env.PUBLIC_URL + "/assets/images/github.png"} alt="#" />
        </a>
    </Wrapper>
  );
}

export default About;
