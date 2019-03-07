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
    projects
  };

  handleClick = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log(event.target);
    this.setState({
      modalState: "show-modal",
      name: event.target.name,
      src: event.target.getAttribute("src"),
      url: event.target.getAttribute("href"),
      description: event.target.getAttribute("description")
    });
  };

  mouseOver = event => {
    event.preventDefault();
    console.log(event.target);
  }

  toggleModal = (event) => {
    event.preventDefault();
    if (this.state.modalState === "hide-modal") {
      this.setState({modalState: "show-modal"})
    } else if (this.state.modalState === "show-modal") {
      this.setState({modalState: "hide-modal"})
    }
  }
  render() {
    return (
      <div>
        <div id="modal" className={this.state.modalState}>
          <div id="portfolioscreen" className="modal-content">
              <div>
                <img src={this.state.src} alt={this.state.src} className="portfolio-image" />
              </div>
              <button onClick={this.toggleModal}>Toggle</button>
          </div>
        </div>
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
  };
}

export default Form;
