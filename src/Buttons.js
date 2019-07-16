import React from 'react';
import "./App.css";

const Buttons = (props) => {
  const { homeCount, awayCount, setHomeScore, setAwayScore } =props;

  return (
    <section className="buttons">
        <div className="homeButtons">
            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeCount + 7)} >Home Touchdown</button>
            <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeCount + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
            <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayCount + 7)}>Away Touchdown</button>
            <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayCount + 3)}>Away Field Goal</button>
        </div>
    </section>
  );
};

export default Buttons;