import React, { useEffect } from "react";
import FalconHeavy from "../FalconHeavy/FalconHeavy";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import "../Header/Header.css";
import Counter from "../Counter/Counter";
import FalconDescription from "../FalconDescription/FalconDescription";
import Youtube from "../Youtube/Youtube";
import AOS from "aos";
import "aos/dist/aos.css";
import UnmatchedPerformance from "../UnmatchedPerformance/UnmatchedPerformance";
import Carousel1 from "../Carousel1/Carousel1";
const Header = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="background-image">
        <SideBar />
        <FalconHeavy />
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="header-inner-text"
        >
          <h1 className="falcon-heavy-title">FALCON HEAVY</h1>
          <h3 className="falcon-heavy-is">The world's most powerful rocket</h3>
        </div>
      </div>
      <Counter />
      <FalconDescription />
      <Youtube />
      <UnmatchedPerformance />
      <Carousel1 />
    </div>
  );
};

export default Header;
