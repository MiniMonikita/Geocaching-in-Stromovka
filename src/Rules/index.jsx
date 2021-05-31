import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";

const Rules = () => {
  return (
    <>
      <h2 className="subheading">Geocache Rules</h2>
      <p className="paragraph-rules">
        You will be given the starting point where you will find the first
        question. As soon as you get to the location, your GPS will validate
        your position and the question will be revealed. Questions are in the
        form of multiple choice and by answering correctly the first time you
        will earn 1000 points, second time 750 points, third time 500 points,
        otherwise you get a 0 and the following checkpoint will be revealed.
        Next question will be shown after you confirm your location at the
        checkpoint. There will be a total of 8 checkpoints and to start the
        game, first get to the starting position: 50.1047600N, 14.4313575E and
        then click START GAME.
      </p>
      {/* WILL BE ABLE TO START GAME only if USERNAME created else will be
      redirected to USERNAME PAGE */}

      <Link style={{ textDecoration: "none" }} to="/mapmain">
        <button>Start Game</button>
      </Link>
    </>
  );
};
export default Rules;
