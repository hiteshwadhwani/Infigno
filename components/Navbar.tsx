"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import NavItems from "./ui/NavItems";
import {useScrollToBottom} from 'react-scroll-to-bottom'

const Navbar = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth', // You can use 'auto' for instant scrolling
    });
  }
  return (
    <header className="flex flex-row justify-center  md:justify-between items-center md:mx-8 xl:mx-24 p-4 ">
      <div className="relative h-[40px] w-[140px]">
        <Image src={"/images/logo.svg"} fill alt="logo" />
      </div>
      <div className="hidden md:flex flex-row items-center gap-x-6 lg:gap-x-12 xl:gap-x-3">
        {/* <NavItems>Home</NavItems>
        <NavItems>For Students</NavItems>
        <NavItems>For Institutions</NavItems>
        <NavItems>About us</NavItems> */}
        
        <NavItems>For more details : </NavItems>
        <Button onClick={scrollToBottom} className="px-[20px] py-[12px] bg-[#0047AB] text-white hover:bg-[#0047AB] hover:opacity-75 transition rounded-[10px]">
          Contact us
        </Button>
      </div>
    </header>
  );
};
export default Navbar;
