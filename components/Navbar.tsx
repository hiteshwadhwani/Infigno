"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import NavItems from "./ui/NavItems";
import { useScrollToBottom } from "react-scroll-to-bottom";

const Navbar = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <header className="flex flex-row justify-between items-center md:mx-8 xl:mx-24 p-2 xl:p-4 ">
      <div className="relative h-[40px] w-[140px]">
        <a href="/">
          <Image
            src={
              "https://uploads-ssl.webflow.com/63f5ff2d3827b085d542bb85/63f7a88567f036ab37603c94_Artboard%201%20copy%202.svg"
            }
            fill
            alt="logo"
          />
        </a>
      </div>
      <div className="flex flex-row items-center gap-x-6 lg:gap-x-12 xl:gap-x-3">
        {/* <NavItems>Home</NavItems>
        <NavItems>For Students</NavItems>
        <NavItems>For Institutions</NavItems>
        <NavItems>About us</NavItems> */}

        {/* <NavItems>For more details : </NavItems> */}
        <a
          href="tel:+917208199462"
          className="px-[20px] py-[12px] bg-[#0047AB] text-white hover:bg-[#0047AB] hover:opacity-75 transition rounded-[10px]"
        >
          Contact us
        </a>
      </div>
    </header>
  );
};
export default Navbar;
