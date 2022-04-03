import React from "react";
import "../headerCSS.css";

function Header(props) {
  return (
    <div className="header">
      <h1>Memory Game</h1>
      <p>
        Get points by clicking on a card, but don't click on any card more than
        once
      </p>
      <div>
        <p>Score: {props.score}</p>
        <p>Best Score: {props.bestScore}</p>
      </div>
    </div>
  );
}

export default Header;
