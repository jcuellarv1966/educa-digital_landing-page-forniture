/* eslint-disable no-unused-vars */
import React from "react";
import { hero } from "../data";
import { banner } from "../data";
import Stats from "./Stats";

const Hero = () => {
  // const { title, subtitle, buttonText } = hero;
  const { titlePart1, titlePart2, subtitle, textBtn } = banner;

  return (
    <section className="h-full max-h-[850px] w-full bg-hero bg-right lg:bg-center bg-cover bg-no-repeat contrast-75 text-white pt-[225px] pb-[254px] relative mb-12 lg:mb-28">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full relative -space-x-48 lg:-space-x-24">
          <div className="text-white flex-1 z-10 pl-6 lg:pl-0">
            <h1
              className="h1 text-white mb-8 [text-shadow:_0_5px_0_rgb(0_0_0_/_90%)]"
            >
              {titlePart1} <br />
              <span className="text-primary-200 [text-shadow:_0_5px_0_rgb(0_0_0_/_90%)]">{titlePart2}</span>
            </h1>
            <p
              className="max-w-[415px] text-body-md lg:text-body-lg mb-8 [text-shadow:_0_3px_0_rgb(0_0_0_/_90%)] font-extrabold"
            >
              {subtitle}
            </p>
            <button
              className="btn btn-sm lg:btn-lg btn-secondary rounded-lg bg-red-500 text-white hover:bg-red-800"
            >
              {textBtn}
            </button>
          </div>
          {/* image */}
          <div
            className="bg-purple-50 w-full h-full bg-banner bg-cover bg-right lg:bg-center bg-no-repeat flex-1"
            data-aos="fade-right"
            data-aos-delay="900"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
