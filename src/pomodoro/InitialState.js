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
  function handleDurationClick(target) {
    //Check bounds on focus duration
    if (target === "decreaseFocus") {
      setTimerData({
        ...timerData,
        focusDuration: Math.max(timerData.focusDuration - 5, 5),
        timeRemaining: Math.max(timerData.timeRemaining - 300, 300),
        totalRemaining: Math.max(timerData.totalRemaining - 300, 300),
      });
    } else if (target === "increaseFocus") {
      setTimerData({
        ...timerData,
        focusDuration: Math.min(timerData.focusDuration + 5, 60),
        timeRemaining: Math.min(timerData.timeRemaining + 300, 3600),
        totalRemaining: Math.min(timerData.totalRemaining + 300, 3600),
      });
    } else if (target === "decreaseBreak") {
      setTimerData({
        ...timerData,
        breakDuration: Math.max(timerData.breakDuration - 1, 1),
        totalRemaining: Math.max(timerData.totalRemaining - 60, 60),
      });
    } else if (target === "increaseBreak") {
      setTimerData({
        ...timerData,
        breakDuration: Math.min(timerData.breakDuration + 1, 15),
        totalRemaining: Math.min(timerData.totalRemaining + 60, 900),
      });
    }

    console.log(timerData.focusDuration);
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
                disabled={timerData.inSession}
                onClick={() => handleDurationClick("decreaseFocus")}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                disabled={timerData.inSession}
                onClick={() => handleDurationClick("increaseFocus")}
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
                  disabled={timerData.inSession}
                  onClick={() => handleDurationClick("decreaseBreak")}
                >
                  <span className="oi oi-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  disabled={timerData.inSession}
                  onClick={() => handleDurationClick("increaseBreak")}
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
              onClick={() => playPause()}
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
              onClick={() => stopSession()}
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
