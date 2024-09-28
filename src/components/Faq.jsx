// eslint-disable-next-line no-unused-vars
import React from "react";
import { faq } from "../data";
import Accordion from "./Accordion";

const Faq = () => {
  const { icon, title, accordions } = faq;

  return (
    <section className="section pt-[8px] lg:pt-[16px] mb-[8px] lg:mb-0">
      <div className="max-w-[768px] mx-auto lg:bg-faq bg-no-repeat bg-custom bg-center lg:h-[1160px] lg:pt-4">
        {/* section title */}
        <div
          className="section-title-group justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0"
        >
          <img className="lg:hidden" src={icon} alt="" />
          <h2 className="h2 section-title lg:mt-[16px] lg:mb-[16px]">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        {/* accordion list */}
        <div
          className="flex flex-col gap-y-2 px-4"
        >
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
