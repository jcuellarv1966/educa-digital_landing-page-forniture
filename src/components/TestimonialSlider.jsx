/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { testimonial } from "../data";

const TestimonialSlider = () => {
  return (
    <Swiper
      className="testimonialSlider"
      navigation={true}
      autoplay={true}
      modules={[Navigation, Autoplay]}
    >
      {testimonial.persons.map((person, index) => {
        const { avatar, name, occupation, message } = person;
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col min-h-[275px]">
              <div className="flex items-center gap-x-5 mb-3">
                <img src={avatar.type} alt="" />
                <div>
                  <div className="text-xl font-semibold">{name}</div>
                  <div className="text-gray-500">{occupation}</div>
                </div>
              </div>
              <div className="text-xl max-w-[570px]">{message}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
