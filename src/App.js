//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import "./App.css";
import Buttons from "./Buttons";
import Scoreboard from "./Scoreboard";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeCount, setHomeScore] = useState(0);
  const [awayCount, setAwayScore] = useState(0);

  return (
    <div className="container">
      <Scoreboard homeCount={homeCount} awayCount={awayCount} />
      <Buttons homeCount={homeCount} setHomeScore={setHomeScore} setAwayScore={setAwayScore} awayCount={awayCount}  />
    </div>
  );
}

export default App;
