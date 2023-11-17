import React from "react";
import AboutO2 from "../components/AboutO2";
// import Countdown from "../components/Countdown";
import Footer from '../components/Footer';
import style from "../components/HomePage.module.css";
import homeVideo from "../videos/home-bg-v1.mp4";

const HomePage = () => {
  return (
    <>
      <div className={style.videoContainer}>
        <video autoPlay muted loop className={style.backgroundVideo}>
          <source src={homeVideo} type="video/mp4" />
        </video>
      </div>
      <div className={style.homeContent}>
      </div>
      <div className={style.container}>
        <AboutO2 />
      </div>
      <div className={style.container}>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
