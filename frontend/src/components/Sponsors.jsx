import React from "react";
import sponsorCss from "./Sponsors.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import o2logo from "../images/o2-2.svg";
import cocacolalogo from "../images/coca-cola-4.svg";
import pepsilogo from "../images/pepsi-12.svg";
import redbulllogo from "../images/logo-redbull.svg";
import spritelogo from "../images/sprite-3.svg";
import mcdonaldslogo from "../images/mcdonalds-7.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/free-mode";
// import required modules
import {
  EffectFade,
  EffectFlip,
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

const Sponsors = () => {
  return (
    <div className={sponsorCss.sponsors_container}>
      <div className={sponsorCss.sponsors_container_1}>
        <div className={sponsorCss.sponsors_container_1_content}>
          <div className={sponsorCss.sponsor_title}>Our Sponsors</div>
          <div className={sponsorCss.sponsor_desc}>
            We would like to extend our heartfelt gratitude to our esteemed
            partners for their generous support of the O2 Festival. Their
            unwavering commitment to our event has played a pivotal role in
            making this celebration of music and culture possible. We are deeply
            appreciative of the support from brands like Coca-Cola, Pepsi,
            McDonald's, and many more, who have joined hands with us to bring
            the O2 Festival to life. Their contribution has not only enriched
            the festival experience but also enabled us to create unforgettable
            memories for our attendees. We cherish our partnership with these
            remarkable brands and look forward to continued collaboration in the
            years to come. Thank you for making the O2 Festival a resounding
            success, and for being an integral part of our journey.
          </div>
        </div>
        <div className={sponsorCss.sponsors_img_content_container}>
          <Swiper
            effect={"flip"}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            modules={[EffectFlip, Autoplay, Pagination, Navigation]}
            className={sponsorCss.swiper}
          >
            <SwiperSlide className={sponsorCss.swiper_slide}>
              <img src={cocacolalogo} />
            </SwiperSlide>
            <SwiperSlide className={sponsorCss.swiper_slide}>
              <img src={o2logo} />
            </SwiperSlide>
            <SwiperSlide className={sponsorCss.swiper_slide}>
              <img src={pepsilogo} />
            </SwiperSlide>

            <SwiperSlide className={sponsorCss.swiper_slide}>
              <img src={spritelogo} />
            </SwiperSlide>
            <SwiperSlide className={sponsorCss.swiper_slide}>
              <img src={mcdonaldslogo} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={sponsorCss.sponsors_container_2}>
        <div className={sponsorCss.past_sponsors_title}></div>
        <div className={sponsorCss.past_sponsors_img_container}></div>
      </div>
    </div>
  );
};

export default Sponsors;
