import React from "react";
import "./Youtube.css";

const Youtube = () => {
  return (
    <div className="youtube">
      <iframe
        width="950"
        height="534"
        src="https://www.youtube.com/embed/A0FZIwabctw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Youtube;
