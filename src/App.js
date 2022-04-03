import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import "./AppCSS.css";

function App() {
  const [score, setScore] = React.useState(0);
  const [bestScore, setBestScore] = React.useState(0);
  const [prevGuesses, setPrevGuesses] = React.useState([]);
  const [cardVals, setCardVals] = React.useState([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
  ]);

  let shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  let divClicked = (e, val) => {
    console.log(val);
    if (prevGuesses.includes(val)) {
      setPrevGuesses([]);
      setScore(0);
      if (bestScore < score) {
        setBestScore(score);
      }
    } else {
      setScore((prevState) => prevState + 1);
      setPrevGuesses((prevState) => prevState.concat(val));
    }
    let bum = shuffle([...cardVals]);
    setCardVals(bum);
  };

  let cards = cardVals.map((val) => {
    return <Card divClicked={divClicked} val={val} key={val + "Card"} />;
  });

  return (
    <div>
      <Header score={score} bestScore={bestScore} />
      <div className="card--div">{cards}</div>
    </div>
  );
}

export default App;
