import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav className ="navbar navbar-expand-lg navbar-dark navbarcolor">
        <div className ="navbar-brand">Joel Fecke</div>      
        <div className = "white topright">
          <h3>
            Profolio {props.score} | About {props.topscore}
          </h3>
        </div>
    </nav>
    </div>
  )
};

export default Navbar;
