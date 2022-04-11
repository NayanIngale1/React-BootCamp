import "./App.css"
import React, { useState } from 'react';


function App() {


  const [score, setScore] = useState(76);
  const [wicket,setWicket] = useState(2);
  const [ball, setBall] = useState(50);
  const [win, setWin] = useState("");

  let over = Math.floor(ball / 6);
  let rem = ball % 6;

  const handleWin = (score) => {
    
    if (score > 100) {
      setWin("India Won");
    }
    
    return;
  }

  const handleScore = (oldScore, value) => {

    if (wicket >= 12) {
      return;
    }

    
    if (oldScore >100) {
          return
    }

    
    setScore(oldScore + value);

    handleWin(oldScore + value);

    
  }

  const handleWicket = (oldwicket,value) => {
    
    if (score > 100) {
      return;
    }
    if (oldwicket >= 12) {
      return;
    }

    setWicket(oldwicket + value);

  }

  const handleBall=(oldball, value)=>{
    if (score > 100) {
      return;
    }

    setBall(oldball + value);

     over = Math.floor(ball / 6);
     rem = ball % 6;



  }

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              over 
            }.{rem}
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" style={ score>100?{backgroundColor : "lightgray"}:{backgroundColor : "black"}} onClick={() => {
          handleScore(score, 1);
        }}>Add 1</button>
        <button style={ score>100?{backgroundColor : "lightgray"}:{backgroundColor : "black"}} className="addScore4" onClick={() => {
          handleScore(score, 4);
        }}>Add 4</button>
        <button style={ score>100?{backgroundColor : "lightgray"}:{backgroundColor : "black"}} className="addScore6" onClick={() => {
          handleScore(score, 6);
        }}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button style={ score>100?{backgroundColor : "lightgray"}:{backgroundColor : "black"}}  onClick={() => {
          handleWicket(wicket,1);
        }}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button style={ score>100?{backgroundColor : "lightgray"}:{backgroundColor : "black"}}  onClick={() => {
          handleBall(ball,1)
        }}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1 className='status'>{win}</h1>
    </div>
  );
}

export default App;


/*
style={{score}>100?{
        display : "inline-block"
      }:{display : "none"}} 
*/