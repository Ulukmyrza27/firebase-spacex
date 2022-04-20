import React from "react";
import "../FalconHeavy/FalconHeavy.css";
const FalconHeavy = () => {
  return (
    <div className="inner-page">
      <video loop autoPlay>
        <source
          src="/Users/ISTORE/Desktop/JS17/0. REACT/SpaceX/Carousel2/fh_feature.webp"
          type="video"
        />
      </video>
    </div>
  );
};

export default FalconHeavy;
