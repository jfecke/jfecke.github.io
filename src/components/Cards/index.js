import React from "react";
import "./style.css";

function Cards(props) {
  return (
    <div  className="card" onClick={props.clickFunction}>
      <img id={props.id} alt={props.id} name={props.id} src={process.env.PUBLIC_URL+ props.image} onMouseOver={props.mouseover} href={props.url} description={props.description} />
      <div className="label" name={props.id} href={props.url} description={props.description}>{props.id}</div>
    </div>
  );
}

export default Cards;
