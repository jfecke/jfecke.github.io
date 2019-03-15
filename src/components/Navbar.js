import React from "react";

function Navbar(props) {
  return (
    <div id="fixthis">
      <nav className ="navbar navbar-expand-lg navbar-dark navbarcolor navbar-fixed-top">
        <div className ="navbar-brand">Joel Fecke</div>      
        <div className = "white topright">
          <div className="inLine" onClick={props.scrollTop}>Portfolio</div> | <div className="inLine" onClick={props.scrollBottom}>About</div> 
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
