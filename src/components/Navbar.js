import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav className ="navbar navbar-expand-lg navbar-dark navbarcolor navbar-fixed-top">
        <div className ="navbar-brand">Joel Fecke</div>      
        <div className = "white topright">
          <h3>
            <div className="inLine" onclick={document.getElementById("portfolio").scrollIntoView()}>Portfolio</div> | <div className="inLine" onclick={props.scrollto}>About</div>
          </h3>
        </div>
    </nav>
    </div>
  )
};

export default Navbar;
