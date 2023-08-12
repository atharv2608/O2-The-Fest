import React, { useState, useEffect, useRef } from "react";
import NavbarCss from "./Navbar.module.css";
import { Sling as Hamburger } from "hamburger-react";
import logo from "../images/logo.png";
import usrlogo from "../images/userimg.png";
const NavLoggedIn = () => {
  const [isOpen, setOpen] = useState(false); //open close state of hamburger icons
  const [isDropdownOpen, setDropdownOpen] = useState(false); //state for dropdown
  const [activeTab, setActiveTab] = useState("Home"); //state for active tab
  const [isCardVisible, setCardVisibility] = useState(false); // State for card visibility
  const cardRef = useRef(null); // Reference to the user_card_container

  //for opening dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  //handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Toggle card visibility
  const toggleCardVisibility = () => {
    setCardVisibility(!isCardVisible);
  };

  //card container visibility functions
  useEffect(() => {
    const handleClick = (event) => {
      if (
        cardRef.current &&
        !cardRef.current.contains(event.target) &&
        !event.target.classList.contains(NavbarCss.user_img)
      ) {
        setCardVisibility(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

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
            <img
              className={NavbarCss.user_img}
              src={usrlogo}
              height="35px"
              width="35px"
              alt="usr_img"
              title="click here to open or close profile card"
              onClick={toggleCardVisibility} // Toggle visibility on click
            />
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
      <div
        className={`${NavbarCss.user_card_container} ${
          isCardVisible ? NavbarCss.visible : ""
        }`}
        ref={cardRef} // Assign the ref to the user_card_container
      >
        <div className={NavbarCss.user_img_and_name_container}>
          <div>
            <img
              className={NavbarCss.user_img_card}
              src={usrlogo}
              height="85px"
              width="85px"
              alt="usr_img"
            />
          </div>
          <div className={NavbarCss.user_name_container}>Username here</div>
        </div>
        <div className={NavbarCss.user_email_container}>Email address here</div>
        <div className={NavbarCss.user_btn_container}>
          <a className={NavbarCss.button} href="#">
            <i class="fa-solid fa-pen-to-square"></i> Edit Profile
          </a>
          <a
            className={NavbarCss.button}
            style={{ backgroundColor: "crimson", borderRadius: "0px" }}
            href="#"
          >
            <i class="fa-solid fa-right-from-bracket"></i> Log out
          </a>
        </div>
      </div>
      <nav
        className={`${NavbarCss.dropdown_menu_container} ${
          isDropdownOpen ? NavbarCss.visible : ""
        }`}
      >
        <ul className={NavbarCss.dropdown_menu}>
          <div className={NavbarCss.drpdwn_user_card_container}>
            <div className={NavbarCss.drpdwn_user_img_and_name_container}>
              <div className={NavbarCss.drpdwn_img_container}>
                <div className="drpdwn_img">
                  <img
                    className={NavbarCss.drpdwn_user_img_card}
                    src={usrlogo}
                    height="85px"
                    width="85px"
                    alt="usr_img"
                  />
                </div>
              </div>
              <div className={NavbarCss.drpdwn_name_email_container}>
                <div className={NavbarCss.drpdwn_name_container}>
                  Name here{" "}
                </div>
                <div className="drpdwn_email_container">email here</div>
                <div className={NavbarCss.drpdwn_user_btn_container}>
                  <div>
                    <a className={NavbarCss.drpdwn_button} href="#">
                      <i class="fa-solid fa-pen-to-square"></i> Edit Profile
                    </a>
                  </div>

                  <div>
                    <a
                      className={NavbarCss.drpdwn_button}
                      style={{
                        backgroundColor: "crimson",
                        borderRadius: "0px",
                      }}
                      href="#"
                    >
                      <i class="fa-solid fa-right-from-bracket"></i> Log out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        </ul>
      </nav>
    </>
  );
};

export default NavLoggedIn;
