/* eslint-disable no-unused-vars */
import React from "react";
import { newsletter } from "../data";

const Newsletter = () => {
  const { title, subtitle, placeholder, buttonText } = newsletter;

  return (
    <section className="section bg-newsletter contrast-100 min-h-[490px] sm:mt-[48px] md:mt-[64px] lg:mt-[-400px] mt-[72px] pt-24 z-10" id="contact-us">
      <div className="container mx-auto flex justify-center lg:justify-end">
        <div className="w-full max-w-[558px] text-center lg:text-left text-white">
          <h2 className="text-[40px] font-extrabold max-w-[520px] mx-auto lg:mx-0 mb-5 leading-normal [text-shadow:_0_5px_0_rgb(0_0_0_/_90%)] text-gray-50 z-20">
            {title}
          </h2>
          <p className="text-[24px] font-extrabold mb-10 [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)] text-gray-100">{subtitle}</p>
          <div className="flex flex-col lg:flex-row gap-[22px]">
            <input
              className=" h-[60px] px-6 outline-none placeholder:text-gray-400 text-gray-600 rounded-lg lg:flex-1"
              type="text"
              placeholder={placeholder}
            />
            <button className="bg-primary h-[60px] hover:bg-green-900 px-7 rounded-lg font-medium text-xl transition-all">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
