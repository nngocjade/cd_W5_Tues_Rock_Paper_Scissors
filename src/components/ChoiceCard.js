import React from "react";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";

const ChoiceCard = (props) => {
  console.log("Props:", props);
  return (
    <div
      className={`choice-card ${
        props.winner ? "border-success" : "border-danger"
      }`}
    >
      <h2 className="text-center">{props.title}</h2>
      <img
        src={
          props.shape === "rock"
            ? rock
            : props.shape === "paper"
            ? paper
            : scissors
        }
        alt={props.shape}
      />
    </div>
  );
};

export default ChoiceCard;
