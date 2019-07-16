import React, { useState, useEffect } from 'react';
import "./App.css";

function Timer(props) {
    const [time, setTime] = useState(900);
    useEffect(() => {
        //every second we rerender time
        setInterval(() => {
            setTime((newTime) => { return newTime - 1 });
        }, 1000);
    }, []);
    return (
        <div className="timer">{time}</div>
    );
};

export default Timer;