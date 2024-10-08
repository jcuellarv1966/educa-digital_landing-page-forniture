/* eslint-disable no-unused-vars */
import React from "react";
import { features } from "../data";

const Features = () => {
  const { title, subtitle, image, items } = features;

  return (
    <section className="section pt-24" id="who-we-are">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">
          <div className="flex-1 order-1 lg:-order-1">
            <img src={image.type} alt="" className="w-full h-2/3" />
          </div>
          <div className="flex-1 flex flex-col justify-start">
            <h2 className="title mt-[-12px] mb-[4px]">{title}</h2>
            <p className="subtitle text-justify text-[18px] mb-[6px]">{subtitle}</p>
            <div>
              {items.map((item, index) => {
                const { icon, title, subtitle } = item;
                return (
                  <div className="flex mb-2 lg:last:mb-0" key={index}>
                    <div className="text-2xl lg:text-3xl mr-4">{icon}</div>
                    <div>
                      <h4 className="text-base lg:text-xl font-semibold mb-1">
                        {title}
                      </h4>
                      <p className="text-justify">{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
