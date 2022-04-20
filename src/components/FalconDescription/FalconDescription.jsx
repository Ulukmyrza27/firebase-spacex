import React from "react";
import "./FalconDescription.css";
const FalconDescription = () => {
  return (
    <div className="fd container">
      <div className="fd-inner-text">
        <h4 className="fd-inner-text">
          Falcon Heavy is the most powerful operational rocket in the world by a
          factor of two. With the ability to lift into orbit nearly 64 metric
          tons (141,000 lb) Falcon Heavy can lift more than twice the payload of
          the next closest operational vehicle, the Delta IV Heavy. Falcon Heavy
          is composed of three Falcon 9 nine-engine cores whose 27 Merlin
          engines together generate more than 5 million pounds of thrust at
          liftoff, equal to approximately eighteen 747 aircraft.
        </h4>
      </div>
      <div className="fd-bcg"></div>
    </div>
  );
};

export default FalconDescription;
