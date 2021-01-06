import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PublicNavbar from "./components/PublicNavbar";
import ChoiceCard from "./components/ChoiceCard";
import { ButtonGroup, Button, CardDeck, Container } from "react-bootstrap";
import React, { useState } from "react";

//Define an array to hold all the possible moves.
const shapes = ["rock", "paper", "scissors"];

function App() {
  //Declare a variable to hold the value for computer's choice later.
  const [playerChoice, setPlayerChoice] = useState("");
  const [playerResult, setPlayerResult] = useState("tie");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerChoice, setComputerChoice] = useState("");
  const [computerResult, setComputerResult] = useState("tie");
  const [computerScore, setComputerScore] = useState(0);

  //Create a function called randomMove() that will assign a value to computerChoice every time it runs. Log the result to the console so we can know if it works. Call it so it will run when the page loads.
  const randomMove = (move) => {
    const newcomputerChoice = shapes[Math.floor(Math.random() * 3)];
    // const newplayerChoice = shapes[Math.floor(Math.random() * 3)];
    setPlayerChoice(move);
    setComputerChoice(newcomputerChoice);
    // console.log("Computer: ", computerChoice);
    // console.log("Player: ", playerChoice);
    calculateWinner(newcomputerChoice, move);
  };

  const calculateWinner = (computerChoice, playerChoice) => {
    // compare playerChoice and computerChoice and assign 'tie', 'win' or 'loss' to computerResult and playerResult

    if (playerChoice === computerChoice) {
      setComputerResult("tie");
      setPlayerResult("tie");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      setPlayerResult("win");
      setComputerResult("loss");
      setPlayerScore(playerScore + 1);
    } else {
      setPlayerResult("loss");
      setComputerResult("win");
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <div className="App">
      <PublicNavbar />
      <Container>
        <h1>{prompt}</h1>
        <CardDeck>
          <ChoiceCard
            title="You"
            winner={playerResult}
            shape={playerChoice}
            score={playerScore}
          />
          <ChoiceCard
            title="Computer"
            winner={computerResult}
            shape={computerChoice}
            score={computerScore}
          />
        </CardDeck>
        <ButtonGroup>
          <Button
            variant="outline-dark"
            className="mx-1"
            onClick={() => randomMove("rock")}
          >
            Play 👊
          </Button>
          <Button
            variant="outline-dark"
            className="mx-1"
            onClick={() => randomMove("paper")}
          >
            Play 🤚
          </Button>
          <Button
            variant="outline-dark"
            className="mx-1"
            onClick={() => randomMove("scissors")}
          >
            Play ✌
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  );
}
export default App;
