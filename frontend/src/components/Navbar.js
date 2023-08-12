import React, { useState } from "react";
import NavbarCss from "./Navbar.module.css";
import { Sling as Hamburger } from "hamburger-react";
import logo from "../images/logo.png";
const Navbar = () => {
  //open close state of ham-icon
  const [isOpen, setOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  //for opening dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <nav className={NavbarCss.container}>
        <ul className={NavbarCss.brand_logo_container}>
          <li>
            <img src={logo} height="50px" width="50px" alt="" />
          </li>
        </ul>
        <ul className={NavbarCss.links}>
          <li>
            <a
              className={`${NavbarCss.link} ${
                activeTab === "Home" ? NavbarCss.active : ""
              }`}
              href="#"
              onClick={() => handleTabClick("Home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`${NavbarCss.link} ${
                activeTab === "About Us" ? NavbarCss.active : ""
              }`}
              href="#"
              onClick={() => handleTabClick("About Us")}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className={`${NavbarCss.link} ${
                activeTab === "Events" ? NavbarCss.active : ""
              }`}
              href="#"
              onClick={() => handleTabClick("Events")}
            >
              Events
            </a>
          </li>
          <li>
            <a
              className={`${NavbarCss.link} ${
                activeTab === "Sponsors" ? NavbarCss.active : ""
              }`}
              href="#"
              onClick={() => handleTabClick("Sponsors")}
            >
              Sponsors
            </a>
          </li>
        </ul>
        <ul className={NavbarCss.links}>
          <li>
            <a className={NavbarCss.link} href="#">
              Login
            </a>
          </li>
          <li className={NavbarCss.button_container}>
            <a className={NavbarCss.button} href="#">
              Sign up?
            </a>
          </li>
        </ul>
        <ul className={NavbarCss.ham_icon_container}>
          <li className="ham-icon">
            <Hamburger
              size={25}
              toggled={isOpen}
              toggle={() => {
                setOpen(!isOpen);
                toggleDropdown();
              }}
            />
          </li>
        </ul>
      </nav>
      <nav
        className={`${NavbarCss.dropdown_menu_container} ${
          isDropdownOpen ? NavbarCss.visible : ""
        }`}
      >
        <ul className={NavbarCss.dropdown_menu}>
          <li className={NavbarCss.dropdown_links}>
            <a
              className={`${NavbarCss.dropdown_link} ${
                activeTab === "Home" ? NavbarCss.active : ""
              }`}
              href="#"
              onClick={() => handleTabClick("Home")}
            >
              Home
            </a>
          </li>
          <li className={NavbarCss.dropdown_links}>
            <a
              className={`${NavbarCss.dropdown_link} ${
                activeTab === "About Us" ? NavbarCss.active : ""
              }`}
              href="#"
              onClick={() => handleTabClick("About Us")}
            >
              About Us
            </a>
          </li>
          <li className={NavbarCss.dropdown_links}>
            <a
              className={`${NavbarCss.dropdown_link} ${
                activeTab === "Events" ? NavbarCss.active : ""
              }`}
              href="#"
              onClick={() => handleTabClick("Events")}
            >
              Events
            </a>
          </li>
          <li className={NavbarCss.dropdown_links}>
            <a
              className={`${NavbarCss.dropdown_link} ${
                activeTab === "Sponsors" ? NavbarCss.active : ""
              }`}
              href="#"
              onClick={() => handleTabClick("Sponsors")}
            >
              Sponsors
            </a>
          </li>
          <li className={NavbarCss.dropdown_links}>
            <a className={NavbarCss.dropdown_link} href="#">
              Login
            </a>
          </li>
          <li className={NavbarCss.dropdown_button_container}>
            <a className={NavbarCss.dropdown_button} href="#">
              Sign up?
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
