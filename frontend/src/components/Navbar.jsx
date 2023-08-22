<<<<<<< HEAD
import { React, useState, useEffect, useRef, useContext } from "react";
import navbarCss from "./Navbar.module.css";
=======
>>>>>>> 8c7a15e (aboutdel)
import { Twirl as Hamburger } from "hamburger-react";
import { React, useEffect, useRef, useState } from "react";
import logo from "../images/logo.png";
import myphoto from "../images/myphoto.jpeg";
<<<<<<< HEAD
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
=======
import usrlogo from "../images/userimg.png";
import navbarCss from "./Navbar.module.css";
>>>>>>> 8c7a15e (aboutdel)

const Navbar = () => {
  //front end logic starts
  const [menuOpen, setMenuOpen] = useState(false);
  const [userCardOpen, setUserCardOpen] = useState(false);
  const navigate=useNavigate();
  const handleLogin=()=>{
    navigate("/auth?mode=login")

  }
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setUserCardOpen(false);
  };

  const handleUserLogoClick = (event) => {
    event.stopPropagation();
    setUserCardOpen(!userCardOpen);
    setMenuOpen(false);
  };

  const headerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setUserCardOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  //front end logic ends

  //active tab logic would be done after applying routes

  // check here whether user signed in or not
  //new temporary sign up logic
  const authctx = useContext(AuthContext);
  


      return (
      <header className={navbarCss.header_container} ref={headerRef}>
        <nav className={navbarCss.container}>
          <div className={navbarCss.logo_container}>
            <NavLink to="/">
              {" "}
              <img src={logo} height="50px" width="50px" alt="" />
            </NavLink>
          </div>
          <div className={navbarCss.links_container}>
            <NavLink to="/"className={({ isActive }) =>
                isActive ? `${navbarCss.active} ${navbarCss.link}` : navbarCss.link
              } end>
              Home
<<<<<<< HEAD
            </NavLink>
            {/* <NavLink to="/events" className={`${navbarCss.link} ${navLinkHighlight}`}>
=======
            </a>
            <a href="#" className={navbarCss.link}>
>>>>>>> 8c7a15e (aboutdel)
              Events
            </NavLink> */}
            <NavLink to="/events"   className={({ isActive }) =>
                isActive ? `${navbarCss.active} ${navbarCss.link}` : navbarCss.link
              }>
              Events
            </NavLink>
            <NavLink to="/sponsers" className={({ isActive }) =>
                isActive ? `${navbarCss.active} ${navbarCss.link}` : navbarCss.link
              }>
              Sponsors
            </NavLink>
          </div>
          <div className={navbarCss.ham_and_usrimg_container}>
            {authctx.isLoggedIn&&
            <div className={navbarCss.usrimg_container}>
              <img
                className={navbarCss.profile_img}
                onClick={handleUserLogoClick}
                src={myphoto}
                height="40px"
                width="40px"
                alt=""
              />
            </div>
              }
            {!authctx.isLoggedIn&&
            <div className={navbarCss.usrimg_container}>
                       {/* this image should send user login form and sign up form */}
                        <img
                          className={navbarCss.profile_img}
                          onClick={handleLogin}
                          src={usrlogo}
                          height="40px"
                          width="40px"
                          title="Signup/Login"
                          alt=""
                        />
                      </div>
            }
            <div className={navbarCss.ham_container}>
              <Hamburger
                className={navbarCss.hamburger}
                onToggle={handleMenuToggle}
                toggled={menuOpen}
                size={20}
              />
            </div>

          </div>
        </nav>
        {userCardOpen && (
          <div className={navbarCss.card_container}>
            <div className={navbarCss.dropdown_img_container}>
              <img
                className={navbarCss.profile_img}
                src={myphoto}
                height="100px"
                width="100px"
                alt=""
              />
            </div>
            <div className={navbarCss.dropdown_details_and_btn_container}>
              <div className={navbarCss.dropdown_details_container}>
                <div className={navbarCss.username_txt}>John Wick</div>
                <div className={navbarCss.email_txt}>
                  mrwickbabayaga@gmail.com
                </div>
              </div>
              <div className={navbarCss.dropdown_btn_container}>
                <div>
                  <Link className={navbarCss.btn_edit} to="#">
                    <i class="fa-solid fa-pen-to-square"></i> Edit Profile
                  </Link>
                </div>
                <div>
                  <Link
                    className={navbarCss.btn_logout}
                    to="#"
                    onClick={() => {authctx.isLoggedIn=false
                      setUserCardOpen(false)}}
                  >
                    <i class="fa-solid fa-right-from-bracket"></i> Log Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {menuOpen && (
          <nav className={navbarCss.dropdown_container}>
            <div className={navbarCss.dropdown_links_container}>
              <NavLink to="/" className={navbarCss.dropdown_link}>
                Home
<<<<<<< HEAD
              </NavLink>
              <NavLink to="/events" className={navbarCss.dropdown_link}>
=======
              </a>
              <a href="#" className={navbarCss.dropdown_link}>
>>>>>>> 8c7a15e (aboutdel)
                Events
              </NavLink>
              <NavLink to="/sponsers" className={navbarCss.dropdown_link}>
                Sponsors
              </NavLink>
            </div>
          </nav>
        )}
      </header>
    );
<<<<<<< HEAD
  

=======
  }
  //if user is not signed in
  else {
    return (
      <header className={navbarCss.header_container} ref={headerRef}>
        <nav className={navbarCss.container}>
          <div className={navbarCss.logo_container}>
            <img src={logo} height="50px" width="50px" alt="" />
          </div>
          <div className={navbarCss.links_container}>
            <a href="#" className={navbarCss.link}>
              Home
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
              {/* this image should send user login form and sign up form */}
              <img
                className={navbarCss.profile_img}
                src={usrlogo}
                height="40px"
                width="40px"
                title="Signup/Login"
                alt=""
              />
            </div>
            <div className={navbarCss.ham_container}>
              <Hamburger
                size={20}
                onToggle={handleMenuToggle}
                toggled={menuOpen}
              />
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
>>>>>>> 8c7a15e (aboutdel)
};

export default Navbar;
