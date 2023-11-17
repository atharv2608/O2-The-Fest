import React from "react";
import logo from "../images/logo.png";
import style from "./AboutO2.module.css";
import Countdown from "./Countdown";
export default function AboutO2() {
  return (
    <section className={style.aboutSection}>
      <div className={style.countdown}>
        <Countdown />
      </div>
      <div className={style.aboutContainer}>

        <div className={style.logoContainer}>
          <img
            src={logo} width="100%"
            alt="Unable to load image. Check your internt connection!"
          />
        </div>

        <div className={style.aboutTextContent}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            pariatur quas provident quia facilis incidunt repudiandae! Sunt sed
            fugiat reiciendis! Ratione quasi quisquam pariatur praesentium?
            Corporis recusandae odio doloremque, provident quasi eius vero
            aspernatur soluta beatae! Molestiae earum, id ut obcaecati illo eos
            tenetur mollitia.
          </p>
        </div>
      </div>
    </section>
  );
}
