import React from "react";
import "./style.css";

function About(props) {
  return (
    <div  className="aboutme">
      <div className="ContainerofBtn">
        <a href="https://www.linkedin.com/in/joelfecke/" className="leftpos">
          <img  src={process.env.PUBLIC_URL + "/assets/images/linkedIn.png"} alt="#" />
        </a>
        <a href="https://github.com/jfecke" className="rightpos">
          <img src={process.env.PUBLIC_URL + "/assets/images/github.png"} alt="#" />
        </a>
      </div>
    </div>
  );
}

export default About;
