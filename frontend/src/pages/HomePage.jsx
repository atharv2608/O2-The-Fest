import React from "react";
import AboutO2 from "../components/AboutO2";
import Countdown from "../components/Countdown";
import style from "../components/HomePage.module.css";

const HomePage = () => {
  return (
    <section className={style.homeSection}>
      <div className={style.textContainer}>
      <div className={style.subTitle}>That time of year has came</div>
      <div className={style.heading}><h1>O<sub>2</sub> The Fest</h1></div>
      <div className={style.subTitle}>Where Fire meets oxygen</div>
      <Countdown />
      </div>
    </section>
  );
};

export default HomePage;
