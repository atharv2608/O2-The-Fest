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
import GP from '../components/GalleryPage.module.css';

import Gallery from '../components/Gallery';
import img1 from "../images/gallery/img1.jpg";
import img2 from "../images/gallery/img2.jpg";
import img3 from "../images/gallery/img3.jpg";
import img4 from "../images/gallery/img4.jpg";
import img5 from "../images/gallery/img5v.jpg";
import img6 from "../images/gallery/img6v.jpg";

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
          <img src={img6} />
        </SwiperSlide>


        <SwiperSlide className={GP.slide}>
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
          <img src={img6} />
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
          <img src={img6} />
        </SwiperSlide>


        <SwiperSlide className={GP.slide}>
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
          <img src={img6} />
        </SwiperSlide>
      </Swiper>
      <div className={GP.btnSection} onClick={handleClick}>
        <button>More</button>
      </div>
      {isShown ? (
        <div ref={ref}>
          <Gallery />
        </div>
      ) : null}
    </>
  )
}

export default GalleryPage;