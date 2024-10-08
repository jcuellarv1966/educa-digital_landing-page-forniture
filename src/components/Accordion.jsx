/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const Acordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { question, answer } = accordion;

  return (
    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
      <div className="bg-white border rounded-sm">
        <div className="min-h-[68px] flex items-center justify-between px-[30px]">
          <h6 className="h6">{question}</h6>
          <div>
            {isOpen ? (
              <FaChevronCircleUp className="text-[20px] text-neutral-500" />
            ) : (
              <FaChevronCircleDown className="text-[20px] text-neutral-500" />
            )}
          </div>
        </div>
        <div
          className={`${
            isOpen
              ? "min-h-[260px] lg:min-h-[180px] overflow-hidden"
              : "min-h-0"
          } max-h-0 overflow-hidden flex justify-center transition-all px-[30px]`}
        >
          <div className="mt-0 text-justify">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Acordion;
