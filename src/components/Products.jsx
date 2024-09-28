/* eslint-disable no-unused-vars */
import React from "react";
import { products } from "../data";
import ProductSlider from "./ProductSlider";

const Products = () => {
  const { title, subtitle } = products;

  return (
    <section className="section text-center">
      <div className="container mx-auto">
        <div>
          <p className="title text-3xl">{title}</p>
          <p className="max-w-[639px] mx-auto mb-[50px] lg:mb-[70px] text-xl">
            {subtitle}
          </p>
        </div>
        <ProductSlider />
      </div>
    </section>
  );
};

export default Products;
