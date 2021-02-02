import React from "react";

function BreakCheck({ timerData, formattedDurations }) {
  if (timerData.isBreak) {
    return <>On Break for {formattedDurations.breakMinutes} minutes</>;
  } else {
    return <>Focusing for {formattedDurations.focusMinutes} minutes</>;
  }
}

export default BreakCheck;
