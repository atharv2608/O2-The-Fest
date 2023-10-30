import React from "react";
import Footer from "./Footer";
import sponsorCss from "./Sponsors.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import o2logo from "../images/o2-2.svg";
import cocacolalogo from "../images/coca-cola-4.svg";
import pepsilogo from "../images/pepsi-12.svg";
import spritelogo from "../images/sprite-3.svg";
import mcdonaldslogo from "../images/mcdonalds-7.svg";

//sponsor images import
import sponsorlogo1 from "../images/sponsors/sponsorlogo1.png";
import sponsorlogo2 from "../images/sponsors/sponsorlogo2.png";
import sponsorlogo3 from "../images/sponsors/sponsorlogo3.png";
import sponsorlogo4 from "../images/sponsors/sponsorlogo4.png";
import sponsorlogo5 from "../images/sponsors/sponsorlogo5.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/free-mode";

// import required modules
import {
  EffectFade,
  EffectCube,
  EffectFlip,
  Pagination,
  Autoplay,
  Navigation,
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
            effect={"cube"}
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            pagination={false}
            navigation={false}
            cubeEffect={{
              shadow: true,
              slideShadows: false,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[EffectCube, Autoplay, Pagination, Navigation]}
            className={sponsorCss.swiper}
          >
            <SwiperSlide className={sponsorCss.swiper_slide}>
              <img src={sponsorlogo1} />
            </SwiperSlide>

            <SwiperSlide className={sponsorCss.swiper_slide}>
              <img src={sponsorlogo2} />
            </SwiperSlide>
            <SwiperSlide className={sponsorCss.swiper_slide}>
              <img src={sponsorlogo3} />
            </SwiperSlide>
            <SwiperSlide className={sponsorCss.swiper_slide}>
              <img src={sponsorlogo4} />
            </SwiperSlide>
            <SwiperSlide className={sponsorCss.swiper_slide}>
              <img src={sponsorlogo5} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={sponsorCss.sponsors_container_2}>
        <div className={sponsorCss.past_sponsors_title}>Our Past Sponsors</div>
        <div className={sponsorCss.past_sponsors_img_container}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={false}
            navigation={false}
            loop={true}
            rewind={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className={sponsorCss.swiper2}
          >
            <SwiperSlide className={sponsorCss.swiper_slide2}>
              <img src={sponsorlogo1} />{" "}
            </SwiperSlide>
            <SwiperSlide className={sponsorCss.swiper_slide2}>
              <img src={sponsorlogo2} />{" "}
            </SwiperSlide>
            <SwiperSlide className={sponsorCss.swiper_slide2}>
              <img src={sponsorlogo3} />{" "}
            </SwiperSlide>
            <SwiperSlide className={sponsorCss.swiper_slide2}>
              <img src={sponsorlogo4} />{" "}
            </SwiperSlide>
            <SwiperSlide className={sponsorCss.swiper_slide2}>
              <img src={sponsorlogo5} />
            </SwiperSlide>
            <SwiperSlide className={sponsorCss.swiper_slide2}>
              <img src={spritelogo} />
            </SwiperSlide>
            <SwiperSlide className={sponsorCss.swiper_slide2}>
              <img src={cocacolalogo} />
            </SwiperSlide>

            <SwiperSlide className={sponsorCss.swiper_slide2}>
              <img src={sponsorlogo1} />{" "}
            </SwiperSlide>
            <SwiperSlide className={sponsorCss.swiper_slide2}>
              <img src={sponsorlogo2} />{" "}
            </SwiperSlide>
            <SwiperSlide className={sponsorCss.swiper_slide2}>
              <img src={sponsorlogo3} />{" "}
            </SwiperSlide>
            <SwiperSlide className={sponsorCss.swiper_slide2}>
              <img src={sponsorlogo4} />{" "}
            </SwiperSlide>
            <SwiperSlide className={sponsorCss.swiper_slide2}>
              <img src={sponsorlogo5} />
            </SwiperSlide>
            <SwiperSlide className={sponsorCss.swiper_slide2}>
              <img src={mcdonaldslogo} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sponsors;
