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
import "swiper/css/navigation";
// import required modules
import { EffectFlip, Autoplay, Pagination, Navigation } from "swiper/modules";

const Sponsors = () => {
  return (
    <div className={sponsorCss.sponsors_container}>
      <div className={sponsorCss.sponsors_container_1}>
        <div className={sponsorCss.sponsors_container_1_content}>
          <div className={sponsorCss.sponsor_title}>Our Sponsors</div>
          <div className={sponsorCss.sponsor_desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            dolorum autem deserunt officia a laboriosam culpa veniam totam harum
            unde veritatis odit in, cumque eos sunt quaerat. Earum, dicta nam?
            Accusamus deleniti ipsam doloribus pariatur quam ad dolores, cum
            molestiae in possimus excepturi sequi itaque ab cupiditate dolorum
            nobis molestias at, mollitia tempora sapiente? Est repellat velit
            eligendi magni? Asperiores. Accusamus voluptates architecto omnis
            vitae aut? Mollitia, itaque. Voluptate magnam libero suscipit qui,
            repellendus aliquid explicabo ipsam, consectetur mollitia quis
            provident quam exercitationem, vero repudiandae reprehenderit earum
            ex perferendis ab?
          </div>
        </div>
        <div className={sponsorCss.sponsors_img_content_container}>
          <Swiper
            effect={"flip"}
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
    </div>
  );
};

export default Sponsors;
