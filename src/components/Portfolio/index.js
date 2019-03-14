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
    modalState: "hide-modal",
    src: "",
    technologies: "",
    projects
  };

  handleClick = event => {
    // Preventing the default behavior of refreshing the page
    event.preventDefault();
    this.setState({
      modalState: "show-modal",
      name: event.target.name,
      src: event.target.getAttribute("src"),
      url: event.target.getAttribute("href"),
      description: event.target.getAttribute("description"),
      technologies: event.target.getAttribute("technologies"),
      git: event.target.getAttribute("git")
    });
  };

  closeModal = (event) => { 
    if (event.target.id === "closeme" || event.target.id === "modal") {
      event.preventDefault();
      this.setState({modalState: "hide-modal"})
    }else {
      
    }
  }

  scrollBottom = () => {
    window.scrollTo(0,document.body.scrollHeight);
  }

  scrollTop = () => {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <div id="modal" className={this.state.modalState} onClick={this.closeModal}>
          <div id="portfolioscreen" className="modal-content">
              <div>
                <img src={this.state.src} alt={this.state.src} className="portfolio-image" />
                <div className="description"><strong>Description: </strong>{this.state.description}</div>
                <div className="technologies"><strong>Technologies: </strong>{this.state.technologies}</div>
                <div className="placeForButtons">
                  <a className="btn btn-primary" href={this.state.url} target="_blank" rel="noopener noreferrer">Project Link</a>
                  <a className="btn btn-primary" href={this.state.git} target="_blank" rel="noopener noreferrer">Github Repo</a>
                </div>
              </div>
              <button id="closeme" className="btn btn-outline-danger closebtn" onClick={this.closeModal}>Close</button>
          </div>
        </div>
        <Navbar scrollBottom={this.scrollBottom} scrollTop={this.scrollTop} />
        <Wrapper id="portfolio">
        {this.state.projects.map(project => (
          <Cards
            clickFunction={this.handleClick}
            id={project.name}
            image={project.image}
            key={project.name}
            url={project.url}
            description={project.description}
            technologies={project.technologies}
            git={project.git}
          />
        ))}
        </Wrapper>
        <About />

        
      </div>
    );
  };
}

export default Form;
