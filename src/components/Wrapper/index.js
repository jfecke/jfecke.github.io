import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper" id={props.id}>{props.children}</div>;
}

export default Wrapper;
