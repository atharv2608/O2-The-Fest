import React, { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

const Countdown = () => {
  const countDownDate = new Date("Dec 17, 2023 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "EXPIRED",
          hours: "EXPIRED",
          minutes: "EXPIRED",
          seconds: "EXPIRED",
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.countdownContainer}>
        <div className={styles.daysContainer}>
          <p className={styles.textElement}>Days</p>
          <p id="day" className={styles.timeElement}>
            {timeLeft.days}
          </p>
        </div>
        <div className={styles.hoursContainer}>
          <p className={styles.textElement}>Hours</p>
          <p id="hours" className={styles.timeElement}>
            {timeLeft.hours}
          </p>
        </div>
        <div className={styles.minutesContainer}>
          <p className={styles.textElement}>Minutes</p>
          <p id="minutes" className={styles.timeElement}>
            {timeLeft.minutes}
          </p>
        </div>
        <div className={styles.secondsContainer}>
          <p className={styles.textElement}>Seconds</p>
          <p id="seconds" className={styles.timeElement}>
            {timeLeft.seconds}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
