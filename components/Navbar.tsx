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
    <div className="sticky top-0 z-50 shadow-[0px_0px_20px_0px_#0000001A]">
      <header className=" bg-[#FFFFFF]  flex flex-row justify-between items-center md:mx-8 xl:mx-24 p-2 xl:p-4 ">
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
        <div className="hidden md:flex flex-row items-center font-normal text-base gap-x-6 lg:gap-x-12 xl:gap-x-14">
          <NavItems>Home</NavItems>
          <NavItems>
            <div className="flex gap-[5px]">
              Programs{""}
              <Image
                src={"/arrow-down.svg"}
                height={12}
                width={12}
                alt="Down Arrow"
              />
            </div>
          </NavItems>
          <NavItems>About Us</NavItems>
          <NavItems>App</NavItems>
          <div className="flex gap-2.5 font-normal text-base items-center">
            <Button
              variant={"outline"}
              size={"lg"}
              className="rounded-[40px] gap-[5px] border-[#0047AB] border-2"
            >
              Login
              <Image
                src={"/arrow-down.svg"}
                height={12}
                width={12}
                alt="Down Arrow"
              />
            </Button>
            <Button
              size={"lg"}
              className="bg-[#0047AB] text-white hover:bg-[#0047AB] hover:opacity-75 transition rounded-[40px]"
            >
              Book Session
            </Button>
            {/* <a
            href="tel:+917208199462"
            className="px-[20px] py-[12px] bg-[#0047AB] text-white hover:bg-[#0047AB] hover:opacity-75 transition rounded-[10px]"
          >
            Contact us
          </a> */}
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
