import { React, useState, useEffect, useRef } from "react";
import navbarCss from "./Navbar.module.css";
import { Twirl as Hamburger } from "hamburger-react";
import logo from "../images/logo.png";
import usrlogo from "../images/userimg.png";
const Navbar = () => {
  //dropdown open close state
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = (toggled) => {
    if (toggled) {
      setMenuOpen(true); // Open the menu
    } else {
      setMenuOpen(false); // Close the menu
    }
  };

  //user card toggle
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  // Prevent the propagation of the click event from the image
  const handleUserLogoClick = (event) => {
    event.stopPropagation();
    setUserDropdownOpen(!userDropdownOpen);
  };

  // Add a ref to the card_container1
  const cardContainerRef = useRef(null);

  // Add a click event listener to the document
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cardContainerRef.current &&
        !cardContainerRef.current.contains(event.target)
      ) {
        setUserDropdownOpen(false); // Close the dropdown
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // check here whether user signed in or not
  const authsignin = true;

  //if user signed in
  if (authsignin) {
    return (
      <header className={navbarCss.header_container}>
        <nav className={navbarCss.container}>
          <div className={navbarCss.logo_container}>
            <img src={logo} height="50px" width="50px" alt="" />
          </div>
          <div className={navbarCss.links_container}>
            <a href="#" className={navbarCss.link}>
              Home
            </a>
            <a href="#" className={navbarCss.link}>
              About Us
            </a>
            <a href="#" className={navbarCss.link}>
              Events
            </a>
            <a href="#" className={navbarCss.link}>
              Sponsors
            </a>
          </div>
          <div className={navbarCss.ham_and_usrimg_container}>
            <div className={navbarCss.usrimg_container}>
              <img
                src={usrlogo}
                height="40px"
                width="40px"
                onClick={handleUserLogoClick}
                alt=""
              />
            </div>
            <div className={navbarCss.ham_container}>
              <Hamburger size={20} onToggle={handleMenuToggle} />
            </div>
          </div>
        </nav>
        {userDropdownOpen && (
          <div className={navbarCss.card_container} ref={cardContainerRef}>
            <div className={navbarCss.dropdown_img_container}>
              <img src={usrlogo} height="100px" width="100px" alt="" />
            </div>
            <div className={navbarCss.dropdown_details_and_btn_container}>
              <div className={navbarCss.dropdown_details_container}>
                <div className={navbarCss.username_txt}>John Lorem Wick</div>
                <div className={navbarCss.email_txt}>xyz@gmail.com</div>
              </div>
              <div className={navbarCss.dropdown_btn_container}>
                <div>
                  <a className={navbarCss.btn_edit} href="#">
                    <i class="fa-solid fa-pen-to-square"></i> Edit Profile
                  </a>
                </div>
                <div>
                  <a className={navbarCss.btn_logout} href="#">
                    <i class="fa-solid fa-right-from-bracket"></i> Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {menuOpen && (
          <nav className={navbarCss.dropdown_container}>
            <div className={navbarCss.dropdown_links_container}>
              <a href="#" className={navbarCss.dropdown_link}>
                Home
              </a>
              <a href="#" className={navbarCss.dropdown_link}>
                About Us
              </a>
              <a href="#" className={navbarCss.dropdown_link}>
                Events
              </a>
              <a href="#" className={navbarCss.dropdown_link}>
                Sponsors
              </a>
            </div>
          </nav>
        )}
      </header>
    );
  }
  //if user is not signed in
  else {
    return (
      <header>
        <nav className={navbarCss.container}>
          <div className={navbarCss.logo_container}>
            <img src={logo} height="50px" width="50px" alt="" />
          </div>
          <div className={navbarCss.links_container}>
            <a href="#" className={navbarCss.link}>
              Home
            </a>
            <a href="#" className={navbarCss.link}>
              About Us
            </a>
            <a href="#" className={navbarCss.link}>
              Events
            </a>
            <a href="#" className={navbarCss.link}>
              Sponsors
            </a>
          </div>
          <div className={navbarCss.ham_and_usrimg_container}>
            <div className={navbarCss.usrimg_container}>
              <img
                src={usrlogo}
                height="40px"
                width="40px"
                title="Signup/Login"
                alt=""
              />
            </div>
            <div className={navbarCss.ham_container}>
              <Hamburger size={20} onToggle={handleMenuToggle} />
            </div>
          </div>
        </nav>
        {menuOpen && (
          <nav className={navbarCss.dropdown_container}>
            <div className={navbarCss.dropdown_links_container}>
              <a href="#" className={navbarCss.dropdown_link}>
                Home
              </a>
              <a href="#" className={navbarCss.dropdown_link}>
                About Us
              </a>
              <a href="#" className={navbarCss.dropdown_link}>
                Events
              </a>
              <a href="#" className={navbarCss.dropdown_link}>
                Sponsors
              </a>
            </div>
          </nav>
        )}
      </header>
    );
  }
};

export default Navbar;
