/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { newInStore } from "../data";

const NewItemsSlider = () => {
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      className="mySwiper"
    >
      {newInStore.products.map((product, index) => {
        return (
          <SwiperSlide className="max-w-[265px]" key={index}>
            <div className="relative">
              <img src={product.image.type} alt="" className="w-full h-2/3 contrast-75" />
              <div className="absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)]">
                {product.name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NewItemsSlider;
