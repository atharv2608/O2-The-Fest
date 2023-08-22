import React from "react";
import AuthenticationForm from '../components/AuthenticationForm';
import HomeCss from "./HomePage.module.css";
const HomePage = () => {
  return (
    <>
      <div className={HomeCss.container}>
        <section>
          {/* <EventLabels /> */}
          <AuthenticationForm />
        </section>
        <section>
          <div className={HomeCss.container}>
            <p>O2 The Fest</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
