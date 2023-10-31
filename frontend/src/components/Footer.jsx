import React from "react";
import o2logo from "../images/logo.png";
import footerCss from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={footerCss.footer_container}>
      <div className={footerCss.footer_top}>
        <div className={footerCss.content_section_1}>
          <img src={o2logo} height="200" width="200" />
        </div>
        <div className={footerCss.content_section_2}>
          <div className={footerCss.section_title}>Get in touch</div>
          <div className={footerCss.section_subtitle}>Email</div>
          <div className={footerCss.section_desc}>
            <a
              className={footerCss.email_link}
              href="mailto: o2thefest@bhavans.ac.in"
            >
              o2thefest@bhavans.ac.in
            </a>
          </div>
        </div>
        <div className={footerCss.content_section_3}>
          <div className={footerCss.section_title}>Follow Us</div>
          <div className={footerCss.section_subtitle}>Social Media</div>
          <div className={footerCss.section_desc}>
            <a
              className={footerCss.social_icons}
              href="https://www.instagram.com/o2thefest.official/"
              target="_blank"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              className={footerCss.social_icons}
              href="https://www.instagram.com/o2thefest.official/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              className={footerCss.social_icons}
              href="https://www.instagram.com/o2thefest.official/"
              target="_blank"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
        <div className={footerCss.content_section_4}>
          <div className={footerCss.section_title}>Where we are</div>
          <div className={footerCss.section_subtitle}>Address</div>
          <div className={footerCss.section_desc}>
            Bhavan’s College JP Rd, <br />
            Old D N Nagar, Munshi Nagar, <br /> Andheri West, Mumbai,
            Maharashtra 400058
          </div>
        </div>
      </div>
      <hr />
      <div className={footerCss.footer_bottom}>
        &copy; 2023 O<sub>2</sub> The Fest
      </div>{" "}
    </div>
  );
};

export default Footer;
