import React, { useRef, useState } from 'react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFlip, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from '../components/Footer';
import GP from '../components/GalleryPage.module.css';

import Gallery from '../components/Gallery';
import PH4 from "../images/gallery/DSC00808.jpg";
import PH6 from "../images/gallery/DSC00884.jpg";
import PH5 from "../images/gallery/DSC00887.jpg";
import PH1 from "../images/gallery/DSC00951.jpg";
import PH2 from "../images/gallery/DSC00960.jpg";
import PH3 from "../images/gallery/DSC01083.jpg";

import PH9 from "../images/gallery/DSC00876.jpg";
import PH11 from "../images/gallery/DSC00991.jpg";
import PH10 from "../images/gallery/DSC01015.jpg";
import PH7 from "../images/gallery/DSC01111.jpg";
import PH8 from "../images/gallery/DSC01149.jpg";
import PH12 from "../images/gallery/IMG_1644.jpg";

const GalleryPage = () => {

  const [isShown, setIsShown] = useState(false);
  const ref = useRef(null);
  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <>
      <div className={GP.header}>
        <h1>What's Popin</h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        grabCursor={true}
        autoplay={{
          delay: 3500,
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
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className={GP.swiper}
      >

        <SwiperSlide className={GP.slide}>
          <img src={PH1} />
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH2} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH3} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH4} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH5} />
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH6} />{" "}
        </SwiperSlide>


        <SwiperSlide className={GP.slide}>
          <img src={PH1} />
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH2} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH3} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH4} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH5} />
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH6} />{" "}
        </SwiperSlide>

      </Swiper>
      <Swiper
        slidesPerView={1}
        spaceBetween={70}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        pagination={false}
        navigation={false}
        loop={true}
        rewind={true}
        EffectFlip={true}
        modules={[Autoplay, Pagination, Navigation, EffectFlip]}
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
        className={GP.swiper}
      >
        <SwiperSlide className={GP.slide}>
          <img src={PH7} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH8} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH9} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH10} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH11} />
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH12} />
        </SwiperSlide>

        <SwiperSlide className={GP.slide}>
          <img src={PH7} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH8} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH9} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH10} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH11} />
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH12} />
        </SwiperSlide>

        {/* <SwiperSlide className={GP.slide}>
          <img src={img1} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={img2} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={img3} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={img4} />{" "}
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide className={GP.slide}>
          <img src={PH1} />
        </SwiperSlide> */}
      </Swiper>
      <div className={GP.btnSection} onClick={handleClick}>
        <button>More</button>
      </div>
      {isShown ? (
        <div ref={ref}>
          <Gallery />
        </div>
      ) : null}
      <Footer />
    </>
  )
}

export default GalleryPage;
