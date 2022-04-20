import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="div-main-links">
      <div className="links">
        <a href="https://twitter.com/spacex" target="_blank">
          TWITTER
        </a>
        <a href="https://www.youtube.com/spacex" target="_blank">
          YOUTUBE
        </a>
        <a href="https://www.instagram.com/spacex/" target="_blank">
          INSTAGRAM
        </a>
        <a href="https://www.flickr.com/photos/spacex" target="_blank">
          FLICKR
        </a>
        <a href="https://www.linkedin.com/company/spacex" target="_blank">
          LINKEDIN
        </a>
        <a
          href="https://www.spacex.com/media/privacy_policy_spacex.pdf"
          target="_blank"
        >
          PRIVACY POLICY
        </a>
      </div>
    </div>
  );
};

export default Footer;
