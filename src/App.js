import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PublicNavbar from "./components/PublicNavbar";
import ChoiceCard from "./components/ChoiceCard";
import { Button, CardDeck, Container } from "react-bootstrap";

//Define an array to hold all the possible moves.
const shapes = ["rock", "paper", "scissors"];

//Declare a variable to hold the value for computer's choice later.
let computerChoice;
let playerChoice;
//Create a function called randomMove() that will assign a value to computerChoice every time it runs. Log the result to the console so we can know if it works. Call it so it will run when the page loads.
const randomMove = () => {
  computerChoice = shapes[Math.floor(Math.random() * 3)];
  playerChoice = shapes[Math.floor(Math.random() * 3)];
  console.log("Computer: ", computerChoice);
  console.log("Player: ", playerChoice);
};

let computerResult;
let playerResult;

const calculateWinner = () => {
  let winLoosTie = ["win", "loss", "tie"];
  // compare playerChoice and computerChoice and assign 'tie', 'win' or 'loss' to computerResult and playerResult

  if (playerChoice === computerChoice) {
    computerResult = "tie";
    playerResult = "tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    computerResult = "loss";
    playerResult = "win";
  } else {
    computerResult = "win";
    playerResult = "loss";
  }
};

const play = () => {
  randomMove();
  calculateWinner();
  console.log(calculateWinner());
};

play();

function App() {
  return (
    <div className="App">
      <PublicNavbar />
      <Container>
        <CardDeck>
          <ChoiceCard title="You" winner={playerResult} shape={playerChoice} />
          <ChoiceCard
            title="Computer"
            winner={computerResult}
            shape={computerChoice}
          />
        </CardDeck>
        <Button onClick={play}>Random</Button>
      </Container>
    </div>
  );
}
export default App;
