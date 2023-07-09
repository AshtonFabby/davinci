"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SlideData from "./slide_data";

const Slides = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-min "
      >
        <SwiperSlide>
          <SlideData
            imgUrl="/images/lui.png"
            name="Luisa Matumona"
            description="A minha experiencia com a escola primaria tem sido incrivel.O meu filho está a prosper e os professores estão sempre dispostos a ir além para ajudá-lo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideData
            imgUrl="/images/lui.png"
            name="Luisa Matumona"
            description="A minha experiencia com a escola primaria tem sido incrivel.O meu filho está a prosper e os professores estão sempre dispostos a ir além para ajudá-lo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideData
            imgUrl="/images/lui.png"
            name="Luisa Matumona"
            description="A minha experiencia com a escola primaria tem sido incrivel.O meu filho está a prosper e os professores estão sempre dispostos a ir além para ajudá-lo."
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slides;
