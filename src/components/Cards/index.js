import React from "react";
import "./style.css";

function Cards(props) {
  return (
    <div onClick={props.clickFunction} target="_blank" rel="noopener noreferrer" className="card">
      <img id={props.id} alt={props.id} name={props.id} src={process.env.PUBLIC_URL+ props.image} href={props.url} description={props.description} technologies={props.technologies} git={props.git} />
      <div className="label" name={props.id} href={props.url} description={props.description} src={process.env.PUBLIC_URL+ props.image} technologies={props.technologies} git={props.git}>{props.id}</div>
    </div>
  );
}

export default Cards;
