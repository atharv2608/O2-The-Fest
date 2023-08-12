import AppCss from "../src/App.module.css";
import Navbar from "./components/Navbar";
import NavLoggedIn from "./components/NavLoggedIn";
import React from "react";
function App() {
  return (
    <div className={AppCss.container}>
      <NavLoggedIn />
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
