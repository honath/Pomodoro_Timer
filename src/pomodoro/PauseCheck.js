import React from "react";

function PauseCheck({ timerData }) {
    if (timerData.inSession && !timerData.isTimerRunning) {
        return <h2>PAUSED</h2>
    } else {
        return null;
    }
}

export default PauseCheck;