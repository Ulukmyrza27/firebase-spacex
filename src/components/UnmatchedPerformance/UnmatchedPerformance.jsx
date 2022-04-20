import React from "react";
import "./UnmatchedPerformance.css";

const UnmatchedPerformance = () => {
  return (
    <div className="up-main">
      <div className="up-video">
        <video
          style={{ width: "100%" }}
          autoPlay
          muted
          loop
          src="https://www.spacex.com/media/fh_performance.webm"
          alt="video"
        ></video>
      </div>
      <div data-aos="fade-up" className="up-head">
        <h1 className="up-header">UNMATCHED PERFORMANCE</h1>
        <p className="up-inner-text">
          With more than 5 million pounds of thrust at liftoff, Falcon Heavy is
          the most capable rocket flying. By comparison, the liftoff thrust of
          the Falcon Heavy equals approximately eighteen 747 aircraft at full
          power. Falcon Heavy can lift the equivalent of a fully loaded 737
          jetliner—complete with passengers, luggage and fuel—to orbit.
        </p>
      </div>
    </div>
  );
};

export default UnmatchedPerformance;
