import React from "react";
import "./style.css";

function Cards(props) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer" className="card">
      <img id={props.id} alt={props.id} name={props.id} src={process.env.PUBLIC_URL+ props.image} href={props.url} description={props.description} />
      <div className="label" name={props.id} href={props.url} description={props.description}>{props.id}</div>
    </a>
  );
}

export default Cards;
