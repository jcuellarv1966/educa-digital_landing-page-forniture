/* eslint-disable no-unused-vars */
import React from "react";
import { newInStore } from "../data";
import NewItemsSlider from "./NewItemsSlider";

const NewItems = () => {
  const { title, subtitle, link, icon } = newInStore;

  return (
    <section className="section relative overflow-hidden lg:min-h-[540px] mt-[64px] sm:mt-[64px] md:mt-[96px] lg:mt-[-160px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex md:flex-col items-baseline gap-x-6 mb-2 lg:mb-0">
            <h2 className="title max-w-[245px] lg:mt-[30px] lg:mb-[72px] font-extrabold text-[42px]">
              {title}
            </h2>
            <p className="max-w-[240px] sm:max-w-[720px] md:max-w-[360px] lg:max-w-[280px] lg:mb-12 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] ">{subtitle}</p>
            <div className="hidden lg:flex items-center">
              <a
                className="hover:border-b border-primary lg:items-center font-medium transition-all hover:text-blue-900 hover:font-extrabold"
                href="#"
              >
                {link}
              </a>
              <div className="text-3xl">{icon}</div>
            </div>
          </div>
          <div className="lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24">
            <NewItemsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
