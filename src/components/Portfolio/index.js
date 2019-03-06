import React, { Component } from "react";
import "./style.css";
import Wrapper from "../Wrapper";
import Cards from "../Cards";
import Navbar from "../Navbar";
import projects from "../../projects.json";
import About from "../About";

class Form extends Component {
  // Setting the component's initial state
  state = {
    name: "",
    image: "",
    url: "",
    projects
  };

  handleClick = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let targetObject = {
      name: event.target.name,
      url: event.target.getAttribute("href"),
      description: event.target.getAttribute("description")
    }
    console.log(targetObject);
  };

  mouseOver = event => {
    event.preventDefault();
    console.log(event.target);
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topscore={this.state.topscore} message={this.state.message} />
        <Wrapper id="portfolio">
        {this.state.projects.map(project => (
          <Cards
            clickFunction={this.handleClick}
            id={project.name}
            image={project.image}
            key={project.name}
            url={project.url}
            description={project.description}
            mouseover={this.state.mouseOver}
          />
        ))}
        </Wrapper>
        <Wrapper id="aboutme">
        <About />
        </Wrapper>
        
      </div>
    );
  }
}

export default Form;
