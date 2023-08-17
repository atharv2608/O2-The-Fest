import React from "react";
import HomePageCSS from './HomePage.module.css';

const HomePage = () => {
  function sayHi() {
    console.log("hi wahats upp")
  }
  return (
    <>
      <div className={HomePageCSS.container}>
        hello
      </div>
      <div className={HomePageCSS.container}>
        <button onClick={sayHi}>
          <p className={HomePageCSS.txt}>Login</p>
        </button>
      </div>
      <div className="container">
        <div className={HomePageCSS.formContainer}>
          <form action="">
            <input type="text" name="" id="" />
            <input type="number" name="" id="" />
            <input type="email" name="" id="" />
            <button>click me</button>
          </form>
        </div>
      </div>
    </>
  )
};

export default HomePage;
