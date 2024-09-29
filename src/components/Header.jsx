/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/img/logo.png";
import { header } from "../data";
import { navigation } from "../data";
import NavMobile from "./NavMobile";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  const { btnLoginText, btnSignupText } = header;

  return (
    <header
      className={`${
        isActive ? "bg-neutral-500 py-[16px]" : "bg-transparent py-[20px]"
      } fixed max-w-[1440px] left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[60px] z-30 transition-all duration-300`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img className="h-6 lg:h-8" src={Logo} alt="" />
          </a>
          {/* nav */}
          <nav className="hidden md:flex">
            <ul className="md:flex md:gap-x-6">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="capitalize text-white hover:border-b transition-all text-[13px]"
                      href={item.url}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="hidden lg:flex space-x-4">
            <button className="btn btn-sm text-white hover:text-primary-200 transition">
              {btnLoginText}
            </button>
            <button className="btn btn-sm btn-primary">{btnSignupText}</button>
          </div>
          <li className="flex items-center">
            <a
              className={
                (isActive
                  ? "lg:text-white lg:hover:text-green-400 text-white hover:text-green-400"
                  : "text-white hover:text-green-600") +
                " px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              }
              href="https://www.whatsapp.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              className={
                (isActive
                  ? "lg:text-white lg:hover:text-green-400 text-white hover:text-green-600"
                  : "text-white hover:text-green-600") +
                " px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              }
              href="https://www.facebook.com/?locale=es_LA"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              className={
                (isActive
                  ? "lg:text-white lg:hover:text-green-600 text-white hover:text-green-600"
                  : "text-white hover:text-green-600") +
                " px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              }
              href="https://www.instagram.com/educadigital1966/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              className={
                (isActive
                  ? "lg:text-white lg:hover:text-green-600 text-white hover:text-green-600"
                  : "text-white hover:text-green-600") +
                " px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              }
              href="https://x.com/educadigital66"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              className={
                (isActive
                  ? "lg:text-white lg:hover:text-green-600 text-white hover:text-green-600"
                  : "text-white hover:text-green-600") +
                " px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              }
              href="https://www.youtube.com/channel/UCyk9HpIcbQcQ9RcsF3Hwksw"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
          </li>
          {/* menu icon */}
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="md:hidden text-2xl lg:text-3xl text-white cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          {/* nav mobile */}
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
