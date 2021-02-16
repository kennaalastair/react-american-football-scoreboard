import React from 'react';
import "./App.css";
import BottomRow from "./BottomRow";
import Timer from "./Timer";

const Scoreboard = (props) => {
  const {homeCount, awayCount} = props;

  return(  
    <section className="scoreboard">
        <div className="topRow">
            <div className="home">
                <h2 className="home__name">Lions</h2>

                {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

                <div className="home__score">{homeCount}</div>
            </div>
            <Timer />
            <div className="away">
                <h2 className="away__name">Tigers</h2>
                <div className="away__score">{awayCount}</div>
            </div>
        </div>
        <BottomRow />
    </section>
  );
};

export default Scoreboard;