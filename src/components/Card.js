import React from "react";

function Card(props) {
  return (
    <div
      className="card"
      key={props.val + "card"}
      onClick={(e) => props.divClicked(e, props.val)}
    >
      {props.val}
    </div>
  );
}
export default Card;
