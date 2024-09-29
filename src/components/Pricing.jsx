// eslint-disable-next-line no-unused-vars
import React from "react";
import { pricing } from "../data";
import PlanList from "./PlanList";

const Pricing = () => {
  const { icon, title, plans } = pricing;

  return (
    <section className="section pt-24" id="pricing">
      <div className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0">
        <img src={icon} alt="" />
        <h2 className="h2 section-title">
          {title} <span className="text-primary-200">.</span>
        </h2>
      </div>
      <PlanList plans={plans} />
    </section>
  );
};

export default Pricing;
