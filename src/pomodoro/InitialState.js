import React from "react";
import classNames from "../utils/class-names";

function InitialState({
  initialTimerData,
  timerData,
  setTimerData,
  formattedDurations,
}) {
  //Play/pause button functionality
  function playPause() {
    setTimerData({
      ...timerData,
      isTimerRunning: !timerData.isTimerRunning,
      inSession: true,
    });
  }

  //Stop current session/reset timer/timerData
  function stopSession() {
    setTimerData({ ...initialTimerData });
  }

  //Handle duration adjuster clicks
  function handleDurationClick({ target }) {
    //Check bounds on focus duration
    if (5 < timerData.focusDuration && timerData.focusDuration < 60) {
      if (target.value === "decreaseFocus") {
        setTimerData({
          ...timerData,
          focusDuration: timerData.focusDuration - 5,
          timeRemaining: timerData.timeRemaining - 300,
          totalRemaining: timerData.totalRemaining - 300
        });
      } else if (target.value === "increaseFocus") {
        setTimerData({
          ...timerData,
          focusDuration: timerData.focusDuration + 5,
          timeRemaining: timerData.timeRemaining + 300,
          totalRemaining: timerData.totalRemaining + 300
        });
      }
    }

    //Check bounds on break duration
    if (1 < timerData.breakDuration && timerData.breakDuration < 15) {
      if (target.value === "decreaseBreak") {
        setTimerData({
          ...timerData,
          breakDuration: timerData.breakDuration - 1,
          totalRemaining: timerData.totalRemaining - 60
        });
      } else if (target.value === "increaseBreak") {
        setTimerData({
          ...timerData,
          breakDuration: timerData.breakDuration + 1,
          totalRemaining: timerData.totalRemaining + 60
        });
      }
    }
  }

  //Return JSX
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              Focus Duration: {formattedDurations.focusMinutes}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                value="decreaseFocus"
                disabled={timerData.inSession}
                onClick={handleDurationClick}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                value="increaseFocus"
                disabled={timerData.inSession}
                onClick={handleDurationClick}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                Break Duration: {formattedDurations.breakMinutes}
              </span>
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  value="decreaseBreak"
                  disabled={timerData.inSession}
                  onClick={handleDurationClick}
                >
                  <span className="oi oi-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  value="increaseBreak"
                  disabled={timerData.inSession}
                  onClick={handleDurationClick}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !timerData.isTimerRunning,
                  "oi-media-pause": timerData.isTimerRunning,
                })}
              />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              title="Stop the session"
              disabled={!timerData.inSession}
              onClick={stopSession}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InitialState;
