import React from "react";
import "./AppDownload.css";
import appStore from "/src/assets/app-store.svg";
import googlePlay from "/src/assets/google-play.png";
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> SushiGo
      </p>
      <div className="app-download-platforms">
        <img src={appStore} alt="App Store" className="store" />
        <img src={googlePlay} alt="Google Play" className="store" />
      </div>
    </div>
  );
};

export default AppDownload;
