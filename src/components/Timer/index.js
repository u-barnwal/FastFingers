import { Range } from "rc-slider";
import React, { useRef, useState, useEffect } from "react";
import { useTimer } from "../../pages/Game/hooks";
import { getReadableScore } from "../../utils/methods";
import Text from "../Text";

const COLOR = {
  track: "#f3b713",
  rail: "#2a0b7d",
};

function Timer({ time, onTimerEndListener = null }) {
  const { tick, start, restart, stop } = useTimer(false);

  useEffect(() => {
    if (tick >= time) onTimerEnd();
  }, [tick]);

  useEffect(() => restart(), [time]);

  const onTimerEnd = () => {
    stop();

    if (onTimerEndListener) onTimerEndListener();
  };

  console.log("Timer: " + time);

  return (
    <div>
      <Range
        min={0}
        max={time}
        value={[tick / 2, time - tick / 2]}
        trackStyle={[{ backgroundColor: COLOR.track }]}
        handleStyle={[{ display: "none" }, { display: "none" }]}
        railStyle={{ backgroundColor: COLOR.rail }}
      />
      <Text color="muted" align="center" className="mt-2" bold>
        {getReadableScore(time - tick)}
      </Text>
    </div>
  );
}

export default Timer;
