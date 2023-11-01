import React from "react";
import AboutO2 from "../components/AboutO2";
import Countdown from "../components/Countdown";
import style from "../components/HomePage.module.css";
import homeVideo from "../videos/home-bg-v1.mp4";

const HomePage = () => {
  return (
    <>
      <section>
        <div className={style.videoContainer}>
          <video autoPlay muted loop className={style.backgroundVideo}>
            <source src={homeVideo} type="video/mp4" />
          </video>
        </div>
        <div className={style.homeContent}>
        </div>
      </section>
      <AboutO2 />
    </>
  );
};

export default HomePage;
