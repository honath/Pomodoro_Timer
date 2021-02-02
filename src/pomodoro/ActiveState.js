import React from "react";
import useInterval from "../utils/useInterval";
import BreakCheck from "./BreakCheck.js";
import PauseCheck from "./PauseCheck.js";

function ActiveState({ timerData, setTimerData, formattedDurations }) {
  //If timer is not active/in session, do not show additional HTML
  if (!timerData.inSession) return null;

  //Control progress value as rounded percentage
  //Had to declare separate variables as setState/functions looped
  const startingTime = timerData.isBreak
    ? timerData.breakDuration * 60
    : timerData.focusDuration * 60;
  const remainingTime = startingTime - timerData.timeRemaining;

  let percentage = timerData.elapsedValue;

  if (timerData.timeRemaining < startingTime) {
    percentage = Math.round(100 * (remainingTime / startingTime));
  }

  //Return JSX
  return (
    <>
      <div>
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              <BreakCheck
                timerData={timerData}
                formattedDurations={formattedDurations}
              />
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {formattedDurations.timer} remaining
            </p>
            <PauseCheck timerData={timerData} />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={percentage}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActiveState;
