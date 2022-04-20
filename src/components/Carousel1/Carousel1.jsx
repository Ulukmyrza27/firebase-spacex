import React from "react";
import "../Carousel1/Carousel1.css";
import { Carousel } from "antd";
import "antd/dist/antd.css";

const Carousel1 = () => {
  const contentStyle = {
    height: "700px",
    color: "#fff",
    lineHeight: "700px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    background: "black",
  };
  return (
    <div>
      <video
        autoPlay
        muted
        src="https://www.spacex.com/media/WebsiteFHFairings_Anim_Render_Desktop.webm"
        alt="video"
        style={{ width: "100%" }}
      ></video>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <img
              className="carousel-img"
              src="https://elonsrockets.io/assets/falcon_heavy_banner.webp"
              // src="../../../Carousel1/WebsiteFHEngines_Render_Desktop.webp"
              alt="img"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              className="carousel-img"
              src="https://www.geeek.org/content/images/2021/02/webp-nginx-1.jpg"
              alt="img"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            {" "}
            <img
              className="carousel-img"
              src="https://www.gannett-cdn.com/-mm-/d3b6dffaeec46acd6996b0f8d5e950f095216e0b/c=0-125-2045-1280/local/-/media/2018/08/03/Brevard/Brevard/636688817659367786-fh-demo-landings-spx.jpg"
              alt="img"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            {" "}
            <img
              className="carousel-img"
              src="https://external-preview.redd.it/ipsv0s3k_BbKElmZPX4xd4VYLO8OFtPehpWMrtcNrtY.jpg?auto=webp&s=e9a1c9854d8a699c45f7d9d49a843e10548d9e5b"
              alt="img"
            />
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousel1;
