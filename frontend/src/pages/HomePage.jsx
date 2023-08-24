import React from "react";
import AboutO2 from "../components/AboutO2";
// import AuthenticationForm from '../components/AuthenticationForm';
import EventCards from "../components/EventCards";
import HomeCss from "../components/HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={HomeCss.container}>
        <section>
          <EventCards />
          {/* <AuthenticationForm /> */}
        </section>
        <section>
          <AboutO2 />
        </section>
      </div>
    </>
  );
};

export default HomePage;
